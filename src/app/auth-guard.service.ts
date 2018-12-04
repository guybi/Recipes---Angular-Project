import { AuthFakeService } from './auth.service';
import { CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { PACKAGE_ROOT_URL } from "@angular/core/src/application_tokens";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authFakeService: AuthFakeService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authFakeService.isAuth()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
