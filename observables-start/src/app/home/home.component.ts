import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // decalre my subsscriptions so that i can access them again on ngdestroy
numberObsSubcription: Subscription;
customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // Observables also contain many operators. Use operators to transform the data in the observable
    const myNumbers = interval(1000)
    .pipe(map(
      (data: number) => {
        return data * 2;
      }) );

    this.numberObsSubcription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    // use Observable.create to create your own observable
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('frist package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      // use observer.error to determine how to the observable to handle errors
      // setTimeout(() => {
      //   observer.error('this does not work');
      // }, 5000);
      // Use observer.complete to determine how to the observer to determine what happens upon observer completion
      setTimeout(() => {
        observer.complete();
      }, 5000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

  ngOnDestroy() {
    this.customObsSubscription.unsubscribe();
    this.numberObsSubcription.unsubscribe();

  }

}
