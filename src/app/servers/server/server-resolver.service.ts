import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server {
  id:number;
  name:string;
  status:string
}
@Injectable()
export class ServerResolver implements Resolve<{Server:any}>{
  constructor(private serverService : ServersService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ Server: any }> | Promise<{ Server: any }> | { Server: any } {
    const serverData = this.serverService.getServer(+route.params['id']);
    return of({ Server: serverData });
  }
}
