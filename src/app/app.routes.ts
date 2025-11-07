import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';
import { ProductDetails } from './product-details/product-details';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation';


export const routes: Routes = [
	{ path: '', component: ProductList },
	{ path: 'products', component: Cart },
	{ path: 'order-confirmation', component: OrderConfirmationComponent },
	{ path: 'products/:id', component: ProductDetails }
];
