import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iitems } from './items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsproviderService {

  private _url = 'assets/data/items.json';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Iitems[]> {
    return this.http.get<Iitems[]>(this._url);
  }

}
