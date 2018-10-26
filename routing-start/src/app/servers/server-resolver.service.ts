import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ServersService } from './servers.service';

interface Server {
    id: number;
    name: string;
    status: string;
}

// use injectable to add a service to another service
@Injectable()
export class ServerResolver implements Resolve<String> {
    constructor(private serversService: ServersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
       return this.serversService.getServer(+route.params['id']);
    }

}
