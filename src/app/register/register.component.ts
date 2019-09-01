import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { Observable } from 'rxjs';
import { AskQstServiceService } from '../ask-qst-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data = false;
  UserForm: any;
  massage: string;
  userName: String;
  password: String;
  Email: String;
  type: String;
  role: String;

  constructor(private askqstservice: AskQstServiceService) { }

  ngOnInit() { }
  onFormSubmit() {
    console.log(this.userName);
    this.askqstservice.Registration(this.userName, this.password,this.role).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}
// Createuser(register: Register)
// {
//   this.askqstservice.CreateUser(register).subscribe(
//     () => {
//       this.data = true;
//       this.massage = 'Data saved Successfully';
//       this.UserForm.reset();
//     });
// }


