import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompanyDataComponent } from './company-data/company-data.component';
import { PeopleDataComponent } from './people-data/people-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDataComponent,
    PeopleDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
