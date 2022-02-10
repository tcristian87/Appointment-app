"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8148],{9927:(I,A,s)=>{s.d(A,{f:()=>w});var m=s(8053),i=s(5722),n=s(6636),c=s(9204),t=s(4099),v=s(2411);class f{constructor(r,e,a,p,h,d,g){this.id=r,this.name=e,this.phone=a,this.hour=p,this.date=h,this.service=d,this.userId=g}}var Z=s(865),T=s(7079),b=s(4522);let w=(()=>{class o{constructor(e,a){this.authService=e,this.http=a,this._appoints=new t.X([])}get appoints(){return this._appoints.asObservable()}fetchAppoints(){return this.http.get("https://ionic-appoint-app-default-rtdb.europe-west1.firebasedatabase.app/appoints.json").pipe((0,m.U)(e=>{const a=[];for(const p in e)e.hasOwnProperty(p)&&a.push(new f(p,e[p].name,e[p].phone,e[p].hour,e[p].date,e[p].service,e[p].userId));return a}),(0,i.b)(e=>{this._appoints.next(e)}))}getAppoint(e){return this.appoints.pipe((0,n.q)(1),(0,m.U)(a=>Object.assign({},a.find(p=>p.id===e))))}addAppoint(e,a,p,h,d){let g;const l=new f(Math.random().toString(),e,a,p,h,d,this.authService.userId);return this.http.post("https://ionic-appoint-app-default-rtdb.europe-west1.firebasedatabase.app/appoints.json",Object.assign(Object.assign({},l),{id:null})).pipe((0,c.w)(u=>(g=u.name,this.appoints)),(0,n.q)(1),(0,i.b)(u=>{l.id=g,this._appoints.next(u.concat(l))}))}updateAppoint(e,a,p,h,d,g){let l;return this.appoints.pipe((0,n.q)(1),(0,c.w)(u=>!u||u.length<=0?this.fetchAppoints():(0,v.of)(u)),(0,c.w)(u=>{const N=u.findIndex(U=>U.id===e);l=[...u];const q=l[N];return l[N]=new f(q.id,a,p,h,d,g,q.userId),this.http.put(`https://ionic-appoint-app-default-rtdb.europe-west1.firebasedatabase.app/appoints/${e}.json`,Object.assign(Object.assign({},l[N]),{id:null}))}),(0,i.b)(()=>{this._appoints.next(l)}))}}return o.\u0275fac=function(e){return new(e||o)(Z.LFG(T.e),Z.LFG(b.eN))},o.\u0275prov=Z.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},8148:(I,A,s)=>{s.r(A),s.d(A,{NewAppointPageModule:()=>w});var m=s(6019),i=s(9010),n=s(7328),c=s(1077),t=s(865),v=s(9927);function f(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"ion-datetime",23,24),t.NdJ("ionChange",function(){t.CHM(e);const p=t.MAs(1),h=t.MAs(2),d=t.oxw();return[d.date=p.value,d.hour=h.value]}),t.qZA()}}const T=[{path:"",component:(()=>{class o{constructor(e,a,p){this.appointService=e,this.router=a,this.loadingCtrl=p}ngOnInit(){this.form=new i.cw({name:new i.NI(null,{updateOn:"blur",validators:[i.kI.required]}),phone:new i.NI(null,{updateOn:"blur",validators:[i.kI.required]}),hour:new i.NI(null,{updateOn:"change",validators:[i.kI.required]}),date:new i.NI(null,{updateOn:"change",validators:[i.kI.required]}),service:new i.NI(null,{updateOn:"blur",validators:[i.kI.required]})})}createAppoint(){!this.form.valid||(this.loadingCtrl.create({message:"Creating appoint..."}).then(e=>{e.present(),this.appointService.addAppoint(this.form.value.name,this.form.value.phone,this.form.value.hour,this.form.value.date,this.form.value.service).subscribe(()=>{e.dismiss(),this.form.reset(),this.router.navigate(["/home/tabs/book-appointment"])})}),console.log(this.form.value.hour),console.log(this.form.value.date))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v.f),t.Y36(c.F0),t.Y36(n.HT))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-new-appoint"]],decls:45,vars:7,consts:[["color","primary"],["slot","start"],["defaultHref","/home/tabs/today-appointments"],["slot","end"],[3,"disabled","click"],["name","checkmark"],[1,"ion-text-center"],[1,"ion-padding"],[3,"formGroup"],["size-sm","6","offset-sm","3"],["position","floating"],["type","text","formControlName","name"],["type","text","formControlName","phone"],["size-sm","7","offset-sm","3"],["slot","start","id","open-date-input-2"],["icon","calendar"],["formControlName","hour",3,"value"],["formControlName","date","slot","start",3,"value"],["trigger","open-date-input-2","show-backdrop","false"],["value","tuns","formControlName","service"],["value","Tuns"],["value","Barberit"],["value","Tuns-barberit"],["presentation","time-date","formControlName","hour",3,"ionChange"],["popoverDatetime","","popoverHour",""]],template:function(e,a){1&e&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-buttons",3),t.TgZ(5,"ion-button",4),t.NdJ("click",function(){return a.createAppoint()}),t._UZ(6,"ion-icon",5),t.qZA(),t.qZA(),t.TgZ(7,"ion-title",6),t._uU(8,"New Appoint"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"ion-content",7),t.TgZ(10,"form",8),t.TgZ(11,"ion-grid"),t.TgZ(12,"ion-col",9),t.TgZ(13,"ion-item"),t.TgZ(14,"ion-label",10),t._uU(15,"Name"),t.qZA(),t._UZ(16,"ion-input",11),t.qZA(),t.qZA(),t.TgZ(17,"ion-col",9),t.TgZ(18,"ion-item"),t.TgZ(19,"ion-label",10),t._uU(20,"Phone"),t.qZA(),t._UZ(21,"ion-input",12),t.qZA(),t.qZA(),t.TgZ(22,"ion-col",13),t.TgZ(23,"ion-item"),t.TgZ(24,"ion-buttons",1),t.TgZ(25,"ion-button",14),t._UZ(26,"ion-icon",15),t.qZA(),t.TgZ(27,"ion-label"),t._uU(28,"Date"),t.qZA(),t.qZA(),t._UZ(29,"ion-input",16),t.ALo(30,"date"),t._UZ(31,"ion-input",17),t.TgZ(32,"ion-popover",18),t.YNc(33,f,3,0,"ng-template"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"ion-col",9),t.TgZ(35,"ion-item"),t.TgZ(36,"ion-label"),t._uU(37,"Service"),t.qZA(),t.TgZ(38,"ion-select",19),t.TgZ(39,"ion-select-option",20),t._uU(40,"Tuns"),t.qZA(),t.TgZ(41,"ion-select-option",21),t._uU(42,"Barberit"),t.qZA(),t.TgZ(43,"ion-select-option",22),t._uU(44,"Tuns-Barberit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("disabled",!a.form.valid),t.xp6(5),t.Q6J("formGroup",a.form),t.xp6(19),t.Q6J("value",t.xi3(30,4,a.hour,"HH:mm")),t.xp6(2),t.Q6J("value",a.date))},directives:[n.Gu,n.sr,n.Sm,n.oU,n.cs,n.YG,n.gu,n.wd,n.W2,i._Y,i.JL,i.sg,n.jY,n.wI,n.Ie,n.Q$,n.pK,n.j9,i.JJ,i.u,n.d8,n.QI,n.t9,n.n0,n.x4],pipes:[m.uU],styles:[""]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(T)],c.Bz]}),o})(),w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,i.UX,n.Pc,b]]}),o})()}}]);