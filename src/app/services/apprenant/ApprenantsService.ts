import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../../models/user';
import { Observable } from 'rxjs';
@Injectable()
export class ApprenantsService {
  constructor(private httpClient: HttpClient ) { }
  baseURL: string = "https://e5f79i4x21.execute-api.eu-west-3.amazonaws.com/dev/";
  saveApprenant(user: user): Observable<any> {
    const headers = { 'content-type': 'application/json' };

    const body = JSON.stringify(user,maskInfo)

    function maskInfo (key: string, value: any) {
      var maskedValue = value;

      if (key == "date")
      {
     //  maskedValue = user.date.toISOString().slice(0,10); /*      split("T")[0]       */
       maskedValue = user.date.toLocaleDateString();
     //  maskedValue.toLocaleDateString('en-GB'); // dd/mm/yyyy
     //  maskedValue.toLocaleDateString('en-US'); // mm/dd/yyyy
      }

      return maskedValue;
  }


    console.log(body);
    return this.httpClient.post(this.baseURL + 'clients', body, { 'headers': headers });
  }
}
