import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Array<any>;

  constructor(private service: CountriesService) { }

  ngOnInit() {
    this.service.get().subscribe(countries => this.countries = countries);
  }

}
