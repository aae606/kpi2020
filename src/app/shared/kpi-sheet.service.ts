import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class KpiSheetService {

  constructor(private http: HttpClient) { }

  // MDD Nation
  getMddNation(){
    return this.http.get('https://script.google.com/macros/s/AKfycbzWEoPDete3H509AydSB4voUtThhUkETzgRY_8nzpP7bDff15Q/exec').toPromise();
  }
  // MDD AHB10
  getMddAHB(){
    return this.http.get('').toPromise();
  }


}
