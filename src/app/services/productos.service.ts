import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise((resolve, reject)=>{
      this.loading = true;
      this.http.get('https://angular-portafolio-luis-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((response: any) => {
          this.productos = response;
          this.loading = false;
          
        });
    });

    
  }

  public getProducto(id: string): any {
    
    return this.http.get(`https://angular-portafolio-luis-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  public buscarProducto(termino:string){
    this.productosFiltrado = [];
    if(this.productos.length ==0 ){
      this.cargarProductos().then(()=>{
        this.filtrarProductos(termino);
      });
    }else{
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino:string){
    termino = termino.toLowerCase();
    this.productos.forEach(pro=>{
      if(pro.categoria.toLocaleLowerCase().includes(termino) || pro.titulo.toLocaleLowerCase().includes(termino))
        this.productosFiltrado.push(pro);
    })
    console.log(this.productosFiltrado);
  }
}
