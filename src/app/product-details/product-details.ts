import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product';
import { CartService } from '../services/cart.service';
import { Product as ProductModel } from '../models/Product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
})

export class ProductDetails implements OnInit {
  product: ProductModel = {} as ProductModel;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
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
