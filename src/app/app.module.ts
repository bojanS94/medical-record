import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientsComponent } from './components/patients/patients.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    FilterPipe,
    PhoneFormatPipe,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
