"use strict";(self.webpackChunky=self.webpackChunky||[]).push([[313],{7313:(nt,_,c)=>{c.r(_),c.d(_,{SettingModule:()=>tt});var s=c(6895),r=c(334),l=c(9427),t=c(1571),p=c(4206),g=c(433);let f=(()=>{class n{transform(e,o){return e.filter(a=>a.title.toLowerCase().includes(o.toLowerCase()))}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"search",type:n,pure:!0}),n})();function h(n,i){1&n&&t._UZ(0,"i",26)}function b(n,i){1&n&&t._UZ(0,"i",27)}const x=function(n){return["/Games","GameDetails",n]};function v(n,i){if(1&n&&(t.TgZ(0,"div",6)(1,"div",7)(2,"div",8),t._UZ(3,"img",9),t.qZA(),t.TgZ(4,"div",10)(5,"div",11)(6,"div",12)(7,"h3",13),t._uU(8),t.qZA()(),t.TgZ(9,"div",14)(10,"button",15),t._uU(11,"Free"),t.qZA()()(),t.TgZ(12,"p",16),t._uU(13),t.qZA(),t.TgZ(14,"div",17)(15,"div",18),t._UZ(16,"i",19),t.qZA(),t.TgZ(17,"div",20)(18,"div",21)(19,"p",22),t._uU(20),t.qZA()(),t.TgZ(21,"div",23),t.YNc(22,h,1,0,"i",24),t.YNc(23,b,1,0,"i",25),t.qZA()()()()()()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(7,x,e.id)),t.xp6(2),t.s9C("src",e.thumbnail,t.LSH),t.xp6(5),t.Oqu(e.title.split(" ").slice(0,3).join(" ")),t.xp6(5),t.Oqu(e.short_description.split(" ").slice(0,5).join(" ")),t.xp6(7),t.Oqu(e.genre),t.xp6(2),t.Q6J("ngIf","Web Browser"!=e.platform),t.xp6(1),t.Q6J("ngIf","Web Browser"==e.platform)}}function Z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.Showmore())}),t._uU(1,"Load More"),t.qZA()}}let w=(()=>{class n{constructor(e,o){this._GamesService=e,this.spinner=o,this.length=20,this.AllGames=[],this.DisplayGame=this.AllGames,this.searchterm=""}ngOnInit(){this.spinner.show(),this._GamesService.GetAllGames().subscribe({next:e=>{e&&this.spinner.hide(),this.AllGames=e,this.DisplayGame=this.AllGames.slice(0,20)}})}Showmore(){this.length+=10,this.DisplayGame=this.AllGames.slice(0,this.length)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.B),t.Y36(r.t2))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-all"]],decls:7,vars:6,consts:[["type","ball-scale-multiple"],[1,"container","py-4"],["type","text","placeholder","Search ...",1,"form-control","Search_Input","mt-3","text-center","w-75","mx-auto",3,"ngModel","ngModelChange"],[1,"row","mt-5","g-3"],["class","col-lg-3 col-md-4 col-sm-5  ",4,"ngFor","ngForOf"],["class","btn btn-dark mx-auto d-block mt-4",3,"click",4,"ngIf"],[1,"col-lg-3","col-md-4","col-sm-5"],[1,"game","Gray-background","rounded-3","overflow-hidden","position-relative","curser-pointer",3,"routerLink"],[1,"image"],["alt","",1,"w-100",3,"src"],[1,"Game-info","p-3"],[1,"d-flex","justify-content-between"],[1,"title"],[1,"fw-bold","text-main","h6"],[1,"button"],[1,"btn","btn-sm","text-white","fw-bolder","secondry-bg"],[1,"text-main"],[1,"Icon-box","position-absolute","bottom-0","d-flex","justify-content-between"],[1,"icon"],[1,"fa-solid","fa-plus","bg-main","p-1","rounded-2"],[1,"GameCategorie","d-flex"],[1,"genre"],[1,"bg-main","rounded-3","px-2","fw-bold","d-flex","align-items-center"],[1,"paltfrom","mx-2"],["title","Available on Window","class","fa-brands text-main fa-windows",4,"ngIf"],["title","Available on Browser","class","fa-solid  text-main fa-window-maximize",4,"ngIf"],["title","Available on Window",1,"fa-brands","text-main","fa-windows"],["title","Available on Browser",1,"fa-solid","text-main","fa-window-maximize"],[1,"btn","btn-dark","mx-auto","d-block","mt-4",3,"click"]],template:function(e,o){1&e&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"input",2),t.NdJ("ngModelChange",function(m){return o.searchterm=m}),t.qZA(),t.TgZ(3,"div",3),t.YNc(4,v,24,9,"div",4),t.ALo(5,"search"),t.qZA(),t.YNc(6,Z,2,0,"button",5),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngModel",o.searchterm),t.xp6(2),t.Q6J("ngForOf",t.xi3(5,3,o.DisplayGame,o.searchterm)),t.xp6(2),t.Q6J("ngIf",o.AllGames.length>20&&o.DisplayGame.length!=o.AllGames.length&&0==o.searchterm.length))},dependencies:[s.sg,s.O5,l.rH,g.Fj,g.JJ,g.On,r.Ro,f],styles:[".game[_ngcontent-%COMP%]{transition:.5s all}.game[_ngcontent-%COMP%]:hover{scale:1.02}.Game-info[_ngcontent-%COMP%]{height:160px}.Icon-box[_ngcontent-%COMP%]{width:95%}.genre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{height:20px}.Search_Input[_ngcontent-%COMP%]{background-color:var(--Input-Background);border:none;color:var(--secondry-color)}.Search_Input[_ngcontent-%COMP%]:focus{background-color:var(--Input-Background);border:none;color:var(--secondry-color)}.Search_Input[_ngcontent-%COMP%]::placeholder{color:var(--secondry-color)}"]}),n})();function A(n,i){1&n&&t._UZ(0,"i",25)}function G(n,i){1&n&&t._UZ(0,"i",26)}const y=function(n){return["/Games","GameDetails",n]};function C(n,i){if(1&n&&(t.TgZ(0,"div",5)(1,"div",6)(2,"div",7),t._UZ(3,"img",8),t.qZA(),t.TgZ(4,"div",9)(5,"div",10)(6,"div",11)(7,"h3",12),t._uU(8),t.qZA()(),t.TgZ(9,"div",13)(10,"button",14),t._uU(11,"Free"),t.qZA()()(),t.TgZ(12,"p",15),t._uU(13),t.qZA(),t.TgZ(14,"div",16)(15,"div",17),t._UZ(16,"i",18),t.qZA(),t.TgZ(17,"div",19)(18,"div",20)(19,"p",21),t._uU(20),t.qZA()(),t.TgZ(21,"div",22),t.YNc(22,A,1,0,"i",23),t.YNc(23,G,1,0,"i",24),t.qZA()()()()()()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(7,y,e.id)),t.xp6(2),t.s9C("src",e.thumbnail,t.LSH),t.xp6(5),t.Oqu(e.title.split(" ").slice(0,3).join(" ")),t.xp6(5),t.Oqu(e.short_description.split(" ").slice(0,5).join(" ")),t.xp6(7),t.Oqu(e.genre),t.xp6(2),t.Q6J("ngIf","Web Browser"!=e.platform),t.xp6(1),t.Q6J("ngIf","Web Browser"==e.platform)}}function T(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.Showmore())}),t._uU(1,"Load More"),t.qZA()}}let q=(()=>{class n{constructor(e,o,a){this._activatedRoute=e,this._GamesService=o,this.spinner=a,this.length=20,this.DisplayGame=[],this.AllGames=[],this._activatedRoute.paramMap.subscribe(m=>{this.platform=m.get("platform"),this.ngOnInit()})}ngOnInit(){this.spinner.show(),this.getData()}getData(){this._GamesService.Platform(this.platform).subscribe({next:e=>{e&&this.spinner.hide(),this.AllGames=e,this.DisplayGame=this.AllGames.slice(0,this.length)}})}Showmore(){this.length+=10,this.DisplayGame=this.AllGames.slice(0,this.length),console.log(this.AllGames.slice(0,this.length)),console.log(this.DisplayGame)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(p.B),t.Y36(r.t2))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-platform"]],decls:5,vars:2,consts:[["type","ball-scale-multiple"],[1,"container","py-5"],[1,"row","mt-5","g-3"],["class","col-lg-3 col-md-4 col-sm-5",4,"ngFor","ngForOf"],["class","btn btn-dark mx-auto d-block mt-4",3,"click",4,"ngIf"],[1,"col-lg-3","col-md-4","col-sm-5"],[1,"game","Gray-background","rounded-3","overflow-hidden","position-relative","curser-pointer",3,"routerLink"],[1,"image"],["alt","",1,"w-100",3,"src"],[1,"Game-info","p-3"],[1,"d-flex","justify-content-between"],[1,"title"],[1,"fw-bold","text-main","h6"],[1,"button"],[1,"btn","btn-sm","text-white","fw-bolder","secondry-bg"],[1,"text-main"],[1,"Icon-box","position-absolute","bottom-0","d-flex","justify-content-between"],[1,"icon"],[1,"fa-solid","fa-plus","bg-main","p-1","rounded-2"],[1,"GameCategorie","d-flex"],[1,"genre"],[1,"bg-main","rounded-3","px-2","fw-bold","d-flex","align-items-center"],[1,"paltfrom","mx-2"],["title","Available on Window","class","fa-brands text-main fa-windows",4,"ngIf"],["title","Available on Browser","class","fa-solid  text-main fa-window-maximize",4,"ngIf"],["title","Available on Window",1,"fa-brands","text-main","fa-windows"],["title","Available on Browser",1,"fa-solid","text-main","fa-window-maximize"],[1,"btn","btn-dark","mx-auto","d-block","mt-4",3,"click"]],template:function(e,o){1&e&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,C,24,9,"div",3),t.qZA(),t.YNc(4,T,2,0,"button",4),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngForOf",o.DisplayGame),t.xp6(1),t.Q6J("ngIf",o.AllGames.length>20&&o.DisplayGame.length!=o.AllGames.length))},dependencies:[s.sg,s.O5,l.rH,r.Ro],styles:[".game[_ngcontent-%COMP%]{transition:.5s all}.game[_ngcontent-%COMP%]:hover{scale:1.02}.Game-info[_ngcontent-%COMP%]{height:160px}.Icon-box[_ngcontent-%COMP%]{width:95%}.genre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{height:20px}"]}),n})();var d=c(652);function O(n,i){1&n&&t._UZ(0,"i",25)}function D(n,i){1&n&&t._UZ(0,"i",26)}const U=function(n){return["/Games","GameDetails",n]};function S(n,i){if(1&n&&(t.TgZ(0,"div",5)(1,"div",6)(2,"div",7),t._UZ(3,"img",8),t.qZA(),t.TgZ(4,"div",9)(5,"div",10)(6,"div",11)(7,"h3",12),t._uU(8),t.qZA()(),t.TgZ(9,"div",13)(10,"button",14),t._uU(11,"Free"),t.qZA()()(),t.TgZ(12,"p",15),t._uU(13),t.qZA(),t.TgZ(14,"div",16)(15,"div",17),t._UZ(16,"i",18),t.qZA(),t.TgZ(17,"div",19)(18,"div",20)(19,"p",21),t._uU(20),t.qZA()(),t.TgZ(21,"div",22),t.YNc(22,O,1,0,"i",23),t.YNc(23,D,1,0,"i",24),t.qZA()()()()()()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(7,U,e.id)),t.xp6(2),t.s9C("src",e.thumbnail,t.LSH),t.xp6(5),t.Oqu(e.title.split(" ").slice(0,3).join(" ")),t.xp6(5),t.Oqu(e.short_description.split(" ").slice(0,5).join(" ")),t.xp6(7),t.Oqu(e.genre),t.xp6(2),t.Q6J("ngIf","Web Browser"!=e.platform),t.xp6(1),t.Q6J("ngIf","Web Browser"==e.platform)}}function I(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.Showmore())}),t._uU(1,"Load More"),t.qZA()}}let k=(()=>{class n{constructor(e,o,a){this._activatedRoute=e,this._GamesService=o,this.spinner=a,this.length=20,this.DisplayGame=[],this.AllGames=[],this._activatedRoute.paramMap.subscribe(m=>{this.Sorted=m.get("Sorted"),this.ngOnInit()})}ngOnInit(){this.spinner.show(),this.getData()}getData(){this._GamesService.SortBy(this.Sorted).subscribe({next:e=>{e&&this.spinner.hide(),this.AllGames=e,this.DisplayGame=this.AllGames.slice(0,this.length)}})}Showmore(){this.length+=10,this.DisplayGame=this.AllGames.slice(0,this.length),console.log(this.AllGames.slice(0,this.length)),console.log(this.DisplayGame)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(p.B),t.Y36(r.t2))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sortby"]],decls:5,vars:2,consts:[["type","ball-scale-multiple"],[1,"container","py-5"],[1,"row","mt-5","g-3"],["class","col-lg-3 col-md-4 col-sm-5",4,"ngFor","ngForOf"],["class","btn btn-dark mx-auto d-block mt-4",3,"click",4,"ngIf"],[1,"col-lg-3","col-md-4","col-sm-5"],[1,"game","Gray-background","rounded-3","overflow-hidden","position-relative","curser-pointer",3,"routerLink"],[1,"image"],["alt","",1,"w-100",3,"src"],[1,"Game-info","p-3"],[1,"d-flex","justify-content-between"],[1,"title"],[1,"fw-bold","text-main","h6"],[1,"button"],[1,"btn","btn-sm","text-white","fw-bolder","secondry-bg"],[1,"text-main"],[1,"Icon-box","position-absolute","bottom-0","d-flex","justify-content-between"],[1,"icon"],[1,"fa-solid","fa-plus","bg-main","p-1","rounded-2"],[1,"GameCategorie","d-flex"],[1,"genre"],[1,"bg-main","rounded-3","px-2","fw-bold","d-flex","align-items-center"],[1,"paltfrom","mx-2"],["title","Available on Window","class","fa-brands text-main fa-windows",4,"ngIf"],["title","Available on Browser","class","fa-solid  text-main fa-window-maximize",4,"ngIf"],["title","Available on Window",1,"fa-brands","text-main","fa-windows"],["title","Available on Browser",1,"fa-solid","text-main","fa-window-maximize"],[1,"btn","btn-dark","mx-auto","d-block","mt-4",3,"click"]],template:function(e,o){1&e&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,S,24,9,"div",3),t.qZA(),t.YNc(4,I,2,0,"button",4),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngForOf",o.DisplayGame),t.xp6(1),t.Q6J("ngIf",o.AllGames.length>20&&o.DisplayGame.length!=o.AllGames.length))},dependencies:[s.sg,s.O5,l.rH,r.Ro],styles:[".game[_ngcontent-%COMP%]{transition:.5s all}.game[_ngcontent-%COMP%]:hover{scale:1.02}.Game-info[_ngcontent-%COMP%]{height:160px}.Icon-box[_ngcontent-%COMP%]{width:95%}.genre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{height:20px}"]}),n})();function M(n,i){1&n&&t._UZ(0,"i",25)}function P(n,i){1&n&&t._UZ(0,"i",26)}const J=function(n){return["/Games","GameDetails",n]};function Y(n,i){if(1&n&&(t.TgZ(0,"div",5)(1,"div",6)(2,"div",7),t._UZ(3,"img",8),t.qZA(),t.TgZ(4,"div",9)(5,"div",10)(6,"div",11)(7,"h3",12),t._uU(8),t.qZA()(),t.TgZ(9,"div",13)(10,"button",14),t._uU(11,"Free"),t.qZA()()(),t.TgZ(12,"p",15),t._uU(13),t.qZA(),t.TgZ(14,"div",16)(15,"div",17),t._UZ(16,"i",18),t.qZA(),t.TgZ(17,"div",19)(18,"div",20)(19,"p",21),t._uU(20),t.qZA()(),t.TgZ(21,"div",22),t.YNc(22,M,1,0,"i",23),t.YNc(23,P,1,0,"i",24),t.qZA()()()()()()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(7,J,e.id)),t.xp6(2),t.s9C("src",e.thumbnail,t.LSH),t.xp6(5),t.Oqu(e.title.split(" ").slice(0,3).join(" ")),t.xp6(5),t.Oqu(e.short_description.split(" ").slice(0,5).join(" ")),t.xp6(7),t.Oqu(e.genre),t.xp6(2),t.Q6J("ngIf","Web Browser"!=e.platform),t.xp6(1),t.Q6J("ngIf","Web Browser"==e.platform)}}function j(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.Showmore())}),t._uU(1,"Load More"),t.qZA()}}let F=(()=>{class n{constructor(e,o,a){this._activatedRoute=e,this._GamesService=o,this.spinner=a,this.AllGames=[],this.DisplayGame=[],this.length=20,this._activatedRoute.paramMap.subscribe(m=>{this.Category=m.get("Categorie"),this.ngOnInit()})}ngOnInit(){this.spinner.show(),this.getData()}getData(){this._GamesService.Categories(this.Category).subscribe({next:e=>{e&&this.spinner.hide(),this.AllGames=e,this.DisplayGame=this.AllGames.slice(0,this.length)}})}Showmore(){this.length+=10,this.DisplayGame=this.AllGames.slice(0,this.length),console.log(this.AllGames.slice(0,this.length)),console.log(this.DisplayGame)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(p.B),t.Y36(r.t2))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-categories"]],decls:5,vars:2,consts:[["type","ball-scale-multiple"],[1,"container","py-5"],[1,"row","mt-5","g-3"],["class","col-lg-3 col-md-4 col-sm-5",4,"ngFor","ngForOf"],["class","btn btn-dark mx-auto d-block mt-4",3,"click",4,"ngIf"],[1,"col-lg-3","col-md-4","col-sm-5"],[1,"game","Gray-background","rounded-3","overflow-hidden","position-relative","curser-pointer",3,"routerLink"],[1,"image"],["alt","",1,"w-100",3,"src"],[1,"Game-info","p-3"],[1,"d-flex","justify-content-between"],[1,"title"],[1,"fw-bold","text-main","h6"],[1,"button"],[1,"btn","btn-sm","text-white","fw-bolder","secondry-bg"],[1,"text-main"],[1,"Icon-box","position-absolute","bottom-0","d-flex","justify-content-between"],[1,"icon"],[1,"fa-solid","fa-plus","bg-main","p-1","rounded-2"],[1,"GameCategorie","d-flex"],[1,"genre"],[1,"bg-main","rounded-3","px-2","fw-bold","d-flex","align-items-center"],[1,"paltfrom","mx-2"],["title","Available on Window","class","fa-brands text-main fa-windows",4,"ngIf"],["title","Available on Browser","class","fa-solid  text-main fa-window-maximize",4,"ngIf"],["title","Available on Window",1,"fa-brands","text-main","fa-windows"],["title","Available on Browser",1,"fa-solid","text-main","fa-window-maximize"],[1,"btn","btn-dark","mx-auto","d-block","mt-4",3,"click"]],template:function(e,o){1&e&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,Y,24,9,"div",3),t.qZA(),t.YNc(4,j,2,0,"button",4),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngForOf",o.DisplayGame),t.xp6(1),t.Q6J("ngIf",o.AllGames.length>20&&o.DisplayGame.length!=o.AllGames.length))},dependencies:[s.sg,s.O5,l.rH,r.Ro],styles:[".game[_ngcontent-%COMP%]{transition:.5s all}.game[_ngcontent-%COMP%]:hover{scale:1.02}.Game-info[_ngcontent-%COMP%]{height:160px}.Icon-box[_ngcontent-%COMP%]{width:95%}.genre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{height:20px}"]}),n})();var u=c(8912);function Q(n,i){1&n&&(t.TgZ(0,"h4",16),t._uU(1,"minimum system requirements"),t.qZA())}function B(n,i){if(1&n&&(t.TgZ(0,"p",27)(1,"span",28),t._uU(2,"graphics :"),t.qZA(),t._uU(3),t.qZA()),2&n){const e=t.oxw(2);t.xp6(3),t.hij(" ",e.GameDetails.minimum_system_requirements.graphics,"")}}function N(n,i){if(1&n&&(t.TgZ(0,"p",27)(1,"span",28),t._uU(2,"memory :"),t.qZA(),t._uU(3),t.qZA()),2&n){const e=t.oxw(2);t.xp6(3),t.hij(" ",e.GameDetails.minimum_system_requirements.memory,"")}}function L(n,i){if(1&n&&(t.TgZ(0,"p",27)(1,"span",28),t._uU(2,"os :"),t.qZA(),t._uU(3),t.qZA()),2&n){const e=t.oxw(2);t.xp6(3),t.hij(" ",e.GameDetails.minimum_system_requirements.os,"")}}function z(n,i){if(1&n&&(t.TgZ(0,"p",27)(1,"span",28),t._uU(2,"processor :"),t.qZA(),t._uU(3),t.qZA()),2&n){const e=t.oxw(2);t.xp6(3),t.hij(" ",e.GameDetails.minimum_system_requirements.processor,"")}}function H(n,i){if(1&n&&(t.TgZ(0,"p",27)(1,"span",28),t._uU(2,"storage :"),t.qZA(),t._uU(3),t.qZA()),2&n){const e=t.oxw(2);t.xp6(3),t.hij(" ",e.GameDetails.minimum_system_requirements.storage,"")}}function W(n,i){if(1&n&&t._UZ(0,"img",30),2&n){const e=t.oxw().$implicit;t.Q6J("src",e.image,t.LSH)}}function R(n,i){1&n&&(t.ynx(0),t.YNc(1,W,1,1,"ng-template",29),t.BQk())}function E(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"video",8),t._UZ(6,"source",9),t.qZA(),t._UZ(7,"img",10),t.qZA(),t.TgZ(8,"div",11)(9,"button",12),t._uU(10,"Free"),t.qZA(),t.TgZ(11,"button",13),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.GotoPage(a.GameDetails.freetogame_profile_url))}),t._uU(12,"PLAY NOW "),t._UZ(13,"i",14),t.qZA()()()(),t.TgZ(14,"div",15)(15,"H2",16),t._uU(16),t.qZA(),t.TgZ(17,"p",17),t._uU(18),t.qZA(),t.TgZ(19,"p",18),t._uU(20),t.qZA(),t.YNc(21,Q,2,0,"h4",19),t.YNc(22,B,4,1,"p",20),t.YNc(23,N,4,1,"p",20),t.YNc(24,L,4,1,"p",20),t.YNc(25,z,4,1,"p",20),t.YNc(26,H,4,1,"p",20),t.TgZ(27,"h3",21),t._uU(28),t.qZA(),t.TgZ(29,"owl-carousel-o",22),t.YNc(30,R,2,0,"ng-container",23),t.qZA(),t.TgZ(31,"H3",21),t._uU(32,"Additional Information"),t.qZA(),t.TgZ(33,"div",24)(34,"div",5)(35,"h5",25),t._uU(36,"Title"),t.qZA(),t.TgZ(37,"p",26),t._uU(38),t.qZA()(),t.TgZ(39,"div",5)(40,"h5",25),t._uU(41,"Developer"),t.qZA(),t.TgZ(42,"p",26),t._uU(43),t.qZA()(),t.TgZ(44,"div",5)(45,"h5",25),t._uU(46,"Publisher"),t.qZA(),t.TgZ(47,"p",26),t._uU(48),t.qZA()()(),t.TgZ(49,"div",4)(50,"div",5)(51,"h5",25),t._uU(52,"Release Date"),t.qZA(),t.TgZ(53,"p",26),t._uU(54),t.qZA()(),t.TgZ(55,"div",5)(56,"h5",25),t._uU(57,"Genre"),t.qZA(),t.TgZ(58,"p",26),t._uU(59),t.qZA()(),t.TgZ(60,"div",5)(61,"h5",25),t._uU(62,"Platform"),t.qZA(),t.TgZ(63,"p",26),t._uU(64),t.qZA()()()()()()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("src",e.videolink,t.LSH),t.xp6(1),t.Q6J("src",e.GameDetails.thumbnail,t.LSH),t.xp6(9),t.Oqu(e.GameDetails.title),t.xp6(2),t.hij("About ",e.GameDetails.title,""),t.xp6(2),t.Oqu(e.GameDetails.description),t.xp6(1),t.Q6J("ngIf",e.ObjectExist),t.xp6(1),t.Q6J("ngIf",e.ObjectExist),t.xp6(1),t.Q6J("ngIf",e.ObjectExist),t.xp6(1),t.Q6J("ngIf",e.ObjectExist),t.xp6(1),t.Q6J("ngIf",e.ObjectExist),t.xp6(1),t.Q6J("ngIf",e.ObjectExist),t.xp6(2),t.hij("",e.GameDetails.title,"Screenshots"),t.xp6(1),t.Q6J("options",e.customOptions),t.xp6(1),t.Q6J("ngForOf",e.GameDetails.screenshots),t.xp6(8),t.Oqu(e.GameDetails.title),t.xp6(5),t.Oqu(e.GameDetails.developer),t.xp6(5),t.Oqu(e.GameDetails.publisher),t.xp6(6),t.Oqu(e.GameDetails.release_date),t.xp6(5),t.Oqu(e.GameDetails.genre),t.xp6(5),t.Oqu(e.GameDetails.platform)}}const K=function(n){return{"background-image":n,"background-repeat":"no-repeat",height:"100vh","background-size":"cover"}},V=[{path:"",redirectTo:"all",pathMatch:"full"},{path:"all",component:w},{path:"platform/:platform",canActivate:[d.a],component:q},{path:"sort-by/:Sorted",canActivate:[d.a],component:k},{path:"categories/:Categorie",canActivate:[d.a],component:F},{path:"GameDetails/:id",canActivate:[d.a],component:(()=>{class n{constructor(e,o,a,m){this._ActivatedRoute=e,this._GamesService=o,this._Router=a,this.spinner=m,this.clip=document.querySelector(".vid"),this.ObjectExist=!1,this.videolink="",this.backgroundimage="",this.DReady=!1,this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!1,pullDrag:!1,dots:!1,navSpeed:500,navText:["",""],responsive:{0:{items:1}}},e.paramMap.subscribe(et=>{this.productId=et.get("id")})}ngOnInit(){this.spinner.show(),this._GamesService.GameDetails(this.productId).subscribe({next:e=>{e&&this.spinner.hide(),this.DReady=!0,this.GameDetails=e,this.videolink=`https://www.freetogame.com/g/${e.id}/videoplayback.webm`,this.backgroundimage=`linear-gradient(rgba(39,43,48,.9),#272b30),url(https://www.freetogame.com/g/${e.id}/background.jpg  )`,console.log(e),this.ObjectExist=typeof this.GameDetails.minimum_system_requirements<"u"}})}GotoPage(e){window.open(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(p.B),t.Y36(l.F0),t.Y36(r.t2))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game-details"]],decls:3,vars:4,consts:[["type","ball-scale-multiple"],[1,"BackgroundImG",3,"ngStyle"],["class","container py-5",4,"ngIf"],[1,"container","py-5"],[1,"row"],[1,"col-md-4"],[1,"thumbnail"],[1,"position-relative","Sh-video"],["loop","","muted","","onmouseover","this.play()","onmouseout","this.pause();","autoplay","",1,"w-100","top-0","rounded-2","position-relative"],["type","video/webm",3,"src"],["alt","",1,"w-100","Image-ho",3,"src"],[1,"buttons","d-flex","justify-content-between","mt-4"],[1,"btn","btn-dark","text-white"],[1,"btn","btn-info","text-white","w-75",3,"click"],["_ngcontent-lay-c6","",1,"fas","fa-sign-out-alt"],[1,"col-md-8"],[1,"text-main","fw-bolder"],[1,"text-main","fw-semibold","mt-3"],[1,"text-main","fw-semibold","lh-lg"],["class","text-main fw-bolder",4,"ngIf"],["class","text-main ms-1",4,"ngIf"],[1,"text-main","fw-bolder","mt-4"],[3,"options"],[4,"ngFor","ngForOf"],[1,"row","mt-4"],[1,"text-main","fw-semibold"],[1,"text-main"],[1,"text-main","ms-1"],[1,"fw-semibold"],["carouselSlide",""],[3,"src"]],template:function(e,o){1&e&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1),t.YNc(2,E,65,20,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngStyle",t.VKq(2,K,o.backgroundimage)),t.xp6(1),t.Q6J("ngIf",o.DReady))},dependencies:[s.sg,s.O5,s.PC,r.Ro,u.Fy,u.Mp],styles:[".Sh-video[_ngcontent-%COMP%]:hover   .Image-ho[_ngcontent-%COMP%]{opacity:0}.Image-ho[_ngcontent-%COMP%]{position:absolute;left:0;height:100%;transition:.5s;background-size:cover}"]}),n})()}];let X=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(V),l.Bz]}),n})(),tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,X,g.u5,r.ef,l.Bz,u.bB]}),n})()}}]);