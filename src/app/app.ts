import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { NavBar } from './nav-bar/nav-bar'; 
import { ProductItem } from './product-item/product-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductList, NavBar, ProductItem],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-store');
}
