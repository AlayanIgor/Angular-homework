import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../person/person.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  constructor(private _http: HttpClient) {}

  getPersons(): Observable<Root> {
    return this._http.get<Root>(
      'https://fakerapi.it/api/v1/persons?_quantity=5&_gender=male&_birthday_start=1994-02-09'
    );
  }
}
