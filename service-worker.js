if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}}))).then((e=>{const a=d(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.00ab5b22.css",revision:"dbfcf9c112a856fdb27baf65e9ddd8ec"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/128.175e196c.js",revision:"6106c7fdf22c6575968d7c4c836e8237"},{url:"assets/js/129.702b7c31.js",revision:"de6689a7de885830ab3e47e11aeab06d"},{url:"assets/js/130.8c2ecb9d.js",revision:"a5b4601133271d60b092ee66165c1806"},{url:"assets/js/131.142450e3.js",revision:"426d5546af359fe7f6c1de233079cb84"},{url:"assets/js/132.9d7e407b.js",revision:"034d5627b3883beed068d0c838414296"},{url:"assets/js/app.ff762399.js",revision:"3a6096a8be1fcb8f43278afba82e9cf0"},{url:"assets/js/layout-Blog.63db1538.js",revision:"cf2c1d03a8e98d0f5f2642b699952493"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.c646c0a1.js",revision:"f459d2a2006fdc36344dbd00436d7c02"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.34f78afc.js",revision:"2fba5af2760b7e8f98bfc4b1adb64a7d"},{url:"assets/js/layout-Layout.66d2231d.js",revision:"1f4865ca740300c59a1460991fc85d7f"},{url:"assets/js/layout-NotFound.97fd43ff.js",revision:"8e90f9daf666b2a5176492df80a14d1c"},{url:"assets/js/layout-Slide.f8b4725a.js",revision:"17a3a28fdbce71aaa699e240be02b754"},{url:"assets/js/page-AboutVuePress.0c14d9eb.js",revision:"1fde1d78f2819d319fe1455e86456d15"},{url:"assets/js/page-Basic.90ede17f.js",revision:"55e1753974c7b49fbc93ffcb9338ada0"},{url:"assets/js/page-Bloghomepage.7218f77d.js",revision:"655ff2dd3030a1ad6cc0b7d7bf7a8255"},{url:"assets/js/page-Blogrelated.ea77013f.js",revision:"7f853ed3f7605097238df2bcd74858be"},{url:"assets/js/page-CodeDemo.1be71adc.js",revision:"81ff7a620c64f92ee2c8498c630c9a19"},{url:"assets/js/page-CommentFunction.75651d7e.js",revision:"ec2b02fa2723187628662093ef54f407"},{url:"assets/js/page-Commonproblems.f2ef7477.js",revision:"600b7611e526e774076c8d8bcc2ee480"},{url:"assets/js/page-Config.32850160.js",revision:"02aaa6a7ca21f9e90430b6f5b3ee4298"},{url:"assets/js/page-Customalignment.d172237a.js",revision:"ee871c2d4bcc36264ea6a306c5ae65e1"},{url:"assets/js/page-DarkmodeandThemecolor.182695c1.js",revision:"6df4b0246df8e58bec8e2d0950b2c6dc"},{url:"assets/js/page-DefaultThemeConfig.b15ac753.js",revision:"b33a482a7b9405c8a06c4f25298e3524"},{url:"assets/js/page-Demos.1c664767.js",revision:"b077921683fa938a31c7803ca762c59a"},{url:"assets/js/page-EmojiList.dc36ed0c.js",revision:"35b210ea59fbb67d1b0b4cddcc61ff31"},{url:"assets/js/page-Emoji列表.6decf878.js",revision:"2a9e00e0acf0b36849ccb050fc24d3f0"},{url:"assets/js/page-Encryptionfunction.327f3db5.js",revision:"d35235e6948aa6ca4c8017521bd2e0aa"},{url:"assets/js/page-FeedSupport.3af766eb.js",revision:"c24b187ad0ed1ae63e0cf26302a5f2a3"},{url:"assets/js/page-Feed支持.95ac1f52.js",revision:"a0195d1e92394a560eba2a3ce679d9a0"},{url:"assets/js/page-FileStructure.e4ee8426.js",revision:"7037bd065fbc7cf0c2634da8cb6b9a2a"},{url:"assets/js/page-Flowchart.59411b04.js",revision:"7a0abbf6e818b1926e3283961cd2aab3"},{url:"assets/js/page-Footnote.97ac472e.js",revision:"6a6a99a4597304836933b3410f5c1a21"},{url:"assets/js/page-HomePage.7f6944ad.js",revision:"1c12ef98f9e6f02f07b4c3182e03c039"},{url:"assets/js/page-Iconsupport.96355f2b.js",revision:"1f7303b6d8565498cf3b119b15365c63"},{url:"assets/js/page-InstallUsage.be5ee611.js",revision:"8bd5f43c58ee2354df16634797041b00"},{url:"assets/js/page-Introduction.7e4a75c9.js",revision:"4378869e10f0ab90cebf03f815c4f31e"},{url:"assets/js/page-Layout.31277c1d.js",revision:"2d98b4ae2e3d31dd1ca649221a2b6f47"},{url:"assets/js/page-MarkdownDEMO.bba44181.js",revision:"73d9d8e3ec90c37631d6212d5a798ed0"},{url:"assets/js/page-MarkdownEnhance.205301e6.js",revision:"6a90e1aee90e1097a85a0564d35e5460"},{url:"assets/js/page-MarkdownIntroduction.a621ecfb.js",revision:"f26e6a15544e73361594cda5f7e51459"},{url:"assets/js/page-Markdown介绍.349d31aa.js",revision:"0c775817bc8255fb2a66dafcbf83ceff"},{url:"assets/js/page-Markdown增强.25333543.js",revision:"0f8d1261d30a2ce5b87372304e210d54"},{url:"assets/js/page-Markdown示例.26253493.js",revision:"80c36f12d055a21af65d69f13f74fbe3"},{url:"assets/js/page-Markup.61c731b0.js",revision:"afea7ff01525e1b6b89e3c0c09b4a7e6"},{url:"assets/js/page-Nature.9527a6b8.js",revision:"5c1607fc89cafa20ee4ab16fbeb31772"},{url:"assets/js/page-NavBar.b524195d.js",revision:"6d6b36f31b6d8bb681eeb94628fddea7"},{url:"assets/js/page-NewComponent.84b69c73.js",revision:"266e6623dc986cb5cd1f5b69069302be"},{url:"assets/js/page-Newfeature.3facb8ca.js",revision:"e0c817b4189b3b4429e10cd301bf3852"},{url:"assets/js/page-Object.daa64062.js",revision:"32a518789c691a240a9264e3403cb593"},{url:"assets/js/page-Page.0024ebcf.js",revision:"f9ad16eedfeeabb553bf9af7e978b5e3"},{url:"assets/js/page-PageConfig.0516a10c.js",revision:"def59e82caea29ad2e31fb90ea029915"},{url:"assets/js/page-PageEnhance.4915b319.js",revision:"54435e58da1a454f775177025af74538"},{url:"assets/js/page-Pageinformation.0f61fe28.js",revision:"a9cd7bda39db0b472792441b9c962314"},{url:"assets/js/page-People.b39c017d.js",revision:"853cf59a404eacd41b5023ee4b3ecd80"},{url:"assets/js/page-Place.bc7847e6.js",revision:"2b54a024bbc1c20ef5db07da376636d7"},{url:"assets/js/page-PluginDescription.46db06c7.js",revision:"7ff2618635917df17d126c9ad7f85c2b"},{url:"assets/js/page-Plugins.647e93fc.js",revision:"8742badedabc737533b88be1c47e7e8b"},{url:"assets/js/page-Presentationsupport.c03987e6.js",revision:"71fbe1b46d4c3bcbbf5a68a37fb9fda0"},{url:"assets/js/page-PWA.1f2bfc91.js",revision:"23d2b010cf6827261095a17351298727"},{url:"assets/js/page-SEOandSitemap.9967425a.js",revision:"6fbc1454b2bf5eb21e4cccb3729d3f36"},{url:"assets/js/page-SEO和Sitemap.0954f739.js",revision:"690b81c6a5a5ec5bb5a59e6df6f21df3"},{url:"assets/js/page-Sidebar.d86a0778.js",revision:"f5a273d2a055a90c2cca7660898f0fbd"},{url:"assets/js/page-Slide.17670080.js",revision:"baabdd455c51dc8e826685d24210380a"},{url:"assets/js/page-Stylusconfig.51b56d64.js",revision:"96516d02ef40e766df04e1c5f8236eeb"},{url:"assets/js/page-Stylus配置.b2c5b4fe.js",revision:"23a48ca0ac9970303579d17103869289"},{url:"assets/js/page-SuperscriptandSubscript.20bb3645.js",revision:"26bd259a1bda49d5c93717217717cfc0"},{url:"assets/js/page-Symbol.afcd647b.js",revision:"10974050cbe18cc9039024f2528a78a8"},{url:"assets/js/page-TexSupport.2ead3e48.js",revision:"0ac08270c71bbe11047babd7b701066b"},{url:"assets/js/page-Tex语法支持.6a4b33d6.js",revision:"b0df35439894ba54f8d30f460217ab1b"},{url:"assets/js/page-ThemeConfig.68a31a87.js",revision:"754fced4f8827c2b691f2a8ca9df83ca"},{url:"assets/js/page-ThemeFeatureConfig.60aa5b13.js",revision:"2232310bc96554319e0acdfd374d6864"},{url:"assets/js/page-ThemeLayoutConfig.4026e6b3.js",revision:"3ac092401436b9d4b54747f2e52c9190"},{url:"assets/js/page-ThemePluginConfig.c4629a58.js",revision:"eaa04a37cbae234e10c72cbe518ba714"},{url:"assets/js/page-TSsupport.441ed302.js",revision:"bbd3a24590d8437a16c265978aee4b0c"},{url:"assets/js/page-TS支持.1dbc966c.js",revision:"760e8727d643a6166b3d2fd9e66c2bd6"},{url:"assets/js/page-vuepress-plugin-container.e82623f5.js",revision:"57914779f1e33c342dce9230669b0527"},{url:"assets/js/page-vuepress-plugin-copyright.5dd9c979.js",revision:"f846ee0fa12d7d8392f4290baf60e494"},{url:"assets/js/page-vuepress-theme-hope.60f5c7aa.js",revision:"36d4912858fe324777324d82e09e226d"},{url:"assets/js/page-VuePress.a5ad1961.js",revision:"81b1cc141cf00c2b775a6a62b528a32b"},{url:"assets/js/page-VuePressCases.a322c3fa.js",revision:"21f56fd33ebe118b7986453dc0a10a6a"},{url:"assets/js/page-VuePresscommands.16310afd.js",revision:"3b63d0078a71a07bc25337275e931d34"},{url:"assets/js/page-VuePress案例.411798c9.js",revision:"e92dbb43dc1899c96119c45e760ed5db"},{url:"assets/js/page-上下角标.1b745ac2.js",revision:"67dbc46db579c24572f79a4b0cd82907"},{url:"assets/js/page-主题功能配置.9b76ea45.js",revision:"f5a9a198397bc684c8d83b3fda517947"},{url:"assets/js/page-主题布局配置.2c01d492.js",revision:"7120bb72cb673d0daa2b9c93b25bd21b"},{url:"assets/js/page-主题插件配置.09a98d0b.js",revision:"cc988f3a5135ffc865044e1df4cf070c"},{url:"assets/js/page-主题配置.138917cd.js",revision:"efc86d49f3294b28373dbf29ccb84d85"},{url:"assets/js/page-人物.b29fc68d.js",revision:"90a0839fd3e316e435d78ab38a87ff68"},{url:"assets/js/page-介绍.947003c5.js",revision:"18f50563c6b6ca371636b0fa9ef0c4af"},{url:"assets/js/page-代码演示.4f739105.js",revision:"a16692d8bb84882e4236bbddffaa6473"},{url:"assets/js/page-侧边栏.7a97e3c5.js",revision:"15bb21f5d89a622f7af97b2cfdcd0af0"},{url:"assets/js/page-加密功能.01e17a43.js",revision:"4c397ebcd53f66876ad307fc60ca935e"},{url:"assets/js/page-博客相关.6eb9a218.js",revision:"c910a77bb5473e04057a43878ee848b5"},{url:"assets/js/page-博客首页.a2ee4a75.js",revision:"8114a10dba9a12a89af37a08cc852be7"},{url:"assets/js/page-图标支持.ddbef845.js",revision:"09315f1ba7aee0cd36e04b13cc093e8a"},{url:"assets/js/page-地点.5594adc3.js",revision:"e016c96b3a02c3803358a152122747c9"},{url:"assets/js/page-基础知识.d23851b0.js",revision:"b858aa0e54aaa36e5d7011aff421a4b7"},{url:"assets/js/page-安装使用.5add5b24.js",revision:"65e6fa04605425fd65e60a23532e8d22"},{url:"assets/js/page-对象.c49b58b5.js",revision:"f3dd13d5ee0a3d21457b76f2a5e93ab4"},{url:"assets/js/page-导航栏.7baf0313.js",revision:"02ad72275a0825b697a080fac8ebecd8"},{url:"assets/js/page-布局.b5c48246.js",revision:"267c28900cc8d7dc3b6fbaf9707e58bf"},{url:"assets/js/page-常见问题.04d89ce3.js",revision:"da25d0cf99ce689fb5b05e0cea9dda64"},{url:"assets/js/page-幻灯片.3409c9d6.js",revision:"8f3d5a82106136ddeeb53fdfdc5dcba8"},{url:"assets/js/page-幻灯片支持.07dae88e.js",revision:"4e7ca04142066e0d3b1a2639a8f63a67"},{url:"assets/js/page-插件.f691096e.js",revision:"e9135893f7b8d987558156c13f77f865"},{url:"assets/js/page-插件说明.1a87de3a.js",revision:"7e4133128002e4206eb483e2fd451896"},{url:"assets/js/page-文件结构介绍.a72bd189.js",revision:"17c0b194765d6215a6b3c81e8d17f176"},{url:"assets/js/page-新增特性.d37a9ffd.js",revision:"60ac1861c0f3d0c4f44d1e06600e41c2"},{url:"assets/js/page-新增组件.283ca93e.js",revision:"8395bbbfe027a24ffbf9df833f1bc18c"},{url:"assets/js/page-标记.ae9823f6.js",revision:"358c953657d73044fa920888fd68ca59"},{url:"assets/js/page-流程图支持.58742f75.js",revision:"fde500f192fe94d50ec6e9720763fbd6"},{url:"assets/js/page-深色模式与主题色.94cc4531.js",revision:"740e61645822662527d5a2bc873a46ca"},{url:"assets/js/page-符号.91113a43.js",revision:"b981d7db61ad9d1b516a78874773faae"},{url:"assets/js/page-脚注.5b878896.js",revision:"88bc209c6be2f3bed0a828998ff85761"},{url:"assets/js/page-自定义对齐.2f7ec8c2.js",revision:"7b95cd3398a3c31b051e60c2bc8796aa"},{url:"assets/js/page-自然.49edcf7a.js",revision:"a3cbef1b13a57d1ee6c16bcfd87bdac0"},{url:"assets/js/page-评论功能.3cc52c5b.js",revision:"ae591a444afbd138d491ff38e316124d"},{url:"assets/js/page-配置.ae18e0ae.js",revision:"35f76ba17709c25f9905017f7fe0e946"},{url:"assets/js/page-页面.4dd93baf.js",revision:"dc230630ef5b555e6eca615cea789398"},{url:"assets/js/page-页面信息.50a3297e.js",revision:"625177d5864646936076bb786a5b45d9"},{url:"assets/js/page-页面增强.1b99a1a8.js",revision:"a74a2031fd8f1288dcb28ffe07b9de93"},{url:"assets/js/page-页面配置.ed2f21d9.js",revision:"a00eff3661a52b649a586141c1309161"},{url:"assets/js/page-项目指令.85b6ba43.js",revision:"49a6d6ef009d92ed9c5eab9d3155ec51"},{url:"assets/js/page-项目案例.0c9b0f72.js",revision:"dc295ac92db751b06505f4508a87a85f"},{url:"assets/js/page-首页.20ed9104.js",revision:"6d86342805132df64f4114bd01ab1cc1"},{url:"assets/js/page-默认主题配置.bb5e3a15.js",revision:"0e989b303977f7f52d77e2c662c11f85"},{url:"assets/js/vendors~docsearch.b53e86b6.js",revision:"1e97e10c716a4cbd12e850abb666f787"},{url:"assets/js/vendors~flowchart.6a95c3e1.js",revision:"01d7833ddcf9aef34d0359589c43a010"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4cb64c3b.js",revision:"fc26a4fa5bf952049c0438fbad9766c5"},{url:"assets/js/vendors~photo-swipe.955be982.js",revision:"e9e088b39d45c8190cafc4de5b16e45d"},{url:"assets/js/vendors~reveal.646f9d80.js",revision:"ad15007284ff32624d41c9548e0018f2"},{url:"assets/js/vendors~valine.8a25d652.js",revision:"f9428e91a8d094c983ce3c3de76d4256"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"89166271a13f0cd17af12c6b4268f713"},{url:"article/index.html",revision:"6bb9e7cc243381145351c22bd1bd9896"},{url:"basic/index.html",revision:"306eb42ef9710b08a0a6ecfb05629738"},{url:"basic/markdown/demo/index.html",revision:"968daadb225e11b442846b17bf7cbcc7"},{url:"basic/markdown/emoji/index.html",revision:"ec21846256401a9c6d0c9c3fb54b029a"},{url:"basic/markdown/emoji/nature/index.html",revision:"b76183b41a2423ca07a7692e3c99b223"},{url:"basic/markdown/emoji/object/index.html",revision:"750411353ab6bcd05adf819fc39b2c47"},{url:"basic/markdown/emoji/people/index.html",revision:"f8c66e1c805862ad016e0643a33ce4d6"},{url:"basic/markdown/emoji/place/index.html",revision:"1aab9b1c8203cf7bf7827b7a03794f52"},{url:"basic/markdown/emoji/symbol/index.html",revision:"d24de44971190254d15413d0ca2174b1"},{url:"basic/markdown/index.html",revision:"c6e17d042cee1031c9d40a8f397d9cca"},{url:"basic/vuepress/case/index.html",revision:"77a21d245647456f212b8e0d4e2ebd05"},{url:"basic/vuepress/command/index.html",revision:"c45f234ab963e1eaeb316ffcc1619c0c"},{url:"basic/vuepress/file/index.html",revision:"dcdd2a2898efd0d50611dc16249bd261"},{url:"basic/vuepress/index.html",revision:"0939cf95563e2d9a880b501abe687f55"},{url:"basic/vuepress/plugin/index.html",revision:"6dc1e625e57f1aa6a7c390133aae053d"},{url:"basic/vuepress/theme/index.html",revision:"893cf95e968a93bc20118a43087a5f43"},{url:"category/basic/index.html",revision:"4032288322e7543e51820563ab5ebf02"},{url:"category/basic/page/2/index.html",revision:"da1883792debefda63c27fe9c3093328"},{url:"category/basic/page/3/index.html",revision:"1f568196ef14c0e77f1f92b8d9069164"},{url:"category/config/index.html",revision:"0b8d90d21b58dc56191f9bd9f7a931ef"},{url:"category/config/page/2/index.html",revision:"46212d7fbd569264b3d17d9dbb5e9f72"},{url:"category/config/page/3/index.html",revision:"a9bc8e229c5f394184aca8761233d8e5"},{url:"category/demo/index.html",revision:"e175af81f7c446e7af76a709c490d6b9"},{url:"category/FAQ/index.html",revision:"50b263bc03f1ac229b73db13a40ace1e"},{url:"category/feature/index.html",revision:"1d34940f1278c68f22a3a3f280b6d433"},{url:"category/feature/page/2/index.html",revision:"b601f15cd23c1aa634c7de477cf18048"},{url:"category/feature/page/3/index.html",revision:"e94dfa0b7530a45e29d2175bff08a192"},{url:"category/index.html",revision:"28b8939238ebb950b6e7ec4bd5306065"},{url:"category/instruction/index.html",revision:"616e423c285bc370ace4213a6347a0f5"},{url:"category/layout/index.html",revision:"2f8e36d3f3d702d2cff8dfded8420d6a"},{url:"category/layout/page/2/index.html",revision:"88cb5ab337245a106dfa7943afa06b04"},{url:"category/markdown/index.html",revision:"4bb78dd05eb8aed7346f52cf8fcaff4a"},{url:"config/index.html",revision:"bae12d51f1d6277db54da3c7d7077552"},{url:"config/page/index.html",revision:"44fe1946f157e6660d20e201e836d12d"},{url:"config/plugin/container/index.html",revision:"d66368b315b5647ad42417269ec4d3a1"},{url:"config/plugin/copyright/index.html",revision:"1d5ca53f602e3ce35dd49c62bf3325f0"},{url:"config/plugin/index.html",revision:"8003c8c7a09fdc15b24498b17bbc7002"},{url:"config/stylus/index.html",revision:"6302bb7d922e905c97b9beb88e0852f4"},{url:"config/theme/apperance/index.html",revision:"c0cd3b479931532fc0b8055fcad2d3b0"},{url:"config/theme/default/index.html",revision:"c49e49b954afd819d097fd4e3827eb9d"},{url:"config/theme/feature/index.html",revision:"f73b513adf1da69bd9a2bb2c2614f397"},{url:"config/theme/index.html",revision:"e1f7ef106aba04c179084eac26fc1bfc"},{url:"config/theme/plugin/index.html",revision:"1426621db28560a177e1f96aa4a91784"},{url:"demo/index.html",revision:"7cbf7367c03735c8d3b3860b77220099"},{url:"encrypt/index.html",revision:"4f2fe4b3af615c8fa971621e64c77855"},{url:"FAQ/index.html",revision:"fb38155ca151bb03a9f6b28b43a179f6"},{url:"guide/feature/blog/index.html",revision:"5f8ee218c3482b4cdda383338af8205c"},{url:"guide/feature/comment/index.html",revision:"8586ef602f8d66fb2142c0483545a143"},{url:"guide/feature/component/index.html",revision:"f90bf6366a6c63ce8c18588cbf475a34"},{url:"guide/feature/encrypt/index.html",revision:"fccf642a0732625ef2f617ad2b596af6"},{url:"guide/feature/feed/index.html",revision:"0de86108fa98ef0ca85626a239688b8c"},{url:"guide/feature/icon/index.html",revision:"972962ae31b4488edda01a9ec98e6c94"},{url:"guide/feature/index.html",revision:"6ef22df723f501ddd5bd8e42570c26bb"},{url:"guide/feature/markdown/align/index.html",revision:"e70f8562d26841c70d3c28fc39341adc"},{url:"guide/feature/markdown/demo/index.html",revision:"64b351ec8ab5ee57843c8e557e772fad"},{url:"guide/feature/markdown/flowchart/index.html",revision:"c12a4e980ce7568554c1d7f7fcc60e82"},{url:"guide/feature/markdown/footnote/index.html",revision:"d773f3b8243e2207cbd918296b947378"},{url:"guide/feature/markdown/index.html",revision:"320e28ab0335c90162ca3a7a811d5732"},{url:"guide/feature/markdown/mark/index.html",revision:"28b4be38def1cf10b19a7109670a1be2"},{url:"guide/feature/markdown/presentation/index.html",revision:"8989a2d42edd8c36a942fe0ed4435745"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"8894df774d5c4c86e77afd0515ac642b"},{url:"guide/feature/markdown/tex/index.html",revision:"10e341f87f6348c2497e054c2586c6ab"},{url:"guide/feature/page-info/index.html",revision:"85fb060c1d041405dbe3768b865498a6"},{url:"guide/feature/page/index.html",revision:"80c0a2fdc0ea3ccbdb9b80f9c61c4af3"},{url:"guide/feature/pwa/index.html",revision:"740499a43dee4aeeecd3ecbe4e41ce3d"},{url:"guide/feature/seo-sitemap/index.html",revision:"c5285dd8f0b95d88ea3c38a5fdd1ff26"},{url:"guide/feature/theme/index.html",revision:"dab6a44a9710396a6f127d4557ea21c0"},{url:"guide/feature/typescript/index.html",revision:"45f922751c8209e4e3e0b092c91cf361"},{url:"guide/index.html",revision:"46e7f97bc8ca0b0cd1d5414c28c4b023"},{url:"guide/install/index.html",revision:"9e0ec714c2e2bc74afa59a5a0df6fb8e"},{url:"guide/layout/blog/index.html",revision:"4225702137bf417ab7340637f5962160"},{url:"guide/layout/home/index.html",revision:"652957416ce675536973ec52dc0e5ef9"},{url:"guide/layout/index.html",revision:"6e51ebde9ec920463fe9295f4be6510e"},{url:"guide/layout/navbar/index.html",revision:"90ed0ee1524d009869d36b1af30f82bc"},{url:"guide/layout/page/index.html",revision:"984a4ccfcb14fdfca2071e2f53111984"},{url:"guide/layout/sidebar/index.html",revision:"46bf318af9c2ef10f327fe7106b9133e"},{url:"guide/layout/slides/index.html",revision:"60d6a3f45bf7ea86b37f9548b77d966d"},{url:"index.html",revision:"6fc899a4e36e28c3df0e2a19147faa6d"},{url:"slide/index.html",revision:"37956ff2834780cd93b14c3f58fad72f"},{url:"tag/blog/index.html",revision:"cd422108ed0ecbb99c1e21d3b5f984b0"},{url:"tag/comment/index.html",revision:"31f996674ff3e1f2308825f0a26a9c20"},{url:"tag/components/index.html",revision:"747ba30e49a7ed4857c81bf04708a6bd"},{url:"tag/config/index.html",revision:"631737f4e3ae35341e268aee03c0e476"},{url:"tag/config/page/2/index.html",revision:"397c7a802b2b22b75e556d784654b905"},{url:"tag/config/page/3/index.html",revision:"7ed065ee821b21463ff86f0429f8c00e"},{url:"tag/emoji/index.html",revision:"3f637756cb943943a1f4229e5d960a67"},{url:"tag/emoji/page/2/index.html",revision:"2e99d692134731d82a2a2cd1e86e4b00"},{url:"tag/encrypt/index.html",revision:"62c7a51eefa1bbd9b1200655568521be"},{url:"tag/feature/index.html",revision:"f64217412bfcf89d411880157a1ec0aa"},{url:"tag/feature/page/2/index.html",revision:"fee928ffd384850121c76dde8929ea6c"},{url:"tag/feature/page/3/index.html",revision:"cf63f3c990c02e9af3dd69adc91ac290"},{url:"tag/feature/page/4/index.html",revision:"d0e6729e11a629e6892d03c8de7e162b"},{url:"tag/feature/page/5/index.html",revision:"b0526e27da821971effe522667ce4f8e"},{url:"tag/feed/index.html",revision:"36cbfc9a4ce2cdd3e1acce488d3e03a9"},{url:"tag/frontmatter/index.html",revision:"3528e7fc0a8e2714e0721e941cec95a4"},{url:"tag/home/index.html",revision:"1884fc7bc5f53d483633962963f63ae1"},{url:"tag/icon/index.html",revision:"9aa84b331d1abd03beeb0ebfe9ff2636"},{url:"tag/index.html",revision:"114bd3383e821f72f41f86a2751b245f"},{url:"tag/intro/index.html",revision:"3ebb5633eded666e6e336ca66e346f78"},{url:"tag/layout/index.html",revision:"46b1f55dc7d4051875360883cf040b15"},{url:"tag/layout/page/2/index.html",revision:"c633ade3effba62664c015a0a2109f8c"},{url:"tag/markdown/index.html",revision:"de44d8225ce5d974a18c6763040a2670"},{url:"tag/markdown/page/2/index.html",revision:"6f006a00e3b7ea5c4e81c1e97ccbbd27"},{url:"tag/markdown/page/3/index.html",revision:"422f803a8fc89839fc77a406a411fb16"},{url:"tag/markdown/page/4/index.html",revision:"41abb9b2ac7da124fff94ea4e37f730a"},{url:"tag/navbar/index.html",revision:"1ed8f1afb00dec0957c0b84421e1b2f5"},{url:"tag/page-info/index.html",revision:"0d28bce419b50477755179a34d7f02e7"},{url:"tag/page/index.html",revision:"fb434ac6087437b4481e0aca0a416511"},{url:"tag/plugin/index.html",revision:"e0a7bb90a8e1e3977cb89f6353aba383"},{url:"tag/pwa/index.html",revision:"2354bfa56a9f6cdf049e68fb090d33d3"},{url:"tag/seo/index.html",revision:"08e98c0b6e5c418f349052a0d34b8898"},{url:"tag/sidebar/index.html",revision:"f60c190996a58894145db6409638958d"},{url:"tag/sitemap/index.html",revision:"23863bd8ab2fa83f9b582d086100c03f"},{url:"tag/slides/index.html",revision:"d8d8477baad3150b41b213c39afd02d9"},{url:"tag/style/index.html",revision:"53093d0d9b9ae390d5a8e16396fcc1b9"},{url:"tag/themeConfig/index.html",revision:"bce46a9bb77bbb2a147e331f1a2071d2"},{url:"tag/typescript/index.html",revision:"f04b4651c1bb0baede5217fe9114efb0"},{url:"tag/vuepress/index.html",revision:"6387316b77ada16c42fc7b1502b0dd80"},{url:"tag/vuepress/page/2/index.html",revision:"92c4cc42bc3ea4fba118a2b566076369"},{url:"timeline/index.html",revision:"1135a5716f1dc35c1d005f33479ee476"},{url:"zh/basic/index.html",revision:"45f74034c6043cd021e28234ba5a49c5"},{url:"zh/basic/markdown/demo/index.html",revision:"451788d40c49550f0924ef211d88d057"},{url:"zh/basic/markdown/emoji/index.html",revision:"01d91868e69b09c9147ebd10d9f44ff2"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"d1742d62d54f0d15ea51059f1a30bdb6"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"8ad6b207cfc73e3da7d26ba6b874a95b"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"f5f2de3dc491397a0f3e6ad6f836c8e6"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"9eb8957ed8d46c17862036512a5d776d"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"f6eae439980bdc763c66221a2447e66e"},{url:"zh/basic/markdown/index.html",revision:"4e2b18e2f0101c6b86710c0e1df26e63"},{url:"zh/basic/vuepress/case/index.html",revision:"7cea3a123f649328938b136cfa929849"},{url:"zh/basic/vuepress/command/index.html",revision:"64fe23daf8ff63677e1bda51a6046c54"},{url:"zh/basic/vuepress/file/index.html",revision:"847727984c286afc846fecd90adf7e06"},{url:"zh/basic/vuepress/index.html",revision:"5e14159130d7a18064cd6b17ac1a097b"},{url:"zh/basic/vuepress/plugin/index.html",revision:"30325ba0fce49bce9528cabed10fc428"},{url:"zh/basic/vuepress/theme/index.html",revision:"999f1ca38899ce553aeff713d54dafc7"},{url:"zh/config/index.html",revision:"18432fd3761baf96fc3c904b6e5e32f0"},{url:"zh/config/page/index.html",revision:"fb537020c501b16a8f7d03f639ca0def"},{url:"zh/config/plugin/container/index.html",revision:"d9b2c5d4652ea8ddc5f632e16635a9d9"},{url:"zh/config/plugin/copyright/index.html",revision:"7953bcf0000d5d957d1417276ab4fa02"},{url:"zh/config/plugin/index.html",revision:"70c532db1c1148e900b412fdb23f9563"},{url:"zh/config/stylus/index.html",revision:"15434787adafbf670141eca9d2f60874"},{url:"zh/config/theme/apperance/index.html",revision:"a13275e0c5a1a38f0aed3d71e9235968"},{url:"zh/config/theme/default/index.html",revision:"4af4ada423a5e5d6eae61bba22bfb65e"},{url:"zh/config/theme/feature/index.html",revision:"59e8b59b23c5137965be0e7db4c533fa"},{url:"zh/config/theme/index.html",revision:"06c748d9b85c37544203dedf9f31fc0e"},{url:"zh/config/theme/plugin/index.html",revision:"3ce1a3dd6b1ccbec9364d402332ba4a2"},{url:"zh/demo/index.html",revision:"2c36b59ab4d082fc6fa83f1c8859283c"},{url:"zh/FAQ/index.html",revision:"a04ada70d4e05dc1e45d1b81453b6a9b"},{url:"zh/guide/feature/blog/index.html",revision:"8c5f8b105b359b246a9695791f43fd7f"},{url:"zh/guide/feature/comment/index.html",revision:"ee1af0b67c286174e20667756b5724ab"},{url:"zh/guide/feature/component/index.html",revision:"85a5513cc35adebd0a89371d5c79c5cd"},{url:"zh/guide/feature/encrypt/index.html",revision:"151e325a08f2fa304966d1cabc674337"},{url:"zh/guide/feature/feed/index.html",revision:"3d04481f3117dd9843fe6fa3426c5e30"},{url:"zh/guide/feature/icon/index.html",revision:"305b365ad59f2635617557c8a64794b3"},{url:"zh/guide/feature/index.html",revision:"eea73af59c3ca80090cb8318d482dc8a"},{url:"zh/guide/feature/markdown/align/index.html",revision:"d527ebba28054c69583491a77e50c2ec"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"00470a8ad3ec2ca541ec77f49877366d"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"d6f4ee7ff5987cf9b02c0bd8bf8f5669"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"324298074f3f4ab987d8210c6e5ba9f9"},{url:"zh/guide/feature/markdown/index.html",revision:"3f146ebf1f750862932bad0a77341b89"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"f7f54e5c4ace6ae9409920ad6ce0d63b"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"99859e2357fd332a55cbc3c9e122ac5b"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"1e4635650bbb690e35a6854a3ec70bd7"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"9995b05a0a86ce1c823be0e3ecc766e1"},{url:"zh/guide/feature/page-info/index.html",revision:"cec82ecf781580658495e9a433ddd9ee"},{url:"zh/guide/feature/page/index.html",revision:"fe94d0670b99bbb35b644011d05460dc"},{url:"zh/guide/feature/pwa/index.html",revision:"3d715ebfbc325eebe540191130d83635"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"689f5e5cf6a4a5bcd2317057954dcbed"},{url:"zh/guide/feature/theme/index.html",revision:"d8f766801eb4853141c7524e2d8c07b4"},{url:"zh/guide/feature/typescript/index.html",revision:"8e5e618f5256c129f70c65c0fb91f31b"},{url:"zh/guide/index.html",revision:"a41d1abb92f7853899d7bea41f6ceb79"},{url:"zh/guide/install/index.html",revision:"546d94b8bb7fa255a989b943309bef44"},{url:"zh/guide/layout/blog/index.html",revision:"b2a3d39579d25380892b42fa14873a66"},{url:"zh/guide/layout/home/index.html",revision:"a43901c0941b2fb6285bd0c64fdb0ede"},{url:"zh/guide/layout/index.html",revision:"05f69ae8bca1d728aced4ad813aa9568"},{url:"zh/guide/layout/navbar/index.html",revision:"383bc8b9e3bb2232464892864fb96067"},{url:"zh/guide/layout/page/index.html",revision:"22584cbe074587bb64f5433d4ae039ec"},{url:"zh/guide/layout/sidebar/index.html",revision:"44cedc8c5a0fb2b8b03f160bb777181c"},{url:"zh/guide/layout/slides/index.html",revision:"e146d3a2ec85e87256016d2c094da87b"},{url:"zh/index.html",revision:"9626ac9c2f3ce649de63be40a7f94953"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.f21437ff.png",revision:"f21437ffbc4b13ab6a451dde8d9dda84"},{url:"assets/img/darkmode.18bf8eef.png",revision:"18bf8eef74622db9ab125f182d0755ed"},{url:"assets/img/darkmode.5a75246b.png",revision:"5a75246b475e9adf13d7aba1ba70b28c"},{url:"assets/img/home.0bba1141.png",revision:"0bba11416a42fe9f9599c96a7adc4dc4"},{url:"assets/img/home.0e77001c.png",revision:"0e77001cd0a6e3ab329791d9331e9f15"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/iconfont-edit.ae032366.png",revision:"ae0323666d64aad8158bc08c9c32f8e5"},{url:"assets/img/iconfont-edit.f701530b.png",revision:"f701530b552bbaacefa45ddaba8aebdd"},{url:"assets/img/iconfont-new.11943023.png",revision:"11943023008a21f03d8899fdbeae4191"},{url:"assets/img/iconfont-new.d38bbd1f.png",revision:"d38bbd1ff33f7eec493ce626552658e2"},{url:"assets/img/slides.30e00024.png",revision:"30e00024078ddaa677a427ffceb322ce"},{url:"assets/img/slides.917fe32d.png",revision:"917fe32d70720a5957c350395234bb54"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
