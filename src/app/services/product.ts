import { Injectable } from '@angular/core';
import { Product as ProductModel } from '../models/Product';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  private apiUrl: string = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<ProductModel | undefined> {
    return this.http.get<ProductModel[]>(this.apiUrl).pipe(
      map(products => products.find(p => p.id === id))
    );
}

}
