import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

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
  markerPosition: google.maps.LatLngLiteral;
  zoom = 14;

  // for radio buttons in timings
  advanceNotice: string;
  notices: string[] = ['Same Day', '1 Day', '2 Days', '3 Days'];

  // for date windows in Timing
  windows = [1];

  constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.detailsFormGroup = this.formBuilder.group({
      nameCtrl: ['', Validators.required],
      // photoCtrl: ['', Validators.required]
    });
    this.locationFormGroup = this.formBuilder.group({
      locationCtrl: ['', Validators.required]
      // markerCtrl: ['', customValidator]
    });
    this.describeFormGroup = this.formBuilder.group({
      describeCtrl: ['', Validators.required]
    });
    this.timingsFormGroup = this.formBuilder.group({
      noticeTimeCtrl: ['', Validators.required],
      fromTimeCtrl: ['', Validators.required],
      toTimeCtrl: ['', Validators.required]
    });
    this.moneyFormGroup = this.formBuilder.group({
      priceCtrl: ['', Validators.required],
      depositCtrl: [''],
      interacCtrl: ['', [Validators.required, Validators.email]]
    });
  }

  // onFileSelected() {
  //   const inputNode: any = document.querySelector('#file');

  //   if (typeof (FileReader) !== 'undefined') {
  //     const reader = new FileReader();

  //     reader.onload = (e: any) => {
  //       this.srcResult = e.target.result;
  //     };

  //     reader.readAsArrayBuffer(inputNode.files[0]);
  //   }

  //   console.log(this.srcResult);
  // }

  addMarker(event: google.maps.IconMouseEvent) {
    // TODO: get placeId
    // event.stop();
    this.markerPosition = event.latLng.toJSON();
  }

  addMoreWindows() {
    this.windows.push(this.windows[-1] + 1);
  }

  submitStepper() {
    if (this.detailsFormGroup.valid
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
                InteracEmail: this.moneyFormGroup.value.interacCtrl
              }
            })
            .then((docRef) => {
              console.log(`Successfully posted with id ${docRef.id}`);
            })
            .catch((error) => {
              console.log(`The following error occured ${error}`);
            });
            // console.log(this.detailsFormGroup.value.nameCtrl);
            // do firestore stuff, success routing
    } else {
      console.log(`Form not valid`);
    }


  }
}
