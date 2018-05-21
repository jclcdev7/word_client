import { Component, OnChanges, Input } from '@angular/core';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'country-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnChanges {
   myupdate: string;
   @Input() country: string;

   constructor(private service: CountryService) { }

   ngOnChanges() {
     if (this.country) {
        this.service.getUpdate(this.country).subscribe(upd => this.myupdate = upd);
     }
   }

}
