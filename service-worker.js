if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.9b0f230b.css",revision:"d4f96bace8a6c59ad7733706042b8bde"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/130.82222ec7.js",revision:"7f97f5ea9ee1646b4702faf74b260efb"},{url:"assets/js/131.b5ceab34.js",revision:"d8a55dd0674a323e579fb0adee83c3bc"},{url:"assets/js/132.55c67ae9.js",revision:"b712c1f8062d19ba92718649b46a2877"},{url:"assets/js/133.12f27cf2.js",revision:"fe187711ce20afeb1e4e107fb15420d9"},{url:"assets/js/134.2a43b72b.js",revision:"fd01f7b56ffadeba28dd237c8a79972c"},{url:"assets/js/app.cb90e07f.js",revision:"9fcc30518b727db5695e9cf7daa0e565"},{url:"assets/js/layout-Blog.2719d2ff.js",revision:"3c6609006f9635936ba9c3258290c47a"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.ef3ad956.js",revision:"9952e0f2c5ea7b33393940c0dcab5dfe"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.8ead4c27.js",revision:"8e60f8a2180fe48bc5d9a6bcbb07ed5b"},{url:"assets/js/layout-Layout.e28d6ea7.js",revision:"4ef6a54753233803b9361b6bbf0fc779"},{url:"assets/js/layout-NotFound.c4b5033e.js",revision:"b6fc36fd880649592c7a3de9d7168733"},{url:"assets/js/layout-Slide.53add52e.js",revision:"e33b96f972a595d4041a9b64c591da16"},{url:"assets/js/page-AboutVuePress--4a71114e.68ba8592.js",revision:"9ed5e57ec8656adff13acd847e56efea"},{url:"assets/js/page-Basic--770cb96b.69eb0f8c.js",revision:"1515b88c41810d9debff57e5f573c139"},{url:"assets/js/page-Bloghomepage--64265752.82012225.js",revision:"7f49e07201fe8e6524e11cd9e1bb602c"},{url:"assets/js/page-Blogrelated--17c260a2.70c2a797.js",revision:"3c777ca20046cb6a7fa1351f143d8ac5"},{url:"assets/js/page-CodeDemo--a44bde9c.7bc73516.js",revision:"6bf116363987c53e2c577e720e3740e1"},{url:"assets/js/page-CommentFunction--5bb6671c.1cbf6c77.js",revision:"0702465ac5b22c7185cb8cac167182b6"},{url:"assets/js/page-Commonproblems--2b571e9b.20e1bf45.js",revision:"afbd2a0732984b730af1d12259b0b285"},{url:"assets/js/page-Config--35a0a7d9.2d125fd3.js",revision:"ca6274b40861b4e511770fea0c91d343"},{url:"assets/js/page-Customalignment--4f21aa5c.d0e9264d.js",revision:"f1c3942e8d1f9b15cc12ff75460f4d83"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.85393a3f.js",revision:"2c9c8f39821ffcd02cc250ce45374f1d"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.ba12fd7c.js",revision:"4cad864911ff3ef21e862c7b0470bb63"},{url:"assets/js/page-Demos--f328658e.698d3d4b.js",revision:"f2c8139f0d266d0f77c833913c825fc1"},{url:"assets/js/page-EmojiList--41bb29b9.74cdbad6.js",revision:"57e85aa35064086b77f02b036e0f6fc2"},{url:"assets/js/page-Emoji列表--404e6737.d93e8d6e.js",revision:"ed3a3cc9cd9c2f9c883e3920240d3cf1"},{url:"assets/js/page-Encryptionfunction--181bdc9c.d318c2ec.js",revision:"24dbb1c70e4f02b8dbd5fc89bfa502a4"},{url:"assets/js/page-FileStructure--665a4f1c.9af9be91.js",revision:"dd141eaa3623b404cb027505cc78700e"},{url:"assets/js/page-Flowchart--7ce6d974.a5e9cb86.js",revision:"6e9cbf41dae2ea6cc458d23fcd9b0737"},{url:"assets/js/page-Footnote--0c733e52.f1ffe684.js",revision:"fce5a93d41665377b816bd37c733ee84"},{url:"assets/js/page-HomePage--5834599c.c3a7a319.js",revision:"1f916b94bb0ab267c41c1f28530edb27"},{url:"assets/js/page-InstallUsage--0ab466d2.c4614cb7.js",revision:"051ca27a76ad421ad3eb85b2fb91677a"},{url:"assets/js/page-Introduction--d4910962.6b6cc13f.js",revision:"2055f0eb4ce24a3ab7a5af4083ae4b45"},{url:"assets/js/page-Layout--12bd4f0e.8238d537.js",revision:"5a534df85c8e88156b6fdf60489a2751"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.1639ac17.js",revision:"13e6692f98f8f5de1e3afa86b399834b"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.ba0ac881.js",revision:"6c37b6d3c53e9509ebda2d777ea05ba4"},{url:"assets/js/page-MarkdownIntroduction--270989ce.f6fa4e41.js",revision:"3a4b607053f487ebe744e42d494381dd"},{url:"assets/js/page-Markdown介绍--0e6891b6.0f9ff3f9.js",revision:"3c981e989b54f4728f2677191f145c18"},{url:"assets/js/page-Markdown增强--6162938f.8400a140.js",revision:"6e925d186991345578d7d01b2c18ed18"},{url:"assets/js/page-Markdown示例--5479fe88.0c543372.js",revision:"71da51ddecc5d35c48f402731f05934b"},{url:"assets/js/page-Markup--6b1f341c.06208f68.js",revision:"66d0aed43787e753fb7b7c9c512ac28d"},{url:"assets/js/page-Nature--749fb09c.c678eec1.js",revision:"d8f3d5c213c34cc28ddf307ee69184d9"},{url:"assets/js/page-NavBar--c7bf87dc.f22a2397.js",revision:"0ba883038a9d8ad9bb6f959e84b2996c"},{url:"assets/js/page-NewComponent--1d138c72.66748144.js",revision:"496d15c31d9e6df8d64d4cc79faed8e0"},{url:"assets/js/page-Newfeature--5136c541.70bdfe7a.js",revision:"7aaf08d4a8c9d3e8ace42397d34f0906"},{url:"assets/js/page-Object--16031ab2.3dd01a13.js",revision:"80bde45c1a8b246669eb40d5fba03c92"},{url:"assets/js/page-Page--af17b59c.809257e1.js",revision:"8799c4ebbb67775e57dddf30767fc275"},{url:"assets/js/page-PageConfiguration--0aacc152.4715c07e.js",revision:"19f9eacd6338f572a10647f2e686b0ac"},{url:"assets/js/page-PageEnhance--03665ac8.5797a775.js",revision:"d2a462457ed3c6139520c980cd846715"},{url:"assets/js/page-Pageinformation--71efd5d2.5de0a5bc.js",revision:"d8dd230debf4b2853ac4abb41c85a9e0"},{url:"assets/js/page-People--2182769c.f3e1e435.js",revision:"094fa0fb6d7b420d4eff370d10f2cbd6"},{url:"assets/js/page-Place--951cdc00.f19614cd.js",revision:"27413829b8347d0022167d535cc9ed6a"},{url:"assets/js/page-PluginDescription--137c6c07.2719ba0b.js",revision:"130bde5b094b213c1b49cc3032a49fd8"},{url:"assets/js/page-Plugins--adbf415c.27c4dfc3.js",revision:"83d44605fa0d7957ed4d33ddcbbedc4c"},{url:"assets/js/page-Presentationsupport--8f8e54dc.23964f71.js",revision:"57e55ab06e9b1b3c74610f917100feb3"},{url:"assets/js/page-PWA--01089712.317b29cf.js",revision:"5b37bb49d9b6716f3809903924f5492c"},{url:"assets/js/page-PWA--243ef2b8.31382c90.js",revision:"bcbef664b69fcfe752b6b6ff9166dfa7"},{url:"assets/js/page-SEOandSitemap--ccd3659c.a1373d47.js",revision:"420d0eecca6299302f8341ba3f99ded9"},{url:"assets/js/page-SEO和Sitemap--2853f164.8743c984.js",revision:"eb31c5194e1a481741b00f38a28a730e"},{url:"assets/js/page-Sidebar--2fa1ea2c.64b0705a.js",revision:"7dc2ed02248a1a57c33d37334756d706"},{url:"assets/js/page-Slide--269ae052.c3b9b060.js",revision:"f9b8faf059c3601014759b993819096d"},{url:"assets/js/page-stylusconfiguration--6796cdf2.bdc77f29.js",revision:"94878ae56acf4819a7e54142210fce6d"},{url:"assets/js/page-stylus配置--0ce19a82.e785b38b.js",revision:"8b0faa54a4619cd9d1a7b8c2c2d0e472"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.2b532f06.js",revision:"19915584c983b48e0a87d6c5b85f88cf"},{url:"assets/js/page-Symbol--a9259c5c.09df0d88.js",revision:"f5a233530ea90550b5d22bf5ea5059ba"},{url:"assets/js/page-TexSupport--64cb5e50.b1843e81.js",revision:"56ef389c0d0ca812ca8c5a31080c1810"},{url:"assets/js/page-Tex语法支持--1e02b152.9a75e395.js",revision:"aa06309ef2b840afcea8a3566d2ce8fa"},{url:"assets/js/page-ThemeConfig--1120a0ce.ce555199.js",revision:"bc3b10cc49d478de7dba867180179a1e"},{url:"assets/js/page-ThemeConfig--1726e14e.0d0cdeab.js",revision:"d1d7c8eafd31028f453554af059ac7b0"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.9e8e9705.js",revision:"73ef676a1350b463918c4e5ddabf9d3f"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.89d92404.js",revision:"084275ca1b3b9eb94f1ff6033c1b0a6e"},{url:"assets/js/page-ThemePluginConfig--958196dc.a5650735.js",revision:"6b3ae4bfe8e977d7534b7c499eb15bc2"},{url:"assets/js/page-TSsupport--09728ac8.b6006481.js",revision:"4fb31621e02ccc897e5ee42f3fb466ed"},{url:"assets/js/page-TS支持--4625f812.48436b8d.js",revision:"43425c40f827d835de4e9ae25c0ed715"},{url:"assets/js/page-VuePress--b7060eee.4681d94f.js",revision:"e0b2ff205596a3d6658774f3410d2403"},{url:"assets/js/page-vuepress-plugin-container--31498112.121cd7be.js",revision:"ba3fa85828a17c3749543c52e5e71116"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.fca84509.js",revision:"b2bf019ecccc8efcf62ad2c1a069da2a"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.74314297.js",revision:"e73fb161cd9fc4007d7d2050955ccb98"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.93b53c68.js",revision:"a71d9af2412c7ce1c12ef6804ff8dd6e"},{url:"assets/js/page-vuepress-theme-hope--354da24e.ba170cc2.js",revision:"b2744a8a1c0b3ec0bb83b091fcd1a17a"},{url:"assets/js/page-vuepress-theme-hope--776d8369.9d80276b.js",revision:"5b1f7c027b8a5961e30c7c067c44d587"},{url:"assets/js/page-VuePressCases--082972f2.f95f6ffe.js",revision:"5b4fd0b7dca907a44c0b99a8270576d8"},{url:"assets/js/page-VuePresscommands--9f3f316c.21bb78eb.js",revision:"3449fc7f815deb261b20d329e5132470"},{url:"assets/js/page-VuePress案例--531d5f3e.b515f1c4.js",revision:"36bd8ab9bce263fc48a7b2bebc4d4400"},{url:"assets/js/page-上下角标--8efed9dc.02f7887a.js",revision:"079c7d3f69fb40f00144a65d336780c7"},{url:"assets/js/page-主题功能配置--5bb71452.8a98443c.js",revision:"291cffcbd83708449b9ac59272866640"},{url:"assets/js/page-主题布局配置--7db7eff2.ba4ae97a.js",revision:"04426bdd3b34ae622a80e3cc3d66f0f4"},{url:"assets/js/page-主题插件配置--1b0c3e98.374445b4.js",revision:"01be80d85244b3b0298c5018dafec905"},{url:"assets/js/page-主题配置--21dc088d.3f63fe1c.js",revision:"c194bc4855396363dbca7757a52269f9"},{url:"assets/js/page-主题配置--2c572572.76886f6e.js",revision:"502d2ec31d21d6e4491298af86b82941"},{url:"assets/js/page-人物--b4fc27dc.f6a5da53.js",revision:"e19bc865aa3ef7316de9cf4e657df868"},{url:"assets/js/page-介绍--2e99d139.db59d49f.js",revision:"cff4076f8165c30fd74c576dd76ceb3b"},{url:"assets/js/page-代码演示--0dad4f52.bd1d5dd7.js",revision:"8f8d8375a34dff7c54e106159e73296a"},{url:"assets/js/page-侧边栏--43054cb2.41735628.js",revision:"ce36cfd46e183868dcde991d77feccf2"},{url:"assets/js/page-加密功能--2361b7e4.6c28d411.js",revision:"ed53d87327224ab1d149d45ff3b69d8c"},{url:"assets/js/page-博客相关--6a3fd4f2.c3f2a9fc.js",revision:"8bf1ca161cc99b18dbb60659e102e198"},{url:"assets/js/page-博客首页--1eb2b298.c620edeb.js",revision:"164ec67a61a179fa2c2611d6b594797c"},{url:"assets/js/page-地点--6710785c.7b6f3bda.js",revision:"7ba80f6863ac99edffeaddb6fd4eccd8"},{url:"assets/js/page-基础知识--4d466a79.f4241bf5.js",revision:"11151f3c8e5e3571ee0b4172c5b0d20a"},{url:"assets/js/page-安装使用--76e0e5b0.2fddf41b.js",revision:"222fbabb2dbd035a75a0151490ca7218"},{url:"assets/js/page-对象--e150da9c.f6994a44.js",revision:"72ac72d80719be2d7e5d47ea82360c41"},{url:"assets/js/page-导航栏--183844fc.095da459.js",revision:"350250afbb08ecc4e9594a9fa20f05e3"},{url:"assets/js/page-布局--fa93e36a.5f355495.js",revision:"2992b641b5ddd5662df2fb6ede361f11"},{url:"assets/js/page-常见问题--10ab790e.06180d82.js",revision:"6161e057830563de22f38d32b83be210"},{url:"assets/js/page-幻灯片--818cb750.1c75f243.js",revision:"d7f260786670df10d79b6a9ca5e68bcf"},{url:"assets/js/page-幻灯片支持--5808e664.ecc6aca1.js",revision:"a7961e2a481454319c572e96ef77f52b"},{url:"assets/js/page-插件--32355f10.56918a5c.js",revision:"c4798e2abdc1291f5a12689f5374ac28"},{url:"assets/js/page-插件说明--cbca1c8e.7c9ca437.js",revision:"d763ba26143043cdb83a603cb780018a"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.90372af3.js",revision:"1404d385feda2d2f8d2de3be5f12b5f5"},{url:"assets/js/page-新增特性--30c6c799.8270baa2.js",revision:"f81494bb72f0e17953abaf287dff0e58"},{url:"assets/js/page-新增组件--0979095e.6a83d25e.js",revision:"b764959431e31ec7da88e8079a58a9ff"},{url:"assets/js/page-标记--0ac52704.79ea168a.js",revision:"1d1259f3986bd4b8ac4a55f5c32b51d0"},{url:"assets/js/page-流程图支持--582eff1c.e475a9c7.js",revision:"af8c7d6603a6ff2f7fcbe7b7117dfb88"},{url:"assets/js/page-深色模式与主题色--01662674.168d13c7.js",revision:"1a2a366060c61f856a78894d703172ec"},{url:"assets/js/page-符号--2db8fb80.d3c5fa4e.js",revision:"99012ade56b663597a5e4e7fbe825919"},{url:"assets/js/page-脚注--17d88350.97b8c814.js",revision:"716fb88341dc90fb90f34e460ae1ba3e"},{url:"assets/js/page-自定义对齐--048d31dc.5cc0f7d7.js",revision:"5c5789a7666002565a060365b59f1401"},{url:"assets/js/page-自然--7ec33be2.329cf1c5.js",revision:"fa7c512787ef4ca3bd21212b368ad468"},{url:"assets/js/page-评论功能--350aff9a.45edd7ee.js",revision:"8b424cee66cb9596b7a960c1efc631ce"},{url:"assets/js/page-配置--d315f8fe.710e687a.js",revision:"82b961fc4ec0f60d40fafb90338b075b"},{url:"assets/js/page-页面--78423bfe.5cb6e904.js",revision:"d4a4242f8ece1e9e91c6d32e96ada5ed"},{url:"assets/js/page-页面信息--455b9800.d5ac1261.js",revision:"dd9a06dd7416829b67a8c51e9a88e857"},{url:"assets/js/page-页面增强--2e4cf75c.9f7c87f5.js",revision:"7e87436fa88387d1416de7d83127427e"},{url:"assets/js/page-页面配置--02399408.1610a6b7.js",revision:"fb26cd31ed7e4abe55a7eccdb6c5c803"},{url:"assets/js/page-项目指令--2f3d7c1c.a102d2d6.js",revision:"3194bcde8fabdec22d92ae1980c36017"},{url:"assets/js/page-项目案例--1f3d6482.4e18fb6a.js",revision:"7ff1c95b8b85e7e18256ae5426b7aea9"},{url:"assets/js/page-首页--79a22944.5784b448.js",revision:"45973f92bedcdd236c405fa94287ee7d"},{url:"assets/js/page-默认主题配置--0d5b7f32.d4152aab.js",revision:"da210fa80836e4ab11c234195cd98eb9"},{url:"assets/js/vendors~docsearch.a4fb202e.js",revision:"47180209f0c434e666306212aa863f03"},{url:"assets/js/vendors~flowchart.c8698202.js",revision:"27f497d74f10f457bc2b25cd1d6919dd"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.8fbfdd7b.js",revision:"09b8f577d5c66f61ec389d0a6732f23e"},{url:"assets/js/vendors~photo-swipe.1a724fbe.js",revision:"7c3bdfa9ed9716bba10380eed2bd7861"},{url:"assets/js/vendors~reveal.8dc0adfb.js",revision:"e3913c79c2a416da34dd87ef38f9e70e"},{url:"assets/js/vendors~valine.8d7a4e20.js",revision:"17e54be81da37a5245071ef4c9650789"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"512f405561c11d05a9493149bb6da213"},{url:"article/index.html",revision:"c0da15345bbe79eb84649c7ba9d7c830"},{url:"basic/index.html",revision:"6ef4c7e8e3ca84539edaa30702f56b2c"},{url:"basic/markdown/demo/index.html",revision:"a15595d81a9dbd1cbf17c4fb3b42a188"},{url:"basic/markdown/emoji/index.html",revision:"4a331a6f8148dfc35e1c2893aa071781"},{url:"basic/markdown/emoji/nature/index.html",revision:"cacd89df3054d6d0c1306fa567d8f736"},{url:"basic/markdown/emoji/object/index.html",revision:"849bac481757d8d5ae7acc92ec45badb"},{url:"basic/markdown/emoji/people/index.html",revision:"8dec0aa8163f6b5f358ee81553010e6e"},{url:"basic/markdown/emoji/place/index.html",revision:"019dc61d8c172d13580b2a65e9006792"},{url:"basic/markdown/emoji/symbol/index.html",revision:"fd6fdb0e62e7cb5e18911fa9bda6b0f9"},{url:"basic/markdown/index.html",revision:"246fd374d46ef8c146a90f0719a0812b"},{url:"basic/vuepress/case/index.html",revision:"47e389877dff797121abf786a1129de4"},{url:"basic/vuepress/command/index.html",revision:"9c6887950a836aa00927cb08b0c29105"},{url:"basic/vuepress/file/index.html",revision:"06448714aa78dba34277a327b3561219"},{url:"basic/vuepress/index.html",revision:"0e442f69fcc4a7f8994e1bda0fb8b0ec"},{url:"basic/vuepress/plugin/index.html",revision:"32d3b252dcd601625b07cdf2cdf805f4"},{url:"basic/vuepress/theme/index.html",revision:"f079e3fc25aa6fe6c78a274211122bb4"},{url:"category/basic/index.html",revision:"e2acb0a92f9e2a14c7092d0c48d07b0f"},{url:"category/basic/page/2/index.html",revision:"4896cc479f13c3246888d3ea3e0e8b69"},{url:"category/basic/page/3/index.html",revision:"8aaad5d4281baab5527b7e903a943c6d"},{url:"category/config/index.html",revision:"83f593c6b94e8ea2faa1f79472460ca8"},{url:"category/config/page/2/index.html",revision:"1e464d5d55b058e88765db9c790cac64"},{url:"category/config/page/3/index.html",revision:"a52353f4d1b5f8c0a902afcf62b75bdc"},{url:"category/demo/index.html",revision:"1d759acc5d832ae6c33db629d0953652"},{url:"category/FAQ/index.html",revision:"658e8551cd9779fcc9247a59be70f984"},{url:"category/feature/index.html",revision:"821dd31645a2c25d99dda83d0fccf1fb"},{url:"category/feature/page/2/index.html",revision:"aa73b3b7589e6c503a6231d5fe3daf8b"},{url:"category/feature/page/3/index.html",revision:"2f4542df44599af8e94b6a714550d8c0"},{url:"category/index.html",revision:"961cc91823c3ebf860452b4d5aa777be"},{url:"category/instruction/index.html",revision:"6dc853832ddf69c23b328e728abdeebe"},{url:"category/layout/index.html",revision:"3917ed670fa9c0fe09877040fde34b02"},{url:"category/layout/page/2/index.html",revision:"0a19745bb6d0950fa4731b1db531820f"},{url:"category/markdown/index.html",revision:"166486a405300accd7e6d8fece5330b2"},{url:"config/index.html",revision:"9d6fe157e99d46201e1507957d6f25e9"},{url:"config/page/index.html",revision:"769adf1ea6c9809013eb9e716beeb3df"},{url:"config/plugin/container/index.html",revision:"e1bbe0b0b5db278e899b4da5037b7a6b"},{url:"config/plugin/copyright/index.html",revision:"e367deb490b9d80297927bd6ba1a0d71"},{url:"config/plugin/index.html",revision:"7746862d854e8cfaa30ddfc754974063"},{url:"config/stylus/index.html",revision:"3f09d65979ce06b35dec0ee876d1926c"},{url:"config/theme/apperance/index.html",revision:"fef43d1abd95257019b74582a95912ec"},{url:"config/theme/default/index.html",revision:"0abeff07dd97fd81b9b87a014904df8b"},{url:"config/theme/feature/index.html",revision:"92cab050848e46dfee6e93b2c9d87892"},{url:"config/theme/index.html",revision:"5be069e1dc459ffb8a2576bf1238ff5f"},{url:"config/theme/plugin/index.html",revision:"80c072bdc3eeaf527cd19d59be5268ff"},{url:"demo/index.html",revision:"0a50dcdd06e270ac390c00c510702b38"},{url:"encrypt/index.html",revision:"4cd7d91f32767d8c1500bb440ab0a325"},{url:"FAQ/index.html",revision:"8b244a91af9df1ec8e52b08f55b4ee65"},{url:"guide/feature/blog/index.html",revision:"4cc58fe109ae3647f12af29368e4cdc6"},{url:"guide/feature/comment/index.html",revision:"b49d40996190344b6dae915da96f2922"},{url:"guide/feature/component/index.html",revision:"2e412951c65bd6379c1ce9a7b1955670"},{url:"guide/feature/encrypt/index.html",revision:"7474f9194889f36b4a0b909a5333b024"},{url:"guide/feature/index.html",revision:"a15444e9bc918c9d1d014e61644face6"},{url:"guide/feature/markdown/align/index.html",revision:"0bd97a770890f66252b0c13fb9d772d1"},{url:"guide/feature/markdown/demo/index.html",revision:"1eec5c8d5d394f4b6cafb420745a6d63"},{url:"guide/feature/markdown/flowchart/index.html",revision:"c62cb39d5ac444d1887fa4b4c0b62a75"},{url:"guide/feature/markdown/footnote/index.html",revision:"67ae30319f4edc8cc078e721f66cb384"},{url:"guide/feature/markdown/index.html",revision:"61e509e33d1d4343b6f5dbcbca9ebf9c"},{url:"guide/feature/markdown/mark/index.html",revision:"bad625489d3826b451e668e5f574f8db"},{url:"guide/feature/markdown/presentation/index.html",revision:"48b250f39f9e813591a20a24b8ac687a"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"264acbd7754415b4be4d35b10f27e14b"},{url:"guide/feature/markdown/tex/index.html",revision:"8ab95da61869d2854c8eb271ad5b3d98"},{url:"guide/feature/page-info/index.html",revision:"92ddca220f684faceed9379f489db4e6"},{url:"guide/feature/page/index.html",revision:"aa764e0d7736fda9094d601ed22b9aac"},{url:"guide/feature/pwa/index.html",revision:"b70def5c896a8eb630d4065afb088a5f"},{url:"guide/feature/seo-sitemap/index.html",revision:"501a70e6250eb951fe0c9cb69baeacc5"},{url:"guide/feature/theme/index.html",revision:"0cb1900dfd7b59b604e517bd2d6e7a97"},{url:"guide/feature/typescript/index.html",revision:"23fb33e358c95c39de6574daf77cf1a7"},{url:"guide/index.html",revision:"2adc39eaca32c409e95585bbe1774fa5"},{url:"guide/install/index.html",revision:"4f4e355f4604947e37f448bb5b7abd08"},{url:"guide/layout/blog/index.html",revision:"3456853b7408a3d366809e5d3f655efb"},{url:"guide/layout/home/index.html",revision:"44b81782d270f031ed5da1d794dd417e"},{url:"guide/layout/index.html",revision:"5e66f5d57a87bd24eccaae49cf171f49"},{url:"guide/layout/navbar/index.html",revision:"102528d6809833389ee652bc67a0dae6"},{url:"guide/layout/page/index.html",revision:"264add3bd84c7319bdac8e96c41d121b"},{url:"guide/layout/sidebar/index.html",revision:"1ecb82a58f2d6ca345e484286b1a383b"},{url:"guide/layout/slides/index.html",revision:"d078749843c5a88991ea0e3a683d83be"},{url:"index.html",revision:"c0ee158d1dde046da3b66d7352fe5dac"},{url:"slide/index.html",revision:"0ab2878beb96b452aecfa76af5367b04"},{url:"tag/blog/index.html",revision:"971589d20f61265bc1abbfc0e64ac8ac"},{url:"tag/comment/index.html",revision:"4da5a06f04c455fbfef9e3dbef63f233"},{url:"tag/components/index.html",revision:"46da7eee4fa686581d5940d1e7227df8"},{url:"tag/config/index.html",revision:"d295d21a6f896317a2ed8e1bfebc615f"},{url:"tag/config/page/2/index.html",revision:"92c9f0884dd732ee5e4cb4e6506eef03"},{url:"tag/config/page/3/index.html",revision:"7ac59e512b8693062d3dd1d09b13c78b"},{url:"tag/emoji/index.html",revision:"c99d58a6ba0c97e861a95a257153bb84"},{url:"tag/emoji/page/2/index.html",revision:"cb3ccabe3582d02f9f4956865a4d441a"},{url:"tag/encrypt/index.html",revision:"02de518b8faf72ce1761f5988bd7931f"},{url:"tag/feature/index.html",revision:"73945d2b916bd352e55bc8e88932a009"},{url:"tag/feature/page/2/index.html",revision:"63262245189faba2245d3131abe3201e"},{url:"tag/feature/page/3/index.html",revision:"8926ae913777c9c4106234a4f9768dd2"},{url:"tag/feature/page/4/index.html",revision:"4b8aa419cf30871fe49d6d796bcb5f59"},{url:"tag/frontmatter/index.html",revision:"f19f33531c70ef44bb1f7ca5fc9c149f"},{url:"tag/home/index.html",revision:"26c9fd4d2615a70286ae60b0d52e5cf5"},{url:"tag/index.html",revision:"5a94ef9d4d7026661a30ecfda62c990a"},{url:"tag/intro/index.html",revision:"c1ad7a684da72772680c4deb2048321c"},{url:"tag/layout/index.html",revision:"91fab7be87da95da9e674dcd68929702"},{url:"tag/layout/page/2/index.html",revision:"c772b57afc1b981a3d18df19a604dfee"},{url:"tag/markdown/index.html",revision:"4dfa2eca7fc636ab1de3514dd9f4eab3"},{url:"tag/markdown/page/2/index.html",revision:"baec6658f8ed87f69fefaaab8d055f59"},{url:"tag/markdown/page/3/index.html",revision:"76ce5d973cfd1053f722d79122f6cb08"},{url:"tag/markdown/page/4/index.html",revision:"26d67274b96bf0a125a0992dca436e31"},{url:"tag/navbar/index.html",revision:"ff80190c3fcf5b0e633b208714a4696f"},{url:"tag/page-info/index.html",revision:"29f447a54cd75c9bf685515cc2ecd9bc"},{url:"tag/page/index.html",revision:"edb5be7c751d0e4e6034cdcf28379c13"},{url:"tag/plugin/index.html",revision:"60699190ce8ba1df41357830c5ba467f"},{url:"tag/pwa/index.html",revision:"9d93dc2a00ceafcb283b7ba1cdc6eedc"},{url:"tag/seo/index.html",revision:"c9ace2ce8ef2787cdda4bd0f5f2041e7"},{url:"tag/sidebar/index.html",revision:"36fddd5a56480a21e15fc2bab4ca3cf0"},{url:"tag/sitemap/index.html",revision:"e412339fe8e1893339a26697a9f6baf1"},{url:"tag/slides/index.html",revision:"1cbfe3ef0db295a32a1c2d858bd804d9"},{url:"tag/style/index.html",revision:"04ecb4bd0e0fc03d8e3bed33c501e0e6"},{url:"tag/themeConfig/index.html",revision:"60dc0a9a0d5d3f1e44e30bda6ace8c34"},{url:"tag/typescript/index.html",revision:"11becc0cc2637df104ab0776bda77041"},{url:"tag/vuepress/index.html",revision:"9f5827c4a192b2cedabe7b2b6edc3054"},{url:"tag/vuepress/page/2/index.html",revision:"d228742b6023e8567c10344a00a9bf67"},{url:"timeline/index.html",revision:"69bda9873dbd8b4b590e19b432e705eb"},{url:"zh/basic/index.html",revision:"0442de4928d1a906eb146feeab8dce5d"},{url:"zh/basic/markdown/demo/index.html",revision:"159191161d12136332343f658931484e"},{url:"zh/basic/markdown/emoji/index.html",revision:"f32225e67c1cd8dc6ba58be5877429bc"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"91d9709f448a6624d121612e8300bfce"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"3c8088be1f1e388f35ee9f80d1dcb337"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"8f86a28bfa705af8f2df13fc7211fb09"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"5328061f0a65e06edd110956de511ac5"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"a2682bcc7770a79145fdc709437b3be7"},{url:"zh/basic/markdown/index.html",revision:"d279be43145124dc26e97c3667b8a9ae"},{url:"zh/basic/vuepress/case/index.html",revision:"c628638448d06ff3ea9b7399729aea6d"},{url:"zh/basic/vuepress/command/index.html",revision:"39ca28a6f2d85eac82c64bc35abce0cd"},{url:"zh/basic/vuepress/file/index.html",revision:"b7bb3a30f5f3fd0e19687b2536971c91"},{url:"zh/basic/vuepress/index.html",revision:"a29cf1ba69726cd710461c99ee46cd6c"},{url:"zh/basic/vuepress/plugin/index.html",revision:"fb6a5c9971ef19f3b08fd67f16555224"},{url:"zh/basic/vuepress/theme/index.html",revision:"d26b83964e44692ab34025dcb5049e83"},{url:"zh/config/index.html",revision:"d1f6998dd463db30874b91ddef5bed43"},{url:"zh/config/page/index.html",revision:"cdda7ed5d80929526fb381c15a799129"},{url:"zh/config/plugin/container/index.html",revision:"a342506a950b729e0b98b31a0013be04"},{url:"zh/config/plugin/copyright/index.html",revision:"d339b600c3bbb188237e2cd1e1ad3167"},{url:"zh/config/plugin/index.html",revision:"64ce85a5f939d549e148bc2f580996b0"},{url:"zh/config/stylus/index.html",revision:"497a620fbd717c50249ab67b5c6ea9b3"},{url:"zh/config/theme/apperance/index.html",revision:"26ac4fb619585d65293dcc8af466e82e"},{url:"zh/config/theme/default/index.html",revision:"cb10f8af50805b4fd1017929cbb1c51e"},{url:"zh/config/theme/feature/index.html",revision:"3399a86045dd842802e1741cc12918aa"},{url:"zh/config/theme/index.html",revision:"d2f3ba04f6c04a34fd4f0e72561ba335"},{url:"zh/config/theme/plugin/index.html",revision:"f29ab53aafa0ac2eccf392a9af398651"},{url:"zh/demo/index.html",revision:"664c2e536a47aaae5c34bc0f23f58ffb"},{url:"zh/FAQ/index.html",revision:"8ff686da61530bc6542150402d7d445d"},{url:"zh/guide/feature/blog/index.html",revision:"bd8b40e9f29ad4f28dea1c9f380d558e"},{url:"zh/guide/feature/comment/index.html",revision:"7bf8d7c89ebb91c95727ee0ea5cff496"},{url:"zh/guide/feature/component/index.html",revision:"7b6dca8ca4ab10e31d68dd3d28e28b48"},{url:"zh/guide/feature/encrypt/index.html",revision:"1f479784cfbeda87c211817360bf3d82"},{url:"zh/guide/feature/index.html",revision:"ddfd6f8d196a6a95579a7a737ec42d88"},{url:"zh/guide/feature/markdown/align/index.html",revision:"78079e7222c3493dfe12bbe369e3d96a"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"aad38b443e3a4064fd29ec9389d0ad0a"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"a50370b8cc542dc062fc2193987ad7c8"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"f4782092f05b3d8d6d408986f132360b"},{url:"zh/guide/feature/markdown/index.html",revision:"feb071932790dfe045f4eec972774ed0"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"5daad94450a19e7bb8eacbb47eae7d1b"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"1c0149f1ff98b724cfe0694174fe918e"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"3ce39672bbd9c2c2362a0f07e85eb026"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"155ec9fb54c7485e8ad9645865f556bb"},{url:"zh/guide/feature/page-info/index.html",revision:"70b8f82e1e070813e760ffbe52953db3"},{url:"zh/guide/feature/page/index.html",revision:"d7559bc34241e23621caaa7f8ecd2270"},{url:"zh/guide/feature/pwa/index.html",revision:"4fd72ae2a480697146640b8e191590d1"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"ffe21a05805da3e9af80a3aa7e649540"},{url:"zh/guide/feature/theme/index.html",revision:"91846228fe52845f24e6115fed0e7109"},{url:"zh/guide/feature/typescript/index.html",revision:"46fa29bfc9954fe8d2aa0fefccbca826"},{url:"zh/guide/index.html",revision:"d2eac7b5ecab03613862396d5680c4b1"},{url:"zh/guide/install/index.html",revision:"bb842cf9b94166eab2bc866df5a02ec0"},{url:"zh/guide/layout/blog/index.html",revision:"65731e392807f1706f9d6708762f6482"},{url:"zh/guide/layout/home/index.html",revision:"2113de19965d8e815b4083a201b365fe"},{url:"zh/guide/layout/index.html",revision:"19f68f466da8025308bc8ec14e15b8a9"},{url:"zh/guide/layout/navbar/index.html",revision:"40c36632c7452578498ea17bcd48f072"},{url:"zh/guide/layout/page/index.html",revision:"0a0989c32ed6a939eeb444792ca5d5fb"},{url:"zh/guide/layout/sidebar/index.html",revision:"ed55179856912d4b6fc1994ac8aae1a2"},{url:"zh/guide/layout/slides/index.html",revision:"14d6e9833842263db5846e9546607ccb"},{url:"zh/index.html",revision:"b8c39f1fd8cc673924022aae8ef344d8"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/slides.859646fb.png",revision:"859646fbfd7beb9a132d8bd66ca9f807"},{url:"assets/img/slides.eb1e5fe7.png",revision:"eb1e5fe780594ad95ce1a96c2eaac0e8"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
