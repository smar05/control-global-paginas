import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Camera } from '@ionic-native/camera/ngx';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.page.html',
  styleUrls: ['./edit-producto.page.scss'],
})
export class EditProductoPage implements OnInit {

  id: number = null;
  producto: any = { id: null, nombre: null, ref: null, descripcion: null, precio: null, imagen1: null, imagen2: null, imagen3: null, imagen4: null, disponible: null, destacado: null, categoria: null }
  categorias: any = [];
  subVariantes: any = [];
  loading: boolean = true;

  constructor(public servicio: ServicioService, public camera: Camera) { }

  ngOnInit() {
    this.servicio.inicio();
    this.id = this.servicio.getId();
    this.servicio.getCategorias().valueChanges()
      .subscribe(categorias => {
        this.categorias = categorias;
      });
    if (this.id != 0) {
      this.servicio.getProducto(this.id).valueChanges()
        .subscribe(producto => {
          this.producto = producto;
          if (this.producto.variantesOp == undefined) {
            this.producto.variantesOp = null;
          }
          this.servicio.getSubVariantes(this.id).valueChanges().subscribe(datos => {
            this.subVariantes = datos;
            if (this.subVariantes == undefined) {
              this.subVariantes = [];
            }
            for(let i=0;i<this.subVariantes.length;i++){
              this.subVariantes[i].mostrar = true;
            }
          });
          this.loading = false;
        });
    } else {
      this.loading = false;
    }
    if (this.producto.disponible == null) {
      this.producto.disponible = false;
    }
    if (this.producto.destacado == null) {
      this.producto.destacado = false;
    }
    if (this.producto.variantes == null) {
      this.producto.variantes = false;
    }
  }

  public back() {
    this.servicio.back();
  }

  public categoriasOrganizar() {
    this.categorias = this.servicio.ordenar(this.categorias, 'nombre');
    return this.categorias;
  }

  public guardar() {
    if ((this.producto.categoria == null) || (this.producto.categoria == '') || (this.producto.categoria == undefined)) {
      this.servicio.presentAlert('Error', 'Ingrese la categoria del producto');
    } else {
      if (this.id == 0) {
        this.producto.id = this.id = Date.now();
        this.servicio.setId(this.id);
        this.servicio.exito('Producto Creado');
      } else {
        this.servicio.exito('Producto actualizado');
      }
      if (this.producto.variantes == false) {
        this.subVariantes = [];
        this.producto.variantesOp = null;
        this.producto.subVariante = [];
      }
      this.servicio.saveProducto(this.id, this.producto, this.subVariantes);
      //this.servicio.presentAlert('Guardado','Producto guardado');
      this.servicio.back();
    }
  }

  public borrar() {
    this.confirmar('Eliminar', 'si', 'No', 'Producto eliminado', 'El producto ha sido eliminado con exito');
    //this.servicio.presentAlert('Eliminado','Producto eliminado con exito');
  }

  public confirmar(titulo: string, botonSi: string, botonNo: string, tituloConfirmado: string, textoConfirmado: string) {
    Swal.fire({
      title: titulo,
      //text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: botonSi,
      cancelButtonText: botonNo
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          tituloConfirmado,
          textoConfirmado,
          'success'
        )
        this.servicio.deleteProducto(this.id);
        this.back();
      }
    })
  }

  async galeria(a: number) {

    const { value: file } = await Swal.fire({
      title: 'Selecciona una imagen',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    })

    if (a == 0) {
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.producto.imagen1 = e.target.result;
          this.servicio.exito('Listo');
        }
        reader.readAsDataURL(file)
      } else {
        this.servicio.presentAlert('Error', 'Ha ocurrido un error');
      }
    } else if (a == 1) {
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
              this.producto.imagen2 = e.target.result;
              this.servicio.exito('Listo');
            }
            reader.readAsDataURL(file)
          } else {
            this.servicio.presentAlert('Error', 'Ha ocurrido un error');
          }
        }
        reader.readAsDataURL(file)
      }
    } else if (a == 2) {
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
              this.producto.imagen3 = e.target.result;
              this.servicio.exito('Listo');
            }
            reader.readAsDataURL(file)
          } else {
            this.servicio.presentAlert('Error', 'Ha ocurrido un error');
          }
        }
        reader.readAsDataURL(file)
      }
    } else if (a == 3) {
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
              this.producto.imagen4 = e.target.result;
              this.servicio.exito('Listo');
            }
            reader.readAsDataURL(file)
          } else {
            this.servicio.presentAlert('Error', 'Ha ocurrido un error');
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }

  public disponible() {
    if (this.producto.disponible == true) {
      this.producto.disponible = false;
    } else {
      this.producto.disponible = true;
    }
  }

  public destacado() {
    if (this.producto.destacado == true) {
      this.producto.destacado = false;
    } else {
      this.producto.destacado = true;
    }
  }

  async agregarVariante() {
    const { value: variante } = await Swal.fire({
      title: 'Nombre de la variante',
      input: 'text',
      inputLabel: 'Ingrese el nombre',
      inputPlaceholder: 'Ingrese el nombre'
    })
    if ((variante != null) && (variante != undefined)) {
      this.producto.variantesOp = variante
      this.producto.subVariante = [];
      this.subVariantes = [];
      Swal.fire(`Variante creada: ${variante}`)
    } else {
      this.servicio.presentAlert('Error', 'Ingrese una nombre');
    }
  }

  public deleteVariante() {
    Swal.fire({
      title: '¿Desea borrar la variante?',
      //text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado',
          'Eliminado con exito',
          'success'
        )
        this.producto.variantesOp = null;
        this.producto.variantes = false;
        this.producto.subVariante = [];
        this.subVariantes = [];
      }
    })
  }

  async agregarSubVariante() {
    const { value: subVariante } = await Swal.fire({
      title: 'Nombre de la subvariante',
      input: 'text',
      inputLabel: 'Ingrese el nombre',
      inputPlaceholder: 'Ingrese el nombre'
    })
    if ((subVariante != null) && (subVariante != undefined)) {
      let subVarianteNueva: any = { id: null, nombre: null, precio: 0 };
      subVarianteNueva.id = Date.now();
      subVarianteNueva.nombre = subVariante;
      subVarianteNueva.mostrar = true;
      this.subVariantes.push(subVarianteNueva);
      Swal.fire(`Subvariante creada: ${subVariante}`)
    } else {
      this.servicio.presentAlert('Error', 'Ingrese una nombre');
    }
  }

  public deleteSubVariante(j: any) {
    Swal.fire({
      title: '¿Desea borrar la subvariante?',
      //text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.subVariantes[j].mostrar = false;
        this.subVariantes[j].nombre = null;
        this.subVariantes[j].precio = null;
        Swal.fire(
          'Eliminado',
          'Eliminado con exito',
          'success'
        )        
      }
    })
  }
}
