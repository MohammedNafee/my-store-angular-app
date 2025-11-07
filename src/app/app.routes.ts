import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';
import { ProductDetails } from './product-details/product-details';


export const routes: Routes = [
	{ path: '', component: ProductList },
	{ path: 'products', component: Cart },
	{ path: 'products/:id', component: ProductDetails }
];
