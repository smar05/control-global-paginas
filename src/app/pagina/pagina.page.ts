import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {

  pagina: any = { indicativo: null, whatsapp: null, facebook: null, instagram: null, twitter: null, direccion: null, maps: null, correo: null, nosotros: null, pagina: null , logo:null};
  loading: boolean = true;

  constructor(public servicio: ServicioService) { }

  ngOnInit() {
    this.servicio.inicio();
    this.servicio.getPagina().valueChanges()
      .subscribe(pagina => {
        if(pagina){
          this.pagina = pagina;
          if(this.pagina.logo == undefined){
            this.pagina.logo = null;
          }
        }else{
          this.pagina = {}
        }
        this.loading = false;
      });
  }

  public back() {
    this.servicio.back();
  }

  public save() {
    this.servicio.savePagina(this.pagina);
    this.back();
    this.servicio.exito('Informacion actualizada');
    //this.servicio.presentAlert('Guardado','Informacion guardada con exito');
  }

  async logo() {

    const { value: file } = await Swal.fire({
      title: 'Selecciona un logo',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    })

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.pagina.logo = e.target.result;
        this.servicio.exito('Listo');
      }
      reader.readAsDataURL(file)
    } else {
      this.servicio.presentAlert('Error', 'Ha ocurrido un error');
    }

  }
}
