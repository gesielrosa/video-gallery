(self.webpackChunkvideo_gallery=self.webpackChunkvideo_gallery||[]).push([[225],{225:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ListModule:()=>y});var o=n(319),i=n(116),r=n(713);const s=(0,r.X$)("fadeIn",[(0,r.eR)(":enter",[(0,r.oB)({opacity:0}),(0,r.jt)("200ms",(0,r.oB)({opacity:1}))])]);var c=n(619);function a(e,t){if(1&e){const e=c.EpF();c.ynx(0),c._UZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"div",4),c.NdJ("click",function(){return c.CHM(e),c.oxw().close()}),c._uU(5,"\xd7"),c.qZA(),c._UZ(6,"img",5),c.TgZ(7,"h3"),c._uU(8),c.qZA(),c.TgZ(9,"div",6),c.TgZ(10,"div"),c.TgZ(11,"label"),c._uU(12,"Director:"),c.qZA(),c.TgZ(13,"p"),c._uU(14),c.qZA(),c.qZA(),c.TgZ(15,"div"),c.TgZ(16,"label"),c._uU(17,"Gender:"),c.qZA(),c.TgZ(18,"p"),c._uU(19),c.qZA(),c.qZA(),c.TgZ(20,"div"),c.TgZ(21,"label"),c._uU(22,"Year:"),c.qZA(),c.TgZ(23,"p"),c._uU(24),c.qZA(),c.qZA(),c.qZA(),c.TgZ(25,"label"),c._uU(26,"Overview:"),c.qZA(),c.TgZ(27,"p"),c._uU(28),c.qZA(),c.qZA(),c.qZA(),c.BQk()}if(2&e){const e=c.oxw();c.xp6(1),c.Q6J("@fadeIn",void 0),c.xp6(1),c.Q6J("@fadeIn",void 0),c.xp6(4),c.Q6J("src",e.movie.cover_url,c.LSH)("alt",e.movie.name),c.xp6(2),c.Oqu(e.movie.name),c.xp6(6),c.Oqu(e.movie.director),c.xp6(5),c.Oqu(e.movie.gender),c.xp6(5),c.Oqu(e.movie.year),c.xp6(4),c.Oqu(e.movie.description)}}let p=(()=>{class e{constructor(e){this._cdr=e,this.show=!1}open(e){this.movie=e,this.show=!0,this._detectChanges()}close(){this.show=!1,this.movie=null,this._detectChanges()}_detectChanges(){this._cdr.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(c.sBO))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-movie-details"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"backdrop"],[1,"wrapper"],[1,"container"],[1,"close",3,"click"],[3,"src","alt"],[1,"details"]],template:function(e,t){1&e&&c.YNc(0,a,29,9,"ng-container",0),2&e&&c.Q6J("ngIf",t.show)},directives:[i.O5],styles:["[_nghost-%COMP%]   .backdrop[_ngcontent-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;z-index:2}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;background-color:var(--light);border-radius:8px;width:540px;min-height:40vh;max-height:80vh;max-width:80vw;box-shadow:3px 11px 25px -5px hsla(0,0%,69%,.75);display:flex;flex-direction:column;padding:24px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:240px;object-fit:contain}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--secondary);margin-bottom:24px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:flex;align-items:center;grid-gap:48px;gap:48px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--medium)}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:0;margin-bottom:16px}[_nghost-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;top:8px;right:16px;cursor:pointer;font-size:24px;color:var(--medium)}"],data:{animation:[s]},changeDetection:0}),e})();var l=n(996),d=n(693);let g=(()=>{class e{constructor(e){this._http=e}list(){return this._http.get("./assets/json/movies.json").pipe((0,l.U)(e=>e.data))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(d.eN))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const h=[[["app-slide"]]],u=["app-slide"];let m=(()=>{class e{constructor(e){this._el=e}scrollHorizontal(e){this._el.nativeElement.scrollLeft+=e.deltaY,e.preventDefault()}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(c.SBq))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-slider"]],hostBindings:function(e,t){1&e&&c.NdJ("mousewheel",function(e){return t.scrollHorizontal(e)})},ngContentSelectors:u,decls:3,vars:0,consts:[[1,"spacing"]],template:function(e,t){1&e&&(c.F$t(h),c._UZ(0,"div",0),c.Hsn(1),c._UZ(2,"div",0))},styles:["[_nghost-%COMP%]{display:flex;align-items:center;grid-gap:16px;gap:16px;overflow:auto;white-space:nowrap;-ms-overflow-style:none;scrollbar-width:none}[_nghost-%COMP%]::-webkit-scrollbar{display:none}[_nghost-%COMP%]   .spacing[_ngcontent-%COMP%]{min-width:8px;height:1px}"],changeDetection:0}),e})();const f=[[["","image",""]],[["","gender",""]],[["","name",""]],[["","director",""]],[["","description",""]]],x=["[image]","[gender]","[name]","[director]","[description]"];let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-slide"]],ngContentSelectors:x,decls:6,vars:0,consts:[[1,"image"]],template:function(e,t){1&e&&(c.F$t(f),c.TgZ(0,"div",0),c.Hsn(1),c.Hsn(2,1),c.qZA(),c.Hsn(3,2),c.Hsn(4,3),c.Hsn(5,4))},styles:["[_nghost-%COMP%]{display:inline-block;background-color:var(--light);width:280px;min-width:280px;height:500px;border-radius:8px;border:2px solid var(--secondary);overflow:hidden;cursor:pointer}[_nghost-%COMP%]:hover{border:2px solid var(--medium)}[_nghost-%COMP%]   .image[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]     [image]{width:100%;height:100%;max-height:340px;object-fit:cover}[_nghost-%COMP%]     [name]{padding:0 16px;white-space:normal;color:var(--secondary)}[_nghost-%COMP%]     [description]{padding:0 16px;white-space:normal}[_nghost-%COMP%]     [gender]{position:absolute;bottom:12px;left:8px;color:var(--light);padding:8px 16px;text-shadow:1px 1px var(--secondary);background:hsla(0,0%,100%,.2);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:25px;font-size:14px}"],changeDetection:0}),e})(),v=(()=>{class e{transform(e="",t){return e?e.length>t?e.substring(0,t)+"...":e:""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=c.Yjl({name:"maxLength",type:e,pure:!0}),e})();function C(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"app-slide",2),c.NdJ("click",function(){const t=c.CHM(e).$implicit;return c.oxw().showDetails(t)}),c._UZ(1,"img",3),c.TgZ(2,"h3",4),c._uU(3),c.qZA(),c.TgZ(4,"p",5),c._uU(5),c.ALo(6,"maxLength"),c.qZA(),c.TgZ(7,"span",6),c._uU(8),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit;c.xp6(1),c.Q6J("src",e.cover_url,c.LSH)("alt",e.name),c.xp6(2),c.Oqu(e.name),c.xp6(2),c.Oqu(c.xi3(6,5,e.description,60)),c.xp6(3),c.Oqu(e.gender)}}let O=(()=>{class e{constructor(e,t){this._moviesService=e,this._cdr=t}ngOnInit(){this._getMovies()}_getMovies(){this._moviesService.list().subscribe(e=>{this.movies=e},e=>console.error(e),()=>this._detectChanges())}showDetails(e){this.detailsComponent.open(e)}trackBy(e,t){return t.uuid}_detectChanges(){this._cdr.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(g),c.Y36(c.sBO))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-list"]],viewQuery:function(e,t){if(1&e&&c.Gf(p,5),2&e){let e;c.iGM(e=c.CRH())&&(t.detailsComponent=e.first)}},decls:4,vars:2,consts:[[1,"container"],[3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[3,"click"],["image","",3,"src","alt"],["name",""],["description",""],["gender",""]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"app-slider"),c.YNc(2,C,9,8,"app-slide",1),c.qZA(),c.qZA(),c._UZ(3,"app-movie-details")),2&e&&(c.xp6(2),c.Q6J("ngForOf",t.movies)("ngForTrackBy",t.trackBy))},directives:[m,i.sg,p,_],pipes:[v],styles:["[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{padding-top:24px;padding-bottom:24px}"],changeDetection:0}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[]]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[]]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.ez]]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({providers:[],imports:[[o.Bz.forChild([{path:"",component:O}]),i.ez,Z,w,b,M]]}),e})()}}]);