import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';
import { Product as ProductModel } from '../models/Product';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class Cart {
  // Observable stream of cart items
  items$: Observable<ProductModel[]>;

  // Reactive form for checkout (initialized in constructor)
  form!: FormGroup;

  // Inject the CartService and form builder
  constructor(private cart: CartService, private fb: FormBuilder, private router: Router) {
    // Initialize the form using the injected FormBuilder
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(8)]],
      city: ['', Validators.required],
      country: ['', Validators.required],
      notes: [''],
    });

    // Initialize the items$ observable from the CartService
    this.items$ = this.cart.items$;
  }

  remove(id: number) {
    this.cart.remove(id);
  }

  clear() {
    this.cart.clear();
  }

  total() {
    return this.cart.totalPrice();
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const order = {
      customer: this.form.value,
      items: this.cart.snapshot,
      total: this.cart.totalPrice(),
      createdAt: new Date().toISOString(),
    };

    console.log('Order submitted', order);

    this.cart.clear();
    alert('Thank you! Your order has been placed.');
    this.router.navigate(['/']);
  }

}
