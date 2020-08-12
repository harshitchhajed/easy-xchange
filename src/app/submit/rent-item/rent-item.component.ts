import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

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
  // srcResult: any;

  // For Google Maps in location
  center = {lat: 49.26372754901676, lng: -123.20738746163161};
  markerOptions = {draggable: true};
  markerPosition: google.maps.LatLngLiteral = null;
  zoom = 14;

  // for radio buttons in timings
  advanceNotice: string;
  notices: string[] = ['Same Day', '1 Day', '2 Days', '3 Days'];
  valids = [true];

  // for date windows in Timing
  windows = [1];

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
      toTimeCtrl: [null, Validators.required],
      windowsCtrl: [null]
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
    this.valids.push(true);
  }

  submitStepper() {

    if (this.markerPosition === null) {
      alert('Pin a location on the map in the Location Section!');
    } else if (this.detailsFormGroup.valid
      && this.locationFormGroup.valid
      && this.describeFormGroup.valid
      && this.timingsFormGroup.valid
      && this.moneyFormGroup.valid) {

      this.firestore.collection('/items').add({
        name: this.detailsFormGroup.value.nameCtrl,
        location: this.locationFormGroup.value.locationCtrl,
        description: this.describeFormGroup.value.describeCtrl,
        time: {
          notice: this.timingsFormGroup.value.noticeTimeCtrl,
          pickupFrom: this.timingsFormGroup.value.fromTimeCtrl,
          pickupUntil: this.timingsFormGroup.value.toTimeCtrl
        },
        money: {
          ratePerHour: this.moneyFormGroup.value.priceCtrl,
          deposit: this.moneyFormGroup.value.depositCtrl,
          interacEmail: this.moneyFormGroup.value.interacCtrl
        }
      })
        .then((docRef) => {
          console.log(`Successfully posted with id ${docRef.id}`);
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
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      const filePath = `userid/${i}`;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);
      console.log(`done-${i}`);
    }
  }

  maintainValids(index: number, event: boolean) {
    this.valids[index] = event;
  }

}
