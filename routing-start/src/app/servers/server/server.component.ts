import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  id: number;

  constructor(
    // to access the service
    private serversService: ServersService,
    // to activate the parameters in the path
    private route: ActivatedRoute,
    // to navigate to a route using a method
    private router: Router
  ) { }

  ngOnInit() {

    //  use route.data.subscibe to search for server before loading the component with the resolver service
    // especially important when using asynchornous data
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    // this code is no longer needed with our route resolver service

    // // use +to turn string of number into a number
    // // grab params id and search in service by server id
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // // console.log(this.server);
    // // if params change perform search again
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );
  }

  onEdit() {
    // to navigate to route via method
    // this will add edit onto the current route path
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }


}
