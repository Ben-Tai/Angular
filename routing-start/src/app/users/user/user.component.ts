import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  // use Subscription with ngOndestroy to clear your params subscribe
  paramsSubscription: Subscription;

  // inject activated route to get acess to the current route path
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      // use snapshot.params to access the params in the path if not already in the component
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };


    this.paramsSubscription = this.route.params
     // use route.params without snapshot if you want the data in the component to change dependent on the  route path
    .subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
    });
  }

  //
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
