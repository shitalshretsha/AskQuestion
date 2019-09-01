import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { AskQstServiceService } from '../ask-qst-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model : any={};  
  errorMessage:string;
  userName: String;
  password: String;  

  constructor(private router: Router, private askqstansservice: AskQstServiceService) { }

  ngOnInit() {
  }
  login(){    
    this.askqstansservice.Login(this.userName, this.password).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
       
   //// this.askqstansservice.Registration(this.model).subscribe(    
      // data => {    
      //     
      //   if(data.Status=="Success")    
      //   {       
      //     this.router.navigate(['/Dashboard']);    
      //     debugger;    
      //   }    
      //   else{    
      //     this.errorMessage = data.Message;    
      //   }    
      // },    
      // error => {    
      //   this.errorMessage = error.message;    
      // });  
   // )  
  };  

}
