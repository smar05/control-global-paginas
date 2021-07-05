import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias : any = [];
  loading : boolean = true;

  constructor(public servicio:ServicioService,public router:Router) { }

  ngOnInit() {
    this.servicio.inicio();
    this.servicio.getCategorias().valueChanges()
    .subscribe(categorias=>
      {
        this.categorias = categorias;
        this.loading = false;
      });
  }

  public back()
  {
    this.servicio.back();
  }

  public create(id:number)
  {
    this.servicio.setIdC(id);
    this.router.navigate(['/edit-categoria']);
  }

  public categoriasOrganizar()
  {
    this.categorias = this.servicio.ordenar(this.categorias,'nombre');
    return this.categorias;
  }

}
