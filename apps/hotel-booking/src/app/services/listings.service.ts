// import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApolloQueryResult, Observable } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  constructor(private apollo: Apollo) {}

  getData(): any {
    return this.apollo.watchQuery({
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
    });
  }
}
