(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},19:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=(t(19),t(2)),l=function(e){var n=e.persons,t=e.handleClick,u=Object(a.useState)(""),o=Object(c.a)(u,2),l=o[0],i=o[1],f=Object(a.useState)(""),s=Object(c.a)(f,2),m=s[0],d=s[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:l,number:m};if(n.some((function(e){return e.name===l}))){var r="".concat(l," is already added to phonebook, replace the old number with a new one?");if(!0!==window.confirm(r))return 0;console.log("in here at addPersons"),t(a),i(""),d("")}else t(a);return n}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:l,onChange:function(e){i(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:m,onChange:function(e){d(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},i=function(e){var n=e.persons,t=e.handleInput,u=Object(a.useState)(""),o=Object(c.a)(u,2),l=o[0],i=o[1];return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:l,onChange:function(e){i(e.target.value);var a=n.filter((function(n){return n.name===e.target.value})).map((function(e){return e.name}))[0];t({event:e,filteredName:a})}}))},f=function(e){var n=e.person,t=e.handlePersonDelete;return r.a.createElement("p",null,n.name," ",n.number," ",r.a.createElement((function(e){var n=e.onClick,t=e.text;return r.a.createElement("button",{onClick:n},t)}),{onClick:t,text:"delete"}))},s=t(3),m=t.n(s),d="/api/persons",h=function(){return m.a.get(d).then((function(e){return e.data}))},v=function(e){return m.a.post(d,e).then((function(e){return e.data}))},p=function(e,n){return m.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return m.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},E=function(e){var n=e.persons,t=e.handleRefresh;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(f,{key:e.name,person:e,handlePersonDelete:function(){return function(e){var a=n.find((function(n){return n.id===e})),r="Delete ".concat(a.name," ?");if(!window.confirm(r))return 0;b(e);var u=n.filter((function(n){return n.id!==e}));t(u)}(e.id)}})})))},g=(t(37),function(e){var n=e.message,t=e.showMessage;return null===n?null:r.a.createElement("div",{className:"error",hidden:t},n)}),j=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(!0),f=Object(c.a)(o,2),s=f[0],m=f[1],d=Object(a.useState)(""),b=Object(c.a)(d,2),j=b[0],O=b[1],w=Object(a.useState)(""),k=Object(c.a)(w,2),S=k[0],C=k[1],y=Object(a.useState)(!0),x=Object(c.a)(y,2),D=x[0],I=x[1];Object(a.useEffect)((function(){h().then((function(e){u(e)}))}),[]);var N=function(e){u(e)};return r.a.createElement("div",{style:{marginLeft:"10px"}},r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:S,showMessage:D}),r.a.createElement(i,{persons:t,handleInput:function(e){var n=e.event,a=e.filteredName;if(n.target.value===a){if(""===n.target.value)return m(s);var r=t.filter((function(e){return e.name===a?(m(!s),e):null}));return O(r),s?t:r}m(!0)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(l,{persons:t,handleClick:function(e){console.log("_pushToArr value: ",e);var n=t.find((function(n){return n.name===e.name?n:0}));if(void 0===n)v(e).then((function(n){u(t.concat(n)),I(!1),C("Added ".concat(e.name)),setTimeout((function(){C(null)}),5e3)}));else{var a=t.find((function(n){return n.name===e.name}));console.log(a),p(n.id,e).then((function(n){console.log(n),u(t.map((function(t){return t.name!==e.name?t:n}))),I(!1),C("Added ".concat(e.number)),setTimeout((function(){C(null)}),5e3)})).catch((function(a){alert("Information of ".concat(e.name," has already been removed from server")),u(t.filter((function(e){return e.id!==n.id})))}))}}}),r.a.createElement("h3",null,"Numbers"),s?r.a.createElement(E,{persons:t,handleRefresh:N}):r.a.createElement(E,{persons:j,handleRefresh:N}))};o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.02e2e527.chunk.js.map