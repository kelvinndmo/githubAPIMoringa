import { Injectable } from '@angular/core';
// 2
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // Inject the dependency - HttpClient
  constructor(private http: HttpClient) { }

  //first get method.
  // - Observable that you can subscribe to, to get a stream of data
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.url}/users`)
  }
}
