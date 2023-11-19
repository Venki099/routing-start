import { ActivatedRouteSnapshot, CanDeactivate, RouterState, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
  canDeactivateMethod:() =>Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
  canDeactivate(component:CanComponentDeactivate,currentroute:ActivatedRouteSnapshot,currentstate:RouterStateSnapshot,nextState?:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
    return component.canDeactivateMethod();
  }
}
