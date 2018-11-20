import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { DestinationResolverService } from './providers/destination-resolver.service';
import { PredefinedDestinationDetailsComponent } from './predefined-destination-details/predefined-destination-details.component';
import { AuthorizationServiceService } from './providers/authorization-service.service';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {
    path: "destinations",
    component: DestinationListComponent,
    canActivate: [AuthorizationServiceService]
  },
  {
    path: "destination",
    component: DestinationDetailsComponent
  },
  {
    path: "destination/:city",
    component: PredefinedDestinationDetailsComponent,
    resolve: {
      destinationDetails: DestinationResolverService
    }
  },
  {
    path: "error",
    component: ErrorComponent
  },
 {
    path: "",
    redirectTo: "/destinations",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
