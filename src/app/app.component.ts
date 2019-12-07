import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductsService } from './products.service';

@Component({
  selector: 'es-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products$: Observable<any>;

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.getProducts();
  }
}
