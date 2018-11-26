import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthFireBaseService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authFBservice: AuthFireBaseService) { }

  ngOnInit() {
  }
  
  onClickSignup(form: NgForm) {
    const value = form.value;
    console.log(form);
    this.authFBservice.signupUser(value.email, value.password);
  }

}
