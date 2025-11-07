import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Product as ProductModel } from '../models/Product';
import { ProductService } from '../services/product';
import { CartService } from '../services/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBar } from '../nav-bar/nav-bar';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, NavBar, ProductItem],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList implements OnInit {

  title: string = 'My Store';
  products: ProductModel[] = [];

  constructor(
    private productService: ProductService, 
    private cart: CartService,
    private router: Router
  ) { 
    // Refresh products every time we navigate to this component
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadProducts();
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  onAddToCart(product: ProductModel) {
    // Add the product to the shared cart service
    this.cart.add(product);
    console.log(`${product.name} added to cart.`);
  }

  onSelectProduct(productId: number) {
    // Navigate to the product details page
    this.router.navigate(['/products', productId]);
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

}
