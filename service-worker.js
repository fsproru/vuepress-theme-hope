if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.ecaa7db7.css",revision:"f0025f0bf439b0e553eb7ec7d91e7ad1"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/125.a8b066ed.js",revision:"b92a1d9ee57a8f1acd166e625ccc00ff"},{url:"assets/js/126.683ba149.js",revision:"e00217722b10c90be2edd83d6be611a3"},{url:"assets/js/127.b650c9de.js",revision:"6305a309f46beb7b3f96ebfaffcf6753"},{url:"assets/js/128.d783d407.js",revision:"e2db3743a7d800608bc11a15dafb0895"},{url:"assets/js/app.1db16ff0.js",revision:"b25b46dcc511e3c8544793dc4cf9c323"},{url:"assets/js/layout-Blog.06c2e75f.js",revision:"421d6602880fcdf21ca72dd71265ffc9"},{url:"assets/js/layout-Blog~layout-Layout.0a516b7e.js",revision:"4d476bb120020e1cb88365044983fcf1"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.73f9bc2a.js",revision:"74022edcb40d6b8a811b1904ce98b617"},{url:"assets/js/layout-Layout.6155a550.js",revision:"2494dc8743a508369c80ac1fc54de3a8"},{url:"assets/js/layout-NotFound.52c29617.js",revision:"efa109ca952d4cd6c50660e8be26f29e"},{url:"assets/js/page-AboutVuePress--4a71114e.5590ee72.js",revision:"8f2ca2ca3c0189e7ebf301fbc0b91596"},{url:"assets/js/page-Basic--770cb96b.8a9f859a.js",revision:"8e3615b4037f2851900e60cbb9513975"},{url:"assets/js/page-Bloghomepage--64265752.7141e934.js",revision:"2fdf6d7a859bd10659de48d0418f5efc"},{url:"assets/js/page-Blogrelated--17c260a2.5bff01f5.js",revision:"25a271b7d1da56cf3073ab04a4d2a3f5"},{url:"assets/js/page-CommentFunction--5bb6671c.e1cd37eb.js",revision:"5cb4df6145b3c61530fcfaeae1af94e3"},{url:"assets/js/page-Commonproblems--2b571e9b.37d8a120.js",revision:"0a6dea750baf00d22c3f50fea8f19ab4"},{url:"assets/js/page-Config--35a0a7d9.dc6a7685.js",revision:"6fdfe2dfcec8a15995205f8e086e3887"},{url:"assets/js/page-Customalignment--4f21aa5c.4c7b4748.js",revision:"a98220a46e4a10e4b926c192ae8307b2"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.79369cf5.js",revision:"930ed3f1294b485118e3c8e54c6c6221"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.c3201fb7.js",revision:"a95f6e57ea2b9a93f7a6359ace49d2b3"},{url:"assets/js/page-Demos--f328658e.18e28747.js",revision:"0de04a4f6c4147f26dac4abd935e96d5"},{url:"assets/js/page-EmojiList--41bb29b9.09eca8d0.js",revision:"720a39d879980b4dd0851536a55e9d82"},{url:"assets/js/page-Emoji列表--404e6737.149f13e5.js",revision:"9f91e10ad6195b2fe01d74f50172898f"},{url:"assets/js/page-Encryptionfunction--181bdc9c.777f2966.js",revision:"6bbda5b401eb5a5d16a36540c4660b4f"},{url:"assets/js/page-FileStructure--665a4f1c.4d348ce8.js",revision:"dda59dd2f13c21cb8c33a9e0ef3ab289"},{url:"assets/js/page-Flowchart--7ce6d974.07c3ef64.js",revision:"65cc7a90ac16c051987ff05d7a8d2312"},{url:"assets/js/page-Footnote--0c733e52.b27fdb7f.js",revision:"fdbe2ecfee2e386da5222d2fe2428bbf"},{url:"assets/js/page-HomePage--5834599c.3d0093d3.js",revision:"665131c8e316127dd6e64a7f90feefba"},{url:"assets/js/page-InstallUsage--0ab466d2.89eeef01.js",revision:"e7d10c21b34663e2cec83cc055eb4174"},{url:"assets/js/page-Introduction--d4910962.151827e6.js",revision:"3f5c8324e3ac7ed62215143032d0a0c8"},{url:"assets/js/page-Layout--12bd4f0e.9258f251.js",revision:"ee8f160ea07c5e907f062b5df43c996a"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.c5ac001e.js",revision:"3d82995925a561bb74ecb3ddc0a8ae37"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.66489402.js",revision:"b92272987191cc9bd571437121aab52d"},{url:"assets/js/page-MarkdownIntroduction--270989ce.77680585.js",revision:"570a061179959e42a6362489915b1393"},{url:"assets/js/page-Markdown介绍--0e6891b6.23c918d1.js",revision:"59708ee9805526146895153bf4740774"},{url:"assets/js/page-Markdown增强--6162938f.284f19cf.js",revision:"510a80817b10940d3072220744cb1eb0"},{url:"assets/js/page-Markdown示例--5479fe88.2f6d5a04.js",revision:"519a0600d628adc7d76b53baee3af102"},{url:"assets/js/page-Markup--6b1f341c.e99b1673.js",revision:"bd7cb5ab66b0c169a0b6c93e2162db40"},{url:"assets/js/page-Nature--749fb09c.7da489f3.js",revision:"8e67500b1d9dae05a916d7ed5b8544a6"},{url:"assets/js/page-NavBar--c7bf87dc.9513dac1.js",revision:"f34f1077ce2e12caea3f1db007e57a41"},{url:"assets/js/page-NewComponent--1d138c72.5f730dc0.js",revision:"cac83e2b510f7996a1a1578a3850cb68"},{url:"assets/js/page-Newfeature--5136c541.cd947b89.js",revision:"e88555f0942ca2b252663a729d679a7d"},{url:"assets/js/page-Object--16031ab2.4b9f4dfe.js",revision:"0dc7437b1cbaa733ee7ebf5ce4b2fbcd"},{url:"assets/js/page-Page--af17b59c.9307464f.js",revision:"00368e7af80f0648d0e917606ccaf0c4"},{url:"assets/js/page-PageConfiguration--0aacc152.0779b087.js",revision:"258bbcdec047619fdaf76797c4708c29"},{url:"assets/js/page-PageEnhance--03665ac8.fe073543.js",revision:"9eea0cefba7422ca306ff91227425661"},{url:"assets/js/page-Pageinformation--71efd5d2.296c049c.js",revision:"05e635abb52de3f3cfa3637f33fabe84"},{url:"assets/js/page-People--2182769c.1231df62.js",revision:"e6e5ce91e9525bc7b27c75f67e5d4395"},{url:"assets/js/page-Place--951cdc00.e078c3e5.js",revision:"3e13c13bf9c3385dd402611a8df59ab9"},{url:"assets/js/page-PluginDescription--137c6c07.e36169f4.js",revision:"a461c71781392c9a5ecb8faa83d34323"},{url:"assets/js/page-Plugins--adbf415c.5d3eb584.js",revision:"fd1e1e99010ca97948679f05d946b1c8"},{url:"assets/js/page-Presentationsupport--8f8e54dc.1af68842.js",revision:"2325ce6b281ccad80b2f60a3d2512485"},{url:"assets/js/page-PWA--01089712.6f06c6a8.js",revision:"d80953cabb7fea9eed419862da692de7"},{url:"assets/js/page-PWA--243ef2b8.3d11acbe.js",revision:"8d606506d18f84024716b36c3d722edd"},{url:"assets/js/page-SEOandSitemap--ccd3659c.903fd8f0.js",revision:"d1eecd20d089fc87c467016a01fa7d06"},{url:"assets/js/page-SEO和Sitemap--2853f164.c9aabb77.js",revision:"2f0612407b48bd3c88ab26e87f45e360"},{url:"assets/js/page-Sidebar--2fa1ea2c.f3ded2e1.js",revision:"24a41fd282b4537a9cecc3c54d95e334"},{url:"assets/js/page-stylusconfiguration--6796cdf2.8f804fdc.js",revision:"36590eaca968334008754b364ea0d4a9"},{url:"assets/js/page-stylus配置--0ce19a82.fb1365b9.js",revision:"77d6725002474a9e3f1483a0cc8ec161"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.7df3c17b.js",revision:"85cc07879a87c6033da3f6f8c39c748e"},{url:"assets/js/page-Symbol--a9259c5c.4b39bd16.js",revision:"c3e2224ad5b181f4e641e8928b77a7c8"},{url:"assets/js/page-TexSupport--64cb5e50.2e00f249.js",revision:"922bfac6fc4f72332c5dfec4897041be"},{url:"assets/js/page-Tex语法支持--1e02b152.091fe3d7.js",revision:"3aebb367c9fc05a1c136cbacfde13eb6"},{url:"assets/js/page-ThemeConfig--1120a0ce.4fd501d9.js",revision:"05f80e3712470f2278001648831db05b"},{url:"assets/js/page-ThemeConfig--1726e14e.ada844a5.js",revision:"e2b6f19dbe7745927044e53fcc851eff"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.98f832d6.js",revision:"95f6ad5280c795041788b09b27b05660"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.801c2035.js",revision:"f1caf3a6bd99aeb95ecf3cefec80d1c9"},{url:"assets/js/page-ThemePluginConfig--958196dc.12952285.js",revision:"e5f7ec0131825cd18809d717273db3a3"},{url:"assets/js/page-TSsupport--09728ac8.e8c83295.js",revision:"88f240b29311aa2f15a378fa5da765c2"},{url:"assets/js/page-TS支持--4625f812.fde39bea.js",revision:"2921e570fb3606c8e3fc7069ea3e08f7"},{url:"assets/js/page-VuePress--b7060eee.63db21dd.js",revision:"462bc1bfe7490330017e53d528e1d6bd"},{url:"assets/js/page-vuepress-plugin-container--31498112.bc6bbd6a.js",revision:"e98cf7c2003759462984a18e244a4193"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.be9ddb55.js",revision:"c1138c7421e6e8c87d2b7f9d443628d1"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.caf7b79e.js",revision:"f6cf4f04288a6ea7515df713c7469485"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.1cc19d1b.js",revision:"5bf244ac8dc5df7f924c6f55e13fc62d"},{url:"assets/js/page-vuepress-theme-hope--354da24e.1d1343d5.js",revision:"7d79f9a735735a36c85f9871969691df"},{url:"assets/js/page-vuepress-theme-hope--776d8369.5c2c47fe.js",revision:"db5ace88310c320da90ee940d519cbd5"},{url:"assets/js/page-VuePressCases--082972f2.58c04256.js",revision:"b2d087a8f3fbccf07fe3ae93de8f7524"},{url:"assets/js/page-VuePresscommands--9f3f316c.bf00735d.js",revision:"a2ca3a1aa8d22f9a08893dba037ccf92"},{url:"assets/js/page-VuePress案例--531d5f3e.f99009bb.js",revision:"ec2615f72e8f90f8854d807474bd5198"},{url:"assets/js/page-上下角标--8efed9dc.cb16c9a3.js",revision:"926b9e224379859fd4d49c8da6b19885"},{url:"assets/js/page-主题功能配置--5bb71452.caffd02e.js",revision:"dd671237f36193d8e91e795ab43bad72"},{url:"assets/js/page-主题布局配置--7db7eff2.1243cd2e.js",revision:"d039695432233526f00ec5465c75f91f"},{url:"assets/js/page-主题插件配置--1b0c3e98.84871db5.js",revision:"9967dbfff5c21d2a34db94bcec27a7c0"},{url:"assets/js/page-主题配置--21dc088d.10f7aab5.js",revision:"da28e6f7bc67f4a3fc0b961e1a787b44"},{url:"assets/js/page-主题配置--2c572572.c83a80a0.js",revision:"20d69c349b6832ef5252b9f94f4a791a"},{url:"assets/js/page-人物--b4fc27dc.2aa8e5c8.js",revision:"949993e4e7ffaa5fac0dd41a602fb4e8"},{url:"assets/js/page-介绍--2e99d139.843f156b.js",revision:"8d43e88bee3510b57754411ecd924551"},{url:"assets/js/page-侧边栏--43054cb2.de40e1ad.js",revision:"04e2feabbad8e62599b061d20bfb4401"},{url:"assets/js/page-加密功能--2361b7e4.ccdbe545.js",revision:"14debb316194f6ea11e95dac2dba8364"},{url:"assets/js/page-博客相关--6a3fd4f2.0232cf75.js",revision:"328efa85a9189b191f4dc3fca4eae1be"},{url:"assets/js/page-博客首页--1eb2b298.58c5d1e6.js",revision:"306ae07bba29d5d8f39965c4f47d281e"},{url:"assets/js/page-地点--6710785c.06da872e.js",revision:"3e23b614bf44f50f04e477abb07aa180"},{url:"assets/js/page-基础知识--4d466a79.075d3e27.js",revision:"360290312dee3c4262e2fafa7792fc32"},{url:"assets/js/page-安装使用--76e0e5b0.c4cb3092.js",revision:"4a548e4050b949b1d797f95cfbd198e3"},{url:"assets/js/page-对象--e150da9c.981aa64a.js",revision:"89ad4b6c33d3c37154170ccbadf6cb13"},{url:"assets/js/page-导航栏--183844fc.c5c3ae36.js",revision:"9fc1090a8613a0ee57bf45fa4353264a"},{url:"assets/js/page-布局--fa93e36a.e6ddd0f8.js",revision:"2c3043973700c923b4a97832dbd7b972"},{url:"assets/js/page-常见问题--10ab790e.824b066a.js",revision:"7ccad63d0a16bb3da0c9c7ac716e19bf"},{url:"assets/js/page-幻灯片支持--5808e664.e56385f8.js",revision:"d19ea143198b93951d6b258dece3c70b"},{url:"assets/js/page-插件--32355f10.d4269e6a.js",revision:"7ce87e1489b8e010bb56d17fb5e09df2"},{url:"assets/js/page-插件说明--cbca1c8e.0df9d393.js",revision:"3c7f0df4edb7909411951343644e45a9"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.3947e8f9.js",revision:"342e79ea6d8dbf5874045ef80814b5da"},{url:"assets/js/page-新增特性--30c6c799.fe0da505.js",revision:"f0aaf692c54f14aee1d3cb0b1a0b935e"},{url:"assets/js/page-新增组件--0979095e.be4225a5.js",revision:"7fb97b250a0eb053dc304f9685665725"},{url:"assets/js/page-标记--0ac52704.66f7c7ad.js",revision:"65d80c918fd623551c1e29d9ae4cd8dd"},{url:"assets/js/page-流程图支持--582eff1c.a6719eac.js",revision:"51f1096cd1101fdef62da2c72298c572"},{url:"assets/js/page-深色模式与主题色--01662674.e017d12b.js",revision:"27048ade2bbf423ba598c67c11c04367"},{url:"assets/js/page-符号--2db8fb80.67e39473.js",revision:"3ffd1e79aaa0d1548afd316ff8f6eedc"},{url:"assets/js/page-脚注--17d88350.71347a23.js",revision:"28916b62b8d00d1cf7e3d7b339d8c237"},{url:"assets/js/page-自定义对齐--048d31dc.6b56c7d7.js",revision:"7ae208e3bb22f6ef6645a1c148a2d28f"},{url:"assets/js/page-自然--7ec33be2.ef3cbd51.js",revision:"9f7879592d89cf226c62f96bd1a2ef0c"},{url:"assets/js/page-评论功能--350aff9a.bff7a2a7.js",revision:"14abdcf6b87a0d68470ec94140384895"},{url:"assets/js/page-配置--d315f8fe.bba737d7.js",revision:"57a2d2b387883b47c7516118118936f3"},{url:"assets/js/page-页面--78423bfe.8fef43d5.js",revision:"0e3db7500c6ba09e40577820fa46f030"},{url:"assets/js/page-页面信息--455b9800.8d370ec6.js",revision:"1e0eceb2dc8db2db975ba766be0d8cca"},{url:"assets/js/page-页面增强--2e4cf75c.cab65c4d.js",revision:"4e857dd6829b54022897ce152ad9eaeb"},{url:"assets/js/page-页面配置--02399408.3750c7ba.js",revision:"504def7c968aa07721114ea9290ed98e"},{url:"assets/js/page-项目指令--2f3d7c1c.37a6cba4.js",revision:"bb5150d11b47f16ab64961dc7afeda99"},{url:"assets/js/page-项目案例--1f3d6482.f7700b0f.js",revision:"e6555c96596a22aa6dd252d860c0e175"},{url:"assets/js/page-首页--79a22944.4eb6614c.js",revision:"878b8fb376ab07ccd99195b6aae36f82"},{url:"assets/js/page-默认主题配置--0d5b7f32.fb4fcbb5.js",revision:"0b9a6a89fa337d23fe2bb96e06019fa0"},{url:"assets/js/vendors~docsearch.4b52ed2d.js",revision:"1c0ae6697a371b061bc84f27cefe7052"},{url:"assets/js/vendors~flowchart.b3a5b488.js",revision:"cd2a0199cdc192734d9804a179c2628d"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.b9db2285.js",revision:"d4b4e2a0a77a0699abcead6ab5d46765"},{url:"assets/js/vendors~photo-swipe.60ed6540.js",revision:"05623cd149bcb2dfce573ddcbe586745"},{url:"assets/js/vendors~reveal.8827293d.js",revision:"a24e11d81260d3c8bbd2fd4146ad1422"},{url:"assets/js/vendors~valine.8cb10463.js",revision:"e7e3dfe0f64a8adff71d688b954f5c00"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"4e860cbc66c11b2d4d2f827bbf9cc8b5"},{url:"article/index.html",revision:"a264dd1f5b171b34fdd4256a898939c8"},{url:"basic/index.html",revision:"de3b080ecc972551ea2ef381c7ee3e75"},{url:"basic/markdown/demo/index.html",revision:"d8713d90eacbc9b87bfb1e2d8392453c"},{url:"basic/markdown/emoji/index.html",revision:"e2b4e122697193cd839f70e0c57602d3"},{url:"basic/markdown/emoji/nature/index.html",revision:"3009a9b4c1f11c4996e8291c87784bed"},{url:"basic/markdown/emoji/object/index.html",revision:"2184a082fcbcbf0b084607b5e9892140"},{url:"basic/markdown/emoji/people/index.html",revision:"942d4a3ecb8ce442de7d64d4dce7d824"},{url:"basic/markdown/emoji/place/index.html",revision:"6e138cda7f8b8eece16a6bc57562f9fe"},{url:"basic/markdown/emoji/symbol/index.html",revision:"dbf444681680512447d755590a63d025"},{url:"basic/markdown/index.html",revision:"aca1582949d59fb355ea2f58c64fed6f"},{url:"basic/vuepress/case/index.html",revision:"973ecf436aad458e89753487bba87946"},{url:"basic/vuepress/command/index.html",revision:"c3c1d181e71b12a0925551a268629618"},{url:"basic/vuepress/file/index.html",revision:"1cab3b1ef0191bde0280fe8c0c2e7dac"},{url:"basic/vuepress/index.html",revision:"a84f0571b44c7da25fd4924e204aeff1"},{url:"basic/vuepress/plugin/index.html",revision:"6ab2a972c7e5cfd7f4db9e930cda3e55"},{url:"basic/vuepress/theme/index.html",revision:"ea82ad574266f2b749573c50878bf558"},{url:"category/basic/index.html",revision:"12aaa7b1015f981697ed3303c01a33b2"},{url:"category/basic/page/2/index.html",revision:"a974ca6f9c0df7f0924695fdcf4cc227"},{url:"category/basic/page/3/index.html",revision:"bd98bc01cf8bd4b039a1e060db25b69d"},{url:"category/config/index.html",revision:"11ac00815fe560068c1908d776546095"},{url:"category/config/page/2/index.html",revision:"f91a54ea8407362ac80096c9c3b2b480"},{url:"category/config/page/3/index.html",revision:"fd5f6fb91f1c8dee71f44c1dca80420c"},{url:"category/demo/index.html",revision:"2c205664c6e5dcb3303b152e956ab9d2"},{url:"category/FAQ/index.html",revision:"f991742dc1f0269d53faf5383b261fd5"},{url:"category/feature/index.html",revision:"2c1d7bf737a9ac122f12af6e9a8ae0b0"},{url:"category/feature/page/2/index.html",revision:"6403fb000c5705722dcff86e4282fe34"},{url:"category/feature/page/3/index.html",revision:"aedfc27ae841c3050e7cfd598f494218"},{url:"category/index.html",revision:"eedbb049be42b171104216d3cb1f7957"},{url:"category/instruction/index.html",revision:"652c38e82a90812c4d4c62b81ea8ada9"},{url:"category/layout/index.html",revision:"6ead2da6f13cb887ed2482ee3b4c7fa4"},{url:"category/layout/page/2/index.html",revision:"287c8fafc2e20ce6b37c0855feff9c95"},{url:"category/markdown/index.html",revision:"71600bc738511b27d8b33b988e94b1e3"},{url:"config/index.html",revision:"dace2de09715f713dfc4368172ceb422"},{url:"config/page/index.html",revision:"f9079970514f94603f8507b2b5973ba1"},{url:"config/plugin/container/index.html",revision:"48edc8a9f12836334c6f8d887c51f44b"},{url:"config/plugin/copyright/index.html",revision:"af60503d72008cd5bbb14f1f7b611803"},{url:"config/plugin/index.html",revision:"ff2a283b0220b683d328ad64d3afb55c"},{url:"config/stylus/index.html",revision:"b9099aee2f24f1a33d69fdf563ff8f08"},{url:"config/theme/apperance/index.html",revision:"a4663fbb84d374e09c99bf4efbd99d9a"},{url:"config/theme/default/index.html",revision:"38a956338e5cc374bdda0a9094eafb41"},{url:"config/theme/feature/index.html",revision:"7ee4980d6d00a4a5bdf1bd066a783955"},{url:"config/theme/index.html",revision:"128d3f764bf69553efa8c26479ba4a30"},{url:"config/theme/plugin/index.html",revision:"705252a0fffafa170ad49e025456e064"},{url:"demo/index.html",revision:"0b81327910c45d4c03af61ea410e8142"},{url:"FAQ/index.html",revision:"b221fa27fd6e9a6de08e068114d387b1"},{url:"guide/feature/blog/index.html",revision:"d839be1223531b2694503957e4b54223"},{url:"guide/feature/comment/index.html",revision:"ee347778560c2deabaf7c32769708e2e"},{url:"guide/feature/component/index.html",revision:"72de93d8042297b289dd37cc03cd1838"},{url:"guide/feature/encrypt/index.html",revision:"ba01157c5a190ec237b95f6367f7db1a"},{url:"guide/feature/index.html",revision:"5282bd0cca427605d4f26dacb4d7cff2"},{url:"guide/feature/markdown/align/index.html",revision:"b569d9c7dcd18ce69d782796f202baf4"},{url:"guide/feature/markdown/flowchart/index.html",revision:"65a7e706c2c71e10c93c1186a9f7ece7"},{url:"guide/feature/markdown/footnote/index.html",revision:"ee24dea9d41ac1f0727e8bc2fd739da7"},{url:"guide/feature/markdown/index.html",revision:"f90143024b6b5d4c3189a13e75929ec4"},{url:"guide/feature/markdown/mark/index.html",revision:"0a35706a990dc09b60fc019a16248332"},{url:"guide/feature/markdown/presentation/index.html",revision:"2ce7d617416239733e9ac12c49c03dd9"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"dab7eb98622442583ad8ebaa5361828a"},{url:"guide/feature/markdown/tex/index.html",revision:"0ac2b9d616a5d908368a88958947c63f"},{url:"guide/feature/page-info/index.html",revision:"a71eea9cfe32facb0ae6b1e8ae87ee52"},{url:"guide/feature/page/index.html",revision:"d6c307b5b64d42e6cfb7c89e70adc911"},{url:"guide/feature/pwa/index.html",revision:"9a288da463bc26e721841f32522adb51"},{url:"guide/feature/seo-sitemap/index.html",revision:"15373e8f0550925905efdb6bf549850e"},{url:"guide/feature/theme/index.html",revision:"d8245e825c7edfb685aa37dcb635fb00"},{url:"guide/feature/typescript/index.html",revision:"22dd8ac82ee25bdbb5e85b61c341e9e6"},{url:"guide/index.html",revision:"2980f55a183feb04973460ee617757ff"},{url:"guide/install/index.html",revision:"be0b25bb2257230b93b6c2f12f7a074d"},{url:"guide/layout/blog/index.html",revision:"ea856c8329181072b3a170a9f9b355c9"},{url:"guide/layout/home/index.html",revision:"26ebe01f88db9e0b87cdf3f33361d829"},{url:"guide/layout/index.html",revision:"f1cdb7509c12510795b656f224e12b3e"},{url:"guide/layout/navbar/index.html",revision:"66ef866445f0b144f7c1a79d4fd081ec"},{url:"guide/layout/page/index.html",revision:"3c7deb62a60c74694590fa1f3b2e2125"},{url:"guide/layout/sidebar/index.html",revision:"06eb456c101865e0face96d2ed373570"},{url:"index.html",revision:"483c1fbaa3c9d854519e9620b97c87fb"},{url:"tag/blog/index.html",revision:"6d1bcf845b2209aeee3f38e2f34a66bc"},{url:"tag/comment/index.html",revision:"eb6d09d4999382367e48dfd77a41e773"},{url:"tag/components/index.html",revision:"9e44c3f3e4c25e079f8a561bf9b76869"},{url:"tag/config/index.html",revision:"556ae7654af0700bbc16c777fc5f2ada"},{url:"tag/config/page/2/index.html",revision:"cd5a5708d3220864646206950823260b"},{url:"tag/config/page/3/index.html",revision:"8f2ccda2c3175f6cc6a835da0d9f8a94"},{url:"tag/emoji/index.html",revision:"ac2b5573bd530d451b1d66e4acec914a"},{url:"tag/emoji/page/2/index.html",revision:"4cc900bb34644078e78a535430b2e7a1"},{url:"tag/encrypt/index.html",revision:"50b81fbc613e471e47768295a29ac29c"},{url:"tag/feature/index.html",revision:"484eca87d73c1d87220ab18a096eb8e6"},{url:"tag/feature/page/2/index.html",revision:"a1e354a465fe521ae0c3b29f97ece167"},{url:"tag/feature/page/3/index.html",revision:"44556d5dce47458f227fdfd0a757d17b"},{url:"tag/feature/page/4/index.html",revision:"bb6b2156e670633f3d8a2e70fc6a5318"},{url:"tag/frontmatter/index.html",revision:"9900dc0b1fb6d606ee61cb163741156c"},{url:"tag/home/index.html",revision:"7349606414187270a116caabaf11ba35"},{url:"tag/index.html",revision:"77ab0f8fa368babe5a2c8f60b7034a38"},{url:"tag/intro/index.html",revision:"86bdb756889b217b0df1179fa70481ef"},{url:"tag/layout/index.html",revision:"964fe4fd1f5964f9e0f9959291dfc6ce"},{url:"tag/layout/page/2/index.html",revision:"74f26c28fb390e4fa5e7101a5d3db2af"},{url:"tag/markdown/index.html",revision:"abc63a5a296e0b81b1148065e569823d"},{url:"tag/markdown/page/2/index.html",revision:"38c3deba6495bb9e4aeb2b09cc6fde04"},{url:"tag/markdown/page/3/index.html",revision:"b93a4d5fec0822d6e26f174813e3de13"},{url:"tag/navbar/index.html",revision:"8d2c4f0caae8c83265b068c10c57cf71"},{url:"tag/page-info/index.html",revision:"01548e78324df5d92913537b60d30ae7"},{url:"tag/page/index.html",revision:"e0b636022c086e4c133d62c7c03fd7e1"},{url:"tag/plugin/index.html",revision:"3c4c8b9ab3a863d803f26ba80ada23a1"},{url:"tag/pwa/index.html",revision:"46c5e1806a25f6cfb4bf5ce21a95583e"},{url:"tag/seo/index.html",revision:"d912b0b72756597a434c4d877600967b"},{url:"tag/sidebar/index.html",revision:"3f28e90fcff98424672baecce7430143"},{url:"tag/sitemap/index.html",revision:"7f82cb77e85ac725e2458f36514c2d5b"},{url:"tag/style/index.html",revision:"60148c2202d7715eb9174926a7f25a18"},{url:"tag/themeConfig/index.html",revision:"2590014d697d7f53f6f23752aba69806"},{url:"tag/typescript/index.html",revision:"cb35fb9bef49b3004171a2d7bb8f469f"},{url:"tag/vuepress/index.html",revision:"66d1fd8d663ab6ebf21ddeb88c84dd98"},{url:"tag/vuepress/page/2/index.html",revision:"3b57801e2e137484bc413799827f9239"},{url:"timeline/index.html",revision:"c817707700c9681a98dd3868e04d792c"},{url:"zh/basic/index.html",revision:"9554d17e2fb6766ece044bee56504b2d"},{url:"zh/basic/markdown/demo/index.html",revision:"229f849606f11f02bf7694e98979e25a"},{url:"zh/basic/markdown/emoji/index.html",revision:"7e0410a61886e1121abf9f0ba54362db"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"7bd27c5e2c43f19a6c944b9bd11199e9"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"9203ec09f2fb7943fe67ca27ecf3f273"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"6e15706718089b45ddb4f91f9ecfa4e1"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"423fd06ed531590e7a513da9e99c8e43"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"44ddcd6e220cf077fb2de4e8e8234db1"},{url:"zh/basic/markdown/index.html",revision:"b65d582bde8304f7a5dabc315e092b8f"},{url:"zh/basic/vuepress/case/index.html",revision:"a8420ad4a7bcb8c3eee9cc0e9f8b531c"},{url:"zh/basic/vuepress/command/index.html",revision:"3e0a04511ed4c211ebb9e8bf052dd98a"},{url:"zh/basic/vuepress/file/index.html",revision:"2391467f8a8c8742d02a1227ff7f528c"},{url:"zh/basic/vuepress/index.html",revision:"ac77204f83cca4fc86b509576f21f4f8"},{url:"zh/basic/vuepress/plugin/index.html",revision:"101aa5592e966a61678fd3b979058f28"},{url:"zh/basic/vuepress/theme/index.html",revision:"80f2e78703bc2c8847e686bf44d40b62"},{url:"zh/config/index.html",revision:"be2f77c024aacf1547b996f1b975b062"},{url:"zh/config/page/index.html",revision:"506e72293ff83e8e208cc43514a5d932"},{url:"zh/config/plugin/container/index.html",revision:"595e1b4138860d9d7adfca00850f099e"},{url:"zh/config/plugin/copyright/index.html",revision:"aeeceeb947ca18b24ff6df9027be9d2a"},{url:"zh/config/plugin/index.html",revision:"969c3a039c51cae3c0239ac02fa68d4d"},{url:"zh/config/stylus/index.html",revision:"1d6025c2fd68d8cb94206739aa56be08"},{url:"zh/config/theme/apperance/index.html",revision:"9d4500d6c61c2271e9886c1b997cf673"},{url:"zh/config/theme/default/index.html",revision:"9e89464ae07ea523a0bc9179cea6c8bf"},{url:"zh/config/theme/feature/index.html",revision:"262fdd3281e85edde070a590a0e9a5b5"},{url:"zh/config/theme/index.html",revision:"fb921b2e7ae5cfc5c3c99d864e867c7e"},{url:"zh/config/theme/plugin/index.html",revision:"1c62ca0da3008f87ef196a808c94174e"},{url:"zh/demo/index.html",revision:"4517232eeaaa6dfeaecfcbe4a6575f17"},{url:"zh/FAQ/index.html",revision:"dc01b68bebeb857742cfa925561fb071"},{url:"zh/guide/feature/blog/index.html",revision:"8aa01ddd8e0c39d1b631a5284a2c5bf6"},{url:"zh/guide/feature/comment/index.html",revision:"cc189eae6da87b2bdb092eff218daa16"},{url:"zh/guide/feature/component/index.html",revision:"40e2817edb972fbaa7885cd3c27aaf63"},{url:"zh/guide/feature/encrypt/index.html",revision:"ad6aee718d96e5c16667c0cb25dac1e2"},{url:"zh/guide/feature/index.html",revision:"65f57a5b8c6f5931659b696741402750"},{url:"zh/guide/feature/markdown/align/index.html",revision:"e702992467c49de5369e1ef94f28fc8b"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"e6285fcd12849f8ac1d16616d0532768"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"c5222c0bea768635735f81d57e0e6e25"},{url:"zh/guide/feature/markdown/index.html",revision:"08703d20b0ff1189783a531ad3a8c6ed"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"0845ed8d5ab5a76210a88c8ef45e1856"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"582d42c01ac228d84a9a33c47b27a5d9"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"888d914fc9e92185096a6e48d9174b2b"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"085929c843af2ebe31def6c4d65d9e19"},{url:"zh/guide/feature/page-info/index.html",revision:"f90c7811ae30e8be4653505efaafd65e"},{url:"zh/guide/feature/page/index.html",revision:"ea03a9b9d076c3daeca1e6552e72714f"},{url:"zh/guide/feature/pwa/index.html",revision:"4797fe8971723950c00585b90a68c074"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"f1d100c142276ef07ddf00b77f33ec63"},{url:"zh/guide/feature/theme/index.html",revision:"1137765ae0ce99aa2ed151e598c021fb"},{url:"zh/guide/feature/typescript/index.html",revision:"e76b1de1f8d0a26743f9436f56ed1471"},{url:"zh/guide/index.html",revision:"44f584914f9afc924a2e3dbf98bca51d"},{url:"zh/guide/install/index.html",revision:"6d7b1687f9d5b4e6e1596335c8e9e59d"},{url:"zh/guide/layout/blog/index.html",revision:"89806cad79e82542347949a9b1317a6b"},{url:"zh/guide/layout/home/index.html",revision:"2c7ef546b5414b179d39672bcdba1552"},{url:"zh/guide/layout/index.html",revision:"03d34e3f5455cb8a36402a10823678d0"},{url:"zh/guide/layout/navbar/index.html",revision:"397ab78dc9c8b548ba1568e67b9dd62d"},{url:"zh/guide/layout/page/index.html",revision:"1e8ebc0a03abe36a17ae7829877d9f48"},{url:"zh/guide/layout/sidebar/index.html",revision:"c5122c823d1e1b4b9f2e4712854a2703"},{url:"zh/index.html",revision:"9abb914a2771d4e5ac76c99ffa927a50"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f0777128a82c63bd19593d76653bbfb9"},{url:"assets/icon/basic-monochrome.png",revision:"938e16a0d21178b0806ef9d93a8006fe"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-monochrome.png",revision:"d62b10b2812dfcd975adb16be16edc64"},{url:"assets/icon/guide-maskable.png",revision:"2df9dce9df659acf4e6e1267d8ade67d"},{url:"assets/icon/guide-monochrome.png",revision:"ee41e03bce3749dfa34fce5b13151bc9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
