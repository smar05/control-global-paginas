!function(){function o(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}function n(o,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{qzga:function(i,t,e){"use strict";e.r(t),e.d(t,"MostrarPedidoPageModule",(function(){return k}));var c=e("ofXK"),b=e("3Pt+"),a=e("TEn/"),r=e("tyNb"),l=e("PSD3"),s=e.n(l),d=e("fXoL"),u=e("lXRa");function M(o,n){1&o&&(d.Lb(0),d.Jb(1,"img",6),d.Kb())}function h(o,n){if(1&o){var i=d.Ob();d.Nb(0,"ion-row"),d.Nb(1,"ion-item"),d.Nb(2,"ion-label",18),d.ic(3),d.Mb(),d.Nb(4,"ion-input",36),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().$implicit.caracteristica=o})),d.Mb(),d.Mb(),d.Mb()}if(2&o){var t=d.Xb().$implicit;d.yb(3),d.jc(t.variantesOp),d.yb(1),d.cc("ngModel",t.caracteristica)}}function g(o,n){if(1&o){var i=d.Ob();d.Lb(0),d.Nb(1,"div",33),d.Nb(2,"ion-row"),d.Nb(3,"ion-col",34),d.Nb(4,"ion-textarea",19),d.Vb("ngModelChange",(function(o){return d.ec(i),n.$implicit.ref=o})),d.Mb(),d.Mb(),d.Nb(5,"ion-col",35),d.Nb(6,"ion-textarea",19),d.Vb("ngModelChange",(function(o){return d.ec(i),n.$implicit.nombre=o})),d.Mb(),d.Mb(),d.Nb(7,"ion-col",34),d.Nb(8,"ion-input",25),d.Vb("ngModelChange",(function(o){return d.ec(i),n.$implicit.cantidad=o})),d.Mb(),d.Mb(),d.Nb(9,"ion-col",22),d.Nb(10,"ion-input",25),d.Vb("ngModelChange",(function(o){return d.ec(i),n.$implicit.precio=o})),d.Mb(),d.Mb(),d.Mb(),d.hc(11,h,5,2,"ion-row",5),d.Mb(),d.Jb(12,"br"),d.Kb()}if(2&o){var t=n.$implicit;d.yb(4),d.cc("ngModel",t.ref),d.yb(2),d.cc("ngModel",t.nombre),d.yb(2),d.cc("ngModel",t.cantidad),d.yb(2),d.cc("ngModel",t.precio),d.yb(1),d.cc("ngIf",t.variantes)}}function f(o,n){if(1&o&&(d.Nb(0,"p",37),d.ic(1),d.Yb(2,"currency"),d.Mb()),2&o){var i=d.Xb(2);d.yb(1),d.kc("Subtotal: ",d.Zb(2,1,i.datos.subTotal,"COP"),"")}}function N(o,n){if(1&o){var i=d.Ob();d.Lb(0),d.Nb(1,"ion-fab",7),d.Nb(2,"ion-fab-button",0),d.Jb(3,"ion-icon",8),d.Mb(),d.Nb(4,"ion-fab-list",9),d.Nb(5,"ion-fab-button",10),d.Vb("click",(function(){return d.ec(i),d.Xb().delete()})),d.Jb(6,"ion-icon",11),d.Mb(),d.Nb(7,"ion-fab-button",12),d.Vb("click",(function(){return d.ec(i),d.Xb().guardarPedido()})),d.Jb(8,"ion-icon",13),d.Mb(),d.Nb(9,"ion-fab-button",14),d.Vb("click",(function(){return d.ec(i),d.Xb().cotizacion()})),d.Jb(10,"ion-icon",15),d.Mb(),d.Nb(11,"ion-fab-button",16),d.Vb("click",(function(){return d.ec(i),d.Xb().rotulo()})),d.Jb(12,"img",17),d.Mb(),d.Mb(),d.Mb(),d.Nb(13,"ion-card"),d.Nb(14,"ion-card-header"),d.Nb(15,"ion-card-title"),d.Nb(16,"h1"),d.Nb(17,"b"),d.ic(18),d.Yb(19,"date"),d.Mb(),d.Mb(),d.Nb(20,"h6"),d.Nb(21,"b"),d.ic(22,"Pedido id:"),d.Mb(),d.ic(23),d.Mb(),d.Nb(24,"ion-item"),d.Nb(25,"ion-label",18),d.ic(26,"Asesor"),d.Mb(),d.Nb(27,"ion-input",19),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().datos.asesor=o})),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(28,"ion-card"),d.Nb(29,"ion-card-header"),d.Nb(30,"ion-card-title"),d.Nb(31,"b"),d.ic(32,"Pedido"),d.Mb(),d.Mb(),d.Mb(),d.Nb(33,"ion-card-content"),d.Nb(34,"ion-row"),d.Nb(35,"ion-col",20),d.Nb(36,"b"),d.ic(37,"Ref"),d.Mb(),d.Mb(),d.Nb(38,"ion-col",21),d.Nb(39,"b"),d.ic(40,"Nombre"),d.Mb(),d.Mb(),d.Nb(41,"ion-col",20),d.Nb(42,"b"),d.ic(43,"Cantidad"),d.Mb(),d.Mb(),d.Nb(44,"ion-col",22),d.Nb(45,"b"),d.ic(46,"Precio"),d.Mb(),d.Mb(),d.Mb(),d.hc(47,g,13,5,"ng-container",23),d.Jb(48,"br"),d.Nb(49,"ion-item"),d.Nb(50,"ion-label",18),d.ic(51,"Nota"),d.Mb(),d.Nb(52,"ion-textarea",19),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().datos.nota=o})),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(53,"ion-card"),d.Nb(54,"ion-card-header"),d.Nb(55,"ion-card-title",24),d.Nb(56,"b"),d.ic(57,"Total del pedido"),d.Mb(),d.Nb(58,"ion-item"),d.Nb(59,"ion-label",18),d.ic(60,"Impuestos %"),d.Mb(),d.Nb(61,"ion-input",25),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().datos.iva=o})),d.Mb(),d.Mb(),d.Nb(62,"ion-item"),d.Nb(63,"ion-label",18),d.ic(64,"Descuento %"),d.Mb(),d.Nb(65,"ion-input",25),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().datos.descuento=o})),d.Mb(),d.Mb(),d.Nb(66,"ion-item"),d.Nb(67,"ion-label",18),d.ic(68,"Envio"),d.Mb(),d.Nb(69,"ion-input",25),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().datos.envio=o})),d.Mb(),d.Mb(),d.hc(70,f,3,4,"p",26),d.Nb(71,"b"),d.ic(72),d.Yb(73,"currency"),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(74,"ion-card"),d.Nb(75,"ion-card-header"),d.Nb(76,"ion-card-title"),d.Nb(77,"div",27),d.Nb(78,"b"),d.ic(79,"Datos del cliente"),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(80,"ion-card-content"),d.Nb(81,"ion-item"),d.Nb(82,"ion-label",18),d.ic(83,"Nombre del cliente"),d.Mb(),d.Nb(84,"ion-input",19),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().datos.nombre=o})),d.Mb(),d.Mb(),d.Nb(85,"ion-item"),d.Nb(86,"ion-label",18),d.ic(87,"Departamento"),d.Mb(),d.Nb(88,"ion-input",19),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().datos.departamento=o})),d.Mb(),d.Mb(),d.Nb(89,"ion-item"),d.Nb(90,"ion-label",18),d.ic(91,"Ciudad"),d.Mb(),d.Nb(92,"ion-input",19),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().datos.ciudad=o})),d.Mb(),d.Mb(),d.Nb(93,"ion-item"),d.Nb(94,"ion-label",18),d.ic(95,"Direccion"),d.Mb(),d.Nb(96,"ion-textarea",19),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().datos.direccion=o})),d.Mb(),d.Mb(),d.Nb(97,"ion-item"),d.Nb(98,"ion-label",18),d.ic(99,"Correo"),d.Mb(),d.Nb(100,"ion-input",19),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().datos.correo=o})),d.Mb(),d.Mb(),d.Nb(101,"ion-item"),d.Nb(102,"ion-label",18),d.ic(103,"Whatsapp"),d.Mb(),d.Nb(104,"ion-input",25),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().datos.whatsapp=o})),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(105,"ion-card"),d.Nb(106,"ion-card-header"),d.Nb(107,"ion-card-title"),d.Nb(108,"div",27),d.Nb(109,"b"),d.ic(110,"Datos del Vendedor"),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(111,"ion-card-content"),d.Nb(112,"ion-item"),d.Nb(113,"ion-label",18),d.ic(114,"Nombre del remitente"),d.Mb(),d.Nb(115,"ion-input",19),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().facturacion.nombre=o})),d.Mb(),d.Mb(),d.Nb(116,"ion-item"),d.Nb(117,"ion-label",18),d.ic(118,"Direccion"),d.Mb(),d.Nb(119,"ion-textarea",19),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().facturacion.direccion=o})),d.Mb(),d.Mb(),d.Nb(120,"ion-item"),d.Nb(121,"ion-label",18),d.ic(122,"Correo"),d.Mb(),d.Nb(123,"ion-input",19),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().facturacion.correo=o})),d.Mb(),d.Mb(),d.Nb(124,"ion-row"),d.Nb(125,"ion-col",28),d.Nb(126,"ion-item"),d.Nb(127,"ion-label",18),d.ic(128,"Indicativo"),d.Mb(),d.Nb(129,"ion-input",25),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().facturacion.indicativo=o})),d.Mb(),d.Mb(),d.Mb(),d.Nb(130,"ion-col",29),d.Nb(131,"ion-item"),d.Nb(132,"ion-label",18),d.ic(133,"Celular"),d.Mb(),d.Nb(134,"ion-input",25),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().facturacion.whatsapp=o})),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(135,"ion-item"),d.Nb(136,"ion-label",18),d.ic(137,"Cantidad de rotulos"),d.Mb(),d.Nb(138,"ion-input",25),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().facturacion.rotulos=o})),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(139,"ion-card"),d.Nb(140,"ion-card-header",16),d.Vb("click",(function(){return d.ec(i),d.Xb().sendWha()})),d.Jb(141,"ion-icon",30),d.Nb(142,"b"),d.ic(143,"Enviar Whatsapp"),d.Mb(),d.Mb(),d.Nb(144,"ion-card-content"),d.Nb(145,"ion-item"),d.Nb(146,"ion-label",18),d.ic(147,"Numero de whatsapp"),d.Mb(),d.Nb(148,"ion-input",25),d.Vb("ngModelChange",(function(o){return d.ec(i),d.Xb().whatsapp=o})),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(149,"ion-footer",31),d.Nb(150,"ion-toolbar"),d.Nb(151,"ion-button",32),d.Vb("click",(function(){return d.ec(i),d.Xb().calcular()})),d.ic(152,"Guardar cambios"),d.Mb(),d.Mb(),d.Mb(),d.Jb(153,"br"),d.Jb(154,"br"),d.Kb()}if(2&o){var t=d.Xb();d.yb(18),d.jc(d.Zb(19,23,t.datos.fecha,"medium")),d.yb(5),d.kc(" ",t.datos.fecha,""),d.yb(4),d.cc("ngModel",t.datos.asesor),d.yb(20),d.cc("ngForOf",t.productosOrganizar()),d.yb(5),d.cc("ngModel",t.datos.nota),d.yb(9),d.cc("ngModel",t.datos.iva),d.yb(4),d.cc("ngModel",t.datos.descuento),d.yb(4),d.cc("ngModel",t.datos.envio),d.yb(1),d.cc("ngIf",t.datos.subTotal),d.yb(2),d.kc("Total: ",d.Zb(73,26,t.datos.total,"COP"),""),d.yb(12),d.cc("ngModel",t.datos.nombre),d.yb(4),d.cc("ngModel",t.datos.departamento),d.yb(4),d.cc("ngModel",t.datos.ciudad),d.yb(4),d.cc("ngModel",t.datos.direccion),d.yb(4),d.cc("ngModel",t.datos.correo),d.yb(4),d.cc("ngModel",t.datos.whatsapp),d.yb(11),d.cc("ngModel",t.facturacion.nombre),d.yb(4),d.cc("ngModel",t.facturacion.direccion),d.yb(4),d.cc("ngModel",t.facturacion.correo),d.yb(6),d.cc("ngModel",t.facturacion.indicativo),d.yb(5),d.cc("ngModel",t.facturacion.whatsapp),d.yb(4),d.cc("ngModel",t.facturacion.rotulos),d.yb(10),d.cc("ngModel",t.whatsapp)}}var p,m,v,y=[{path:"",component:(p=function(){function i(n,t){o(this,i),this.servicio=n,this.router=t,this.linkWha=null,this.cuerpoEmail=null,this.idP=null,this.datos={id:null,nombre:null,total:null,envio:null,subTotal:null,iva:0,descuento:0,correo:null,whatsapp:null,nota:null,fecha:null,asesor:null},this.productos=[{id:null,nombre:null,cantidad:null,precio:null}],this.facturacion={nombre:null,correo:null,indicativo:null,whatsapp:null,direccion:null},this.pagina={},this.whatsapp=null,this.loading=!0}var t,e,c;return t=i,(e=[{key:"ngOnInit",value:function(){var o=this;this.servicio.inicio(),this.idP=this.servicio.getIdp(),this.servicio.getPagina().valueChanges().subscribe((function(n){o.pagina=n,o.facturacion=n,o.facturacion.rotulos=1})),this.servicio.getPedidoDatos(this.idP).valueChanges().subscribe((function(n){null!=n&&(o.datos=n,o.whatsapp=o.datos.whatsapp)})),this.servicio.getPedidoProductos(this.idP).valueChanges().subscribe((function(n){null!=n&&(o.productos=n)})),this.total(),this.loading=!1}},{key:"productosOrganizar",value:function(){return this.productos=this.servicio.ordenar(this.productos,"nombre"),this.productos}},{key:"back",value:function(){this.servicio.back()}},{key:"total",value:function(){this.datos.total=0;for(var o=0;o<this.productos.length;o++)0!=this.productos[o].cantidad&&(this.datos.total+=this.productos[o].precio*this.productos[o].cantidad);this.datos.subTotal=0!=this.datos.iva&&null!=this.datos.iva||0!=this.datos.descuento&&null!=this.datos.descuento||0!=this.datos.envio&&null!=this.datos.envio?this.datos.total:null;var n=this.datos.iva,i=this.datos.descuento,t=this.datos.envio;null!=this.datos.iva&&null!=this.datos.iva||(n=0),null!=this.datos.descuento&&null!=this.datos.descuento||(i=0),null!=this.datos.envio&&null!=this.datos.envio||(t=0),this.datos.total*=1-i/100,this.datos.total*=1+n/100,this.datos.total+=t}},{key:"calcular",value:function(){this.servicio.exito("Datos actualizados"),this.total(),this.servicio.savePedido(this.datos,this.productos),this.back()}},{key:"delete",value:function(){this.confirmar("Eliminar","si","No","Pedido eliminado","El pedido ha sido eliminado con exito")}},{key:"confirmar",value:function(o,n,i,t,e){var c=this;s.a.fire({title:o,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:n,cancelButtonText:i}).then((function(o){o.isConfirmed&&(s.a.fire(t,e,"success"),c.servicio.deletePedido(c.idP),c.back())}))}},{key:"sendWha",value:function(){this.servicio.sendWha(this.datos,this.productos,this.whatsapp)}},{key:"guardarPedido",value:function(){this.datos.whatsapp=this.datos.whatsapp.toString(),this.servicio.saveCliente(this.datos,this.productos),this.back()}},{key:"cotizacion",value:function(){this.servicio.exito("Generando cotizacion"),this.servicio.createCotizacion(this.facturacion,this.datos,this.productos)}},{key:"rotulo",value:function(){this.servicio.exito("Generando rotulo"),this.servicio.createRotulo(this.facturacion,this.datos,this.productos)}}])&&n(t.prototype,e),c&&n(t,c),i}(),p.\u0275fac=function(o){return new(o||p)(d.Ib(u.a),d.Ib(r.g))},p.\u0275cmp=d.Cb({type:p,selectors:[["app-mostrar-pedido"]],decls:9,vars:2,consts:[["color","dark"],["slot","start"],[3,"click"],["name","caret-back-outline"],["color","medium"],[4,"ngIf"],["src","../../assets/imagenes/loading.gif",1,"icon"],["horizontal","end","vertical","bottom","slot","fixed"],["md","caret-up","ios","chevron-up-circle-outline"],["side","top"],["color","danger",3,"click"],["name","trash-outline"],["color","primary",3,"click"],["name","person-add-outline"],["color","warning",3,"click"],["name","document-outline"],["color","success",3,"click"],["height","60%","width","60%","src","../../assets/imagenes/ticket-outline.svg"],["position","floating"],[3,"ngModel","ngModelChange"],["size","2",2,"text-align","center"],["size","5",2,"text-align","center"],["size","3",2,"text-align","center"],[4,"ngFor","ngForOf"],[1,"ion-text-center"],["type","number",3,"ngModel","ngModelChange"],["style","font-size: 15px;",4,"ngIf"],[2,"text-align","center"],["size","4"],["size","8"],["name","send-outline"],[1,"ion-no-border",2,"position","fixed","bottom","0"],["shape","round","expand","full",3,"click"],[2,"background-color","#d1d1d1","color","black","padding","10px"],["size","2"],["size","5"],["type","text",3,"ngModel","ngModelChange"],[2,"font-size","15px"]],template:function(o,n){1&o&&(d.Nb(0,"ion-toolbar",0),d.Nb(1,"ion-buttons",1),d.Nb(2,"ion-button",2),d.Vb("click",(function(){return n.back()})),d.Jb(3,"ion-icon",3),d.Mb(),d.Mb(),d.Nb(4,"ion-title"),d.ic(5,"Detalles del pedido"),d.Mb(),d.Mb(),d.Nb(6,"ion-content",4),d.hc(7,M,2,0,"ng-container",5),d.hc(8,N,155,29,"ng-container",5),d.Mb()),2&o&&(d.yb(7),d.cc("ngIf",1==n.loading),d.yb(1),d.cc("ngIf",0==n.loading))},directives:[a.C,a.e,a.d,a.s,a.B,a.m,c.k,a.n,a.o,a.p,a.f,a.h,a.j,a.u,a.v,a.t,a.K,b.d,b.e,a.g,a.x,a.l,c.j,a.A,a.G,a.q],pipes:[c.e,c.c],styles:[".icon[_ngcontent-%COMP%]{display:block;margin:50% auto;width:50%;border-radius:50%}.bordes[_ngcontent-%COMP%]{margin-left:5%;margin-right:5%}"]}),p)}],C=((v=function n(){o(this,n)}).\u0275mod=d.Gb({type:v}),v.\u0275inj=d.Fb({factory:function(o){return new(o||v)},imports:[[r.i.forChild(y)],r.i]}),v),k=((m=function n(){o(this,n)}).\u0275mod=d.Gb({type:m}),m.\u0275inj=d.Fb({factory:function(o){return new(o||m)},imports:[[c.b,b.a,a.D,C]]}),m)}}])}();