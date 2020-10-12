import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { mapTo, take, tap } from 'rxjs/operators';
import { DatatableComponent } from '../datatable/datatable.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('email')) {
        return true
      } else {
        alert("Please login first !!!");
        this.router.navigate(["/login"]);
        return false
      }
  }


  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: DatatableComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return window.confirm("Are You Sure ?");
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // return interval(1000).pipe(
      //   mapTo(true),
      //   take(3),
      //   tap(console.log)
      // );
      if (localStorage.getItem('email')) {
        return true
      } else {
        alert("You are not allowed to View this page !");
        this.router.navigate(["/login"]);
        return false
      }
  }
}
