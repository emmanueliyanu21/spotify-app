import { Component } from '@angular/core';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  name:string = "";

  onSubmit(){
    console.log(this.name);
  }
}