import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion | undefined;
  id:string ="";
  constructor(private route: ActivatedRoute, private productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {      
      this.productoService.getProducto(params['id'])
        .subscribe((response: ProductoDescripcion) => {          
          this.producto = response;
          this.id = params['id'];
        });
    });
  }

}
