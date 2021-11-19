import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'nx-apollo-angular-backend-node-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
})
export class ListingsComponent implements OnInit {
  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listingsService.getData().valueChanges.subscribe((data: any) => {
      console.log(data);
    });
  }
}
