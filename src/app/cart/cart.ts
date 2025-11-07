import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';
import { Product as ProductModel } from '../models/Product';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class Cart implements OnInit {
  items$: Observable<ProductModel[]>; // cart items observable
  feedbackMessage: string = '';

  // Template-driven form data
  checkoutData = {
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    notes: ''
  };

  constructor(private cart: CartService, private router: Router) {
    this.items$ = this.cart.items$;
  }

  ngOnInit(): void {}

  add(product: ProductModel) {
    this.cart.add(product);
    this.showFeedback('Item added to cart.');
  }

  remove(id: number) {
    this.cart.remove(id);
    this.showFeedback('Item removed from cart.');
  }

  increaseQuantity(item: ProductModel) {
    this.cart.add(item); // reuses your existing add() method to increment quantity
  }

  decreaseQuantity(item: ProductModel) {
    if (item.quantity > 1) {
      item.quantity--; // just decrease quantity
    } else {
      this.remove(item.id); // remove item if quantity is 1
    }
  }


  clear() {
    this.cart.clear();
    this.showFeedback('Cart cleared.');
  }

  private showFeedback(message: string) {
    this.feedbackMessage = message;
    setTimeout(() => this.feedbackMessage = '', 3000);
  }

  total() {
    let total = 0;
    this.items$.subscribe(items => {
      total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });
    return total;
  }

  submit(form: any) {
    if (form.invalid) {
      return;
    }

    const order = {
      customer: this.checkoutData,
      items: this.cart.snapshot,
      total: this.cart.totalPrice(),
      createdAt: new Date().toISOString(),
    };

    console.log('Order submitted', order);

    this.cart.clear();
    this.showFeedback('Order placed successfully! Redirecting to confirmation...');

    setTimeout(() => {
      this.router.navigate(['/order-confirmation']);
    }, 2000);
  }
}
