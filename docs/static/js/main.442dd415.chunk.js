(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,n){},17:function(e,a,n){},21:function(e,a,n){"use strict";n.r(a);var r=n(0),t=n.n(r),i=n(8),o=n.n(i),s=(n(15),n(2)),l=n(3),c=n(5),u=n(4),m=n(6),b=(n(17),n(1)),d=n.n(b),f=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,n=e.icon,r=e.members;return console.log("club",this.props.title),t.a.createElement("li",null,t.a.createElement("h1",null,a),t.a.createElement("i",{className:n}),t.a.createElement("ul",null,r.map(function(e,a){return t.a.createElement("li",{key:a},e)})))}}]),a}(r.Component);f.PropTypes={title:d.a.string.isRequired,icon:d.a.string.isRequired,members:d.a.arrayOf(d.a.string).isRequired};var h=f,y=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.items;return t.a.createElement("ul",null,e.map(function(e,a){var n=e.name,r=e.fa,i=e.members;return t.a.createElement(h,{key:a,title:n,icon:r,members:i})}))}}]),a}(r.Component),p=y;y.PropTypes={items:d.a.arrayOf(d.a.shape({name:d.a.string.isRequired,fa:d.a.string.isRequired,members:d.a.arrayOf(d.a.string).isRequired})).isRequired};var g=[{name:"Book club",fa:"fas fa-glasses",members:["Rosalie Bradley","Lula Day","Hallie Bryant","Antonio Martin","Polly Nelson"]},{name:"Chess club",fa:"fas fa-chess",members:["Francisco Alexander","Alice Garner","Michael Elliott","Tyler Sparks","Rose Munoz","Lena Rios","Abbie Perkins"]},{name:"Escape room club",fa:"fas fa-dungeon",members:["Della Frank","Nathan Briggs","Alexander Caldwell","John McCarthy","Theodore Lawson"]},{name:"Thief club",fa:"fas fa-mask",members:["Ina Becker","Jared Bryan","Eugenia Crawford","Mina Goodwin","Hester Rodriquez","Cameron Watts","Charles Daniel","Christine Barnes"]},{name:"Fight club",fa:"fas fa-fist-raised",members:["Bernice Marshall","Alvin McCormick","Aiden Edwards","Daniel Mendoza","Olive Poole"]},{name:"Magic club",fa:"fas fa-magic",members:["Harry Ruiz","Tom Dunn","Emily Gonzales","Evelyn Snyder","Evan Doyle","Stanley Mann","Tom Nash","Glenn Luna","Hattie McCoy","Erik Cobb","Ada Warren","Lucy Webb"]},{name:"Live long and prosper club",fa:"fas fa-hand-spock",members:["Shane Lambert","Willie Young","Jane Hunt","Martha Houston","Clyde Johnston","Jonathan Brooks","Emily Howard","Steven Peters","Helen Stewart","John Cox","Lillie Moore","Chris Walters","Sally Cunningham","Ada Klein","Fanny Kelly","Jane Norton","Bertha Francis","Jane Scott","Etta Klein","Bobby Rodriguez","Tyler Goodman","Peter Ferguson","Theresa Hudson","Lloyd Soto","Stanley Hardy","Bobby Stewart"]}],E=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return t.a.createElement("div",{className:"App"},t.a.createElement(p,{items:g}))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(t.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,n){e.exports=n(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.442dd415.chunk.js.map