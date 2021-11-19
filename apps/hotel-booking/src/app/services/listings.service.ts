import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { GetListings, Listing } from '../models/listings.model';

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  constructor(private apollo: Apollo) {}

  public getData(): Observable<Listing[]> {
    return this.apollo
      .query<GetListings>({
        query: gql`
          query GetListings {
            listings {
              id
              title
              image
              address
              price
              numOfGuests
              numOfBeds
              numOfBaths
              rating
            }
          }
        `,
      })
      .pipe(map((result) => (result.data ? result.data.listings : [])));
  }
}
