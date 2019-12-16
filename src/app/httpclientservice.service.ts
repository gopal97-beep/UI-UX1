import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class HttpclientserviceService {

  constructor(private http:HttpClient) { }
  getprofile(){
    return this.http.get<User[]>("http://localhost:3004/profile");
  }
  addprofile(User1){
    return this.http.post<User>("http://localhost:3004/profile",User1);
  }
  findprofile(id){
    return this.http.get<User>("http://localhost:3004/profile/"+id)
  }
  deleteprofile(id){
    return this.http.delete<User>("http://localhost:3004/profile/"+id)
  }
}
