if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.7e8cb7ea.css",revision:"432dc32645c604531a8092234852ecdd"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/132.d31268b0.js",revision:"097e15561b9938d3c0934dae53e5bbf6"},{url:"assets/js/133.d9e1cece.js",revision:"2d7796887d1f373d882d2bb867b02001"},{url:"assets/js/134.04b8adb5.js",revision:"c6ff63fb292a04dd302be109b81d0b4b"},{url:"assets/js/135.0a34c2a4.js",revision:"e61a0ff129c2fdf8f966ea12f2096ab1"},{url:"assets/js/136.65e19fa5.js",revision:"f790c3244131cfdb063737a1c9397719"},{url:"assets/js/app.1040adba.js",revision:"0df589e82ec842e996942b5fd35019bc"},{url:"assets/js/layout-Blog.e1d4a2cd.js",revision:"efd3d49d2f62f5e1aa2fd628a26356e3"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.ff91e926.js",revision:"07d706fb098fedb60df7dd4c4baa9ec4"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.dc0f8e0f.js",revision:"b55406f1f015770846aa7796be414bd0"},{url:"assets/js/layout-Layout.6c6505f7.js",revision:"21192de5da29248d928e6844a3fd3110"},{url:"assets/js/layout-NotFound.1f34e692.js",revision:"6623a3020123ea1602180b09caae9344"},{url:"assets/js/layout-Slide.9b24cadb.js",revision:"0cb1ca3422f9d5602dfc1a5217a38513"},{url:"assets/js/page-AboutVuePress--4a71114e.389740f5.js",revision:"4ce2ee8db8e1e690c017f779a3bcb477"},{url:"assets/js/page-Basic--770cb96b.01209d17.js",revision:"e3ef1bfc9b09085d00bab16dbc646437"},{url:"assets/js/page-Bloghomepage--64265752.6e43311c.js",revision:"9bbcbad87e91b51a17aa34114f2bd5db"},{url:"assets/js/page-Blogrelated--17c260a2.58a3f873.js",revision:"5ad015091889f9c882fbf48415659283"},{url:"assets/js/page-CodeDemo--a44bde9c.49b2fe44.js",revision:"4c5c4d06ca89ac831e7d6fbbd7784119"},{url:"assets/js/page-CommentFunction--5bb6671c.e0ead78f.js",revision:"d0b3faab63c6c7d02d2e3ab9e25ef867"},{url:"assets/js/page-Commonproblems--2b571e9b.de62128d.js",revision:"38e207f1d040c4e5a1deb8e02da99906"},{url:"assets/js/page-Config--35a0a7d9.cdb26e6c.js",revision:"ffe65010115e780df2e340b3be3384be"},{url:"assets/js/page-Customalignment--4f21aa5c.f8ea975a.js",revision:"9600cf3c6bac7770f862fb15ddf6f54c"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.2d4f0783.js",revision:"86ab81dd639e917e5e1ac61d0d095dd7"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.18f989d5.js",revision:"527291078cb7d87b6f6b969694c563b6"},{url:"assets/js/page-Demos--f328658e.3e62466f.js",revision:"16372df9027beffd0dc81645a78687e9"},{url:"assets/js/page-EmojiList--41bb29b9.2502859b.js",revision:"5b8e488c32cb77bea47cb92d44d53d85"},{url:"assets/js/page-Emoji列表--404e6737.b0a4e370.js",revision:"2a9e00e0acf0b36849ccb050fc24d3f0"},{url:"assets/js/page-Encryptionfunction--181bdc9c.452b5cae.js",revision:"497b6ec1ab90c71ff5cc2322b75fadda"},{url:"assets/js/page-FileStructure--665a4f1c.f1c8df00.js",revision:"e147b321ab6bbb4a8e01cbd6ddbacf82"},{url:"assets/js/page-Flowchart--7ce6d974.89c8289c.js",revision:"842a441ed302680ab4db592a654f22ab"},{url:"assets/js/page-Footnote--0c733e52.424607e9.js",revision:"6c13e259b28268805a346601c09373f7"},{url:"assets/js/page-HomePage--5834599c.f2dd1bb7.js",revision:"14a7a6462c2d99c63fe9a6c233027497"},{url:"assets/js/page-Iconsupport--a6a93218.bf35ae16.js",revision:"e5d8d2f19990c120b1deb8c935dfaf88"},{url:"assets/js/page-InstallUsage--0ab466d2.d72800ca.js",revision:"c0d8dd5bb1282502d34e00c720fd4edf"},{url:"assets/js/page-Introduction--d4910962.3dd6c587.js",revision:"7beec298f29aa31d261281f27b622c6d"},{url:"assets/js/page-Layout--12bd4f0e.9843b67c.js",revision:"19d9312bd02528c0345ca334d3e36af1"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.be4a9ff7.js",revision:"856999b570a6c9af946f8948b0327212"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.07630d4d.js",revision:"724eacdac53b3c7f27abbb036534a70d"},{url:"assets/js/page-MarkdownIntroduction--270989ce.858c15af.js",revision:"b44dcb0264ae444f190c48bdc7b95dfb"},{url:"assets/js/page-Markdown介绍--0e6891b6.6dda2a88.js",revision:"9a689909c79d0fd6312dddb306768bd8"},{url:"assets/js/page-Markdown增强--6162938f.10c77a92.js",revision:"e3d736faf7439c92633bcfff9b815e5f"},{url:"assets/js/page-Markdown示例--5479fe88.9788c018.js",revision:"868e89c0b7f914b4b84161e4e3791337"},{url:"assets/js/page-Markup--6b1f341c.67eca47f.js",revision:"d29e3a21945324455e10a9e83ab1e513"},{url:"assets/js/page-Nature--749fb09c.c498fa21.js",revision:"8a85973cb586c86618a88a6380d1ab13"},{url:"assets/js/page-NavBar--c7bf87dc.16ad4dd7.js",revision:"149d06c61f7a1b1cb378c1af9a611554"},{url:"assets/js/page-NewComponent--1d138c72.a3c77919.js",revision:"0826f4146aec7eb30579f6b08fc55795"},{url:"assets/js/page-Newfeature--5136c541.be5ef064.js",revision:"96b64308d9cbe1a2d3a6a2c2563e863a"},{url:"assets/js/page-Object--16031ab2.27b1cb2c.js",revision:"0a0e71b243eb0270d089c4a9c8cde92a"},{url:"assets/js/page-Page--af17b59c.16f59807.js",revision:"d5d8d158a593f4e949d3a9cfffb65093"},{url:"assets/js/page-PageConfiguration--0aacc152.42f2f0ee.js",revision:"1ffd16e2454da3f03193132ce07c56d4"},{url:"assets/js/page-PageEnhance--03665ac8.4982f029.js",revision:"668539f7b7dc4f0a6b3110458597aef3"},{url:"assets/js/page-Pageinformation--71efd5d2.2abc188b.js",revision:"87aafb0c4e58e875352040879fe56f84"},{url:"assets/js/page-People--2182769c.9ec16677.js",revision:"739486be142132d3923130045088b79c"},{url:"assets/js/page-Place--951cdc00.188eb5fb.js",revision:"cff5e51e4a7724298fc0cf64ce4990fc"},{url:"assets/js/page-PluginDescription--137c6c07.3807610c.js",revision:"60f16d21a940a2daba0bd64f6441c121"},{url:"assets/js/page-Plugins--adbf415c.5e88ff0f.js",revision:"3f6fc85c17c9dd57758779e46c0b62ad"},{url:"assets/js/page-Presentationsupport--8f8e54dc.7511a9b7.js",revision:"32e1496171189004c8ae12102944c7e2"},{url:"assets/js/page-PWA--01089712.286587bc.js",revision:"a96262b65198140dad79bea8befd7aff"},{url:"assets/js/page-PWA--243ef2b8.b1fb7f96.js",revision:"15942d2209276604d86a3b432504d11d"},{url:"assets/js/page-SEOandSitemap--ccd3659c.9d775400.js",revision:"799b99693e06807e42a330163055551a"},{url:"assets/js/page-SEO和Sitemap--2853f164.becc2cfa.js",revision:"63ed782f253e5c4e5283a15d14aa0cf7"},{url:"assets/js/page-Sidebar--2fa1ea2c.c0565ac3.js",revision:"2ca460cff794162408ae116c382adc89"},{url:"assets/js/page-Slide--269ae052.c0859e0f.js",revision:"73201f3bcd9f849d9e9c4a383dc78f87"},{url:"assets/js/page-stylusconfiguration--6796cdf2.520b1667.js",revision:"6078accd3e7ee3cb1f21eba091db906f"},{url:"assets/js/page-stylus配置--0ce19a82.06f52e2e.js",revision:"1794c376d03dd8cc3f14a5af990d0aba"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.8e26b909.js",revision:"b5fcd7f8b1f7d26b319465c999f001b6"},{url:"assets/js/page-Symbol--a9259c5c.46d7dd4e.js",revision:"9055b2f99784214b1ac9d15d25443d7c"},{url:"assets/js/page-TexSupport--64cb5e50.46bf49a6.js",revision:"c1b194f2ca83ccf8a8017ef67c86e4b0"},{url:"assets/js/page-Tex语法支持--1e02b152.9f8492b4.js",revision:"1d2b469850e79113cdac847f01afe9e1"},{url:"assets/js/page-ThemeConfig--1120a0ce.40397c64.js",revision:"0bc07dd0c26b9cb9066e0e5681643df4"},{url:"assets/js/page-ThemeConfig--1726e14e.08647fe6.js",revision:"68bf28d756cad80ffcc5974cc60c29d9"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.8f547437.js",revision:"e66c85e8a60f2fcce75e08caf4229bb2"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.8f0e1a3d.js",revision:"a79cf6f3a2342756b93b5e6af0c1d088"},{url:"assets/js/page-ThemePluginConfig--958196dc.9c77a304.js",revision:"338518a66d3337f706bdddaaafb492e5"},{url:"assets/js/page-TSsupport--09728ac8.2931dae8.js",revision:"c2114038c40a4aca10c4ba33f4f99685"},{url:"assets/js/page-TS支持--4625f812.0e683d12.js",revision:"cef9f4a513d8c235ff69f6c5a97cf787"},{url:"assets/js/page-VuePress--b7060eee.2082ac08.js",revision:"29f37891f1408143cd877540ff2f94cf"},{url:"assets/js/page-vuepress-plugin-container--31498112.a45b926e.js",revision:"1d2a0a20871952267ba7238739564106"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.08d8c98b.js",revision:"91cbcbf95635cb71898bb3bb84c540f2"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.986bc5a2.js",revision:"b236f000a8582dc4e8f2d941e78dc6e0"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.cbbdd4c4.js",revision:"b80e1066be273bc166342ff6730e3f2d"},{url:"assets/js/page-vuepress-theme-hope--354da24e.8799ed62.js",revision:"c8141d08f0531832d785295185248251"},{url:"assets/js/page-vuepress-theme-hope--776d8369.266845f0.js",revision:"781421ce173a5ec9a9850dc95cd9b677"},{url:"assets/js/page-VuePressCases--082972f2.c0e236a4.js",revision:"60e3abbb39296ff3173e0b586d83b28f"},{url:"assets/js/page-VuePresscommands--9f3f316c.6c3c5f90.js",revision:"c80c3c9f1e5d51b1adaf2aadedb37140"},{url:"assets/js/page-VuePress案例--531d5f3e.46a94d53.js",revision:"19f9756d1f3f2073a82ffabd028919fa"},{url:"assets/js/page-上下角标--8efed9dc.5d4a76df.js",revision:"0aee0d1e383359dcbb1523bc1f8a5f1e"},{url:"assets/js/page-主题功能配置--5bb71452.3815b285.js",revision:"5480a50ae44a492eb257b89a92511549"},{url:"assets/js/page-主题布局配置--7db7eff2.c5ce8865.js",revision:"fbae136821e03c07ad4eb5df879c3178"},{url:"assets/js/page-主题插件配置--1b0c3e98.f82fcc16.js",revision:"c689f0181f319f4c22f463aa3399754b"},{url:"assets/js/page-主题配置--21dc088d.a8ae45ff.js",revision:"7befb6eabd107a31458bf1a52f910c3d"},{url:"assets/js/page-主题配置--2c572572.f385175d.js",revision:"9c013e36abc697c8698df13e86699df6"},{url:"assets/js/page-人物--b4fc27dc.eff1eb39.js",revision:"9968cedbb1c355421107bd1f21e54dd9"},{url:"assets/js/page-介绍--2e99d139.ff7beedf.js",revision:"14f0536e7470172be6199c504e7faae9"},{url:"assets/js/page-代码演示--0dad4f52.647204ac.js",revision:"552dcf16a97fa94edec9aae90b46fde6"},{url:"assets/js/page-侧边栏--43054cb2.5a7e79a3.js",revision:"c63342ab33966b42eae922b3b8135736"},{url:"assets/js/page-加密功能--2361b7e4.04f00d5e.js",revision:"91739fb47d49bb5ab4fd9e577c03cf7f"},{url:"assets/js/page-博客相关--6a3fd4f2.947bb060.js",revision:"781a89f27698d2b5dcfdbea934f07bed"},{url:"assets/js/page-博客首页--1eb2b298.7e6fea34.js",revision:"6e242a7791e5c7c26b0051bffb26f4a2"},{url:"assets/js/page-图标支持--a2671ddc.7522d24c.js",revision:"ce523bbaa43e459433bb5671f3146dbc"},{url:"assets/js/page-地点--6710785c.079a4f47.js",revision:"0e92ba46dd28b4e7b5c0002f16084fea"},{url:"assets/js/page-基础知识--4d466a79.d414691f.js",revision:"a7fc4b2492932a63919212f05d4f4e46"},{url:"assets/js/page-安装使用--76e0e5b0.8d6288b6.js",revision:"fea5f3d0d09ca95d33a337b86e355edd"},{url:"assets/js/page-对象--e150da9c.9747f92f.js",revision:"9aa0b178c8179031152049be6e38079f"},{url:"assets/js/page-导航栏--183844fc.a22c372c.js",revision:"3da6e95bd3849cb6e773b889460b9fc0"},{url:"assets/js/page-布局--fa93e36a.9b6120ea.js",revision:"287417d6200c4fe35fbc240063aed106"},{url:"assets/js/page-常见问题--10ab790e.8ada692c.js",revision:"3f5a467ee876b092c528b25a83bd9408"},{url:"assets/js/page-幻灯片--818cb750.c93ad8b5.js",revision:"a61698e09f80aac4673498376ffa6e28"},{url:"assets/js/page-幻灯片支持--5808e664.d1671ed4.js",revision:"82504f4e9ae6eed3f7bff2fb4f4e58b0"},{url:"assets/js/page-插件--32355f10.b0a332fe.js",revision:"ac815ccb6dcfde3b35eebe4baf13266a"},{url:"assets/js/page-插件说明--cbca1c8e.b5b26f3c.js",revision:"28660d6a2a75a63b5ec1a75651d7f51d"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.516f67e2.js",revision:"c735ef9fa2ecb4c61ccd9c67e4cace16"},{url:"assets/js/page-新增特性--30c6c799.8a03a6a5.js",revision:"00c456a69c40985567d8a34286954146"},{url:"assets/js/page-新增组件--0979095e.80bd56fb.js",revision:"4eb87257ba02fec2b82076dd8eebacfa"},{url:"assets/js/page-标记--0ac52704.42d22eca.js",revision:"64135f2ae319987268749ba9ef88329b"},{url:"assets/js/page-流程图支持--582eff1c.3f170ec8.js",revision:"12c96f6577bb759b1c90c90e8d52b319"},{url:"assets/js/page-深色模式与主题色--01662674.449b9ca2.js",revision:"f6c106e6ca82ff1bd93be89906f39e53"},{url:"assets/js/page-符号--2db8fb80.9cbdfbed.js",revision:"85fc6b1686abc2daf46b43d21c81fd5c"},{url:"assets/js/page-脚注--17d88350.30f00640.js",revision:"f7b7a2dcdb22f5de9f7f1d4d6c6ee723"},{url:"assets/js/page-自定义对齐--048d31dc.a39ee0d4.js",revision:"c1dcb60101f9442d7c281afe59d6e383"},{url:"assets/js/page-自然--7ec33be2.c9bfecb0.js",revision:"79f85912ce121209bab3f65a4b102c02"},{url:"assets/js/page-评论功能--350aff9a.44140c25.js",revision:"011218e4370b519e23535a2dbac18af2"},{url:"assets/js/page-配置--d315f8fe.f075d434.js",revision:"30be11c2ef2bb09693d73b375659a0f3"},{url:"assets/js/page-页面--78423bfe.dd386f0d.js",revision:"f69453907859ed8fa32fcfa8381a0229"},{url:"assets/js/page-页面信息--455b9800.f2c09959.js",revision:"b11f522856d77462e68a6f726bb4590c"},{url:"assets/js/page-页面增强--2e4cf75c.6d0cadfc.js",revision:"20c634f02b102ac3decadaad56eab58c"},{url:"assets/js/page-页面配置--02399408.1123b5a9.js",revision:"86a9b25be15c1a1923989b74dc27229f"},{url:"assets/js/page-项目指令--2f3d7c1c.7f1c37b0.js",revision:"831e5d2325a43ede5bca709668d4fe74"},{url:"assets/js/page-项目案例--1f3d6482.3f23fe9d.js",revision:"839912996c0eb30d2479ab2c4082c458"},{url:"assets/js/page-首页--79a22944.088abdd6.js",revision:"b2a27683bb8da5332622e969fb179e0a"},{url:"assets/js/page-默认主题配置--0d5b7f32.f36ce656.js",revision:"7ec5dba6396c18a74557bc81845baaf2"},{url:"assets/js/vendors~docsearch.c05c5713.js",revision:"09172d843dddf9b5fff4d6023468626a"},{url:"assets/js/vendors~flowchart.fcc19cf4.js",revision:"913e709520c743c5e7e2a5666756cd6b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.86dec24f.js",revision:"d9a69e637240e3d7943251a90b3e238c"},{url:"assets/js/vendors~photo-swipe.80b35463.js",revision:"c2c5be201d082085d39de0a1d32c31ef"},{url:"assets/js/vendors~reveal.5b2c535b.js",revision:"ac1fe9b7a32264aac78e6238750a251e"},{url:"assets/js/vendors~valine.2638fe86.js",revision:"b2385adbbfe6adb9b8241621365bc97d"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"2b5b500ff6088c884f6d3aed94ef6297"},{url:"article/index.html",revision:"9ef7d694348c80e1ce715bd40d9e15ba"},{url:"basic/index.html",revision:"4a8c33605bac77c8dbdc39beb60b8025"},{url:"basic/markdown/demo/index.html",revision:"c8603e7f4e1b2a0b8709e699b35a321e"},{url:"basic/markdown/emoji/index.html",revision:"a41c98ab4c550a37eeb9e2158eb86e57"},{url:"basic/markdown/emoji/nature/index.html",revision:"7bfce1e9230d19ede72f8b8d9ee97c6b"},{url:"basic/markdown/emoji/object/index.html",revision:"b6cdfbb2289e22ece405e4e86e12a69e"},{url:"basic/markdown/emoji/people/index.html",revision:"1c51f1fd2f753aa8140209beb51352d4"},{url:"basic/markdown/emoji/place/index.html",revision:"247395916b9f71d6e2f9da795a1614bf"},{url:"basic/markdown/emoji/symbol/index.html",revision:"aa1b84480660b1dd4a6ce5a7b1f11494"},{url:"basic/markdown/index.html",revision:"6cb76a7ade260c08ea6e64e8e7cd6309"},{url:"basic/vuepress/case/index.html",revision:"777ee392e20ca25ceff3e1fef0afaa64"},{url:"basic/vuepress/command/index.html",revision:"22484e551a1f4f254d39c0cc3d7c1470"},{url:"basic/vuepress/file/index.html",revision:"8df05389155d41db485b71fbeb44d2e3"},{url:"basic/vuepress/index.html",revision:"2619d07debe8edefb28e4f579efe5df8"},{url:"basic/vuepress/plugin/index.html",revision:"b3dc87cdb860d83dfa8cb66d6b9ac8ac"},{url:"basic/vuepress/theme/index.html",revision:"2c1d6a6e29614a1642b31d2061779ef6"},{url:"category/basic/index.html",revision:"2ab104e07e0033bcedd92072e45249f9"},{url:"category/basic/page/2/index.html",revision:"546c541d76cb9e5e2074870450b48a47"},{url:"category/basic/page/3/index.html",revision:"18fc53dfea1ced3a27407999af4d3e65"},{url:"category/config/index.html",revision:"a4946dab08f3573d8693e930047b9f35"},{url:"category/config/page/2/index.html",revision:"30fd6a98c779a86bffe3cf7c25b9d392"},{url:"category/config/page/3/index.html",revision:"04c6a6aa3687eade4c749f917e13734f"},{url:"category/demo/index.html",revision:"48daddc2cbeb15503778edbf2c3875c5"},{url:"category/FAQ/index.html",revision:"31471e973af3a8b3a9b7a0994ba78321"},{url:"category/feature/index.html",revision:"19df48db3e43aa9bbe672dc49bc67b3c"},{url:"category/feature/page/2/index.html",revision:"38d80b0e2bcb34c9d82bb14ff85a2543"},{url:"category/feature/page/3/index.html",revision:"2d7abd09665c0d88bef17df5bdf116f1"},{url:"category/index.html",revision:"88e05f6779afc7d2ced5b74845f9246c"},{url:"category/instruction/index.html",revision:"0434b976a81f62d9082f81b538bf27a6"},{url:"category/layout/index.html",revision:"881b0416c9848f30acb3699b4f66a27f"},{url:"category/layout/page/2/index.html",revision:"7801156b7192a8e5a14d2c07c2c7df1a"},{url:"category/markdown/index.html",revision:"d5243b4578815a22e2ea05a984f0e3b1"},{url:"config/index.html",revision:"aa151ed4679c725547ae70c7a32b59c8"},{url:"config/page/index.html",revision:"8fb55e1f93ed68c2207bca23b300055a"},{url:"config/plugin/container/index.html",revision:"69b067ea9fb673b39c011c938921adc0"},{url:"config/plugin/copyright/index.html",revision:"6aff7d1fbb219b158b78ab40cf49add7"},{url:"config/plugin/index.html",revision:"8c983776eaa7208168df8093abaa34c0"},{url:"config/stylus/index.html",revision:"708151221242784cad9ffc830c6c3d1d"},{url:"config/theme/apperance/index.html",revision:"7e69b2152bb24e3649d3a792adca6870"},{url:"config/theme/default/index.html",revision:"c29b1c5ab8a19294d2d655cb7e8b2ef1"},{url:"config/theme/feature/index.html",revision:"4000b8570a535ed800e843b9680a184b"},{url:"config/theme/index.html",revision:"f69d76d572791be14803b0c5848e291d"},{url:"config/theme/plugin/index.html",revision:"0886c04cbf70851e6ea4481757f792a7"},{url:"demo/index.html",revision:"6a4852dc6eb90937f58eb2a636b711c8"},{url:"encrypt/index.html",revision:"f0fc877c0a08e5a1eb8082401930b732"},{url:"FAQ/index.html",revision:"0ca8c80e548c7c57c79bb5c1f414ce74"},{url:"guide/feature/blog/index.html",revision:"ae2ae462686c3e235ecd33422639f989"},{url:"guide/feature/comment/index.html",revision:"4604114524192a57e4655b378820f9a8"},{url:"guide/feature/component/index.html",revision:"33a8cd25ed46e996f074dfe627013def"},{url:"guide/feature/encrypt/index.html",revision:"86fe230d22b59b944b8ac48422afafc1"},{url:"guide/feature/icon/index.html",revision:"4cee7f8b398292ac3e4d7aee1132a2cc"},{url:"guide/feature/index.html",revision:"54756326f7d19f6ebdb1992a325045dd"},{url:"guide/feature/markdown/align/index.html",revision:"f2317f15cd3c3caad813046bb87327f4"},{url:"guide/feature/markdown/demo/index.html",revision:"d4818cef245775ec423d4cf30b307ec7"},{url:"guide/feature/markdown/flowchart/index.html",revision:"8396ba5b5c24052a5cab828daeb7df6a"},{url:"guide/feature/markdown/footnote/index.html",revision:"047282a0e86d15ecc9097d11f98d90ae"},{url:"guide/feature/markdown/index.html",revision:"1225312813adf30cc7ee6d827b9f9d2e"},{url:"guide/feature/markdown/mark/index.html",revision:"5e7c8d5d74af667f6e98f09a8360feef"},{url:"guide/feature/markdown/presentation/index.html",revision:"5afd45adba3947e8518c53c5216ef511"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"ae2609f706a548b46eeb0cb323894e34"},{url:"guide/feature/markdown/tex/index.html",revision:"82dd0262e37686d2eb1fba13c82ab0a6"},{url:"guide/feature/page-info/index.html",revision:"b5ddd3579d6598440e9621a74b0d36c4"},{url:"guide/feature/page/index.html",revision:"610ee5d6f7297f1b1736b068e641efdc"},{url:"guide/feature/pwa/index.html",revision:"e0db76027c38b69a9fa960fda4e96893"},{url:"guide/feature/seo-sitemap/index.html",revision:"5f64981ba9d24de0def1155fb0823eaf"},{url:"guide/feature/theme/index.html",revision:"173bf36d87677d6254615e40b98a3ae5"},{url:"guide/feature/typescript/index.html",revision:"6a6d063d0f1fc67e67bf948cb9694fc3"},{url:"guide/index.html",revision:"f780658819707830ce17587a4b41b081"},{url:"guide/install/index.html",revision:"6e9e90eb55dcb41b54d7bea54f8894e1"},{url:"guide/layout/blog/index.html",revision:"979e373e9e0a013055b1175e0707b1ce"},{url:"guide/layout/home/index.html",revision:"a1c3b7f40b6b69afc9436b6bb14b1ade"},{url:"guide/layout/index.html",revision:"dbb3f76ace3b700556008320029fd80d"},{url:"guide/layout/navbar/index.html",revision:"f366c432322111207f89b3848fe124c9"},{url:"guide/layout/page/index.html",revision:"ca40d4a83fb3c0669b8959f068092ae9"},{url:"guide/layout/sidebar/index.html",revision:"7c9a038b33ba26260d75c6feec7da6ad"},{url:"guide/layout/slides/index.html",revision:"2b6e5dee33ecbf70cafec61392e29bb6"},{url:"index.html",revision:"be539e292085964bf08573495882027f"},{url:"slide/index.html",revision:"cffbbacebc0604320a65d9662925df40"},{url:"tag/blog/index.html",revision:"04229f1daaddfa980ff26497d8b66603"},{url:"tag/comment/index.html",revision:"9f40d111c6d960bddc62e1161a4ce0ba"},{url:"tag/components/index.html",revision:"3677223aa3dc555ae433c70f564c2209"},{url:"tag/config/index.html",revision:"6e751f9ae57e66be058b4ea5a41c4ac9"},{url:"tag/config/page/2/index.html",revision:"1580107a5b260b7704fa139808a90970"},{url:"tag/config/page/3/index.html",revision:"5a3a212fc3f3f6c9bf88f75a9a0a46a9"},{url:"tag/emoji/index.html",revision:"29092d5c742b63fd54f2a0a4f3862fc3"},{url:"tag/emoji/page/2/index.html",revision:"e3f3d5a5c9236a702e770695b1883b0a"},{url:"tag/encrypt/index.html",revision:"e3f2a6bf6d0dfbbf386b673e3feea2c5"},{url:"tag/feature/index.html",revision:"8fd6f3310ce55ea3455ef19ff46a14ff"},{url:"tag/feature/page/2/index.html",revision:"14225c2acbbc14b6ae631b94596dc633"},{url:"tag/feature/page/3/index.html",revision:"afc50e0f95e37a6be8aa051360b469ff"},{url:"tag/feature/page/4/index.html",revision:"7d9258a5060a305b2a99c3795553bd62"},{url:"tag/feature/page/5/index.html",revision:"daf6cddf53520ae188785dc19d78a2b0"},{url:"tag/frontmatter/index.html",revision:"f42c9cce018b0288c0ba77f31577d7f9"},{url:"tag/home/index.html",revision:"15840f55e57469f802966668824e55b0"},{url:"tag/icon/index.html",revision:"078549c52128290ff78369242105f954"},{url:"tag/index.html",revision:"c12c6df58ebceb0a0169613b24514ff2"},{url:"tag/intro/index.html",revision:"d5fcab246aee5f6a1d3aaccb3407c885"},{url:"tag/layout/index.html",revision:"e146b0ebd809badd09b18cfd6e42dc0c"},{url:"tag/layout/page/2/index.html",revision:"44c7b474e26fa09ed0b91914687a8a8d"},{url:"tag/markdown/index.html",revision:"08babd4467a66c2cdb1913dc60865e69"},{url:"tag/markdown/page/2/index.html",revision:"ea82bcd9b82869fbdc623e8b235f31bf"},{url:"tag/markdown/page/3/index.html",revision:"ff16b8a8353010463a47f6425819a220"},{url:"tag/markdown/page/4/index.html",revision:"f327481a0cb0588d80f1d40adb00d734"},{url:"tag/navbar/index.html",revision:"89f18495426467ca499cc5acc9038c0c"},{url:"tag/page-info/index.html",revision:"fae46f827b0f82d3c4aa8c944cc46197"},{url:"tag/page/index.html",revision:"bc611bd955544a9ca1f4fe38e6acc6cb"},{url:"tag/plugin/index.html",revision:"bcd75f9a7b3eed05e20976040a0ddb96"},{url:"tag/pwa/index.html",revision:"5ceb7fe0a7ff6ec1e5a44c437b4e1135"},{url:"tag/seo/index.html",revision:"95d5861f970dacf552053ed6aff39a3f"},{url:"tag/sidebar/index.html",revision:"c7836fb5e0ad6d9f931bf7345c068c64"},{url:"tag/sitemap/index.html",revision:"cf57a4f37ce03aff76c3c364a92803eb"},{url:"tag/slides/index.html",revision:"47409eae6c602fc3e76b027947280cd8"},{url:"tag/style/index.html",revision:"b03d8a4d1e0cdf86f139ff0c5d1e2a10"},{url:"tag/themeConfig/index.html",revision:"c2635668529f7d573eb9b5a1575033d2"},{url:"tag/typescript/index.html",revision:"b22fc61634b7e6a9f2aa1f8501cb7b5a"},{url:"tag/vuepress/index.html",revision:"4d14dcaa3d6a569a4f766e0788f14fb9"},{url:"tag/vuepress/page/2/index.html",revision:"e87975c97473f1b4ad66b2a22f85211c"},{url:"timeline/index.html",revision:"2e7274c15c1acd0ab95a90e8d357d413"},{url:"zh/basic/index.html",revision:"fff0dd6111658e3368aa81de66d21ed7"},{url:"zh/basic/markdown/demo/index.html",revision:"18882f0dea291b5a9ecab39898e4acc1"},{url:"zh/basic/markdown/emoji/index.html",revision:"8e495ed19f012eac8a95df8a5b62dfc6"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"725930834157546f4be61839f788a7e3"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"5f828eebbbb79bbbdb1614aa95783218"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"688ec8ee4d879072f95abe0af63ff202"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"623d1f77827cf0ae80725eb8ea119bad"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"051cbc9341764ff59c3aadb0084a64f7"},{url:"zh/basic/markdown/index.html",revision:"840cc8c7ad13a1a04033eeff99c00d93"},{url:"zh/basic/vuepress/case/index.html",revision:"617dad0280e04a09cf23dd53435ef879"},{url:"zh/basic/vuepress/command/index.html",revision:"0bfd56dace880f329f931fe5e8a62df0"},{url:"zh/basic/vuepress/file/index.html",revision:"b23218aa3de60d01418b1e83219d9051"},{url:"zh/basic/vuepress/index.html",revision:"204f41f3adfe45a7d53d692b59858712"},{url:"zh/basic/vuepress/plugin/index.html",revision:"c2208e5e50f68043be74276827099381"},{url:"zh/basic/vuepress/theme/index.html",revision:"7baa00acc85e269051cd8a0b792640fa"},{url:"zh/config/index.html",revision:"26550522969f4578d828f009ecfabff4"},{url:"zh/config/page/index.html",revision:"f54d317d1e653a845ed11f8e18f4e6ee"},{url:"zh/config/plugin/container/index.html",revision:"a4fa69dabc1b8d07813a6d1cd41de0e6"},{url:"zh/config/plugin/copyright/index.html",revision:"0874dd579b7c1f44a953f393127e69fa"},{url:"zh/config/plugin/index.html",revision:"69c8418423c9d82983bf278cfe42065a"},{url:"zh/config/stylus/index.html",revision:"eaaf0b105cb780adb65d5754ca171a8f"},{url:"zh/config/theme/apperance/index.html",revision:"e119bd44a45b39f008f5dbfb43b85a01"},{url:"zh/config/theme/default/index.html",revision:"c9f411996ab9c824a95c9352b7de64b4"},{url:"zh/config/theme/feature/index.html",revision:"50c3940c9495ba3ed78fb58aaf769f8d"},{url:"zh/config/theme/index.html",revision:"1b2c1467ff01f07f9aa449d4b4425f94"},{url:"zh/config/theme/plugin/index.html",revision:"d82e3c59fc3cc5d68f81bc5d90490f58"},{url:"zh/demo/index.html",revision:"13dc3ee74a0714ab8e700f3638e9c0cc"},{url:"zh/FAQ/index.html",revision:"89ddfd3c101d57933b339ae1bee95275"},{url:"zh/guide/feature/blog/index.html",revision:"5ff8789af22fd12a297ed8a8f5a71e5f"},{url:"zh/guide/feature/comment/index.html",revision:"181df41bd22fef1c35d24ec4e1546484"},{url:"zh/guide/feature/component/index.html",revision:"e1be93184c6a9cf77d38e81db6c8f897"},{url:"zh/guide/feature/encrypt/index.html",revision:"21419f9bfeb37b6568d0dcd708c7a39f"},{url:"zh/guide/feature/icon/index.html",revision:"20eb9f3a77bbf9f2799a1d51496e5991"},{url:"zh/guide/feature/index.html",revision:"4982ce5cee119abb6161fe4f74f84992"},{url:"zh/guide/feature/markdown/align/index.html",revision:"e2d96926870411b5595a43a8af9e1965"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"1d732be6e9271ae4a4f1388871b92376"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"cc548e7008f30e89863af8e673a9b26e"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"1a5b94d303a854cd652046a2f469e20b"},{url:"zh/guide/feature/markdown/index.html",revision:"cd30c52e1388ad554c110c4239ab4022"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"d2b96778096aa24ace88561efa3c56db"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"775639b7b53b6d566a87a84b80cbab7f"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"c5a4ab7d33975af9d7b602ae3308dbd9"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"16b93e193568cea34ce2d6f212e2d631"},{url:"zh/guide/feature/page-info/index.html",revision:"79929a6fdb065ff29bb3d1a57cbd760a"},{url:"zh/guide/feature/page/index.html",revision:"97026fed62a26ddc0c476d28e067500a"},{url:"zh/guide/feature/pwa/index.html",revision:"3f59dec21d5f3ce917a5e87a70e58176"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"2fc1e2fc2c6a8122fb1840daceae56b6"},{url:"zh/guide/feature/theme/index.html",revision:"e658125627c5022981d773d985a336f4"},{url:"zh/guide/feature/typescript/index.html",revision:"3cf506b6f6f222487d0704e9c069b9f7"},{url:"zh/guide/index.html",revision:"4c92df09d4f1d39b8ed7524ad15a21f3"},{url:"zh/guide/install/index.html",revision:"4ace5ed43a0da6af3b188e1a2b3102d5"},{url:"zh/guide/layout/blog/index.html",revision:"a4cf310977e5d95475a8619be01da8c9"},{url:"zh/guide/layout/home/index.html",revision:"0071c3a03d194470048c85bbfae09289"},{url:"zh/guide/layout/index.html",revision:"803fe23ea56ce1f466cbee00a7651c11"},{url:"zh/guide/layout/navbar/index.html",revision:"7a77f993ee676b5871a73a473bd69022"},{url:"zh/guide/layout/page/index.html",revision:"4c4e4ae2cbf7d3c5ec4eebb5297baa8f"},{url:"zh/guide/layout/sidebar/index.html",revision:"2b2525a24f5f772a211355508ff35b81"},{url:"zh/guide/layout/slides/index.html",revision:"f5e9c2ca8845d5961eaf6f576ec72bea"},{url:"zh/index.html",revision:"df2e1d8d13f2e47288ce75523abf8541"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.f21437ff.png",revision:"f21437ffbc4b13ab6a451dde8d9dda84"},{url:"assets/img/darkmode.18bf8eef.png",revision:"18bf8eef74622db9ab125f182d0755ed"},{url:"assets/img/darkmode.5a75246b.png",revision:"5a75246b475e9adf13d7aba1ba70b28c"},{url:"assets/img/home.0bba1141.png",revision:"0bba11416a42fe9f9599c96a7adc4dc4"},{url:"assets/img/home.0e77001c.png",revision:"0e77001cd0a6e3ab329791d9331e9f15"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/iconfont-edit.ae032366.png",revision:"ae0323666d64aad8158bc08c9c32f8e5"},{url:"assets/img/iconfont-edit.f701530b.png",revision:"f701530b552bbaacefa45ddaba8aebdd"},{url:"assets/img/iconfont-new.11943023.png",revision:"11943023008a21f03d8899fdbeae4191"},{url:"assets/img/iconfont-new.d38bbd1f.png",revision:"d38bbd1ff33f7eec493ce626552658e2"},{url:"assets/img/slides.30e00024.png",revision:"30e00024078ddaa677a427ffceb322ce"},{url:"assets/img/slides.917fe32d.png",revision:"917fe32d70720a5957c350395234bb54"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
