import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FrontPageComponent } from './front-page/front-page.component';
import { InputDetailsComponent } from './front-page/input-details/input-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DonateComponent } from './front-page/donate/donate.component';
import { FooterComponent } from './footer/footer.component';
import { DialogPopupComponent } from './header/dialog-popup/dialog-popup.component';
import { ItemsComponent } from './query/items/items.component';
import { HomesComponent } from './query/homes/homes.component';
import { ItemCardComponent } from './query/items/item-card/item-card.component';
import { ImageSliderComponent } from './query/image-slider/image-slider.component';
import { environment } from 'src/environments/environment';
import { RentItemComponent } from './submit/rent-item/rent-item.component';
import { DateWindowComponent } from './submit/rent-item/date-window/date-window.component';
import { DetailedItemComponent } from './query/items/detailed-item/detailed-item.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { DialogAccountComponent } from './header/dialog-account/dialog-account.component';
import { BookingCardComponent } from './query/items/booking-card/booking-card.component';
import { SendMessagePopupComponent } from './query/items/send-message-popup/send-message-popup.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageComponent,
    InputDetailsComponent,
    DonateComponent,
    FooterComponent,
    DialogPopupComponent,
    ItemsComponent,
    HomesComponent,
    ItemCardComponent,
    ImageSliderComponent,
    RentItemComponent,
    DateWindowComponent,
    DetailedItemComponent,
    DialogAccountComponent,
    BookingCardComponent,
    SendMessagePopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    CommonModule,
    GoogleMapsModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
    MatPasswordStrengthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
