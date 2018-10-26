// this is a guard service, it will run when a routerLink is activated and will decide whether a route should be loaded or not
// this service is checking our AuthService to see if user is authenticated before logging in

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


// this service is used in another service so needs @Injectable
@Injectable()
// implement CanActivate which forces you to have a canActivate function
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                // canActivate returns a observable|promise| or synchronous boolean
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
        .then(
            (authenticated: boolean) => {
                if (authenticated) {
                    // if authenicated = true than it will load the route
                    return true;
                    // if false it will load navigate to home
                } else {
                    this.router.navigate(['/servers']);
                }
            }
        );
    }

    canActivateChild( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }
}
