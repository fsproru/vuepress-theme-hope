if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.c3eb9960.css",revision:"872b40310a14e0a38f04c07c691779b7"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/128.3939ad53.js",revision:"840319d4a86d69481711eb4402251721"},{url:"assets/js/129.1982f9ab.js",revision:"c057accc83248d94b573b1c745e43ee3"},{url:"assets/js/130.6f1f731f.js",revision:"9515464659590ae9247e987f029047ef"},{url:"assets/js/131.8153d779.js",revision:"2986d271aef501cdf48d809ff30c115d"},{url:"assets/js/app.e36cbaa5.js",revision:"84607fe4507723bca52fd1d6d91a5fd7"},{url:"assets/js/layout-Blog.4010812c.js",revision:"673f56515138e45a26fc790c805ca6ad"},{url:"assets/js/layout-Blog~layout-Layout.f0cf7617.js",revision:"b88228743678c4eac431593701119707"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.ae6ef5a5.js",revision:"6eacfb690abb7abcb0c438b1fe3cd10a"},{url:"assets/js/layout-Layout.557eb74c.js",revision:"314c89bfd5b10cdcb1324f4a208e8b55"},{url:"assets/js/layout-NotFound.bff109cc.js",revision:"10b61e131b9c423c39f17f88eac36fbe"},{url:"assets/js/layout-Slide.06558549.js",revision:"c6d3a7b37692db2a2d8dee2743c86f95"},{url:"assets/js/page-AboutVuePress--4a71114e.b2547627.js",revision:"f5b8b1b6836117ea59920043644dae78"},{url:"assets/js/page-Basic--770cb96b.565b2a08.js",revision:"0e9457d7dfcc73a953622619bcbd737a"},{url:"assets/js/page-BlogHome--269ae052.4ec90a1f.js",revision:"cfffe6f3e86545a9356f065d6a3e7a99"},{url:"assets/js/page-Bloghomepage--64265752.aacc46dc.js",revision:"24a3aea639d1e763ee5f5039d383bce9"},{url:"assets/js/page-Blogrelated--17c260a2.c62448a3.js",revision:"c9c551db865da46745cf8855df1c7777"},{url:"assets/js/page-CommentFunction--5bb6671c.f7b71561.js",revision:"56f8562af81f9c8013bbb7d285ad0079"},{url:"assets/js/page-Commonproblems--2b571e9b.99b9351e.js",revision:"04140cab30ceafd899733c3729b9f203"},{url:"assets/js/page-Config--35a0a7d9.533d52cd.js",revision:"28f6637e32a7f0bd3749a9c55eb4bc13"},{url:"assets/js/page-Customalignment--4f21aa5c.80ac2f20.js",revision:"940b08c628ae3287d81cad49d08d2b4e"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.8de25fe6.js",revision:"2f443641c837526efe266e9d14306a82"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.ceb4e5d1.js",revision:"823aca0d05fd2b31918bae9e8572d86b"},{url:"assets/js/page-Demos--f328658e.8c80995b.js",revision:"618ed356916697afce8d2185c2e4ef9e"},{url:"assets/js/page-EmojiList--41bb29b9.32394f1f.js",revision:"a90679362fb7694b7ceafe9573cfa436"},{url:"assets/js/page-Emoji列表--404e6737.848d10c8.js",revision:"b2d4192bdd6c8b56b15d067c95516cdd"},{url:"assets/js/page-Encryptionfunction--181bdc9c.e9796d74.js",revision:"32bd9fe7ec197c9bfbeb2fb680eb99f9"},{url:"assets/js/page-FileStructure--665a4f1c.65dad428.js",revision:"2d5f7b25a72bd67e8e6882a019f9cec1"},{url:"assets/js/page-Flowchart--7ce6d974.3668fb99.js",revision:"d5a4c77c1e3116e593f21e1831e36195"},{url:"assets/js/page-Footnote--0c733e52.c0405adb.js",revision:"4a7bf0a4dc153ab6cdeb744b12111596"},{url:"assets/js/page-HomePage--5834599c.1029e5fa.js",revision:"8dd10307fc06de42ec3cef6de7ca75e8"},{url:"assets/js/page-InstallUsage--0ab466d2.2d774e4c.js",revision:"16db535c5967cdd13901f73132cdf5e2"},{url:"assets/js/page-Introduction--d4910962.06519b95.js",revision:"e795c3954deb11c9efd94cb13a97ff3b"},{url:"assets/js/page-Layout--12bd4f0e.3b680a37.js",revision:"1595ceea1f6b12770d63a507ecf5647a"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.e51e286f.js",revision:"fd8fbbc3a01bf4f5737714e0a34d37ef"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.ca6a5b7c.js",revision:"612abf13db5d6a8ff76609cdcfbc3223"},{url:"assets/js/page-MarkdownIntroduction--270989ce.70b65314.js",revision:"d1a25e24e9dadab5a8d3006ebb0a1dcd"},{url:"assets/js/page-Markdown介绍--0e6891b6.ef2e9ee5.js",revision:"1033513357f237f2ffc87a56c80d20f3"},{url:"assets/js/page-Markdown增强--6162938f.42e95707.js",revision:"6b692dc40c049b8ef9e3a6368942689c"},{url:"assets/js/page-Markdown示例--5479fe88.b1d1979a.js",revision:"56b68afa098558f179e7128609cab813"},{url:"assets/js/page-Markup--6b1f341c.afd6ca6e.js",revision:"a2288c2279aaae64c487e5e21520de66"},{url:"assets/js/page-Nature--749fb09c.64e3a1b9.js",revision:"5fa5a6606114501b7d67c0647e66f29c"},{url:"assets/js/page-NavBar--c7bf87dc.7cbec1b7.js",revision:"f1bcb2d2fd1055475f6179084c93c47f"},{url:"assets/js/page-NewComponent--1d138c72.59d35377.js",revision:"b1eb3622535482d8fbf56ad19e2f3c2e"},{url:"assets/js/page-Newfeature--5136c541.aa203c7a.js",revision:"ba5a2c7be69e8ec6fd8cf29310c6ad8d"},{url:"assets/js/page-Object--16031ab2.9ee53dd1.js",revision:"c0dfa6e7581fbd58d2a8d78dac4b9af2"},{url:"assets/js/page-Page--af17b59c.69e4beec.js",revision:"554431ae30e1f8a3d87d96451fa4bce1"},{url:"assets/js/page-PageConfiguration--0aacc152.18f5d09b.js",revision:"e1824fca1e7359a21151a59d350aa02e"},{url:"assets/js/page-PageEnhance--03665ac8.1214549b.js",revision:"918b1937a6f6d375931147848cf4ba9d"},{url:"assets/js/page-Pageinformation--71efd5d2.5af1a15f.js",revision:"63248f5249cfa37e811a335fae07d0be"},{url:"assets/js/page-People--2182769c.ff8c1037.js",revision:"df8fac00c61c62d7e7a94ca8a496d648"},{url:"assets/js/page-Place--951cdc00.0e61a406.js",revision:"54fde37cacaa5c2ae774393e72ffe731"},{url:"assets/js/page-PluginDescription--137c6c07.a554d04d.js",revision:"f5496e96e713be467ee26c44014b4325"},{url:"assets/js/page-Plugins--adbf415c.282cdb80.js",revision:"17789c3e085664a4dc1899bd205724d8"},{url:"assets/js/page-Presentationsupport--8f8e54dc.7bfcd7dc.js",revision:"d45eb2213fd7cb35d9f5e13088ea5394"},{url:"assets/js/page-PWA--01089712.eeac46fc.js",revision:"ef07d0c9084f2a841b860113fc3eb893"},{url:"assets/js/page-PWA--243ef2b8.9a981298.js",revision:"7114db83666368a87ac87cb69d2a412e"},{url:"assets/js/page-SEOandSitemap--ccd3659c.0e42dedd.js",revision:"716f47724cebf2d31dfebd836117ac12"},{url:"assets/js/page-SEO和Sitemap--2853f164.63527194.js",revision:"2647483d9c3d830a26beaa9d8bfc4bbe"},{url:"assets/js/page-Sidebar--2fa1ea2c.564034e0.js",revision:"4e9b02f383346f37e502b5fd3c3e6072"},{url:"assets/js/page-stylusconfiguration--6796cdf2.9b530a02.js",revision:"f07599eda5d81621ff6bba42fda41137"},{url:"assets/js/page-stylus配置--0ce19a82.4948a24a.js",revision:"2b767dee96ca3e32d9b4673f533ed8ad"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.7e51ae31.js",revision:"5c6c96829368400b6d962087fa103937"},{url:"assets/js/page-Symbol--a9259c5c.61ae8a34.js",revision:"ba6d47178c0ca048ac6eb5495b8c833a"},{url:"assets/js/page-TexSupport--64cb5e50.22782d51.js",revision:"b5cc3a5a49403509c341369f3c82651c"},{url:"assets/js/page-Tex语法支持--1e02b152.04caeb9f.js",revision:"69b0c64c637145bec814090231200fa0"},{url:"assets/js/page-ThemeConfig--1120a0ce.9ee587eb.js",revision:"d80c02228f5c7f037f16fcaf5f227992"},{url:"assets/js/page-ThemeConfig--1726e14e.1dfe0b01.js",revision:"6213ebea19cbce06898f14855f02587f"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.b21a787a.js",revision:"e9682b3174de935c19c5c4331c770d8f"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.723e60b6.js",revision:"759d0ba647e83d0bf530aa56e2fcaff5"},{url:"assets/js/page-ThemePluginConfig--958196dc.9fafc854.js",revision:"21498e93fde3adcfe28a889820eba38a"},{url:"assets/js/page-TSsupport--09728ac8.9cd42caf.js",revision:"f9b73ed11f2d8652b11071dbb9a9a0a9"},{url:"assets/js/page-TS支持--4625f812.1c711dbd.js",revision:"f4f8b141352af8c0de447110dd4eabf1"},{url:"assets/js/page-VuePress--b7060eee.e6cf2732.js",revision:"51317a1d1a4a2ebb2955f0f5992172f4"},{url:"assets/js/page-vuepress-plugin-container--31498112.985eed81.js",revision:"217417f6dc48c1825253be9d73fb9c28"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.cd84fd0c.js",revision:"f78d694aadb8f8b3515b066c8a9bf2d6"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.62b83203.js",revision:"406470c9d6cf91f32e7402ecc99452d3"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.bc859315.js",revision:"6931e5496ac207c1d9dd9e5bcd6e696b"},{url:"assets/js/page-vuepress-theme-hope--354da24e.2b63be21.js",revision:"f3fa776c865e548a43451620285b3b17"},{url:"assets/js/page-vuepress-theme-hope--776d8369.ce788830.js",revision:"5c361a710cf3634b7cd0279b4297d141"},{url:"assets/js/page-VuePressCases--082972f2.673a1602.js",revision:"5c9f2db5d2b96845eb70f8e82e96d548"},{url:"assets/js/page-VuePresscommands--9f3f316c.4ba16655.js",revision:"e31fe885aa2445b8539ecd79d1eaa020"},{url:"assets/js/page-VuePress案例--531d5f3e.610c1ac2.js",revision:"b6b2d52d2bd1560722a7ca3f9f30af53"},{url:"assets/js/page-上下角标--8efed9dc.c317ea5a.js",revision:"65c83d237f5997e2c341a0a921f5ddd4"},{url:"assets/js/page-主题功能配置--5bb71452.6f1de5ea.js",revision:"223b5e8904eeeeec29a1d25b120447bd"},{url:"assets/js/page-主题布局配置--7db7eff2.b418b779.js",revision:"c700cf82b973107f5eb2e7f8b1d3884b"},{url:"assets/js/page-主题插件配置--1b0c3e98.664f7b4f.js",revision:"e56c4e44fa51efebf38b1efec1e8d654"},{url:"assets/js/page-主题配置--21dc088d.cd08a75f.js",revision:"fc4f5388ee735b9a682611b223142589"},{url:"assets/js/page-主题配置--2c572572.603c6596.js",revision:"6d812768441cc04b7ecf086a00a632c0"},{url:"assets/js/page-人物--b4fc27dc.36273fa2.js",revision:"c89cc6ddc48945b689e8c5c3f221bed6"},{url:"assets/js/page-介绍--2e99d139.79036fdf.js",revision:"9304944e881b7b51f5ef250335bb11b1"},{url:"assets/js/page-侧边栏--43054cb2.4a38c03c.js",revision:"8d8aa681afe72c65d52279e4d71dcaaa"},{url:"assets/js/page-加密功能--2361b7e4.b67d9687.js",revision:"c561f3670131acf8ce535befeacb1925"},{url:"assets/js/page-博客相关--6a3fd4f2.ffd45c03.js",revision:"3f833afb70806349e17f7f19503becb5"},{url:"assets/js/page-博客首页--1eb2b298.cf00948a.js",revision:"c8dcaf1a7f9b672f513707d77f0c066c"},{url:"assets/js/page-博客首页--818cb750.b8394847.js",revision:"f9d8b6fc7b78f2a28451d9af0685cb01"},{url:"assets/js/page-地点--6710785c.428412df.js",revision:"090745970a9ad534d04ed3759526e633"},{url:"assets/js/page-基础知识--4d466a79.ab33c07a.js",revision:"442122457ccb3c3cddcd5beb9717513b"},{url:"assets/js/page-安装使用--76e0e5b0.3317a0c5.js",revision:"7d135d36a9037a254a8c3bac77d42eb4"},{url:"assets/js/page-对象--e150da9c.c88ceab3.js",revision:"51e811ce73b5614548619c6e2783f52f"},{url:"assets/js/page-导航栏--183844fc.acbb7aef.js",revision:"eb8a27bfadc6a52892ee40201026f36f"},{url:"assets/js/page-布局--fa93e36a.57e73d01.js",revision:"cd01e5fec601870a77dcaf99f65a6980"},{url:"assets/js/page-常见问题--10ab790e.c1797626.js",revision:"0983c8adab950a0e1fcfdaf685f1999c"},{url:"assets/js/page-幻灯片支持--5808e664.d51ccfd0.js",revision:"df8b7bab023dba2f0fa6c4bd5fed7ec9"},{url:"assets/js/page-插件--32355f10.6ae35450.js",revision:"37bf56b4ccc84449c1e26dece7d0a06a"},{url:"assets/js/page-插件说明--cbca1c8e.d5be2d8b.js",revision:"5874f7cb136a894f06f7b53271911cd5"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.dd296d07.js",revision:"a3c27d1df30ebd488c0cb662dcc758f1"},{url:"assets/js/page-新增特性--30c6c799.eb7eb46c.js",revision:"7dc6e568894394940317781206d5e116"},{url:"assets/js/page-新增组件--0979095e.f191e68a.js",revision:"7ab9a669d9abd4ba61522520ad253e5f"},{url:"assets/js/page-标记--0ac52704.f37153f5.js",revision:"ce3428eb817d1fffee010f7e485a65b3"},{url:"assets/js/page-流程图支持--582eff1c.995a7cd5.js",revision:"c508f26dce1077f02a1b5e3de2428d54"},{url:"assets/js/page-深色模式与主题色--01662674.0c80d8db.js",revision:"f1dea473c02306fe59bb91f8177216da"},{url:"assets/js/page-符号--2db8fb80.aaebfe18.js",revision:"f833990fa3a8f1e43507bc3464654d41"},{url:"assets/js/page-脚注--17d88350.d534d8b1.js",revision:"03109a1fcb0e3a287711426e5b916b85"},{url:"assets/js/page-自定义对齐--048d31dc.cdfeb915.js",revision:"10d31a685362daed4136f0e2e1af6d6c"},{url:"assets/js/page-自然--7ec33be2.09a399ec.js",revision:"8c022c904c396d85d1c8036e3305e369"},{url:"assets/js/page-评论功能--350aff9a.401ae154.js",revision:"4dd81daa5f7b39d92da8bf1ff7d3a242"},{url:"assets/js/page-配置--d315f8fe.e3545b4b.js",revision:"52affb615ef2de53fbe7d477172e79af"},{url:"assets/js/page-页面--78423bfe.68a2edf6.js",revision:"81032fc0c2f5a8c8813255edaaebb386"},{url:"assets/js/page-页面信息--455b9800.2969afc7.js",revision:"c16d2b3fbc72b7e532f70059f70a24c9"},{url:"assets/js/page-页面增强--2e4cf75c.833c538b.js",revision:"c32bcbeb7543a8b56d9c07e776cc9093"},{url:"assets/js/page-页面配置--02399408.3c092ae4.js",revision:"17167be18ec372c6d09b61ed512def2d"},{url:"assets/js/page-项目指令--2f3d7c1c.48c7562a.js",revision:"1adb735d6742ffd435ea7af1ce9bfae7"},{url:"assets/js/page-项目案例--1f3d6482.cd1005b8.js",revision:"5649a761494044459af6a1fc0fd1c62c"},{url:"assets/js/page-首页--79a22944.3ab24777.js",revision:"e275853f174d709ac3e9f8c7347465a6"},{url:"assets/js/page-默认主题配置--0d5b7f32.8f6f4b60.js",revision:"a0bea96942e29120ffbaab5ea47bb382"},{url:"assets/js/vendors~docsearch.dd852a27.js",revision:"0262230bc727f1653f88a358cf010f49"},{url:"assets/js/vendors~flowchart.1aa08710.js",revision:"68c8a1fd94229f61c3304721ca529a11"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.db8a18ea.js",revision:"da1e7d3b55edd4c0bbf4e88cac9fe9e5"},{url:"assets/js/vendors~photo-swipe.ce9e0157.js",revision:"641c61d794d47d65d5edf9ebbe92569d"},{url:"assets/js/vendors~reveal.99f0da15.js",revision:"73b654bdfca6b98a01f09bce0afc36cd"},{url:"assets/js/vendors~valine.79cd389b.js",revision:"5ad130375230fb4a6073b603a3da5807"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"14c0eefc287559c4b43860b66c04a661"},{url:"article/index.html",revision:"4c184aab9383c203e6a572356905f93e"},{url:"basic/index.html",revision:"3b42abae94460d32b088aece49e1f1c3"},{url:"basic/markdown/demo/index.html",revision:"cfd146bde93c7b4a7f96d4c9b6398243"},{url:"basic/markdown/emoji/index.html",revision:"86103600cefd520760ce6d397918da15"},{url:"basic/markdown/emoji/nature/index.html",revision:"748c90e5f28d81569780a09a66483365"},{url:"basic/markdown/emoji/object/index.html",revision:"60b88d1bae5db50fae60918ad258d63f"},{url:"basic/markdown/emoji/people/index.html",revision:"b110cdf2d23a220c4bf3423fe48e164b"},{url:"basic/markdown/emoji/place/index.html",revision:"d3a5003728f36b135f63ba13113f04ce"},{url:"basic/markdown/emoji/symbol/index.html",revision:"7425af614f107559b194f76f20f565eb"},{url:"basic/markdown/index.html",revision:"b388a2f563fa50759a6d1f30c3d9faf3"},{url:"basic/vuepress/case/index.html",revision:"bb53e834388e1c432dd3c3d1c2e5cc74"},{url:"basic/vuepress/command/index.html",revision:"fc8a3f0119b914ee749124644b2b5c3d"},{url:"basic/vuepress/file/index.html",revision:"8503c606c49a6e4d7f34ca39bf958326"},{url:"basic/vuepress/index.html",revision:"9e09c0bed685636e84913729cfd2e13f"},{url:"basic/vuepress/plugin/index.html",revision:"a2246cca08a3421219a96c03ab6490b1"},{url:"basic/vuepress/theme/index.html",revision:"30e17011d24be8d53853be10ff085a35"},{url:"category/basic/index.html",revision:"8451324a26c374a8e3428c9ee2eb3a0b"},{url:"category/basic/page/2/index.html",revision:"782a092adab91fbad3be0b6e8817d04a"},{url:"category/basic/page/3/index.html",revision:"690c80bf4613205708e2507a20419e78"},{url:"category/config/index.html",revision:"5c9aa48a52f13f71118bb71c8c641370"},{url:"category/config/page/2/index.html",revision:"0df30f1866bc9be6101af102b39de53a"},{url:"category/config/page/3/index.html",revision:"71b1c381db68baae032602f135d0b86b"},{url:"category/demo/index.html",revision:"9f2d1c094c3dba63ae2371f57f75e314"},{url:"category/FAQ/index.html",revision:"b55017439b8eabd92d15a60dac087af9"},{url:"category/feature/index.html",revision:"3d6c4d2c37161d14fb48dba677632acf"},{url:"category/feature/page/2/index.html",revision:"d35cc9c503194c6212d93b4f91350941"},{url:"category/feature/page/3/index.html",revision:"45424e7ed51eb784b4a49e0742d0345b"},{url:"category/index.html",revision:"924d1e70afd1b33aa75e5eb221609ee7"},{url:"category/instruction/index.html",revision:"e1c73271bc8115f34184e0e619a375bd"},{url:"category/layout/index.html",revision:"e3e4fd939949d577901822a631f543c0"},{url:"category/layout/page/2/index.html",revision:"440d59f06d9b539b087d16fad2ae810a"},{url:"category/markdown/index.html",revision:"5d2385a208a83450924be1663ee2dbf8"},{url:"config/index.html",revision:"47af6ecc4aeed511257793317a9a1c27"},{url:"config/page/index.html",revision:"6056af77b5d3e522062a6d2bdebb861f"},{url:"config/plugin/container/index.html",revision:"f31fbcdecc036e73aaa817dfe0a002e1"},{url:"config/plugin/copyright/index.html",revision:"a2a5985906e2c35dd9994e4d1bc5fcd6"},{url:"config/plugin/index.html",revision:"97b5a2df8d210bc7089353c488606ff4"},{url:"config/stylus/index.html",revision:"43891d88fc50f96ac3ef609319793399"},{url:"config/theme/apperance/index.html",revision:"1291602fe2e482ec059c33c569a57ae5"},{url:"config/theme/default/index.html",revision:"089d5ad8f7554c8ad599e05b82124fe3"},{url:"config/theme/feature/index.html",revision:"2eb33b3e070dbcad3e2a5453b461db7c"},{url:"config/theme/index.html",revision:"bb924891eceb6edb3048e321d8b32b58"},{url:"config/theme/plugin/index.html",revision:"4ddf42d0590b70275ff9218a00e14708"},{url:"demo/index.html",revision:"40848d9ce9e6bc6e7d6e10f0f6c9a5d1"},{url:"encrypt/index.html",revision:"2a6baefd19278445d13acedd6708299c"},{url:"FAQ/index.html",revision:"df09d85f94a946a28f1e7b11d7c9f661"},{url:"guide/feature/blog/index.html",revision:"4e32b0b9b5a9d87e2507d1cbcdcaff0c"},{url:"guide/feature/comment/index.html",revision:"e61a1f7305ea5280452637af680ed780"},{url:"guide/feature/component/index.html",revision:"f52c5ae5cedad610c049e96662e0eb94"},{url:"guide/feature/encrypt/index.html",revision:"8bd4a4ecd334d6cf710514ee415f5cc5"},{url:"guide/feature/index.html",revision:"b9c0c0bf63586c5f20051f1498444f34"},{url:"guide/feature/markdown/align/index.html",revision:"539d6f89ba0bdacf9154d16ee14a5096"},{url:"guide/feature/markdown/flowchart/index.html",revision:"1ab458275f5b8750e4a84d39319eddf7"},{url:"guide/feature/markdown/footnote/index.html",revision:"7fb78f201121ee11d5a76dc26b63723c"},{url:"guide/feature/markdown/index.html",revision:"7aa74e59cfa9a71b02ac2b24722b1853"},{url:"guide/feature/markdown/mark/index.html",revision:"069a9521d17c45000fc945ded226309f"},{url:"guide/feature/markdown/presentation/index.html",revision:"5e093488f5beecb34f0559dcbaf76825"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"5c1be758ce938a8429e56eeb6bf80b2a"},{url:"guide/feature/markdown/tex/index.html",revision:"5f3e4dd448cbd2d4b1494335236c6a21"},{url:"guide/feature/page-info/index.html",revision:"6f1aed49e504afe00bdf2ec5ba777748"},{url:"guide/feature/page/index.html",revision:"e09fb54179c56d459446e80ab1ca4743"},{url:"guide/feature/pwa/index.html",revision:"075ac6e6d25738bbdc93b65abaeeb5d9"},{url:"guide/feature/seo-sitemap/index.html",revision:"042becdecbb9afd74735e02f89619dd0"},{url:"guide/feature/theme/index.html",revision:"2c5fc4fa04f6838018184733fcb879f1"},{url:"guide/feature/typescript/index.html",revision:"51af59687ea47621209d3edbae08d9b2"},{url:"guide/index.html",revision:"d2b852e4c0a3ac0d87d8309f204a7ff0"},{url:"guide/install/index.html",revision:"1fcc0571f38e85173e1b4c21de93af01"},{url:"guide/layout/blog/index.html",revision:"fce355f70832b4309b4b651cadef11fc"},{url:"guide/layout/home/index.html",revision:"adc2b3d0c4d521ef012cf0b4b1af495d"},{url:"guide/layout/index.html",revision:"48931378eb34d5f07b9c51f46e41d696"},{url:"guide/layout/navbar/index.html",revision:"398ca3bab3c7a2f5cb1e4f753b396125"},{url:"guide/layout/page/index.html",revision:"e71365d57730583dfce4a08e0d446943"},{url:"guide/layout/sidebar/index.html",revision:"fe6483cf101ab10de1e7659aab4ed649"},{url:"guide/layout/slides/index.html",revision:"28b4cb30a1b3bf619bafdac662c6f520"},{url:"index.html",revision:"42d578be70c27815ad7c43350cab137b"},{url:"slide/index.html",revision:"bc1fd41049da72b927ae66c33662d251"},{url:"tag/-slides -layout/index.html",revision:"6092ff325aa5f1ab3501bd050ee8988a"},{url:"tag/blog/index.html",revision:"20215668b384f4cffeeaeea51a9205b4"},{url:"tag/comment/index.html",revision:"a5594d774b5bc1dad351f6d9d8afbc7c"},{url:"tag/components/index.html",revision:"59182decb28812c6a2d83c9f686cfeb8"},{url:"tag/config/index.html",revision:"5e5b59f86192955849dcca93be576f3f"},{url:"tag/config/page/2/index.html",revision:"43e1e4faccc7b8104b2726ac3a411fe9"},{url:"tag/config/page/3/index.html",revision:"477a247549320f83dd5689db4d3f3719"},{url:"tag/emoji/index.html",revision:"79429f2a790e21dabfde3300b8e9c286"},{url:"tag/emoji/page/2/index.html",revision:"d9c0192536d8f3b8f72ed669b2984cca"},{url:"tag/encrypt/index.html",revision:"3cf86a7b47f8fa0424837aa41192b93c"},{url:"tag/feature/index.html",revision:"7188e4d786316602cb71cb9088aaa45d"},{url:"tag/feature/page/2/index.html",revision:"5afc97c68bce3a37aa3fe73fdc94ce4b"},{url:"tag/feature/page/3/index.html",revision:"af23fffdbc14dec9b517b2c1899f93c5"},{url:"tag/feature/page/4/index.html",revision:"75f5fe516f6ac8c5ba7cdd91cfdb2515"},{url:"tag/frontmatter/index.html",revision:"87b58b503a317e9624159e92e7b8793f"},{url:"tag/home/index.html",revision:"3c19bfbee86340529c0654c0c3a7c363"},{url:"tag/index.html",revision:"c3b71fbfaee78f114ed61e030237a996"},{url:"tag/intro/index.html",revision:"84911af6d26604deebd2a0f020bff6d9"},{url:"tag/layout/index.html",revision:"ecd76f7a843ff967162d7d491e1b6469"},{url:"tag/layout/page/2/index.html",revision:"377e2442b7e02a5ebe3d67023a7155f3"},{url:"tag/markdown/index.html",revision:"e85e53f6c39907241d51c2280811bacf"},{url:"tag/markdown/page/2/index.html",revision:"50431dc1dda4336c7ae91d957df036e5"},{url:"tag/markdown/page/3/index.html",revision:"879af67a760bd2deced4fd138ca22fdb"},{url:"tag/navbar/index.html",revision:"3b88b49e155751bf13277fc4c35a945e"},{url:"tag/page-info/index.html",revision:"97ad68d1a6f63ca2cd43964684e67bf0"},{url:"tag/page/index.html",revision:"06f3cac53d64346056dc349028d48ae4"},{url:"tag/plugin/index.html",revision:"9fff764fd0be8b7c65caef22290d13f5"},{url:"tag/pwa/index.html",revision:"be0a8e81003fbe4be979991d64838651"},{url:"tag/seo/index.html",revision:"1aacc33c3c9fd4a651e833f39622390d"},{url:"tag/sidebar/index.html",revision:"ed42364d010ba220fc84721748162a17"},{url:"tag/sitemap/index.html",revision:"d9c2e1f0cec1e92ce431f5bab05e291a"},{url:"tag/slides/index.html",revision:"93a70cc4cd677547742fa39e0e64170a"},{url:"tag/style/index.html",revision:"26b1e746173ac86618e3ca6d25b3e3b5"},{url:"tag/themeConfig/index.html",revision:"72f70ad3e72d44f8d7279a89ac36198c"},{url:"tag/typescript/index.html",revision:"50e9464def66b8d4999860e6142a2dfc"},{url:"tag/vuepress/index.html",revision:"421e350b6a4e34649ec149148fec056f"},{url:"tag/vuepress/page/2/index.html",revision:"0c99b45446c1a10b2ea5388aecdbd148"},{url:"timeline/index.html",revision:"1ce1fd78dab09e47e8ed037e52d81781"},{url:"zh/basic/index.html",revision:"2743dd0e635efdfb71e116ebcb517064"},{url:"zh/basic/markdown/demo/index.html",revision:"d5b09be288e20e0e549413a51e498d20"},{url:"zh/basic/markdown/emoji/index.html",revision:"bbf0ffe0be279cf96fac0ff57a43d06e"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"ef3332a964f4bc65aa2704716accdc2c"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"7c748b7f8f87b21fc3bcf65424f52762"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"cb77f97685b2d8073da6348e0f2469ef"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"62728f2c5d178ca9c7e72b553a376f95"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"7fa142c995e58fc7dbd59b03b3a411ff"},{url:"zh/basic/markdown/index.html",revision:"637317b609090b89b8a20d44c920cf44"},{url:"zh/basic/vuepress/case/index.html",revision:"3969a0f11d3a96606db8aa0c3e0851b2"},{url:"zh/basic/vuepress/command/index.html",revision:"5cbf662fde966949ba3ee528e284f02f"},{url:"zh/basic/vuepress/file/index.html",revision:"336958980cd464fb6c50d11e0cbd9fd3"},{url:"zh/basic/vuepress/index.html",revision:"e1d7b39cc7f468a13ba6ad63df15d993"},{url:"zh/basic/vuepress/plugin/index.html",revision:"f5a0d9675032ba07398e8a84c516e5c4"},{url:"zh/basic/vuepress/theme/index.html",revision:"259a0ea5b4c2b8d597e9683eda2d3937"},{url:"zh/config/index.html",revision:"29b4dbe2ec926959384fc5a2650b09fc"},{url:"zh/config/page/index.html",revision:"44393bbeed83e7b57e59c660b760c4de"},{url:"zh/config/plugin/container/index.html",revision:"e98b8fbda7e904b1efaa7a443c59724f"},{url:"zh/config/plugin/copyright/index.html",revision:"bbe4ccf9640c41706beb69fd2e39b521"},{url:"zh/config/plugin/index.html",revision:"3492c8b4dc412573ea39664d35c9ad96"},{url:"zh/config/stylus/index.html",revision:"65ba95ca8cf99c19b569ae35596ed66a"},{url:"zh/config/theme/apperance/index.html",revision:"788e0472fb1cfec6ed74af84e51303bc"},{url:"zh/config/theme/default/index.html",revision:"bc1b523a8561c3c4b1dd497c2420be62"},{url:"zh/config/theme/feature/index.html",revision:"e37f0558059f34243a692118de98f5bb"},{url:"zh/config/theme/index.html",revision:"0cc6719b6ea31a4f9477144522962de0"},{url:"zh/config/theme/plugin/index.html",revision:"5a23a125758221deb39466d3b86895e0"},{url:"zh/demo/index.html",revision:"b2c4b6e4cf498aaf57f73e3d8ed453bf"},{url:"zh/FAQ/index.html",revision:"ed0cef64d219990b3a5a1be5f550baea"},{url:"zh/guide/feature/blog/index.html",revision:"e606667a9e2269dde1e37f4d1589875f"},{url:"zh/guide/feature/comment/index.html",revision:"036b51534b9c749f65818d204aa057e5"},{url:"zh/guide/feature/component/index.html",revision:"1c308470e1a0a2036253592c6b3d13e1"},{url:"zh/guide/feature/encrypt/index.html",revision:"823ae9981d3943866c7949b0ff5a3a41"},{url:"zh/guide/feature/index.html",revision:"3e645afdf19e486211bfba449d0d98fd"},{url:"zh/guide/feature/markdown/align/index.html",revision:"81e6101a3c997c3c41f2684dfc7dc128"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"a01eac5ee683debfda9e122c5470b56c"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"86cfa8f721857be2d84059defc70f80b"},{url:"zh/guide/feature/markdown/index.html",revision:"a266c0a27882d5cf12a0cf828a17eb82"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"b6637b71c0ad6c81a0c5846c426dfbdc"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"4d4245c22864c6c4f76b79d253065cb5"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"a953437c6970198a5168351a6241f5ad"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"ee137296597b2aeab7508c019e149c32"},{url:"zh/guide/feature/page-info/index.html",revision:"96030f84171c76393b6cad4f221af403"},{url:"zh/guide/feature/page/index.html",revision:"d75d9f1232b348d1d8791b2af576032e"},{url:"zh/guide/feature/pwa/index.html",revision:"c46770ebd7c5b879a148bb6e8c38c7a0"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"e5ecf24e2a2039fc389f077b96de0ba5"},{url:"zh/guide/feature/theme/index.html",revision:"ace0575ae456389d0b53c7c295e3845e"},{url:"zh/guide/feature/typescript/index.html",revision:"21cbceba68aa069f773ea2359236b6f7"},{url:"zh/guide/index.html",revision:"e4f575681807b1ab412dd88581b1e950"},{url:"zh/guide/install/index.html",revision:"4b6291240abdc66799505da3d1a9f74b"},{url:"zh/guide/layout/blog/index.html",revision:"fbed1cffbff9ea7d054e3a9c38de5f8e"},{url:"zh/guide/layout/home/index.html",revision:"cad3a15efc05ee7c5e846681d92c72da"},{url:"zh/guide/layout/index.html",revision:"f8b896843bc7eb9b6dbb27baa03f23e6"},{url:"zh/guide/layout/navbar/index.html",revision:"da7cd8e48a6ad66525c48ae4f2b49664"},{url:"zh/guide/layout/page/index.html",revision:"1ab0968061bc4bab591283815d68d681"},{url:"zh/guide/layout/sidebar/index.html",revision:"bf0d530d0047d5eb7eb4192351013cbf"},{url:"zh/guide/layout/slides/index.html",revision:"67759b168eefb8445a894fe516e82614"},{url:"zh/index.html",revision:"4bff2b03629ddcf9f7392dd62987234b"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/slides.859646fb.png",revision:"859646fbfd7beb9a132d8bd66ca9f807"},{url:"assets/img/slides.eb1e5fe7.png",revision:"eb1e5fe780594ad95ce1a96c2eaac0e8"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
