import { Component, OnChanges, Input } from '@angular/core';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'country-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnChanges {
   transport: Array<any>;
   @Input() country: string;

  constructor(private service: CountryService) { }

  ngOnChanges() {
     if (this.country) {
        this.service.getTransport(this.country).subscribe(transport => this.transport = transport);
     }
  }

}
