import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataAccessService } from './providers/data-access.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { PredefinedDestinationDetailsComponent } from './predefined-destination-details/predefined-destination-details.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinationListComponent,
    DestinationDetailsComponent,
    PredefinedDestinationDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
