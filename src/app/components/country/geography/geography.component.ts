import { Component, Input, OnChanges } from '@angular/core';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'country-geography',
  templateUrl: './geography.component.html',
  styleUrls: ['./geography.component.css']
})
export class GeographyComponent implements OnChanges {
   geo: Array<any>;
   @Input() country: string;

  constructor(private service: CountryService) { }

  ngOnChanges() {
     if (this.country) {
        this.service.getGeography(this.country).subscribe(geo => this.geo = geo);
     }
  }

}
