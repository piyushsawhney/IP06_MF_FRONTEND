import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ClientDetails } from '../models/client-details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public clientDetails!: ClientDetails;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClientDetails();
  }
  getClientDetails() {
    this.clientService.retrieveGlobalClient().subscribe((client:any) => {
      this.clientService.getClientDetails(client['item'].clientId).subscribe(clientInfo => {
        this.clientDetails = clientInfo;
      })
    })
  }

}
