import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { FamilyComponent } from './family/family.component';


@NgModule({
  declarations: [
    ClientComponent,
    SearchComponent,
    DetailsComponent,
    FamilyComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class ClientModule { }
