import { DataStorageService } from './../shared/data-storage';
import { Component, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dsService: DataStorageService) {}
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
}
