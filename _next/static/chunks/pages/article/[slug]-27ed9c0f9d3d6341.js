(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7894],{615:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[slug]",function(){return s(5034)}])},6062:function(e,t,s){"use strict";var n=s(9729),a=s.n(n);t.Z=a()({projectId:"4ke9thon",dataset:"production",apiVersion:"2022-05-09",useCdn:!0})},7222:function(e,t,s){"use strict";s.d(t,{Z:function(){return h}});var n=s(5893),a=s(1664),l=s.n(a),r=[{name:"Home",href:"/"},{name:"Posts",href:"/#posts"},{name:"Categories",href:"/#categories"}],i=function(){return(0,n.jsx)("nav",{className:"hidden sm:block",children:(0,n.jsx)("ul",{className:"space-x-8",children:r.map((function(e){return(0,n.jsx)(l(),{href:e.href,children:(0,n.jsx)("a",{className:"hover:underline",children:e.name})},e.name)}))})})},c=s(7294),o=s(9583),u=s(5434),d=function(){var e=(0,c.useState)(!1),t=e[0],s=e[1],a=function(){s((function(e){return!e}))};return(0,n.jsxs)("div",{className:"block sm:hidden opacity-90",children:[(0,n.jsx)(o.Fm7,{size:"2rem",onClick:a}),t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.FU5,{size:"3rem",onClick:a,className:"absolute top-2 right-2 close-btn"}),(0,n.jsx)("nav",{className:"absolute z-10 left-0 top-0 w-full h-screen text-3xl bg-neutral-800",children:(0,n.jsx)("ul",{className:" mt-16 flex flex-col justify-start items-center gap-8",children:r.map((function(e){return(0,n.jsx)(l(),{href:e.href,children:(0,n.jsx)("a",{className:"hover:underline",onClick:a,children:e.name})},e.name)}))})})]})]})},m=function(){return(0,n.jsxs)("header",{className:"py-3 flex items-center justify-around navbar sticky top-0 bg-neutral-900",children:[(0,n.jsx)(l(),{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)("p",{className:"text-3xl",children:"Bloggo"})})}),(0,n.jsx)(i,{}),(0,n.jsx)(d,{})]})},h=function(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m,{}),(0,n.jsx)("main",{className:"mt-6",children:e.children})]})}},4539:function(e,t,s){"use strict";var n=s(5893),a=s(1664),l=s.n(a),r=s(6699);t.Z=function(e){var t=e.posts;return(0,n.jsx)("div",{id:"articles-lineup",className:"w-full mx-auto flex flex-col gap-8",children:t.map((function(e){var t,s;return s=e._updatedAt?e._updatedAt.slice(0,10).split("-"):e._createdAt.slice(0,10).split("-"),(0,n.jsx)(l(),{href:"/article/".concat(e.slug),children:(0,n.jsxs)("a",{className:"border-2 hover:bg-neutral-700 hover:bg-opacity-50 transition-all duration-200 w-full flex flex-col sm:flex-row sm:items-center justify-between px-2 rounded-lg",target:"_blank",children:[(0,n.jsxs)("div",{className:"flex flex-col sm:max-w-[33%]",children:[(0,n.jsx)("h2",{children:e.title}),(0,n.jsx)("p",{className:"-mt-4 sm:mb-1 sm:mt-0",children:e.author})]}),(null===(t=e.categories)||void 0===t?void 0:t.length)>0&&(0,n.jsx)("div",{className:"sm:max-w-[33%] flex gap-4 not-italic flex-wrap",children:e.categories.map((function(e){return(0,n.jsxs)("div",{className:"bg-neutral-700 bg-opacity-60 px-2 rounded-lg",children:["#",e.title]},e.title)}))}),(0,n.jsxs)("pre",{className:"not-italic mt-4 sm:m-0 sm:max-w-[33%] font-sans",children:["Last updated on"," ",(0,n.jsxs)("p",{className:"italic m-0",children:[s[2]," ",r.e[s[1]-1]," ",s[0]]})]})]})},e._id)}))})}},6699:function(e,t,s){"use strict";s.d(t,{e:function(){return n}});var n=["January","February","March","April","May","June","July","August","September","October","November","December"]},4857:function(e,t,s){"use strict";var n=s(5893),a=s(3928),l=s(6062),r=s(6803),i=s.n(r),c=s(1548);var o={types:{image:function(e){var t,s=e.value;if(!(null===s||void 0===s||null===(t=s.asset)||void 0===t?void 0:t._ref))return null;var a,r=(0,c.pz)(s).height;return r>464&&(r=464),(0,n.jsx)("img",{src:(a=s,i()(l.Z).image(a)).height(r),loading:"lazy",alt:s.alt||" ",className:"mb-6 self-center"})},code:function(e){var t=e.value;return(null===t||void 0===t?void 0:t.code)?(0,n.jsx)("div",{className:"self-start w-full max-w-full mb-4",children:(0,n.jsx)(a.Z1,{text:t.code,language:t.language,theme:a.cL,codeBlock:!0})}):null}},marks:{link:function(e){var t=e.value,s=e.children,a=((null===t||void 0===t?void 0:t.href)||"").startsWith("http")&&(null===t||void 0===t?void 0:t.blank)?"_blank":void 0;return(0,n.jsx)("a",{href:null===t||void 0===t?void 0:t.href,target:a,rel:"_blank"===a&&"noreferrer",children:s})}}};t.Z=o},5034:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return p},default:function(){return g}});var n=s(5893),a=s(6699),l=s(6803),r=s.n(l),i=s(1548),c=s(4279),o=s(6062),u=s(4857),d=s(4539),m=s(1664),h=s.n(m),x=function(e){var t=e.post,s=t.title,l=t.related,m=t.mainImage,x=t.body,f=t.categories,j=t.author,p=t._createdAt,g=t._updatedAt,v=null,N=0;m&&(v=m.asset._ref,(N=(0,i.pz)(v).height)>720&&(N=720));var b,w=p.slice(0,10).split("-"),_="";return g&&(_=g.slice(0,10).split("-")),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("article",{className:"w-[95%] sm:w-[65%] mx-auto flex flex-col gap-2 justify-center items-start",children:[(0,n.jsx)("h1",{className:"m-0 capitalize",children:s}),(0,n.jsxs)("div",{className:"w-full flex flex-wrap items-center justify-between",children:[(0,n.jsx)(h(),{href:"/author/".concat(j._id),children:(0,n.jsx)("a",{className:"not-italic text-white",children:(0,n.jsx)("h4",{className:"m-0",children:j.name})})}),(0,n.jsxs)("p",{className:"date",children:[a.e[w[1]-1]," ",w[2],", ",w[0]]})]}),(null===f||void 0===f?void 0:f.length)>0&&f[0].title&&(0,n.jsxs)("div",{className:"flex flex-wrap justify-start items-center gap-2",children:[(0,n.jsx)("p",{className:"m-0",children:"Posted in: "}),f.map((function(e){return(0,n.jsx)(h(),{href:"/category/".concat(e.slug),children:(0,n.jsxs)("a",{className:"bg-neutral-700 bg-opacity-60 px-2 rounded-lg not-italic",target:"_blank",children:["#",e.title]})},e.title)}))]}),m&&(0,n.jsx)("img",{src:(b=v,r()(o.Z).image(b)).height(N),alt:"Main image",loading:"lazy",className:"self-center my-3"}),(0,n.jsx)(c.YI,{value:x,components:u.Z})]}),_&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("hr",{className:"mx-auto w-[95%] sm:w-[85%]"}),(0,n.jsxs)("p",{className:"text-center mt-3",children:["This article was last updated on ",a.e[_[1]-1]," ",_[2],", ",_[0],"."]})]}),(null===l||void 0===l?void 0:l.length)>0&&(0,n.jsxs)("section",{className:"mx-auto w-[95%] sm:w-[85%] mb-16",children:[(0,n.jsx)("hr",{}),(0,n.jsx)("h2",{id:"posts",className:"text-center mt-2",children:"Related Posts"}),(0,n.jsx)(d.Z,{posts:l})]})]})},f=s(7222),j=s(9008),p=!0,g=function(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(j.default,{children:[(0,n.jsxs)("title",{children:[e.post.title," | Bloggo"]}),(0,n.jsx)("meta",{name:"description",content:"Read article ".concat(e.post.title," on Bloggo")})]}),(0,n.jsx)(f.Z,{children:(0,n.jsx)(x,{post:e.post})})]})}}},function(e){e.O(0,[1228,5445,4949,5848,9774,2888,179],(function(){return t=615,e(e.s=t);var t}));var t=e.O();_N_E=t}]);