import { Component, OnChanges, Input } from '@angular/core';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'country-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.css']
})
export class TerrorComponent implements OnChanges {
   terror: Array<any>;
   @Input() country: string;

   constructor(private service: CountryService) { }

  ngOnChanges() {
     if (this.country) {
       this.service.getTerror(this.country).subscribe(terror => this.terror = terror);
     }
  }

}
