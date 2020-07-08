(this.webpackJsonpjoblist=this.webpackJsonpjoblist||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),r=a.n(l),i=(a(13),function(){return o.a.createElement("div",{className:"header"},o.a.createElement("img",{src:"https://braianlopez10.github.io/JobList/images/bg-header-mobile.svg",alt:"background-header"}))}),c=(a(14),a(15),a(4)),s=a(5),u=a(3),m=o.a.createContext();function d(e){var t=o.a.useState(u),a=Object(s.a)(t,2),n=a[0],l=a[1],r=o.a.useState([]),i=Object(s.a)(r,2),d=i[0],g=i[1],p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(c.a)(u);e.forEach((function(e){t=t.filter((function(t){return t.languages.includes(e)||t.role===e||t.tools.includes(e)||t.level===e}))})),l(t)},f={data:n,filterData:function(e){if(!d.includes(e)&&d.length<=6){g([].concat(Object(c.a)(d),[e]));var t=n.filter((function(t){return t.languages.includes(e)||t.role===e||t.tools.includes(e)||t.level===e}));l(t)}},filters:d,removeFilter:function(e){var t=d.filter((function(t){return t!==e}));g(t),p(t)},clear:function(){g([]),p([])}};return o.a.createElement(m.Provider,Object.assign({value:f},e))}var g=function(){return o.a.useContext(m)},p=function(e){var t=e.text,a=g().filterData;return o.a.createElement("div",{className:"tag",onClick:function(){a(t)}},t)},f=function(e){var t=e.job;return o.a.createElement("div",{className:"wrap-job",style:t.featured?{borderLeft:"5px solid hsl(180, 29%, 50%)"}:{}},o.a.createElement("div",{className:"job"},o.a.createElement("div",{className:"image"},o.a.createElement("img",{src:t.logo,alt:"icon-company"})),o.a.createElement("div",{className:"header-job"},o.a.createElement("div",{className:"company"},o.a.createElement("h4",null,t.company)),o.a.createElement("div",{className:"features"},t.new&&o.a.createElement("div",{className:"new"},o.a.createElement("h5",null,"New!")),t.featured&&o.a.createElement("div",{className:"featured"},o.a.createElement("h5",null,"Featured")))),o.a.createElement("div",{className:"position"},t.position),o.a.createElement("div",{className:"info"},o.a.createElement("span",null,t.postedAt),o.a.createElement("span",null,"* ",t.contract),o.a.createElement("span",null,"* ",t.location)),o.a.createElement("hr",null)),o.a.createElement("div",{className:"tag-container"},o.a.createElement(p,{key:t.role,text:t.role}),o.a.createElement(p,{key:t.level,text:t.level}),t.languages.map((function(e,t){return o.a.createElement(p,{key:t,text:e})}))))},v=(a(16),function(e){var t=g().data;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container-jobs"},t.map((function(e,t){return o.a.createElement(f,{job:e,key:t})}))))}),E=(a(17),function(){var e=g(),t=e.filters;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"wrap-filter"},t.map((function(e,t){return o.a.createElement(h,{text:e,key:t})})),t.length>0&&o.a.createElement(y,{jobContext:e})))}),y=function(e){var t=e.jobContext;return o.a.createElement("div",{onClick:function(){t.clear()},style:{position:"absolute",right:"5px",color:"hsl(180, 29%, 50%)",cursor:"pointer"}},"Clear")},h=function(e){var t=e.text,a=g();return o.a.createElement("div",{className:"tag-filter"},o.a.createElement("div",{className:"text"},t),o.a.createElement("div",{className:"button",onClick:function(){a.removeFilter(t)}},o.a.createElement("span",null,"X")))},S=(a(18),a(19),function(){return o.a.createElement("div",{className:"app"},o.a.createElement(i,null),o.a.createElement(d,null,o.a.createElement(E,null),o.a.createElement(v,null)))});r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.7398cbca.chunk.js.map