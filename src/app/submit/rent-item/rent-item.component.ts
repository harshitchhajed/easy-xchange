import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { generate } from 'rxjs';

@Component({
  selector: 'app-rent-item',
  templateUrl: './rent-item.component.html',
  styleUrls: ['./rent-item.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {showError: true}
  }]
})
export class RentItemComponent implements OnInit {
  detailsFormGroup: FormGroup;
  locationFormGroup: FormGroup;
  describeFormGroup: FormGroup;
  timingsFormGroup: FormGroup;
  moneyFormGroup: FormGroup;

  // saved photos event
  photosEvent: any = null;

  // For Google Maps in location
  center = {lat: 49.26372754901676, lng: -123.20738746163161};
  markerOptions = {draggable: true};
  markerPosition: google.maps.LatLngLiteral = null;
  zoom = 14;

  // for radio buttons in timings
  advanceNotice: string;
  notices: string[] = ['Same Day', '1 Day', '2 Days', '3 Days'];

  // for date windows in Timing
  windows = [1];
  windowData = [{validity: true, startDate: null, endDate: null}];

  constructor(private formBuilder: FormBuilder,
              private firestore: AngularFirestore,
              private storage: AngularFireStorage) {}

  ngOnInit() {
    this.detailsFormGroup = this.formBuilder.group({
      nameCtrl: [null, Validators.required],
      // photoCtrl: ['', Validators.required]
    });
    this.locationFormGroup = this.formBuilder.group({
      locationCtrl: [null, Validators.required]
    });
    this.describeFormGroup = this.formBuilder.group({
      describeCtrl: [null, Validators.required]
    });
    this.timingsFormGroup = this.formBuilder.group({
      noticeTimeCtrl: [null, Validators.required],
      fromTimeCtrl: [null, Validators.required],
      toTimeCtrl: [null, Validators.required]
    });
    this.moneyFormGroup = this.formBuilder.group({
      priceCtrl: [null, Validators.required],
      depositCtrl: [null],
      interacCtrl: [null, [Validators.required, Validators.email]]
    });

  }

  addMarker(event: google.maps.IconMouseEvent) {
    // TODO: get placeId
    // event.stop();
    this.markerPosition = event.latLng.toJSON();
  }

  addMoreWindows() {
    this.windows.push(this.windows[-1] + 1);
    this.windowData.push({validity: true, startDate: null, endDate: null});
  }

  isAvailable(loopDay: Date) {
    for (const dateWindow of this.windowData) {
      if ((dateWindow.startDate <= loopDay) && (loopDay <= dateWindow.endDate)) {
        return true;
      }
    }

    return false;
  }

  generateTimeAvailabilty() {

    const availability = [];

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let threeMonthsFuture: Date;
    if (now.getMonth() + 3 > 12) {
      threeMonthsFuture = new Date(now.getFullYear() + 1, now.getMonth() + 3 - 12, now.getDate());
    } else {
      threeMonthsFuture = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());
    }

    // 86400000 (1000*60*60*24) is number of milliseconds in one day
    for (let loopTime = today.getTime(); loopTime < threeMonthsFuture.getTime(); loopTime += 86400000) {
      const loopDay = new Date(loopTime);
      availability.push({
        [loopDay.toLocaleDateString()]: this.isAvailable(loopDay)
      });
    }

    return availability;

  }

  submitStepper() {
    if (this.markerPosition === null) {
      alert('Pin a location on the map in the Location Section!');
    } else if (this.detailsFormGroup.valid
      && this.locationFormGroup.valid
      && this.describeFormGroup.valid
      && this.timingsFormGroup.valid
      && this.moneyFormGroup.valid) {

      const generatedAvailability = this.generateTimeAvailabilty();

      this.firestore.collection('/items').add({
        name: this.detailsFormGroup.value.nameCtrl,
        location: this.locationFormGroup.value.locationCtrl,
        description: this.describeFormGroup.value.describeCtrl,
        time: {
          notice: this.timingsFormGroup.value.noticeTimeCtrl,
          pickupFrom: this.timingsFormGroup.value.fromTimeCtrl,
          pickupUntil: this.timingsFormGroup.value.toTimeCtrl,
          availability: generatedAvailability
        },
        money: {
          ratePerHour: this.moneyFormGroup.value.priceCtrl,
          deposit: this.moneyFormGroup.value.depositCtrl,
          interacEmail: this.moneyFormGroup.value.interacCtrl
        }
      })
        .then((docRef) => {
          console.log(`Successfully posted with id ${docRef.id}`);
          for (let i = 0; i < this.photosEvent.target.files.length; i++) {
            const file = this.photosEvent.target.files[i];
            const filePath = `${docRef.id}/${i}`;
            const ref = this.storage.ref(filePath);
            const task = ref.put(file);
            console.log(`done-${i}`);
          }
          // add to users collection, success routing
        })
        .catch((error) => {
          console.log(`The following error occured ${error}`);
        });
    } else {
      console.log(this.timingsFormGroup.controls.windowsCtrl);
      alert('Invalid form entries!');
    }
  }

  uploadPhotos(event: any) {
    this.photosEvent = event;
  }

  maintainWindowDates(index: number, event: any) {
    this.windowData[index] = event;
  }

  validateAllWindows(group: FormGroup): {[s: string]: boolean} {
    return null;
  }

}
