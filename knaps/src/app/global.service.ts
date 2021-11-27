import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Client } from './global-models/client';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private _clientInScope = new Subject<Client>();

  setClientInScope(client: Client) {
    this._clientInScope.next(client);
  }
  getClientInScope(): Observable<Client> {
    return this._clientInScope.asObservable();
  }

  constructor() { }
}
