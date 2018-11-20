import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataAccessService } from '../providers/data-access.service';
import { Title } from '@angular/platform-browser'
import { switchMap } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {

  private destination:  any;

  constructor(private route: ActivatedRoute,
                private dataAccess: DataAccessService,
                private titleService: Title,
                private router: Router) { }

  ngOnInit() {

    this.titleService.setTitle(this.route.snapshot.data.title || "");

    this.router.events.subscribe( 
      (event) => 
        console.log("Router event captured", event));

    let fragment = this.route.snapshot.fragment;
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.dataAccess
            .getDestinationDetails(params.get('city')))
      )
        .toPromise()
        .then((data) => {
        this.destination = data && _.isArray(data) && data[0];
      });;
    // let cityName = this.route.snapshot.params.city || this.route.snapshot.queryParams.city;

      
    // }else{
    //   const getCityFromList = (cityObjects) => {
    //     this.destination = cityObjects && _.isArray(cityObjects) && ((fragment && fragment === "last") ? cityObjects[cityObjects.length-1] : cityObjects[0] );
    //   }
    //   this.dataAccess
    //     .getDestinationList()
    //     .subscribe( (data) => getCityFromList(data))
    // }
  }
}
