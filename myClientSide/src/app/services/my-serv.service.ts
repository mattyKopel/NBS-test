import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {} from '../app-routing.module'

@Injectable({
  providedIn: 'root'
})
export class MyServService {

  constructor(private http:HttpClient) { }

  baseURL = "http://localhost:3000"

  getDistance(home:string, dest: string):Observable<number>{
    return this.http.get<number>(this.baseURL+'/distance?source=' + home +'&destination=' + dest);
  }

}
