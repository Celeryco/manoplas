import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthProvider {
	public isLoggedIn: boolean = false;
	private api: string="http://52.67.151.21:8000";

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  public login(user){	
  	return this.http.post(`${this.api}/login`, user)
  	.map((res: Response) => {
  		return res.json();
  	})
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

}
