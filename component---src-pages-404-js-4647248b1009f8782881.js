(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(155),o=a(153);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(150);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Ariel Ahdoot"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},153:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(158),s=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=n.data.site,l=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=u},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Ariel Ahdoot",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},155:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(149),s=(a(156),function(e){var t=e.siteTitle,a=Object(r.useState)(!1),n=a[0],o=a[1];return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",justifyContent:"space-between",alignItems:"center"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("div",{className:"div-links"}," ",i.a.createElement(l.a,{to:"/",style:{marginLeft:0},className:"link",activeStyle:{color:"red"}},"Home"),i.a.createElement(l.a,{to:"/about-me",className:"link",activeStyle:{color:"red"}},"About Me"),i.a.createElement(l.a,{to:"/projects",className:"link",activeStyle:{color:"red"}},"Projects"),i.a.createElement(l.a,{to:"/experience",className:"link",activeStyle:{color:"red"}},"Experience"),i.a.createElement("a",{href:"Ariel.Ahdoot.pdf",target:"_blank",className:"link"},"Resume")),i.a.createElement("div",{className:"dropdown"},i.a.createElement("button",{className:"dropbtn",onClick:function(){return o(!n)}},i.a.createElement("div",{className:"navbar-button"}),i.a.createElement("div",{className:"navbar-button"}),i.a.createElement("div",{className:"navbar-button"})),n&&i.a.createElement("div",{className:"dropdown-content",id:"dropdown"},i.a.createElement(l.a,{to:"/"},"Home"),i.a.createElement(l.a,{to:"/about-me"},"About Me"),i.a.createElement(l.a,{to:"/projects"},"Projects"),i.a.createElement(l.a,{to:"/experience"},"Experience"),i.a.createElement("a",{href:"Ariel.Ahdoot.pdf",target:"_blank"},"Resume")))," "))});s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var u=s,d=(a(157),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});d.propTypes={children:c.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-404-js-4647248b1009f8782881.js.map