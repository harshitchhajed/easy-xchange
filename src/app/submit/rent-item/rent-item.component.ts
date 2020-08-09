import { Component, OnInit, ViewChild } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

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
  center = {lat: 49.26372754901676, lng: -123.20738746163161};
  markerOptions = {draggable: false};
  markerPosition: google.maps.LatLngLiteral;
  zoom = 14;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.detailsFormGroup = this.formBuilder.group({
      nameCtrl: ['', Validators.required],
      photoCtrl: ['', Validators.required]
    });
    this.locationFormGroup = this.formBuilder.group({
      locationCtrl: ['', Validators.required]
    });
    this.describeFormGroup = this.formBuilder.group({
      describeCtrl: ['', Validators.required]
    });
    this.timingsFormGroup = this.formBuilder.group({
      timeCtrl: ['', Validators.required]
    });
    this.moneyFormGroup = this.formBuilder.group({
      priceCtrl: ['', Validators.required]
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

  addMarker(event: google.maps.MouseEvent) {
    this.markerPosition = event.latLng.toJSON();
    console.log(this.markerPosition);
  }
}
