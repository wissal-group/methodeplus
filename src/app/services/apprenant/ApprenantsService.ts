import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../../models/user';
import { Observable } from 'rxjs';
@Injectable()
export class ApprenantsService {
  constructor(private httpClient: HttpClient) { }
  baseURL: string = "http://localhost:3000/";
  saveApprenant(user: user): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    console.log(body);
    return this.httpClient.post(this.baseURL + 'apprenants', body, { 'headers': headers });
  }
}
