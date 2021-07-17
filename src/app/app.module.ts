import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserpostComponent } from './userpost/userpost.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserimageComponent } from './userimage/userimage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { DatePipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    UserpostComponent,
    UserlistComponent,
    UserimageComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    AngularMyDatePickerModule,
    ToastrModule.forRoot()
    

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
