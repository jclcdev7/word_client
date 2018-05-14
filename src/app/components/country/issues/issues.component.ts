import { Component, OnChanges, Input } from '@angular/core';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'country-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnChanges {
   issue: Array<any>;
   @Input() country: string;

  constructor(private service: CountryService) { }

  ngOnChanges() {
     if (this.country) {
        this.service.getIssue(this.country).subscribe(issue => this.issue = issue);
     }
  }

}
