import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos : any = [];
  getCategorias : any = [];
  pagina : any = [];
  loading : boolean = true;

  constructor(public servicio:ServicioService,public router:Router) { }

  ngOnInit() {
    this.servicio.inicio();
    this.servicio.getCategorias().valueChanges()
    .subscribe(datos=>{
      this.getCategorias = datos;
      for(let i=0 ; i<this.getCategorias.length ; i++){
        this.getCategorias[i].mostrar = false;
      }
    });
    this.servicio.getPagina().valueChanges()
    .subscribe(datos =>{
      this.pagina = datos;
    });
    this.servicio.getProductos().valueChanges()
    .subscribe(productos =>{
      this.productos = productos;
      this.loading = false;
    });        
  }

  public productosOrdenar()
  {
    this.productos = this.servicio.ordenar(this.productos,'nombre');
    return this.productos;
  }

  public categoriasOrdenar()
  {
    this.getCategorias = this.servicio.ordenar(this.getCategorias,'nombre');
    return this.getCategorias;
  }

  public create(id:number)
  {
    this.servicio.setId(id);
    this.router.navigate(['/edit-producto']);
  }

  public back()
  {
    this.servicio.back();
  }

  public categorias()
  {
    this.router.navigate(['/categorias']);
  }

  public catalogo()
  {
    this.servicio.exito('Generando Catalogo');
    this.servicio.createCatalogo(this.productosOrdenar(),this.categoriasOrdenar(),this.pagina);
  }

  public mostrarCategoria(id : number){
    for(let i = 0 ; i< this.getCategorias.length;i++){
      if(i==id){
        if(this.getCategorias[id].mostrar == true){
          this.getCategorias[id].mostrar = false;
        }else if(this.getCategorias[id].mostrar == false){
          this.getCategorias[id].mostrar = true;
        }else{
          this.getCategorias[id].mostrar = false;
        }
      }else{
        this.getCategorias[i].mostrar = false;
      }
    }    
  }

}
