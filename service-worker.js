if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}}))).then((e=>{const a=d(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.00ab5b22.css",revision:"dbfcf9c112a856fdb27baf65e9ddd8ec"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/128.175e196c.js",revision:"6106c7fdf22c6575968d7c4c836e8237"},{url:"assets/js/129.702b7c31.js",revision:"de6689a7de885830ab3e47e11aeab06d"},{url:"assets/js/130.8c2ecb9d.js",revision:"a5b4601133271d60b092ee66165c1806"},{url:"assets/js/131.142450e3.js",revision:"426d5546af359fe7f6c1de233079cb84"},{url:"assets/js/132.9d7e407b.js",revision:"034d5627b3883beed068d0c838414296"},{url:"assets/js/app.4c78cd89.js",revision:"ec099deb4f9bdb4fb117e5483558d331"},{url:"assets/js/layout-Blog.63db1538.js",revision:"cf2c1d03a8e98d0f5f2642b699952493"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.c646c0a1.js",revision:"f459d2a2006fdc36344dbd00436d7c02"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.34f78afc.js",revision:"2fba5af2760b7e8f98bfc4b1adb64a7d"},{url:"assets/js/layout-Layout.66d2231d.js",revision:"1f4865ca740300c59a1460991fc85d7f"},{url:"assets/js/layout-NotFound.97fd43ff.js",revision:"8e90f9daf666b2a5176492df80a14d1c"},{url:"assets/js/layout-Slide.f8b4725a.js",revision:"17a3a28fdbce71aaa699e240be02b754"},{url:"assets/js/page-AboutVuePress.0c14d9eb.js",revision:"1fde1d78f2819d319fe1455e86456d15"},{url:"assets/js/page-Basic.90ede17f.js",revision:"55e1753974c7b49fbc93ffcb9338ada0"},{url:"assets/js/page-Bloghomepage.2837e703.js",revision:"a2475cc11aafee07395bcd3d21d120bc"},{url:"assets/js/page-Blogrelated.dfa93f8f.js",revision:"2b38b2073ae92320d477a6afa3ac7c26"},{url:"assets/js/page-CodeDemo.1be71adc.js",revision:"81ff7a620c64f92ee2c8498c630c9a19"},{url:"assets/js/page-CommentFunction.75651d7e.js",revision:"ec2b02fa2723187628662093ef54f407"},{url:"assets/js/page-Commonproblems.f2ef7477.js",revision:"600b7611e526e774076c8d8bcc2ee480"},{url:"assets/js/page-Config.32850160.js",revision:"02aaa6a7ca21f9e90430b6f5b3ee4298"},{url:"assets/js/page-Customalignment.d172237a.js",revision:"ee871c2d4bcc36264ea6a306c5ae65e1"},{url:"assets/js/page-DarkmodeandThemecolor.d2bac636.js",revision:"e2ce3621e3541837a41855b5c2a813da"},{url:"assets/js/page-DefaultThemeConfig.b15ac753.js",revision:"b33a482a7b9405c8a06c4f25298e3524"},{url:"assets/js/page-Demos.1c664767.js",revision:"b077921683fa938a31c7803ca762c59a"},{url:"assets/js/page-EmojiList.dc36ed0c.js",revision:"35b210ea59fbb67d1b0b4cddcc61ff31"},{url:"assets/js/page-Emoji列表.6decf878.js",revision:"2a9e00e0acf0b36849ccb050fc24d3f0"},{url:"assets/js/page-Encryptionfunction.327f3db5.js",revision:"d35235e6948aa6ca4c8017521bd2e0aa"},{url:"assets/js/page-FeedSupport.3af766eb.js",revision:"c24b187ad0ed1ae63e0cf26302a5f2a3"},{url:"assets/js/page-Feed支持.6eedca1f.js",revision:"46248721ec7656174e93d95b053cc980"},{url:"assets/js/page-FileStructure.e4ee8426.js",revision:"7037bd065fbc7cf0c2634da8cb6b9a2a"},{url:"assets/js/page-Flowchart.59411b04.js",revision:"7a0abbf6e818b1926e3283961cd2aab3"},{url:"assets/js/page-Footnote.97ac472e.js",revision:"6a6a99a4597304836933b3410f5c1a21"},{url:"assets/js/page-HomePage.5f7088c4.js",revision:"5981e90a8d31e8642d1328f033fe48db"},{url:"assets/js/page-Iconsupport.79fd3760.js",revision:"2b29ebdfca0aeae70b0aae090ceb7cb9"},{url:"assets/js/page-InstallUsage.be5ee611.js",revision:"8bd5f43c58ee2354df16634797041b00"},{url:"assets/js/page-Introduction.7e4a75c9.js",revision:"4378869e10f0ab90cebf03f815c4f31e"},{url:"assets/js/page-Layout.31277c1d.js",revision:"2d98b4ae2e3d31dd1ca649221a2b6f47"},{url:"assets/js/page-MarkdownDEMO.bba44181.js",revision:"73d9d8e3ec90c37631d6212d5a798ed0"},{url:"assets/js/page-MarkdownEnhance.205301e6.js",revision:"6a90e1aee90e1097a85a0564d35e5460"},{url:"assets/js/page-MarkdownIntroduction.a621ecfb.js",revision:"f26e6a15544e73361594cda5f7e51459"},{url:"assets/js/page-Markdown介绍.349d31aa.js",revision:"0c775817bc8255fb2a66dafcbf83ceff"},{url:"assets/js/page-Markdown增强.25333543.js",revision:"0f8d1261d30a2ce5b87372304e210d54"},{url:"assets/js/page-Markdown示例.26253493.js",revision:"80c36f12d055a21af65d69f13f74fbe3"},{url:"assets/js/page-Markup.61c731b0.js",revision:"afea7ff01525e1b6b89e3c0c09b4a7e6"},{url:"assets/js/page-Nature.9527a6b8.js",revision:"5c1607fc89cafa20ee4ab16fbeb31772"},{url:"assets/js/page-NavBar.b524195d.js",revision:"6d6b36f31b6d8bb681eeb94628fddea7"},{url:"assets/js/page-NewComponent.84b69c73.js",revision:"266e6623dc986cb5cd1f5b69069302be"},{url:"assets/js/page-Newfeature.3facb8ca.js",revision:"e0c817b4189b3b4429e10cd301bf3852"},{url:"assets/js/page-Object.daa64062.js",revision:"32a518789c691a240a9264e3403cb593"},{url:"assets/js/page-Page.0024ebcf.js",revision:"f9ad16eedfeeabb553bf9af7e978b5e3"},{url:"assets/js/page-PageConfig.0516a10c.js",revision:"def59e82caea29ad2e31fb90ea029915"},{url:"assets/js/page-PageEnhance.4915b319.js",revision:"54435e58da1a454f775177025af74538"},{url:"assets/js/page-Pageinformation.0f61fe28.js",revision:"a9cd7bda39db0b472792441b9c962314"},{url:"assets/js/page-People.b39c017d.js",revision:"853cf59a404eacd41b5023ee4b3ecd80"},{url:"assets/js/page-Place.bc7847e6.js",revision:"2b54a024bbc1c20ef5db07da376636d7"},{url:"assets/js/page-PluginDescription.46db06c7.js",revision:"7ff2618635917df17d126c9ad7f85c2b"},{url:"assets/js/page-Plugins.647e93fc.js",revision:"8742badedabc737533b88be1c47e7e8b"},{url:"assets/js/page-Presentationsupport.c03987e6.js",revision:"71fbe1b46d4c3bcbbf5a68a37fb9fda0"},{url:"assets/js/page-PWA.1f2bfc91.js",revision:"23d2b010cf6827261095a17351298727"},{url:"assets/js/page-SEOandSitemap.9967425a.js",revision:"6fbc1454b2bf5eb21e4cccb3729d3f36"},{url:"assets/js/page-SEO和Sitemap.96ae3970.js",revision:"78e065f643437875d327efb1f004cf1f"},{url:"assets/js/page-Sidebar.d86a0778.js",revision:"f5a273d2a055a90c2cca7660898f0fbd"},{url:"assets/js/page-Slide.8365b871.js",revision:"c4adb35dded37077ccd82b097ee9747c"},{url:"assets/js/page-Stylusconfig.51b56d64.js",revision:"96516d02ef40e766df04e1c5f8236eeb"},{url:"assets/js/page-Stylus配置.b2c5b4fe.js",revision:"23a48ca0ac9970303579d17103869289"},{url:"assets/js/page-SuperscriptandSubscript.20bb3645.js",revision:"26bd259a1bda49d5c93717217717cfc0"},{url:"assets/js/page-Symbol.afcd647b.js",revision:"10974050cbe18cc9039024f2528a78a8"},{url:"assets/js/page-TexSupport.2ead3e48.js",revision:"0ac08270c71bbe11047babd7b701066b"},{url:"assets/js/page-Tex语法支持.6a4b33d6.js",revision:"b0df35439894ba54f8d30f460217ab1b"},{url:"assets/js/page-ThemeConfig.68a31a87.js",revision:"754fced4f8827c2b691f2a8ca9df83ca"},{url:"assets/js/page-ThemeFeatureConfig.60aa5b13.js",revision:"2232310bc96554319e0acdfd374d6864"},{url:"assets/js/page-ThemeLayoutConfig.4026e6b3.js",revision:"3ac092401436b9d4b54747f2e52c9190"},{url:"assets/js/page-ThemePluginConfig.c4629a58.js",revision:"eaa04a37cbae234e10c72cbe518ba714"},{url:"assets/js/page-TSsupport.441ed302.js",revision:"bbd3a24590d8437a16c265978aee4b0c"},{url:"assets/js/page-TS支持.b25963ab.js",revision:"5d062a2b62253148df79a031d7b1da85"},{url:"assets/js/page-vuepress-plugin-container.e82623f5.js",revision:"57914779f1e33c342dce9230669b0527"},{url:"assets/js/page-vuepress-plugin-copyright.5dd9c979.js",revision:"f846ee0fa12d7d8392f4290baf60e494"},{url:"assets/js/page-vuepress-theme-hope.45a65dcf.js",revision:"3b454f2b20e0f457842afbb8b764a7f5"},{url:"assets/js/page-VuePress.a5ad1961.js",revision:"81b1cc141cf00c2b775a6a62b528a32b"},{url:"assets/js/page-VuePressCases.a322c3fa.js",revision:"21f56fd33ebe118b7986453dc0a10a6a"},{url:"assets/js/page-VuePresscommands.16310afd.js",revision:"3b63d0078a71a07bc25337275e931d34"},{url:"assets/js/page-VuePress案例.411798c9.js",revision:"e92dbb43dc1899c96119c45e760ed5db"},{url:"assets/js/page-上下角标.1b745ac2.js",revision:"67dbc46db579c24572f79a4b0cd82907"},{url:"assets/js/page-主题功能配置.9b76ea45.js",revision:"f5a9a198397bc684c8d83b3fda517947"},{url:"assets/js/page-主题布局配置.2c01d492.js",revision:"7120bb72cb673d0daa2b9c93b25bd21b"},{url:"assets/js/page-主题插件配置.09a98d0b.js",revision:"cc988f3a5135ffc865044e1df4cf070c"},{url:"assets/js/page-主题配置.138917cd.js",revision:"efc86d49f3294b28373dbf29ccb84d85"},{url:"assets/js/page-人物.b29fc68d.js",revision:"90a0839fd3e316e435d78ab38a87ff68"},{url:"assets/js/page-介绍.98c1a3a8.js",revision:"71fb13cef090e0906f1abe91768191dd"},{url:"assets/js/page-代码演示.4f739105.js",revision:"a16692d8bb84882e4236bbddffaa6473"},{url:"assets/js/page-侧边栏.13506357.js",revision:"5fd2e95307dfb6d7bb365c6112e6a657"},{url:"assets/js/page-加密功能.7be89412.js",revision:"ea391afa2dfeb71693cb6789c7adcad9"},{url:"assets/js/page-博客相关.bfe3bcd4.js",revision:"a7a942b2a89b89103dc9a14f4821094f"},{url:"assets/js/page-博客首页.eb38bc1e.js",revision:"0362176a02bd5be7554b8b78d97650a3"},{url:"assets/js/page-图标支持.2397de8e.js",revision:"fb97373831e20015640aef99e2e84d04"},{url:"assets/js/page-地点.5594adc3.js",revision:"e016c96b3a02c3803358a152122747c9"},{url:"assets/js/page-基础知识.d23851b0.js",revision:"b858aa0e54aaa36e5d7011aff421a4b7"},{url:"assets/js/page-安装使用.61ee4702.js",revision:"ef875109031b8aa725d84fb389ec95c2"},{url:"assets/js/page-对象.c49b58b5.js",revision:"f3dd13d5ee0a3d21457b76f2a5e93ab4"},{url:"assets/js/page-导航栏.c312098f.js",revision:"5b6fa6755287513d6048d67cf2dc9ddf"},{url:"assets/js/page-布局.f741fb6e.js",revision:"830b6f7688d71ae7ccf29527eef9422d"},{url:"assets/js/page-常见问题.04d89ce3.js",revision:"da25d0cf99ce689fb5b05e0cea9dda64"},{url:"assets/js/page-幻灯片.fe878464.js",revision:"f0926b6858965ad4acdcc66399e4d0ba"},{url:"assets/js/page-幻灯片支持.07dae88e.js",revision:"4e7ca04142066e0d3b1a2639a8f63a67"},{url:"assets/js/page-插件.f691096e.js",revision:"e9135893f7b8d987558156c13f77f865"},{url:"assets/js/page-插件说明.1a87de3a.js",revision:"7e4133128002e4206eb483e2fd451896"},{url:"assets/js/page-文件结构介绍.a72bd189.js",revision:"17c0b194765d6215a6b3c81e8d17f176"},{url:"assets/js/page-新增特性.de516eb5.js",revision:"2355d9732c434db3e04ca7483fbbf444"},{url:"assets/js/page-新增组件.283ca93e.js",revision:"8395bbbfe027a24ffbf9df833f1bc18c"},{url:"assets/js/page-标记.ae9823f6.js",revision:"358c953657d73044fa920888fd68ca59"},{url:"assets/js/page-流程图支持.58742f75.js",revision:"fde500f192fe94d50ec6e9720763fbd6"},{url:"assets/js/page-深色模式与主题色.2c6c4ff4.js",revision:"3f80e1f586b405cb9878f341fc5bc16b"},{url:"assets/js/page-符号.91113a43.js",revision:"b981d7db61ad9d1b516a78874773faae"},{url:"assets/js/page-脚注.5b878896.js",revision:"88bc209c6be2f3bed0a828998ff85761"},{url:"assets/js/page-自定义对齐.2f7ec8c2.js",revision:"7b95cd3398a3c31b051e60c2bc8796aa"},{url:"assets/js/page-自然.49edcf7a.js",revision:"a3cbef1b13a57d1ee6c16bcfd87bdac0"},{url:"assets/js/page-评论功能.3cc52c5b.js",revision:"ae591a444afbd138d491ff38e316124d"},{url:"assets/js/page-配置.ae18e0ae.js",revision:"35f76ba17709c25f9905017f7fe0e946"},{url:"assets/js/page-页面.4dd93baf.js",revision:"dc230630ef5b555e6eca615cea789398"},{url:"assets/js/page-页面信息.50a3297e.js",revision:"625177d5864646936076bb786a5b45d9"},{url:"assets/js/page-页面增强.1b99a1a8.js",revision:"a74a2031fd8f1288dcb28ffe07b9de93"},{url:"assets/js/page-页面配置.ed2f21d9.js",revision:"a00eff3661a52b649a586141c1309161"},{url:"assets/js/page-项目指令.85b6ba43.js",revision:"49a6d6ef009d92ed9c5eab9d3155ec51"},{url:"assets/js/page-项目案例.0c9b0f72.js",revision:"dc295ac92db751b06505f4508a87a85f"},{url:"assets/js/page-首页.b60ec817.js",revision:"fbe04c80c5eccf57fc4f2cab3e2358cf"},{url:"assets/js/page-默认主题配置.bb5e3a15.js",revision:"0e989b303977f7f52d77e2c662c11f85"},{url:"assets/js/vendors~docsearch.b53e86b6.js",revision:"1e97e10c716a4cbd12e850abb666f787"},{url:"assets/js/vendors~flowchart.6a95c3e1.js",revision:"01d7833ddcf9aef34d0359589c43a010"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4cb64c3b.js",revision:"fc26a4fa5bf952049c0438fbad9766c5"},{url:"assets/js/vendors~photo-swipe.955be982.js",revision:"e9e088b39d45c8190cafc4de5b16e45d"},{url:"assets/js/vendors~reveal.646f9d80.js",revision:"ad15007284ff32624d41c9548e0018f2"},{url:"assets/js/vendors~valine.8a25d652.js",revision:"f9428e91a8d094c983ce3c3de76d4256"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"c14bb2d4cb8e3fd02035b2a08d218e1a"},{url:"article/index.html",revision:"813fcb739c9464f0157754f1bef646f5"},{url:"basic/index.html",revision:"b70010cae71cc3b86c6362d61126fb77"},{url:"basic/markdown/demo/index.html",revision:"8eed26bcdf47ae07efb21ef6b34b1139"},{url:"basic/markdown/emoji/index.html",revision:"3b06321b2f08ce7eb7ca5b4453063dbe"},{url:"basic/markdown/emoji/nature/index.html",revision:"acbc3668ade2e3bf74d958360ffaf30e"},{url:"basic/markdown/emoji/object/index.html",revision:"287af348582375a8bfc666b82069bf75"},{url:"basic/markdown/emoji/people/index.html",revision:"ee967d58b82bef66662c51cb9271b050"},{url:"basic/markdown/emoji/place/index.html",revision:"ef3cd9596451abda37110085081993bd"},{url:"basic/markdown/emoji/symbol/index.html",revision:"d4010d2ef6322ea814cef9e7a474eaf3"},{url:"basic/markdown/index.html",revision:"c765e2339510a7ded89cc9c906c11277"},{url:"basic/vuepress/case/index.html",revision:"a7b272ca7675b5f128bd3a4519253c68"},{url:"basic/vuepress/command/index.html",revision:"4d464803a45013a5ab47f38b9430bf9a"},{url:"basic/vuepress/file/index.html",revision:"460fa48a244e01c085dd96236985512d"},{url:"basic/vuepress/index.html",revision:"3c441b5e6b2bae43c0b258a479dfa8d5"},{url:"basic/vuepress/plugin/index.html",revision:"c1d7d0cec239b80fc5543141d5ca0638"},{url:"basic/vuepress/theme/index.html",revision:"c909b5f93c8f3c4bf6e018e8335a0edf"},{url:"category/basic/index.html",revision:"711612359dae584e5f50277be33ddcd2"},{url:"category/basic/page/2/index.html",revision:"d5920a818bd0e9867473058ff5c36eaa"},{url:"category/basic/page/3/index.html",revision:"76d4be123b14c93bcf42ad256614b9de"},{url:"category/config/index.html",revision:"eb761f5d79637cc8df9d57b12e6ecf8d"},{url:"category/config/page/2/index.html",revision:"c5089ed84b147579ded69a13f1165304"},{url:"category/config/page/3/index.html",revision:"59b45b25c1fc87b4d11246b7da519f55"},{url:"category/demo/index.html",revision:"6c927296b9022c1cfbe1ac9ec812df40"},{url:"category/FAQ/index.html",revision:"c4bc2d9bff86b1084e9114478787018a"},{url:"category/feature/index.html",revision:"f4918e3b190f2521e727abdd30c18b58"},{url:"category/feature/page/2/index.html",revision:"36b08f7b11c458a8e95e2ea97f8b1143"},{url:"category/feature/page/3/index.html",revision:"c0b4461582f993675721c12049d47dfd"},{url:"category/index.html",revision:"bcfbe5303ea2398e00ceaa22cf9b17d7"},{url:"category/instruction/index.html",revision:"7d3d3097f54b5e43aa82c41c9e323561"},{url:"category/layout/index.html",revision:"264a7063d43eeaaceca6054a6a12ca74"},{url:"category/layout/page/2/index.html",revision:"b6be5684155db2140eb4c5fb10c1006d"},{url:"category/markdown/index.html",revision:"b0d7e1134e66cb6a879153a30f110b34"},{url:"config/index.html",revision:"7b8dc97abdfcd877ebc4db42579cb439"},{url:"config/page/index.html",revision:"1a56f6151759bf14ce47e38522faf5bd"},{url:"config/plugin/container/index.html",revision:"76fd4019937e8b6deca08ba79b6a2b67"},{url:"config/plugin/copyright/index.html",revision:"d4da12af593a5e3a264ec90a84680c57"},{url:"config/plugin/index.html",revision:"997869df7d2dc6708da44aa7410a05d3"},{url:"config/stylus/index.html",revision:"984e57b01351a63ceb52ba2213fc6c59"},{url:"config/theme/apperance/index.html",revision:"8a7327f7aa52dd65109a57ecfcded589"},{url:"config/theme/default/index.html",revision:"3771b45a32d43adde535598d55a3ce22"},{url:"config/theme/feature/index.html",revision:"dd5bc676ea178d827b8b8ed3db005de5"},{url:"config/theme/index.html",revision:"d66e26b17049fd2d7ef6d677038f8095"},{url:"config/theme/plugin/index.html",revision:"aa85a60c4e0a21f7c482d22505a6f8b4"},{url:"demo/index.html",revision:"39d76c80c7098b597b7fcc729160edc9"},{url:"encrypt/index.html",revision:"fcc45345f4534621443ffd62520f74ad"},{url:"FAQ/index.html",revision:"97ce280724e4a8b82415e212babc20a3"},{url:"guide/feature/blog/index.html",revision:"0526c73cf12ce0af036d6c7704388599"},{url:"guide/feature/comment/index.html",revision:"7a1854ac1c2e1b27e4547e5f9d1228ee"},{url:"guide/feature/component/index.html",revision:"e1c3db53e566464f1f1de92195ea52d9"},{url:"guide/feature/encrypt/index.html",revision:"3447f565e5e21379f9b77f5bd47a64d0"},{url:"guide/feature/feed/index.html",revision:"13bf2f85e3d851a46192e8288d93b2ab"},{url:"guide/feature/icon/index.html",revision:"be1ec5bdc5b91c2a99a48dbd9d2a9646"},{url:"guide/feature/index.html",revision:"28636e487977f3ca18c63cd17f145c75"},{url:"guide/feature/markdown/align/index.html",revision:"d763169486b91af93ceafc602d54954b"},{url:"guide/feature/markdown/demo/index.html",revision:"8a80d57557e16afe74d763e09a539f71"},{url:"guide/feature/markdown/flowchart/index.html",revision:"567a61adc637fe8cb2f7be5b62230977"},{url:"guide/feature/markdown/footnote/index.html",revision:"0c8a284a29dd4dc06bc24bcaf0785de8"},{url:"guide/feature/markdown/index.html",revision:"59fac843a2de0b2052649713311b52b8"},{url:"guide/feature/markdown/mark/index.html",revision:"76fb6ba2cfab96dffad4fb4bd52219ba"},{url:"guide/feature/markdown/presentation/index.html",revision:"0dc03f637348c76a8e292c7e7b0d7dcc"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"80130f6f3a6ea15343a2c260115c8e34"},{url:"guide/feature/markdown/tex/index.html",revision:"9052960ea9d7e75c420abe9594a4660a"},{url:"guide/feature/page-info/index.html",revision:"9e391d2841cfdc5577222b60a7f18e84"},{url:"guide/feature/page/index.html",revision:"43e5e31db787af6b7d7dd445102ab0e6"},{url:"guide/feature/pwa/index.html",revision:"6ceb2519f350c8961ebc67e6db67d815"},{url:"guide/feature/seo-sitemap/index.html",revision:"6cd58c5d63a405ddc203e2dd0b56e029"},{url:"guide/feature/theme/index.html",revision:"f2eed8632c000a7ac63897fa687b5780"},{url:"guide/feature/typescript/index.html",revision:"b7141c31e383544d1182dbf2a0a22056"},{url:"guide/index.html",revision:"e188f02eb0b12019ea2e5695afd79bb4"},{url:"guide/install/index.html",revision:"d802f70e09f6649f1be5112226c82dcd"},{url:"guide/layout/blog/index.html",revision:"5ce114239e1fcf9a318dfec27a6abc1d"},{url:"guide/layout/home/index.html",revision:"b19402ff88cd358da99c07fd0f1d6a43"},{url:"guide/layout/index.html",revision:"665abcc2d1fc14d0996eb9d830b07aa2"},{url:"guide/layout/navbar/index.html",revision:"655c7cb3d70ac76f9df4dae03878dc09"},{url:"guide/layout/page/index.html",revision:"6ae7c1c46f8325ca872e9b1428adb175"},{url:"guide/layout/sidebar/index.html",revision:"28ecfad98813e887beef39ba224ae6b8"},{url:"guide/layout/slides/index.html",revision:"6c8439dee108520aa22bbea22b165dba"},{url:"index.html",revision:"7e412233ef192ab0238fa4ef40c38226"},{url:"slide/index.html",revision:"3f3048ff1ea46958a1c1c2065073ae77"},{url:"tag/blog/index.html",revision:"f15fffe85f86de03490335b87dc21a62"},{url:"tag/comment/index.html",revision:"ee51652965f52ff7d925f0a078901661"},{url:"tag/components/index.html",revision:"4c7e9bb4384d703a200805036d769856"},{url:"tag/config/index.html",revision:"fa34ebe690e5946c83e5ca1ff16c9925"},{url:"tag/config/page/2/index.html",revision:"02bc8e72627e08ad12059d73486494f0"},{url:"tag/config/page/3/index.html",revision:"c1cd69a73e4987eb6f208c3eaa3ae50b"},{url:"tag/emoji/index.html",revision:"fbf2eafdba13f14ef1f64812b8e11c43"},{url:"tag/emoji/page/2/index.html",revision:"511d3f31ca9e315cd7d78673a6b25b37"},{url:"tag/encrypt/index.html",revision:"79b14856359669f2901a74395907318a"},{url:"tag/feature/index.html",revision:"f691d26c8a6594e97d74f2e577e4789b"},{url:"tag/feature/page/2/index.html",revision:"9e13fcdfb7b421918e7900e756f21970"},{url:"tag/feature/page/3/index.html",revision:"494241b500347510d80e8f145c14b000"},{url:"tag/feature/page/4/index.html",revision:"8279e7403257a51e6ee57226a7774d27"},{url:"tag/feature/page/5/index.html",revision:"d1da3b65808b4506a49789221b6021f3"},{url:"tag/feed/index.html",revision:"c8102cd15ee721446dc386dfec976fcb"},{url:"tag/frontmatter/index.html",revision:"63fa870986c1506424ec6132c905e6b1"},{url:"tag/home/index.html",revision:"72b155dac9846e8efc133e3dcd9a3102"},{url:"tag/icon/index.html",revision:"11f7b31d44150037ae0e121576a96532"},{url:"tag/index.html",revision:"85285ee408d41ae98c0cc92dae95e161"},{url:"tag/intro/index.html",revision:"d407bf836964229bce63ae62ec095527"},{url:"tag/layout/index.html",revision:"33060b2e2799772d3edfd8f3f3807f4d"},{url:"tag/layout/page/2/index.html",revision:"754509086595c0b3f214be01ca1c1d0a"},{url:"tag/markdown/index.html",revision:"621dedbbad2b4a53af2c5de15451d42a"},{url:"tag/markdown/page/2/index.html",revision:"58655288b0f0bdab779ca3bb5209974d"},{url:"tag/markdown/page/3/index.html",revision:"2a9bed7c14e46e71a15da0f692f9432d"},{url:"tag/markdown/page/4/index.html",revision:"655adb689be821c9fbf4144e9f898cc9"},{url:"tag/navbar/index.html",revision:"cf76969204d960e85a3e2002722d6112"},{url:"tag/page-info/index.html",revision:"2f4b25dd0f01a67769cb57ff3915a5ce"},{url:"tag/page/index.html",revision:"52593bddba8f7d80d10b08921cd97441"},{url:"tag/plugin/index.html",revision:"0df657ba9068a5b1b9e8240862893f9d"},{url:"tag/pwa/index.html",revision:"4ad67cc69783522144864a04aa377579"},{url:"tag/seo/index.html",revision:"131f450eba45de4d30a8b8ef82cd6932"},{url:"tag/sidebar/index.html",revision:"368d57e0f9d10b4a17c273342c559171"},{url:"tag/sitemap/index.html",revision:"f23be2c069ed041d27da53e89a7282a8"},{url:"tag/slides/index.html",revision:"aa123885029a255b7c28363b6aef579d"},{url:"tag/style/index.html",revision:"b4674f6e1c36132b2f478509db2cbdc2"},{url:"tag/themeConfig/index.html",revision:"28ad3acfdece678329dbbbbbba9fb2d8"},{url:"tag/typescript/index.html",revision:"82008799e94f31bf5c19af9fd08aa7b3"},{url:"tag/vuepress/index.html",revision:"55f879e8692ac89de5a7691dfd18f1a8"},{url:"tag/vuepress/page/2/index.html",revision:"033be6af33845d02155aac5d460c17c5"},{url:"timeline/index.html",revision:"3b5e4697dc27b3902846cf887a3e4f47"},{url:"zh/basic/index.html",revision:"689f229d8addf3a46fb3226e678153ef"},{url:"zh/basic/markdown/demo/index.html",revision:"61aa0d9bbed6f676f81e854fc40ed645"},{url:"zh/basic/markdown/emoji/index.html",revision:"b96ca82a1200c48f0fb4c03f93956371"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"2b3d0e8a7143e07cc10fdab55c76c64d"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"99282ca1ccf4c7a109464629f9f7f965"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"1e56f481e911408ccebf0ca0d2073c1a"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"fd8418f515c8ee7e6a61c085208e4015"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"337aa7bfee79b219f32419f668df1911"},{url:"zh/basic/markdown/index.html",revision:"4a1f4a0c67262d577d45daba9ca6acb2"},{url:"zh/basic/vuepress/case/index.html",revision:"a79b2a0b60bc5e2368e5a7de49377d93"},{url:"zh/basic/vuepress/command/index.html",revision:"c0e05b5f4e87ba344f54123767716c76"},{url:"zh/basic/vuepress/file/index.html",revision:"9520fd6186eb5292faa2394f8de0697f"},{url:"zh/basic/vuepress/index.html",revision:"a705f09fd0b42d051d7277143bea4db2"},{url:"zh/basic/vuepress/plugin/index.html",revision:"425187c142e21058298f32fb26ac74bf"},{url:"zh/basic/vuepress/theme/index.html",revision:"af87e8d4b0d4967a2c0ad38e865f36d2"},{url:"zh/config/index.html",revision:"12b8a8ed399de75efbcb4d8208c2429e"},{url:"zh/config/page/index.html",revision:"eae893a0d06299897b693ce07388083a"},{url:"zh/config/plugin/container/index.html",revision:"3d52b7469a5efa52280bb7992dcd9f8b"},{url:"zh/config/plugin/copyright/index.html",revision:"2433471e447efe942b7c12e77b13adeb"},{url:"zh/config/plugin/index.html",revision:"0f83b5d351b3099529f2a801b24a3c76"},{url:"zh/config/stylus/index.html",revision:"f0b6a8405d81147dbd2c04bf243ad577"},{url:"zh/config/theme/apperance/index.html",revision:"768c1cbdd651b7c541caa89c0d9d277b"},{url:"zh/config/theme/default/index.html",revision:"e5b1f31f08d190714f6eae047ffc977c"},{url:"zh/config/theme/feature/index.html",revision:"98dac24bb61336c91e968627c26dcfd4"},{url:"zh/config/theme/index.html",revision:"8804e7f60994d1dc94dc97f6f3138ee1"},{url:"zh/config/theme/plugin/index.html",revision:"b00cd651448b685736365a876ba45909"},{url:"zh/demo/index.html",revision:"488c3ade86608dc0964e1276f8e64ba3"},{url:"zh/FAQ/index.html",revision:"409a6a76a56d270bed481369999d4b30"},{url:"zh/guide/feature/blog/index.html",revision:"1eca05f19dc30ac663a12cf93c620472"},{url:"zh/guide/feature/comment/index.html",revision:"63c950b535e42873bae103d1bab02132"},{url:"zh/guide/feature/component/index.html",revision:"fedcc2751e5c2789df7b122d771ef171"},{url:"zh/guide/feature/encrypt/index.html",revision:"ea47d60919e5b1a58b93db3924dcbc11"},{url:"zh/guide/feature/feed/index.html",revision:"be0761b9739c3522367e98e82eeb5eca"},{url:"zh/guide/feature/icon/index.html",revision:"e54deaabfdd0d36549efddbf27a2c164"},{url:"zh/guide/feature/index.html",revision:"0bea14d38a14e7316aba2727fea54f28"},{url:"zh/guide/feature/markdown/align/index.html",revision:"53f8589409c6608733586c9656e903a5"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"b6d07b50cf3194681c2febca4bdc6991"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"b962a386f50f31476cb33fed91680ceb"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"2f9bb81e7d4684c94820adaf3e00b5b2"},{url:"zh/guide/feature/markdown/index.html",revision:"747ccc00db67e8066a7e4a253b28f73a"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"5f0221d3f29fb25933e847c3fd9af835"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"eecd4f2b7fe24a6c0db2f6fa8ac58b0e"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"4c4f2a3801b5da0cdbb127b982df8d60"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"85c6296c0208d33b74d4fb03665b705e"},{url:"zh/guide/feature/page-info/index.html",revision:"0a9ad271fde152973eee4f3b4ec1d367"},{url:"zh/guide/feature/page/index.html",revision:"81fdda7ed56cb458f2896889c992fe3d"},{url:"zh/guide/feature/pwa/index.html",revision:"62c69bbc499c3ee2aee1ad5fe54d098a"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"095b5bb58b31a554cab1a516e8f97037"},{url:"zh/guide/feature/theme/index.html",revision:"09b866f4eb6a324d17131e75e766c3c3"},{url:"zh/guide/feature/typescript/index.html",revision:"1769a774215adb473e6b1e68148f8a7f"},{url:"zh/guide/index.html",revision:"1498e3e6763ee05e1acbeea444977a01"},{url:"zh/guide/install/index.html",revision:"4842f43c67300cda279ddf2a2cfdb8d0"},{url:"zh/guide/layout/blog/index.html",revision:"8573df5f585cc881b9269f8148a069d2"},{url:"zh/guide/layout/home/index.html",revision:"ac085746f57e36615fa0033d8e9beed2"},{url:"zh/guide/layout/index.html",revision:"fe50609067f4e39245e3c9959b7d7589"},{url:"zh/guide/layout/navbar/index.html",revision:"3403d34bfa2d42a2921748dd8458c5f5"},{url:"zh/guide/layout/page/index.html",revision:"011707b1dc3669f2fbd2111a2c4caaac"},{url:"zh/guide/layout/sidebar/index.html",revision:"fe8ad697934f7cd850d7a56a90417b98"},{url:"zh/guide/layout/slides/index.html",revision:"0d04133782f14b0c000c01498198537b"},{url:"zh/index.html",revision:"445bf07d39fd55bb560da0487b5bb7a9"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.c3dc68c7.png",revision:"c3dc68c733676095a82cf811b2ee4f97"},{url:"assets/img/darkmode.49bdcce2.png",revision:"49bdcce283cf45658b2f14dd59581194"},{url:"assets/img/darkmode.f4b38a9a.png",revision:"f4b38a9a3c54865f430513351d683b7c"},{url:"assets/img/home.41b92bac.png",revision:"41b92bacb4e514c1a9dd0416542292fb"},{url:"assets/img/home.b0fc3313.png",revision:"b0fc3313e9b47b58bb3149a37176fdb5"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/iconfont-edit.576a16be.png",revision:"576a16be27110e8e710442bbc8f98416"},{url:"assets/img/iconfont-edit.ae174b67.png",revision:"ae174b67620849ac9aebf32ab1dcf9a2"},{url:"assets/img/iconfont-new.10965ce6.png",revision:"10965ce685dd8be3bc8a2898be737970"},{url:"assets/img/slides.1194fc70.png",revision:"1194fc70c2e81246453d8fdd819cab6e"},{url:"assets/img/slides.72c24f1c.png",revision:"72c24f1c815dcaca94bbc1cb45238d82"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
