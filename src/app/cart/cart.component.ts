import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {

  @HostBinding('class') classes = 'wrapper px-2 px-md-3 py-4'; // adds class to the selector

  public products = [];
  productSizeFilterControl = new FormControl();
  productSizeOptions = ['XS', 'S', 'M', 'L', 'XL'];
  productSizeControl = new FormGroup ({
    Size: this.productSizeFilterControl
  });

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this._cartService.getCartDetails()
        .subscribe(data => this.products = data);
  }

  onChange(deviceValue: any) {
    console.log(deviceValue);
}


}
