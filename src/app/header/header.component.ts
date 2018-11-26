import { AuthFireBaseService } from 'src/app/auth/auth.service';
import { AuthFakeService } from './../auth.service';
import { DataStorageService } from './../shared/data-storage';
import { Component, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dsService: DataStorageService, 
              private authService: AuthFakeService, 
              private authFBService: AuthFireBaseService) {}

  
  onSaveData() {
    this.dsService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dsService.getRecipes();
  }

  //for study
  onLoggin() {
    this.authService.login();
  }
  
  //for study
  onLogout() {
    this.authService.logout();
  }

  onLogoutServer() {
    this.authFBService.logOut();
  }


}
