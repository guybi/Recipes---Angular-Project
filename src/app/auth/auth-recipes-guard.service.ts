import { AuthFireBaseService } from 'src/app/auth/auth.service';
import { AuthFakeService } from './../auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, Router } from "@angular/router";
import { RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router/src/router_state";

@Injectable()
export class AuthRecipesGuard implements CanActivate {
    
    constructor(private authFireBaseService: AuthFireBaseService) {}

    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                return this.authFireBaseService.isAuthencticated();
                
    }
}