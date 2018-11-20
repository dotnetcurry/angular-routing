import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../providers/data-access.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {

  destinationList: Observable<any>;

  constructor(private dataAccess: DataAccessService) { }

  ngOnInit() {
    this.destinationList = this.dataAccess
      .getDestinationList();
      // .subscribe( (data) => console.log(data));

  }

}
