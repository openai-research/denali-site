_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"6NQI":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t("nKUr");function a(e){return Object(i.jsxs)("div",{className:"row m-t-40",children:[Object(i.jsxs)("div",{className:"pinciple-".concat(e.firstType," xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-2 xl-col-1-2"),children:[Object(i.jsx)("img",{className:"has-bg-grey-300 br-md overflow-hidden m-b-20",style:{objectFit:"contain",height:"380px",width:"100%"},src:e.firstImage,loading:"lazy",decoding:"async"}),Object(i.jsx)("p",{children:e.firstCaption})]}),Object(i.jsxs)("div",{className:"pinciple-".concat(e.secondType," xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-2 xl-col-1-2"),children:[Object(i.jsx)("img",{className:"has-bg-grey-300 br-md overflow-hidden m-b-20",style:{objectFit:"contain",height:"380px",width:"100%"},src:e.secondImage,loading:"lazy",decoding:"async"}),Object(i.jsx)("p",{children:e.secondCaption})]})]})}},DPRA:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return b})),t.d(n,"default",(function(){return g}));var i=t("rePB"),a=t("Ff2n"),s=(t("q1tI"),t("7ljp")),o=t("i4SC"),r=t("hR9u"),c=t("I6DW"),l=t("6NQI"),d=t("KXDj");function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){Object(i.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b={title:"Sidebar"},u={meta:b},m=function(e){var n=e.children;return Object(s.a)(o.a,{sidebar:"components",meta:b},n)};function g(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.a)(m,p(p(p({},u),t),{},{components:n,mdxType:"MDXLayout"}),Object(s.a)("h1",null,"Sidebar"),Object(s.a)("p",null,"Sidebars are a form of secondary navigation. They provide access to content within a primary page. "),Object(s.a)("h2",null,"Developer Docs"),Object(s.a)("div",{className:"row"},Object(s.a)(r.a,{name:"CSS",icon:"css",caption:"Avaiable Now",link:"https://denali-design.github.io/denali-css/?path=/story/components-sidebar--default",mdxType:"ResourceCard"}),Object(s.a)(r.a,{name:"Ember",icon:"ember",caption:"Avaiable Now",link:"https://denali-design.github.io/denali-ember/?path=/story/denalisidebar--default",mdxType:"ResourceCard"}),Object(s.a)(r.a,{name:"React",icon:"react",caption:"Avaiable Now",link:"https://denali-design.github.io/denali-react/?path=/story/components-dnsidebar--playground",mdxType:"ResourceCard"})),Object(s.a)("hr",null),Object(s.a)("h2",null,"Foundation"),Object(s.a)("p",null,"Side bars consist of a container that holds links and text labels."),Object(s.a)(c.a,{image:"/images/components/sidebar/foundation.png",mdxType:"SingleImage"}),Object(s.a)("h4",null,"Container"),Object(s.a)("p",null,"The base element of a sidebar is a container. The container background should be set to a color that clearly distinguishes it from the rest of the page. By default the width of Denali\u2019s sidebar is set to 300 pixels. This width is optimized for use with Denali\u2019s grid. We recommend using this default in order to provide the best user experience. However, the width of the container can be reduced to support dense layouts. If adjusting container width, ensure you provide enough padding to support the legibility of the links that will reside within the container. We do not recommend assigning a width greater than 300 pixels to sidebar containers because it gives unnecessary prominence to the sidebar within the page\u2019s layout. "),Object(s.a)(c.a,{image:"/images/components/sidebar/foundation-container.png",mdxType:"SingleImage"}),Object(s.a)(l.a,{firstType:"do",firstImage:"/images/components/sidebar/foundation-container-do.png",firstCaption:"provide a container that is wide enough to support link legibility.",secondType:"dont",secondImage:"/images/components/sidebar/foundation-container-dont.png",secondCaption:"wrap links extensively or bleed links outside of the container as they will become difficult to read.",mdxType:"DoubleImage"}),Object(s.a)("h4",null,"Links"),Object(s.a)("p",null,"Links are the primary element within a sidebar. They allow users to navigate between pages. When placing a link within a sidebar always use the shortest but most effective link description possible. This makes links easy to read within the sidebar container. Links should never be so long that they need to be truncated in any way. Additionally, you should not reduce the font size of a link to get it to fit within the container. As much as possible avoid wrapping text links as well."),Object(s.a)(d.a,{type:"info",icon:"information-circle-solid",mdxType:"Alert"},Object(s.a)("p",null,"Links within sidebars follow the similar principles as individual link components. Check out the link principles page for more information on the proper use of links.")),Object(s.a)(c.a,{image:"/images/components/sidebar/foundation-links.png",mdxType:"SingleImage"}),Object(s.a)(l.a,{firstType:"do",firstImage:"/images/components/sidebar/foundation-links-do.png",firstCaption:"use concise link descriptions that fit comfortably within a sidebar container.",secondType:"dont",secondImage:"/images/components/sidebar/foundation-links-dont.png",secondCaption:"use link descriptions that are so long they need to be truncated to fit the container width.",mdxType:"DoubleImage"}),Object(s.a)("h4",null,"Icons"),Object(s.a)("p",null,"Since sidebar links are like any other link component, you can also include an icon before the link description. As with any link, ensure the icon you place before the link directly supports the link description. Avoid placing an icon at the end of a link as it could call unnecessary attention to the \u201cragging\u201d created by the inconsistent link lengths and make sidebars more difficult to parse.  Additionally you can use icon-only links in the sidebar, but we recommend adding tooltips on hover so that users understand what each icon represents. "),Object(s.a)(c.a,{image:"/images/components/sidebar/foundation-icons.png",mdxType:"SingleImage"}),Object(s.a)(l.a,{firstType:"do",firstImage:"/images/components/sidebar/foundation-icons-do.png",firstCaption:"add a supporting icon before links in a sidebar if desired.",secondType:"dont",secondImage:"/images/components/sidebar/foundation-icons-dont.png",secondCaption:"add supporting icons to the end of links within a sidebar to avoid bringing unnecessary emphasis to the ragging of the links.",mdxType:"DoubleImage"}),Object(s.a)("h4",null,"Section headers"),Object(s.a)("p",null,"Section headers can be used to group related links within a sidebar. When using section headers it is important to ensure that they are visually differentiated from links and deemphasized to avoid confusion or assigning too much prominence to them. Denali\u2019s sidebar section headers use all-caps gray text set in a smaller type size. This differentiates them from the sentence cased, larger, blue appearance of Denali links while also deemphasizing them visually. As with link descriptions, section headers should be as concise as possible. Avoid using lengthy section headers that wrap or need to be truncated. "),Object(s.a)(c.a,{image:"/images/components/sidebar/foundation-headers.png",mdxType:"SingleImage"}),Object(s.a)(l.a,{firstType:"do",firstImage:"/images/components/sidebar/foundation-headers-do.png",firstCaption:"use concise link descriptions that fit comfortably within a sidebar container.",secondType:"dont",secondImage:"/images/components/sidebar/foundation-headers-dont.png",secondCaption:"use link descriptions that are so long they need to be truncated to fit the container width.",mdxType:"DoubleImage"}),Object(s.a)("hr",null),Object(s.a)("h2",null,"Placement"),Object(s.a)("p",null,"Sidebars should always be placed to the left of the screen in countries where users are accustomed to reading from left to right. This places the navigation in a logical order on the screen."),Object(s.a)("h4",null,"General usage"),Object(s.a)("p",null,"Generally sidebars are reserved for use as secondary navigation. This means that they are used in conjunction with primary navigation such as a nav bar. When a user navigates to a primary page within a nav bar, that page may be further divided into sections that can be accessed using the sidebar. "),Object(s.a)("p",null,"The example below shows a website that is clearly divided into sections using a primary navigation. From there, the pages are further organized using a sidebar as secondary navigation. If your website or app does not require a primary navbar to group its content, you may be able to rely on a sidebar as your primary navigation. "),Object(s.a)(c.a,{image:"/images/components/sidebar/placement.png",mdxType:"SingleImage"}),Object(s.a)("h4",null,"Responsive behavior"),Object(s.a)("p",null,"Sidebars should only be visible on tablet and desktop devices. Due to the small size of mobile devices, a sidebar cannot comfortably fit within a mobile viewport without taking up a significant amount of screen real estate. For that reason, a sidebar should collapse and become hidden behind a link in the nav when the screen size falls within the mobile screen size breakpoint. When the link that hides the sidebar is triggered, the sidebar should be revealed by pushing in from the left side of the screen. "),Object(s.a)(c.a,{image:"/images/components/sidebar/placement-responsive.png",mdxType:"SingleImage"}),Object(s.a)("hr",null),Object(s.a)("h2",null,"Themeing"),Object(s.a)("p",null,"Denali\u2019s components are completely themeable. This allows you to use our framework and adapt the visual style of Denali\u2019s components to match your prodcut\u2019s unique visual brand. Check out our guide to themeing with Denali to find out more."),Object(s.a)("h4",null,"Dennit Racing Theme"),Object(s.a)("p",null,"Dennit Racing uses a customized Denali theme that aligns visually with their brand. Dennit\u2019s checkboxes feature custom type, background color, border radius, border color and icons."),Object(s.a)(c.a,{image:"/images/components/sidebar/theming.png",mdxType:"SingleImage"}),Object(s.a)("p",null,"For all variables visit the CSS documentation page for ",Object(s.a)("a",p({parentName:"p"},{href:"https://denali-design.github.io/denali-css/?path=/story/get-started-variables--page#sidebar"}),"sidebar"),"."))}g.isMDXComponent=!0},KXDj:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t("nKUr");function a(e){return Object(i.jsxs)("div",{className:"alert is-block is-".concat(e.type),children:[Object(i.jsx)("span",{className:"d-icon d-".concat(e.icon)}),Object(i.jsx)("div",{children:e.children})]})}},hR9u:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t("nKUr");function a(e){return Object(i.jsx)("div",{className:"inline-flex",style:{flex:"0 1 33%"},children:Object(i.jsxs)("a",{className:"has-bg-grey-100 p-y-16 p-x-14 m-8 br-md flex align-items-center ".concat(e.disabled?"is-disabled":"shadow-1"),style:{minWidth:"25%",border:e.disabled?"solid 2px #E8E8E8":"none"},rel:"noopener noreferrer",href:e.link,target:"_blank",children:[Object(i.jsx)("div",{className:"br-circle h-9 w-9 flex justify-content-center align-items-center ".concat(e.disabled?"has-bg-grey-400":"has-bg-brand-100"),style:{minWidth:"45px"},children:Object(i.jsx)("span",{className:"d-icon d-".concat(e.icon," ").concat(e.disabled?"is-grey-700":"is-brand-300")})}),Object(i.jsxs)("div",{className:"m-l-10",children:[Object(i.jsxs)("div",{className:"flex align-items-center m-b-4",children:[Object(i.jsx)("p",{className:"is-large is-bold",style:{lineHeight:"1"},children:e.name}),e.disabled?"":Object(i.jsx)("span",{className:"d-icon d-arrow-right is-brand-300 m-l-4"})]}),Object(i.jsx)("p",{className:"is-small",style:{lineHeight:"1"},children:e.caption})]})]})})}},r7rx:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/sidebar",function(){return t("DPRA")}])}},[["r7rx",0,1,2,3,4]]]);