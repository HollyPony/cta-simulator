(this["webpackJsonpcta-simulator"]=this["webpackJsonpcta-simulator"]||[]).push([[0],{33:function(e,t,a){},41:function(e,t,a){e.exports=a(61)},46:function(e,t,a){},47:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(24),l=a.n(c),i=(a(46),a(47),a(13)),o=a(14),m=a(16),u=a(15),s=a(17),p=(a(33),a(25));function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=(0,r.a.createContext)(null),y=(h.Consumer,function(e){var t=e.children,a=e.props,n=void 0===a?{}:a;return r.a.createElement(h.Provider,{value:E({getCharacters:v},n)},t)}),f=function(e){return function(t){return r.a.createElement(h.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({CharactersService:a},t))}))}},b={LIGHT:1,EARTH:2,SHADOW:4,FIRE:8,WATER:16},v=function(){return[{id:1,name:"Alda",type:b.LIGHT},{id:2,name:"Angelica",type:b.EARTH},{id:3,name:"Arcana",type:b.SHADOW},{id:4,name:"Atlantus",type:b.FIRE},{id:5,name:"Bat",type:b.WATER},{id:6,name:"Big Eye",type:b.LIGHT},{id:7,name:"Black Beard",type:b.LIGHT},{id:8,name:"Blue Fish",type:b.LIGHT},{id:9,name:"Bugonaut Archer",type:b.LIGHT},{id:10,name:"Bugonaut Fighter",type:b.LIGHT},{id:11,name:"Bugonaut Giant",type:b.LIGHT},{id:12,name:"Bugonaut Spear",type:b.LIGHT},{id:13,name:"Chaos",type:b.LIGHT},{id:14,name:"Dark Hunter",type:b.LIGHT},{id:15,name:"Dark Knight",type:b.LIGHT},{id:16,name:"Dark Wolf",type:b.LIGHT},{id:17,name:"Fire Monk",type:b.LIGHT},{id:18,name:"Furiosa",type:b.LIGHT},{id:19,name:"Gladiator",type:b.LIGHT},{id:20,name:"Goddess",type:b.LIGHT},{id:21,name:"Gold Knight",type:b.LIGHT},{id:22,name:"Green Faery",type:b.LIGHT},{id:23,name:"Groovine",type:b.LIGHT},{id:24,name:"Hikari",type:b.LIGHT},{id:25,name:"Ice Cube",type:b.LIGHT}]},O=a(26),g=a(62),T=a(63),j=a(64),H=a(65),C=a(66),G=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),a=t[0],c=t[1];return r.a.createElement("header",null,r.a.createElement(g.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(T.a,{href:"/"},"CTA-Simulator"),r.a.createElement(j.a,{onClick:function(){return c(!a)}}),r.a.createElement(H.a,{isOpen:a,navbar:!0},r.a.createElement(C.a,{className:"mr-auto",navbar:!0}))))},I=a(22),k=a(74),L=a(75),w=a(76),A=a(77),S=a(73),N=a(67),x=a(68),D=a(69),R=a(70),B=a(39),W=(a(57),a(58),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.character,a=e.className,n=t.type?t.type&b.LIGHT?"light":t.type&b.EARTH?"earth":t.type&b.SHADOW?"shadow":t.type&b.FIRE?"fire":t.type&b.WATER?"water":"undefined":"empty";return console.log(t.type,b),r.a.createElement("div",{key:t,className:["Character",n,a].join(" ")},t.id?r.a.createElement("div",null,t.id):r.a.createElement("div",null,"\u271a"))}}]),t}(r.a.Component)),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={displayedTeam:[]},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({displayedTeam:t.locations})}},{key:"componentDidUpdate",value:function(e){var a=this.props.team;a!==e.team&&this.setState({displayedTeam:[].concat(Object(I.a)(a),Object(I.a)(t.locations.slice(a.length)))})}},{key:"render",value:function(){var e=this.state.displayedTeam;return r.a.createElement(N.a,{tag:"section"},r.a.createElement(x.a,{tag:"h4"},"Equipe"),r.a.createElement(D.a,null,r.a.createElement("div",{className:"Characters"},e.map((function(e){return r.a.createElement(W,{key:e.id,character:e,className:"w-25 px-1"})})))),r.a.createElement(R.a,{className:"d-flex"},r.a.createElement(B.a,{type:"button",className:"ml-auto",onClick:this.clear},"Nettoyer")))}}]),t}(r.a.Component);F.locations=[{},{},{},{},{},{},{},{},{},{}];var P=f(F),M=a(71),J=a(72),K=function(e){var t=e.type;return r.a.createElement(r.a.Fragment,null,t?t&b.LIGHT?"light":t&b.EARTH?"earth":t&b.SHADOW?"shadow":t&b.FIRE?"fire":t&b.WATER?"water":"undefined":"empty")},U=function(e){var t=e.characters,a=e.onCharacterSelect,c=void 0===a?function(){}:a,l=Object(n.useState)(!1),i=Object(O.a)(l,2),o=i[0],m=i[1];return r.a.createElement(N.a,{tag:"section"},r.a.createElement(x.a,{tag:"h4"},"Personnages"),r.a.createElement(D.a,{className:"p-0"},r.a.createElement(M.a,{striped:!0,borderless:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"}),r.a.createElement("th",{scope:"col"}),r.a.createElement("th",{scope:"col"},r.a.createElement(J.a,{isOpen:o,toggle:function(){return m(!o)}},r.a.createElement(w.a,{caret:!0},"filtre types"),r.a.createElement(A.a,null,r.a.createElement(S.a,null,"eau"),r.a.createElement(S.a,null,"terre"),r.a.createElement(S.a,null,"feu"),r.a.createElement(S.a,null,"lumiere"),r.a.createElement(S.a,null,"tenebre")))),r.a.createElement("th",{scope:"col"},r.a.createElement(J.a,{isOpen:o,toggle:function(){return m(!o)}},r.a.createElement(w.a,{caret:!0},"filtre metier"),r.a.createElement(A.a,null,r.a.createElement(S.a,null,"bagarreur"),r.a.createElement(S.a,null,"barbare"),r.a.createElement(S.a,null,"chevalier"),r.a.createElement(S.a,null,"voleur"),r.a.createElement(S.a,null,"lancier"),r.a.createElement(S.a,null,"samurai"),r.a.createElement(S.a,null,"archer"),r.a.createElement(S.a,null,"margicien"),r.a.createElement(S.a,null,"tireur"),r.a.createElement(S.a,null,"support")))))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(B.a,{type:"button",color:"primary",onClick:function(){return c(e)}},"Ajouter")),r.a.createElement("th",{scope:"row",className:"align-middle text-nowrap"},e.name),r.a.createElement("td",{className:"align-middle"},r.a.createElement(K,{type:e.type})),r.a.createElement("td",{className:"align-middle"},r.a.createElement(K,{type:e.type})))}))))))},q=f(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1,selectedTeam:[],availableCharacters:[]},a.onCharacterSelect=function(e){a.setState((function(t){return{selectedTeam:[].concat(Object(I.a)(t.selectedTeam),[e])}}))},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.CharactersService;this.setState({availableCharacters:e.getCharacters()})}},{key:"componentDidUpdate",value:function(e,t){var a=this.props.CharactersService,n=this.state.selectedTeam;n!==t.selectedTeam&&this.setState({availableCharacters:a.getCharacters().filter((function(e){return n.find((function(t){return t.id!==e.id}))}))})}},{key:"render",value:function(){var e=this,t=this.state,a=t.isOpen,n=t.selectedTeam,c=t.availableCharacters;return r.a.createElement(k.a,{tag:"main"},r.a.createElement(g.a,{color:"",light:!0,expand:"xs"},r.a.createElement(j.a,{onClick:function(){return e.setState({isOpen:!a})}}),r.a.createElement(H.a,{isOpen:a,navbar:!0},r.a.createElement(C.a,{className:"mr-auto",navbar:!0},r.a.createElement(L.a,{nav:!0,inNavbar:!0},r.a.createElement(w.a,{nav:!0,caret:!0},"Options"),r.a.createElement(A.a,{right:!0},r.a.createElement(S.a,null,"Option 1"),r.a.createElement(S.a,null,"Option 2"),r.a.createElement(S.a,{divider:!0}),r.a.createElement(S.a,null,"Reset")))))),r.a.createElement("div",{className:"d-flex mb-4"},r.a.createElement(P,{team:n}),r.a.createElement(N.a,{tag:"section",className:"flex-fill ml-3"},r.a.createElement(x.a,{tag:"h4"},"Result"),r.a.createElement(D.a,null,"Att: xxx Def: xxx"))),r.a.createElement(U,{characters:c,onCharacterSelect:this.onCharacterSelect}))}}]),t}(r.a.Component)),$=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(y,null,r.a.createElement("div",{className:"App pb-4"},r.a.createElement(G,null),r.a.createElement(q,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.218e146f.chunk.js.map