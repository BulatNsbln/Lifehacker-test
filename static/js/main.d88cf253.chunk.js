(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,n,t){e.exports=t(78)},78:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(23),i=t.n(c),l=t(13),o=t(11),u=t(16),d=t(17),s=t(19),f=t(18),p=t(20),b=t(14),m=t(3),v=t(4);function h(){var e=Object(m.a)(["\n  display: inline-flex;\n"]);return h=function(){return e},e}function O(){var e=Object(m.a)(["  \n  display: inline-block;\n  margin: 15px auto;\n  :hover {\n    opacity: 0.6;\n  }\n  :active {\n    opacity: 0.4;\n  }\n"]);return O=function(){return e},e}function g(){var e=Object(m.a)(["\n  display: inline-block;\n  \n  margin: 0;\n  padding: 0;\n  margin-left: 20px;\n  padding-top: 30px;\n  \n  font-size: 24px;\n  color: black;\n"]);return g=function(){return e},e}function j(){var e=Object(m.a)(["\n  flex-shrink: 0;\n  \n  width: 130px; \n  height: 130px; \n  \n  background: url( "," ) center center;\n\n  border-radius: 50%; \n"]);return j=function(){return e},e}function y(){var e=Object(m.a)(["\n  margin: 0 auto;\n  padding: 0 15px;\n  width: 80%;\n  \n  background-color: #f5f5f5;\n  list-style: none;\n"]);return y=function(){return e},e}var E=v.b.ul(y()),k=v.b.img(j(),function(e){return e.link}),x=v.b.h1(g()),A=v.b.li(O()),w=v.b.div(h()),L=function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(E,null,this.body)}},{key:"body",get:function(){return this.props.articleList.map(function(e){var n=e.id;return a.a.createElement(A,{key:n},a.a.createElement(l.b,{to:"/articles/".concat(n)},a.a.createElement(w,null,a.a.createElement(k,{link:e.cat_cover.sizes.mobile}),a.a.createElement(x,null,e.title.rendered))))})}}]),n}(r.Component);var S=Object(o.b)(function(e){var n=[];return e.articles.articlesList&&(n=Object.values(e.articles.articlesList)),{articleList:n}})(L);function _(e){var n=e.title,t=e.content;return a.a.createElement(r.Fragment,null,a.a.createElement("h1",null," ",n," "),a.a.createElement("div",{dangerouslySetInnerHTML:t}))}function C(){var e=Object(m.a)(["\n  margin-top: 0;\n  padding-top: 0;\n  \n  background-color: #f44336;\n  \n  :hover{\n    svg {\n      fill: #f5f5f5;\n    }\n  }\n  \n  svg {\n    fill: #3e2723;\n    margin-left: 20px;\n  }\n"]);return C=function(){return e},e}var I=v.b.div(C()),M=function(){return a.a.createElement(I,null,a.a.createElement("svg",{width:"70",height:"70",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"})))};function T(){var e=Object(m.a)(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 0 15px;\n  \n  background-color: #f5f5f5;\n  img {\n    max-width: 80%;\n  }\n"]);return T=function(){return e},e}var R=v.b.div(T()),z=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(a)))).createMarkup=function(e){return{__html:e}},t}return Object(p.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this.props.article,n=e.title.rendered,t=this.createMarkup(e.content.rendered);return a.a.createElement(R,null,a.a.createElement(l.b,{to:"/"},a.a.createElement(M,null)),a.a.createElement(_,{title:n,content:t}))}}]),n}(r.Component),H=Object(o.b)(function(e,n){return{article:e.articles.articlesList[n.id]}},null)(z);function D(){var e=Object(m.a)(["\n  margin-top: 25%;\n  \n  text-align: center;\n"]);return D=function(){return e},e}var F=v.b.h1(D()),P=function(){return a.a.createElement(F,null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ...")},B="LOAD_ALL_ARTICLES";var J=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(c)))).getArticle=function(e){var n=e.match;return t.props.loaded?a.a.createElement(H,{id:n.params.id}):a.a.createElement(P,null)},t.getArticleList=function(){return t.props.loaded?a.a.createElement(S,null):a.a.createElement(P,null)},t}return Object(p.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(b.d,null,a.a.createElement(b.a,{from:"/",to:"/articles",exact:!0}),a.a.createElement(b.b,{exact:!0,path:"/articles",render:this.getArticleList}),a.a.createElement(b.b,{exact:!0,path:"/articles/:id",render:this.getArticle}))}},{key:"componentDidMount",value:function(){!this.props.loaded&&this.props.loadAllArticles()}}]),n}(r.Component);var U=Object(o.b)(function(e){return{loaded:e.articles.loaded||!1}},{loadAllArticles:function(){return{type:B,callAPI:"https://lifehacker.ru/api/wp/v2/posts"}}})(J);function W(){var e=Object(m.a)(["\n  \n  a {\n  text-decoration: none;\n  }\n  body {\n    font-family: 'Roboto';\n  }\n"]);return W=function(){return e},e}var q=Object(v.a)(W()),G=t(10),K=t(42),N=t(15),Q=t(44),V=t(43),X=t.n(V);function Y(e){var n={},t=!0,r=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(t=(c=i.next()).done);t=!0){var l=c.value;n[l.id]=l}}catch(o){r=!0,a=o}finally{try{t||null==i.return||i.return()}finally{if(r)throw a}}return n}var Z=Object(G.combineReducers)({articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.response;switch(t){case B+"_START":return Object(N.a)({},e,{loaded:!1});case B+"_SUCCESS":return Object(N.a)({},e,{articlesList:Y(r.data),loaded:!0});default:return e}}}),$=Object(K.composeWithDevTools)(Object(G.applyMiddleware)(function(e){return function(n){return function(t){var r=t.callAPI,a=t.type,c=Object(Q.a)(t,["callAPI","type"]);if(!r)return n(t);e.dispatch(Object(N.a)({type:a+"_START"},c)),X.a.get(r).then(function(n){e.dispatch(Object(N.a)({type:a+"_SUCCESS",response:n},c))}).catch(function(n){return e.dispatch(Object(N.a)({type:a+"_FAIL",error:n},c))})}}})),ee=Object(G.createStore)(Z,$);i.a.render(a.a.createElement(o.a,{store:ee},a.a.createElement(l.a,null,a.a.createElement(function(){return a.a.createElement(r.Fragment,null,a.a.createElement(q,null),a.a.createElement(U,null))},null))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d88cf253.chunk.js.map