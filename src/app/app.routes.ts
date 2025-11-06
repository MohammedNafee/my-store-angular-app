import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';

export const routes: Routes = [
	{ path: '', component: ProductList },
	{ path: 'products', component: Cart }
];
