import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompanyDataComponent } from './company-data/company-data.component';
import { PeopleDataComponent } from './people-data/people-data.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DisplayAreaComponent } from './display-area/display-area.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDataComponent,
    PeopleDataComponent,
    SearchBarComponent,
    DisplayAreaComponent
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
