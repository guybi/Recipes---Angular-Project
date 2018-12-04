import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthFireBaseService {
    token: string;

    constructor(private router: Router) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => {
                                this.token = token;
                            }
                        );
                }
            ).catch(
                error => console.log(error)
            );
    }

    getIdToken() {
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => {
                this.token = token;
            }
        );
        return this.token;
    }
    
    isAuthencticated() {
        return this.token != null;
    }

    logOut() {
        firebase.auth().signOut()
            .then(
                response => {
                    this.router.navigate(['/signin'])
                }
            ).catch(
                error => {
                    console.log(error);
                }
            )
        this.token = null;
    }
    
}