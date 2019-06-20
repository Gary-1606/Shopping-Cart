import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {

  @HostBinding('class') classes = 'wrapper px-2 px-md-3 py-4'; // adds class to the selector

  public originalProductList = []; // array to hold the original json data
  productSizeOptions = [
    { name: 'XS' },
    { name: 'S' },
    { name: 'M' },
    { name: 'L' },
    { name: 'XL' }
  ];
  products: any = []; // array to hold the json data on filter
  selectedSize = '';


  constructor(private _cartService: CartService) { }

  public onChange(event): void {
    const selectedVal = event.target.value; // value selected from dropdown captured on event change
    this.products = this.originalProductList.filter(p => {
      if (p.size.includes(selectedVal)) {
        return true;
      }
      return false;
    });
  }

  // subscribing to the http response (Observable) and initially storing in both original array and products array
  ngOnInit() {
    this._cartService.getCartDetails()
        .subscribe(data => {
          this.originalProductList = data;
          this.products = data;
        });
  }




}
