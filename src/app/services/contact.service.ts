
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contact } from '../models/contact';
@Injectable()
export class ContactService {
  constructor(private httpClient: HttpClient) { }
  baseURL: string = "http://localhost:3000/";
  saveContact(contact: contact): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(contact);
    console.log(body);
    return this.httpClient.post(this.baseURL + 'contacts', body, { 'headers': headers });
  }
}
