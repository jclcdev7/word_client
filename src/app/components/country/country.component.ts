import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
   maliste: Array<any>;
   mycountry: string;

  constructor(private service: CountryService) { }

  ngOnInit() {
     this.service.getList().subscribe(lst => this.maliste = lst);
  }

}
