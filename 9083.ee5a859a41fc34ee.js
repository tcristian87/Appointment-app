"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9083],{9083:(M,d,e)=>{e.r(d),e.d(d,{TodayAppointmentsPageModule:()=>f});var r=e(6019),u=e(9010),n=e(7328),p=e(1077),g=e(5764),t=e(865),l=e(9927),c=e(8816);const m=function(o){return["/","appointments-details",o]};function Z(o,s){if(1&o){const i=t.EpF();t.TgZ(0,"ion-item-sliding",null,9),t.TgZ(2,"ion-item",10),t.TgZ(3,"ion-card-header"),t.TgZ(4,"ion-card-subtitle"),t.TgZ(5,"h2"),t._uU(6),t.qZA(),t.TgZ(7,"h3"),t._uU(8),t.qZA(),t.TgZ(9,"h5"),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"ion-item-options"),t.TgZ(12,"ion-item-option",11),t.NdJ("click",function(){const h=t.CHM(i).$implicit,q=t.MAs(1);return t.oxw().onEdit(h.id,q)}),t._UZ(13,"ion-icon",12),t.qZA(),t.qZA(),t.qZA()}if(2&o){const i=s.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(4,m,i.id)),t.xp6(4),t.Oqu(i.hour),t.xp6(2),t.Oqu(i.service),t.xp6(2),t.Oqu(i.name)}}const A=function(){return["/home/tabs/new-appoint"]},T=[{path:"",component:(()=>{class o{constructor(i,a){this.appointsService=i,this.route=a,this.today=Date.now(),this.tDay=(0,g.Z)(new Date(this.today),"yyyy-MM-dd"),this.date=this.tDay,this.isLoading=!1}ngOnInit(){this.appointSub=this.appointsService.appoints.subscribe(i=>{this.appoints=i})}onEdit(i,a){a.close(),this.route.navigate(["/appointments-details/appointments-edit",i])}ngOnDestroy(){this.appointSub&&this.appointSub.unsubscribe()}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(l.f),t.Y36(p.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-today-appointments"]],decls:23,vars:10,consts:[["color","primary"],["slot","start"],[1,"ion-text-center"],["slot","primary"],[3,"routerLink"],["name","add","slot","icon-only"],["size","12","size-sm","8","offset-sm","2",1,"ion-text-center"],["size","12","size-sm","8","offset-sm","2"],[4,"ngFor","ngForOf"],["slidingCard",""],["detail","",3,"routerLink"],["color","primary",3,"click"],["name","create","slot","icon-only"]],template:function(i,a){1&i&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title",2),t._uU(5,"Today`s appointments"),t.qZA(),t.TgZ(6,"ion-buttons",3),t.TgZ(7,"ion-button",4),t._UZ(8,"ion-icon",5),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"ion-content"),t.TgZ(10,"ion-grid"),t.TgZ(11,"ion-row"),t.TgZ(12,"ion-col",6),t.TgZ(13,"ion-card"),t.TgZ(14,"ion-card-header"),t.TgZ(15,"ion-card-title"),t._uU(16),t.ALo(17,"date"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"ion-row"),t.TgZ(19,"ion-col",7),t.TgZ(20,"ion-card"),t.YNc(21,Z,14,6,"ion-item-sliding",8),t.ALo(22,"filter"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(7),t.Q6J("routerLink",t.DdM(9,A)),t.xp6(9),t.hij(" ",t.xi3(17,3,a.today,"EEEE, MMMM d, y")," "),t.xp6(5),t.Q6J("ngForOf",t.xi3(22,6,a.appoints,a.date)))},directives:[n.Gu,n.sr,n.Sm,n.fG,n.wd,n.YG,n.YI,p.rH,n.gu,n.W2,n.jY,n.Nd,n.wI,n.PM,n.Zi,n.Dq,r.sg,n.td,n.Ie,n.tO,n.IK,n.u8],pipes:[r.uU,c.Z],styles:[""]}),o})()}];let y=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(T)],p.Bz]}),o})(),f=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.ez,u.u5,n.Pc,y,c.h]]}),o})()}}]);