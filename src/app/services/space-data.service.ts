import { Destination, Crew, Technology } from './../interfaces/SpaceData';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpaceDataService {
  constructor(private httpClient: HttpClient) {}

  getDestination(): Observable<any> {
    return this.httpClient.get(`${API_PATH}destination`);
  }

  getCrew(): Observable<any> {
    return this.httpClient.get(`${API_PATH}crew`);
  }

  getTechnology(): Observable<any> {
    return this.httpClient.get(`${API_PATH}technology`);
  }
}
