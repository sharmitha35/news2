

import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }


  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=e7daeb9040df460e81436e97bb1c8ebb"

   
techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=e7daeb9040df460e81436e97bb1c8ebb"

  topheading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }


  technews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
}

