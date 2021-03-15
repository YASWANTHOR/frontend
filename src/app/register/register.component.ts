import { Component, OnInit } from '@angular/core';
import{ SignupService } from '../signup.service'
import{NgForm} from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user=new User();
  msg="";


  constructor(private _service:SignupService,private _router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this.msg="Registration successful";
        this._router.navigate(['/'])
      },
      error =>{
        console.log("exception occured");
        this.msg=error.error;
      }
    )
    

    
      
   
    

  }
  gotoregistrationform(){
    this._router.navigate(["/register"])
  }

}


