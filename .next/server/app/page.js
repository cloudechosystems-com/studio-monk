(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9428:e=>{"use strict";e.exports=require("buffer")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},8288:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var i=r(260),s=r(8203),n=r(5155),o=r.n(n),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6046)),"D:\\Greeshma\\studio-monk\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9772)),"D:\\Greeshma\\studio-monk\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Greeshma\\studio-monk\\src\\app\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8619:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},9235:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},565:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1066,23))},3717:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1902,23))},4355:()=>{},4603:()=>{},1066:(e,t,r)=>{let{createProxy:i}=r(3439);e.exports=i("D:\\Greeshma\\studio-monk\\node_modules\\next\\dist\\client\\image-component.js")},2326:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(5843);let i=r(6749),s=r(2833);function n(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,d,{src:c,sizes:u,unoptimized:m=!1,priority:p=!1,loading:h,className:f,quality:g,width:x,height:b,fill:v=!1,style:w,overrideSrc:y,onLoad:_,onLoadingComplete:j,placeholder:P="empty",blurDataURL:k,fetchPriority:S,decoding:C="async",layout:N,objectFit:E,objectPosition:z,lazyBoundary:G,lazyRoot:I,...M}=e,{imgConf:O,showAltText:D,blurComplete:R,defaultLoader:q}=t,A=O||s.imageConfigDefault;if("allSizes"in A)a=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);a={...A,allSizes:e,deviceSizes:t}}if(void 0===q)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let W=M.loader||q;delete M.loader,delete M.srcSet;let F="__next_img_default"in W;if(F){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=W;W=t=>{let{config:r,...i}=t;return e(i)}}if(N){"fill"===N&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[N];t&&!u&&(u=t)}let L="",B=o(x),V=o(b);if((r=c)&&"object"==typeof r&&(n(r)||void 0!==r.src)){let e=n(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,k=k||e.blurDataURL,L=e.src,!v){if(B||V){if(B&&!V){let t=B/e.width;V=Math.round(e.height*t)}else if(!B&&V){let t=V/e.height;B=Math.round(e.width*t)}}else B=e.width,V=e.height}}let T=!p&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:L)||c.startsWith("data:")||c.startsWith("blob:"))&&(m=!0,T=!1),a.unoptimized&&(m=!0),F&&!a.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(m=!0);let U=o(g),$=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:z}:{},D?{}:{color:"transparent"},w),J=R||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:B,heightInt:V,blurWidth:l,blurHeight:d,blurDataURL:k||"",objectFit:$.objectFit})+'")':'url("'+P+'")',Y=J?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},H=function(e){let{config:t,src:r,unoptimized:i,width:s,quality:n,sizes:o,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,o),c=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:n,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:a({config:t,src:r,quality:n,width:l[c]})}}({config:a,src:c,unoptimized:m,width:B,quality:U,sizes:u,loader:W});return{props:{...M,loading:T?"lazy":h,fetchPriority:S,width:B,height:V,decoding:C,className:f,style:{...$,...Y},sizes:H.sizes,srcSet:H.srcSet,src:y||H.src},meta:{unoptimized:m,priority:p,placeholder:P,fill:v}}}},6749:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:s,blurDataURL:n,objectFit:o}=e,a=i?40*i:t,l=s?40*s:r,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2833:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},8516:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let i=r(3264),s=r(2326),n=r(1066),o=i._(r(6352));function a(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=n.Image},6352:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:s}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(s||75)+(r.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},5843:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},9772:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>c});var i=r(2740),s=r(2376),n=r.n(s),o=r(8726),a=r.n(o),l=r(3559);let d={userPoolId:"your-user-pool-id",userPoolWebClientId:"your-client-id"};r(1135),l.E.configure({Auth:{Cognito:{userPoolId:d.userPoolId,userPoolClientId:d.userPoolWebClientId}}});let c={title:"StudioMonk - Stock Video Downloads",description:"Download high-quality stock videos for your projects"};function u({children:e}){return(0,i.jsx)("html",{lang:"en",children:(0,i.jsx)("body",{className:`${n().variable} ${a().variable} antialiased`,children:e})})}},6046:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var i=r(2740),s=r(8516),n=r.n(s);function o(){return(0,i.jsxs)("div",{className:"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",children:[(0,i.jsxs)("main",{className:"flex flex-col gap-8 row-start-2 items-center sm:items-start",children:[(0,i.jsx)(n(),{className:"dark:invert",src:"/next.svg",alt:"Next.js logo",width:180,height:38,priority:!0}),(0,i.jsxs)("ol",{className:"list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]",children:[(0,i.jsxs)("li",{className:"mb-2",children:["Get started by editing"," ",(0,i.jsx)("code",{className:"bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold",children:"src/app/page.tsx"}),"."]}),(0,i.jsx)("li",{children:"Save and see your changes instantly."})]}),(0,i.jsxs)("div",{className:"flex gap-4 items-center flex-col sm:flex-row",children:[(0,i.jsxs)("a",{className:"rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5",href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(n(),{className:"dark:invert",src:"/vercel.svg",alt:"Vercel logomark",width:20,height:20}),"Deploy now"]}),(0,i.jsx)("a",{className:"rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44",href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:"Read our docs"})]})]}),(0,i.jsxs)("footer",{className:"row-start-3 flex gap-6 flex-wrap items-center justify-center",children:[(0,i.jsxs)("a",{className:"flex items-center gap-2 hover:underline hover:underline-offset-4",href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(n(),{"aria-hidden":!0,src:"/file.svg",alt:"File icon",width:16,height:16}),"Learn"]}),(0,i.jsxs)("a",{className:"flex items-center gap-2 hover:underline hover:underline-offset-4",href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(n(),{"aria-hidden":!0,src:"/window.svg",alt:"Window icon",width:16,height:16}),"Examples"]}),(0,i.jsxs)("a",{className:"flex items-center gap-2 hover:underline hover:underline-offset-4",href:"https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(n(),{"aria-hidden":!0,src:"/globe.svg",alt:"Globe icon",width:16,height:16}),"Go to nextjs.org →"]})]})]})}},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var i=r(8077);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[638,509,77,902],()=>r(8288));module.exports=i})();