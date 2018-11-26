import { AuthFireBaseService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authFireBaseService: AuthFireBaseService) { }

  ngOnInit() {
  }

  onClickSignIn(form: NgForm) {
    const value = form.value;
    const email = value.email;
    const password = value.password;
    this.authFireBaseService.signinUser(email, password);
  }

}
