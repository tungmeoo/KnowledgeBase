"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3350],{4137:(t,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>g});var e=n(7294);function r(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function o(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function d(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function l(t,a){if(null==t)return{};var n,e,r=function(t,a){if(null==t)return{};var n,e,r={},o=Object.keys(t);for(e=0;e<o.length;e++)n=o[e],a.indexOf(n)>=0||(r[n]=t[n]);return r}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)n=o[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=e.createContext({}),i=function(t){var a=e.useContext(p),n=a;return t&&(n="function"==typeof t?t(a):d(d({},a),t)),n},u=function(t){var a=i(t.components);return e.createElement(p.Provider,{value:a},t.children)},s={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},c=e.forwardRef((function(t,a){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=i(n),g=r,m=c["".concat(p,".").concat(g)]||c[g]||s[g]||o;return n?e.createElement(m,d(d({ref:a},u),{},{components:n})):e.createElement(m,d({ref:a},u))}));function g(t,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var o=n.length,d=new Array(o);d[0]=c;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,d[1]=l;for(var i=2;i<o;i++)d[i]=n[i];return e.createElement.apply(null,d)}return e.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5473:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var e=n(7462),r=(n(7294),n(4137));const o={title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",sidebar_position:2},d=void 0,l={unversionedId:"adguard-for-android/installation",id:"adguard-for-android/installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",description:"\u52d5\u4f5c\u74b0\u5883",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/adguard-for-android/installation.md",sourceDirName:"adguard-for-android",slug:"/adguard-for-android/installation",permalink:"/KnowledgeBase/ja/adguard-for-android/installation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Features overview",permalink:"/KnowledgeBase/ja/adguard-for-android/overview"},next:{title:"Battery and traffic consumption issues",permalink:"/KnowledgeBase/ja/adguard-for-android/solving-problems/battery"}},p={},i=[{value:"\u52d5\u4f5c\u74b0\u5883",id:"\u52d5\u4f5c\u74b0\u5883",level:2},{value:"AdGuard for Android \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",id:"adguard-for-android-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",level:2},{value:"\u0410dGuard\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3084\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u0430dguard\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3084\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2}],u={toc:i};function s(t){let{components:a,...n}=t;return(0,r.kt)("wrapper",(0,e.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u52d5\u4f5c\u74b0\u5883"},"\u52d5\u4f5c\u74b0\u5883"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OS\u30d0\u30fc\u30b8\u30e7\u30f3"),": Android 5.0\u4ee5\u4e0a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RAM"),": 2 GB\u4ee5\u4e0a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30c7\u30a3\u30b9\u30af\u306e\u7a7a\u304d\u5bb9\u91cf"),": 120 Mb"),(0,r.kt)("h2",{id:"adguard-for-android-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"},"AdGuard for Android \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"),(0,r.kt)("p",null,"\u3010AdGuard\u304cGoogle Play\u306b\u306a\u3044\u7406\u7531\u3011\u3053\u308c\u306f\u3001Google\u304c\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30ec\u30d9\u30eb\u306e\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\uff08\u3064\u307e\u308a\u3001\u4ed6\u306e\u30a2\u30d7\u30ea\u306e\u5e83\u544a\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\u30a2\u30d7\u30ea\uff09\u306eGoogle Play\u3067\u306e\u914d\u5e03\u3092\u7981\u6b62\u3057\u3066\u3044\u308b\u305f\u3081\u3067\u3059\u3002 Google\u306e\u5236\u9650\u7684\u306a\u30dd\u30ea\u30b7\u30fc\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://blog.adguard.com/en/google-removes-adguard-android-app-google-play/"},"\u79c1\u305f\u3061\u306e\u30d6\u30ed\u30b0\u8a18\u4e8b"),"\u3067\u3054\u78ba\u8a8d\u3044\u305f\u3060\u3051\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u7406\u7531\u3067\u3001AdGuard for Android\u306f\u76f4\u63a5AdGuard\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u304b\u3089\u624b\u52d5\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u65b9\u6cd5\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305a\u3001\u30c7\u30d0\u30a4\u30b9\u306eOS\u8a2d\u5b9a\u3067\u63d0\u4f9b\u5143\u4e0d\u660e\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u8a31\u53ef\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Android 8+: start downloading ",(0,r.kt)("a",{parentName:"li",href:"https://adguard.com/en/adguard-android/overview.html"},"AdGuard apk")," (see the next step), you'll be prompted to allow permission. \u30d6\u30e9\u30a6\u30b6\u304b\u3089\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u8a31\u53ef\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u901a\u77e5\u304c\u8868\u793a\u3055\u308c\u3001\u305d\u3053\u3067 ","[",(0,r.kt)("strong",{parentName:"li"},"\u8a2d\u5b9a"),"]","\u2192","[",(0,r.kt)("strong",{parentName:"li"},"\u3053\u306e\u63d0\u4f9b\u5143\u3092\u8a31\u53ef\u3059\u308b"),"]","\u2192\u623b\u308b\u2192","[\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb]"," \u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5b8c\u4e86\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u3010Android 7\u306e\u5834\u5408\u3011\u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u300c",(0,r.kt)("strong",{parentName:"li"},"\u8a2d\u5b9a"),"\u300d\u2192\u300c",(0,r.kt)("strong",{parentName:"li"},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"),"\u300d\u3088\u308a\u300c\u63d0\u4f9b\u5143\u4e0d\u660e\u306e\u30a2\u30d7\u30ea\u300d\u3092\u30bf\u30c3\u30d7\u3057\u3066\u30c8\u30b0\u30eb\u3092ON\u306b\u3059\u308b\u3002 \u3010Android 6\u306e\u5834\u5408\u3011","[",(0,r.kt)("strong",{parentName:"li"},"\u8a2d\u5b9a"),"]","\u3092\u958b\u304d\u3001","[\u30b7\u30b9\u30c6\u30e0\u3068\u30c7\u30d0\u30a4\u30b9]","\u304b\u3089","[\u305d\u306e\u4ed6\u306e\u8a2d\u5b9a]","\u3092\u9078\u629e\u3002","[\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3]","\u306e","[\u63d0\u4f9b\u5143\u4e0d\u660e\u306e\u30a2\u30d7\u30ea]","\u3092\u30aa\u30f3\u306b\u3057\u3001\u30b7\u30b9\u30c6\u30e0\u8b66\u544a\u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u958b\u304d\u307e\u3057\u305f\u3089OK\u3092\u30bf\u30c3\u30d7\u3002 \u203b\u7aef\u672b\u306b\u3088\u3063\u3066\u5c11\u3057\u624b\u9806\u3068\u9805\u76ee\u304c\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/installation/Android/ja/d1.jpg",alt:"\u63d0\u4f9b\u5143\u4e0d\u660e\u306e\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u3010Android 5\u306e\u5834\u5408\u3011","[",(0,r.kt)("strong",{parentName:"li"},"\u8a2d\u5b9a"),"]","\u3092\u958b\u304d\u3001",(0,r.kt)("strong",{parentName:"li"},"\u30d1\u30fc\u30bd\u30ca\u30eb"),"\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u3042\u308b","[",(0,r.kt)("strong",{parentName:"li"},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"),"]","\u3092\u9078\u629e\u3002 ","[",(0,r.kt)("strong",{parentName:"li"},"\u63d0\u4f9b\u5143\u4e0d\u660e\u306e\u30a2\u30d7\u30ea"),"]","\u3092\u30aa\u30f3\u306b\u3057\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u8b66\u544a\u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u958b\u304d\u307e\u3057\u305f\u3089","[",(0,r.kt)("strong",{parentName:"li"},"OK"),"]","\u3092\u30bf\u30c3\u30d7\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/android/installation/unknown_sources2.png",alt:"\u63d0\u4f9b\u5143\u4e0d\u660e\u306e\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"})),(0,r.kt)("p",null,"\u3053\u308c\u3067\u3001\u30a2\u30d7\u30ea\u3092\u30c7\u30d0\u30a4\u30b9\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30d6\u30e9\u30a6\u30b6\u3067",(0,r.kt)("a",{parentName:"p",href:"https://adguard.com/apk"},"https://adguard.com/apk"),"\u3092\u958b\u304f\u304b\u3001\u4ee5\u4e0b\u306eQR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3057\u3066\u304f\u3060\u3055\u3044:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/android/installation/qr.png",alt:"QR\u30b3\u30fc\u30c9"})),(0,r.kt)("p",null,"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u8868\u793a\u3055\u308c\u305f\u3089\u3001 ",(0,r.kt)("strong",{parentName:"p"},"OK"),"\u3092\u62bc\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/android/installation/save_the_file.png",alt:"\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b"})),(0,r.kt)("p",null,"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001AdGuard\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u30b7\u30b9\u30c6\u30e0\u5c0b\u306d\u3089\u308c\u307e\u3059\u3002 ",(0,r.kt)("strong",{parentName:"p"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),"\u3092\u62bc\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/android/installation/1.png",alt:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"})),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u307e\u3059\u3068\u3001",(0,r.kt)("strong",{parentName:"p"},"EULA"),"\u3068AdGuard\u306e",(0,r.kt)("strong",{parentName:"p"},"\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc"),"\u306e\u540c\u610f\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u307e\u305f\u30012\u3064\u306e\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b\u3053\u3068\u3067\u3001AdGuard\u306e\u958b\u767a\u306b\u3054\u5354\u529b\u3044\u305f\u3060\u3051\u307e\u3059\u3002 \uff08\u5354\u529b\u3055\u308c\u308b\u5834\u5408\u3001\u300c",(0,r.kt)("em",{parentName:"p"},"AdGuard\u306b\u81ea\u52d5\u30af\u30e9\u30c3\u30b7\u30e5\u30ec\u30dd\u30fc\u30c8\u3092\u9001\u4fe1\u3059\u308b"),"\u300d\u3068 \u300c",(0,r.kt)("em",{parentName:"p"},"\u30c6\u30af\u30cb\u30ab\u30eb\u60c5\u5831\u3068\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u60c5\u5831\u3092\u9001\u4fe1\u3059\u308b"),"\u300d\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3066\u304f\u3060\u3055\u3044\u3002\uff09 \u6b21\u306b\u3001\u300c",(0,r.kt)("strong",{parentName:"p"},"\u540c\u610f\u3059\u308b"),"\u300d\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/installation/Android/ja/2.jpg",alt:"\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30af\u30a4\u30c3\u30af\u8a2d\u5b9a")," \u3068 ",(0,r.kt)("strong",{parentName:"p"},"\u8a73\u7d30\u306a\u8a2d\u5b9a")," \u306e\u3069\u3061\u3089\u304b\u3092\u9078\u3073\u307e\u3059\uff08\u8a73\u7d30\u306a\u8a2d\u5b9a\u3082\u57fa\u672c\u7684\u306b\u3059\u3050\u306b\u7d42\u308f\u308b\u306e\u3067\u3001\u304a\u3059\u3059\u3081\u3067\u3059\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/installation/Android/ja/3.jpg",alt:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"})),(0,r.kt)("p",null,"\u8a73\u7d30\u306a\u8a2d\u5b9a\u3092\u9078\u3076\u3068\u3001\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066AdGuard\u3092\u8a2d\u5b9a\u3059\u308b\u6d41\u308c\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002 \u307e\u305a\u3001\u691c\u7d22\u5e83\u544a\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\u304b\u3057\u306a\u3044\u304b\u3068\u3044\u3046\u8a2d\u5b9a\u3067\u3059:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/installation/Android/ja/5.jpg",alt:"\u691c\u7d22\u5e83\u544a"})),(0,r.kt)("p",null,"\u6b21\u306b\u3001SNS\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff08\u666e\u901a\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3067\u51fa\u3066\u304f\u308b\u3044\u3044\u306d\uff01\u3084\u30b7\u30a7\u30a2\u30dc\u30bf\u30f3\u306a\u3069\uff09\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\u304b\u3057\u306a\u3044\u304b\u3068\u3044\u3046\u8a2d\u5b9a\u3067\u3059:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/installation/Android/ja/6.jpg",alt:"SNS\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"})),(0,r.kt)("p",null,"\u8ff7\u60d1\u8981\u7d20\uff08\u30af\u30c3\u30ad\u30fc\u901a\u77e5\u3001\u30a2\u30b7\u30b9\u30bf\u30f3\u30c8\u30a6\u30a3\u30f3\u30c9\u30a6\u306a\u3069\uff09\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\u304b\u3057\u306a\u3044\u304b\u3068\u3044\u3046\u8a2d\u5b9a\u3067\u3059:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/installation/Android/ja/7.jpg",alt:"\u8ff7\u60d1\u8981\u7d20"})),(0,r.kt)("p",null,"You don't have to choose anything on this screen: just take note of the information on how to watch YouTube videos without ads:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/android/installation/youtube.jpg",alt:"YouTube"})),(0,r.kt)("p",null,"\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u8a2d\u5b9a\u3067\u306f\u3001\u3054\u5e0c\u671b\u306e\u500b\u4eba\u60c5\u5831\u8ffd\u8de1\u304b\u3089\u306e\u4fdd\u8b77\u30ec\u30d9\u30eb\u3092\u304a\u9078\u3073\u304f\u3060\u3055\u3044:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/installation/Android/ja/8.jpg",alt:"\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u8a2d\u5b9a"})),(0,r.kt)("p",null,"On the next screen, select whether you want to get notifications about dangerous websites:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/installation/Android/ja/9.jpg",alt:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"})),(0,r.kt)("p",null,"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306f\u7d50\u69cb\u91cd\u8981\u3067\u3059\u3002 HTTPS\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3067\u6700\u9ad8\u306e\u5e83\u544a\u30d6\u30ed\u30c3\u30af\u54c1\u8cea\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u3001\u30aa\u30f3\u306b\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/android/installation/10.png",alt:"HTTPS\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0"})),(0,r.kt)("p",null,"\u6700\u7d42\u30b9\u30c6\u30c3\u30d7\u306f\u30ed\u30fc\u30ab\u30ebVPN\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3067\u3059:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/installation/Android/ja/4.jpg",alt:"\u30ed\u30fc\u30ab\u30ebVPN"})),(0,r.kt)("p",null,"\u3053\u308c\u3067\u3001AdGuard\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u5b8c\u4e86\u3067\u3059\u3002"),(0,r.kt)("h2",{id:"\u0430dguard\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3084\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u0410dGuard\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3084\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u306bAdGuard\u3092\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001 \u307e\u305a",(0,r.kt)("strong",{parentName:"p"},"\u8a2d\u5b9a"),"\u3092\u958b\u304d\u3001 ",(0,r.kt)("strong",{parentName:"p"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30a2\u30d7\u30ea"),"\uff08Android 6\uff09\u3001",(0,r.kt)("strong",{parentName:"p"},"\u30a2\u30d7\u30ea"),"\uff08Android 5\u304a\u3088\u30737\uff09\u3001",(0,r.kt)("strong",{parentName:"p"},"\u30a2\u30d7\u30ea\u3068\u901a\u77e5"),"\uff08Android 8+\uff09\u3001\u30a2\u30d7\u30ea\uff08Android 9+\uff09\u3092\u9078\u629e\u3057\u3001 \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u30a2\u30d7\u30ea\u306e\u30ea\u30b9\u30c8\u3067",(0,r.kt)("strong",{parentName:"p"},"AdGuard"),"\u3092\u898b\u3064\u3051\u3001",(0,r.kt)("strong",{parentName:"p"},"\u524a\u9664\u3059\u308b"),"\u3092\u62bc\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/android/installation/12.png",alt:"AdGuard\u306e\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"})),(0,r.kt)("p",null,"AdGuard\u30a2\u30d7\u30ea\u3092\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001\u300c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u300d\u306e\u624b\u9806\u3092\u7e70\u308a\u8fd4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}s.isMDXComponent=!0}}]);