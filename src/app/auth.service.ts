import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private Http:HttpClient) { }


  Authentication(username:string,password:string){
    let json = {username:username,password:password}
    return this.Http.post("http://localhost:3000/authenticate ",json); 
  }


  GetAllProducts(){
    return this.Http.get("http://localhost:3000/api/getAllProducts")
  }

   

}
