(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{QMUA:function(t,e,n){"use strict";n.r(e);var s=n("jx1L"),i=n("L2JU");function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o={methods:a({},Object(i.mapActions)("clients",["clearForm"])),computed:a({},Object(i.mapState)({clients:function(t){return t.clients},currentClient:function(t){return t.clients.data.rows?t.clients.data.rows[0]:null}}))},l=n("CtO9"),c={name:"clients",uri:"clients/{environment.session.current_client.id}/settings",performLoad:!1},m={props:["mode"],mixins:[s.a,o,l.a],data:function(){return{service:c}},methods:{changeText:function(t){this.$store.commit("clients/mutateSetFormField",{field:"signature",value:t,object:"settings"})}},mounted:function(){var t=this;this.load().then(function(){setTimeout(function(){t.$store.state.clients.data.rows&&t.select(t.$store.state.clients.data.rows[0])},1500)})}},u=n("KHd+"),f=Object(u.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"py-2 text-center"},[n("h2",[t._v("\n            "+t._s("create"===this.mode?"Nova":"Editar")+" Configurações\n        ")]),t._v(" "),n("h2",[t._v(" "+t._s(t.form.fields.name?t.form.fields.name:""))])]),t._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-8"},[n("form",[n("div",{staticClass:"row"},[t.currentClient?n("div",{staticClass:"col-12 mb-3"},[n("app-input",{attrs:{name:"mail_from_name",label:"Remetente dos e-mails (nome)",required:!0,inline:"true",form:t.form},model:{value:t.form.fields.settings.mail_from_name,callback:function(e){t.$set(t.form.fields.settings,"mail_from_name",e)},expression:"form.fields.settings.mail_from_name"}}),t._v(" "),n("app-input",{attrs:{name:"mail_from_name",label:"Remetente dos e-mails (e-mail)",required:!0,inline:"true",form:t.form},model:{value:t.form.fields.settings.mail_from_email,callback:function(e){t.$set(t.form.fields.settings,"mail_from_email",e)},expression:"form.fields.settings.mail_from_email"}}),t._v(" "),n("app-markdown-text-area",{attrs:{form:t.form,label:"Assinatura para os e-mails",id:"signature",value:t.currentClient.settings.signature},on:{input:function(e){return t.changeText(e)}}})],1):t._e()]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-right mb-3"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit",disabled:t.cannot("events:modify")},on:{click:function(e){return e.preventDefault(),t.saveModel()}}},[t._v("\n                            gravar\n                        ")]),t._v(" "),n("router-link",{staticClass:"btn btn-success",attrs:{to:"/dashboard",tag:"button"}},[t._v("\n                            cancelar\n                        ")])],1)])])])])])},[],!1,null,null,null);e.default=f.exports}}]);