import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(): void {
    this.loading = true;
    this.http.get('https://angular-portafolio-luis-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((response: any) => {
        this.productos = response;
        console.log(this.productos);
        this.loading = false;
      });
  }
}
