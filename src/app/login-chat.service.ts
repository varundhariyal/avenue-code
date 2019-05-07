import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { Cookie } from "ng2-cookies/ng2-cookies";


@Injectable({
  providedIn: 'root'
})
export class LoginChatService {
  private url = `http://login-chat.roadtoavenue.ga`
  constructor(private http: HttpClient) { }

  public getUserInfoFromLocalstorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  } // end getUserInfoFromLocalstorage


  public setUserInfoInLocalStorage = (data) => {

    localStorage.setItem('userInfo', JSON.stringify(data))


  }

  public signupFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobile', data.mobile)
      .set('email', data.email)
      .set('password', data.password)

    return this.http.post(`${this.url}/api/v1/users/signup`, params);

  } // end of signupFunction function.

  public signinFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.url}/api/v1/users/login`, params);
  } // end of signinFunction function.


  public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'))

    return this.http.post(`${this.url}/api/v1/users/logout`, params);

  } // end logout function



  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError

}

