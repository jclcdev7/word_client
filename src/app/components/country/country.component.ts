import { Component, OnInit, OnChanges } from '@angular/core';
import { CountryService } from '../../services/country.service';
declare let componentHandler: any; // need to use external in angular2? Ok no pb, but declare it before like that

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit, OnChanges {
   maliste: Array<any>;
   mycountry: string;

  constructor(private service: CountryService) { }

  ngOnInit() {
     this.service.getList().subscribe(lst => this.maliste = lst);
     componentHandler.upgradeDom();  // permet de prendre en compte les tabulations après routage
  }

  ngOnChanges() {
 }

}
