import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServce } from "./auth.service";
@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
  constructor(private authservice :AuthServce,private route:Router){}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :Observable<boolean> | Promise<boolean> | boolean{
    return this.authservice.isAuthenticated()
    .then((authenticated:boolean) => {
      if(authenticated){
        return true;
      }else{
        this.route.navigate(['/']);
      }
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
    return this.canActivate(route,state);
  }


}
