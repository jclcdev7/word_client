import { Component, OnChanges, Input } from '@angular/core';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'country-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.css']
})
export class EconomyComponent implements OnChanges {
   economy: Array<any>;
   @Input() country: string;

   constructor(private service: CountryService) { }

   ngOnChanges() {
      if (this.country) {
         this.service.getEconomy(this.country).subscribe(economy => this.economy = economy);
      }
   }
}
