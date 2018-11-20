import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataAccessService } from './data-access.service';
import { EMPTY, of } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DestinationResolverService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataAccess.queryDestinationByCity(route.params.city).pipe(
      take(1),
      mergeMap(city => {
        if (city && _.isArray(city) && city.length > 0) {
          return of(city); // returns observable based on the given object.
        } else {
          this.router.navigate(['/destinations']);
          return EMPTY; // an empty observable
        }
      })
    );
    
  }

  constructor(private dataAccess: DataAccessService, private router: Router) { }
}
