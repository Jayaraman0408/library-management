import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class BorrowerHistory {

  constructor(private http: HttpClient) { }

  getBorrowerList() {
    return this.http.get("assets/borrow.json");
  }

}
