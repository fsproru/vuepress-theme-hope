if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.0c9cb2fd.css",revision:"a2c8738a73d46c40594c18e435ea0d4c"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/128.7c5e7fc6.js",revision:"468b4c60d3c06e9a15766d0b330cf763"},{url:"assets/js/129.1635bb85.js",revision:"4eeab69bc713225fd271334c8fc9db0d"},{url:"assets/js/130.f685a150.js",revision:"890ea28b8761b852ede0059c7ac96af8"},{url:"assets/js/131.48548160.js",revision:"38c36c9255fae30ac8db8668c454b273"},{url:"assets/js/app.d79911c4.js",revision:"12ce092a7c516996243025ebec10ac7f"},{url:"assets/js/layout-Blog.03f3fa97.js",revision:"a0d8ecd6799b14d57e2ebe3d999bfc51"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.d7339fc6.js",revision:"0dac9461d12a86e0fbe4be3657698639"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.1e3badd9.js",revision:"4968a97037ffff861b238dba82fa742a"},{url:"assets/js/layout-Layout.f97b002f.js",revision:"6e1a75cefb9ddf5de4b64141632c02a6"},{url:"assets/js/layout-NotFound.0c54084a.js",revision:"99d1b129ba774926d2f7019b124d5a97"},{url:"assets/js/layout-Slide.c4790748.js",revision:"a6cdad5c24f53122d6d9a2504cd9735d"},{url:"assets/js/page-AboutVuePress--4a71114e.68ba8592.js",revision:"9ed5e57ec8656adff13acd847e56efea"},{url:"assets/js/page-Basic--770cb96b.69eb0f8c.js",revision:"1515b88c41810d9debff57e5f573c139"},{url:"assets/js/page-Bloghomepage--64265752.f4d491ac.js",revision:"ff484cc4b7ed6d942bee8d70f747be1b"},{url:"assets/js/page-Blogrelated--17c260a2.5fcba465.js",revision:"6ff030c6f324be2533ce0fcbbe3eb4f9"},{url:"assets/js/page-CommentFunction--5bb6671c.f37c0ea3.js",revision:"0545332a0bf6e8237575f94b7b316ccd"},{url:"assets/js/page-Commonproblems--2b571e9b.a34d73e4.js",revision:"a7e357f780278e384a1a89b8af0f5aa2"},{url:"assets/js/page-Config--35a0a7d9.65e9a555.js",revision:"14c4d08cb3d4d1d71daf595e5b19dc0a"},{url:"assets/js/page-Customalignment--4f21aa5c.feb26c52.js",revision:"14bb870b4b435605b7a4a893be3a940d"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.d0c04f50.js",revision:"58e8452334e77f78a13423a6f6bdf2ee"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.71cb47c1.js",revision:"de6e106564a4fbfcf42438c31e15b05f"},{url:"assets/js/page-Demos--f328658e.a36214db.js",revision:"8ec10c46b1e2084d66e4576671e4b4a1"},{url:"assets/js/page-EmojiList--41bb29b9.a0967fcc.js",revision:"5edf309b72fef95bd39cf898d7ec0a3b"},{url:"assets/js/page-Emoji列表--404e6737.faf1b23e.js",revision:"3efc9365ac7055773a62d9fa6ecd1759"},{url:"assets/js/page-Encryptionfunction--181bdc9c.4e8f4cad.js",revision:"93d698c236aa9f7b206ae956f384d3c7"},{url:"assets/js/page-FileStructure--665a4f1c.6c6eb6ea.js",revision:"5b70e1e7eb09a702048646130c0e6243"},{url:"assets/js/page-Flowchart--7ce6d974.cfd46749.js",revision:"0dbe028fff3b9e32fc9a5d54b726347a"},{url:"assets/js/page-Footnote--0c733e52.be98b4c6.js",revision:"84ad195d8b5049dbd70fe3bb4cc3544d"},{url:"assets/js/page-HomePage--5834599c.bc4d51c7.js",revision:"b512526b0631ac7d23e6f25668f98580"},{url:"assets/js/page-InstallUsage--0ab466d2.ab1c182d.js",revision:"f3bb4b74ef4869b55740a8951a9e890b"},{url:"assets/js/page-Introduction--d4910962.1c9943ec.js",revision:"a8bc6a45398b668b78b7231144a94235"},{url:"assets/js/page-Layout--12bd4f0e.5223f2ac.js",revision:"7ea152b895bf7030d58738673155a8a8"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.fa357d63.js",revision:"ab03b74dc10650bca14f9647c866f411"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.cf53b2a3.js",revision:"cda314a98c8e5f7adeff89b55cef48ef"},{url:"assets/js/page-MarkdownIntroduction--270989ce.5734c1b8.js",revision:"a0d9417850423bba46b9ca3609cf4eab"},{url:"assets/js/page-Markdown介绍--0e6891b6.2c448587.js",revision:"d1fc011ec5ef4a3c023be39fb43106c7"},{url:"assets/js/page-Markdown增强--6162938f.7dd984ab.js",revision:"a4fd485cef37a94fe02df923750eea9a"},{url:"assets/js/page-Markdown示例--5479fe88.ae52dcc0.js",revision:"a91dc00d012e406743539f3f6d731d0f"},{url:"assets/js/page-Markup--6b1f341c.513ee175.js",revision:"9ea8cc49023d34202845f18e72e3d596"},{url:"assets/js/page-Nature--749fb09c.2dd0ee8a.js",revision:"5e15d8ad195a5fe4a9213ca855f759b0"},{url:"assets/js/page-NavBar--c7bf87dc.da466b00.js",revision:"9be24e96aca035c1ade3c62fb63f0a4b"},{url:"assets/js/page-NewComponent--1d138c72.a67e28ae.js",revision:"ee2306c402dc082acd7c893430318c05"},{url:"assets/js/page-Newfeature--5136c541.35a82a2a.js",revision:"70fe45ecdeb02ec943f4d340c848559a"},{url:"assets/js/page-Object--16031ab2.64660faa.js",revision:"9542722cc55b17b3c3a7049b29cc0004"},{url:"assets/js/page-Page--af17b59c.2595a522.js",revision:"24fb3a64722dbd061f8253e62f2f31f4"},{url:"assets/js/page-PageConfiguration--0aacc152.770c72e1.js",revision:"0b4dcce64770f8d79a8eb7da87afbb44"},{url:"assets/js/page-PageEnhance--03665ac8.add472dc.js",revision:"abae5d4ea75c956c46356b54563a11e0"},{url:"assets/js/page-Pageinformation--71efd5d2.6e91ab3d.js",revision:"ded1484a875c1c5e9cf471651c3e964b"},{url:"assets/js/page-People--2182769c.0028f104.js",revision:"71c9b6e8bf37e4347989c6cc0b0e111c"},{url:"assets/js/page-Place--951cdc00.22e3096b.js",revision:"3f919113ca624521a373d4c3b44ed7c1"},{url:"assets/js/page-PluginDescription--137c6c07.4ab5eb9f.js",revision:"9ecf555df794b0d4b8a818f9bf282ea7"},{url:"assets/js/page-Plugins--adbf415c.c8d382c0.js",revision:"e4421fb53ca75e621ce8c8aa86c2f8d3"},{url:"assets/js/page-Presentationsupport--8f8e54dc.b7735568.js",revision:"176d1c966fb7b4dc435d91e27853cf08"},{url:"assets/js/page-PWA--01089712.68d2d4fc.js",revision:"7ed752cd80ec71cf4127e63092fbc006"},{url:"assets/js/page-PWA--243ef2b8.e9e7476f.js",revision:"df8a547d828f909e1e6741ad39da2cd3"},{url:"assets/js/page-SEOandSitemap--ccd3659c.8b572849.js",revision:"0d201e1149fd7defc837746982e33c98"},{url:"assets/js/page-SEO和Sitemap--2853f164.6c8b7415.js",revision:"08fb155a4c8bab1138360a150b3f9bcd"},{url:"assets/js/page-Sidebar--2fa1ea2c.7efd12d7.js",revision:"67b76e7fa3d4f1ee3097b9cdb13dd788"},{url:"assets/js/page-Slide--269ae052.1652a3b5.js",revision:"3073984d71b24dd0b55cc40e15f5a682"},{url:"assets/js/page-stylusconfiguration--6796cdf2.02f09c23.js",revision:"c7109d58260c08898402caf97bd6b3d9"},{url:"assets/js/page-stylus配置--0ce19a82.02e8190d.js",revision:"814c071381e9dd36590ec76cf941c57a"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.f47e1dfe.js",revision:"fc73c22bf0a598c12333dc555be4f159"},{url:"assets/js/page-Symbol--a9259c5c.a24fba4a.js",revision:"8cc60692df6755b347568f8f997e0477"},{url:"assets/js/page-TexSupport--64cb5e50.70cbed41.js",revision:"df1d22b971fd5eaac7c29eb6484ddf4d"},{url:"assets/js/page-Tex语法支持--1e02b152.a4d12096.js",revision:"4b85128588b5a1904dfff993587a4ee2"},{url:"assets/js/page-ThemeConfig--1120a0ce.1091f86f.js",revision:"b6ca11186b481e969fda64bb714d4948"},{url:"assets/js/page-ThemeConfig--1726e14e.6ddcaaa9.js",revision:"160481445c25ee9d50c0d4e09f0492a0"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.eb28b71c.js",revision:"ca0a64bdfb9c726ca838b19de82a3afa"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.05e06a4a.js",revision:"5324411d41d5b8af67941e66e50ce6d6"},{url:"assets/js/page-ThemePluginConfig--958196dc.091f7a31.js",revision:"6c954717e6e14e6d1a32b970480f4897"},{url:"assets/js/page-TSsupport--09728ac8.30c07736.js",revision:"51cd44a761b511c399cf88acbb53a65a"},{url:"assets/js/page-TS支持--4625f812.ba4fc9e9.js",revision:"fc72df73a435a4800ff679b784afcec4"},{url:"assets/js/page-VuePress--b7060eee.8b118f30.js",revision:"33a9fcdc02fda6227e34201b3267267b"},{url:"assets/js/page-vuepress-plugin-container--31498112.1036e4ea.js",revision:"7115420bf49b924e2388458de93e61c5"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.4138d872.js",revision:"2b649b1a4d5ab47a3d4fa4cb0f42a667"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.5d971cd1.js",revision:"79e1cbc443b9ebd07872971c53b359d0"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.4afcd0dc.js",revision:"c2c3a9221178a490de4fd2788034e061"},{url:"assets/js/page-vuepress-theme-hope--354da24e.46fe70de.js",revision:"92aa854aa1a0df6f3fa3fbdc0069279d"},{url:"assets/js/page-vuepress-theme-hope--776d8369.b69119d8.js",revision:"c48f9c121b9b0f32d35a1502c0b75b91"},{url:"assets/js/page-VuePressCases--082972f2.e1ead5bc.js",revision:"9c6903c13c795ba70da316d9ce0136a6"},{url:"assets/js/page-VuePresscommands--9f3f316c.e93a6299.js",revision:"e6c435d7b306f123fdb68954796a979b"},{url:"assets/js/page-VuePress案例--531d5f3e.cf7dd837.js",revision:"5a1d1b7701d39c5b13ec4c71de5cd107"},{url:"assets/js/page-上下角标--8efed9dc.1d84cf6e.js",revision:"282a45ec4927e66bc08e31435df8bc4c"},{url:"assets/js/page-主题功能配置--5bb71452.25c540e6.js",revision:"5308f6ec3a8d227d6caad17964c36a69"},{url:"assets/js/page-主题布局配置--7db7eff2.c2b6b393.js",revision:"5c1aa43c6f62e89e17e03ba5ca92caff"},{url:"assets/js/page-主题插件配置--1b0c3e98.12e8aabf.js",revision:"1ae9adce9d480e3265eccc114e80e0c1"},{url:"assets/js/page-主题配置--21dc088d.38dad555.js",revision:"929025ded36632c569e9cb347c17049c"},{url:"assets/js/page-主题配置--2c572572.cab8efb6.js",revision:"406b91213e7be0a62c1843458a55c230"},{url:"assets/js/page-人物--b4fc27dc.54459b1a.js",revision:"af8972aec7ac6a541e94bd4711f7bf17"},{url:"assets/js/page-介绍--2e99d139.cda58e65.js",revision:"6b27a5f864d13fd4292f63584df982e3"},{url:"assets/js/page-侧边栏--43054cb2.1c5a530d.js",revision:"ea2ed210dec16ab430d9c968808752f7"},{url:"assets/js/page-加密功能--2361b7e4.568806f9.js",revision:"052a87ce8fc2c037f6f0a6c74f46d4ff"},{url:"assets/js/page-博客相关--6a3fd4f2.410315dc.js",revision:"bb62fd92a8f3256767fb843955c994be"},{url:"assets/js/page-博客首页--1eb2b298.7936e2f5.js",revision:"55a659da17c15caed3b98527875eacb4"},{url:"assets/js/page-地点--6710785c.3c2d701d.js",revision:"cf22db8bb288e2fffc198070dbc4685d"},{url:"assets/js/page-基础知识--4d466a79.d4b753bf.js",revision:"10613d2887b1524e12ea6f2ad2536a0d"},{url:"assets/js/page-安装使用--76e0e5b0.237ccbc2.js",revision:"2d27914ef43a3db3a8a558a775e0f99b"},{url:"assets/js/page-对象--e150da9c.fcb97027.js",revision:"a8cbfa8b1a3b9895ade051b5125e27fe"},{url:"assets/js/page-导航栏--183844fc.8b6be331.js",revision:"d76ade0f202da1f14256eece4fa7b7f0"},{url:"assets/js/page-布局--fa93e36a.5b39e2d3.js",revision:"37d24d3dc335603039819eea6d9663b5"},{url:"assets/js/page-常见问题--10ab790e.ee78122b.js",revision:"aac6255c6688f44aaae8812ea903b95c"},{url:"assets/js/page-幻灯片--818cb750.e1a006a2.js",revision:"2a36de8627463b5101e27808782f3754"},{url:"assets/js/page-幻灯片支持--5808e664.7dafcc27.js",revision:"1aab07744e52d6dac3f4bf48cafe8b53"},{url:"assets/js/page-插件--32355f10.78db4bf4.js",revision:"0e91f921e1dae273aba5447cb5294e01"},{url:"assets/js/page-插件说明--cbca1c8e.f7c60001.js",revision:"809a45936e724f60fb2379fe8c6cf7bb"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.032c72ad.js",revision:"a6d7121dfa807b666d184308e329581b"},{url:"assets/js/page-新增特性--30c6c799.dc5b922a.js",revision:"cd91c4e9b3abf2418679c4528597ba19"},{url:"assets/js/page-新增组件--0979095e.5d8099de.js",revision:"7205f269444e7b7349dc0bf815cbbe49"},{url:"assets/js/page-标记--0ac52704.45a5c9cf.js",revision:"d4dfc74c7e64b29445cb124b306b40cf"},{url:"assets/js/page-流程图支持--582eff1c.2dc1e88e.js",revision:"d9881a8db117da5486b7cf2f0e43588c"},{url:"assets/js/page-深色模式与主题色--01662674.09dc72f5.js",revision:"d4a6d048ebcf56fcdfc0504416a1ac71"},{url:"assets/js/page-符号--2db8fb80.e4c3be17.js",revision:"f252916b0db13c9fc12147dc455e5911"},{url:"assets/js/page-脚注--17d88350.1845f03a.js",revision:"204b71ea1c104b8465a1e77023c940c6"},{url:"assets/js/page-自定义对齐--048d31dc.d4267c2d.js",revision:"0fa7f95addafb6a024f3fc2f72afd51f"},{url:"assets/js/page-自然--7ec33be2.80d319b1.js",revision:"d3d96f536d1ca2de1654d0979a24290e"},{url:"assets/js/page-评论功能--350aff9a.a00ad67c.js",revision:"c4a02e512c8fd13faf84d9f8ed6d0f51"},{url:"assets/js/page-配置--d315f8fe.599454a2.js",revision:"92e5530358df196d3fe29bef1fd6c939"},{url:"assets/js/page-页面--78423bfe.ee85afde.js",revision:"e7146eb7ba6352c2b92928725c4611fd"},{url:"assets/js/page-页面信息--455b9800.10e72eaa.js",revision:"c64e0a3fa9f7cb5defd1783bb430d51b"},{url:"assets/js/page-页面增强--2e4cf75c.1be125e1.js",revision:"6107f4dd53cc3e080aada1bf03d1490b"},{url:"assets/js/page-页面配置--02399408.4c50a93d.js",revision:"29124313a36d257ee566cc4ff34a8368"},{url:"assets/js/page-项目指令--2f3d7c1c.ea6e76a5.js",revision:"154c7019e1fa77ead2fe40f2f3b0ee3d"},{url:"assets/js/page-项目案例--1f3d6482.e9824ad4.js",revision:"159058c0314903fe547a4c85508afc54"},{url:"assets/js/page-首页--79a22944.8878d96e.js",revision:"09d5f51d60a51200fb1a669d1acc7ef7"},{url:"assets/js/page-默认主题配置--0d5b7f32.415d6d9a.js",revision:"f46390dd7b1a92b317ed35028b45d0d9"},{url:"assets/js/vendors~docsearch.c4031da6.js",revision:"29f34ca750616072202998cf631eca1a"},{url:"assets/js/vendors~flowchart.00138b74.js",revision:"1f20726a9c0cea5f0ae28f72a8a70356"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.b9b3b9c1.js",revision:"4287bba2c5df48d7f103bd287208320e"},{url:"assets/js/vendors~photo-swipe.01b327a2.js",revision:"54a206d3a26c3ed17274d7fad310dd3d"},{url:"assets/js/vendors~reveal.dcb9cee2.js",revision:"09155e58ad2278bfcf73d88a5848ce2f"},{url:"assets/js/vendors~valine.e8738059.js",revision:"a79039ee180a6dd9586bfdf16c7071e2"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"b9870301bf497a6287c6617c663af518"},{url:"article/index.html",revision:"c883a50702b7b4b34631c9efe4c02b9c"},{url:"basic/index.html",revision:"73ac5f0399a202540f356824a6bbe7d1"},{url:"basic/markdown/demo/index.html",revision:"f59a8e9a0414519acd43258de3d8ffee"},{url:"basic/markdown/emoji/index.html",revision:"abdeeafd9c20700972a62743967840ea"},{url:"basic/markdown/emoji/nature/index.html",revision:"81475d22bb10cfaa3543ad5ce9c3b956"},{url:"basic/markdown/emoji/object/index.html",revision:"d18c31744ba13cf8edcf8a7874b22ae5"},{url:"basic/markdown/emoji/people/index.html",revision:"4662e51621d95f5ed5f9e25e8b572e7e"},{url:"basic/markdown/emoji/place/index.html",revision:"2b35ebeb79f8007195505ac79629f40e"},{url:"basic/markdown/emoji/symbol/index.html",revision:"a59f6b34bede32679407b18b520b6c92"},{url:"basic/markdown/index.html",revision:"6de3dc858b9ad44783802deb7fbeaf61"},{url:"basic/vuepress/case/index.html",revision:"b2dfd42f647755fa67fd2235ce8f440d"},{url:"basic/vuepress/command/index.html",revision:"19c143015f13b9ff69924a3e84239b11"},{url:"basic/vuepress/file/index.html",revision:"68f97eaae057a682dd190863b4f1ad31"},{url:"basic/vuepress/index.html",revision:"d91b824071417792a67bd0f97dc02349"},{url:"basic/vuepress/plugin/index.html",revision:"76ff3d1070f63d2f6423f666a79f12be"},{url:"basic/vuepress/theme/index.html",revision:"ae041d204a7f22dcab48dd49e108be8f"},{url:"category/basic/index.html",revision:"b92002d3351fc847bcb96957a84e5f75"},{url:"category/basic/page/2/index.html",revision:"02a0bfb5f4639037c014f77189fa9ae1"},{url:"category/basic/page/3/index.html",revision:"45adad60eb48fc5bca8479aee0bf22a4"},{url:"category/config/index.html",revision:"14ab4409baf778037958bbbcee69713f"},{url:"category/config/page/2/index.html",revision:"9f60b272b9ffdef53b6423a7d547929a"},{url:"category/config/page/3/index.html",revision:"8f5c94565a964f26a6a742808ac22cb3"},{url:"category/demo/index.html",revision:"ea1e915c28ecc64d285087d010ecc393"},{url:"category/FAQ/index.html",revision:"ab80abd54c47c444e24437f43157458c"},{url:"category/feature/index.html",revision:"152b2303147728bebae36dc557e87194"},{url:"category/feature/page/2/index.html",revision:"5ca96a64dfa0b6f5280b46cff871eae1"},{url:"category/feature/page/3/index.html",revision:"a4b7a22cd0c5dfc6afaf674c20e140dd"},{url:"category/index.html",revision:"7acb349a3856aae59c55eb2002982258"},{url:"category/instruction/index.html",revision:"9ec2002706943e5b3f416cf123b73497"},{url:"category/layout/index.html",revision:"9bcc0a2010602632d143d1290c89185a"},{url:"category/layout/page/2/index.html",revision:"73cd40108429da0f4c34367fa1bbf9eb"},{url:"category/markdown/index.html",revision:"633098008366c88f19070f9447e7934e"},{url:"config/index.html",revision:"c863457cfaf93e25fabcf904f2db3894"},{url:"config/page/index.html",revision:"a3d1989dadd5ed551d752638b2dfcac8"},{url:"config/plugin/container/index.html",revision:"a67a16b57fcdbca0aad75b6414d69ad6"},{url:"config/plugin/copyright/index.html",revision:"577ddd639fc6fda392c9d263b6a39fc1"},{url:"config/plugin/index.html",revision:"1fd4039f9f94e2b2e7b98d833688a765"},{url:"config/stylus/index.html",revision:"f5a627502db7ec6e488a34d7936348e1"},{url:"config/theme/apperance/index.html",revision:"e2b87156873a1fa5372333a92f3d7262"},{url:"config/theme/default/index.html",revision:"af527c53ffd583ddac55a750be401bf2"},{url:"config/theme/feature/index.html",revision:"b6401b925b530b630b93adc57b7a20f4"},{url:"config/theme/index.html",revision:"c822b1416fb1906e1a04429cdeb02495"},{url:"config/theme/plugin/index.html",revision:"1add019d265ef43d33dae4654d8e6282"},{url:"demo/index.html",revision:"77da2d8a8bec594bc0f6732f8ecfdf0e"},{url:"encrypt/index.html",revision:"c59aa114979b92e4b18656b41699b6cf"},{url:"FAQ/index.html",revision:"f7cbe911f8836eb81c737ac7d83d82ab"},{url:"guide/feature/blog/index.html",revision:"c8374d280254c80d20d60c5775185529"},{url:"guide/feature/comment/index.html",revision:"86ec741e03076865abe79abce428a766"},{url:"guide/feature/component/index.html",revision:"6dbcc9a86b108d2d61a3644d0fe17d87"},{url:"guide/feature/encrypt/index.html",revision:"1799ae2ce83365196bfa959feb9cc983"},{url:"guide/feature/index.html",revision:"49f85fcafe8ac5c3fc0f1fa550d4c857"},{url:"guide/feature/markdown/align/index.html",revision:"12960a2d2ed3a921bc6cd74302aaf65e"},{url:"guide/feature/markdown/flowchart/index.html",revision:"1b1cea9f6839f865d24965f4f7e43b4d"},{url:"guide/feature/markdown/footnote/index.html",revision:"120bf41dbe7e95ed278e855e0db0aaa4"},{url:"guide/feature/markdown/index.html",revision:"320790fa6d1855d197f925b5a194f75a"},{url:"guide/feature/markdown/mark/index.html",revision:"ff6323086f4856832bd3b2b991b7e7f0"},{url:"guide/feature/markdown/presentation/index.html",revision:"38211a62dcf3f63f438322de23c566e6"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"7bc9cad9ed5c227eb2b78e0b23183db9"},{url:"guide/feature/markdown/tex/index.html",revision:"f3f490ad8d33afad5a8bdfa19f3fd83a"},{url:"guide/feature/page-info/index.html",revision:"0aae9424344676edf6b0800242014b1c"},{url:"guide/feature/page/index.html",revision:"c3a376a2499679c2878d21579cfb2ef2"},{url:"guide/feature/pwa/index.html",revision:"e31a6687bab36f7c2e6f1b6367d927ae"},{url:"guide/feature/seo-sitemap/index.html",revision:"43ab8c1eb790758cf2f675b8bdca550f"},{url:"guide/feature/theme/index.html",revision:"dd9cb5daa6b33709d3ce29ea478c09fe"},{url:"guide/feature/typescript/index.html",revision:"a9504e6bf2382354e761af4d5a207d8f"},{url:"guide/index.html",revision:"d15e2d7ba7bb6c9e2374c36e982608ed"},{url:"guide/install/index.html",revision:"d0523f9e3edec8e07362955b50c21cca"},{url:"guide/layout/blog/index.html",revision:"ed78a4a47c8e05df774f54ed97e8cce9"},{url:"guide/layout/home/index.html",revision:"67dfd7914e8e80fb399a2ba95487fa90"},{url:"guide/layout/index.html",revision:"5451d695a188941097474de05c08958f"},{url:"guide/layout/navbar/index.html",revision:"b64da65eb03b10509eddc3ec7dc71cb2"},{url:"guide/layout/page/index.html",revision:"372466a868520fe3fa88f91dfdf32718"},{url:"guide/layout/sidebar/index.html",revision:"9affd13adb433e38d4d2381fa439cf9b"},{url:"guide/layout/slides/index.html",revision:"e82ef649fa8729cee45be45ee98f4664"},{url:"index.html",revision:"a74df40ab351ae7d0261d85bd3c00c54"},{url:"slide/index.html",revision:"5e43754eec0051318efebf1b79f69e05"},{url:"tag/blog/index.html",revision:"91c28742eebf0ded5cc697b554a2f6d1"},{url:"tag/comment/index.html",revision:"ae00a4cdded64fb0990ecc3cf2ac3974"},{url:"tag/components/index.html",revision:"b70cd9942f33bdffd5465aca04480982"},{url:"tag/config/index.html",revision:"ea05a925905d490d7dcc77eea21b597d"},{url:"tag/config/page/2/index.html",revision:"6f117e5ab1004efcb02774bf916d170a"},{url:"tag/config/page/3/index.html",revision:"f0b5494871894b4f62c156dbcfac1c38"},{url:"tag/emoji/index.html",revision:"73ddb35d2acd6a1d1403446f4e56ae86"},{url:"tag/emoji/page/2/index.html",revision:"21870eb8684581677b51f2daa4badce7"},{url:"tag/encrypt/index.html",revision:"0943fda3898c2908831b48709982189f"},{url:"tag/feature/index.html",revision:"7e2e9de9bc8f79bfc2314ad4004338fe"},{url:"tag/feature/page/2/index.html",revision:"ce86fb14b2222471dafab829c4b346fb"},{url:"tag/feature/page/3/index.html",revision:"3f3544927e8abd675f339ec0e2ac886a"},{url:"tag/feature/page/4/index.html",revision:"62b4f5df88014b7b452ea9cab580d926"},{url:"tag/frontmatter/index.html",revision:"6a8e8e7051f5fabcff36e27502c19233"},{url:"tag/home/index.html",revision:"6f2f515be7ac53b8c9e4e2b701284c5c"},{url:"tag/index.html",revision:"81a1b711d84f42c98c38c0b35bb6cb48"},{url:"tag/intro/index.html",revision:"31c86147de6d154552bd28071e329964"},{url:"tag/layout/index.html",revision:"b82746a0f2b34b43c62335a8431e9c67"},{url:"tag/layout/page/2/index.html",revision:"92c5bae0290cf0de418fab993d67c1c5"},{url:"tag/markdown/index.html",revision:"a4df13dbf8814480137ed60e43b74252"},{url:"tag/markdown/page/2/index.html",revision:"c28a334c2a1f13e672265e5553d97e54"},{url:"tag/markdown/page/3/index.html",revision:"6687ec5c8a749b68f422d922a5979127"},{url:"tag/navbar/index.html",revision:"9c2a01876705c5308fe7a280e2226b3c"},{url:"tag/page-info/index.html",revision:"14bb45798e943adcf80682fff5903a1c"},{url:"tag/page/index.html",revision:"b98c41b314750a7e6f2e5ff8d5d31ba0"},{url:"tag/plugin/index.html",revision:"1fa3479539c236e59bf46219edb6fbbc"},{url:"tag/pwa/index.html",revision:"81240f977987774b8c99ebe60d6b5e5b"},{url:"tag/seo/index.html",revision:"4860a68861f51e230c53ead9d3f844ff"},{url:"tag/sidebar/index.html",revision:"1da014f1cf6c4bd4a941970802c919b6"},{url:"tag/sitemap/index.html",revision:"11d9f927d22d1a25cee91d36aedb55a2"},{url:"tag/slides/index.html",revision:"41bc7f49b1016dcb1ef04d9d3b4cec40"},{url:"tag/style/index.html",revision:"c6c5b2a90b8c8d0d46f32cc66297ae5e"},{url:"tag/themeConfig/index.html",revision:"dfa5a7866f6ee6153803755997666417"},{url:"tag/typescript/index.html",revision:"5312670a63606dd030c46a93ff51e19c"},{url:"tag/vuepress/index.html",revision:"842431ab3a21be0571ced87d701540ea"},{url:"tag/vuepress/page/2/index.html",revision:"bb2fe3adc8d1af4b1d70e597c4e83bff"},{url:"timeline/index.html",revision:"0ccaf0b9074d76a696628abed61ddefa"},{url:"zh/basic/index.html",revision:"f36c398502dcad8664ceaca4f371ddac"},{url:"zh/basic/markdown/demo/index.html",revision:"21b10f8c4b7c2e9966dac1b7d25b4254"},{url:"zh/basic/markdown/emoji/index.html",revision:"82a6c542605723fbe16ca712b08ef341"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"819e6080d3a838405b653a7d30b65fc8"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"5524e915ad135558ce74ddc7215e9044"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"b9255864d404d000e73cf166fba16dbe"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"751064cc92c5c8b09df59b1bc17c53a1"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"7deedb3922d63bd182c2f7584227b0ba"},{url:"zh/basic/markdown/index.html",revision:"b75e9a4ec3d7d34abb1f405af0690814"},{url:"zh/basic/vuepress/case/index.html",revision:"61c57e96cb14c0a41594d994ec63cbcf"},{url:"zh/basic/vuepress/command/index.html",revision:"f75feb9ec9b45d1ca9cd9f4fe2b891d4"},{url:"zh/basic/vuepress/file/index.html",revision:"0358e83a49d111ceb9fc67fa8f7da416"},{url:"zh/basic/vuepress/index.html",revision:"8936fb26aff997709a7ba165c04fa120"},{url:"zh/basic/vuepress/plugin/index.html",revision:"7a3f6dc51191dbbac30ef430285df814"},{url:"zh/basic/vuepress/theme/index.html",revision:"d936ea94cb1fc179f149e8eb7e3d1cdc"},{url:"zh/config/index.html",revision:"19bfa7b19165164b11272747ef468c00"},{url:"zh/config/page/index.html",revision:"d6550a5006a5feffee9a76a8b18d8a11"},{url:"zh/config/plugin/container/index.html",revision:"da090998809b4ff0e6d67a63f90ddfbc"},{url:"zh/config/plugin/copyright/index.html",revision:"6993317bdbed12348f96d53c22cd24c1"},{url:"zh/config/plugin/index.html",revision:"079046d4130e34b38c9f94777ebaf1b5"},{url:"zh/config/stylus/index.html",revision:"74038e49b9e247a53a16ece07ef20bb6"},{url:"zh/config/theme/apperance/index.html",revision:"58fb825ff0ce7371f195662f5fca3655"},{url:"zh/config/theme/default/index.html",revision:"2828a01338b7e51deace198171165f60"},{url:"zh/config/theme/feature/index.html",revision:"8c448b000a3030a2134483c624d71819"},{url:"zh/config/theme/index.html",revision:"9d0f25ca3019b2f93e1d3d3cf0c4ee76"},{url:"zh/config/theme/plugin/index.html",revision:"77c7cfb87bd4dbbc96e7e76ee8f8924b"},{url:"zh/demo/index.html",revision:"e766c012a8297b129d227726e912a908"},{url:"zh/FAQ/index.html",revision:"02aeff89f278068e47ca0a0180ad4678"},{url:"zh/guide/feature/blog/index.html",revision:"fc0a9c8245c611d5f12fc88940142127"},{url:"zh/guide/feature/comment/index.html",revision:"83518e8a426a921fcc98e5601dcce077"},{url:"zh/guide/feature/component/index.html",revision:"af8bbc64a1337297593adad8ebf70578"},{url:"zh/guide/feature/encrypt/index.html",revision:"eeb35778f6c2a7e419c9b6cb6d3c54a1"},{url:"zh/guide/feature/index.html",revision:"fb84bb97eb46487773d98b891f695ad8"},{url:"zh/guide/feature/markdown/align/index.html",revision:"272fe008cf1a63c7a3732724040170ff"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"a159871520b9491b68294097a3b685cc"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"e14a5b55f428c2b1f2b1a1205097bf95"},{url:"zh/guide/feature/markdown/index.html",revision:"5009e94548b75a260da98f0460cc2003"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"569392eca90c3196441221a7f07e069e"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"4e6618add70410c19501f519ab9dad54"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"63fa2a3662c32e1fc986c28628afcae3"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"dbbad92486ee1dfa692d4be3c2b3da5a"},{url:"zh/guide/feature/page-info/index.html",revision:"95549b571254664a6ca5608e8a24e0fb"},{url:"zh/guide/feature/page/index.html",revision:"16f3529f52e5a8b6ab7df0468adbb1d3"},{url:"zh/guide/feature/pwa/index.html",revision:"c7bd58a3a4c6648f4e6e34c18e17653a"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"57a00ff0afb59759cf9e396825239934"},{url:"zh/guide/feature/theme/index.html",revision:"2df9387d6f74d0b8be79453b9105e849"},{url:"zh/guide/feature/typescript/index.html",revision:"b1b6366ece74ce1bded29388aa20f680"},{url:"zh/guide/index.html",revision:"8a55c09e5a016c5bf48877acd46a9d34"},{url:"zh/guide/install/index.html",revision:"205ece395919adb3fafadf5c8d455234"},{url:"zh/guide/layout/blog/index.html",revision:"20172a05bcc1817fdedbfb9b5a7a203a"},{url:"zh/guide/layout/home/index.html",revision:"fbd855f10bc01a0193c861040af3ac2e"},{url:"zh/guide/layout/index.html",revision:"1d14ae44939f2b23a6f98bb499f7c82e"},{url:"zh/guide/layout/navbar/index.html",revision:"eb1f03d5d9871c3dbd73abec9eda08f7"},{url:"zh/guide/layout/page/index.html",revision:"77ec8b18e882c4d11ddc2577ec8c79b6"},{url:"zh/guide/layout/sidebar/index.html",revision:"17aaf1d1267b14ae585a34ef26a2143e"},{url:"zh/guide/layout/slides/index.html",revision:"4b40452ee79e8be96631bdc4f348b725"},{url:"zh/index.html",revision:"42b9939caed402315a49d6c9c5222b99"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/slides.859646fb.png",revision:"859646fbfd7beb9a132d8bd66ca9f807"},{url:"assets/img/slides.eb1e5fe7.png",revision:"eb1e5fe780594ad95ce1a96c2eaac0e8"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
