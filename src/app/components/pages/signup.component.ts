import { Component } from '@angular/core';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  

  user = {
    name: '',
    occupation: '',
    country: '',
    phone: '',
    email: '',
    password: ''
  }

  onSubmit(){
    console.log(this.user);
  }
}