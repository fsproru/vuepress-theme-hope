if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.ecaa7db7.css",revision:"f0025f0bf439b0e553eb7ec7d91e7ad1"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/125.a8b066ed.js",revision:"b92a1d9ee57a8f1acd166e625ccc00ff"},{url:"assets/js/126.683ba149.js",revision:"e00217722b10c90be2edd83d6be611a3"},{url:"assets/js/127.b650c9de.js",revision:"6305a309f46beb7b3f96ebfaffcf6753"},{url:"assets/js/128.d783d407.js",revision:"e2db3743a7d800608bc11a15dafb0895"},{url:"assets/js/app.2e5abd41.js",revision:"20a1a154175841224cc11d1673b43b4e"},{url:"assets/js/layout-Blog.06c2e75f.js",revision:"421d6602880fcdf21ca72dd71265ffc9"},{url:"assets/js/layout-Blog~layout-Layout.0a516b7e.js",revision:"4d476bb120020e1cb88365044983fcf1"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.73f9bc2a.js",revision:"74022edcb40d6b8a811b1904ce98b617"},{url:"assets/js/layout-Layout.6155a550.js",revision:"2494dc8743a508369c80ac1fc54de3a8"},{url:"assets/js/layout-NotFound.52c29617.js",revision:"efa109ca952d4cd6c50660e8be26f29e"},{url:"assets/js/page-AboutVuePress--4a71114e.6bfce09f.js",revision:"e64767b10e736e457f9f41c97209bc0d"},{url:"assets/js/page-Basic--770cb96b.8a9f859a.js",revision:"8e3615b4037f2851900e60cbb9513975"},{url:"assets/js/page-Bloghomepage--64265752.7141e934.js",revision:"2fdf6d7a859bd10659de48d0418f5efc"},{url:"assets/js/page-Blogrelated--17c260a2.5bff01f5.js",revision:"25a271b7d1da56cf3073ab04a4d2a3f5"},{url:"assets/js/page-CommentFunction--5bb6671c.e1cd37eb.js",revision:"5cb4df6145b3c61530fcfaeae1af94e3"},{url:"assets/js/page-Commonproblems--2b571e9b.37d8a120.js",revision:"0a6dea750baf00d22c3f50fea8f19ab4"},{url:"assets/js/page-Config--35a0a7d9.dc6a7685.js",revision:"6fdfe2dfcec8a15995205f8e086e3887"},{url:"assets/js/page-Customalignment--4f21aa5c.4c7b4748.js",revision:"a98220a46e4a10e4b926c192ae8307b2"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.01b13b72.js",revision:"d109327f8742fe9b504a177f78a03a5d"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.c3201fb7.js",revision:"a95f6e57ea2b9a93f7a6359ace49d2b3"},{url:"assets/js/page-Demos--f328658e.73e45eba.js",revision:"01ac0bea62981503e17e0342a194e95e"},{url:"assets/js/page-EmojiList--41bb29b9.09eca8d0.js",revision:"720a39d879980b4dd0851536a55e9d82"},{url:"assets/js/page-Emoji列表--404e6737.149f13e5.js",revision:"9f91e10ad6195b2fe01d74f50172898f"},{url:"assets/js/page-Encryptionfunction--181bdc9c.777f2966.js",revision:"6bbda5b401eb5a5d16a36540c4660b4f"},{url:"assets/js/page-FileStructure--665a4f1c.4d348ce8.js",revision:"dda59dd2f13c21cb8c33a9e0ef3ab289"},{url:"assets/js/page-Flowchart--7ce6d974.07c3ef64.js",revision:"65cc7a90ac16c051987ff05d7a8d2312"},{url:"assets/js/page-Footnote--0c733e52.b27fdb7f.js",revision:"fdbe2ecfee2e386da5222d2fe2428bbf"},{url:"assets/js/page-HomePage--5834599c.3d0093d3.js",revision:"665131c8e316127dd6e64a7f90feefba"},{url:"assets/js/page-InstallUsage--0ab466d2.89eeef01.js",revision:"e7d10c21b34663e2cec83cc055eb4174"},{url:"assets/js/page-Introduction--d4910962.151827e6.js",revision:"3f5c8324e3ac7ed62215143032d0a0c8"},{url:"assets/js/page-Layout--12bd4f0e.4614fac9.js",revision:"4126401a39ae7af05df605cec7f4b1e6"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.156715fe.js",revision:"c81b9a532237789a8ae89c3361dea222"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.66489402.js",revision:"b92272987191cc9bd571437121aab52d"},{url:"assets/js/page-MarkdownIntroduction--270989ce.7228f932.js",revision:"f3c7ff74276c82628c1ee8cbfb7e3f77"},{url:"assets/js/page-Markdown介绍--0e6891b6.23c918d1.js",revision:"59708ee9805526146895153bf4740774"},{url:"assets/js/page-Markdown增强--6162938f.d0f75b23.js",revision:"6ddffe0a8a694d5ad2cbbe5177e55e11"},{url:"assets/js/page-Markdown示例--5479fe88.f99bbd8f.js",revision:"067a589546a3f14ec1f6f31a30291c37"},{url:"assets/js/page-Markup--6b1f341c.e99b1673.js",revision:"bd7cb5ab66b0c169a0b6c93e2162db40"},{url:"assets/js/page-Nature--749fb09c.d0913059.js",revision:"a2bfbc3332c4f67fba495f29e1fad438"},{url:"assets/js/page-NavBar--c7bf87dc.9513dac1.js",revision:"f34f1077ce2e12caea3f1db007e57a41"},{url:"assets/js/page-NewComponent--1d138c72.5f730dc0.js",revision:"cac83e2b510f7996a1a1578a3850cb68"},{url:"assets/js/page-Newfeature--5136c541.cd947b89.js",revision:"e88555f0942ca2b252663a729d679a7d"},{url:"assets/js/page-Object--16031ab2.11cac224.js",revision:"68522768143fa2266f89697ca6d4d35e"},{url:"assets/js/page-Page--af17b59c.9307464f.js",revision:"00368e7af80f0648d0e917606ccaf0c4"},{url:"assets/js/page-PageConfiguration--0aacc152.0779b087.js",revision:"258bbcdec047619fdaf76797c4708c29"},{url:"assets/js/page-PageEnhance--03665ac8.53fb3fce.js",revision:"5dd51c4fd74a130200b33ad06965d94b"},{url:"assets/js/page-Pageinformation--71efd5d2.e6422c81.js",revision:"88e66dbc5e0911d5f9f79e3f08876941"},{url:"assets/js/page-People--2182769c.1231df62.js",revision:"e6e5ce91e9525bc7b27c75f67e5d4395"},{url:"assets/js/page-Place--951cdc00.e078c3e5.js",revision:"3e13c13bf9c3385dd402611a8df59ab9"},{url:"assets/js/page-PluginDescription--137c6c07.e36169f4.js",revision:"a461c71781392c9a5ecb8faa83d34323"},{url:"assets/js/page-Plugins--adbf415c.5d3eb584.js",revision:"fd1e1e99010ca97948679f05d946b1c8"},{url:"assets/js/page-Presentationsupport--8f8e54dc.1af68842.js",revision:"2325ce6b281ccad80b2f60a3d2512485"},{url:"assets/js/page-PWA--01089712.6f06c6a8.js",revision:"d80953cabb7fea9eed419862da692de7"},{url:"assets/js/page-PWA--243ef2b8.3d11acbe.js",revision:"8d606506d18f84024716b36c3d722edd"},{url:"assets/js/page-SEOandSitemap--ccd3659c.903fd8f0.js",revision:"d1eecd20d089fc87c467016a01fa7d06"},{url:"assets/js/page-SEO和Sitemap--2853f164.18382e55.js",revision:"9ea5a9dc5d2843c5c1aa44bd2e4b3253"},{url:"assets/js/page-Sidebar--2fa1ea2c.4246cb61.js",revision:"1c15c5faae00499bfea7221bcda8d462"},{url:"assets/js/page-stylusconfiguration--6796cdf2.71a911c0.js",revision:"24806e8b28419b88334b36e05001afbd"},{url:"assets/js/page-stylus配置--0ce19a82.f01fb65f.js",revision:"4b938db6e40bc33408c3284935e69bbd"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.7df3c17b.js",revision:"85cc07879a87c6033da3f6f8c39c748e"},{url:"assets/js/page-Symbol--a9259c5c.81ea2bd5.js",revision:"c5f96ecdf99c7d8a92f15c4343c0b1d5"},{url:"assets/js/page-TexSupport--64cb5e50.2e00f249.js",revision:"922bfac6fc4f72332c5dfec4897041be"},{url:"assets/js/page-Tex语法支持--1e02b152.091fe3d7.js",revision:"3aebb367c9fc05a1c136cbacfde13eb6"},{url:"assets/js/page-ThemeConfig--1120a0ce.9f3f25a1.js",revision:"4123bbee64d2c9230f493f1534d8418c"},{url:"assets/js/page-ThemeConfig--1726e14e.13d85558.js",revision:"2eaa0ccebaf3c1194d9d0ffeca3b85fb"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.98f832d6.js",revision:"95f6ad5280c795041788b09b27b05660"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.20ee2a6a.js",revision:"fa49cfe3e747fcb627e3836f0aa417d9"},{url:"assets/js/page-ThemePluginConfig--958196dc.12952285.js",revision:"e5f7ec0131825cd18809d717273db3a3"},{url:"assets/js/page-TSsupport--09728ac8.eec28f96.js",revision:"966275e694063e6888d695cb1d62629d"},{url:"assets/js/page-TS支持--4625f812.fde39bea.js",revision:"2921e570fb3606c8e3fc7069ea3e08f7"},{url:"assets/js/page-VuePress--b7060eee.7a88a5b5.js",revision:"ceaeb2950e2c4d01deff7507a200ef54"},{url:"assets/js/page-vuepress-plugin-container--31498112.bc6bbd6a.js",revision:"e98cf7c2003759462984a18e244a4193"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.be9ddb55.js",revision:"c1138c7421e6e8c87d2b7f9d443628d1"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.caf7b79e.js",revision:"f6cf4f04288a6ea7515df713c7469485"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.b996f32c.js",revision:"26a138ba5f9690f97c8b1d7b68cf48c5"},{url:"assets/js/page-vuepress-theme-hope--354da24e.5cecb56c.js",revision:"590f95cc5ed8b896c3f91e223b9e6312"},{url:"assets/js/page-vuepress-theme-hope--776d8369.5c2c47fe.js",revision:"db5ace88310c320da90ee940d519cbd5"},{url:"assets/js/page-VuePressCases--082972f2.58c04256.js",revision:"b2d087a8f3fbccf07fe3ae93de8f7524"},{url:"assets/js/page-VuePresscommands--9f3f316c.bf00735d.js",revision:"a2ca3a1aa8d22f9a08893dba037ccf92"},{url:"assets/js/page-VuePress案例--531d5f3e.a8e2a938.js",revision:"dec37ce680767b23e7360c150cf1529a"},{url:"assets/js/page-上下角标--8efed9dc.cb16c9a3.js",revision:"926b9e224379859fd4d49c8da6b19885"},{url:"assets/js/page-主题功能配置--5bb71452.684117b3.js",revision:"7210e0ed0a80f95eec342270d1f97b2c"},{url:"assets/js/page-主题布局配置--7db7eff2.7467b0fb.js",revision:"302c27978a4be78518e4825600370be5"},{url:"assets/js/page-主题插件配置--1b0c3e98.ab5298fb.js",revision:"853384639ddd17c6e6f0b0b035643fb9"},{url:"assets/js/page-主题配置--21dc088d.10f7aab5.js",revision:"da28e6f7bc67f4a3fc0b961e1a787b44"},{url:"assets/js/page-主题配置--2c572572.442ffbfd.js",revision:"509a87b68ab5b0e084cfd52bd417e926"},{url:"assets/js/page-人物--b4fc27dc.2aa8e5c8.js",revision:"949993e4e7ffaa5fac0dd41a602fb4e8"},{url:"assets/js/page-介绍--2e99d139.e8a72f57.js",revision:"8993572024efedb92900aabb6e4b1995"},{url:"assets/js/page-侧边栏--43054cb2.de40e1ad.js",revision:"04e2feabbad8e62599b061d20bfb4401"},{url:"assets/js/page-加密功能--2361b7e4.ccdbe545.js",revision:"14debb316194f6ea11e95dac2dba8364"},{url:"assets/js/page-博客相关--6a3fd4f2.0232cf75.js",revision:"328efa85a9189b191f4dc3fca4eae1be"},{url:"assets/js/page-博客首页--1eb2b298.58c5d1e6.js",revision:"306ae07bba29d5d8f39965c4f47d281e"},{url:"assets/js/page-地点--6710785c.06da872e.js",revision:"3e23b614bf44f50f04e477abb07aa180"},{url:"assets/js/page-基础知识--4d466a79.5e536305.js",revision:"e19d14a89b34af945f1962544b50492a"},{url:"assets/js/page-安装使用--76e0e5b0.c4cb3092.js",revision:"4a548e4050b949b1d797f95cfbd198e3"},{url:"assets/js/page-对象--e150da9c.981aa64a.js",revision:"89ad4b6c33d3c37154170ccbadf6cb13"},{url:"assets/js/page-导航栏--183844fc.c5c3ae36.js",revision:"9fc1090a8613a0ee57bf45fa4353264a"},{url:"assets/js/page-布局--fa93e36a.e6ddd0f8.js",revision:"2c3043973700c923b4a97832dbd7b972"},{url:"assets/js/page-常见问题--10ab790e.824b066a.js",revision:"7ccad63d0a16bb3da0c9c7ac716e19bf"},{url:"assets/js/page-幻灯片支持--5808e664.560e6289.js",revision:"269d2055a47a3c1826a7af633c72976c"},{url:"assets/js/page-插件--32355f10.d4269e6a.js",revision:"7ce87e1489b8e010bb56d17fb5e09df2"},{url:"assets/js/page-插件说明--cbca1c8e.aee41055.js",revision:"2eb490c968a6ad75cb25a1beb0775470"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.3947e8f9.js",revision:"342e79ea6d8dbf5874045ef80814b5da"},{url:"assets/js/page-新增特性--30c6c799.a3248cc0.js",revision:"b4308e3567b198a38542fffa1c6c91be"},{url:"assets/js/page-新增组件--0979095e.ac59a804.js",revision:"cfa5982f5081ac126d6545fbf4f1ad97"},{url:"assets/js/page-标记--0ac52704.66f7c7ad.js",revision:"65d80c918fd623551c1e29d9ae4cd8dd"},{url:"assets/js/page-流程图支持--582eff1c.a6719eac.js",revision:"51f1096cd1101fdef62da2c72298c572"},{url:"assets/js/page-深色模式与主题色--01662674.e017d12b.js",revision:"27048ade2bbf423ba598c67c11c04367"},{url:"assets/js/page-符号--2db8fb80.67e39473.js",revision:"3ffd1e79aaa0d1548afd316ff8f6eedc"},{url:"assets/js/page-脚注--17d88350.71347a23.js",revision:"28916b62b8d00d1cf7e3d7b339d8c237"},{url:"assets/js/page-自定义对齐--048d31dc.6b56c7d7.js",revision:"7ae208e3bb22f6ef6645a1c148a2d28f"},{url:"assets/js/page-自然--7ec33be2.fec65285.js",revision:"9bb2cc243915b42fbcf8261050d86046"},{url:"assets/js/page-评论功能--350aff9a.429a0b62.js",revision:"ab803a332dd1177ff8ed67ec6c625ee5"},{url:"assets/js/page-配置--d315f8fe.bba737d7.js",revision:"57a2d2b387883b47c7516118118936f3"},{url:"assets/js/page-页面--78423bfe.8fef43d5.js",revision:"0e3db7500c6ba09e40577820fa46f030"},{url:"assets/js/page-页面信息--455b9800.8d370ec6.js",revision:"1e0eceb2dc8db2db975ba766be0d8cca"},{url:"assets/js/page-页面增强--2e4cf75c.cab65c4d.js",revision:"4e857dd6829b54022897ce152ad9eaeb"},{url:"assets/js/page-页面配置--02399408.3750c7ba.js",revision:"504def7c968aa07721114ea9290ed98e"},{url:"assets/js/page-项目指令--2f3d7c1c.37a6cba4.js",revision:"bb5150d11b47f16ab64961dc7afeda99"},{url:"assets/js/page-项目案例--1f3d6482.f7700b0f.js",revision:"e6555c96596a22aa6dd252d860c0e175"},{url:"assets/js/page-首页--79a22944.4eb6614c.js",revision:"878b8fb376ab07ccd99195b6aae36f82"},{url:"assets/js/page-默认主题配置--0d5b7f32.fb4fcbb5.js",revision:"0b9a6a89fa337d23fe2bb96e06019fa0"},{url:"assets/js/vendors~docsearch.4b52ed2d.js",revision:"1c0ae6697a371b061bc84f27cefe7052"},{url:"assets/js/vendors~flowchart.b3a5b488.js",revision:"cd2a0199cdc192734d9804a179c2628d"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.b9db2285.js",revision:"d4b4e2a0a77a0699abcead6ab5d46765"},{url:"assets/js/vendors~photo-swipe.60ed6540.js",revision:"05623cd149bcb2dfce573ddcbe586745"},{url:"assets/js/vendors~reveal.8827293d.js",revision:"a24e11d81260d3c8bbd2fd4146ad1422"},{url:"assets/js/vendors~valine.8cb10463.js",revision:"e7e3dfe0f64a8adff71d688b954f5c00"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"14c782a76075e3d86f27b07424f206db"},{url:"article/index.html",revision:"6aaa2104b2bbc49b402e699ce18dd337"},{url:"basic/index.html",revision:"29f0594ed86745e0fe694fa8b6b2eccf"},{url:"basic/markdown/demo/index.html",revision:"41e53537be0ab24baa42b66a4b23de7a"},{url:"basic/markdown/emoji/index.html",revision:"a05831047823ac736c27e30cfc65aaa1"},{url:"basic/markdown/emoji/nature/index.html",revision:"882ec7dd7a3bbb5371bbc185e020cf93"},{url:"basic/markdown/emoji/object/index.html",revision:"28e38c89f1b13afcff2e045b1e578b4f"},{url:"basic/markdown/emoji/people/index.html",revision:"a0cee3a57976aff9b13c97b20d25107b"},{url:"basic/markdown/emoji/place/index.html",revision:"e62d5f711a16fdad87d52b66ca310877"},{url:"basic/markdown/emoji/symbol/index.html",revision:"2116c6768d27837951a2eea4976f3c7b"},{url:"basic/markdown/index.html",revision:"13420cccf5377cb2ce01df1ffcba8550"},{url:"basic/vuepress/case/index.html",revision:"7e06bc3703ee1bd1140a8caf201462e2"},{url:"basic/vuepress/command/index.html",revision:"bd831cdb846cb1a0f8239a16e567c179"},{url:"basic/vuepress/file/index.html",revision:"d2b227e2afaea82ddd942ef158400a87"},{url:"basic/vuepress/index.html",revision:"9f688f53f6f025060bdf58eccf70b49d"},{url:"basic/vuepress/plugin/index.html",revision:"f92f544933c1653b5f59509b5c2ec4c4"},{url:"basic/vuepress/theme/index.html",revision:"73f756f9885c71b1ba7e90f4f8362263"},{url:"category/basic/index.html",revision:"776e77232ea3cd61fb3e7dd6f8bbc497"},{url:"category/basic/page/2/index.html",revision:"93f9d64bf7c655fb6e0e480a47126fc0"},{url:"category/basic/page/3/index.html",revision:"caa79c49b1959a3986a61452dc3fc266"},{url:"category/config/index.html",revision:"c04366ffb6097e646e83e2f8833446fa"},{url:"category/config/page/2/index.html",revision:"08c7b24d5af649c11eaf74537eebeaf6"},{url:"category/config/page/3/index.html",revision:"1a7d3b54f8b339d2394a49d18588d8df"},{url:"category/demo/index.html",revision:"6d61ec3a7907ee212b7cad6c1a0c85e5"},{url:"category/FAQ/index.html",revision:"7a38426c922b0b8ea5c94ad8d5e51806"},{url:"category/feature/index.html",revision:"f39e8cd45e93326c79f1100663a99081"},{url:"category/feature/page/2/index.html",revision:"5167e42d3b94238bfa7190740c190721"},{url:"category/feature/page/3/index.html",revision:"629393c0d95bf2d26eefa5613065db35"},{url:"category/index.html",revision:"6e0173a0e599ca317412a0c170343b50"},{url:"category/instruction/index.html",revision:"a0eacdffdf7bc69e6bd76ed893ef336d"},{url:"category/layout/index.html",revision:"3a7d8a7c86a2721f32e7edf33c6699ac"},{url:"category/layout/page/2/index.html",revision:"5288b234d2129ee5d5dddd8eb366c030"},{url:"category/markdown/index.html",revision:"9528c5792b35dbf833b66b264653fd87"},{url:"config/index.html",revision:"a7f7b2be1bacdf6f72b504257857aa49"},{url:"config/page/index.html",revision:"6ba7af09cba2d2de1e47bc172aeafeca"},{url:"config/plugin/container/index.html",revision:"a479f08b394e02f11e835801f4e8f8aa"},{url:"config/plugin/copyright/index.html",revision:"27b5d7dca41f8ddcdb8a3ec540106710"},{url:"config/plugin/index.html",revision:"0b59dba1f573cd6ee84bdd2802ccce3c"},{url:"config/stylus/index.html",revision:"4ef821daae4c97a42191ed4a04da6eb0"},{url:"config/theme/apperance/index.html",revision:"f63de87f09bd8d7bf65760671436f48a"},{url:"config/theme/default/index.html",revision:"1c63acd813d6e95e075d72e7b1058050"},{url:"config/theme/feature/index.html",revision:"7a6a76fa361a3c7d139b7bcbf010576d"},{url:"config/theme/index.html",revision:"cc5bc4a25c2b1fb0c104ea84c26fabaa"},{url:"config/theme/plugin/index.html",revision:"3642493d14ba0605f1f9c6396db828c5"},{url:"demo/index.html",revision:"2b280321a9a035bc1c9c1efc6c1a413b"},{url:"FAQ/index.html",revision:"d7a15aa463b7dc098a764b1eb59ed8ab"},{url:"guide/feature/blog/index.html",revision:"486ed9c838dae8410faf2944b41204ad"},{url:"guide/feature/comment/index.html",revision:"0379f4551b3edc2519255fb4522ec08b"},{url:"guide/feature/component/index.html",revision:"4c1560ff57f20dd360d995520b4a9b34"},{url:"guide/feature/encrypt/index.html",revision:"ccb6dc42790dae5c3fcc2e16511667bd"},{url:"guide/feature/index.html",revision:"ea5b925563719c85f17a63650a03cd6d"},{url:"guide/feature/markdown/align/index.html",revision:"2c4de4a53a5281692289be31c042500e"},{url:"guide/feature/markdown/flowchart/index.html",revision:"2e00da90dc04b06e5c0028af5ee9be07"},{url:"guide/feature/markdown/footnote/index.html",revision:"596d487aea5641c9a98e92d684f65d35"},{url:"guide/feature/markdown/index.html",revision:"bc2813ba31de0b8b4b9952abe36553d0"},{url:"guide/feature/markdown/mark/index.html",revision:"960e194e9e79319ab60748712b81bceb"},{url:"guide/feature/markdown/presentation/index.html",revision:"f9cafca16a20807a348eb378b370c484"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"fedf3fb78345a19b1e377064ea1a3f2e"},{url:"guide/feature/markdown/tex/index.html",revision:"51fc593efdd0b17f69cf8257dba5190d"},{url:"guide/feature/page-info/index.html",revision:"1f5c7db0041226e2241954da586a58ae"},{url:"guide/feature/page/index.html",revision:"0a7f03ac3fe37e79a8a11cdd8846ed67"},{url:"guide/feature/pwa/index.html",revision:"7da656efe46a293ef84f5c8ff3440e3b"},{url:"guide/feature/seo-sitemap/index.html",revision:"60c544d241e107479bb509849f53cfda"},{url:"guide/feature/theme/index.html",revision:"aa5504f8b461a04450e621b977418ec2"},{url:"guide/feature/typescript/index.html",revision:"c1afaef6607dd73efb1ae08c21db4652"},{url:"guide/index.html",revision:"215a45ad501810a0f5a645bf2d372fd2"},{url:"guide/install/index.html",revision:"0d69d46e5481eddc858c1b06804886a4"},{url:"guide/layout/blog/index.html",revision:"a1afda06187477cfdd5439bdc31254e4"},{url:"guide/layout/home/index.html",revision:"faa7628fbea0459cad436b0c27384331"},{url:"guide/layout/index.html",revision:"78df6c81209d103c3df60df2c5d9c1ed"},{url:"guide/layout/navbar/index.html",revision:"31b01da072887f2d46a202fcaf4143e5"},{url:"guide/layout/page/index.html",revision:"c71d07c53afbda89218a1a85213e80e6"},{url:"guide/layout/sidebar/index.html",revision:"cc758ba43501744fe2c4b3ce02e287a8"},{url:"index.html",revision:"f9825e8df667f5143f1f02104de2d0e7"},{url:"tag/blog/index.html",revision:"5c0117974c623f7b991ec31f77ef3a99"},{url:"tag/comment/index.html",revision:"8e8ba00ff04f45d8dac918b797f4bb91"},{url:"tag/components/index.html",revision:"d1c4835c3495827dd2c35c17736810a1"},{url:"tag/config/index.html",revision:"b2fe7151e929d45003918255ace3f63a"},{url:"tag/config/page/2/index.html",revision:"a8c9d44db6f039016788f0e72b09a3c6"},{url:"tag/config/page/3/index.html",revision:"c062c279e45955623641129b301238a4"},{url:"tag/emoji/index.html",revision:"958bf9c03c1b587bf28501a187566291"},{url:"tag/emoji/page/2/index.html",revision:"a746d86bb5e2d1f433cb193ca4a7d715"},{url:"tag/encrypt/index.html",revision:"8093c088eb3c12c6f82a07c59a1a8ace"},{url:"tag/feature/index.html",revision:"6bdfdd62e8ef162e436e8e6a4a5d8c78"},{url:"tag/feature/page/2/index.html",revision:"334d37f2fc3859c8038a47e3d9790aff"},{url:"tag/feature/page/3/index.html",revision:"77afbc376d0735ba9c6ccaab32dcb789"},{url:"tag/feature/page/4/index.html",revision:"cc82e42bcbb6021acbe9ed66a60b0c07"},{url:"tag/frontmatter/index.html",revision:"84eb62ad328e04dccef4f5f168e9eecb"},{url:"tag/home/index.html",revision:"a29fecd67ac2bb2fe2b54c977ade305f"},{url:"tag/index.html",revision:"bb1ee83e985a30a48e07485ea0d4992f"},{url:"tag/intro/index.html",revision:"a2e8973b55f592fb10642c4c8710c190"},{url:"tag/layout/index.html",revision:"a6164ed55cfcfcc75e0ea2d34307fdd5"},{url:"tag/layout/page/2/index.html",revision:"6b6e64dda02220ca75e21aa94cfa3aa6"},{url:"tag/markdown/index.html",revision:"6c975e72d518e571bf6a9cf89bb21d47"},{url:"tag/markdown/page/2/index.html",revision:"61002ff49d23b524360d1dd4d0ed3dc9"},{url:"tag/markdown/page/3/index.html",revision:"c67969c61555f3a0944e029378516e61"},{url:"tag/navbar/index.html",revision:"1190eba0b97b9e697dc445996b17d6a1"},{url:"tag/page-info/index.html",revision:"41981010b2bd5085b1eee0f0e7c26964"},{url:"tag/page/index.html",revision:"85df3e930f3d690946dbbf92842d9a16"},{url:"tag/plugin/index.html",revision:"bea16d21824c08cd02c5361905ad4db1"},{url:"tag/pwa/index.html",revision:"fc98c1a41dc9a83fd0a0049f07b8a212"},{url:"tag/seo/index.html",revision:"28cdd094871adaf3af74d83618015486"},{url:"tag/sidebar/index.html",revision:"a606eff13911fc0033f0d5f492ca56ab"},{url:"tag/sitemap/index.html",revision:"8ff85a5f1d158f25281bf804a4714a9a"},{url:"tag/style/index.html",revision:"a1792d79d5b8d090b1c938b964f6d6be"},{url:"tag/themeConfig/index.html",revision:"b4b65b2ddfd689f164ad3e77ac96ffa8"},{url:"tag/typescript/index.html",revision:"4628c8a06cea1d9a57e65177299497e6"},{url:"tag/vuepress/index.html",revision:"f89b5714874562e728a510b673d1eea0"},{url:"tag/vuepress/page/2/index.html",revision:"295bf12bf52c913d57c775272964ce45"},{url:"timeline/index.html",revision:"48eefa5548f4d74fbb8b2f522ce3a48a"},{url:"zh/basic/index.html",revision:"70e2561f26ab8854f305580a718f7311"},{url:"zh/basic/markdown/demo/index.html",revision:"34da9cccb800759a40c1650c735ec83b"},{url:"zh/basic/markdown/emoji/index.html",revision:"cabcaabea1b93d79a3f4177ce5ac0fb4"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"15f39af0a7952dac9baa09266754a962"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"589718ff885dcd9e96aeacc9f129a1f5"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"cfc48f3400b48f9d2afaf5b4369aad0a"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"b6502a6e216e43c28079ee2d67c601ea"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"8dbb83fa71d996a70e25550ebbc2995b"},{url:"zh/basic/markdown/index.html",revision:"31b48ad573036511695408dae741d974"},{url:"zh/basic/vuepress/case/index.html",revision:"2750296aefd3cdb091a3547007342a0c"},{url:"zh/basic/vuepress/command/index.html",revision:"77164320ebcc1ce1bacaa51bb144faf1"},{url:"zh/basic/vuepress/file/index.html",revision:"d45fe9bb50b87f2098680efb32c2e357"},{url:"zh/basic/vuepress/index.html",revision:"925bc3c2e1834d822645274dd8517c9e"},{url:"zh/basic/vuepress/plugin/index.html",revision:"7e5354667b85ebc656944c6f850dc9c5"},{url:"zh/basic/vuepress/theme/index.html",revision:"5dd7857e7bb1596de159aaa9c004871b"},{url:"zh/config/index.html",revision:"836922a0628221a4482272b408a4eac2"},{url:"zh/config/page/index.html",revision:"5bf1cbf7588364cab24f51aa37dfdfbd"},{url:"zh/config/plugin/container/index.html",revision:"dc377c907b1bb0346826eee9ebf36d54"},{url:"zh/config/plugin/copyright/index.html",revision:"3be26cf373b3fe282e72ff550b82d025"},{url:"zh/config/plugin/index.html",revision:"7d923d2ff4532b7ae4128fc2f3a16640"},{url:"zh/config/stylus/index.html",revision:"cce1b0b0341ac0ed23f0c67411d983e6"},{url:"zh/config/theme/apperance/index.html",revision:"a96c70961298a40cfb1b462546b8b029"},{url:"zh/config/theme/default/index.html",revision:"a6a4915008c83215942976fa307b9026"},{url:"zh/config/theme/feature/index.html",revision:"6dfb1dfe8853b0e65de6cc94242c915f"},{url:"zh/config/theme/index.html",revision:"a2a3e661b8258e29f94143b5ffef8358"},{url:"zh/config/theme/plugin/index.html",revision:"a432c7c59cde13a89cdfb2dc4599b77c"},{url:"zh/demo/index.html",revision:"ef8e707f9e101ec65a17e0bc118e2f02"},{url:"zh/FAQ/index.html",revision:"3233ebf1d1856d6ef58991cc11fdf6f6"},{url:"zh/guide/feature/blog/index.html",revision:"73c191118a235863625f6250f0bc7b74"},{url:"zh/guide/feature/comment/index.html",revision:"7659005c9c2b082fbd5688427a4f84b8"},{url:"zh/guide/feature/component/index.html",revision:"f68e40235c2f95b2ef17042122e588e1"},{url:"zh/guide/feature/encrypt/index.html",revision:"76aed176356e9ae01e83463335c939e5"},{url:"zh/guide/feature/index.html",revision:"130bc2ff969c7ce9338cc4b9f6bc7789"},{url:"zh/guide/feature/markdown/align/index.html",revision:"efcb629d6299b6dc7cdb85f9b86f81d6"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"54e4e2fad819573950d19858723dc986"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"036b990a7039204bec974ef623841acd"},{url:"zh/guide/feature/markdown/index.html",revision:"64b2ed37f47a7246f3d205b870cfdbc5"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"2d731452130bb2945eb75eb0b1075956"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"aa78ae1ed916b4e1476613f1e279bb61"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"f05bd262e8ecaaae3edac0e39ff2e2f2"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"b2c29df9f1fd06305c10077d65a2ea95"},{url:"zh/guide/feature/page-info/index.html",revision:"b7e91145e24f4be117791bb234ea12c3"},{url:"zh/guide/feature/page/index.html",revision:"e82329fca6336b90e0cd2c7611772a24"},{url:"zh/guide/feature/pwa/index.html",revision:"893c90921199b00eeb331bdb4fe36289"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"0539136f8387a8dc2b2f895191f717c4"},{url:"zh/guide/feature/theme/index.html",revision:"7af276ac2c367dc22517e8805746a360"},{url:"zh/guide/feature/typescript/index.html",revision:"7a4f1fa759010e7ce7d47c5c9a58adcb"},{url:"zh/guide/index.html",revision:"c73093369eba597446b3b49aa5d836f4"},{url:"zh/guide/install/index.html",revision:"ec379925f1a96399184c144bca4b679a"},{url:"zh/guide/layout/blog/index.html",revision:"db773fe347e2580a2faa5f7e7a40c576"},{url:"zh/guide/layout/home/index.html",revision:"99cd612aa1ebbe9206dd1d3cd60d686c"},{url:"zh/guide/layout/index.html",revision:"dec3878d4546c922fea78c4207e0e717"},{url:"zh/guide/layout/navbar/index.html",revision:"8838add44ba34272a56ac7ecb47a5a5b"},{url:"zh/guide/layout/page/index.html",revision:"1a4dc6adceedde77cedfa43ddec6a96f"},{url:"zh/guide/layout/sidebar/index.html",revision:"be6427208b896fc6d48138ad771ba030"},{url:"zh/index.html",revision:"7d2df87aba2e49eb23c2e8806ffcaacb"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f0777128a82c63bd19593d76653bbfb9"},{url:"assets/icon/basic-monochrome.png",revision:"938e16a0d21178b0806ef9d93a8006fe"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"48ae2e82b916af1945a7a37f2976b0df"},{url:"assets/icon/config-monochrome.png",revision:"d62b10b2812dfcd975adb16be16edc64"},{url:"assets/icon/guide-maskable.png",revision:"2df9dce9df659acf4e6e1267d8ade67d"},{url:"assets/icon/guide-monochrome.png",revision:"ee41e03bce3749dfa34fce5b13151bc9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
