(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{DlX0:function(i,t,o){"use strict";o.r(t),o.d(t,"EditCategoriaPageModule",(function(){return C}));var e=o("ofXK"),n=o("3Pt+"),c=o("TEn/"),r=o("tyNb"),a=o("PSD3"),s=o.n(a),l=o("fXoL"),b=o("lXRa");function d(i,t){1&i&&(l.Nb(0,"ion-title"),l.ic(1,"Crear categoria"),l.Mb())}function u(i,t){1&i&&(l.Nb(0,"ion-title"),l.ic(1,"Editar categoria"),l.Mb())}function h(i,t){if(1&i){const i=l.Ob();l.Nb(0,"ion-button",10),l.Vb("click",(function(){return l.ec(i),l.Xb().delete()})),l.ic(1,"Borrar"),l.Mb()}}const g=[{path:"",component:(()=>{class i{constructor(i){this.servicio=i,this.idC=null,this.categoria={id:null,nombre:null},this.productos=[]}ngOnInit(){this.servicio.inicio(),this.idC=this.servicio.getIdC(),0!=this.idC&&this.servicio.getCategoria(this.idC).valueChanges().subscribe(i=>{this.categoria=i})}back(){this.servicio.back()}save(){0==this.idC?(this.idC=Date.now(),this.servicio.setIdC(this.idC),this.categoria.id=this.idC,this.servicio.exito("Categoria creada")):this.servicio.exito("Categoria actualizada"),this.servicio.saveCategoria(this.categoria),this.servicio.back()}delete(){this.confirmar("Eliminar","si","No","Categoria eliminada","La categoria ha sido eliminada con exito")}confirmar(i,t,o,e,n){s.a.fire({title:i,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:t,cancelButtonText:o}).then(i=>{i.isConfirmed&&(s.a.fire(e,n,"success"),this.servicio.getProductos().valueChanges().subscribe(i=>{this.productos=i,console.log("Datos eliminados");for(let t=0;t<this.productos.length;t++)this.productos[t].categoria==this.categoria.id&&this.servicio.deleteProducto(this.productos[t].id)}),this.servicio.deleteCategoria(this.categoria),this.back())})}}return i.\u0275fac=function(t){return new(t||i)(l.Ib(b.a))},i.\u0275cmp=l.Cb({type:i,selectors:[["app-edit-categoria"]],decls:15,vars:4,consts:[["color","dark"],["slot","start"],[3,"click"],["name","caret-back-outline"],[4,"ngIf"],["color","medium"],["position","floating"],[3,"ngModel","ngModelChange"],["expand","full",3,"click"],["expand","full","color","danger",3,"click",4,"ngIf"],["expand","full","color","danger",3,"click"]],template:function(i,t){1&i&&(l.Nb(0,"ion-toolbar",0),l.Nb(1,"ion-buttons",1),l.Nb(2,"ion-button",2),l.Vb("click",(function(){return t.back()})),l.Jb(3,"ion-icon",3),l.Mb(),l.Mb(),l.hc(4,d,2,0,"ion-title",4),l.hc(5,u,2,0,"ion-title",4),l.Mb(),l.Nb(6,"ion-content",5),l.Nb(7,"ion-card"),l.Nb(8,"ion-item"),l.Nb(9,"ion-label",6),l.ic(10,"Nombre"),l.Mb(),l.Nb(11,"ion-input",7),l.Vb("ngModelChange",(function(i){return t.categoria.nombre=i})),l.Mb(),l.Mb(),l.Mb(),l.Nb(12,"ion-button",8),l.Vb("click",(function(){return t.save()})),l.ic(13,"Guardar"),l.Mb(),l.hc(14,h,2,0,"ion-button",9),l.Mb()),2&i&&(l.yb(4),l.cc("ngIf",0==t.idC),l.yb(1),l.cc("ngIf",0!=t.idC),l.yb(6),l.cc("ngModel",t.categoria.nombre),l.yb(3),l.cc("ngIf",0!=t.idC))},directives:[c.C,c.e,c.d,c.s,e.k,c.m,c.f,c.u,c.v,c.t,c.K,n.d,n.e,c.B],styles:[""]}),i})()}];let f=(()=>{class i{}return i.\u0275mod=l.Gb({type:i}),i.\u0275inj=l.Fb({factory:function(t){return new(t||i)},imports:[[r.i.forChild(g)],r.i]}),i})(),C=(()=>{class i{}return i.\u0275mod=l.Gb({type:i}),i.\u0275inj=l.Fb({factory:function(t){return new(t||i)},imports:[[e.b,n.a,c.D,f]]}),i})()}}]);