
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contact } from '../models/contact';
@Injectable()
export class ContactService {
  constructor(private httpClient: HttpClient) { }
  baseURL: string = "https://0nu4g3uzvh.execute-api.eu-west-3.amazonaws.com/default/methodeplusmailer";
  saveContact(contact: contact): Observable<any> {
    const body = JSON.stringify(contact);
    console.log(body);
    return this.httpClient.post(this.baseURL, body);
  }
}
