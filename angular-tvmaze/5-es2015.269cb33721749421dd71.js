(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{xMbC:function(t,e,n){"use strict";n.r(e),n.d(e,"ShowModule",(function(){return Z}));var o=n("ofXK"),i=n("tyNb"),s=n("fXoL"),c=n("vkgz"),a=n("tk/3");let r=(()=>{class t{constructor(t){this.http=t,this.shows=[],this.searchShows=[]}fetchShows(){return this.http.get("http://api.tvmaze.com/shows").pipe(Object(c.a)(t=>this.shows=t))}fetchShow(t){return this.http.get(`http://api.tvmaze.com/shows/${t}`)}fetchShowEpisodes(t){return this.http.get(`http://api.tvmaze.com/shows/${t}/episodes`)}fetchShowCasts(t){return this.http.get(`http://api.tvmaze.com/shows/${t}/cast`)}fetchSearchShow(t){return this.http.get(`http://api.tvmaze.com/search/shows?q=${t}`).pipe(Object(c.a)(t=>{let e=[];t.forEach((function(t){e.push(t.show)})),this.shows=e}))}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(a.a))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=n("NFeN");let d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-show-action"]],decls:11,vars:0,consts:[[1,"action"],[1,"action__list"],[1,"action__button","button"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"button",2),s.Tb(3,"mat-icon"),s.wc(4,"star"),s.Sb(),s.Sb(),s.Tb(5,"button",2),s.Tb(6,"mat-icon"),s.wc(7,"sort_by_alpha"),s.Sb(),s.Sb(),s.Tb(8,"button",2),s.Tb(9,"mat-icon"),s.wc(10,"format_list_numbered"),s.Sb(),s.Sb(),s.Sb(),s.Sb())},directives:[l.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap")[_ngcontent-%COMP%];body[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-size:15px;overflow-x:hidden;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;color:#0a0a0a}.block[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:300}ul[_ngcontent-%COMP%]{padding:0;margin:0}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}input[_ngcontent-%COMP%]{outline:none}img[_ngcontent-%COMP%]{display:block;border:0;width:100%;height:auto}.button[_ngcontent-%COMP%]{text-transform:uppercase;display:flex;justify-content:center;text-align:center;cursor:pointer;transition:all .2s ease;font-weight:700;outline:none}.action[_ngcontent-%COMP%]{width:100%;background-color:#e8e8e8}.action[_ngcontent-%COMP%]   .action__list[_ngcontent-%COMP%]{width:25%;display:flex;justify-content:center;flex-wrap:nowrap;text-align:center;padding:.5rem;margin:0 auto}.action[_ngcontent-%COMP%]   .action__button[_ngcontent-%COMP%]{width:50%;padding:.2rem;margin:.2rem;color:#fff;background-color:#3c948b;border:1px solid #3c948b}.action[_ngcontent-%COMP%]   .action__button[_ngcontent-%COMP%]:hover{background-color:#2d7069}']}),t})();var h=n("3Pt+"),g=n("D0XW"),p=n("7o/Q"),b=n("EY2u"),u=n("LRne"),m=n("z6cu");let f=(()=>{class t{constructor(t,e,n){this.kind=t,this.value=e,this.error=n,this.hasValue="N"===t}observe(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}}do(t,e,n){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return n&&n()}}accept(t,e,n){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,n)}toObservable(){switch(this.kind){case"N":return Object(u.a)(this.value);case"E":return Object(m.a)(this.error);case"C":return Object(b.b)()}throw new Error("unexpected notification kind value")}static createNext(e){return void 0!==e?new t("N",e):t.undefinedValueNotification}static createError(e){return new t("E",void 0,e)}static createComplete(){return t.completeNotification}}return t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t})();function _(t,e=g.a){var n;const o=(n=t)instanceof Date&&!isNaN(+n)?+t-e.now():Math.abs(t);return t=>t.lift(new w(o,e))}class w{constructor(t,e){this.delay=t,this.scheduler=e}call(t,e){return e.subscribe(new O(t,this.delay,this.scheduler))}}class O extends p.a{constructor(t,e,n){super(t),this.delay=e,this.scheduler=n,this.queue=[],this.active=!1,this.errored=!1}static dispatch(t){const e=t.source,n=e.queue,o=t.scheduler,i=t.destination;for(;n.length>0&&n[0].time-o.now()<=0;)n.shift().notification.observe(i);if(n.length>0){const e=Math.max(0,n[0].time-o.now());this.schedule(t,e)}else this.unsubscribe(),e.active=!1}_schedule(t){this.active=!0,this.destination.add(t.schedule(O.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))}scheduleNotification(t){if(!0===this.errored)return;const e=this.scheduler,n=new C(e.now()+this.delay,t);this.queue.push(n),!1===this.active&&this._schedule(e)}_next(t){this.scheduleNotification(f.createNext(t))}_error(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()}_complete(){this.scheduleNotification(f.createComplete()),this.unsubscribe()}}class C{constructor(t,e){this.time=t,this.notification=e}}let M=(()=>{class t{constructor(t,e){this.searchFormBuilder=t,this.showService=e,this.searchStart=new s.n,this.searchEmpty=new s.n,this.searchResult=new s.n}ngOnInit(){this.searchShowForm=this.searchFormBuilder.group({search:["",[h.i.required]]})}onSearchShow(){const t=this.searchShowForm.controls.search.value;""!==t?(this.onSearchStart(),this.showService.fetchSearchShow(t).pipe(_(10)).subscribe(()=>{this.onSearchResult()})):this.onSearchEmptyQuery()}onSearchEmptyQuery(){this.searchEmpty.emit()}onSearchStart(){this.searchStart.emit()}onSearchResult(){this.searchResult.emit()}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(h.b),s.Nb(r))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-search"]],outputs:{searchStart:"searchStart",searchEmpty:"searchEmpty",searchResult:"searchResult"},decls:5,vars:1,consts:[[1,"search",3,"formGroup","ngSubmit"],[1,"search__list"],["formControlName","search","placeholder","Filter shows by title...","type","search",1,"search__input"],["type","submit",1,"search__button","button"]],template:function(t,e){1&t&&(s.Tb(0,"form",0),s.bc("ngSubmit",(function(){return e.onSearchShow()})),s.Tb(1,"div",1),s.Ob(2,"input",2),s.Tb(3,"button",3),s.wc(4,"Search"),s.Sb(),s.Sb(),s.Sb()),2&t&&s.jc("formGroup",e.searchShowForm)},directives:[h.j,h.g,h.d,h.a,h.f,h.c],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap")[_ngcontent-%COMP%];body[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-size:15px;overflow-x:hidden;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;color:#0a0a0a}.block[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:300}ul[_ngcontent-%COMP%]{padding:0;margin:0}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}input[_ngcontent-%COMP%]{outline:none}img[_ngcontent-%COMP%]{display:block;border:0;width:100%;height:auto}.button[_ngcontent-%COMP%]{text-transform:uppercase;display:flex;justify-content:center;text-align:center;cursor:pointer;transition:all .2s ease;font-weight:700;outline:none}.search[_ngcontent-%COMP%]{width:100%;margin:.5rem}.search[_ngcontent-%COMP%]   .search__list[_ngcontent-%COMP%]{display:flex;justify-content:center;text-align:center;flex-wrap:wrap;width:80%;margin:1rem auto}.search[_ngcontent-%COMP%]   .search__input[_ngcontent-%COMP%]{min-width:300px;box-sizing:border-box;padding:.5rem;border:2px solid #3c948b}.search[_ngcontent-%COMP%]   .search__button[_ngcontent-%COMP%]{background-color:#3c948b;color:#fff;padding:.5rem}']}),t})(),P=(()=>{class t{constructor(t){this.showService=t,this.load=new s.n}ngOnInit(){this.showService.fetchShows().pipe(_(100)).subscribe(()=>{this.loadShows()})}loadShows(){this.load.emit()}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(r))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-show-loading"]],outputs:{load:"load"},decls:3,vars:0,consts:[[1,"loading"],[1,"loading__item"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"p",1),s.wc(2,"Loading..."),s.Sb(),s.Sb())},styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap")[_ngcontent-%COMP%];body[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-size:15px;overflow-x:hidden;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;color:#0a0a0a}.block[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:300}ul[_ngcontent-%COMP%]{padding:0;margin:0}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}input[_ngcontent-%COMP%]{outline:none}img[_ngcontent-%COMP%]{display:block;border:0;width:100%;height:auto}.button[_ngcontent-%COMP%]{text-transform:uppercase;display:flex;justify-content:center;text-align:center;cursor:pointer;transition:all .2s ease;font-weight:700;outline:none}.loading[_ngcontent-%COMP%]{width:100%}.loading[_ngcontent-%COMP%]   .loading__item[_ngcontent-%COMP%]{text-align:center;padding:.5rem;margin:.5rem auto;color:#3c948b}']}),t})();const y=function(t){return["/show",t]};let x=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-show-item"]],inputs:{show:"show"},decls:14,vars:7,consts:[[3,"routerLink"],[1,"show-item"],[1,"show-item__list"],[1,"show-item__item"],[1,"show-item__photo",3,"src","alt"],[1,"show-item__name"],[1,"show-item__popularity"],[1,"show-item__rating"]],template:function(t,e){1&t&&(s.Tb(0,"a",0),s.Tb(1,"div",1),s.Tb(2,"div",2),s.Tb(3,"div",3),s.Ob(4,"img",4),s.Sb(),s.Tb(5,"div",3),s.Tb(6,"div",5),s.wc(7),s.Sb(),s.Sb(),s.Tb(8,"div",3),s.Tb(9,"div",6),s.Tb(10,"mat-icon"),s.wc(11,"star"),s.Sb(),s.Tb(12,"div",7),s.wc(13),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.jc("routerLink",s.lc(5,y,e.show.id)),s.Cb(4),s.jc("src",e.show.image.medium,s.sc)("alt",e.show.name),s.Cb(3),s.xc(e.show.name),s.Cb(6),s.xc(e.show.rating.average))},directives:[i.c,l.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap")[_ngcontent-%COMP%];body[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-size:15px;overflow-x:hidden;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;color:#0a0a0a}.block[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:300}ul[_ngcontent-%COMP%]{padding:0;margin:0}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}input[_ngcontent-%COMP%]{outline:none}img[_ngcontent-%COMP%]{display:block;border:0;width:100%;height:auto}.button[_ngcontent-%COMP%]{text-transform:uppercase;display:flex;justify-content:center;text-align:center;cursor:pointer;transition:all .2s ease;font-weight:700;outline:none}.show-item[_ngcontent-%COMP%]{width:100%}.show-item[_ngcontent-%COMP%]   .show-item__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1}.show-item[_ngcontent-%COMP%]   .show-item__item[_ngcontent-%COMP%]{color:#fff}.show-item[_ngcontent-%COMP%]   .show-item__photo[_ngcontent-%COMP%]{max-width:100%}.show-item[_ngcontent-%COMP%]   .show-item__name[_ngcontent-%COMP%]{font-weight:700;padding:.5rem}.show-item[_ngcontent-%COMP%]   .show-item__name[_ngcontent-%COMP%]:hover{text-decoration:underline}.show-item[_ngcontent-%COMP%]   .show-item__popularity[_ngcontent-%COMP%]{display:flex;text-align:center;padding:.5rem}.show-item[_ngcontent-%COMP%]   .show-item__rating[_ngcontent-%COMP%]{padding:.2rem}']}),t})();function S(t,e){if(1&t&&(s.Tb(0,"li",6),s.Ob(1,"app-show-item",7),s.Sb()),2&t){const t=e.$implicit;s.Cb(1),s.jc("show",t)}}function v(t,e){if(1&t&&(s.Tb(0,"ul",4),s.uc(1,S,2,1,"li",5),s.Sb()),2&t){const t=s.dc();s.Cb(1),s.jc("ngForOf",t.shows)}}function T(t,e){1&t&&(s.Tb(0,"p",8),s.wc(1,"No Shows now!"),s.Sb())}let k=(()=>{class t{constructor(){}ngOnInit(){this.shows=this.shows}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-show-list"]],inputs:{shows:"shows"},decls:6,vars:2,consts:[[1,"show-list"],[1,"show-list__title","title"],["class","show-list__list",4,"ngIf","ngIfElse"],["noShows",""],[1,"show-list__list"],["class","show-list__item",4,"ngFor","ngForOf"],[1,"show-list__item"],[3,"show"],[1,"show-list__noshows"]],template:function(t,e){if(1&t&&(s.Tb(0,"div",0),s.Tb(1,"h1",1),s.wc(2,"Show List"),s.Sb(),s.uc(3,v,2,1,"ul",2),s.uc(4,T,2,0,"ng-template",null,3,s.vc),s.Sb()),2&t){const t=s.pc(5);s.Cb(3),s.jc("ngIf",e.shows.length)("ngIfElse",t)}},directives:[o.l,o.k,x],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap")[_ngcontent-%COMP%];body[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-size:15px;overflow-x:hidden;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;color:#0a0a0a}.block[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:300}ul[_ngcontent-%COMP%]{padding:0;margin:0}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}input[_ngcontent-%COMP%]{outline:none}img[_ngcontent-%COMP%]{display:block;border:0;width:100%;height:auto}.button[_ngcontent-%COMP%]{text-transform:uppercase;display:flex;justify-content:center;text-align:center;cursor:pointer;transition:all .2s ease;font-weight:700;outline:none}.show-list[_ngcontent-%COMP%]{width:100%}.show-list[_ngcontent-%COMP%]   .show-list__title[_ngcontent-%COMP%]{font-size:1.675rem;margin:1rem 2rem}.show-list[_ngcontent-%COMP%]   .show-list__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around;flex-basis:auto;margin:1rem}.show-list[_ngcontent-%COMP%]   .show-list__item[_ngcontent-%COMP%]{width:150px;min-height:100%;margin:0 .2rem 1rem;background-color:#1f4b47;border:1px solid #ccc;border-bottom:3px solid #3c948b;box-shadow:0 1px 5px 0 rgba(0,0,0,.15)}.show-list[_ngcontent-%COMP%]   .show-list__noshows[_ngcontent-%COMP%]{text-align:center;padding:.5rem;margin:.5rem auto}']}),t})();function j(t,e){if(1&t){const t=s.Ub();s.Tb(0,"div"),s.Tb(1,"app-show-loading",2),s.bc("load",(function(){return s.qc(t),s.dc().loadShows()})),s.Sb(),s.Sb()}}function N(t,e){if(1&t&&(s.Tb(0,"div"),s.Ob(1,"app-show-list",3),s.Sb()),2&t){const t=s.dc();s.Cb(1),s.jc("shows",t.shows)}}let z=(()=>{class t{constructor(t){this.showService=t}ngOnInit(){this.loading=!0}loadShows(){this.loading=!1,this.shows=this.showService.shows}onSearchStart(){this.loading=!0}onSearchEmpty(){this.ngOnInit()}onSearchShow(){this.loadShows()}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(r))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-tvmaze-page"]],decls:5,vars:2,consts:[[3,"searchStart","searchEmpty","searchResult"],[4,"ngIf"],[3,"load"],[3,"shows"]],template:function(t,e){1&t&&(s.Tb(0,"div"),s.Ob(1,"app-show-action"),s.Tb(2,"app-search",0),s.bc("searchStart",(function(){return e.onSearchStart()}))("searchEmpty",(function(){return e.onSearchEmpty()}))("searchResult",(function(){return e.onSearchShow()})),s.Sb(),s.uc(3,j,2,0,"div",1),s.uc(4,N,2,1,"div",1),s.Sb()),2&t&&(s.Cb(3),s.jc("ngIf",e.loading),s.Cb(1),s.jc("ngIf",!e.loading))},directives:[d,M,o.l,P,k],styles:[""]}),t})(),H=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-not-found"]],decls:2,vars:0,consts:[[1,"notfound"]],template:function(t,e){1&t&&(s.Tb(0,"p",0),s.wc(1,"Sorry, this page is not found!"),s.Sb())},styles:[".notfound[_ngcontent-%COMP%]{text-align:center;font-size:2em;padding:.5rem;margin:.5rem auto}"]}),t})();var I=n("2Vo4"),R=n("c+7h");function E(t,e){if(1&t&&(s.Tb(0,"div",1),s.Tb(1,"h1",2),s.wc(2),s.Sb(),s.Ob(3,"p-tabMenu",3),s.Ob(4,"router-outlet"),s.Sb()),2&t){const t=e.ngIf,n=s.dc();s.Cb(2),s.xc(t.name),s.Cb(1),s.jc("model",n.menuItems)}}let $=(()=>{class t{constructor(){this.show=new I.a(null)}get show$(){return this.show.asObservable()}addData(t){this.show.next(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac}),t})(),F=(()=>{class t{constructor(t,e,n){this.route=t,this.showService=e,this.showDetailsService=n,this.menuItems=[{label:"main",routerLink:"main",icon:"fa fa-fw fa-bookmark-o"},{label:"episodes",routerLink:"episodes",icon:"fa fa-fw fa-calendar"},{label:"cast",routerLink:"casts",icon:"fa fa-fw fa-user-circle"}],this.route.params.subscribe(t=>{console.log(t),this.show$=this.showService.fetchShow(t.id),this.show$.subscribe(t=>{this.showDetailsService.addData(t)})})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(i.a),s.Nb(r),s.Nb($))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-show-page"]],features:[s.Bb([$])],decls:3,vars:3,consts:[["class","show-page",4,"ngIf"],[1,"show-page"],[1,"show-page__name","title"],[1,"show-page__navigation",3,"model"]],template:function(t,e){1&t&&(s.Tb(0,"div"),s.uc(1,E,5,2,"div",0),s.ec(2,"async"),s.Sb()),2&t&&(s.Cb(1),s.jc("ngIf",s.fc(2,1,e.show$)))},directives:[o.l,R.a,i.e],pipes:[o.b],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap")[_ngcontent-%COMP%];body[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-size:15px;overflow-x:hidden;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;color:#0a0a0a}.block[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:300}ul[_ngcontent-%COMP%]{padding:0;margin:0}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}input[_ngcontent-%COMP%]{outline:none}img[_ngcontent-%COMP%]{display:block;border:0;width:100%;height:auto}.button[_ngcontent-%COMP%]{text-transform:uppercase;display:flex;justify-content:center;text-align:center;cursor:pointer;transition:all .2s ease;font-weight:700;outline:none}[_nghost-%COMP%]     .ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem.ui-state-active{background-color:#71c5bd;border:1px solid #3c948b;color:#fff}.show-page__name[_ngcontent-%COMP%]{text-align:left;margin:1rem 2rem}p-tabMenu[_ngcontent-%COMP%]{display:block;margin:0 2rem}']}),t})();function L(t,e){if(1&t&&(s.Tb(0,"div",2),s.Tb(1,"div",3),s.Tb(2,"div",4),s.Ob(3,"img",5),s.Sb(),s.Ob(4,"div",6),s.Sb(),s.Tb(5,"div",7),s.Tb(6,"h2",8),s.wc(7,"Show Info"),s.Sb(),s.Tb(8,"div",9),s.Tb(9,"strong",10),s.wc(10,"Network:"),s.Sb(),s.Tb(11,"span"),s.wc(12),s.Sb(),s.Sb(),s.Tb(13,"div",9),s.Tb(14,"strong",10),s.wc(15,"Schedule:"),s.Sb(),s.Tb(16,"span"),s.wc(17),s.Sb(),s.Sb(),s.Tb(18,"div",9),s.Tb(19,"strong",10),s.wc(20,"Status:"),s.Sb(),s.Tb(21,"span"),s.wc(22),s.Sb(),s.Sb(),s.Tb(23,"div",9),s.Tb(24,"strong",10),s.wc(25,"Show Type:"),s.Sb(),s.Tb(26,"span"),s.wc(27),s.Sb(),s.Sb(),s.Tb(28,"div",9),s.Tb(29,"strong",10),s.wc(30,"Genres:"),s.Sb(),s.Tb(31,"span"),s.wc(32),s.Sb(),s.Sb(),s.Tb(33,"div",9),s.Tb(34,"strong",10),s.wc(35,"Episodes ordered: "),s.Sb(),s.Ob(36,"span"),s.Sb(),s.Tb(37,"div",9),s.Tb(38,"strong",10),s.wc(39,"Created by:"),s.Sb(),s.Ob(40,"span"),s.Sb(),s.Tb(41,"div",9),s.Tb(42,"strong",10),s.wc(43,"Official site:"),s.Sb(),s.Tb(44,"a",11),s.wc(45,"Click here"),s.Sb(),s.Sb(),s.Tb(46,"div",9),s.Tb(47,"strong",10),s.wc(48,"Raiting:"),s.Sb(),s.Tb(49,"span"),s.wc(50),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&t){const t=e.ngIf;s.Cb(3),s.jc("src",t.image.medium,s.sc)("alt",t.name),s.Cb(1),s.jc("innerHTML",t.summary,s.rc),s.Cb(8),s.zc('"',t.network.name,'" in ',t.network.country.name," "),s.Cb(5),s.zc("",t.schedule.time," ",t.schedule.days,""),s.Cb(5),s.xc(t.status),s.Cb(5),s.xc(t.type),s.Cb(5),s.xc(t.genres.join(", ")),s.Cb(12),s.jc("href",t.officialSite,s.sc),s.Cb(6),s.xc(t.rating.average)}}let D=(()=>{class t{constructor(t){this.showDetailsService=t,this.show$=this.showDetailsService.show$}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(s.Nb($))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-show-details"]],decls:3,vars:3,consts:[[1,"show-details"],["class","show-details__list",4,"ngIf"],[1,"show-details__list"],[1,"show-details__item","show-details__description"],[1,"show-details__image"],[1,"show-details__photo",3,"src","alt"],[1,"show-details__summary",3,"innerHTML"],[1,"show-details__item","show-details__info"],[1,"show-details__title","title"],[1,"show-details__subitem"],[1,"show-details__subtitle"],["target","_blank",3,"href"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.uc(1,L,51,12,"div",1),s.ec(2,"async"),s.Sb()),2&t&&(s.Cb(1),s.jc("ngIf",s.fc(2,1,e.show$)))},directives:[o.l],pipes:[o.b],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap")[_ngcontent-%COMP%];body[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-size:15px;overflow-x:hidden;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;color:#0a0a0a}.block[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:300}ul[_ngcontent-%COMP%]{padding:0;margin:0}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}input[_ngcontent-%COMP%]{outline:none}img[_ngcontent-%COMP%]{display:block;border:0;width:100%;height:auto}.button[_ngcontent-%COMP%]{text-transform:uppercase;display:flex;justify-content:center;text-align:center;cursor:pointer;transition:all .2s ease;font-weight:700;outline:none}.show-details[_ngcontent-%COMP%]{width:100%}.show-details[_ngcontent-%COMP%]   .show-details__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around;margin:1rem}.show-details[_ngcontent-%COMP%]   .show-details__item[_ngcontent-%COMP%]{margin:.5rem 1rem;padding:1rem;background-color:#f7f7f7;border:1px solid #ccc;border-bottom:3px solid #3c948b;box-shadow:0 1px 5px 0 rgba(0,0,0,.15);color:#0a0a0a}.show-details[_ngcontent-%COMP%]   .show-details__description[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:space-around;flex:2;background-color:#fff}.show-details[_ngcontent-%COMP%]   .show-details__image[_ngcontent-%COMP%]{margin:1rem auto}.show-details[_ngcontent-%COMP%]   .show-details__photo[_ngcontent-%COMP%]{flex:1;margin:1rem auto 0;max-width:100%}.show-details[_ngcontent-%COMP%]   .show-details__summary[_ngcontent-%COMP%]{flex:2;padding:1rem}.show-details[_ngcontent-%COMP%]   .show-details__info[_ngcontent-%COMP%]{background-color:#f7f7f7;line-height:2;flex:1;padding:1rem}.show-details[_ngcontent-%COMP%]   .show-details__title[_ngcontent-%COMP%]{text-align:left}.show-details[_ngcontent-%COMP%]   .show-details__subtitle[_ngcontent-%COMP%]{padding-right:.5rem}a[_ngcontent-%COMP%]{color:#3c948b}a[_ngcontent-%COMP%]:hover{text-decoration:underline}a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:visited{color:darken #3c948b,20%}@media screen and (max-width:950px){.show-details__list[_ngcontent-%COMP%]{flex-direction:column}}@media screen and (max-width:630px){.show-details__description[_ngcontent-%COMP%]{flex-direction:column}}']}),t})(),A=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-episode-item"]],inputs:{episode:"episode"},decls:15,vars:8,consts:[[1,"episode-item"],[1,"episode-item__list"],[1,"episode-item__item"],[1,"episode-item__photo",3,"src","alt"],[1,"episode-item__name"],[1,"episode-item__schedule"],[1,"episode-item__date"],[1,"fa","fa-calendar-plus-o"],[1,"episode-item__time"],[1,"fa","fa-clock-o"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"div",2),s.Ob(3,"img",3),s.Sb(),s.Tb(4,"div",2),s.Tb(5,"div",4),s.wc(6),s.Sb(),s.Sb(),s.Sb(),s.Tb(7,"div",5),s.Tb(8,"div",6),s.Ob(9,"i",7),s.wc(10),s.ec(11,"date"),s.Sb(),s.Tb(12,"div",8),s.Ob(13,"i",9),s.wc(14),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Cb(3),s.jc("src",e.episode.image.medium,s.sc)("alt",e.episode.name),s.Cb(3),s.xc(e.episode.name),s.Cb(4),s.xc(s.gc(11,5,e.episode.airdate,"mediumDate")),s.Cb(4),s.xc(e.episode.airtime))},pipes:[o.e],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap")[_ngcontent-%COMP%];body[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-size:15px;overflow-x:hidden;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;color:#0a0a0a}.block[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:300}ul[_ngcontent-%COMP%]{padding:0;margin:0}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}input[_ngcontent-%COMP%]{outline:none}img[_ngcontent-%COMP%]{display:block;border:0;width:100%;height:auto}.button[_ngcontent-%COMP%]{text-transform:uppercase;display:flex;justify-content:center;text-align:center;cursor:pointer;transition:all .2s ease;font-weight:700;outline:none}.episode-item[_ngcontent-%COMP%]{width:100%;position:relative}.episode-item[_ngcontent-%COMP%]   .episode-item__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1}.episode-item[_ngcontent-%COMP%]   .episode-item__item[_ngcontent-%COMP%]{color:#fff}.episode-item[_ngcontent-%COMP%]   .episode-item__photo[_ngcontent-%COMP%]{max-width:100%}.episode-item[_ngcontent-%COMP%]   .episode-item__name[_ngcontent-%COMP%]{font-weight:700;padding:.5rem}.episode-item[_ngcontent-%COMP%]   .episode-item__name[_ngcontent-%COMP%]:hover{text-decoration:underline}.episode-item[_ngcontent-%COMP%]   .episode-item__schedule[_ngcontent-%COMP%]{position:absolute;top:0;right:0}.episode-item[_ngcontent-%COMP%]   .episode-item__date[_ngcontent-%COMP%]{background-color:#3c948b;padding:.2rem;font-size:.7rem;text-align:right;color:#fff}.episode-item[_ngcontent-%COMP%]   .episode-item__time[_ngcontent-%COMP%]{background-color:#fff;font-weight:700;padding:.2rem;font-size:.7rem;opacity:.6;border-bottom-left-radius:10px;text-align:center}.episode-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:.2rem}']}),t})();function q(t,e){if(1&t&&(s.Tb(0,"li",4),s.Ob(1,"app-episode-item",5),s.Sb()),2&t){const t=e.$implicit;s.Cb(1),s.jc("episode",t)}}function J(t,e){if(1&t&&(s.Tb(0,"div",1),s.Tb(1,"ul",2),s.uc(2,q,2,1,"li",3),s.Sb(),s.Sb()),2&t){const t=s.dc();s.Cb(2),s.jc("ngForOf",t.episodes)}}let K=(()=>{class t{constructor(t,e,n){this.route=t,this.showService=e,this.showDetailsService=n,this.show$=this.showDetailsService.show$}ngOnInit(){this.route.params.subscribe(t=>{console.log(t),this.showService.fetchShowEpisodes(2).subscribe(t=>{this.episodes=t})})}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(i.a),s.Nb(r),s.Nb($))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-episode-list"]],decls:2,vars:3,consts:[["class","episode-list",4,"ngIf"],[1,"episode-list"],[1,"episode-list__list"],["class","episode-list__item",4,"ngFor","ngForOf"],[1,"episode-list__item"],[3,"episode"]],template:function(t,e){1&t&&(s.uc(0,J,3,1,"div",0),s.ec(1,"async")),2&t&&s.jc("ngIf",s.fc(1,1,e.show$))},directives:[o.l,o.k,A],pipes:[o.b],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap")[_ngcontent-%COMP%];body[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-size:15px;overflow-x:hidden;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;color:#0a0a0a}.block[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:300}ul[_ngcontent-%COMP%]{padding:0;margin:0}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}input[_ngcontent-%COMP%]{outline:none}img[_ngcontent-%COMP%]{display:block;border:0;width:100%;height:auto}.button[_ngcontent-%COMP%]{text-transform:uppercase;display:flex;justify-content:center;text-align:center;cursor:pointer;transition:all .2s ease;font-weight:700;outline:none}.episode-list[_ngcontent-%COMP%]{width:100%}.episode-list[_ngcontent-%COMP%]   .episode-list__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;flex-basis:auto;margin:1rem}.episode-list[_ngcontent-%COMP%]   .episode-list__item[_ngcontent-%COMP%]{width:200px;min-height:100%;margin:1rem;background-color:#1f4b47;border:1px solid #ccc;border-bottom:3px solid #3c948b;box-shadow:0 1px 5px 0 rgba(0,0,0,.15)}']}),t})(),V=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-cast-item"]],inputs:{cast:"cast"},decls:9,vars:4,consts:[[1,"cast-item"],[1,"cast-item__list"],[1,"cast-item__item"],[1,"cast-item__photo",3,"src","alt"],[1,"cast-item__name"],[1,"cast-item__character"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"div",2),s.Ob(3,"img",3),s.Sb(),s.Tb(4,"div",2),s.Tb(5,"div",4),s.wc(6),s.Sb(),s.Tb(7,"div",5),s.wc(8),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Cb(3),s.jc("src",e.cast.person.image.medium,s.sc)("alt",e.cast.person.name),s.Cb(3),s.xc(e.cast.person.name),s.Cb(2),s.yc("as ",e.cast.character.name,""))},styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap")[_ngcontent-%COMP%];body[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-size:15px;overflow-x:hidden;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;color:#0a0a0a}.block[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:300}ul[_ngcontent-%COMP%]{padding:0;margin:0}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}input[_ngcontent-%COMP%]{outline:none}img[_ngcontent-%COMP%]{display:block;border:0;width:100%;height:auto}.button[_ngcontent-%COMP%]{text-transform:uppercase;display:flex;justify-content:center;text-align:center;cursor:pointer;transition:all .2s ease;font-weight:700;outline:none}.cast-item[_ngcontent-%COMP%]{width:100%;position:relative}.cast-item[_ngcontent-%COMP%]   .cast-item__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1}.cast-item[_ngcontent-%COMP%]   .cast-item__item[_ngcontent-%COMP%]{color:#fff}.cast-item[_ngcontent-%COMP%]   .cast-item__photo[_ngcontent-%COMP%]{max-width:100%}.cast-item[_ngcontent-%COMP%]   .cast-item__name[_ngcontent-%COMP%]{font-weight:700;padding:.5rem}.cast-item[_ngcontent-%COMP%]   .cast-item__character[_ngcontent-%COMP%]{font-style:italic;color:#71c5bd;padding:.5rem}']}),t})();function X(t,e){if(1&t&&(s.Tb(0,"li",4),s.Ob(1,"app-cast-item",5),s.Sb()),2&t){const t=e.$implicit;s.Cb(1),s.jc("cast",t)}}function B(t,e){if(1&t&&(s.Tb(0,"div",1),s.Tb(1,"ul",2),s.uc(2,X,2,1,"li",3),s.Sb(),s.Sb()),2&t){const t=s.dc();s.Cb(2),s.jc("ngForOf",t.casts)}}const G=[{path:"",pathMatch:"full",redirectTo:"shows"},{path:"shows",component:z},{path:"show/:id",component:F,children:[{path:"",pathMatch:"full",redirectTo:"main"},{path:"main",component:D},{path:"episodes",component:K},{path:"casts",component:(()=>{class t{constructor(t,e,n){this.route=t,this.showService=e,this.showDetailsService=n,this.show$=this.showDetailsService.show$}ngOnInit(){this.route.params.subscribe(t=>{console.log(t),this.showService.fetchShowCasts(2).subscribe(t=>{this.casts=t})})}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(i.a),s.Nb(r),s.Nb($))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-cast-list"]],decls:2,vars:3,consts:[["class","cast-list",4,"ngIf"],[1,"cast-list"],[1,"cast-list__list"],["class","cast-list__item",4,"ngFor","ngForOf"],[1,"cast-list__item"],[3,"cast"]],template:function(t,e){1&t&&(s.uc(0,B,3,1,"div",0),s.ec(1,"async")),2&t&&s.jc("ngIf",s.fc(1,1,e.show$))},directives:[o.l,o.k,V],pipes:[o.b],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap")[_ngcontent-%COMP%];body[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-size:15px;overflow-x:hidden;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;color:#0a0a0a}.block[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:300}ul[_ngcontent-%COMP%]{padding:0;margin:0}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}input[_ngcontent-%COMP%]{outline:none}img[_ngcontent-%COMP%]{display:block;border:0;width:100%;height:auto}.button[_ngcontent-%COMP%]{text-transform:uppercase;display:flex;justify-content:center;text-align:center;cursor:pointer;transition:all .2s ease;font-weight:700;outline:none}.cast-list[_ngcontent-%COMP%]{width:100%}.cast-list[_ngcontent-%COMP%]   .cast-list__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;flex-basis:auto;margin:1rem}.cast-list[_ngcontent-%COMP%]   .cast-list__item[_ngcontent-%COMP%]{width:200px;min-height:100%;margin:1rem;background-color:#1f4b47;border:1px solid #ccc;border-bottom:3px solid #3c948b;box-shadow:0 1px 5px 0 rgba(0,0,0,.15)}']}),t})()}]},{path:"**",component:H}];let Q=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[i.d.forChild(G)],i.d]}),t})();var U=n("pKmL"),W=n("PCNd"),Y=n("rsRi");let Z=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[o.c,h.h,h.e,R.b,Q,W.a,U.a,Y.a]]}),t})()}}]);