import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './services/contentful.service';

@Component({
  selector: 'nx-apollo-angular-backend-node-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotel-booking';

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.contentfulService
      .getProducts({select: 'fields'})
      .then((products) => console.log(products));
  }
}
