import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private username:string = ""
  private password:string = ""

       constructor(private authService:AuthService) {
         
       }

       Login(){
         this.authService.Authentication(this.username,this.password).subscribe(
           (data)=>{
           
            if(data["token"] != null){
              // retreive the access token from the server
            console.log(data["token"])
            // store the token in the localStorage 
            localStorage.setItem("access-token",data["token"])

           
            }else{
              console.log("check your credentials !!")
            }
           }
         )
       }
       DisplayList(){
         this.authService.GetAllProducts().subscribe(
           (data)=>{

             console.log(data)
           }
         )

       }
}
