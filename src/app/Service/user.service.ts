import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServiceUrl ='';

  constructor(private http: HttpClient) { }

  public getById(user: User): Observable<User>{
      return this.http.post<User>(`${this.apiServiceUrl}/users/{id}`,user);
  }
  public createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiServiceUrl}/users/create`,user);
}


}
