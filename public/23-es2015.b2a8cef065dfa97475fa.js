(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{LYHX:function(o,i,n){"use strict";n.r(i),n.d(i,"ProductosPageModule",(function(){return I}));var c=n("ofXK"),t=n("3Pt+"),r=n("TEn/"),e=n("tyNb"),b=n("fXoL"),a=n("lXRa");function s(o,i){1&o&&(b.Lb(0),b.Jb(1,"img",6),b.Kb())}function l(o,i){1&o&&(b.Nb(0,"ion-fab-button",29),b.Jb(1,"ion-icon",30),b.Mb())}function u(o,i){1&o&&(b.Nb(0,"ion-fab-button",31),b.Jb(1,"ion-icon",32),b.Mb())}function g(o,i){if(1&o&&(b.Nb(0,"ion-row"),b.Nb(1,"ion-col",25),b.ic(2," Imagen: "),b.Mb(),b.Nb(3,"ion-col",26),b.Jb(4,"img",33),b.Mb(),b.Mb()),2&o){const o=b.Xb(2).$implicit;b.yb(4),b.cc("src",o.imagen1,b.fc)}}function d(o,i){if(1&o&&(b.Nb(0,"ion-row"),b.Nb(1,"ion-col",25),b.ic(2," Referencia: "),b.Mb(),b.Nb(3,"ion-col",26),b.ic(4),b.Mb(),b.Mb()),2&o){const o=b.Xb(2).$implicit;b.yb(4),b.kc(" ",o.ref," ")}}function f(o,i){if(1&o&&(b.Nb(0,"ion-row"),b.Nb(1,"ion-col",25),b.ic(2," Precio: "),b.Mb(),b.Nb(3,"ion-col",26),b.ic(4),b.Yb(5,"currency"),b.Mb(),b.Mb()),2&o){const o=b.Xb(2).$implicit;b.yb(4),b.kc(" ",b.Zb(5,1,o.precio,"USD")," ")}}function h(o,i){if(1&o&&(b.Nb(0,"ion-row"),b.Nb(1,"ion-col",25),b.ic(2," Categoria: "),b.Mb(),b.Nb(3,"ion-col",26),b.ic(4),b.Mb(),b.Mb()),2&o){const o=b.Xb(4).$implicit;b.yb(4),b.kc(" ",o.nombre," ")}}function p(o,i){1&o&&b.Jb(0,"ion-button",34)}function m(o,i){1&o&&b.Jb(0,"ion-button",35)}function M(o,i){if(1&o){const o=b.Ob();b.Nb(0,"ion-card",20),b.Vb("click",(function(){b.ec(o);const i=b.Xb().$implicit;return b.Xb(4).create(i.id)})),b.Nb(1,"ion-card-header"),b.Nb(2,"ion-row"),b.Nb(3,"ion-col",21),b.Nb(4,"ion-card-title"),b.Nb(5,"b"),b.ic(6),b.Mb(),b.Mb(),b.Nb(7,"h6"),b.Nb(8,"b"),b.ic(9,"Producto id: "),b.Mb(),b.ic(10),b.Mb(),b.Mb(),b.Nb(11,"ion-col",22),b.hc(12,l,2,0,"ion-fab-button",23),b.hc(13,u,2,0,"ion-fab-button",24),b.Mb(),b.Mb(),b.Mb(),b.Nb(14,"ion-card-content"),b.hc(15,g,5,1,"ion-row",5),b.hc(16,d,5,1,"ion-row",5),b.hc(17,f,6,4,"ion-row",5),b.hc(18,h,5,1,"ion-row",5),b.Nb(19,"ion-row"),b.Nb(20,"ion-col",25),b.ic(21," Disponible: "),b.Mb(),b.Nb(22,"ion-col",26),b.hc(23,p,1,0,"ion-button",27),b.hc(24,m,1,0,"ion-button",28),b.Mb(),b.Mb(),b.Mb(),b.Mb()}if(2&o){const o=b.Xb().$implicit;b.yb(6),b.jc(o.nombre),b.yb(4),b.jc(o.id),b.yb(2),b.cc("ngIf",0==o.destacado),b.yb(1),b.cc("ngIf",1==o.destacado),b.yb(2),b.cc("ngIf",o.imagen1),b.yb(1),b.cc("ngIf",o.ref),b.yb(1),b.cc("ngIf",o.precio&&(0==o.variantes||null==o.variantes||null==o.variantes)),b.yb(1),b.cc("ngIf",o.categoria),b.yb(5),b.cc("ngIf",1==o.disponible),b.yb(1),b.cc("ngIf",0==o.disponible)}}function N(o,i){if(1&o&&(b.Lb(0),b.hc(1,M,25,10,"ion-card",19),b.Kb()),2&o){const o=i.$implicit,n=b.Xb(2).$implicit;b.yb(1),b.cc("ngIf",o.categoria==n.id)}}function y(o,i){if(1&o&&(b.Lb(0),b.hc(1,N,2,1,"ng-container",16),b.Kb()),2&o){const o=b.Xb(3);b.yb(1),b.cc("ngForOf",o.productosOrdenar())}}function k(o,i){if(1&o){const o=b.Ob();b.Lb(0),b.Nb(1,"ion-card",17),b.Nb(2,"ion-card-header"),b.Nb(3,"ion-card-title",18),b.Vb("click",(function(){b.ec(o);const n=i.index;return b.Xb(2).mostrarCategoria(n)})),b.Nb(4,"b"),b.ic(5),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.hc(6,y,2,1,"ng-container",5),b.Kb()}if(2&o){const o=i.$implicit,n=i.index;b.yb(5),b.lc("",n+1,".",o.nombre,""),b.yb(1),b.cc("ngIf",1==o.mostrar)}}function C(o,i){if(1&o){const o=b.Ob();b.Lb(0),b.Nb(1,"ion-fab",7),b.Nb(2,"ion-fab-button",0),b.Jb(3,"ion-icon",8),b.Mb(),b.Nb(4,"ion-fab-list",9),b.Nb(5,"ion-fab-button",10),b.Vb("click",(function(){return b.ec(o),b.Xb().create(0)})),b.Jb(6,"ion-icon",11),b.Mb(),b.Nb(7,"ion-fab-button",12),b.Vb("click",(function(){return b.ec(o),b.Xb().categorias()})),b.Jb(8,"ion-icon",13),b.Mb(),b.Nb(9,"ion-fab-button",14),b.Vb("click",(function(){return b.ec(o),b.Xb().catalogo()})),b.Jb(10,"ion-icon",15),b.Mb(),b.Mb(),b.Mb(),b.hc(11,k,7,3,"ng-container",16),b.Kb()}if(2&o){const o=b.Xb();b.yb(11),b.cc("ngForOf",o.categoriasOrdenar())}}const v=[{path:"",component:(()=>{class o{constructor(o,i){this.servicio=o,this.router=i,this.productos=[],this.getCategorias=[],this.pagina=[],this.loading=!0}ngOnInit(){this.servicio.inicio(),this.servicio.getCategorias().valueChanges().subscribe(o=>{this.getCategorias=o;for(let i=0;i<this.getCategorias.length;i++)this.getCategorias[i].mostrar=!1}),this.servicio.getPagina().valueChanges().subscribe(o=>{this.pagina=o}),this.servicio.getProductos().valueChanges().subscribe(o=>{this.productos=o,this.loading=!1})}productosOrdenar(){return this.productos=this.servicio.ordenar(this.productos,"nombre"),this.productos}categoriasOrdenar(){return this.getCategorias=this.servicio.ordenar(this.getCategorias,"nombre"),this.getCategorias}create(o){this.servicio.setId(o),this.router.navigate(["/edit-producto"])}back(){this.servicio.back()}categorias(){this.router.navigate(["/categorias"])}catalogo(){this.servicio.exito("Generando Catalogo"),this.servicio.createCatalogo(this.productosOrdenar(),this.categoriasOrdenar(),this.pagina)}mostrarCategoria(o){for(let i=0;i<this.getCategorias.length;i++)i==o?this.getCategorias[o].mostrar=1!=this.getCategorias[o].mostrar&&0==this.getCategorias[o].mostrar:this.getCategorias[i].mostrar=!1}}return o.\u0275fac=function(i){return new(i||o)(b.Ib(a.a),b.Ib(e.g))},o.\u0275cmp=b.Cb({type:o,selectors:[["app-productos"]],decls:9,vars:2,consts:[["color","dark"],["slot","start"],[3,"click"],["name","caret-back-outline"],["color","medium"],[4,"ngIf"],["src","../../assets/imagenes/loading.gif",1,"icon"],["horizontal","end","vertical","bottom","slot","fixed"],["md","caret-up","ios","chevron-up-circle-outline"],["side","top"],["color","success",3,"click"],["name","add-outline"],["color","warning",3,"click"],["name","duplicate-outline"],["color","primary",3,"click"],["name","list-outline"],[4,"ngFor","ngForOf"],[2,"background-color","#4a4a4a"],[2,"color","white",3,"click"],["shape","round",3,"click",4,"ngIf"],["shape","round",3,"click"],["size","10"],["size","2"],["color","danger",4,"ngIf"],["color","success",4,"ngIf"],["size","4"],["size","8"],["expand","full","shape","round","color","success",4,"ngIf"],["expand","full","shape","round","color","danger",4,"ngIf"],["color","danger"],["name","star-outline"],["color","success"],["name","star"],[2,"width","100px","height","100px",3,"src"],["expand","full","shape","round","color","success"],["expand","full","shape","round","color","danger"]],template:function(o,i){1&o&&(b.Nb(0,"ion-toolbar",0),b.Nb(1,"ion-buttons",1),b.Nb(2,"ion-button",2),b.Vb("click",(function(){return i.back()})),b.Jb(3,"ion-icon",3),b.Mb(),b.Mb(),b.Nb(4,"ion-title"),b.ic(5,"Productos"),b.Mb(),b.Mb(),b.Nb(6,"ion-content",4),b.hc(7,s,2,0,"ng-container",5),b.hc(8,C,12,1,"ng-container",5),b.Mb()),2&o&&(b.yb(7),b.cc("ngIf",1==i.loading),b.yb(1),b.cc("ngIf",0==i.loading))},directives:[r.C,r.e,r.d,r.s,r.B,r.m,c.k,r.n,r.o,r.p,c.j,r.f,r.h,r.j,r.x,r.l,r.g],pipes:[c.c],styles:[".icon[_ngcontent-%COMP%]{display:block;margin:50% auto;width:50%;border-radius:50%}"]}),o})()}];let w=(()=>{class o{}return o.\u0275mod=b.Gb({type:o}),o.\u0275inj=b.Fb({factory:function(i){return new(i||o)},imports:[[e.i.forChild(v)],e.i]}),o})(),I=(()=>{class o{}return o.\u0275mod=b.Gb({type:o}),o.\u0275inj=b.Fb({factory:function(i){return new(i||o)},imports:[[c.b,t.a,r.D,w]]}),o})()}}]);