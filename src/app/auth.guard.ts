import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { Observable, map } from "rxjs";

@Injectable()
export class AuthGuard {

    constructor(public _auth: AuthService,
        public _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot):boolean | UrlTree | Observable<boolean|UrlTree> | Promise<boolean|UrlTree>{
            return this._auth.isAuthenticated$.pipe(
                map(isLoggedIn => {
                    if(!isLoggedIn){
                        return this._router.parseUrl('/401')
                    }

                    return true;
                })
            )
        }
}