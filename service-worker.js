if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.a9201435.css",revision:"bca2e663abb410983e9b0b75e2d57d77"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/125.a8b066ed.js",revision:"b92a1d9ee57a8f1acd166e625ccc00ff"},{url:"assets/js/126.683ba149.js",revision:"e00217722b10c90be2edd83d6be611a3"},{url:"assets/js/127.b650c9de.js",revision:"6305a309f46beb7b3f96ebfaffcf6753"},{url:"assets/js/128.d783d407.js",revision:"e2db3743a7d800608bc11a15dafb0895"},{url:"assets/js/app.eaad20a9.js",revision:"942bfc55e93f9bf7dcc3ebcea840bdf7"},{url:"assets/js/layout-Blog.06c2e75f.js",revision:"421d6602880fcdf21ca72dd71265ffc9"},{url:"assets/js/layout-Blog~layout-Layout.cab721f5.js",revision:"0da1e89432094572bde3172b1d5f068b"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.990d8a87.js",revision:"e9104a5253adbc38bccb2e237415e89d"},{url:"assets/js/layout-Layout.6155a550.js",revision:"2494dc8743a508369c80ac1fc54de3a8"},{url:"assets/js/layout-NotFound.52c29617.js",revision:"efa109ca952d4cd6c50660e8be26f29e"},{url:"assets/js/page-AboutVuePress--4a71114e.5590ee72.js",revision:"8f2ca2ca3c0189e7ebf301fbc0b91596"},{url:"assets/js/page-Basic--770cb96b.8a9f859a.js",revision:"8e3615b4037f2851900e60cbb9513975"},{url:"assets/js/page-Bloghomepage--64265752.7141e934.js",revision:"2fdf6d7a859bd10659de48d0418f5efc"},{url:"assets/js/page-Blogrelated--17c260a2.5bff01f5.js",revision:"25a271b7d1da56cf3073ab04a4d2a3f5"},{url:"assets/js/page-CommentFunction--5bb6671c.e1cd37eb.js",revision:"5cb4df6145b3c61530fcfaeae1af94e3"},{url:"assets/js/page-Commonproblems--2b571e9b.37d8a120.js",revision:"0a6dea750baf00d22c3f50fea8f19ab4"},{url:"assets/js/page-Config--35a0a7d9.dc6a7685.js",revision:"6fdfe2dfcec8a15995205f8e086e3887"},{url:"assets/js/page-Customalignment--4f21aa5c.4c7b4748.js",revision:"a98220a46e4a10e4b926c192ae8307b2"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.79369cf5.js",revision:"930ed3f1294b485118e3c8e54c6c6221"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.c3201fb7.js",revision:"a95f6e57ea2b9a93f7a6359ace49d2b3"},{url:"assets/js/page-Demos--f328658e.18e28747.js",revision:"0de04a4f6c4147f26dac4abd935e96d5"},{url:"assets/js/page-EmojiList--41bb29b9.09eca8d0.js",revision:"720a39d879980b4dd0851536a55e9d82"},{url:"assets/js/page-Emoji列表--404e6737.149f13e5.js",revision:"9f91e10ad6195b2fe01d74f50172898f"},{url:"assets/js/page-Encryptionfunction--181bdc9c.777f2966.js",revision:"6bbda5b401eb5a5d16a36540c4660b4f"},{url:"assets/js/page-FileStructure--665a4f1c.4d348ce8.js",revision:"dda59dd2f13c21cb8c33a9e0ef3ab289"},{url:"assets/js/page-Flowchart--7ce6d974.07c3ef64.js",revision:"65cc7a90ac16c051987ff05d7a8d2312"},{url:"assets/js/page-Footnote--0c733e52.b27fdb7f.js",revision:"fdbe2ecfee2e386da5222d2fe2428bbf"},{url:"assets/js/page-HomePage--5834599c.3d0093d3.js",revision:"665131c8e316127dd6e64a7f90feefba"},{url:"assets/js/page-InstallUsage--0ab466d2.89eeef01.js",revision:"e7d10c21b34663e2cec83cc055eb4174"},{url:"assets/js/page-Introduction--d4910962.151827e6.js",revision:"3f5c8324e3ac7ed62215143032d0a0c8"},{url:"assets/js/page-Layout--12bd4f0e.9258f251.js",revision:"ee8f160ea07c5e907f062b5df43c996a"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.c5ac001e.js",revision:"3d82995925a561bb74ecb3ddc0a8ae37"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.66489402.js",revision:"b92272987191cc9bd571437121aab52d"},{url:"assets/js/page-MarkdownIntroduction--270989ce.77680585.js",revision:"570a061179959e42a6362489915b1393"},{url:"assets/js/page-Markdown介绍--0e6891b6.23c918d1.js",revision:"59708ee9805526146895153bf4740774"},{url:"assets/js/page-Markdown增强--6162938f.284f19cf.js",revision:"510a80817b10940d3072220744cb1eb0"},{url:"assets/js/page-Markdown示例--5479fe88.2f6d5a04.js",revision:"519a0600d628adc7d76b53baee3af102"},{url:"assets/js/page-Markup--6b1f341c.e99b1673.js",revision:"bd7cb5ab66b0c169a0b6c93e2162db40"},{url:"assets/js/page-Nature--749fb09c.7da489f3.js",revision:"8e67500b1d9dae05a916d7ed5b8544a6"},{url:"assets/js/page-NavBar--c7bf87dc.9513dac1.js",revision:"f34f1077ce2e12caea3f1db007e57a41"},{url:"assets/js/page-NewComponent--1d138c72.5f730dc0.js",revision:"cac83e2b510f7996a1a1578a3850cb68"},{url:"assets/js/page-Newfeature--5136c541.cd947b89.js",revision:"e88555f0942ca2b252663a729d679a7d"},{url:"assets/js/page-Object--16031ab2.4b9f4dfe.js",revision:"0dc7437b1cbaa733ee7ebf5ce4b2fbcd"},{url:"assets/js/page-Page--af17b59c.9307464f.js",revision:"00368e7af80f0648d0e917606ccaf0c4"},{url:"assets/js/page-PageConfiguration--0aacc152.0779b087.js",revision:"258bbcdec047619fdaf76797c4708c29"},{url:"assets/js/page-PageEnhance--03665ac8.fe073543.js",revision:"9eea0cefba7422ca306ff91227425661"},{url:"assets/js/page-Pageinformation--71efd5d2.296c049c.js",revision:"05e635abb52de3f3cfa3637f33fabe84"},{url:"assets/js/page-People--2182769c.1231df62.js",revision:"e6e5ce91e9525bc7b27c75f67e5d4395"},{url:"assets/js/page-Place--951cdc00.e078c3e5.js",revision:"3e13c13bf9c3385dd402611a8df59ab9"},{url:"assets/js/page-PluginDescription--137c6c07.e36169f4.js",revision:"a461c71781392c9a5ecb8faa83d34323"},{url:"assets/js/page-Plugins--adbf415c.5d3eb584.js",revision:"fd1e1e99010ca97948679f05d946b1c8"},{url:"assets/js/page-Presentationsupport--8f8e54dc.1af68842.js",revision:"2325ce6b281ccad80b2f60a3d2512485"},{url:"assets/js/page-PWA--01089712.6f06c6a8.js",revision:"d80953cabb7fea9eed419862da692de7"},{url:"assets/js/page-PWA--243ef2b8.3d11acbe.js",revision:"8d606506d18f84024716b36c3d722edd"},{url:"assets/js/page-SEOandSitemap--ccd3659c.903fd8f0.js",revision:"d1eecd20d089fc87c467016a01fa7d06"},{url:"assets/js/page-SEO和Sitemap--2853f164.c9aabb77.js",revision:"2f0612407b48bd3c88ab26e87f45e360"},{url:"assets/js/page-Sidebar--2fa1ea2c.f3ded2e1.js",revision:"24a41fd282b4537a9cecc3c54d95e334"},{url:"assets/js/page-stylusconfiguration--6796cdf2.8f804fdc.js",revision:"36590eaca968334008754b364ea0d4a9"},{url:"assets/js/page-stylus配置--0ce19a82.fb1365b9.js",revision:"77d6725002474a9e3f1483a0cc8ec161"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.7df3c17b.js",revision:"85cc07879a87c6033da3f6f8c39c748e"},{url:"assets/js/page-Symbol--a9259c5c.4b39bd16.js",revision:"c3e2224ad5b181f4e641e8928b77a7c8"},{url:"assets/js/page-TexSupport--64cb5e50.2e00f249.js",revision:"922bfac6fc4f72332c5dfec4897041be"},{url:"assets/js/page-Tex语法支持--1e02b152.091fe3d7.js",revision:"3aebb367c9fc05a1c136cbacfde13eb6"},{url:"assets/js/page-ThemeConfig--1120a0ce.4fd501d9.js",revision:"05f80e3712470f2278001648831db05b"},{url:"assets/js/page-ThemeConfig--1726e14e.ada844a5.js",revision:"e2b6f19dbe7745927044e53fcc851eff"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.98f832d6.js",revision:"95f6ad5280c795041788b09b27b05660"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.801c2035.js",revision:"f1caf3a6bd99aeb95ecf3cefec80d1c9"},{url:"assets/js/page-ThemePluginConfig--958196dc.12952285.js",revision:"e5f7ec0131825cd18809d717273db3a3"},{url:"assets/js/page-TSsupport--09728ac8.e8c83295.js",revision:"88f240b29311aa2f15a378fa5da765c2"},{url:"assets/js/page-TS支持--4625f812.fde39bea.js",revision:"2921e570fb3606c8e3fc7069ea3e08f7"},{url:"assets/js/page-VuePress--b7060eee.63db21dd.js",revision:"462bc1bfe7490330017e53d528e1d6bd"},{url:"assets/js/page-vuepress-plugin-container--31498112.bc6bbd6a.js",revision:"e98cf7c2003759462984a18e244a4193"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.be9ddb55.js",revision:"c1138c7421e6e8c87d2b7f9d443628d1"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.caf7b79e.js",revision:"f6cf4f04288a6ea7515df713c7469485"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.1cc19d1b.js",revision:"5bf244ac8dc5df7f924c6f55e13fc62d"},{url:"assets/js/page-vuepress-theme-hope--354da24e.5cecb56c.js",revision:"590f95cc5ed8b896c3f91e223b9e6312"},{url:"assets/js/page-vuepress-theme-hope--776d8369.5c2c47fe.js",revision:"db5ace88310c320da90ee940d519cbd5"},{url:"assets/js/page-VuePressCases--082972f2.58c04256.js",revision:"b2d087a8f3fbccf07fe3ae93de8f7524"},{url:"assets/js/page-VuePresscommands--9f3f316c.bf00735d.js",revision:"a2ca3a1aa8d22f9a08893dba037ccf92"},{url:"assets/js/page-VuePress案例--531d5f3e.f99009bb.js",revision:"ec2615f72e8f90f8854d807474bd5198"},{url:"assets/js/page-上下角标--8efed9dc.cb16c9a3.js",revision:"926b9e224379859fd4d49c8da6b19885"},{url:"assets/js/page-主题功能配置--5bb71452.caffd02e.js",revision:"dd671237f36193d8e91e795ab43bad72"},{url:"assets/js/page-主题布局配置--7db7eff2.1243cd2e.js",revision:"d039695432233526f00ec5465c75f91f"},{url:"assets/js/page-主题插件配置--1b0c3e98.84871db5.js",revision:"9967dbfff5c21d2a34db94bcec27a7c0"},{url:"assets/js/page-主题配置--21dc088d.10f7aab5.js",revision:"da28e6f7bc67f4a3fc0b961e1a787b44"},{url:"assets/js/page-主题配置--2c572572.c83a80a0.js",revision:"20d69c349b6832ef5252b9f94f4a791a"},{url:"assets/js/page-人物--b4fc27dc.2aa8e5c8.js",revision:"949993e4e7ffaa5fac0dd41a602fb4e8"},{url:"assets/js/page-介绍--2e99d139.fee37cf6.js",revision:"8f8af6fb25ff7310b30a175ff9bb8dbe"},{url:"assets/js/page-侧边栏--43054cb2.b68034a7.js",revision:"370feb7849783e4859439cb7868235cc"},{url:"assets/js/page-加密功能--2361b7e4.ccdbe545.js",revision:"14debb316194f6ea11e95dac2dba8364"},{url:"assets/js/page-博客相关--6a3fd4f2.0232cf75.js",revision:"328efa85a9189b191f4dc3fca4eae1be"},{url:"assets/js/page-博客首页--1eb2b298.58c5d1e6.js",revision:"306ae07bba29d5d8f39965c4f47d281e"},{url:"assets/js/page-地点--6710785c.06da872e.js",revision:"3e23b614bf44f50f04e477abb07aa180"},{url:"assets/js/page-基础知识--4d466a79.075d3e27.js",revision:"360290312dee3c4262e2fafa7792fc32"},{url:"assets/js/page-安装使用--76e0e5b0.c4cb3092.js",revision:"4a548e4050b949b1d797f95cfbd198e3"},{url:"assets/js/page-对象--e150da9c.981aa64a.js",revision:"89ad4b6c33d3c37154170ccbadf6cb13"},{url:"assets/js/page-导航栏--183844fc.c5c3ae36.js",revision:"9fc1090a8613a0ee57bf45fa4353264a"},{url:"assets/js/page-布局--fa93e36a.21de1988.js",revision:"7bea1001838c8bc29030e7f0ff5bf576"},{url:"assets/js/page-常见问题--10ab790e.824b066a.js",revision:"7ccad63d0a16bb3da0c9c7ac716e19bf"},{url:"assets/js/page-幻灯片支持--5808e664.e56385f8.js",revision:"d19ea143198b93951d6b258dece3c70b"},{url:"assets/js/page-插件--32355f10.d4269e6a.js",revision:"7ce87e1489b8e010bb56d17fb5e09df2"},{url:"assets/js/page-插件说明--cbca1c8e.0df9d393.js",revision:"3c7f0df4edb7909411951343644e45a9"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.3947e8f9.js",revision:"342e79ea6d8dbf5874045ef80814b5da"},{url:"assets/js/page-新增特性--30c6c799.fe0da505.js",revision:"f0aaf692c54f14aee1d3cb0b1a0b935e"},{url:"assets/js/page-新增组件--0979095e.be4225a5.js",revision:"7fb97b250a0eb053dc304f9685665725"},{url:"assets/js/page-标记--0ac52704.66f7c7ad.js",revision:"65d80c918fd623551c1e29d9ae4cd8dd"},{url:"assets/js/page-流程图支持--582eff1c.a6719eac.js",revision:"51f1096cd1101fdef62da2c72298c572"},{url:"assets/js/page-深色模式与主题色--01662674.e017d12b.js",revision:"27048ade2bbf423ba598c67c11c04367"},{url:"assets/js/page-符号--2db8fb80.67e39473.js",revision:"3ffd1e79aaa0d1548afd316ff8f6eedc"},{url:"assets/js/page-脚注--17d88350.71347a23.js",revision:"28916b62b8d00d1cf7e3d7b339d8c237"},{url:"assets/js/page-自定义对齐--048d31dc.6b56c7d7.js",revision:"7ae208e3bb22f6ef6645a1c148a2d28f"},{url:"assets/js/page-自然--7ec33be2.ef3cbd51.js",revision:"9f7879592d89cf226c62f96bd1a2ef0c"},{url:"assets/js/page-评论功能--350aff9a.bff7a2a7.js",revision:"14abdcf6b87a0d68470ec94140384895"},{url:"assets/js/page-配置--d315f8fe.bba737d7.js",revision:"57a2d2b387883b47c7516118118936f3"},{url:"assets/js/page-页面--78423bfe.8fef43d5.js",revision:"0e3db7500c6ba09e40577820fa46f030"},{url:"assets/js/page-页面信息--455b9800.8d370ec6.js",revision:"1e0eceb2dc8db2db975ba766be0d8cca"},{url:"assets/js/page-页面增强--2e4cf75c.cab65c4d.js",revision:"4e857dd6829b54022897ce152ad9eaeb"},{url:"assets/js/page-页面配置--02399408.3750c7ba.js",revision:"504def7c968aa07721114ea9290ed98e"},{url:"assets/js/page-项目指令--2f3d7c1c.37a6cba4.js",revision:"bb5150d11b47f16ab64961dc7afeda99"},{url:"assets/js/page-项目案例--1f3d6482.f7700b0f.js",revision:"e6555c96596a22aa6dd252d860c0e175"},{url:"assets/js/page-首页--79a22944.4eb6614c.js",revision:"878b8fb376ab07ccd99195b6aae36f82"},{url:"assets/js/page-默认主题配置--0d5b7f32.fb4fcbb5.js",revision:"0b9a6a89fa337d23fe2bb96e06019fa0"},{url:"assets/js/vendors~docsearch.4b52ed2d.js",revision:"1c0ae6697a371b061bc84f27cefe7052"},{url:"assets/js/vendors~flowchart.b3a5b488.js",revision:"cd2a0199cdc192734d9804a179c2628d"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.b9db2285.js",revision:"d4b4e2a0a77a0699abcead6ab5d46765"},{url:"assets/js/vendors~photo-swipe.60ed6540.js",revision:"05623cd149bcb2dfce573ddcbe586745"},{url:"assets/js/vendors~reveal.8827293d.js",revision:"a24e11d81260d3c8bbd2fd4146ad1422"},{url:"assets/js/vendors~valine.8cb10463.js",revision:"e7e3dfe0f64a8adff71d688b954f5c00"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"a41209338554ae6f8524efed6209b6e9"},{url:"article/index.html",revision:"b5472730fa8992f5222bedbc37a7476d"},{url:"basic/index.html",revision:"cae83fae3c395d3d16263a1ba5f272a4"},{url:"basic/markdown/demo/index.html",revision:"c86a31779dae40a24b552c6887226a45"},{url:"basic/markdown/emoji/index.html",revision:"3efa350b58d2711918d79ccc39450213"},{url:"basic/markdown/emoji/nature/index.html",revision:"f5f011389b2371386034164f0fc0ce57"},{url:"basic/markdown/emoji/object/index.html",revision:"e934e5f592e87149b5f9bd366d3bb054"},{url:"basic/markdown/emoji/people/index.html",revision:"3d60895a75b7262b3ce6db663aae9f8f"},{url:"basic/markdown/emoji/place/index.html",revision:"edf30b6d83a19fea06f462b9f56eb763"},{url:"basic/markdown/emoji/symbol/index.html",revision:"f03defa75f16351091cc906f283fc93e"},{url:"basic/markdown/index.html",revision:"40561080458c165ae122fea4544030e0"},{url:"basic/vuepress/case/index.html",revision:"f20b711d79b1152f875ddfc85ab6a2ba"},{url:"basic/vuepress/command/index.html",revision:"8df4c0b78c4615608c4f75c3925d53b5"},{url:"basic/vuepress/file/index.html",revision:"1f1cbf870eb882d3ffa72d8656f69960"},{url:"basic/vuepress/index.html",revision:"96bdbb15b1d3c5c585ff184243cccaf1"},{url:"basic/vuepress/plugin/index.html",revision:"fe58343d8a251fe71dfca548c79a7739"},{url:"basic/vuepress/theme/index.html",revision:"deaff3e724d85508ff2a0590a8ae61a1"},{url:"category/basic/index.html",revision:"35724bddc54ae01f7e28da5689af094e"},{url:"category/basic/page/2/index.html",revision:"c8dc802d3df9d0ddf0d02e1d13f81f5c"},{url:"category/basic/page/3/index.html",revision:"9d9c13b5cef30480043179e0bf880a3e"},{url:"category/config/index.html",revision:"2f6de826c14abf41c5c1cfc2c89ac9e0"},{url:"category/config/page/2/index.html",revision:"5fd40014332695b1a71572af98025153"},{url:"category/config/page/3/index.html",revision:"f1d58a29dc7103fe85c7bf1c1c186454"},{url:"category/demo/index.html",revision:"1e54b0d4cef0733b88b2e7324e488dce"},{url:"category/FAQ/index.html",revision:"2de663e2fda4a9287104ee9cdd9fb6e2"},{url:"category/feature/index.html",revision:"749d97646459a975e5cf3dda08ac50e0"},{url:"category/feature/page/2/index.html",revision:"ce6f51c4088a592a7d8da2aba8bf80af"},{url:"category/feature/page/3/index.html",revision:"251c54a6c0baa8f420798bc5fd45b3dc"},{url:"category/index.html",revision:"a1603c3d9ddd62061d507d205b484d49"},{url:"category/instruction/index.html",revision:"ca5e38dce8f4225b84d3d2a1cb84957a"},{url:"category/layout/index.html",revision:"b29b50f91d80d3fc90230bd31340438f"},{url:"category/layout/page/2/index.html",revision:"c68443c9616fcf56e60babd04b7e1c90"},{url:"category/markdown/index.html",revision:"f3026ab1c2481431430acc6a0ff7c92c"},{url:"config/index.html",revision:"5a5dc1c8694ce9cd7c60e5df9f5f3863"},{url:"config/page/index.html",revision:"a4ce935b3819abf669584e5f73c7ef4a"},{url:"config/plugin/container/index.html",revision:"d846626ee3b108e26a27f19a80bdf3fa"},{url:"config/plugin/copyright/index.html",revision:"e7831316ce3eda5e0d4b14b562f1668d"},{url:"config/plugin/index.html",revision:"d982161af6b15a95698425abf489bdf7"},{url:"config/stylus/index.html",revision:"88c9aa2f1fe0eaf5366d024c7d3ada89"},{url:"config/theme/apperance/index.html",revision:"3e4281e28962fb490c0f5ad8af722c76"},{url:"config/theme/default/index.html",revision:"dd1a1c88b374d9fcdf167f26fbb1947c"},{url:"config/theme/feature/index.html",revision:"dba14992387a946de848352b5a5b2f96"},{url:"config/theme/index.html",revision:"919b2e9df3adfb762d50fa62f6c0a2a2"},{url:"config/theme/plugin/index.html",revision:"7b868f068e8efe9c0d59994d34df125b"},{url:"demo/index.html",revision:"2fb185d3601990b0b253f434394c234a"},{url:"FAQ/index.html",revision:"3c016d8a95d1003824d4f952a816cebc"},{url:"guide/feature/blog/index.html",revision:"6be6a37b998386d0fd3a29464756e622"},{url:"guide/feature/comment/index.html",revision:"beb3618c4b0b989fa7003345c881636f"},{url:"guide/feature/component/index.html",revision:"76a6fd0019f865d87b4b644340380626"},{url:"guide/feature/encrypt/index.html",revision:"7a811210190c209ddddc8b84bb865ebe"},{url:"guide/feature/index.html",revision:"83c156be8827f6bb69b8532c1775708f"},{url:"guide/feature/markdown/align/index.html",revision:"bbce13ca1a21613d2fa903db600e32cc"},{url:"guide/feature/markdown/flowchart/index.html",revision:"9f17d83e4c942534475d826f8be21b6d"},{url:"guide/feature/markdown/footnote/index.html",revision:"1ca3e0abe956ece29695dd702d4e1774"},{url:"guide/feature/markdown/index.html",revision:"e0339af97acf49617c553264304f914e"},{url:"guide/feature/markdown/mark/index.html",revision:"43466a2d7e22e61235204daae67bcbaf"},{url:"guide/feature/markdown/presentation/index.html",revision:"3573983b0a491989fffb546abb48f3e4"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"8c57251e27ef4deaebd2c8cd62bd2ad9"},{url:"guide/feature/markdown/tex/index.html",revision:"cb488eded511bede9cc5108440a9e458"},{url:"guide/feature/page-info/index.html",revision:"829f3447d727023df6c1697ddff22ffb"},{url:"guide/feature/page/index.html",revision:"0987f4c2e4697166f2ddece1419f02c5"},{url:"guide/feature/pwa/index.html",revision:"0563a2060e895b225a98f63f78865271"},{url:"guide/feature/seo-sitemap/index.html",revision:"166f5f25fcef109e5f06254da5dd2d8b"},{url:"guide/feature/theme/index.html",revision:"e073f592e520bee6a358ea14ed05d3a7"},{url:"guide/feature/typescript/index.html",revision:"f29462d7db73b2a152228b8e582c37dc"},{url:"guide/index.html",revision:"c535004ee2d09f766764d1615dd5811c"},{url:"guide/install/index.html",revision:"7f0f571373451c826ceed327692c94d1"},{url:"guide/layout/blog/index.html",revision:"1059331f5830a7b203ca8fc3169fc26e"},{url:"guide/layout/home/index.html",revision:"e2600d56fac7431e84243ca7a5301344"},{url:"guide/layout/index.html",revision:"9f6105c8d59e6b35a07c0321a74b1086"},{url:"guide/layout/navbar/index.html",revision:"96577d817a8e26245241717094a68a91"},{url:"guide/layout/page/index.html",revision:"78c3a3bec0d588dcdd0142922f0c02c7"},{url:"guide/layout/sidebar/index.html",revision:"6bc4949b5d2a8bc047f9a05af701b405"},{url:"index.html",revision:"1ca89bafbc1ae496c196639caf961d9b"},{url:"tag/blog/index.html",revision:"d9576326e21513dbc70a22f3f02c5feb"},{url:"tag/comment/index.html",revision:"6b8e0e00912f17defd4c9a2c0d4c8f7a"},{url:"tag/components/index.html",revision:"8b2fe1e91628e1caf05ce5c4caef0c38"},{url:"tag/config/index.html",revision:"cc845af55e3fde6d555d59310ace506b"},{url:"tag/config/page/2/index.html",revision:"1f1cee66e9f9e1d209031f6517fcf329"},{url:"tag/config/page/3/index.html",revision:"8a69a29a9688efa8d5b239c707f2ebe1"},{url:"tag/emoji/index.html",revision:"e4e1377351e37dcc768c883f2cde1c5e"},{url:"tag/emoji/page/2/index.html",revision:"70acb1d7dedb033a32a397bf9480b1f8"},{url:"tag/encrypt/index.html",revision:"1270900858015b6db30e9ef7a41e579b"},{url:"tag/feature/index.html",revision:"6081d672c41df1193d5ea16924554699"},{url:"tag/feature/page/2/index.html",revision:"bddc8a9a92913fa4e7179f8c3d4f93c4"},{url:"tag/feature/page/3/index.html",revision:"1a5095d1278aed9fb56a46de9b1b2ab3"},{url:"tag/feature/page/4/index.html",revision:"d3bcdbfff2036b2198553202c8d92285"},{url:"tag/frontmatter/index.html",revision:"a9c3ebc6ff6c3c23965dca24fcd086cc"},{url:"tag/home/index.html",revision:"3e816b9be9d9f2193ee435526d6d785a"},{url:"tag/index.html",revision:"d4fd85075f3b14695f43dc115b36deca"},{url:"tag/intro/index.html",revision:"5b02846a66f0e766df1c34e5e6ff95d9"},{url:"tag/layout/index.html",revision:"5167ee3633a2f5652311954783301b66"},{url:"tag/layout/page/2/index.html",revision:"0dc1c6a95062ec98029dbecf46439fea"},{url:"tag/markdown/index.html",revision:"35d6acaf993cb38a3ab859e97cb49fdd"},{url:"tag/markdown/page/2/index.html",revision:"0a818dd5adad6210dcd4dbf2ffebb4a0"},{url:"tag/markdown/page/3/index.html",revision:"01067eb60c876d7d939c70238e703515"},{url:"tag/navbar/index.html",revision:"440c0dbc6cc1c539d7f82e90246ad57b"},{url:"tag/page-info/index.html",revision:"6b7f2f6ebca31ccd318c63fed7432117"},{url:"tag/page/index.html",revision:"e6d9bcde6b1300d0b8ad226cf13fb804"},{url:"tag/plugin/index.html",revision:"091429ff701d77affa9bc65d64755a0b"},{url:"tag/pwa/index.html",revision:"8163b2a33dad5aba364b875bd0365c77"},{url:"tag/seo/index.html",revision:"9e93bdcf6f17f58cb425eb78426b3fbf"},{url:"tag/sidebar/index.html",revision:"24adb175d70da1c2f59a0bb2a44bcde0"},{url:"tag/sitemap/index.html",revision:"05ba0d79a4e367aaa1729df715acd5d8"},{url:"tag/style/index.html",revision:"88c113bb106125e34f4f3847f917ec4d"},{url:"tag/themeConfig/index.html",revision:"a292c045b4e7dd2ccccce644cbc3509a"},{url:"tag/typescript/index.html",revision:"fed82f7b52512d095d4cd78e0227c6d4"},{url:"tag/vuepress/index.html",revision:"b0b8a7dc01d913a1ca86e161c6fc5a58"},{url:"tag/vuepress/page/2/index.html",revision:"71ac7f30081fbe6d4e6063d3156dca44"},{url:"timeline/index.html",revision:"6a11c86e7e61ed35c4300cb82ec8b5c2"},{url:"zh/basic/index.html",revision:"66ec7b61e6f111c1d21b467723bbca7e"},{url:"zh/basic/markdown/demo/index.html",revision:"81e69db7e69d44241ceac3911f32b788"},{url:"zh/basic/markdown/emoji/index.html",revision:"133aa999e2b1ae0be7e7f8039336c376"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"e507e5bccac45fc5cd5a71831e263943"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"697452a41ef5c471ce5310824c9f0ead"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"5b2e3ac1127a124efa2664be27c19947"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"2511b5b83c89a032f4c8beb5747d8e5d"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"e1c5f75dbc7905d0f46fc344c4f6e44f"},{url:"zh/basic/markdown/index.html",revision:"046de2dbff6ee6ad68e74f4d65490815"},{url:"zh/basic/vuepress/case/index.html",revision:"3db706a82c26c4f61245e213b9d12771"},{url:"zh/basic/vuepress/command/index.html",revision:"1d2eb43e0ed3b4172c199d1cfbd63b09"},{url:"zh/basic/vuepress/file/index.html",revision:"cdd2035f24ec89f4e841b9f3e69c3fcb"},{url:"zh/basic/vuepress/index.html",revision:"b5bea202b2f054f98b9a221ad75323f5"},{url:"zh/basic/vuepress/plugin/index.html",revision:"1ccc3223ac82d40937ac03946ad2d13c"},{url:"zh/basic/vuepress/theme/index.html",revision:"f1e362e4b9eaa55c1bb6647804d8fc1e"},{url:"zh/config/index.html",revision:"3b90ccc38b475a048dc9661955454035"},{url:"zh/config/page/index.html",revision:"56b60592f9b8046ad75c2bc5e5606184"},{url:"zh/config/plugin/container/index.html",revision:"f3476a744223cdecb4e4835a013e9777"},{url:"zh/config/plugin/copyright/index.html",revision:"b77df9fcc34229ee775cac3bf3382a36"},{url:"zh/config/plugin/index.html",revision:"444e7a3fac055db98d7fe7525eaa7f92"},{url:"zh/config/stylus/index.html",revision:"d84cd2c5a613bad3bf67cb905ae67fea"},{url:"zh/config/theme/apperance/index.html",revision:"cee979546be40da08bd4c2a69dfa75c8"},{url:"zh/config/theme/default/index.html",revision:"cf4f1be3310b72a432e66e2ef6162939"},{url:"zh/config/theme/feature/index.html",revision:"65eea19a4bcf777c89475f6ae58eef24"},{url:"zh/config/theme/index.html",revision:"daae4acc239121a588cefc9e8f356d57"},{url:"zh/config/theme/plugin/index.html",revision:"f7ea3e588f06b1b1bf25d537b4db9499"},{url:"zh/demo/index.html",revision:"cf2719291d308d2a55040dccf7501682"},{url:"zh/FAQ/index.html",revision:"227e14ebe6e5bfccb3dd73dec69c3300"},{url:"zh/guide/feature/blog/index.html",revision:"928eb833a6939580d5f2a592ae2b95a8"},{url:"zh/guide/feature/comment/index.html",revision:"90e04d0384ef6bf92d48e8d765ec7924"},{url:"zh/guide/feature/component/index.html",revision:"11eaccc85717516170f1ae32919c2b9b"},{url:"zh/guide/feature/encrypt/index.html",revision:"63647a654e49100b8a540f09d775f0df"},{url:"zh/guide/feature/index.html",revision:"90db4ca949e6d23ea294ce0120754372"},{url:"zh/guide/feature/markdown/align/index.html",revision:"b0834b18fc53542f1994a1632d413767"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"99ad420321b6057dbe79a468e0bd40bb"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"b5a00b809416e5fe28bd9ea1b09fb7de"},{url:"zh/guide/feature/markdown/index.html",revision:"1249c88c0ce78596541b815248724af7"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"c32504de77f33ce546f668699e6cc921"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"2bedfa7e7ed80678502a781283417eaa"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"b9bb8a88fe37495a2cd558b1145702f9"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"f4631db29a1a16b143e39a1bdbd1b4bd"},{url:"zh/guide/feature/page-info/index.html",revision:"d8f94e25a4fb7e6fb3e5ebedc708ea09"},{url:"zh/guide/feature/page/index.html",revision:"95c373d3b15150e2c486810da38e513d"},{url:"zh/guide/feature/pwa/index.html",revision:"ac319e008edd7ad0857d51685727424b"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"742a23569613feb860b64a87844bed0a"},{url:"zh/guide/feature/theme/index.html",revision:"45e75e7f90ac3b17bc0b06ef62cfe6ca"},{url:"zh/guide/feature/typescript/index.html",revision:"a46c787409e10a2888767274ab7f7338"},{url:"zh/guide/index.html",revision:"95e171c59822f6af7a7dd1ba0c0a9e05"},{url:"zh/guide/install/index.html",revision:"ea0d60441278d7b6320b3d43be594812"},{url:"zh/guide/layout/blog/index.html",revision:"cca22d39d16f7667904b8bedb6f748bb"},{url:"zh/guide/layout/home/index.html",revision:"1e943b7d47228eff55d06304a366dec2"},{url:"zh/guide/layout/index.html",revision:"541277ce7fc862d3aaa718424cb22790"},{url:"zh/guide/layout/navbar/index.html",revision:"87bb68de1c03854990c547a8d8d87016"},{url:"zh/guide/layout/page/index.html",revision:"73aa43d1da0c6bce397c1a3c0b318528"},{url:"zh/guide/layout/sidebar/index.html",revision:"1e1b1b1158d043f7b3bc6a490734f90a"},{url:"zh/index.html",revision:"2aea10aadfddd89c3941e6ec8e358515"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f0777128a82c63bd19593d76653bbfb9"},{url:"assets/icon/basic-monochrome.png",revision:"938e16a0d21178b0806ef9d93a8006fe"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"48ae2e82b916af1945a7a37f2976b0df"},{url:"assets/icon/config-monochrome.png",revision:"d62b10b2812dfcd975adb16be16edc64"},{url:"assets/icon/guide-maskable.png",revision:"2df9dce9df659acf4e6e1267d8ade67d"},{url:"assets/icon/guide-monochrome.png",revision:"ee41e03bce3749dfa34fce5b13151bc9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
