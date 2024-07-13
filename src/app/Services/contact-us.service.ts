import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private _HttpClient:HttpClient) { }

  sendToContact(data: FormGroup):Observable<any>{
    return this._HttpClient.post('http://upskilling-egypt.com:3001/contact', data);
  }
}
