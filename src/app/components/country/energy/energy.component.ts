import { Component, OnChanges, Input } from '@angular/core';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'country-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent implements OnChanges {
   energy: Array<any>;
   @Input() country: string;

   constructor(private service: CountryService) { }

   ngOnChanges() {
      if (this.country) {
         this.service.getEnergy(this.country).subscribe(energy => this.energy = energy);
      }
  }

}
