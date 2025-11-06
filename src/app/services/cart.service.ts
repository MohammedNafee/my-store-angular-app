import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product as ProductModel } from '../models/Product';

const CART_KEY = 'my-store-cart-v1';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _items$ = new BehaviorSubject<ProductModel[]>(this.load() || []);
  readonly items$ = this._items$.asObservable();

  private load(): ProductModel[] | null {
    try {
      if (typeof window === 'undefined') return null;
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) as ProductModel[] : null;
    } catch {
      return null;
    }
  }

  private persist(items: ProductModel[]) {
    try {
      if (typeof window === 'undefined') return;
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {
      // ignore persistence errors
    }
  }

  get snapshot(): ProductModel[] {
    return this._items$.value;
  }

  add(item: ProductModel) {
    const items = [...this._items$.value, item];
    this._items$.next(items);
    this.persist(items);
  }

  remove(id: number) {
    const items = this._items$.value.filter(i => i.id !== id);
    this._items$.next(items);
    this.persist(items);
  }

  clear() {
    this._items$.next([]);
    this.persist([]);
  }

  totalPrice(): number {
    return this._items$.value.reduce((s, i) => s + (i.price || 0), 0);
  }
}
