import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // use this function to pass data declared in the route path
    // this.errorMessage = this.route.snapshot.data['message'];

    // or you can use the route.data.subscribe method if using the route params
    // to load information in the component and it is possible for the params to change while in the component
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
        console.log(this.errorMessage);

      }
    );
  }

}
