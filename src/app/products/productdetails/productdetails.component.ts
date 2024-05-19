import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {

  product: any = {};

  constructor(private store: ProductsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get("id");

      // id here is actually string since it came from url. Also, we use this 'if statement' since we only want to fetch data from the data store if the id exists.
      if (id) {
        this.store.getProduct(parseInt(id, 10)).subscribe(product => this.product = product); // getProduct(id) will return 'product' where we can use this 'product' and set this value to the value of 'this.product'. Also, in 'parseInt(id, 10)', the '10' here indicates that the string should be interpreted as a decimal number.
      }

    })
  }
}
