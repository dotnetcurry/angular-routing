import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-predefined-destination-details',
  templateUrl: './predefined-destination-details.component.html',
  styleUrls: ['./predefined-destination-details.component.css']
})
export class PredefinedDestinationDetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  destination: any;

  ngOnInit() {
    this.router.data
      .subscribe( (data: {destinationDetails: any}) => {
        this.destination = data.destinationDetails[0];

        console.log("destination details obtained", data.destinationDetails[0]);
      })
  }

}
