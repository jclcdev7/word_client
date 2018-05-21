import { Component, OnChanges, Input } from '@angular/core';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'country-gov',
  templateUrl: './gov.component.html',
  styleUrls: ['./gov.component.css']
})
export class GovComponent implements OnChanges {
   gov: Array<any>;
   @Input() country: string;

   constructor(private service: CountryService) { }

   ngOnChanges() {
      if (this.country) {
         this.service.getGov(this.country).subscribe(gov => this.gov = gov);
      }
   }
}
