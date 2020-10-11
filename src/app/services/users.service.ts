import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:3000/users";
  }

  public getUsers(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }
}
