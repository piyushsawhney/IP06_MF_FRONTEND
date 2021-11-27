import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../global-models/client';
import { ClientDetails } from './models/client-details';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from '../global.service';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients!: Observable<Client[]>;

  constructor(private httpClient: HttpClient, private globalService: GlobalService) { }

  updateGlobalClient(client: Client) {
    this.globalService.setClientInScope(client);
  }

  retrieveGlobalClient() : Observable<Client> {
    return this.globalService.getClientInScope();
  }

  getClientList(): Observable<Client[]> {
    this.clients = this.httpClient.get<Client[]>('/client/api/v1/clientlist')
    return this.clients
  }
  getClientDetails(clientId: string): Observable<ClientDetails> {
    return this.httpClient.get<ClientDetails>(`/client/api/v1/client/${clientId}/details`)
  }
  getClientFamilyDetailsList(clientId: string): Observable<ClientDetails[]> {
    return this.httpClient.get<ClientDetails[]>(`/client/api/v1/client/${clientId}/familydetails`)
  }

  getNameList(searchText: string): Observable<Client[]> {
    return this.clients.pipe(
      map(users => {
        return users.filter(client => client.clientName.toUpperCase().indexOf(searchText.toUpperCase()) > -1 || client.clientPan.toUpperCase().indexOf(searchText.toUpperCase()) > -1).slice(0, 10)
      })
    );
  }
}
