if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}}))).then((e=>{const a=d(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.00ab5b22.css",revision:"dbfcf9c112a856fdb27baf65e9ddd8ec"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/128.175e196c.js",revision:"6106c7fdf22c6575968d7c4c836e8237"},{url:"assets/js/129.702b7c31.js",revision:"de6689a7de885830ab3e47e11aeab06d"},{url:"assets/js/130.8c2ecb9d.js",revision:"a5b4601133271d60b092ee66165c1806"},{url:"assets/js/131.142450e3.js",revision:"426d5546af359fe7f6c1de233079cb84"},{url:"assets/js/132.9d7e407b.js",revision:"034d5627b3883beed068d0c838414296"},{url:"assets/js/app.f32b60f4.js",revision:"945902c08eefffe687066d94975e29b5"},{url:"assets/js/layout-Blog.63db1538.js",revision:"cf2c1d03a8e98d0f5f2642b699952493"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.c646c0a1.js",revision:"f459d2a2006fdc36344dbd00436d7c02"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.34f78afc.js",revision:"2fba5af2760b7e8f98bfc4b1adb64a7d"},{url:"assets/js/layout-Layout.66d2231d.js",revision:"1f4865ca740300c59a1460991fc85d7f"},{url:"assets/js/layout-NotFound.97fd43ff.js",revision:"8e90f9daf666b2a5176492df80a14d1c"},{url:"assets/js/layout-Slide.f8b4725a.js",revision:"17a3a28fdbce71aaa699e240be02b754"},{url:"assets/js/page-AboutVuePress.0c14d9eb.js",revision:"1fde1d78f2819d319fe1455e86456d15"},{url:"assets/js/page-Basic.90ede17f.js",revision:"55e1753974c7b49fbc93ffcb9338ada0"},{url:"assets/js/page-Bloghomepage.7218f77d.js",revision:"655ff2dd3030a1ad6cc0b7d7bf7a8255"},{url:"assets/js/page-Blogrelated.ea77013f.js",revision:"7f853ed3f7605097238df2bcd74858be"},{url:"assets/js/page-CodeDemo.1be71adc.js",revision:"81ff7a620c64f92ee2c8498c630c9a19"},{url:"assets/js/page-CommentFunction.75651d7e.js",revision:"ec2b02fa2723187628662093ef54f407"},{url:"assets/js/page-Commonproblems.f2ef7477.js",revision:"600b7611e526e774076c8d8bcc2ee480"},{url:"assets/js/page-Config.32850160.js",revision:"02aaa6a7ca21f9e90430b6f5b3ee4298"},{url:"assets/js/page-Customalignment.d172237a.js",revision:"ee871c2d4bcc36264ea6a306c5ae65e1"},{url:"assets/js/page-DarkmodeandThemecolor.182695c1.js",revision:"6df4b0246df8e58bec8e2d0950b2c6dc"},{url:"assets/js/page-DefaultThemeConfig.b15ac753.js",revision:"b33a482a7b9405c8a06c4f25298e3524"},{url:"assets/js/page-Demos.1c664767.js",revision:"b077921683fa938a31c7803ca762c59a"},{url:"assets/js/page-EmojiList.dc36ed0c.js",revision:"35b210ea59fbb67d1b0b4cddcc61ff31"},{url:"assets/js/page-Emoji列表.6decf878.js",revision:"2a9e00e0acf0b36849ccb050fc24d3f0"},{url:"assets/js/page-Encryptionfunction.327f3db5.js",revision:"d35235e6948aa6ca4c8017521bd2e0aa"},{url:"assets/js/page-FeedSupport.3af766eb.js",revision:"c24b187ad0ed1ae63e0cf26302a5f2a3"},{url:"assets/js/page-Feed支持.6eedca1f.js",revision:"46248721ec7656174e93d95b053cc980"},{url:"assets/js/page-FileStructure.e4ee8426.js",revision:"7037bd065fbc7cf0c2634da8cb6b9a2a"},{url:"assets/js/page-Flowchart.59411b04.js",revision:"7a0abbf6e818b1926e3283961cd2aab3"},{url:"assets/js/page-Footnote.97ac472e.js",revision:"6a6a99a4597304836933b3410f5c1a21"},{url:"assets/js/page-HomePage.7f6944ad.js",revision:"1c12ef98f9e6f02f07b4c3182e03c039"},{url:"assets/js/page-Iconsupport.96355f2b.js",revision:"1f7303b6d8565498cf3b119b15365c63"},{url:"assets/js/page-InstallUsage.be5ee611.js",revision:"8bd5f43c58ee2354df16634797041b00"},{url:"assets/js/page-Introduction.7e4a75c9.js",revision:"4378869e10f0ab90cebf03f815c4f31e"},{url:"assets/js/page-Layout.31277c1d.js",revision:"2d98b4ae2e3d31dd1ca649221a2b6f47"},{url:"assets/js/page-MarkdownDEMO.bba44181.js",revision:"73d9d8e3ec90c37631d6212d5a798ed0"},{url:"assets/js/page-MarkdownEnhance.205301e6.js",revision:"6a90e1aee90e1097a85a0564d35e5460"},{url:"assets/js/page-MarkdownIntroduction.a621ecfb.js",revision:"f26e6a15544e73361594cda5f7e51459"},{url:"assets/js/page-Markdown介绍.349d31aa.js",revision:"0c775817bc8255fb2a66dafcbf83ceff"},{url:"assets/js/page-Markdown增强.25333543.js",revision:"0f8d1261d30a2ce5b87372304e210d54"},{url:"assets/js/page-Markdown示例.26253493.js",revision:"80c36f12d055a21af65d69f13f74fbe3"},{url:"assets/js/page-Markup.61c731b0.js",revision:"afea7ff01525e1b6b89e3c0c09b4a7e6"},{url:"assets/js/page-Nature.9527a6b8.js",revision:"5c1607fc89cafa20ee4ab16fbeb31772"},{url:"assets/js/page-NavBar.b524195d.js",revision:"6d6b36f31b6d8bb681eeb94628fddea7"},{url:"assets/js/page-NewComponent.84b69c73.js",revision:"266e6623dc986cb5cd1f5b69069302be"},{url:"assets/js/page-Newfeature.3facb8ca.js",revision:"e0c817b4189b3b4429e10cd301bf3852"},{url:"assets/js/page-Object.daa64062.js",revision:"32a518789c691a240a9264e3403cb593"},{url:"assets/js/page-Page.0024ebcf.js",revision:"f9ad16eedfeeabb553bf9af7e978b5e3"},{url:"assets/js/page-PageConfig.0516a10c.js",revision:"def59e82caea29ad2e31fb90ea029915"},{url:"assets/js/page-PageEnhance.4915b319.js",revision:"54435e58da1a454f775177025af74538"},{url:"assets/js/page-Pageinformation.0f61fe28.js",revision:"a9cd7bda39db0b472792441b9c962314"},{url:"assets/js/page-People.b39c017d.js",revision:"853cf59a404eacd41b5023ee4b3ecd80"},{url:"assets/js/page-Place.bc7847e6.js",revision:"2b54a024bbc1c20ef5db07da376636d7"},{url:"assets/js/page-PluginDescription.46db06c7.js",revision:"7ff2618635917df17d126c9ad7f85c2b"},{url:"assets/js/page-Plugins.647e93fc.js",revision:"8742badedabc737533b88be1c47e7e8b"},{url:"assets/js/page-Presentationsupport.c03987e6.js",revision:"71fbe1b46d4c3bcbbf5a68a37fb9fda0"},{url:"assets/js/page-PWA.1f2bfc91.js",revision:"23d2b010cf6827261095a17351298727"},{url:"assets/js/page-SEOandSitemap.9967425a.js",revision:"6fbc1454b2bf5eb21e4cccb3729d3f36"},{url:"assets/js/page-SEO和Sitemap.662796b8.js",revision:"d44b66fe61579ce39a949951342cfd3b"},{url:"assets/js/page-Sidebar.d86a0778.js",revision:"f5a273d2a055a90c2cca7660898f0fbd"},{url:"assets/js/page-Slide.17670080.js",revision:"baabdd455c51dc8e826685d24210380a"},{url:"assets/js/page-Stylusconfig.51b56d64.js",revision:"96516d02ef40e766df04e1c5f8236eeb"},{url:"assets/js/page-Stylus配置.b2c5b4fe.js",revision:"23a48ca0ac9970303579d17103869289"},{url:"assets/js/page-SuperscriptandSubscript.20bb3645.js",revision:"26bd259a1bda49d5c93717217717cfc0"},{url:"assets/js/page-Symbol.afcd647b.js",revision:"10974050cbe18cc9039024f2528a78a8"},{url:"assets/js/page-TexSupport.2ead3e48.js",revision:"0ac08270c71bbe11047babd7b701066b"},{url:"assets/js/page-Tex语法支持.6a4b33d6.js",revision:"b0df35439894ba54f8d30f460217ab1b"},{url:"assets/js/page-ThemeConfig.68a31a87.js",revision:"754fced4f8827c2b691f2a8ca9df83ca"},{url:"assets/js/page-ThemeFeatureConfig.60aa5b13.js",revision:"2232310bc96554319e0acdfd374d6864"},{url:"assets/js/page-ThemeLayoutConfig.4026e6b3.js",revision:"3ac092401436b9d4b54747f2e52c9190"},{url:"assets/js/page-ThemePluginConfig.c4629a58.js",revision:"eaa04a37cbae234e10c72cbe518ba714"},{url:"assets/js/page-TSsupport.441ed302.js",revision:"bbd3a24590d8437a16c265978aee4b0c"},{url:"assets/js/page-TS支持.b25963ab.js",revision:"5d062a2b62253148df79a031d7b1da85"},{url:"assets/js/page-vuepress-plugin-container.e82623f5.js",revision:"57914779f1e33c342dce9230669b0527"},{url:"assets/js/page-vuepress-plugin-copyright.5dd9c979.js",revision:"f846ee0fa12d7d8392f4290baf60e494"},{url:"assets/js/page-vuepress-theme-hope.45a65dcf.js",revision:"3b454f2b20e0f457842afbb8b764a7f5"},{url:"assets/js/page-VuePress.a5ad1961.js",revision:"81b1cc141cf00c2b775a6a62b528a32b"},{url:"assets/js/page-VuePressCases.a322c3fa.js",revision:"21f56fd33ebe118b7986453dc0a10a6a"},{url:"assets/js/page-VuePresscommands.16310afd.js",revision:"3b63d0078a71a07bc25337275e931d34"},{url:"assets/js/page-VuePress案例.411798c9.js",revision:"e92dbb43dc1899c96119c45e760ed5db"},{url:"assets/js/page-上下角标.1b745ac2.js",revision:"67dbc46db579c24572f79a4b0cd82907"},{url:"assets/js/page-主题功能配置.9b76ea45.js",revision:"f5a9a198397bc684c8d83b3fda517947"},{url:"assets/js/page-主题布局配置.2c01d492.js",revision:"7120bb72cb673d0daa2b9c93b25bd21b"},{url:"assets/js/page-主题插件配置.09a98d0b.js",revision:"cc988f3a5135ffc865044e1df4cf070c"},{url:"assets/js/page-主题配置.138917cd.js",revision:"efc86d49f3294b28373dbf29ccb84d85"},{url:"assets/js/page-人物.b29fc68d.js",revision:"90a0839fd3e316e435d78ab38a87ff68"},{url:"assets/js/page-介绍.98c1a3a8.js",revision:"71fb13cef090e0906f1abe91768191dd"},{url:"assets/js/page-代码演示.4f739105.js",revision:"a16692d8bb84882e4236bbddffaa6473"},{url:"assets/js/page-侧边栏.13506357.js",revision:"5fd2e95307dfb6d7bb365c6112e6a657"},{url:"assets/js/page-加密功能.7be89412.js",revision:"ea391afa2dfeb71693cb6789c7adcad9"},{url:"assets/js/page-博客相关.6eb9a218.js",revision:"c910a77bb5473e04057a43878ee848b5"},{url:"assets/js/page-博客首页.7852e39d.js",revision:"4d9c61575cd9b40a57619396257389a5"},{url:"assets/js/page-图标支持.ddbef845.js",revision:"09315f1ba7aee0cd36e04b13cc093e8a"},{url:"assets/js/page-地点.5594adc3.js",revision:"e016c96b3a02c3803358a152122747c9"},{url:"assets/js/page-基础知识.d23851b0.js",revision:"b858aa0e54aaa36e5d7011aff421a4b7"},{url:"assets/js/page-安装使用.61ee4702.js",revision:"ef875109031b8aa725d84fb389ec95c2"},{url:"assets/js/page-对象.c49b58b5.js",revision:"f3dd13d5ee0a3d21457b76f2a5e93ab4"},{url:"assets/js/page-导航栏.c312098f.js",revision:"5b6fa6755287513d6048d67cf2dc9ddf"},{url:"assets/js/page-布局.f741fb6e.js",revision:"830b6f7688d71ae7ccf29527eef9422d"},{url:"assets/js/page-常见问题.04d89ce3.js",revision:"da25d0cf99ce689fb5b05e0cea9dda64"},{url:"assets/js/page-幻灯片.6ea525fc.js",revision:"ffcfbe23eaa057fab2263eba71d57d98"},{url:"assets/js/page-幻灯片支持.07dae88e.js",revision:"4e7ca04142066e0d3b1a2639a8f63a67"},{url:"assets/js/page-插件.f691096e.js",revision:"e9135893f7b8d987558156c13f77f865"},{url:"assets/js/page-插件说明.1a87de3a.js",revision:"7e4133128002e4206eb483e2fd451896"},{url:"assets/js/page-文件结构介绍.a72bd189.js",revision:"17c0b194765d6215a6b3c81e8d17f176"},{url:"assets/js/page-新增特性.d37a9ffd.js",revision:"60ac1861c0f3d0c4f44d1e06600e41c2"},{url:"assets/js/page-新增组件.283ca93e.js",revision:"8395bbbfe027a24ffbf9df833f1bc18c"},{url:"assets/js/page-标记.ae9823f6.js",revision:"358c953657d73044fa920888fd68ca59"},{url:"assets/js/page-流程图支持.58742f75.js",revision:"fde500f192fe94d50ec6e9720763fbd6"},{url:"assets/js/page-深色模式与主题色.4c879828.js",revision:"9e1685aee9cc1878e9b30862d72c625d"},{url:"assets/js/page-符号.91113a43.js",revision:"b981d7db61ad9d1b516a78874773faae"},{url:"assets/js/page-脚注.5b878896.js",revision:"88bc209c6be2f3bed0a828998ff85761"},{url:"assets/js/page-自定义对齐.2f7ec8c2.js",revision:"7b95cd3398a3c31b051e60c2bc8796aa"},{url:"assets/js/page-自然.49edcf7a.js",revision:"a3cbef1b13a57d1ee6c16bcfd87bdac0"},{url:"assets/js/page-评论功能.3cc52c5b.js",revision:"ae591a444afbd138d491ff38e316124d"},{url:"assets/js/page-配置.ae18e0ae.js",revision:"35f76ba17709c25f9905017f7fe0e946"},{url:"assets/js/page-页面.4dd93baf.js",revision:"dc230630ef5b555e6eca615cea789398"},{url:"assets/js/page-页面信息.50a3297e.js",revision:"625177d5864646936076bb786a5b45d9"},{url:"assets/js/page-页面增强.1b99a1a8.js",revision:"a74a2031fd8f1288dcb28ffe07b9de93"},{url:"assets/js/page-页面配置.ed2f21d9.js",revision:"a00eff3661a52b649a586141c1309161"},{url:"assets/js/page-项目指令.85b6ba43.js",revision:"49a6d6ef009d92ed9c5eab9d3155ec51"},{url:"assets/js/page-项目案例.0c9b0f72.js",revision:"dc295ac92db751b06505f4508a87a85f"},{url:"assets/js/page-首页.8d430930.js",revision:"07fd494efe00f987a29384c0523054a5"},{url:"assets/js/page-默认主题配置.bb5e3a15.js",revision:"0e989b303977f7f52d77e2c662c11f85"},{url:"assets/js/vendors~docsearch.b53e86b6.js",revision:"1e97e10c716a4cbd12e850abb666f787"},{url:"assets/js/vendors~flowchart.6a95c3e1.js",revision:"01d7833ddcf9aef34d0359589c43a010"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4cb64c3b.js",revision:"fc26a4fa5bf952049c0438fbad9766c5"},{url:"assets/js/vendors~photo-swipe.955be982.js",revision:"e9e088b39d45c8190cafc4de5b16e45d"},{url:"assets/js/vendors~reveal.646f9d80.js",revision:"ad15007284ff32624d41c9548e0018f2"},{url:"assets/js/vendors~valine.8a25d652.js",revision:"f9428e91a8d094c983ce3c3de76d4256"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"a69bfccf18c523329680faa06329ee7c"},{url:"article/index.html",revision:"c66e15df938d13b30f342771393622b2"},{url:"basic/index.html",revision:"5283c590e881399f286502066b0c3088"},{url:"basic/markdown/demo/index.html",revision:"41221f3db756f3de00e9a4b7d04e2b99"},{url:"basic/markdown/emoji/index.html",revision:"467290b55145fb1ec0d70dee598534a7"},{url:"basic/markdown/emoji/nature/index.html",revision:"8a18cb76053deb7cb432b94b351b22d5"},{url:"basic/markdown/emoji/object/index.html",revision:"1fc648c17c4467df57bce28f52ef8a2f"},{url:"basic/markdown/emoji/people/index.html",revision:"f4515e1a96ad20030aeee7038fc3706c"},{url:"basic/markdown/emoji/place/index.html",revision:"fcffa8f0ae3df93dbf9c0abb0f2d12b7"},{url:"basic/markdown/emoji/symbol/index.html",revision:"01f6ac2032ad8fbaade45b657a393ccb"},{url:"basic/markdown/index.html",revision:"9a11a3fd32795f52fc1722cef37262b1"},{url:"basic/vuepress/case/index.html",revision:"76253c65933ae4d88526ebcc74b7d0d7"},{url:"basic/vuepress/command/index.html",revision:"ba1a188c00956fc7ca9c552e52ecdb3e"},{url:"basic/vuepress/file/index.html",revision:"db1268f112f191e2a771b1cbcff8feee"},{url:"basic/vuepress/index.html",revision:"f0f6dc87274d24aa4687ef68432b900b"},{url:"basic/vuepress/plugin/index.html",revision:"5b004f7050854f4cbbdd0b7a99e9ea96"},{url:"basic/vuepress/theme/index.html",revision:"684983c0f48e77023316100b1f22cb54"},{url:"category/basic/index.html",revision:"f36bf929e83eec45f3213ce8221bfb81"},{url:"category/basic/page/2/index.html",revision:"4b5a4c8c1ee1524ae688b70caef9dfef"},{url:"category/basic/page/3/index.html",revision:"e74bd48ba4746b5f635ea4d8990672f8"},{url:"category/config/index.html",revision:"3bf050aade6bd1969cbbc9fdfbddc880"},{url:"category/config/page/2/index.html",revision:"3f042468085f5d7a6d120dcc86def892"},{url:"category/config/page/3/index.html",revision:"2d14890a4ecc9526e200e37c5ed9adf7"},{url:"category/demo/index.html",revision:"a18308dfcfb470d2416959e8f6d633ec"},{url:"category/FAQ/index.html",revision:"25536aceca04fba3992403a9d6fd06de"},{url:"category/feature/index.html",revision:"b544e9324aec9a44d8d55ff6c98a52ef"},{url:"category/feature/page/2/index.html",revision:"b90d0e94940307be3ebaecbb764f52c3"},{url:"category/feature/page/3/index.html",revision:"4424e017e17416ea1d16cff093bcd42d"},{url:"category/index.html",revision:"c149b9eb64e485bb415e02d21ec70e58"},{url:"category/instruction/index.html",revision:"b8b78e0ed339b8d7de6981f049973257"},{url:"category/layout/index.html",revision:"7d39b299357ebd387807c20f933da171"},{url:"category/layout/page/2/index.html",revision:"fc1018133e4d1a9257e8898301c48f60"},{url:"category/markdown/index.html",revision:"4017b4b3ec59239826252f56fac3da6e"},{url:"config/index.html",revision:"0bb9bea233d1b4c5268559531b0b35bd"},{url:"config/page/index.html",revision:"e14ab7fb4231191d941b9f7b7e6efb44"},{url:"config/plugin/container/index.html",revision:"2ff27b8c9af6c6c7027d7b16835c2b47"},{url:"config/plugin/copyright/index.html",revision:"2e08cbf8791d5fcc3618d579c8c7fa23"},{url:"config/plugin/index.html",revision:"21367b4991d6387051e084c43f06970d"},{url:"config/stylus/index.html",revision:"a733d3e8fd5814a183cedbfa0501f6b6"},{url:"config/theme/apperance/index.html",revision:"b0ba1c7cc4860e7317d20611c3f1eaa0"},{url:"config/theme/default/index.html",revision:"072dd3fd6d8eec3842a8114384d2b352"},{url:"config/theme/feature/index.html",revision:"63aa1ee966dc0fd6862662f1367aa526"},{url:"config/theme/index.html",revision:"fccf54c4bac5c3bf061b5d724861fdae"},{url:"config/theme/plugin/index.html",revision:"9940f0365a6511a59f7d26dd4857755f"},{url:"demo/index.html",revision:"f644421fd8e25a4119ed2189a023650c"},{url:"encrypt/index.html",revision:"37565c9848e1a4cf7ba7db7ce70c93ce"},{url:"FAQ/index.html",revision:"52570d520623d1482a3c644b479f9de2"},{url:"guide/feature/blog/index.html",revision:"2957458a893b22f39d4d9dc375e5e19f"},{url:"guide/feature/comment/index.html",revision:"b59fc910626e57df80a7c40c087d165c"},{url:"guide/feature/component/index.html",revision:"c5a2f372ae1d7216bb02f94f9bfc2a06"},{url:"guide/feature/encrypt/index.html",revision:"5eec042e54abd97c767c2488a3fe8117"},{url:"guide/feature/feed/index.html",revision:"0abaa9b0404a55ef46e2b7f3f4a21acd"},{url:"guide/feature/icon/index.html",revision:"af82338f044b62e60f1c247593556176"},{url:"guide/feature/index.html",revision:"9ca8a415ab9d597dd43aee5d1dba76eb"},{url:"guide/feature/markdown/align/index.html",revision:"842b0dda7cf5c5bcf3d6bd08ed610feb"},{url:"guide/feature/markdown/demo/index.html",revision:"79da6d7f5cb46270a2940d209ef6ccc7"},{url:"guide/feature/markdown/flowchart/index.html",revision:"55401f90b1821db1728b0343a56323d8"},{url:"guide/feature/markdown/footnote/index.html",revision:"06681da9c63b289d35ed76973f6e7555"},{url:"guide/feature/markdown/index.html",revision:"a461b56a765d3d5020cc3b7f3d1e7b69"},{url:"guide/feature/markdown/mark/index.html",revision:"bfc870e675afe6907633c4425477eb4c"},{url:"guide/feature/markdown/presentation/index.html",revision:"0720a0f26c8430a2521e5f15039afaa3"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"14922220bd76f8877fa7b31103237c5c"},{url:"guide/feature/markdown/tex/index.html",revision:"d9dd7cda501518a5b3a4562f7cccab28"},{url:"guide/feature/page-info/index.html",revision:"ba636f2802de71cea202ddba32fcd345"},{url:"guide/feature/page/index.html",revision:"cba7e7c7cd1d2fed481b838a5ad4562a"},{url:"guide/feature/pwa/index.html",revision:"97a15fdbfd85e2c7cb6ead7bd8fe45ce"},{url:"guide/feature/seo-sitemap/index.html",revision:"f994e358e034d091e4d9be89c5106a88"},{url:"guide/feature/theme/index.html",revision:"02110903d190458862120e94a87b6b98"},{url:"guide/feature/typescript/index.html",revision:"f344d646df73c5bf9dcece2d8e44db69"},{url:"guide/index.html",revision:"2e9c45185d4947de4593f0aa66d7bffd"},{url:"guide/install/index.html",revision:"f2c2c6d4811e1b82c811c49afd92ab60"},{url:"guide/layout/blog/index.html",revision:"392f0dc695c0e757dc3c25add1aa88a9"},{url:"guide/layout/home/index.html",revision:"d9fc297072b95e101fc670cf82456f04"},{url:"guide/layout/index.html",revision:"5fc7a5933fb3eb3dec73c97659bf08d0"},{url:"guide/layout/navbar/index.html",revision:"a31fc858dc88feafb1fb6cfdfc8b81af"},{url:"guide/layout/page/index.html",revision:"a5eedc8e011f1abd9db2175b1a342dc7"},{url:"guide/layout/sidebar/index.html",revision:"dfad917721b89d6ff92fe22e75a5741e"},{url:"guide/layout/slides/index.html",revision:"31786e1283ccb2cf10db0e63e2e0f987"},{url:"index.html",revision:"5c2365a60c083e868332260180be5616"},{url:"slide/index.html",revision:"f6d9f817d535fc9592b0adb401f3a2d2"},{url:"tag/blog/index.html",revision:"6da75bcf3081b87231b42bb9ec0b3247"},{url:"tag/comment/index.html",revision:"15756266c23cd378d5dcdd6fb7e36b07"},{url:"tag/components/index.html",revision:"50e81e39907cbd297cf6b0f601b53131"},{url:"tag/config/index.html",revision:"20e9e597eadd5950a56e3481884530e8"},{url:"tag/config/page/2/index.html",revision:"962868a9346f673eb4775c5496f9a1ef"},{url:"tag/config/page/3/index.html",revision:"747161e3c1ac6b97e2eed122db3390ce"},{url:"tag/emoji/index.html",revision:"db65d0237594c2d8e35e48623c721734"},{url:"tag/emoji/page/2/index.html",revision:"64a496b00c487c0a4d3030405546b267"},{url:"tag/encrypt/index.html",revision:"94780e84ecb161716ca13e05cc19e787"},{url:"tag/feature/index.html",revision:"604d6e738e740e5f058c475923a31f09"},{url:"tag/feature/page/2/index.html",revision:"4797f69754cc0ac225f9649bf8ff38a0"},{url:"tag/feature/page/3/index.html",revision:"900f1150815c2ec5b2b51ae65f06f72e"},{url:"tag/feature/page/4/index.html",revision:"a5df351043c307cba1c1a382528e6b8d"},{url:"tag/feature/page/5/index.html",revision:"de8c7b7eed77d0fd10f0500cc4421e46"},{url:"tag/feed/index.html",revision:"5699de9af95215f70a3ab280a9b210be"},{url:"tag/frontmatter/index.html",revision:"daeeea57f15dec8b51e5a57b7a98467e"},{url:"tag/home/index.html",revision:"5c96ec8fce9c4cfd32717570901bb243"},{url:"tag/icon/index.html",revision:"7287fac216c0886fce68163f7d610983"},{url:"tag/index.html",revision:"fbf11d23427a05cf611325760a1e5343"},{url:"tag/intro/index.html",revision:"85c413386abfefc57c39125ad1a9c8e4"},{url:"tag/layout/index.html",revision:"5f14a62c240279705087e2713444f842"},{url:"tag/layout/page/2/index.html",revision:"c7bcdb72411d97e0aa3eabeb59b5a01b"},{url:"tag/markdown/index.html",revision:"8b80fcc15fdca75ac040872a95fbcf58"},{url:"tag/markdown/page/2/index.html",revision:"3c243610bb786625fcefa358e15972fa"},{url:"tag/markdown/page/3/index.html",revision:"a5566dcabd530c9ce998ee22142628c8"},{url:"tag/markdown/page/4/index.html",revision:"be5253c2ff15f2cce82a98649d63409b"},{url:"tag/navbar/index.html",revision:"aa550c899916fec453e2d2d14087739c"},{url:"tag/page-info/index.html",revision:"19edabff07cd29471bc85d7f53ea08c5"},{url:"tag/page/index.html",revision:"06b6f7d0bce29c666f91e621b17aa59e"},{url:"tag/plugin/index.html",revision:"ba4479cd95eb7c1abe4b59a60adf5b23"},{url:"tag/pwa/index.html",revision:"d35e8596af225bce726b07b4985574f0"},{url:"tag/seo/index.html",revision:"09cc77f9dd67a59f58a23ef7c3bbbb33"},{url:"tag/sidebar/index.html",revision:"2ec2694927a2e03ef58b2a33d331a01f"},{url:"tag/sitemap/index.html",revision:"a6babdba3690a859f8a9f75c5914c9e4"},{url:"tag/slides/index.html",revision:"22630f8722484aab831ffb524b86e468"},{url:"tag/style/index.html",revision:"04a661e77b7ed96c3b4b99c9edab163e"},{url:"tag/themeConfig/index.html",revision:"457c8592c6557256cf7e68638591f7b7"},{url:"tag/typescript/index.html",revision:"94f9e302e56177f0e4a26610878cb40e"},{url:"tag/vuepress/index.html",revision:"dae479ad4692a80ef1cc35f32831effe"},{url:"tag/vuepress/page/2/index.html",revision:"f0af0f29307f31673dbd18dc5c649dd6"},{url:"timeline/index.html",revision:"64d5dbd896ddda6e2828e5e835bde62d"},{url:"zh/basic/index.html",revision:"fa95fca088009656b1e2a54bd25f4aeb"},{url:"zh/basic/markdown/demo/index.html",revision:"5abdaaac030338273216c997ebddc25d"},{url:"zh/basic/markdown/emoji/index.html",revision:"19876899e2e5db27d4a364317e6c61e3"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"e32271b2fd885927db2a5825853849fb"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"46e8a64fa5251283e81a2e71d4df418e"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"076380626afc18fe14b60e010a1c5079"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"3c2d87be102edbd382d856be292827d0"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"98a0ac04ef6fa9aaa3559d80b4d158c7"},{url:"zh/basic/markdown/index.html",revision:"20f332b2db11639a4c8b50c25bebf12d"},{url:"zh/basic/vuepress/case/index.html",revision:"3a9c7a979f05369b0b8a9b1b3e13d6d7"},{url:"zh/basic/vuepress/command/index.html",revision:"1e7e8c44739b30894d8a0fe81592cb58"},{url:"zh/basic/vuepress/file/index.html",revision:"57ecbf21457622219abfeb243069a361"},{url:"zh/basic/vuepress/index.html",revision:"7613819b79cd1fb37ce36b27798a5de5"},{url:"zh/basic/vuepress/plugin/index.html",revision:"1fc6b38c14ad27100b17bd06a60bed6c"},{url:"zh/basic/vuepress/theme/index.html",revision:"7be9fd5fe10f1948d42307fcd5227314"},{url:"zh/config/index.html",revision:"9b6f62280fbb7539c51a4ed0461d24f7"},{url:"zh/config/page/index.html",revision:"ea67a7eddd1f64cfab99cb0d96b1f35d"},{url:"zh/config/plugin/container/index.html",revision:"9c69e353f3ef36eaaa29d5faaa2ab2b0"},{url:"zh/config/plugin/copyright/index.html",revision:"fdb5d10e1d708c38957e1a5200a5e3d1"},{url:"zh/config/plugin/index.html",revision:"4db1bdbcaf8f97ac9cd9f6eda8088d92"},{url:"zh/config/stylus/index.html",revision:"51d349e8b47e4f6227c3330b45e93744"},{url:"zh/config/theme/apperance/index.html",revision:"9a0eb3af4f1e9dba87e9a2bf536f96a6"},{url:"zh/config/theme/default/index.html",revision:"cd002183ca22a06a9c5afaf3bb6f5c54"},{url:"zh/config/theme/feature/index.html",revision:"b0b9d178c08361a8ffba3a1390222ca3"},{url:"zh/config/theme/index.html",revision:"2bdbbd9a23e59ef871dd85953f89e462"},{url:"zh/config/theme/plugin/index.html",revision:"45f8697d9752bc58fd90a40ad76342eb"},{url:"zh/demo/index.html",revision:"ab733a19656cf90041802d250f45683c"},{url:"zh/FAQ/index.html",revision:"d57798ec410522259269d86a76412dc4"},{url:"zh/guide/feature/blog/index.html",revision:"446ea8805dd19beb5215b426a0a8ccd1"},{url:"zh/guide/feature/comment/index.html",revision:"edde8790a82862a838eb20f5c9728a7a"},{url:"zh/guide/feature/component/index.html",revision:"3b5125a449aff412dce06e442d46d278"},{url:"zh/guide/feature/encrypt/index.html",revision:"ae2632079a98258d5f62aee2440d5627"},{url:"zh/guide/feature/feed/index.html",revision:"736b3f574d5195e2d0f1fad795e2fbca"},{url:"zh/guide/feature/icon/index.html",revision:"cb285e92b44f7d76d61b24b7e4553955"},{url:"zh/guide/feature/index.html",revision:"35c9242a2eaecdbcab87606af0dead72"},{url:"zh/guide/feature/markdown/align/index.html",revision:"2c8fa811466723cc0f08010b120984bd"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"dd99bf9b6c852f647918472ae754c385"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"c28a851e9768205187eb8eccf65e4107"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"5e0b3c8ffa952857fb2041cdb85b29a6"},{url:"zh/guide/feature/markdown/index.html",revision:"c2c1ff0a8be5d4a0d8ea35e89b70b2d8"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"473ba1874eb265a23439b3ea784bc9ed"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"751e35a19b950b35b4a13d5e8307ed7b"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"521d2824592c226b16dce979e5de1209"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"c351c99908294f17a9dca0f014cfef8e"},{url:"zh/guide/feature/page-info/index.html",revision:"3e69cb321b8952de9b91e7f1fa76edf9"},{url:"zh/guide/feature/page/index.html",revision:"c96e4e899e3fe4dec4dfa8ce2963eea8"},{url:"zh/guide/feature/pwa/index.html",revision:"a7462151856b7f404cff960bd53c0e22"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"1498000252e39451b4bc0b72691cd177"},{url:"zh/guide/feature/theme/index.html",revision:"e3d2d8a39af5a0b4b0edc98d487825bc"},{url:"zh/guide/feature/typescript/index.html",revision:"4e0b3e4674e447309bd930a62575bc6a"},{url:"zh/guide/index.html",revision:"87f6cf84b49a6edf289033a305c3b653"},{url:"zh/guide/install/index.html",revision:"b5306d7c1eb13c9b0f23eeed83602072"},{url:"zh/guide/layout/blog/index.html",revision:"196f4e7c65a5986680def1497f294a70"},{url:"zh/guide/layout/home/index.html",revision:"3caa487611167b2a79810ddb407c5b04"},{url:"zh/guide/layout/index.html",revision:"5bff95ee26157cdc7d954c2e4773dccb"},{url:"zh/guide/layout/navbar/index.html",revision:"b62baa7c32a259266c6a07773d3d7492"},{url:"zh/guide/layout/page/index.html",revision:"1dc7bd77b84e471e15d07237146f6fdc"},{url:"zh/guide/layout/sidebar/index.html",revision:"e077009c85dbc340ef9ca561593294e9"},{url:"zh/guide/layout/slides/index.html",revision:"c2e8ded4fcf8bf475b9aba8bd9b76449"},{url:"zh/index.html",revision:"9730c118596dba0315d61ff3dcc9622a"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.f21437ff.png",revision:"f21437ffbc4b13ab6a451dde8d9dda84"},{url:"assets/img/darkmode.18bf8eef.png",revision:"18bf8eef74622db9ab125f182d0755ed"},{url:"assets/img/darkmode.5a75246b.png",revision:"5a75246b475e9adf13d7aba1ba70b28c"},{url:"assets/img/home.0bba1141.png",revision:"0bba11416a42fe9f9599c96a7adc4dc4"},{url:"assets/img/home.0e77001c.png",revision:"0e77001cd0a6e3ab329791d9331e9f15"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/iconfont-edit.ae032366.png",revision:"ae0323666d64aad8158bc08c9c32f8e5"},{url:"assets/img/iconfont-edit.f701530b.png",revision:"f701530b552bbaacefa45ddaba8aebdd"},{url:"assets/img/iconfont-new.11943023.png",revision:"11943023008a21f03d8899fdbeae4191"},{url:"assets/img/iconfont-new.d38bbd1f.png",revision:"d38bbd1ff33f7eec493ce626552658e2"},{url:"assets/img/slides.30e00024.png",revision:"30e00024078ddaa677a427ffceb322ce"},{url:"assets/img/slides.917fe32d.png",revision:"917fe32d70720a5957c350395234bb54"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
