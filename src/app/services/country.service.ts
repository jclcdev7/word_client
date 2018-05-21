import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let service: string = 'http://localhost:5001';
let nation  = 'AF';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  getIntro(country) {
    return this.http.get<any>(service+'/world/detail?ctry='+country+'&det=introduction');
  }

  getUpdate(country) {
    return this.http.get<any>(service+'/world/detail?ctry='+country+'&det=update');
  }

  getGeography(country) {
   return this.http.get<any>(service+'/world/detail?ctry='+country+'&det=geography');
 }

 getPeople(country) {
  return this.http.get<any>(service+'/world/detail?ctry='+country+'&det=peop_soc');
}

getIssue(country) {
 return this.http.get<any>(service+'/world/detail?ctry='+country+'&det=issues');
}

getMilsec(country) {
 return this.http.get<any>(service+'/world/detail?ctry='+country+'&det=milsec');
}

getTransport(country) {
 return this.http.get<any>(service+'/world/detail?ctry='+country+'&det=transport');
}

getTerror(country) {
 return this.http.get<any>(service+'/world/detail?ctry='+country+'&det=terror');
}

getComms(country) {
 return this.http.get<any>(service+'/world/detail?ctry='+country+'&det=comms');
}

getEnergy(country) {
 return this.http.get<any>(service+'/world/detail?ctry='+country+'&det=energy');
}

getGov(country) {
 return this.http.get<any>(service+'/world/detail?ctry='+country+'&det=government');
}

getEconomy(country) {
 return this.http.get<any>(service+'/world/detail?ctry='+country+'&det=economy');
}

 getList() {
    return this.http.get<any>(service+'/worldCode');
}

}
