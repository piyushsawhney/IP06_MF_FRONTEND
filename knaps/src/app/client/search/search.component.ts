import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Observable} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap  } from 'rxjs/operators';
import { Client } from 'src/app/global-models/client';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public clients!: Observable<Client[]>;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClientList();
  }

  getClientList() {
    this.clients = this.clientService.getClientList();
  }

  search = (text$: Observable<string>) => {
    return text$.pipe(      
        debounceTime(200), 
        distinctUntilChanged(),
        // switchMap allows returning an observable rather than maps array
        switchMap( (searchText) =>  this.clientService.getNameList(searchText))            
    );                 
  }
  inputFormatBandListValue(value: any)   {
    if(value)
      return value.clientName
  }

  selectedClient(client:any){
    this.clientService.updateGlobalClient(client)
  }
}
