import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes : any = [];
  loading : boolean = true;

  constructor(public servicio:ServicioService,public router:Router) { }

  ngOnInit() {
    this.servicio.inicio();
    this.servicio.getClientes().valueChanges()
    .subscribe(clientes=>{
      this.clientes = clientes;
      this.loading = false;
    });
  }

  public clientesOrganizar()
  {
    this.clientes = this.servicio.ordenar(this.clientes,'nombre');
    return this.clientes;
  }

  public back()
  {
    this.servicio.back();
  }

  public mostrar(idCli : any)
  {
    this.servicio.setIdCLi(idCli);
    this.router.navigate(['/cliente']);
  }

}
