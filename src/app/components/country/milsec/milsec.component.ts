import { Component, OnChanges, Input } from '@angular/core';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'country-milsec',
  templateUrl: './milsec.component.html',
  styleUrls: ['./milsec.component.css']
})
export class MilsecComponent implements OnChanges {
   milsec: Array<any>;
   @Input() country: string;

  constructor(private service: CountryService) { }

  ngOnChanges() {
     if (this.country) {
        this.service.getMilsec(this.country).subscribe(milsec => this.milsec = milsec);
     }
  }

}
