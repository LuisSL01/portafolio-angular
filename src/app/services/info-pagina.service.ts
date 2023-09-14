import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  loading: boolean = false;
  info: InfoPagina = {};
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(): void {
    this.loading = true;
    this.http.get('assets/data/data-page.json')
      .subscribe((res: InfoPagina) => {        
        this.info = res;
        this.loading = false;
      });

  }

  private cargarEquipo(): void {
    this.http.get('https://angular-portafolio-luis-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((res: any) => {
        this.equipo = res;
      });
  }
}
