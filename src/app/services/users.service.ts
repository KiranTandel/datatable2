/**
 * @author Kiran Tandel
 */

import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:3000/users";
  }

  public getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.url);
  }

  public updateUser(id:number,userData:Users): Observable<Users>{
    debugger
    // delete userData.id;
    return this.httpClient.put<Users>(`${this.url}/${id}`,userData.name);
  }

  public deleteUsers(id:number): Observable<Users> {
    return this.httpClient.delete<Users>(`${this.url}/${id}`);
  }
}
