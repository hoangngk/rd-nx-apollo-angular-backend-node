import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ListingsService } from '../services/listings.service';
import { Listing } from '../models/listings.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-apollo-angular-backend-node-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingsComponent implements OnInit {
  constructor(private listingsService: ListingsService) {}
  public listings$!: Observable<Listing[]>;

  ngOnInit(): void {
    this.listings$ = this.listingsService.getData()
  }

  public edit(item: Listing): void {}
}
