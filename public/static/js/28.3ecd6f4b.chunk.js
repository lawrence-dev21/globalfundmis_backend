(this["webpackJsonpgfmis-react"]=this["webpackJsonpgfmis-react"]||[]).push([[28],{1417:function(e,a,t){"use strict";t.r(a);var r=t(8),s=t(1395),i=t(501),n=t(93),l=t(9),c=t(15),o=t(12),d=t(527),m=t(1394),j=t(729),u=t(1401),b=t(322),x=t(66),h=t(1),p=t(604),O=t(2),g=Object(o.a)(p.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),f=function(){var e=Object(h.useState)({date:new Date}),a=Object(c.a)(e,2),t=a[0],s=a[1];Object(h.useEffect)((function(){return p.ValidatorForm.addValidationRule("isPasswordMatch",(function(e){return e===t.password})),function(){return p.ValidatorForm.removeValidationRule("isPasswordMatch")}}),[t.password]);var i=function(e){e.persist(),s(Object(l.a)(Object(l.a)({},t),{},Object(r.a)({},e.target.name,e.target.value)))},n=t.cfirstName,o=t.clastName,f=t.pfirstName,v=t.plastName,w=t.physicaladdress,N=t.password,q=t.gender;return Object(O.jsx)("div",{children:Object(O.jsxs)(p.ValidatorForm,{onSubmit:function(e){},onError:function(){return null},children:[Object(O.jsxs)(d.a,{container:!0,spacing:6,children:[Object(O.jsxs)(d.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(O.jsx)(g,{type:"text",name:"firstName",label:"Child's First Name",onChange:i,value:n||"",validators:["required"],errorMessages:["this field is required"]}),Object(O.jsx)(g,{type:"text",name:"lastName",label:"Child's Last Name",onChange:i,value:o||"",validators:["required"],errorMessages:["this field is required"]}),Object(O.jsx)(g,{type:"text",name:"firstName",label:"Parent/Guardian\u2019s First Name",onChange:i,value:f||"",validators:["required"],errorMessages:["this field is required"]}),Object(O.jsx)(g,{type:"text",name:"lastName",label:"Parent/Guardian\u2019s Last Name",onChange:i,value:v||"",validators:["required"],errorMessages:["this field is required"]})]}),Object(O.jsxs)(d.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(O.jsx)(g,{type:"text",name:"lastName",label:"Physical Address",onChange:i,value:w||"",validators:["required"],errorMessages:["this field is required"]}),Object(O.jsx)(g,{name:"password",type:"password",label:"Password",value:N||"",onChange:i,validators:["required"],errorMessages:["this field is required"]}),Object(O.jsxs)(m.a,{row:!0,name:"gender",sx:{mb:2},value:q||"",onChange:i,children:[Object(O.jsx)(j.a,{value:"Male",label:"Male",labelPlacement:"end",control:Object(O.jsx)(u.a,{color:"primary"})}),Object(O.jsx)(j.a,{value:"Female",label:"Female",labelPlacement:"end",control:Object(O.jsx)(u.a,{color:"primary"})})]})]})]}),Object(O.jsx)(b.a,{color:"primary",variant:"contained",type:"submit",children:Object(O.jsx)(x.e,{sx:{textTransform:"capitalize"},children:"Submit"})})]})})},v=Object(i.a)("div")((function(e){var a,t=e.theme;return a={margin:"30px"},Object(r.a)(a,t.breakpoints.down("sm"),{margin:"16px"}),Object(r.a)(a,"& .breadcrumb",Object(r.a)({marginBottom:"30px"},t.breakpoints.down("sm"),{marginBottom:"16px"})),a}));a.default=function(){return Object(O.jsx)(v,{children:Object(O.jsx)(s.a,{spacing:3,children:Object(O.jsx)(n.g,{title:"Parental Consent Form",children:Object(O.jsx)(f,{})})})})}}}]);
//# sourceMappingURL=28.3ecd6f4b.chunk.js.map