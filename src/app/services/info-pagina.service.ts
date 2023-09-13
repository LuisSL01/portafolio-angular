import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  cargada: boolean = false;
  info: InfoPagina = {};
  constructor(private http: HttpClient) {

    this.http.get('assets/data/data-page.json')
      .subscribe((res: InfoPagina) => {
        this.cargada = true;
        this.info = res;
      })
  }
}
