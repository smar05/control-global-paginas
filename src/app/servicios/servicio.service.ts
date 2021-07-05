import { Inject, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { sortBy } from 'sort-by-typescript';
import { PdfMakeWrapper, Txt, Columns, Table, QR, Img } from 'pdfmake-wrapper';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private uid: string = null;
  private id: number = null;
  private idC: number = null;
  private idP: number = null;
  private idCli: number = null;
  private idCLiPe: number = null;
  private whatsapp: number = null;
  private nombre: string = null;
  private correo: string = null;
  private envio: any = { departamnto: null, ciudad: null, direccion: null };

  constructor
    (
      public database: AngularFireDatabase,
      public auth: AngularFireAuth,
      public router: Router,
      public alert: AlertController,
      public location: Location,
      public email: EmailComposer,
      @Inject(DOCUMENT) public doc: Document
    ) { }

  async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: titulo,
      //subHeader: 'Subtitle',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  public exito(titulo: string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: titulo,
      showConfirmButton: false,
      timer: 1500
    })
  }

  public ordenar(arreglo: any, parametro: string) {
    return arreglo.sort(sortBy(parametro));
  }

  public setId(a: number) {
    this.id = a;
  }

  public getId() {
    return this.id;
  }

  public setIdPeCli(id: number, whatsapp: number, nombre: string, correo: string, envio: any) {
    this.idCLiPe = id;
    this.whatsapp = whatsapp;
    this.nombre = nombre;
    this.correo = correo;
    this.envio = envio;
  }

  public getIdPeCli() {
    return this.idCLiPe;
  }

  public getWhatsapp() {
    return this.whatsapp;
  }

  public setIdC(a: number) {
    this.idC = a;
  }

  public getIdC() {
    return this.idC;
  }

  public getUid() {
    return this.uid;
  }

  public setUid(a: string) {
    this.uid = a;
  }

  public getIdp() {
    return this.idP;
  }

  public setIdp(a: number) {
    this.idP = a;
  }

  public setIdCLi(idCLi: number) {
    this.idCli = idCLi;
  }

  public getIdCLi() {
    return this.idCli;
  }

  public getNombre() {
    return this.nombre;
  }

  public getEnvio() {
    return this.envio;
  }

  public getCorreo() {
    return this.correo;
  }

  public back() {
    this.location.back();
  }

  public inicio(){
    if((this.uid == null)||(this.uid == undefined)){
      this.router.navigate(['/home']);
    }else{
      console.log('Datos activos');
    }
  }

  public login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.auth.auth.signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
          this.router.navigate(['/home']);
        }).catch(err => {
          this.presentAlert('Error', 'Correo o contraseña erroneo');
          rejected(err)
        });
    });
  }

  public register(user: any, password: string) {
    return new Promise((resolve, rejected) => {
      this.auth.auth.createUserWithEmailAndPassword(user.email, password)
        .then(res => {
          resolve(res);
          this.router.navigate(['/login']);
        }).catch(err => {
          this.presentAlert('Error', 'Correo o contraseña erroneo');
          rejected(err)
        });
    });
  }

  public goToUrl(url: string) {
    this.doc.location.href = url;
  }

  public userDetails() {
    return this.auth.user;
  }

  public logOut() {
    this.auth.auth.signOut()
      .then(a => {
        this.router.navigate(['/login']);
      });
  }

  public changePassword(email: string) {
    return this.auth.auth.sendPasswordResetEmail(email);
  }

  public sendEmail(to: string, subject: string, body: string) {
    this.email.open(
      {
        to: to,
        subject: subject,
        body: body,
        isHtml: true
      });
  }

  public createCotizacion(pagina: any, datos: any, productos: any) {
    const pdf = new PdfMakeWrapper;
    pdf.pageSize('A4');
    pdf.pageMargins([40, 60, 40, 60]);
    pdf.info({
      title: 'Cotizacion_' + datos.nombre + '_' + datos.id
    });
    //pdf.watermark( new Txt('watermark with Txt object').color('blue').end );
    if (pagina.nombre != null) {
      pdf.add(
        new Columns(
          [new Txt(pagina.nombre).fontSize(20).alignment('left').bold().italics().end, new Txt('COTIZACION').alignment('right').fontSize(20).end],
        ).columnGap(10).bold().end
      );
    } else {
      this.presentAlert('Error', 'Ingrese el nombre de su negocio en la seccion de pagina');
    }
    let fecha: any = { anio: null, mes: null, dia: null };
    fecha.anio = new Date(datos.fecha).getFullYear();
    fecha.mes = new Date(datos.fecha).getMonth();
    fecha.dia = new Date(datos.fecha).getDay();

    let celCo : string = null;

    if (!((pagina.correo == null) || (pagina.correo == ''))) {
      celCo = 'Correo: ' + pagina.correo + '\n';
    }else{
      celCo = '';
    }

    if (!((pagina.whatsapp == null) || (pagina.whatsapp == ''))) {
      celCo += 'Celular: ' + pagina.indicativo + pagina.whatsapp;
      pdf.add(
        new Columns(
          [new Txt(celCo).fontSize(10).alignment('left').bold().italics().end, new Txt('Id: '+datos.fecha+'\nFecha: ' + fecha.anio.toString() + '/' + fecha.mes.toString() + '/' + fecha.dia.toString()).alignment('right').fontSize(10).end],
        ).columnGap(10).bold().end
      );
    } else {
      pdf.add(
        new Txt('Fecha: ' + datos.fecha.toString()).alignment('right').fontSize(10).end
      );
    }    
    if (!((pagina.direccion == null) || (pagina.direccion == ''))) {
      pdf.add(
        new Txt('Direccion: ' + pagina.direccion).fontSize(10).alignment('left').bold().italics().end
      );
    }
    if (!((datos.asesor == null) || (datos.asesor == ''))) {
      pdf.add(
        new Txt('Asesor: ' + datos.asesor).fontSize(10).alignment('left').bold().italics().end
      );
    }
    pdf.add(
      new Txt('\nCLIENTE').fontSize(15).alignment('left').bold().end
    );
    if (datos.nombre != null) {
      pdf.add(
        new Txt('Nombre: ' + datos.nombre).fontSize(10).alignment('left').bold().italics().end
      );
    } else {
      this.presentAlert('Error', 'Ingrese el nombre del cliente');
    }
    if (!((datos.correo == null) || (datos.correo == ''))) {
      pdf.add(
        new Txt('Correo: ' + datos.correo).fontSize(10).alignment('left').bold().italics().end
      );
    }
    if (datos.whatsapp != null) {
      pdf.add(
        new Txt('Celular: ' + datos.whatsapp).fontSize(10).alignment('left').bold().italics().end
      );
    }
    if (!((datos.departamento == null) || (datos.departamento == '')) && !((datos.ciudad == null) || (datos.ciudad == ''))) {
      pdf.add(
        new Txt('Departamento: ' + datos.departamento).fontSize(10).alignment('left').bold().italics().end
      );
      pdf.add(
        new Txt('Ciudad: ' + datos.ciudad).fontSize(10).alignment('left').bold().italics().end
      );
    }
    if (!((datos.direccion == null) || (datos.direccion == ''))) {
      pdf.add(
        new Txt('Direccion: ' + datos.direccion).fontSize(10).alignment('left').bold().italics().end
      );
    }

    pdf.add(
      new Txt('\n').end
    );

    pdf.add(new Table([
      [new Txt('Referencia').fontSize(15).alignment('center').bold().italics().end, new Txt('Producto').fontSize(15).alignment('center').bold().italics().end, new Txt('Cantidad').fontSize(15).alignment('center').bold().italics().end, new Txt('Precio').fontSize(15).alignment('center').bold().italics().end, new Txt('Total').fontSize(15).alignment('center').bold().italics().end]
    ]).widths([76, 176, 65, 76, 76]).layout({
      fillColor: (rowIndex: number, node: any, columnIndex: number) => {
        return '#CCCCCC';
      }
    }).end);

    productos.forEach(
      function (element: any, index: any) {
        if (!((element.cantidad == null) || (element.cantidad == 0))) {
          let aux: string = null
          if (element.caracteristica) {
            aux = element.nombre + ' - ' + element.caracteristica;
          } else {
            aux = element.nombre;
          }
          if ((index % 2) == 0) {
            pdf.add(new Table([
              [new Txt(element.ref).fontSize(8).alignment('center').bold().italics().end, new Txt(aux).fontSize(8).alignment('center').bold().end, new Txt(element.cantidad).fontSize(8).alignment('center').bold().end, new Txt('$ ' + element.precio).fontSize(8).alignment('center').bold().end, new Txt('$ ' + (element.precio * element.cantidad).toString()).fontSize(8).alignment('center').bold().end]
            ]).widths([76, 176, 65, 76, 76]).end);
          } else {
            pdf.add(new Table([
              [new Txt(element.ref).fontSize(8).alignment('center').bold().italics().end, new Txt(aux).fontSize(8).alignment('center').bold().end, new Txt(element.cantidad).fontSize(8).alignment('center').bold().end, new Txt('$ ' + element.precio).fontSize(8).alignment('center').bold().end, new Txt('$ ' + (element.precio * element.cantidad).toString()).fontSize(8).alignment('center').bold().end]
            ]).widths([76, 176, 65, 76, 76]).layout({
              fillColor: (rowIndex: number, node: any, columnIndex: number) => {
                return '#e6e6e6';
              }
            }).end);
          }
        }
      }
    );

    if(datos.subTotal){
      pdf.add(
        new Txt('Subtotal: $' + datos.subTotal).fontSize(10).alignment('right').bold().end
      );
    }

    if (!((datos.iva == 0) || (datos.iva == null))) {      
      pdf.add(
        new Txt('Impuestos: %' + datos.iva).fontSize(10).alignment('right').bold().end
      );
    }

    if (!((datos.descuento == 0) || (datos.descuento == null))) {
      pdf.add(
        new Txt('Descuento: %' + datos.descuento).fontSize(10).alignment('right').bold().end
      );
    }

    if (!((datos.envio == 0) || (datos.envio == null))) {
      pdf.add(
        new Txt('Envio: $' + datos.envio).fontSize(10).alignment('right').bold().end
      );
    }

    pdf.add(
      new Txt('Total: $' + datos.total).fontSize(15).alignment('right').bold().end
    );

    pdf.add(
      new Txt('________________________________________________________________________').fontSize(15).alignment('center').bold().end
    );

    if (datos.nota != null) {
      pdf.add(
        new Txt('Nota del cliente: ').fontSize(15).alignment('left').bold().end
      );
      pdf.add(
        new Txt(datos.nota).fontSize(10).alignment('left').bold().italics().end
      );
    }

    pdf.add(
      new Columns(
        [new Txt('\nFirma:\n\n\n______________________________').fontSize(12).alignment('left').bold().end, new QR('Cotizacion_' + datos.nombre + '_' + datos.id).alignment('right').fit(80).end],
      ).columnGap(10).bold().end
    );

    let info: any = { nombre: pagina.nombre, whatsapp: pagina.whatsapp, correo: pagina.correo, direccion: pagina.direccion, facebook: pagina.facebook, instagram: pagina.instagram, twitter: pagina.twitter };

    if (!((pagina.nombre == null) || (pagina.nombre == ''))) {
      info.nombre = pagina.nombre;
    } else {
      info.nombre = '';
    }

    if ((pagina.indicativo != null) && (pagina.whatsapp != null)) {
      info.whatsapp = ' | Celular/Whatsapp: ' + pagina.indicativo + pagina.whatsapp;
    } else {
      info.whatsapp = '';
    }

    if (!((pagina.correo == null) || (pagina.correo == ''))) {
      info.correo = ' | Correo: ' + pagina.correo;
    } else {
      info.correo = '';
    }

    if (!((pagina.direccion == null) || (pagina.direccion == ''))) {
      info.direccion = ' | Direccion: ' + pagina.direccion;
    } else {
      info.direccion = '';
    }

    if (!((pagina.facebook == null) || (pagina.facebook == ''))) {
      info.facebook = 'Facebook: ' + pagina.facebook;
    } else {
      info.facebook = '';
    }

    if (!((pagina.instagram == null) || (pagina.instagram == ''))) {
      info.instagram = ' | Instagram: ' + pagina.instagram;
    } else {
      info.intagram = '';
    }

    if (!((pagina.twitter == null) || (pagina.twitter == ''))) {
      info.twitter = ' | Twitter: ' + pagina.twitter;
    } else {
      info.twitter = '';
    }

    pdf.footer(
      new Txt(
        'Si usted tiene alguna pregunta sobre esta cotizacion, por favor, pongase en contacto con nosotros.\n' +
        info.nombre + info.whatsapp + info.correo + info.direccion + ' \n' +
        info.facebook + info.instagram + info.twitter
      ).fontSize(10).alignment('center').bold().italics().end
    );

    pdf.create().download('Cotizacion_' + datos.nombre + '_' + datos.id);
    //pdf.create().open();
  }

  //////////////////////////////////////////////////////////////////////////////////////////////

  public createRotulo(pagina: any, datos: any, productos: any) {
    const pdf = new PdfMakeWrapper;
    pdf.pageSize('A4');
    pdf.pageMargins([40, 60, 40, 60]);
    pdf.info({
      title: 'Rotulo_' + datos.nombre + '_' + datos.id
    });

    let info: any = { nombre: pagina.nombre, whatsapp: pagina.whatsapp, correo: pagina.correo, direccion: pagina.direccion, facebook: pagina.facebook, instagram: pagina.instagram, twitter: pagina.twitter };

    if (!((pagina.nombre == null) || (pagina.nombre == ''))) {
      info.nombre = pagina.nombre;
    } else {
      info.nombre = '';
    }

    if ((pagina.indicativo != null) && (pagina.whatsapp != null)) {
      info.whatsapp = ' | Celular/Whatsapp: ' + pagina.indicativo + pagina.whatsapp;
    } else {
      info.whatsapp = '';
    }

    if (!((pagina.correo == null) || (pagina.correo == ''))) {
      info.correo = ' | Correo: ' + pagina.correo;
    } else {
      info.correo = '';
    }

    if (!((pagina.direccion == null) || (pagina.direccion == ''))) {
      info.direccion = ' | Direccion: ' + pagina.direccion;
    } else {
      info.direccion = '';
    }

    if (!((pagina.facebook == null) || (pagina.facebook == ''))) {
      info.facebook = 'Facebook: ' + pagina.facebook;
    } else {
      info.facebook = '';
    }

    if (!((pagina.instagram == null) || (pagina.instagram == ''))) {
      info.instagram = ' | Instagram: ' + pagina.instagram;
    } else {
      info.intagram = '';
    }

    if (!((pagina.twitter == null) || (pagina.twitter == ''))) {
      info.twitter = ' | Twitter: ' + pagina.twitter;
    } else {
      info.twitter = '';
    }

    for (let i = 0; i < pagina.rotulos; i++) {
      let texto: string = 'ROTULO DE TRANSPORTE\n';
      if (pagina.rotulos > 0) {
        texto += 'Caja: ' + (i + 1).toString() + '/' + pagina.rotulos.toString();
      }
      pdf.add(
        new Columns(
          [new Txt(texto).fontSize(18).alignment('left').bold().end, new QR('Rotulo_' + datos.nombre + '_' + datos.id).alignment('center').fit(70).end, new Txt('Numero de guia: \n' + datos.id.toString()).fontSize(18).alignment('right').bold().end],
        ).columnGap(10).bold().end
      );

      pdf.add(
        new Txt('___________________________________________________________________________').fontSize(15).alignment('center').bold().end
      );

      pdf.add(
        new Columns(
          [new Txt('Remitente').fontSize(15).alignment('left').bold().end, new Txt('Destinatario').fontSize(15).alignment('left').bold().end],
        ).columnGap(10).bold().end
      );

      let envia: string = '';

      if (pagina.nombre != null) {
        envia += 'Nombre: ' + pagina.nombre + '\n';
      } else {
        this.presentAlert('Error', 'Ingrese el nombre de su negocio en la seccion de pagina');
      }
      if (!((pagina.direccion == null) || (pagina.direccion == ''))) {
        envia += 'Direccion: ' + pagina.direccion + '\n';
      }
      if (!((pagina.correo == null) || (pagina.correo == ''))) {
        envia += 'Correo: ' + pagina.correo + '\n';
      }
      if (!((pagina.whatsapp == null) || (pagina.whatsapp == ''))) {
        envia += 'Celular: ' + pagina.indicativo + pagina.whatsapp + '\n';
      }

      let recibe: string = '';

      if (datos.nombre != null) {
        recibe += 'Nombre: ' + datos.nombre + '\n';
      } else {
        this.presentAlert('Error', 'Ingrese el nombre del cliente');
      }
      if (!((datos.correo == null) || (datos.correo == ''))) {
        recibe += 'Correo: ' + datos.correo + '\n';
      }
      if (datos.whatsapp != null) {
        recibe += 'Celular: ' + datos.whatsapp + '\n';
      }
      if (!((datos.departamento == null) || (datos.departamento == '')) && !((datos.ciudad == null) || (datos.ciudad == ''))) {
        recibe += 'Departamento: ' + datos.departamento + '\n' + 'Ciudad: ' + datos.ciudad + '\n';
      }
      if (!((datos.direccion == null) || (datos.direccion == ''))) {
        recibe += 'Direccion: ' + datos.direccion + '\n';
      }

      pdf.add(
        new Columns(
          [new Txt(envia).fontSize(10).alignment('left').bold().italics().end, new Txt(recibe).fontSize(10).alignment('left').bold().italics().end],
        ).columnGap(10).bold().end
      );

      pdf.add(
        new Txt('Total: $' + datos.total).fontSize(15).alignment('center').bold().italics().end
      );

      pdf.add(
        new Txt(
          'Si usted tiene alguna pregunta sobre este rotulo, por favor, pongase en contacto con nosotros.\n' +
          info.nombre + info.whatsapp + info.correo + info.direccion + ' \n' +
          info.facebook + info.instagram + info.twitter
        ).fontSize(10).alignment('center').bold().italics().end
      );

      pdf.add(
        new Txt('_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ').fontSize(15).alignment('center').bold().end
      );

      pdf.add(
        new Txt('\n').end
      );

    }

    pdf.add(
      new Txt('CONTENIDO').fontSize(18).alignment('center').bold().end
    );

    pdf.add(new Table([
      [new Txt('Referencia').fontSize(15).alignment('center').bold().italics().end, new Txt('Producto').fontSize(15).alignment('center').bold().italics().end, new Txt('Cantidad').fontSize(15).alignment('center').bold().italics().end]
    ]).widths("*").layout({
      fillColor: (rowIndex: number, node: any, columnIndex: number) => {
        return '#CCCCCC';
      }
    }).end);

    productos.forEach(
      function (element: any, index: any) {
        if (!((element.cantidad == null) || (element.cantidad == 0))) {
          let aux: string = null
          if (element.caracteristica) {
            aux = element.nombre + ' - ' + element.caracteristica;
          } else {
            aux = element.nombre;
          }
          if ((index % 2) == 0) {
            pdf.add(new Table([
              [new Txt(element.ref).fontSize(8).alignment('center').bold().italics().end, new Txt(aux).fontSize(8).alignment('center').bold().end, new Txt(element.cantidad).fontSize(8).alignment('center').bold().end]
            ]).widths("*").end);
          } else {
            pdf.add(new Table([
              [new Txt(element.ref).fontSize(8).alignment('center').bold().italics().end, new Txt(aux).fontSize(8).alignment('center').bold().end, new Txt(element.cantidad).fontSize(8).alignment('center').bold().end]
            ]).widths("*").layout({
              fillColor: (rowIndex: number, node: any, columnIndex: number) => {
                return '#e6e6e6';
              }
            }).end);
          }
        }
      }
    );

    if (datos.nota != null) {
      pdf.add(
        new Txt('Nota del cliente: ').fontSize(15).alignment('left').bold().end
      );
      pdf.add(
        new Txt(datos.nota).fontSize(10).alignment('left').bold().italics().end
      );
    }

    pdf.create().download('Rotulo_' + datos.nombre + '_' + datos.id);
    //pdf.create().open();
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  async createCatalogo(productos: any, categorias: any, pagina: any) {

    const pdf = new PdfMakeWrapper;
    pdf.pageSize('A4');
    pdf.pageMargins([40, 60, 40, 60]);
    pdf.info({
      title: 'Catalogo ' + pagina.nombre
    });

    if (pagina.logo) {
      pdf.add(
        await new Img(pagina.logo).fit([200, 200]).alignment("center").build()
      );
    }

    if (pagina.nombre) {
      pdf.add(
        new Txt(pagina.nombre).fontSize(50).bold().italics().alignment('center').end
      );
    }

    pdf.add(
      new Txt('Catalogo de productos\n').fontSize(30).bold().alignment('center').end
    );

    for (let j = 0; j < categorias.length; j++) {

      pdf.add(
        new Txt('\n' + categorias[j].nombre).fontSize(25).alignment('center').bold().italics().end
      );

      pdf.add(new Table([
        [new Txt('Ref').fontSize(18).alignment('center').bold().italics().end, new Txt('Imagen').fontSize(18).alignment('center').bold().italics().end, new Txt('Producto').fontSize(18).alignment('center').bold().italics().end, new Txt('Precio').fontSize(18).alignment('center').bold().italics().end]
      ]).widths([68, 150, 160, 100]).layout({
        fillColor: (rowIndex: number, node: any, columnIndex: number) => {
          return '#CCCCCC';
        }
      }).end);

      let contador : number = 0;
      for (let i = 0; i < productos.length; i++) {
        let aux: string = null;        

        aux = productos[i].nombre + '\n';

        if((productos[i].descripcion)&&(!(productos[i].descripcion == undefined))){
          aux += '\nDescripcion:\n'+productos[i].descripcion;
        }
        if((productos[i].variantes)&&(!(productos[i].variantes == undefined))) {
          aux += '\nVariante: ' + productos[i].variantesOp;
          /*for(let cont=0 ; cont<productos[i].subVariante.length ; cont++){
            if(cont == 0){
              aux += productos[i].subVariante[cont].nombre;
            }else{
              aux += ',' + productos[i].subVariante[cont].nombre;
            }            
          }*/
        }
        if (productos[i].categoria == categorias[j].id) {
          if (productos[i].disponible == true) {
            if ((contador % 2) == 0) {
              pdf.add(new Table([
                [new Txt(productos[i].ref).fontSize(12).alignment('center').bold().italics().end, await new Img(productos[i].imagen1).fit([82.25, 82.25]).alignment("center").build(), new Txt(aux).fontSize(12).alignment('center').bold().end, new Txt('$ ' + productos[i].precio).fontSize(12).alignment('center').bold().end]
              ]).widths([68, 150, 160, 100]).end);
            } else {
              pdf.add(new Table([
                [new Txt(productos[i].ref).fontSize(12).alignment('center').bold().italics().end, await new Img(productos[i].imagen1).fit([82.25, 82.25]).alignment("center").build(), new Txt(aux).fontSize(12).alignment('center').bold().end, new Txt('$ ' + productos[i].precio).fontSize(12).alignment('center').bold().end]
              ]).widths([68, 150, 160, 100]).layout({
                fillColor: (rowIndex: number, node: any, columnIndex: number) => {
                  return '#e6e6e6';
                }
              }).end);
            }
          } else {
            pdf.add(new Table([
              [new Txt(productos[i].ref).fontSize(12).alignment('center').bold().italics().end, await new Img(productos[i].imagen1).fit([82.25, 82.25]).alignment("center").build(), new Txt(aux + '\nAGOTADO').fontSize(12).alignment('center').bold().end, new Txt('$ ' + productos[i].precio).fontSize(12).alignment('center').bold().end]
            ]).widths([68, 150, 160, 100])
              .layout({
                fillColor: (rowIndex: number, node: any, columnIndex: number) => {
                  return '#ff5454';
                }
              }).end);
          }
          contador++;
        }
      }
    }

    let info: any = { nombre: pagina.nombre, whatsapp: pagina.whatsapp, correo: pagina.correo, direccion: pagina.direccion, facebook: pagina.facebook, instagram: pagina.instagram, twitter: pagina.twitter };

    if (!((pagina.nombre == null) || (pagina.nombre == ''))) {
      info.nombre = pagina.nombre;
    } else {
      info.nombre = '';
    }

    if ((pagina.indicativo != null) && (pagina.whatsapp != null)) {
      info.whatsapp = ' | Celular/Whatsapp: ' + pagina.indicativo + pagina.whatsapp;
    } else {
      info.whatsapp = '';
    }

    if (!((pagina.correo == null) || (pagina.correo == ''))) {
      info.correo = ' | Correo: ' + pagina.correo;
    } else {
      info.correo = '';
    }

    if (!((pagina.direccion == null) || (pagina.direccion == ''))) {
      info.direccion = ' | Direccion: ' + pagina.direccion;
    } else {
      info.direccion = '';
    }

    if (!((pagina.facebook == null) || (pagina.facebook == ''))) {
      info.facebook = 'Facebook: ' + pagina.facebook;
    } else {
      info.facebook = '';
    }

    if (!((pagina.instagram == null) || (pagina.instagram == ''))) {
      info.instagram = ' | Instagram: ' + pagina.instagram;
    } else {
      info.intagram = '';
    }

    if (!((pagina.twitter == null) || (pagina.twitter == ''))) {
      info.twitter = ' | Twitter: ' + pagina.twitter;
    } else {
      info.twitter = '';
    }

    pdf.footer(
      new Txt(
        'Si usted tiene alguna pregunta sobre este catalogo, por favor, pongase en contacto con nosotros.\n' +
        info.nombre + info.whatsapp + info.correo + info.direccion + ' \n' +
        info.facebook + info.instagram + info.twitter
      ).fontSize(10).alignment('center').bold().italics().end
    );

    pdf.create().download('Catalogo ' + pagina.nombre);

  }

  //whatsapp//////////////////////////////////////////////////////////////////////////////
  public sendWha(datos: any, productos: any, whatsapp: number) {
    let linkWha = null;
    this.exito('Abriendo Whatsapp');
    linkWha = 'https://api.whatsapp.com/send?phone=' + whatsapp + '&text=*NUEVO%20PEDIDO*%0A*Cliente%3A*%20' + datos.nombre.replace(/ /gi, '%20') + '%0A';
    if (!((datos.correo == null) || (datos.correo == ''))) {
      linkWha += '*Correo%3A*%20' + datos.correo.replace(/ /gi, '%20') + '%0A';
    }
    if (!((datos.departamento == null) || (datos.departamento == '')) && !((datos.ciudad == null) || (datos.ciudad == ''))) {
      linkWha += '*Departamento%3A*%20' + datos.departamento.replace(/ /gi, '%20') + '%0A';
      linkWha += '*Ciudad%3A*%20' + datos.ciudad.replace(/ /gi, '%20') + '%0A';
    }
    let direccion = null;
    if (!((datos.direccion == null) || (datos.direccion == ''))) {
      direccion = datos.direccion.replace(/ /gi, '%20');
      direccion = direccion.replace(/#/gi, '%23');
      direccion = direccion.replace(/\n/gi, '%0A');
      linkWha += '*Direccion%3A*%20' + direccion + '%0A';
    }
    let numero = null;
    if (!((datos.whatsapp == null) || (datos.whatsapp == '') || (datos.whatsapp == undefined))) {
      numero = datos.whatsapp.toString();
      numero = numero.replace(/ /gi, '%20');
      linkWha += '*Celular%3A*%20' + numero + '%0A';
    }
    if (!((datos.asesor == null) || (datos.asesor == ''))) {
      linkWha += '*Asesor%3A*%20' + datos.asesor.replace(/ /gi, '%20') + '%0A';
    }
    linkWha += '%0A';
    for (let i = 0; i < productos.length; i++) {
      if (!((productos[i].cantidad == 0) || (productos[i].cantidad == null))) {
        if (productos[i].variantes) {
          linkWha += productos[i].cantidad + 'x' + productos[i].nombre.replace(/ /gi, '%20') + '%20%24' + productos[i].precio + '%0A' + productos[i].variantesOp.replace(/ /gi, '%20') + '%3A%20' + productos[i].caracteristica.replace(/ /gi, '%20') + '%0A';
        } else {
          linkWha += productos[i].cantidad + 'x' + productos[i].nombre.replace(/ /gi, '%20') + '%20%24' + productos[i].precio + '%0A';
        }
      }
    }
    if (!((datos.nota == null) || (datos.nota == ''))) {
      linkWha += '%0A*Nota%3A*%0A' + datos.nota.replace(/ /gi, '%20') + '%0A';
    }
    if (!(((datos.iva == null) || (datos.iva == '')) || ((datos.descuento == null) || (datos.descuento == ''))||((datos.envio == null) || (datos.envio == '')))) {
      linkWha += '%0ASUBTOTAL%3A%20%24' + datos.subTotal;
    }
    if (!((datos.descuento == null) || (datos.descuento == ''))) {
      linkWha += '%0A*Descuento%3A*%20%25' + datos.descuento;
    }
    if (!((datos.iva == null) || (datos.iva == ''))) {
      linkWha += '%0A*Impuestos%3A*%20%25' + datos.iva;
    }
    if (!((datos.envio == null) || (datos.envio == ''))) {
      linkWha += '%0A*Envio%3A*%20' + datos.envio;
    }
    linkWha += '%0A*TOTAL%3A*%20%24' + datos.total;
    this.goToUrl(linkWha);
  }
  ///////////////////////////////////////////////////


  //usuario**********************************************************************
  public getDatosUsuario(id: string) {
    return this.database.object('usuario/' + id + '/datos/');
  }

  public saveDatosUsuario(usuario: any) {
    this.database.database.ref('usuario/' + usuario.uid + '/datos/').set(usuario);
  }
  //usuario**********************************************************************

  //Productos********************************************************************
  public getProductos() {
    return this.database.list('usuario/' + this.uid + '/productos');
  }

  public getProducto(id: number) {
    return this.database.object('usuario/' + this.uid + '/productos/' + id);
  }

  public getSubVariantes(id: any) {
    return this.database.list('usuario/' + this.uid + '/productos/' + id + '/subVariante');
  }

  public saveProducto(id: number, producto: any, subVariante: any) {
    this.database.database.ref('usuario/' + this.uid + '/productos/' + id).set(producto);
    if (subVariante != []) {
      for (let i = 0; i < subVariante.length; i++) {
        if (subVariante[i].mostrar == false) {
          this.database.database.ref('usuario/' + this.uid + '/productos/' + id + '/subVariante/' + subVariante[i].id).remove();
        } else {
          subVariante[i].mostrar = null;
          this.database.database.ref('usuario/' + this.uid + '/productos/' + id + '/subVariante/' + subVariante[i].id).set(subVariante[i]);
        }
      }
    }
  }

  public deleteProducto(id: number) {
    this.database.database.ref('usuario/' + this.uid + '/productos/' + id).remove();
  }
  //Productos********************************************************************

  //Categorias*******************************************************************
  public saveCategoria(categoria: any) {
    this.database.database.ref('usuario/' + this.uid + '/categorias/' + categoria.id).set(categoria);
  }

  public deleteCategoria(categoria: any) {
    this.database.database.ref('usuario/' + this.uid + '/categorias/' + categoria.id).remove();
  }

  public getCategoria(id: any) {
    return this.database.object('usuario/' + this.uid + '/categorias/' + id);
  }

  public getCategorias() {
    return this.database.list('usuario/' + this.uid + '/categorias');
  }
  //Categorias*******************************************************************

  //Pagina*******************************************************************
  public savePagina(pagina: any) {
    this.database.database.ref('usuario/' + this.uid + '/pagina').set(pagina);
  }

  public getPagina() {
    return this.database.object('usuario/' + this.uid + '/pagina');
  }
  //Pagina*******************************************************************

  //Pedidos*******************************************************************
  public deletePedido(id: any) {
    this.database.database.ref('usuario/' + this.uid + '/pedidos/' + id).remove();
  }

  public deletePedidos() {
    this.database.database.ref('usuario/' + this.uid + '/pedidos').remove();
  }

  public getPedidoDatos(id: any) {
    return this.database.object('usuario/' + this.uid + '/pedidos/' + id + '/datos');
  }

  public getPedidoProductos(id: any) {
    return this.database.list('usuario/' + this.uid + '/pedidos/' + id + '/productos');
  }

  public getPedidos() {
    return this.database.list('usuario/' + this.uid + '/pedidos');
  }

  public savePedido(datos: any, productos: any) {
    this.database.database.ref('usuario/' + this.uid + '/pedidos/' + datos.id + '/datos').set(datos);
    //this.database.database.ref('usuario/'+this.uid+'/pedidos/'+datos.id+'/productos').set(productos);
    for (let i = 0; i < productos.length; i++) {
      this.database.database.ref('usuario/' + this.uid + '/pedidos/' + datos.id + '/productos/' + productos[i].id).set(productos[i]);
    }
  }
  //Pedidos*******************************************************************

  //Clientes******************************************************************

  public getClientes() {
    return this.database.list('usuario/' + this.uid + '/clientes/');
  }

  public getDatosCliente(id: number) {
    return this.database.object('usuario/' + this.uid + '/clientes/' + id + '/datos');
  }

  public getPedidosCliente(id: number) {
    return this.database.list('usuario/' + this.uid + '/clientes/' + id + '/pedidos');
  }

  public saveCliente(datos: any, productos: any) {
    let datosPedido: any = { nota: datos.nota, total: datos.total, fecha: datos.fecha, id: datos.fecha, iva: datos.iva, subTotal: datos.subTotal, asesor: datos.asesor };
    if (datosPedido.iva == undefined) {
      datosPedido.iva = null;
    }
    if (datosPedido.subTotal == undefined) {
      datosPedido.subTotal = null;
    }
    if (datosPedido.total == undefined) {
      datosPedido.total = null;
    }
    if (datosPedido.nota == undefined) {
      datosPedido.nota = null;
    }
    if (datosPedido.asesor == undefined) {
      datosPedido.asesor = null;
    }
    datos.fecha = datos.nota = datos.total = null;
    datos.id = datos.whatsapp;
    console.log(datos.whatsapp);
    if ((datos.whatsapp == null) || (datos.whatsapp == undefined) || (datos.whatsapp == '')) {
      this.presentAlert('Error', 'Ingrese un numero de celular');
    } else {
      this.editCliente(datos);
      this.database.database.ref('usuario/' + this.uid + '/clientes/' + datos.whatsapp + '/pedidos/' + datosPedido.fecha + '/descripcion').set(datosPedido);
      for (let i = 0; i < productos.length; i++) {
        productos[i].categoria = productos[i].descripcion = productos[i].destacado = productos[i].disponible = productos[i].imagen1 = productos[i].imagen2 = productos[i].imagen3 = productos[i].imagen4 = null,
          this.database.database.ref('usuario/' + this.uid + '/clientes/' + datos.whatsapp + '/pedidos/' + datosPedido.fecha + '/productos/' + productos[i].id).set(productos[i]);
      }
      this.exito('Cliente registrado');
    }
  }

  public editCliente(datos: any) {
    this.database.database.ref('usuario/' + this.uid + '/clientes/' + datos.whatsapp + '/datos').set(datos);
  }

  public deleteCliente(whatsapp: number) {
    this.database.database.ref('usuario/' + this.uid + '/clientes/' + whatsapp).remove();
  }

  public getCliPedDatos(id: number, whatsapp: number) {
    return this.database.object('usuario/' + this.uid + '/clientes/' + whatsapp + '/pedidos/' + id + '/descripcion');
  }

  public getCLiPedProductos(id: number, whatsapp: number) {
    return this.database.list('usuario/' + this.uid + '/clientes/' + whatsapp + '/pedidos/' + id + '/productos');
  }

  public deleteCliRegistro(id: number, whatsapp: number) {
    this.database.database.ref('usuario/' + this.uid + '/clientes/' + whatsapp + '/pedidos/' + id).remove();
  }

  ////////////////////////////////////////////////////////////////////////

}
