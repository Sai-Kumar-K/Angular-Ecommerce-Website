import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dbGetSet } from './dbGetSetinterface';

@Injectable({
  providedIn: 'root'
})
export class DbGetSetService {

  constructor(private _http:HttpClient) { }

  private _url = "http://localhost:3000/usercred";

  userCredGet():Observable<dbGetSet[]>{
    return this._http.get<dbGetSet[]>(this._url);
  }
}
