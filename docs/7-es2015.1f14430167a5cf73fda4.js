(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"XC+n":function(n,l,u){"use strict";u.r(l);var t=u("8Y7J");class o{}var i=u("pMnS"),e=u("s7LF"),a=u("iInd"),r=u("SVse"),s=u("K9il");class b{constructor(n,l,u,t){this.fb=n,this.ngRedux=l,this.route=u,this.router=t}ngOnInit(){this.id=this.route.params.value&&this.route.params.value.id,this.id?(this.ngRedux.dispatch(Object(s.d)({id:this.id})),this.ngRedux.select("booksFound").subscribe(n=>{n?this.createForm(n[0]):(this.id=void 0,this.createForm())})):this.createForm()}createForm(n={}){this.booksForm=this.fb.group({name:[n.name||"",e.o.required],description:[n.description||""],count:[n.count||"",e.o.required],author:[n.author||"",e.o.required],id:[n.id||""]})}addBook(){const n=this.booksForm.getRawValue();this.id?this.ngRedux.dispatch(Object(s.c)(n)):(delete n.id,this.ngRedux.dispatch(Object(s.b)(n))),this.router.navigate(["books"])}}var c=u("5ozO"),d=t.nb({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{box-sizing:border-box}.container[_ngcontent-%COMP%]{padding:20px 0;max-width:500px;margin:50px auto;background:#e0e0e0;border-radius:5px}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:10px;border:none;border-radius:5px;margin:5px 0;font-size:16px;line-height:20px}input[_ngcontent-%COMP%]:hover{opacity:1}input[type=submit][_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;cursor:pointer}input[type=submit][_ngcontent-%COMP%]:disabled{background-color:grey;cursor:not-allowed}.col[_ngcontent-%COMP%]{padding:0 50px}@media screen and (max-width:650px){.container[_ngcontent-%COMP%]{margin:20px}.col[_ngcontent-%COMP%]{padding:0 20px}}"]],data:{}});function g(n){return t.Gb(0,[(n()(),t.pb(0,0,null,null,34,"div",[["class","container"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,33,"form",[["method","POST"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,u){var o=!0,i=n.component;return"submit"===l&&(o=!1!==t.zb(n,3).onSubmit(u)&&o),"reset"===l&&(o=!1!==t.zb(n,3).onReset()&&o),"ngSubmit"===l&&(o=!1!==i.addBook()&&o),o}),null,null)),t.ob(2,16384,null,0,e.s,[],null,null),t.ob(3,540672,null,0,e.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Cb(2048,null,e.b,null,[e.f]),t.ob(5,16384,null,0,e.k,[[4,e.b]],null,null),(n()(),t.pb(6,0,null,null,28,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.pb(7,0,null,null,27,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.pb(8,0,null,null,5,"input",[["formControlName","name"],["placeholder","Book Name *"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,u){var o=!0;return"input"===l&&(o=!1!==t.zb(n,9)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.zb(n,9).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.zb(n,9)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.zb(n,9)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(9,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.Cb(1024,null,e.h,(function(n){return[n]}),[e.c]),t.ob(11,671744,null,0,e.e,[[3,e.b],[8,null],[8,null],[6,e.h],[2,e.r]],{name:[0,"name"]},null),t.Cb(2048,null,e.i,null,[e.e]),t.ob(13,16384,null,0,e.j,[[4,e.i]],null,null),(n()(),t.pb(14,0,null,null,5,"input",[["formControlName","author"],["placeholder","Author Name *"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,u){var o=!0;return"input"===l&&(o=!1!==t.zb(n,15)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.zb(n,15).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.zb(n,15)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.zb(n,15)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(15,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.Cb(1024,null,e.h,(function(n){return[n]}),[e.c]),t.ob(17,671744,null,0,e.e,[[3,e.b],[8,null],[8,null],[6,e.h],[2,e.r]],{name:[0,"name"]},null),t.Cb(2048,null,e.i,null,[e.e]),t.ob(19,16384,null,0,e.j,[[4,e.i]],null,null),(n()(),t.pb(20,0,null,null,6,"input",[["formControlName","count"],["placeholder","Count *"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(n,l,u){var o=!0;return"input"===l&&(o=!1!==t.zb(n,21)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.zb(n,21).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.zb(n,21)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.zb(n,21)._compositionEnd(u.target.value)&&o),"change"===l&&(o=!1!==t.zb(n,22).onChange(u.target.value)&&o),"input"===l&&(o=!1!==t.zb(n,22).onChange(u.target.value)&&o),"blur"===l&&(o=!1!==t.zb(n,22).onTouched()&&o),o}),null,null)),t.ob(21,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.ob(22,16384,null,0,e.m,[t.B,t.k],null,null),t.Cb(1024,null,e.h,(function(n,l){return[n,l]}),[e.c,e.m]),t.ob(24,671744,null,0,e.e,[[3,e.b],[8,null],[8,null],[6,e.h],[2,e.r]],{name:[0,"name"]},null),t.Cb(2048,null,e.i,null,[e.e]),t.ob(26,16384,null,0,e.j,[[4,e.i]],null,null),(n()(),t.pb(27,0,null,null,6,"textarea",[["formControlName","description"],["placeholder","Description"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,u){var o=!0;return"input"===l&&(o=!1!==t.zb(n,28)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.zb(n,28).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.zb(n,28)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.zb(n,28)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(28,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.Cb(1024,null,e.h,(function(n){return[n]}),[e.c]),t.ob(30,671744,null,0,e.e,[[3,e.b],[8,null],[8,null],[6,e.h],[2,e.r]],{name:[0,"name"]},null),t.Cb(2048,null,e.i,null,[e.e]),t.ob(32,16384,null,0,e.j,[[4,e.i]],null,null),(n()(),t.Eb(-1,null,["          "])),(n()(),t.pb(34,0,null,null,0,"input",[["type","submit"],["value","Add"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t.pb(35,0,null,null,11,"div",[["class","container"]],null,null,null,null,null)),(n()(),t.pb(36,0,null,null,10,"div",[["class","actions"]],null,null,null,null,null)),(n()(),t.pb(37,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.zb(n,38).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o}),null,null)),t.ob(38,671744,null,0,a.l,[a.k,a.a,r.h],{routerLink:[0,"routerLink"]},null),t.Ab(39,1),(n()(),t.pb(40,0,null,null,1,"button",[["class","btn"]],null,null,null,null,null)),(n()(),t.Eb(-1,null,["View Books"])),(n()(),t.pb(42,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.zb(n,43).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o}),null,null)),t.ob(43,671744,null,0,a.l,[a.k,a.a,r.h],{routerLink:[0,"routerLink"]},null),t.Ab(44,1),(n()(),t.pb(45,0,null,null,1,"button",[["class","btn"]],null,null,null,null,null)),(n()(),t.Eb(-1,null,["Search for a Book"]))],(function(n,l){n(l,3,0,l.component.booksForm),n(l,11,0,"name"),n(l,17,0,"author"),n(l,24,0,"count"),n(l,30,0,"description");var u=n(l,39,0,"/books");n(l,38,0,u);var t=n(l,44,0,"/search");n(l,43,0,t)}),(function(n,l){var u=l.component;n(l,1,0,t.zb(l,5).ngClassUntouched,t.zb(l,5).ngClassTouched,t.zb(l,5).ngClassPristine,t.zb(l,5).ngClassDirty,t.zb(l,5).ngClassValid,t.zb(l,5).ngClassInvalid,t.zb(l,5).ngClassPending),n(l,8,0,t.zb(l,13).ngClassUntouched,t.zb(l,13).ngClassTouched,t.zb(l,13).ngClassPristine,t.zb(l,13).ngClassDirty,t.zb(l,13).ngClassValid,t.zb(l,13).ngClassInvalid,t.zb(l,13).ngClassPending),n(l,14,0,t.zb(l,19).ngClassUntouched,t.zb(l,19).ngClassTouched,t.zb(l,19).ngClassPristine,t.zb(l,19).ngClassDirty,t.zb(l,19).ngClassValid,t.zb(l,19).ngClassInvalid,t.zb(l,19).ngClassPending),n(l,20,0,t.zb(l,26).ngClassUntouched,t.zb(l,26).ngClassTouched,t.zb(l,26).ngClassPristine,t.zb(l,26).ngClassDirty,t.zb(l,26).ngClassValid,t.zb(l,26).ngClassInvalid,t.zb(l,26).ngClassPending),n(l,27,0,t.zb(l,32).ngClassUntouched,t.zb(l,32).ngClassTouched,t.zb(l,32).ngClassPristine,t.zb(l,32).ngClassDirty,t.zb(l,32).ngClassValid,t.zb(l,32).ngClassInvalid,t.zb(l,32).ngClassPending),n(l,34,0,u.booksForm.invalid),n(l,37,0,t.zb(l,38).target,t.zb(l,38).href),n(l,42,0,t.zb(l,43).target,t.zb(l,43).href)}))}function p(n){return t.Gb(0,[(n()(),t.pb(0,0,null,null,1,"app-add",[],null,null,null,g,d)),t.ob(1,114688,null,0,b,[e.d,c.b,a.a,a.k],null,null)],(function(n,l){n(l,1,0)}),null)}var h=t.lb("app-add",b,p,{},{},[]);class m{}u.d(l,"AddModuleNgFactory",(function(){return z}));var z=t.mb(o,[],(function(n){return t.xb([t.yb(512,t.j,t.X,[[8,[i.a,h]],[3,t.j],t.v]),t.yb(4608,r.l,r.k,[t.s,[2,r.r]]),t.yb(4608,e.d,e.d,[]),t.yb(4608,e.q,e.q,[]),t.yb(1073742336,r.c,r.c,[]),t.yb(1073742336,a.m,a.m,[[2,a.r],[2,a.k]]),t.yb(1073742336,m,m,[]),t.yb(1073742336,e.p,e.p,[]),t.yb(1073742336,e.n,e.n,[]),t.yb(1073742336,o,o,[]),t.yb(1024,a.i,(function(){return[[{path:":id",component:b},{path:"",component:b}]]}),[])])}))}}]);