import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private statusUrl = '/api/status';
  constructor(private http: Http) { }

  getStatus(): Promise<void | any> {
    return this.http.get(this.statusUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.error);
  }

  private error (error: any) {
    let message = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(message);
  }

}
