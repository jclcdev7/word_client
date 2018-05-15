import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from './services/countries.service';
import { CountryService } from './services/country.service';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';
import { IntroComponent } from './components/country/intro/intro.component';
import { GeographyComponent } from './components/country/geography/geography.component';
import { PeopleComponent } from './components/country/people/people.component';
import { IssuesComponent } from './components/country/issues/issues.component';
import { MilsecComponent } from './components/country/milsec/milsec.component';
import { TransportComponent } from './components/country/transport/transport.component';
import { TerrorComponent } from './components/country/terror/terror.component';
import { CommsComponent } from './components/country/comms/comms.component';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponent,
    IntroComponent,
    GeographyComponent,
    PeopleComponent,
    IssuesComponent,
    MilsecComponent,
    TransportComponent,
    TerrorComponent,
    CommsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CountriesService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
