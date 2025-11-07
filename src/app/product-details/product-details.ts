import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product';
import { CartService } from '../services/cart.service';
import { Product as ProductModel } from '../models/Product';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
})

export class ProductDetails implements OnInit {
  
  product?: ProductModel;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}
  

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ProductDetails initialized with product ID:', productId);
    if (productId) {
      console.log('Fetching details for product ID:', productId);
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
        console.log('Product details loaded:', this.product);
        this.cdr.detectChanges();
      });
    } else {
      console.error('No product ID found in route parameters.');
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  addToCart() {
    if (this.product && this.product.id) {
      this.cartService.add(this.product);
      alert(`${this.product.name} has been added to your cart!`);
    }
  }

}
