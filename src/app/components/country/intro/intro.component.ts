import { Component , Input, ChangeDetectionStrategy, OnChanges} from '@angular/core';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'country-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']//,
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent implements OnChanges {
   intro: Array<any>;
   @Input() country: string;

  constructor(private service: CountryService) { }

  ngOnChanges() {
     //alert('change detected: '+this.country);
     if(this.country) {
         this.service.getIntro(this.country).subscribe(intro => {
            this.intro = intro;
            //alert(this.intro);
         });
      }
  }

}
