import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cartProducts } from '../models/cartproducts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient ) { }
  // http response as Observable
  getCartDetails(): Observable<cartProducts[]> {
    return this.http.get<cartProducts[]>('https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3');
  }
}
