(this["webpackJsonpform-validation"]=this["webpackJsonpform-validation"]||[]).push([[0],{12:function(e,s,a){},14:function(e,s,a){"use strict";a.r(s);var r=a(1),t=a.n(r),n=a(7),c=a.n(n),i=(a(12),a(2)),o=a(3),l=a(5),m=function(e,s){var a=Object(r.useState)({username:"",email:"",password:"",password2:""}),t=Object(i.a)(a,2),n=t[0],c=t[1],m=Object(r.useState)({}),d=Object(i.a)(m,2),j=d[0],u=d[1],b=Object(r.useState)(!1),p=Object(i.a)(b,2),h=p[0],O=p[1];return Object(r.useEffect)((function(){0===Object.keys(j).length&&h&&e()}),[j]),{values:n,changeHandler:function(e){var s=e.target,a=s.name,r=s.value;c(Object(l.a)(Object(l.a)({},n),{},Object(o.a)({},a,r)))},submitHandler:function(e){e.preventDefault(),u(s(n)),O(!0)},errors:j}};function d(e){var s={};return e.username.trim()||(s.username="Username is required!"),e.email?/\S+@\S+\.\S+/.test(e.email)||(s.email="Email address is invalid"):s.email="Email is required!",e.password?e.password.length<6&&(s.password="Password needs to be 6 characters or more"):s.password="Password is required!",e.password2?e.password2!==e.password&&(s.password2="Passwords do not match"):s.password2="Password is required!",s}a(6);var j=a(0),u=function(e){var s=e.submitForm,a=m(s,d),r=a.values,t=a.changeHandler,n=a.submitHandler,c=a.errors;return Object(j.jsx)("div",{className:"form-content-right",children:Object(j.jsxs)("form",{className:"form",onSubmit:n,children:[Object(j.jsx)("h1",{children:"Get started with us today! Create your account by filling out he info below."}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsxs)("label",{htmlFor:"username",className:"form-label",children:["Username"," "]}),Object(j.jsx)("input",{type:"text",id:"username",name:"username",className:"form-input",placeholder:"Enter your username",value:r.username,onChange:t}),c.username&&Object(j.jsx)("p",{children:c.username})]}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsxs)("label",{htmlFor:"email",className:"form-label",children:["Email"," "]}),Object(j.jsx)("input",{type:"text",id:"email",name:"email",className:"form-input",placeholder:"Enter your email",value:r.email,onChange:t}),c.email&&Object(j.jsx)("p",{children:c.email})]}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsxs)("label",{htmlFor:"password",className:"form-label",children:["Password"," "]}),Object(j.jsx)("input",{type:"password",id:"password",name:"password",className:"form-input",placeholder:"Enter your password",value:r.password,onChange:t}),c.password&&Object(j.jsx)("p",{children:c.password})]}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsxs)("label",{htmlFor:"password2",className:"form-label",children:["Confirm Password"," "]}),Object(j.jsx)("input",{type:"password",id:"password2",name:"password2",className:"form-input",placeholder:"Enter your password",value:r.password2,onChange:t}),c.password2&&Object(j.jsx)("p",{children:c.password2})]}),Object(j.jsx)("button",{className:"form-input-btn",type:"submit",children:"Sign up"}),Object(j.jsxs)("span",{className:"form-input-login",children:["Already have an account? ",Object(j.jsx)("a",{href:"#",children:"Login here"})]})]})})},b=function(){return Object(j.jsxs)("div",{className:"form-content-right",children:[Object(j.jsx)("div",{className:"form-success",children:"We have received your request!"}),Object(j.jsx)("img",{src:"img/img-3.svg",className:"form-img-2",alt:"Success image"})]})},p=function(){var e=Object(r.useState)(!1),s=Object(i.a)(e,2),a=s[0],t=s[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("span",{className:"close-btn",children:"x"}),Object(j.jsx)("div",{className:"form-content-left",children:Object(j.jsx)("img",{src:"img/img-2.svg",alt:"Form image",className:"form-img"})}),a?Object(j.jsx)(b,{}):Object(j.jsx)(u,{submitForm:function(){t(!0)}})]})})};var h=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(p,{})})};c.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))},6:function(e,s,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.8b35f8ae.chunk.js.map