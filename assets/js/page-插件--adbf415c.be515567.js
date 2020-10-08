(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{456:function(s,t,a){s.exports=a.p+"assets/img/architecture.9a93cf6c.png"},501:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),n("p",[s._v("插件通常会为 VuePress 添加全局功能。")]),s._v(" "),n("p",[s._v("整个插件系统的架构如下:")]),s._v(" "),n("p",[n("img",{attrs:{src:a(456),alt:"插件系统架构"}})]),s._v(" "),n("h2",{attrs:{id:"使用插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用插件"}},[s._v("#")]),s._v(" 使用插件")]),s._v(" "),n("p",[s._v("你可以通过在 "),n("code",[s._v(".vuepress/config.js")]),s._v(" 中做一些配置来使用插件：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./my-plugin.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"使用来自依赖的插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用来自依赖的插件"}},[s._v("#")]),s._v(" 使用来自依赖的插件")]),s._v(" "),n("p",[s._v("一个插件可以在以 "),n("code",[s._v("vuepress-plugin-xxx")]),s._v(" 的形式发布到 npm，你可以这样使用它：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-plugin-xx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("同时，如果你的插件名以 "),n("code",[s._v("vuepress-plugin-")]),s._v(" 开头，你可以使用缩写来省略这个前缀：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("和下面等价：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-plugin-xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("这也适用于 "),n("a",{attrs:{href:"https://docs.npmjs.com/misc/scope",target:"_blank",rel:"noopener noreferrer"}},[s._v("Scoped Packages"),n("OutboundLink")],1),s._v(":")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@org/vuepress-plugin-xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@vuepress/plugin-xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("等价于:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@org/xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@vuepress/xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),n("p",[s._v("以 "),n("code",[s._v("@vuepress/plugin-")]),s._v(" 开头的插件是官方维护的插件。")])]),s._v(" "),n("h2",{attrs:{id:"插件的配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件的配置"}},[s._v("#")]),s._v(" 插件的配置")]),s._v(" "),n("p",[s._v("通过"),n("code",[s._v("config.js")]),s._v("的"),n("code",[s._v("plugin")]),s._v("字段配置。")]),s._v(" "),n("h3",{attrs:{id:"babel-式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#babel-式"}},[s._v("#")]),s._v(" Babel 式")]),s._v(" "),n("p",[s._v("插件可以通过在配置内的数组中封装名称和选项对象来指定选项：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-plugin-xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* options */")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("由于这种风格和 "),n("a",{attrs:{href:"https://babeljs.io/docs/en/plugins#plugin-preset-options",target:"_blank",rel:"noopener noreferrer"}},[s._v("babeld Plugin/Preset Options"),n("OutboundLink")],1),s._v(' 一致，我们称之为"Babel 风格"。')]),s._v(" "),n("h3",{attrs:{id:"对象式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对象式"}},[s._v("#")]),s._v(" 对象式")]),s._v(" "),n("p",[s._v("VuePress 也提供了一种更简单的方式来使用来自依赖的插件：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    xxx"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* options */")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),n("p",[s._v("由于某些插件可能存在多个实例，强烈推荐使用"),n("strong",[s._v("babel 风格")]),s._v("写法。")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("可以通过显示地将选项设置成 "),n("code",[s._v("false")]),s._v(" 来禁用一个插件：")]),s._v(" "),n("ul",[n("li",[s._v("Babel 风格")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// disabled.")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("对象风格")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    xxx"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// disabled.")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])]),s._v(" "),n("h2",{attrs:{id:"官方插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#官方插件"}},[s._v("#")]),s._v(" 官方插件")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("active-header-links"),n("OutboundLink")],1),s._v("：页面滚动时自动激活侧边栏链接")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-back-to-top.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("back-to-top"),n("OutboundLink")],1),s._v("：添加返回顶部按钮")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-google-analytics.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("google-analytics"),n("OutboundLink")],1),s._v("：添加 Google analytics")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-last-updated.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("last-updated"),n("OutboundLink")],1),s._v("：更新时间")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("medium-zoom"),n("OutboundLink")],1),s._v("：图片缩放")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-nprogress.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("nprogress"),n("OutboundLink")],1),s._v("：进度条")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("PWA"),n("OutboundLink")],1),s._v("：支持 Progressive Web App")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-register-components.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("register-component"),n("OutboundLink")],1),s._v("：注册 components")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-search.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("search"),n("OutboundLink")],1),s._v("：基于标题的搜索插件")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("具体用法详见："),n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vuepress 插件"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"社区插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#社区插件"}},[s._v("#")]),s._v(" 社区插件")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/clean-urls.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("clean-urls"),n("OutboundLink")],1),s._v(": 在 VuePress 中使用简洁链接")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/container.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("container"),n("OutboundLink")],1),s._v(": 在 VuePress 中使用 markdown 容器")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/copyright.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("copyright"),n("OutboundLink")],1),s._v(": 在 VuePress 中处理复制行为")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/dehydrate.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("dehydrate"),n("OutboundLink")],1),s._v(": 修改 VuePress 生成的 HTML 文件")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/git-log.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("git-log"),n("OutboundLink")],1),s._v(": 在 VuePress 中整合 git 日志")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/mathjax.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("mathjax"),n("OutboundLink")],1),s._v(": 在 VuePress 中使用 TeX 语法")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/migrate.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("migrate"),n("OutboundLink")],1),s._v(": 从其他网站迁移到 VuePress")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/named-chunks.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("named-chunks"),n("OutboundLink")],1),s._v(": 在 VuePress 中使用命名模块")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/redirect.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("redirect"),n("OutboundLink")],1),s._v(": 在 VuePress 中处理重定向")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/serve.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("serve"),n("OutboundLink")],1),s._v(": 在本地构建静态 VuePress 服务器")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/zooming.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("zooming"),n("OutboundLink")],1),s._v(": 使 VuePress 中的图片支持缩放(使用 zooming)")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("文档详见："),n("a",{attrs:{href:"https://vuepress.github.io/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vuepress 社区"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);