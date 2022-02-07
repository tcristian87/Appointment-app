"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8610],{8610:(T,m,a)=>{a.r(m),a.d(m,{AppointmentsEditPageModule:()=>v});var l=a(6019),i=a(9010),o=a(7328),u=a(6556),c=a(5764),g=a(6092),t=a(865),Z=a(9927);function h(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ion-datetime",19,20),t.NdJ("ionChange",function(){t.CHM(e);const s=t.MAs(1),b=t.MAs(2),d=t.oxw();return[d.date=d.formatDate(s.value),d.hour=b.value]}),t.qZA()}}const A=[{path:"",component:(()=>{class n{constructor(e,p,s){this.route=e,this.appointService=p,this.navCtrl=s}ngOnInit(){this.route.paramMap.subscribe(e=>{e.has("appointId")?(this.appointSub=this.appointService.getClient(e.get("appointId")).subscribe(p=>{this.appoint=p}),this.form=new i.cw({name:new i.NI(this.appoint.name,{updateOn:"blur",validators:[i.kI.required]}),phone:new i.NI(this.appoint.phone,{updateOn:"blur",validators:[i.kI.required]}),date:new i.NI(this.appoint.date,{updateOn:"blur",validators:[i.kI.required]}),hour:new i.NI(this.appoint.date,{updateOn:"blur",validators:[i.kI.required]}),service:new i.NI(this.appoint.service,{updateOn:"blur",validators:[i.kI.required]})})):this.navCtrl.navigateBack("/home/tabs/book-appointment")})}onEditAppoint(){!this.form.valid||console.log(this.date)}ngOnDestroy(){this.appointSub&&this.appointSub.unsubscribe()}formatDate(e){return(0,c.Z)((0,g.Z)(e),"dd-MM-yyyy")}formatHour(e){return(0,c.Z)((0,g.Z)(e),"hh:mm")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.gz),t.Y36(Z.f),t.Y36(o.SH))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-appointments-edit"]],decls:35,vars:10,consts:[["color","primary"],["slot","start"],["defaultHref","/home/tabs/book-appointment"],["slot","end"],[3,"disabled","click"],["name","checkmark"],[1,"ion-padding"],[3,"formGroup"],["size-sm","6","offset-sm","3"],["type","text","formControlName","name"],["type","text","formControlName","phone"],["slot","start","id","open-date-input-2"],["icon","calendar"],["formControlName","date","slot","start",3,"value"],["id","open-date-input-2"],["icon","time"],["formControlName","hour","slot","end",3,"value"],["trigger","open-date-input-2","show-backdrop","false"],["type","text","formControlName","service"],["presentation","date-time","showDefaultButtons","true",3,"ionChange"],["popoverDatetime","","popoverHour",""]],template:function(e,p){1&e&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-buttons",3),t.TgZ(5,"ion-button",4),t.NdJ("click",function(){return p.onEditAppoint()}),t._UZ(6,"ion-icon",5),t.qZA(),t.qZA(),t.TgZ(7,"ion-title"),t._uU(8,"Appointment Edit"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"ion-content",6),t.TgZ(10,"form",7),t.TgZ(11,"ion-col",8),t.TgZ(12,"ion-item"),t.TgZ(13,"ion-label"),t._uU(14,"Name "),t._UZ(15,"ion-input",9),t.qZA(),t.qZA(),t.TgZ(16,"ion-item"),t.TgZ(17,"ion-label"),t._uU(18,"Phone "),t._UZ(19,"ion-input",10),t.qZA(),t.qZA(),t.TgZ(20,"ion-item"),t.TgZ(21,"ion-button",11),t._UZ(22,"ion-icon",12),t.qZA(),t._UZ(23,"ion-input",13),t.ALo(24,"date"),t.TgZ(25,"ion-button",14),t._UZ(26,"ion-icon",15),t.qZA(),t._UZ(27,"ion-input",16),t.ALo(28,"date"),t.TgZ(29,"ion-popover",17),t.YNc(30,h,3,0,"ng-template"),t.qZA(),t.qZA(),t.TgZ(31,"ion-item"),t.TgZ(32,"ion-label"),t._uU(33,"Service "),t._UZ(34,"ion-input",18),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("disabled",!p.form.valid),t.xp6(5),t.Q6J("formGroup",p.form),t.xp6(13),t.Q6J("value",t.xi3(24,4,p.date,"EEE, MMM dd")),t.xp6(4),t.Q6J("value",t.xi3(28,7,p.hour,"shortTime")))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.YG,o.gu,o.wd,o.W2,i._Y,i.JL,i.sg,o.wI,o.Ie,o.Q$,o.pK,o.j9,i.JJ,i.u,o.d8,o.x4,o.QI],pipes:[l.uU],styles:[""]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(A)],u.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,o.Pc,f,i.UX]]}),n})()}}]);