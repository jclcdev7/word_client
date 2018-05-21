import { Component, OnChanges, Input } from '@angular/core';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'country-comms',
  templateUrl: './comms.component.html',
  styleUrls: ['./comms.component.css']
})
export class CommsComponent implements OnChanges {
   comms: Array<any>;
   @Input() country: string;

  constructor(private service: CountryService) { }

  ngOnChanges() {
    if (this.country) {
       this.service.getComms(this.country).subscribe(comms => this.comms = comms);
    }
  }

}
