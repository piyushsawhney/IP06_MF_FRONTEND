import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ClientDetails } from '../models/client-details';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  public clientFamilyDetailsList!: ClientDetails[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
      this.getClientFamilyDetailsList();
    }
    getClientFamilyDetailsList() {
      this.clientService.retrieveGlobalClient().subscribe((client:any) => {
        this.clientService.getClientFamilyDetailsList(client['item'].clientId).subscribe(clientFamilyList => {
          this.clientFamilyDetailsList = clientFamilyList;
        })
      })
    }

}
