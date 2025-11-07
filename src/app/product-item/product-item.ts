import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product as ProductModel } from '../models/Product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css'],
})
export class ProductItem {
  // Define an input property to receive product data
  @Input() product!: ProductModel;

  // Define an output event to notify when a product is selected
  @Output() selectProductEvent = new EventEmitter<number>();

  // Define an output event to notify when a product is added to the cart
  @Output() addToCartEvent = new EventEmitter<ProductModel>();

  // Emit the selected product ID when the product image is clicked
  onSelectProduct() {
    this.selectProductEvent.emit(this.product.id);
  }

  addToCart() {
    this.addToCartEvent.emit(this.product);

    alert(`${this.product.name} has been added to your cart!`);
  }

}
