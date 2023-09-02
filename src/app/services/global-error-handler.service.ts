import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    console.log('Error occurred: ', error);

    //If you want you can also send this error ro a logging infrastructure
    //Show an error on the screen
  }
}
