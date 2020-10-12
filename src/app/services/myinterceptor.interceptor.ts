import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import {do, tap, throw } from 'rxjs/operators';

@Injectable()

export class MyinterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    const customReq = request.clone({
      headers: request.headers.set('author', 'kiran')
    });
    debugger
    console.log('processing request', customReq);

    return next
      .handle(customReq);
      // // .do((ev: HttpEvent<any>) => {
      // //   if (ev instanceof HttpResponse) {
      // //     console.log('processing response', ev);
      // //   }
      // // })
      // .catch(response => {
      //   if (response instanceof HttpErrorResponse) {
      //     console.log('processing http error', response);
      //   }

      //   return Observable.throw(response);
      // });
  }
}
