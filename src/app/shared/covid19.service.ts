import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private http: HttpClient) { }
  
  getToday() {
    return this.http.get('https://covid19.th-stat.com/api/open/today').toPromise();
  }

  getTimeline() {
    return this.http.get('https://covid19.th-stat.com/api/open/timeline').toPromise();
  }

  getSum() {
    return this.http.get('https://covid19.th-stat.com/api/open/cases/sum').toPromise();
  }

  getCases() {
    return this.http.get('https://covid19.ddc.moph.go.th/api/open/cases').toPromise();
  }

  getGeoJSON() {
    return this.http.get('./assets/data/mapv2.json').toPromise();
  }

  getByCuntries() {
    return this.http.get('https://api.covid19api.com/summary').toPromise();
  }
}
