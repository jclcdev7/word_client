import { Component, OnChanges, Input } from '@angular/core';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'country-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnChanges {
   people: Array<any>;
   @Input() country: string;

  constructor(private service: CountryService) { }

  ngOnChanges() {
     if (this.country) {
        this.service.getPeople(this.country).subscribe(people => this.people = people);
     }
  }

}
