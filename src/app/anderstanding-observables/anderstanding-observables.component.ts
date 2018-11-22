import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-anderstanding-observables',
  templateUrl: './anderstanding-observables.component.html',
  styleUrls: ['./anderstanding-observables.component.css']
})
export class AnderstandingObservablesComponent implements {

  // constructor() { }
  // customObsSubscription: Subscription;

  // ngOnInit() {
  //   const myObservable = Observable.create((observer: Observer<string>) => {
  //     setTimeout(() => {
  //       observer.next('First Package');
  //     }, 2000);
  //     setTimeout(() => {
  //       observer.next('Second Package');
  //     }, 4000);
  //     setTimeout(() => {
  //       observer.complete();
  //     }, 5000);
  //     setTimeout(() => {
  //       observer.next('Third Package');
  //     }, 6000);
  //   });

  //   myObservable.subscribe(
  //     (data: string) => {
  //       console.log(data);
  //     },
  //     (error: string) => {
  //       console.log(error);
  //     },
  //     () => {
  //       console.log('completed');
  //     }
  //   );
  // }
  ngOnDestroy() {
  //   this.customObsSubscription.unsubscribe();
  }

}
