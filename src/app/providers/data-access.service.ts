import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  private _domain_context = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  queryDestinationByCity(cityName: string): Observable<any>{
    //http://localhost:3000/destinations?name=hyderabad
    return this.http
      .get(`${this._domain_context}/destinations?name=${cityName}`);

  }

  public getDestinationList(): Observable<any>{
    return this.http
      .get(`${this._domain_context}/destinations`);
  }

  public getDestinationDetails(cityName: string){
    let cityObject;
    return new Promise( (resolve) => {
      this.getDestinationList().subscribe(
        (data) => {
          resolve(_.filter(data, (item) => _.lowerCase(item.name) === _.lowerCase(cityName)));
        }
       );
    })

  }
}
