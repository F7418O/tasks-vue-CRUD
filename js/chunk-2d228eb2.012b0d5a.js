(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228eb2"],{dadc:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"col-md-4 offset-md-4"},s=Object(r["e"])("h1",{class:"text-center"},"Task Detail",-1),c=Object(r["e"])("button",{class:"btn btn-primary mb-3"},"Update",-1);function o(e,t,n,o,u,i){return Object(r["p"])(),Object(r["d"])("div",a,[Object(r["e"])("form",{class:"card card-body",onSubmit:t[3]||(t[3]=Object(r["C"])((function(t){return e.handleUpdate()}),["prevent"]))},[s,Object(r["B"])(Object(r["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.task.title=t}),class:"form-control mb-3",autofocus:""},null,512),[[r["y"],e.task.title]]),Object(r["B"])(Object(r["e"])("textarea",{id:"",cols:"30","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.task.descriptions=t}),class:"form-control mb-3"},null,512),[[r["y"],e.task.descriptions]]),c,Object(r["e"])("button",{class:"btn btn-danger",onClick:t[2]||(t[2]=function(t){return e.handleDelete()})},"Delete")],32)])}var u=n("1da1"),i=(n("96cf"),n("7fbe")),d=Object(r["h"])({name:"TaskDetail",props:{},mounted:function(){"string"===typeof this.$route.params.id&&this.loadTask(this.$route.params.id)},methods:{loadTask:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i["a"].getTask(e);case 2:r=n.sent,console.log(r.data),t.task=r.data;case 5:case"end":return n.stop()}}),n)})))()},handleUpdate:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("string"!==typeof e.$route.params.id){t.next=4;break}return t.next=3,i["a"].updateTask(e.$route.params.id,e.task);case 3:e.$router.push("/");case 4:case"end":return t.stop()}}),t)})))()},handleDelete:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("string"!==typeof e.$route.params.id){t.next=3;break}return t.next=3,i["a"].deleteTask(e.$route.params.id);case 3:e.$router.push("/");case 4:case"end":return t.stop()}}),t)})))()}},data:function(){return{task:{}}}}),l=n("6b0d"),p=n.n(l);const b=p()(d,[["render",o]]);t["default"]=b}}]);
//# sourceMappingURL=chunk-2d228eb2.012b0d5a.js.map