if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2328f127"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"bf7f83186bfadf1c821a8ec6f99eb1d3"},{url:"article/index.html",revision:"fdc6cadffbaa4a73a3c042386cae5b85"},{url:"assets/css/0.styles.50d343b4.css",revision:"25a8dd8f07364cff828424e1a5ef0737"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/bulb.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/danger.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/stop.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/js/120.b78c0da1.js",revision:"d5929daf5a673211ad2b39a18abc62e8"},{url:"assets/js/app.727271dc.js",revision:"46a0ada22022c6ba93bc4658c64e473e"},{url:"assets/js/layout-Blog.4eddbdf5.js",revision:"2fbc274663a3e88617de79ced39cbc7f"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.c81d8da4.js",revision:"431854f8f8c3171600ee330410d37e12"},{url:"assets/js/layout-Layout.7de87bec.js",revision:"97e7455e3f11005e1ae90bb029a3b935"},{url:"assets/js/layout-NotFound.a70907a1.js",revision:"37ad1149bfd7e2006a40e2182df73396"},{url:"assets/js/page-@mr-hopelast-update--1104de32.5e2049c0.js",revision:"05099c4a89e5100e8d926520b43a547a"},{url:"assets/js/page-@mr-hopelast-update--ebefb430.8aceffeb.js",revision:"d435b5a136dcbe2879b9d32f45468a81"},{url:"assets/js/page-@mr-hopeplugin-pwa--1c9738b4.265d8233.js",revision:"1d580bf86b363d550932761d32fc3fd1"},{url:"assets/js/page-@mr-hopepwa--051692f2.4d5abace.js",revision:"11f1767f9c7dd35df28a5e80d6e69244"},{url:"assets/js/page-@mr-hopereading-time--36317372.ad80f671.js",revision:"374ccfa2e4cb6a1e3e0ab6e5d397faea"},{url:"assets/js/page-@mr-hopereading-time--36b7a178.75e7bc50.js",revision:"71f0244d684b10d4e9034c0f29cdd617"},{url:"assets/js/page-@mr-hopeseo--44db09a4.fb250dba.js",revision:"3abe35d38136b04762aff0e748f26da6"},{url:"assets/js/page-@mr-hopeseo--4c19db12.4f1116fd.js",revision:"67da3f4345d224b7a0a6ff33f927ba2c"},{url:"assets/js/page-@mr-hopesitemap--4bd3dd04.389b3b28.js",revision:"69a9265c019f1e9094cb020cb53867ee"},{url:"assets/js/page-@mr-hopesitemap--7a219d12.2c3cd1ea.js",revision:"a799e9e8f94af65277d5b4928c8ac09d"},{url:"assets/js/page-AboutVuepress--5d12de02.580fcbd4.js",revision:"8da03fd9b3cb37e201a96dd5e528d4d8"},{url:"assets/js/page-Basic--29b12659.2fdfdf1d.js",revision:"f6cde2d901dcc833c62740a95c3d4759"},{url:"assets/js/page-Bloghomepage--d988383c.3da3fead.js",revision:"08e212e918ac52525915df84c187fa02"},{url:"assets/js/page-Blogrelated--7c1e4552.99e6068b.js",revision:"3f37a218c44a605fecfcffca74e405a9"},{url:"assets/js/page-CommentFunction--6884a164.42016452.js",revision:"28738d378dddfef5f07bb730f0c1afd9"},{url:"assets/js/page-Commonproblems--87e54bce.4c380319.js",revision:"14519ebbca1cb30bdf04ffb14c9fcf72"},{url:"assets/js/page-ConfigDocs--2082c612.134fb192.js",revision:"1d58c59ecae1dee0628f42db3f336371"},{url:"assets/js/page-Customalignment--df6a559c.8fc28cc1.js",revision:"5993f191e8d07232ef469882cf5daf8e"},{url:"assets/js/page-DarkmodeandThemecolor--57fce360.ca8d6e71.js",revision:"9a0ee956850f0a894e1bc4507c43ba95"},{url:"assets/js/page-Demos--cac80116.1e7e0295.js",revision:"ad11e679dedf6145acf505d33cfb2978"},{url:"assets/js/page-EmojiList--b946d226.68e9cb05.js",revision:"554ad343eac5d0ac5361f614a5425be1"},{url:"assets/js/page-Emoji列表--41bb29b9.54e62a0c.js",revision:"244dee2d71b36f217432042617ac7c58"},{url:"assets/js/page-Encryptionfunction--21c8c5d8.033ed184.js",revision:"1949eabbd1a48d579aa0af8a13617999"},{url:"assets/js/page-FileStructure--5dff5230.b73d9eae.js",revision:"1100188fd3b2d88210b2d1cac57051f1"},{url:"assets/js/page-Flowchart--6426e412.75c2fb6b.js",revision:"1925f620a017845c9c178b6e5d5feb74"},{url:"assets/js/page-Footnote--3a89d162.01c9df6d.js",revision:"7acd927c7f119875462041d2ac17c9c3"},{url:"assets/js/page-HomePage--37b81ca8.1f53dbca.js",revision:"a9e5b26b5e46231639eed24fa6c2f010"},{url:"assets/js/page-InstallUsage--5dafe67a.d264943c.js",revision:"12c9d29de20b993f3ef0fe069b658931"},{url:"assets/js/page-Introduction--0b048d19.6c6d2396.js",revision:"b1ca10b54e4705a2c89621607a840b6b"},{url:"assets/js/page-Layout--655201fe.dbf04207.js",revision:"565390ae0b0907666afddcbf8e937ad4"},{url:"assets/js/page-MarkdownDEMO--ab10bb74.092c05bf.js",revision:"f5a1f06ed9c55025e0b803c4f1c9abb4"},{url:"assets/js/page-MarkdownEnhance--ed59a9f6.af0b6328.js",revision:"dbaac7900e7f75b2394b3a35167e2cdd"},{url:"assets/js/page-MarkdownIntroduction--25c54f9b.bc77e2b5.js",revision:"68adf180ea36108dec026285b3775477"},{url:"assets/js/page-Markdown介绍--270989ce.5038ddd6.js",revision:"4306914d4ed441f297e2f304b611536b"},{url:"assets/js/page-Markdown增强--ad9dba8e.f388c942.js",revision:"81c4695f7b48d2926e715b21cb86313f"},{url:"assets/js/page-Markdown示例--c3e1bfdc.cce4c51b.js",revision:"f7569a7dd1984b07bffc0f1b55e9509e"},{url:"assets/js/page-Markup--4f1121f0.55ab82aa.js",revision:"f478124fdc23267033b443ab6bf2ef35"},{url:"assets/js/page-Nature--5c9d3e6c.44553bb9.js",revision:"b55d64b1b87a8c0747493da88de2f597"},{url:"assets/js/page-NavBar--262632f4.a120abeb.js",revision:"1bd90cf7301d174dc5a12dbbd5a566b6"},{url:"assets/js/page-NewComponent--2edd3b68.13611778.js",revision:"57f9e2492c2aef14a500c935b060460e"},{url:"assets/js/page-Newfeature--3e66b879.35657d91.js",revision:"6f3807ba3907c408e9d0e1ce70379944"},{url:"assets/js/page-Object--6d31953c.0600d771.js",revision:"ceabde276a74bb59a3a304056fdab228"},{url:"assets/js/page-Page--26692570.2b069353.js",revision:"2d033d4321b222d97ca0d0ff06f70021"},{url:"assets/js/page-PageConfiguration--493c56dc.77279fcc.js",revision:"bce13aa75d18453515e38af34ba3a404"},{url:"assets/js/page-Pageinformation--6abfca0a.864860d3.js",revision:"077152ae103a876892ea628693b904cf"},{url:"assets/js/page-People--f94822c8.78960efd.js",revision:"a2e98affc23e6f3d82eb2fabba51972b"},{url:"assets/js/page-photo-swipe--34ea45d2.8bf01bc0.js",revision:"95646513c5794bd8f9e3ecba702cb72d"},{url:"assets/js/page-photo-swipe--7be1a0aa.363a9dcb.js",revision:"8aa733d50f30b62bb261f59f8733ae50"},{url:"assets/js/page-Place--32291f32.8983d2c2.js",revision:"bcb3c0b03e4effbb9431b4c7c4eddc62"},{url:"assets/js/page-PluginDescription--b08a3ace.a7c87900.js",revision:"49b0a8e90e0e1be754cddd3a5b730772"},{url:"assets/js/page-Plugins--1a5ef242.479063a6.js",revision:"f07ededf55ed4837782c060c23c8425a"},{url:"assets/js/page-SEOandSitemap--13a48dac.1d7aa21c.js",revision:"d3ac3d3578f521ceb128e213905d4cd7"},{url:"assets/js/page-SEO和Sitemap--5934b3b2.4d508cec.js",revision:"0a51dc2275069f418548af7d6974a5f5"},{url:"assets/js/page-Sidebar--12800fd2.85e8375f.js",revision:"817c608a8215396116803334c7e5eae0"},{url:"assets/js/page-stylusconfiguration--189ec968.3ed2d24d.js",revision:"5631c6a2f75b8f705392cb3e657bb479"},{url:"assets/js/page-stylus配置--6796cdf2.15ca26ab.js",revision:"867b26fff10896ae2268de23b00eeb2d"},{url:"assets/js/page-SuperscriptandSubscript--d7f5f81c.9cd1c4df.js",revision:"b4faa5ae190bba660f15d7dfcffd0988"},{url:"assets/js/page-Symbol--0b92fe0a.a34a9f96.js",revision:"f8d3617f3cd0e184bfff228b0a004f99"},{url:"assets/js/page-TexSupport--f897e69c.f253aca3.js",revision:"e2557160c0097f9b212d9d2637ac7e18"},{url:"assets/js/page-Tex语法支持--64cb5e50.8f974c06.js",revision:"d4a93e2853bb1d103c32d1114e6232d7"},{url:"assets/js/page-ThemeConfig--085c2edc.7bbb2160.js",revision:"309dd4159968396d001db9eae654e3d8"},{url:"assets/js/page-ThemeConfig--4715c95c.312ba885.js",revision:"2db4c3397e186594d9fd11469191cfca"},{url:"assets/js/page-TSsupport--165630b2.b91c394a.js",revision:"977c1bc178d5af5a6047cbbf2ab05074"},{url:"assets/js/page-TS支持--09728ac8.292b35f8.js",revision:"dbe3431ff3d87825f82212942440bd71"},{url:"assets/js/page-Vuepress--4a71114e.63c12297.js",revision:"33e675b2a4b09f7be429d894d150c3bb"},{url:"assets/js/page-vuepress-plugin-container--31498112.488f0679.js",revision:"340787e80076ece2f502fdeebf99fbc2"},{url:"assets/js/page-vuepress-plugin-container--f45c2334.6f6e1c9b.js",revision:"69e201350d637af11a005fec341d8598"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.36f4655a.js",revision:"35ab2547ddad1f6375476f81a88f440a"},{url:"assets/js/page-vuepress-plugin-copyright--dac5744c.c33cac37.js",revision:"e29853ff6d521bb0933b7c8d7a286775"},{url:"assets/js/page-vuepress-theme-hope--776d8369.7a1baa32.js",revision:"1157e5d94909be48ee8d4b7137818b45"},{url:"assets/js/page-vuepress-theme-hope--7f862af9.9e1a581c.js",revision:"3be9f6f51a28c5aab2b16933025521ea"},{url:"assets/js/page-VuepressCases--27d200c8.0ad76dfc.js",revision:"cd9628f564a71787675befb35262d5ad"},{url:"assets/js/page-Vuepresscommands--7e89705c.099208c2.js",revision:"65f6f7226e5e8bd5316cc25de3a4a96c"},{url:"assets/js/page-Vuepress案例--082972f2.bfdb4071.js",revision:"e2d6163bdfe529d9b52c73a873b3651e"},{url:"assets/js/page-上下角标--895c91b8.f4059ee9.js",revision:"cf82336ba42f9744b91400addc55cf98"},{url:"assets/js/page-主题配置--1120a0ce.f26b3884.js",revision:"ae2fe990c368f25a2585db01319f1dab"},{url:"assets/js/page-主题配置--1a859dfc.0f987eb1.js",revision:"4e99cce2a43258cc8fd4c623d4fccad4"},{url:"assets/js/page-人物--2182769c.19c4dcb1.js",revision:"ac9cb0d985175674dbbb5ea7470fbc19"},{url:"assets/js/page-介绍--d4910962.dda30f1c.js",revision:"897c158494ed94f2c86ede70e50d33f3"},{url:"assets/js/page-侧边栏--2fa1ea2c.3a22b6db.js",revision:"de534d1190cd5a9fc79ea0d5b3e7aa76"},{url:"assets/js/page-加密功能--181bdc9c.0196de63.js",revision:"37274367b72a91a076bb14c09314d851"},{url:"assets/js/page-博客相关--17c260a2.02a4366f.js",revision:"0ee9de0b30a237a0118df544d32b5571"},{url:"assets/js/page-博客首页--64265752.f27a0f25.js",revision:"46b36c926c67711b7905e88f42c54eb3"},{url:"assets/js/page-地点--951cdc00.3f63daa4.js",revision:"e8c203d43df920c10c71325a93ff1f54"},{url:"assets/js/page-基础知识--770cb96b.9163d271.js",revision:"e9fe235249269eeb26063bf4f837478e"},{url:"assets/js/page-安装使用--0ab466d2.5bceeb23.js",revision:"5f260c50467e0df9872e586ba11d3336"},{url:"assets/js/page-对象--16031ab2.c5f5283c.js",revision:"2881655a810f4af795d599c1846af793"},{url:"assets/js/page-导航栏--c7bf87dc.e44df225.js",revision:"dce0b1880b0c814db30182af39ecc02f"},{url:"assets/js/page-布局--12bd4f0e.c5ced009.js",revision:"e2a608e5b08f059cc5d5e58d25301fdb"},{url:"assets/js/page-常见问题--2b571e9b.8839303f.js",revision:"14721b92baed2b9501c73baa52a5ba80"},{url:"assets/js/page-插件--adbf415c.66d3ab3b.js",revision:"9a67f53c4469a578211f45837eb2d354"},{url:"assets/js/page-插件说明--137c6c07.610e4ec0.js",revision:"a848e2f61b04549bfb41f97bada62519"},{url:"assets/js/page-文件结构介绍--665a4f1c.5081278d.js",revision:"f83a5d723b6cd781b4f4d6ebc14d9110"},{url:"assets/js/page-新增特性--5136c541.073fc131.js",revision:"240f8f11eae2b9a96385fd7c8999e7f4"},{url:"assets/js/page-新增组件--1d138c72.56c517fd.js",revision:"79b62e99d1c199fe4196772eb46ffc2b"},{url:"assets/js/page-标记--6b1f341c.c46681ab.js",revision:"661b285e09ef6b349432378bacaa9f7c"},{url:"assets/js/page-流程图支持--7ce6d974.c94a10de.js",revision:"9ac6c0595342e7c82db84ccb894493d5"},{url:"assets/js/page-深色模式与主题色--e23e731c.ebfc132d.js",revision:"ecf1ee6fce2c853f7b4006e13dce8d70"},{url:"assets/js/page-符号--a9259c5c.ab2a9fad.js",revision:"dbe6efe7a92e03ceedc46a64e9abd351"},{url:"assets/js/page-脚注--0c733e52.688afebf.js",revision:"5089ee4d4c549279ed860e7cf82e24e3"},{url:"assets/js/page-自定义对齐--4f21aa5c.8f304b55.js",revision:"3896dd0379ea12a558d2368bfc69d06a"},{url:"assets/js/page-自然--749fb09c.b197fec3.js",revision:"c390f9214147d8661935688e60173b0b"},{url:"assets/js/page-评论功能--5bb6671c.c24d29a1.js",revision:"0183bf748d750635b4be91472421613c"},{url:"assets/js/page-配置文档--35a0a7d9.2348da27.js",revision:"424b71188d38b298909e96313e59338c"},{url:"assets/js/page-页面--af17b59c.b617da00.js",revision:"80f2acc1571825c0ac4274caaf0726b1"},{url:"assets/js/page-页面信息--71efd5d2.2806edb9.js",revision:"8846726c74ca402822e13f0e569e247f"},{url:"assets/js/page-页面配置--0aacc152.1d05138c.js",revision:"c8b9c089eec6802e5d0e697d69eced3a"},{url:"assets/js/page-项目指令--9f3f316c.4e966260.js",revision:"f55ebf6a80a9b07201b4f756e1ba53ba"},{url:"assets/js/page-项目案例--f328658e.560f92c1.js",revision:"c9485b82ebb4e1f796e3c0577344f7e4"},{url:"assets/js/page-首页--5834599c.21efc5a7.js",revision:"1b9ac0a904f44bb0e54b7a6dade9f6b8"},{url:"assets/js/vendors~docsearch.5cc40e63.js",revision:"fe7d6bec811dd438c0e65e9970096127"},{url:"assets/js/vendors~flowchart.3ccab522.js",revision:"c0118085537f1dca4a2561b4d20f1bf9"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.2c4ef948.js",revision:"5280930eda8e43a15161f82c2be26132"},{url:"assets/js/vendors~layout-Layout.ebec3995.js",revision:"93093c327d56d10d6381d0723fd0912d"},{url:"basic/index.html",revision:"47575bfccc02619427e53222a6a5c660"},{url:"basic/markdown/demo/index.html",revision:"9528bdd711805ebf1327ed89f55c2741"},{url:"basic/markdown/emoji/index.html",revision:"746da15f075e7868f512f74782c05152"},{url:"basic/markdown/emoji/nature/index.html",revision:"2f0f10eb1843786a6dea84614cbf8c9d"},{url:"basic/markdown/emoji/object/index.html",revision:"5ee725054cc59052f23936b4da5e7d7b"},{url:"basic/markdown/emoji/people/index.html",revision:"ebf73b5da1014fe38dce306f9a7faeb0"},{url:"basic/markdown/emoji/place/index.html",revision:"1c1d1af94e8b89d48778b7116c103369"},{url:"basic/markdown/emoji/symbol/index.html",revision:"48e1d461276421abdf9ce72cf0b6088c"},{url:"basic/markdown/index.html",revision:"92dca3d64ac5e958e93f95339637918e"},{url:"basic/vuepress/case/index.html",revision:"27f1304358599428f9b037d2627f8358"},{url:"basic/vuepress/command/index.html",revision:"9643be359555707dcb17f30263c9599f"},{url:"basic/vuepress/file/index.html",revision:"87b2cfdfdeecbe2d553b5fb5e13a1c91"},{url:"basic/vuepress/index.html",revision:"2cd30d8e4daec9e7604e52d261874669"},{url:"basic/vuepress/plugin/index.html",revision:"88c6704becfe0a9ba3aafad1ae402aee"},{url:"basic/vuepress/theme/index.html",revision:"662681618ae42179760c9a3b8b492f92"},{url:"category/basic/index.html",revision:"0481578f29bdbc88998732a8d0a1c886"},{url:"category/basic/page/2/index.html",revision:"fe3e012434c1fecdc21505f8526fc8cb"},{url:"category/basic/page/3/index.html",revision:"2d75684e1588196a549616cf2556e26d"},{url:"category/config/index.html",revision:"663c714dba8be27d55bf39ec45bff75d"},{url:"category/config/page/2/index.html",revision:"ff1eaff9b002a89c2dacb25887f4c776"},{url:"category/config/page/3/index.html",revision:"910bc86a8a046ed44f3415d45f73a148"},{url:"category/demo/index.html",revision:"94835311b539e3a03c54c9883d087698"},{url:"category/FAQ/index.html",revision:"4d542900b9b3f072513ff21bc4bfb1c1"},{url:"category/feature/index.html",revision:"865f2f1c5c64d7129c6e29eb34f346ae"},{url:"category/feature/page/2/index.html",revision:"38899c570cf6456818db8b95ca622f6e"},{url:"category/index.html",revision:"cb7852c5b6780c7f4066b65bdeca4fbd"},{url:"category/instruction/index.html",revision:"8aad1081218d7c441756af60c46daeb1"},{url:"category/layout/index.html",revision:"a4c746c0fdbd92a0c631b9814a6f60f6"},{url:"category/layout/page/2/index.html",revision:"993c0b9474a713441a457f4f53f8d5bd"},{url:"category/markdown/index.html",revision:"81b7f43176fc89c1f2bc8915f76bcba8"},{url:"config/index.html",revision:"293b7a619a30270450b7c79c6aeb14c0"},{url:"config/page/index.html",revision:"5f11e6c9f8dc436e964f8d4c6506750b"},{url:"config/plugin/container/index.html",revision:"5290d967d0b08b0d174880b35c5f1a5d"},{url:"config/plugin/copyright/index.html",revision:"700b0d9a6546916b487fbd765e6918d0"},{url:"config/plugin/index.html",revision:"1b8397d9830811c6dbabae6c79acc6fe"},{url:"config/plugin/last-update/index.html",revision:"28990e9838ab898050bbb99942c0c0eb"},{url:"config/plugin/photo-swipe/index.html",revision:"6b7c9a23f2cebc928e7fa014d161e477"},{url:"config/plugin/pwa/index.html",revision:"da370aa71b847952e2a30adf50f5fbf9"},{url:"config/plugin/reading-time/index.html",revision:"77d28cbb0a19c1e233571b57c38f0813"},{url:"config/plugin/seo/index.html",revision:"f9f828ee322eeb15aa0b2c648f921da5"},{url:"config/plugin/sitemap/index.html",revision:"7d3f7f349ebeeb50852cd609cabbaa26"},{url:"config/stylus/index.html",revision:"52d6f6febd50aa3568020ceb05289349"},{url:"config/themeConfig/index.html",revision:"197094ba7b9eaa683f170f4feb1ec2a5"},{url:"demo/index.html",revision:"205a67a48e02aa268833acd33cc57c09"},{url:"en/basic/index.html",revision:"f6dd296fc9b03a67d95840d6de556e1a"},{url:"en/basic/markdown/demo/index.html",revision:"2bea3420ab506ef404114a326ac68363"},{url:"en/basic/markdown/emoji/index.html",revision:"4f96dd11d61a2552331c79077adca700"},{url:"en/basic/markdown/emoji/nature/index.html",revision:"9cea8a3107980406f71b556fa54b1a27"},{url:"en/basic/markdown/emoji/object/index.html",revision:"82b0287541aac4c7051beeb7c96ea6ec"},{url:"en/basic/markdown/emoji/people/index.html",revision:"81ddfc32f4c3e4d578aef213778e47c0"},{url:"en/basic/markdown/emoji/place/index.html",revision:"7b62e254d5ea3bd7f891015318dcc27f"},{url:"en/basic/markdown/emoji/symbol/index.html",revision:"b6ec3b6754ad69714d0fc92a772597be"},{url:"en/basic/markdown/index.html",revision:"95109d6d97ce11d92fe55c39a659d431"},{url:"en/basic/vuepress/case/index.html",revision:"db2ffe0b0276a63628a22a310e48dbec"},{url:"en/basic/vuepress/command/index.html",revision:"42291325f42f3730efc9137da6a3fb58"},{url:"en/basic/vuepress/file/index.html",revision:"556cbc76974ceca6982970e756579ae1"},{url:"en/basic/vuepress/index.html",revision:"4be3b7526b90efd38b6e861e5d8d2aab"},{url:"en/basic/vuepress/plugin/index.html",revision:"e1ce9d8a938704729f006c42751e1582"},{url:"en/basic/vuepress/theme/index.html",revision:"18a200a65d518442053fe5bedc473350"},{url:"en/config/index.html",revision:"c704679b4301463d1f0930ab1fbc78d5"},{url:"en/config/page/index.html",revision:"a4cb61ff36540dc114c14f1b11d66e59"},{url:"en/config/plugin/container/index.html",revision:"cddd92a88ea86bc19ebd23c241cd0fd8"},{url:"en/config/plugin/copyright/index.html",revision:"e91ca181df4753dc81192d75142064e4"},{url:"en/config/plugin/index.html",revision:"1bd744c37dc0c5b0987f56e2ba8834d1"},{url:"en/config/plugin/last-update/index.html",revision:"697ab2bf2363b03b637d4e48f5ab3eca"},{url:"en/config/plugin/photo-swipe/index.html",revision:"9a8e68a2d75a10dfd04b816deb149059"},{url:"en/config/plugin/pwa/index.html",revision:"94f560fa280c3b33202fc4783b828b94"},{url:"en/config/plugin/reading-time/index.html",revision:"a025ce88b0b7abfed85cb57220f32817"},{url:"en/config/plugin/seo/index.html",revision:"90007636c72027c9da23ce719a891e00"},{url:"en/config/plugin/sitemap/index.html",revision:"fc31fd45aa8a69a63d72352dabb6df88"},{url:"en/config/stylus/index.html",revision:"d83dfcf08afb29672b130e8c800ff724"},{url:"en/config/themeConfig/index.html",revision:"f5e21ef9bc62b7fc8dbe911a66da61ba"},{url:"en/demo/index.html",revision:"e4d7ae4db5d88cb2639a61be760fdd8d"},{url:"en/FAQ/index.html",revision:"b85840bab07f185f390c6e7ce8410243"},{url:"en/guide/feature/blog/index.html",revision:"341959e26a77d6e3a2d078fff5ae3505"},{url:"en/guide/feature/comment/index.html",revision:"fc459cf6b3b14df54c1b438aba683e47"},{url:"en/guide/feature/component/index.html",revision:"a13aeb27cb6449ba28435f73f439898c"},{url:"en/guide/feature/encrypt/index.html",revision:"890fd867f19007072653f8005cfc8ad7"},{url:"en/guide/feature/index.html",revision:"783649c2fb4d5f318ca5f878044387e3"},{url:"en/guide/feature/markdown/align/index.html",revision:"f9901174236b2f471fe777241db697c3"},{url:"en/guide/feature/markdown/flowchart/index.html",revision:"a6fd92e3d22cf203fade5d5316fe34f4"},{url:"en/guide/feature/markdown/footnote/index.html",revision:"b8404604c36da2530f6516a87b639938"},{url:"en/guide/feature/markdown/index.html",revision:"81f6a4f7dd77caf1e5e15cf3730239b7"},{url:"en/guide/feature/markdown/mark/index.html",revision:"0563b061433d9f0cf7df091d56c7b66f"},{url:"en/guide/feature/markdown/sup-sub/index.html",revision:"c6ff9644044f1a38a86bdf90bffcc558"},{url:"en/guide/feature/markdown/tex/index.html",revision:"169dd0404bf4d0baaece8dc01e5723aa"},{url:"en/guide/feature/page-info/index.html",revision:"570095d9cb84fa1d8fcbc1f71ed2bcbc"},{url:"en/guide/feature/seoAndSitemap/index.html",revision:"b8c007e37b70492d0f944ad268145aeb"},{url:"en/guide/feature/theme/index.html",revision:"7ed807e5b349db0a7b875018fd74e07d"},{url:"en/guide/feature/typescript/index.html",revision:"687f43948b87b613b055256d578ab524"},{url:"en/guide/index.html",revision:"a4254b60484cd848057034d1eefe7f05"},{url:"en/guide/install/index.html",revision:"efcef9e0359a5ae4b38fcb85fc818304"},{url:"en/guide/layout/blog/index.html",revision:"5937a4b4e1deefda16856dc03146130b"},{url:"en/guide/layout/home/index.html",revision:"f0d6735081f0b5bc214a73abdb742986"},{url:"en/guide/layout/index.html",revision:"c902a56b29a4652ef5730847e53b2057"},{url:"en/guide/layout/navbar/index.html",revision:"81652923fdf670da4ed7a81c1d1802c3"},{url:"en/guide/layout/page/index.html",revision:"9d2f631922d28c9fb039b22be5c7ca90"},{url:"en/guide/layout/sidebar/index.html",revision:"a5a22f5e6d60ec31bdd98e192e4ba554"},{url:"en/index.html",revision:"1bf0df8bee791fb3eeb771116c86c72b"},{url:"FAQ/index.html",revision:"b85118231ff8c1d7a986e57c9f4e7924"},{url:"guide/feature/blog/index.html",revision:"5952cc7ddfc02cd6aaa6ee9e77da8509"},{url:"guide/feature/comment/index.html",revision:"7f7c41107eeff62395aed55413ddf097"},{url:"guide/feature/component/index.html",revision:"dfa8c27e467194d3fe67c5123a8deff8"},{url:"guide/feature/encrypt/index.html",revision:"986619577707afd6f115c56dff0cd9b0"},{url:"guide/feature/index.html",revision:"966bd412c712e7358f0b1583fa99fd22"},{url:"guide/feature/markdown/align/index.html",revision:"0609df7be1dabf0f6547555952a18283"},{url:"guide/feature/markdown/flowchart/index.html",revision:"d91622cabf21efed46e3819e0d722060"},{url:"guide/feature/markdown/footnote/index.html",revision:"f1abb5599316cc8ee4bd4e2a8b6245e0"},{url:"guide/feature/markdown/index.html",revision:"1a4f8d1e67d04d9e473dd8091ccca1a6"},{url:"guide/feature/markdown/mark/index.html",revision:"f28e98eb9f2f45e74f99eb577a59490b"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"674b09724f5da8239e982352f0963138"},{url:"guide/feature/markdown/tex/index.html",revision:"6f9e2f7c85fc6ab2af70a2139525280c"},{url:"guide/feature/page-info/index.html",revision:"a84d8e8d0016b6088b6a39648b6e0280"},{url:"guide/feature/seoAndSitemap/index.html",revision:"fabb837379b8bbfa99d21fb2d92ea9df"},{url:"guide/feature/theme/index.html",revision:"45c698cb67e3f542f712e08323253983"},{url:"guide/feature/typescript/index.html",revision:"1f1bcc2a3f1ff97c2525d8314f61f61f"},{url:"guide/index.html",revision:"8c124ea4695c0fb44b7bd0d8a63cae3c"},{url:"guide/install/index.html",revision:"9a55c7e61fd9c426a4f7e38d54c6605a"},{url:"guide/layout/blog/index.html",revision:"923df43e5bcf969ae5a8f82231e4f30a"},{url:"guide/layout/home/index.html",revision:"a2faf5f6ea465aa751b26c7bb54216e0"},{url:"guide/layout/index.html",revision:"1ff37c5a4420909ced0ec6881b7ec942"},{url:"guide/layout/navbar/index.html",revision:"b19afc311dfb27c6c5c3c61be7878846"},{url:"guide/layout/page/index.html",revision:"37a7344f7fc513690609d82054e53de8"},{url:"guide/layout/sidebar/index.html",revision:"f4b5c8105e8b644c1350faa557a3aa01"},{url:"index.html",revision:"f33a06d3c68d90f5c63b0b3b503cd4c0"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"0e0f2d00d601d0f9208183d7e5384261"},{url:"tag/comment/index.html",revision:"b02f777b85362abd282d334660d1eaa4"},{url:"tag/components/index.html",revision:"ee8d6549ce63f2ef0143894f61878046"},{url:"tag/config/index.html",revision:"f6d8b4d7e5f85c1c35a1be8b236de7a3"},{url:"tag/config/page/2/index.html",revision:"dfbdc9b1c2c1580befd7b23869078dd4"},{url:"tag/config/page/3/index.html",revision:"c0645e02483a99f2b0aa55bf59edb91d"},{url:"tag/emoji/index.html",revision:"a8728ba721528a074537ad443ac92889"},{url:"tag/emoji/page/2/index.html",revision:"b3195cacabc4826d795e06cc2777a4c7"},{url:"tag/encrypt/index.html",revision:"abde296ee68d3ae21ee06daf412466ec"},{url:"tag/feature/index.html",revision:"d25638ed13a857fb7635114bb3ee9815"},{url:"tag/feature/page/2/index.html",revision:"57d1e1404192d5967ad6f144eea654d6"},{url:"tag/frontmatter/index.html",revision:"03b4cf5f79ddcebe7220730b1644b793"},{url:"tag/function/index.html",revision:"5bcade5ebd479624a5561317d3ed13d2"},{url:"tag/function/page/2/index.html",revision:"18f8d2bec13117570c8213c70693fe01"},{url:"tag/home/index.html",revision:"85d3dafa23fece7f1d857bc7168665d1"},{url:"tag/index.html",revision:"7d971840ea4d331eb121438ae8c46998"},{url:"tag/intro/index.html",revision:"a7d00b5d36739a00c234ebb0a3372ef4"},{url:"tag/layout/index.html",revision:"f5a899a753e76a9ef99f1ed1aec04d95"},{url:"tag/layout/page/2/index.html",revision:"2ff29b8b70e137843a45d392aa685b92"},{url:"tag/markdown/index.html",revision:"e5bfd0abe896ada8fba655076ca10b5b"},{url:"tag/markdown/page/2/index.html",revision:"d292978c88f91406295a21fc1165d2b9"},{url:"tag/markdown/page/3/index.html",revision:"7bd174c63ec61fb461e0a3e7e4eed910"},{url:"tag/navbar/index.html",revision:"57597cb2a4bc81b14469856959e00928"},{url:"tag/page-info/index.html",revision:"4290286138d0676075be39374c399be3"},{url:"tag/plugin/index.html",revision:"25113674608514997c26ebf38ddc3b98"},{url:"tag/plugin/page/2/index.html",revision:"4af44768f8e6572583fbd79411595dd9"},{url:"tag/seo/index.html",revision:"1f4bdb593f838f0bde0b921aeb148c25"},{url:"tag/sidebar/index.html",revision:"aaef9b310901a4ad74817a4081204326"},{url:"tag/sitemap/index.html",revision:"df2b0dab85de4c554eb07f6d40de61c7"},{url:"tag/style/index.html",revision:"f542f9d078af0e57d677db7c27c5b2c0"},{url:"tag/themeConfig/index.html",revision:"5944ca5c31775e81db761ad586dd1111"},{url:"tag/typescript/index.html",revision:"36ebc9799756b8682295d01b1d82084c"},{url:"tag/vuepress/index.html",revision:"bd7c1df609291a8199041974803c7b28"},{url:"tag/vuepress/page/2/index.html",revision:"13de414617b38fbe2b33bcba8c423356"},{url:"timeline/index.html",revision:"f14e58ef2c5da7963ad806092d865096"}],{})}));
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