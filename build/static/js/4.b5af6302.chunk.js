(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[4,8],{150:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);n(0),n(89);var o=n(1);t.default=function(e){var t=e.title;return Object(o.jsx)("div",{className:"header",children:t})}},92:function(e,t,n){"use strict";n.r(t);var o=n(10),i=n(0),c=n(149),r=n(137),d=n(62),a=n.n(d),l=n(19),s=n(24),u=n(87),h=n(29),j=(n(150),n(1));t.default=function(e){var t=Object(i.useContext)(l.a),n=e.header,d=Object(i.useState)(null),v=Object(o.a)(d,2),b=v[0],w=v[1],f=Object(i.useState)("50vw"),O=Object(o.a)(f,2),m=O[0],p=O[1],C=Object(i.useState)("VERTICAL_ALTERNATING"),x=Object(o.a)(C,2),T=x[0],W=x[1];return Object(i.useEffect)((function(){var e,t,n,o,i,c;fetch(s.a.education,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return w(e)})).catch((function(e){return e})),(null===(e=window)||void 0===e?void 0:e.innerWidth)<576&&W("VERTICAL"),(null===(t=window)||void 0===t?void 0:t.innerWidth)<576||(null===(n=window)||void 0===n?void 0:n.innerWidth)>=576&&(null===(o=window)||void 0===o?void 0:o.innerWidth)<768?p("90vw"):(null===(i=window)||void 0===i?void 0:i.innerWidth)>=768&&(null===(c=window)||void 0===c?void 0:c.innerWidth)<1024?p("75vw"):p("50vw")}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.default,{title:n}),b?Object(j.jsx)(a.a,{children:Object(j.jsx)("div",{style:{width:m},className:"section-content-container",children:Object(j.jsx)(r.a,{children:Object(j.jsx)(c.a,{hideControls:!0,allowDynamicUpdate:!0,useReadMore:!1,items:b.education,cardHeight:250,mode:T,theme:{primary:t.accentColor,secondary:t.accentColor,cardBgColor:t.chronoTheme.cardBgColor,cardForeColor:t.chronoTheme.cardForeColor,titleColor:t.chronoTheme.titleColor},children:Object(j.jsx)("div",{className:"chrono-icons",children:b.education.map((function(e){return e.icon?Object(j.jsx)("img",{src:e.icon.src,alt:e.icon.alt},e.icon.src):null}))})})})})}):Object(j.jsx)(h.default,{})]})}}}]);
//# sourceMappingURL=4.b5af6302.chunk.js.map