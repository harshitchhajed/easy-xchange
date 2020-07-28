import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';

import { FrontPageComponent } from './front-page/front-page.component';
import { InputDetailsComponent } from './front-page/input-details/input-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonateComponent } from './front-page/donate/donate.component';
import { FooterComponent } from './footer/footer.component';
import { DialogPopupComponent } from './header/dialog-popup/dialog-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageComponent,
    InputDetailsComponent,
    DonateComponent,
    FooterComponent,
    DialogPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
