import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let service: string = 'http://localhost:5001';

@Injectable()
export class CountriesService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any>(service+'/worldcode');
  }

}
