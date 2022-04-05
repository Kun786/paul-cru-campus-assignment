import { Injectable } from '@angular/core';
import { StaticApiUrl } from 'src/GlobalConfiguration/GlobalConstants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class DataManagementServiceService {

  constructor(private _HttpClient: HttpClient) { }

  GetDataFromApi(){
    return this._HttpClient.get(StaticApiUrl);
  }
}
