"use strict";(self.webpackChunksistema=self.webpackChunksistema||[]).push([[946],{6946:(P,s,a)=>{a.r(s),a.d(s,{MedicModule:()=>Z});var c=a(6895),l=a(3060),r=a(4968),u=a(8372),t=a(4650),h=a(7440),p=a(7392),f=a(4859),g=a(2161),m=a(9549),v=a(4144),M=a(3267);const C=["searchBox"],x=[{path:"",component:(()=>{class e{constructor(){this.listFields=["id","name","lastname","mcmp"],this.dataOriginal=[{id:1,name:"Juan Manuel",lastname:"Cespedes",mcmp:"333333",marked:!1},{id:2,name:"Aldo ",lastname:"Salas",mcmp:"322333",marked:!1},{id:3,name:"Carlos Enrique",lastname:"Mendoza",mcmp:"332343",marked:!1}],this.dataSource=[],this.dataSource=[...this.dataOriginal]}ngOnInit(){}ngAfterViewInit(){(0,r.R)(this.searchBox.nativeElement,"keyup").pipe((0,u.b)(500)).subscribe(n=>this.search(n.target.value))}toggleID(n){const i=this.listFields.indexOf(n);i>-1?this.listFields.splice(i,1):this.listFields.push(n)}applyFilter(n){}search(n){this.dataSource=[...this.dataOriginal.filter(i=>i.name.toLocaleLowerCase().includes(n))]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["amb-page-list"]],viewQuery:function(n,i){if(1&n&&t.Gf(C,5),2&n){let d;t.iGM(d=t.CRH())&&(i.searchBox=d.first)}},decls:15,vars:0,consts:[["mat-flat-button","","color","primary","btnAction",""],[1,"example-form"],["appearance","fill",1,"example-full-width"],["matInput","","maxlength","256","placeholder","Ingrese el valor a buscar"],["searchBox",""],["opened","false","position","end"]],template:function(n,i){1&n&&(t.TgZ(0,"amb-title")(1,"button",0)(2,"mat-icon"),t._uU(3,"add"),t.qZA(),t._uU(4," Add Medic "),t.qZA()(),t.TgZ(5,"amb-container")(6,"form",1)(7,"mat-form-field",2)(8,"mat-label"),t._uU(9,"Search"),t.qZA(),t._UZ(10,"input",3,4),t.qZA()(),t._UZ(12,"br"),t.TgZ(13,"mat-sidenav",5),t._uU(14,"ss"),t.qZA()())},dependencies:[h.r,p.Hw,f.lW,g.e,m.KE,m.hX,v.Nt,M.JX],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:900px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%;height:20px!important}mat-sidenav[_ngcontent-%COMP%]{width:80%}"]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(x),l.Bz]}),e})();var A=a(1989);let Z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,y,A.m]}),e})()}}]);