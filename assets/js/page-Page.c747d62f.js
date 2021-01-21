(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{579:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[t._v("#")]),t._v(" Page")]),t._v(" "),e("h2",{attrs:{id:"icon-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#icon-support"}},[t._v("#")]),t._v(" Icon support")]),t._v(" "),e("p",[t._v("You can configure the icon field in the "),e("code",[t._v("Front Matter")]),t._v(" of the page, and fill in the FontClass of the corresponding icon to bind the icon to the page.")]),t._v(" "),e("p",[t._v("This icon is used in "),e("strong",[t._v("Path Navigation")]),t._v(" and "),e("strong",[t._v("Sidebar")]),t._v(".")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Example")]),t._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("icon")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Home")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])]),t._v(" "),e("h2",{attrs:{id:"breadcrumb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumb"}},[t._v("#")]),t._v(" Breadcrumb "),e("MyBadge",{attrs:{text:"Support page config"}})],1),t._v(" "),e("p",[t._v("The theme adds a new Breadcrumb support, you can config it using "),e("code",[t._v("breadcrumb")]),t._v(" in Frontmatter and themeConfig.")]),t._v(" "),e("p",[t._v("Without any configuration, a Breadcrumb that matches the theme color is displayed at the top of the page content to help the reader understand the document structure.")]),t._v(" "),e("p",[t._v("You can also control the icon display of the path navigation "),e("MyBadge",{attrs:{text:"Support page config"}}),t._v(", the configuration item is "),e("code",[t._v("breadcrumbIcon")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("To ensure Breadcrumb working well, the "),e("code",[t._v("readme.md")]),t._v(" file should be included in each folder.")]),t._v(" "),e("p",[t._v("Otherwise, the path navigation will automatically ignore that level because the component can not generate titles and links from the corresponding level folder.")])]),t._v(" "),e("h2",{attrs:{id:"page-info-display"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-info-display"}},[t._v("#")]),t._v(" Page Info Display")]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/guide/feature/page-info.html"}},[t._v("Page Info Section")])],1),t._v(" "),e("h2",{attrs:{id:"last-updated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-updated"}},[t._v("#")]),t._v(" Last Updated")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("themeConfig.lastUpdated")]),t._v(" option allows you to get the UNIX timestamp(ms) of each file’s last "),e("code",[t._v("git")]),t._v(" commit, and it will also display at the bottom of each page in an appropriate format:")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lastUpdated"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Last Updated"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string | boolean")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("Note that it’s "),e("code",[t._v("on")]),t._v(" by default. If given a "),e("code",[t._v("string")]),t._v(", it will be displayed as a prefix.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("Since "),e("code",[t._v("lastUpdated")]),t._v(" is based on "),e("code",[t._v("git")]),t._v(", you can only use it in a "),e("code",[t._v("git")]),t._v(" repository. Also, since the timestamp used comes from the git commit, it will display only after a first commit for a given page, and update only on ensuing commits of that page.")])]),t._v(" "),e("h2",{attrs:{id:"prev-next-links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prev-next-links"}},[t._v("#")]),t._v(" Prev / Next Links")]),t._v(" "),e("p",[t._v("Prev and next links are automatically inferred based on the sidebar order of the active page. You can also explicitly overwrite or disable them globally with theme config or on specific pages using "),e("code",[t._v("Front matter")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prev")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./some"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("other"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("page\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h2",{attrs:{id:"comment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comment"}},[t._v("#")]),t._v(" Comment")]),t._v(" "),e("p",[t._v("See the "),e("RouterLink",{attrs:{to:"/guide/feature/comment.html"}},[t._v("Comment section")]),t._v(" for details.")],1),t._v(" "),e("h2",{attrs:{id:"footer-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#footer-support"}},[t._v("#")]),t._v(" Footer Support "),e("MyBadge",{attrs:{text:"Support page config"}})],1),t._v(" "),e("p",[t._v("To display the footer on every page, you need to set "),e("code",[t._v("themeConfig.footer.display")]),t._v(" to "),e("code",[t._v("true")]),t._v(". At the same time, you can also use "),e("code",[t._v("themeConfig.footer.copyright")]),t._v(" and "),e("code",[t._v("themeConfig.content")]),t._v(" to set the default copyright information and footer content.")]),t._v(" "),e("p",[t._v("You can also configure the "),e("code",[t._v("footer")]),t._v(", "),e("code",[t._v("copyrightText")]),t._v(" and "),e("code",[t._v("medialink")]),t._v(" fields in the "),e("code",[t._v("Front Matter")]),t._v(" page.")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("The "),e("code",[t._v("footer")]),t._v(" field can be filled with a string or Boolean value.")]),t._v(" "),e("p",[t._v("Setting "),e("code",[t._v("footer")]),t._v(" to "),e("code",[t._v("true")]),t._v(" will display the default footer content. Setting "),e("code",[t._v("footer")]),t._v(" to"),e("code",[t._v("false")]),t._v(" will disable the page footer.")]),t._v(" "),e("p",[t._v("If you fill in a string, it will be inserted into footer by "),e("code",[t._v("v-html")]),t._v(", so you can fill in HTMLString.")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("code",[t._v("copyrightText")]),t._v(" field can be filled with copyright information on this page (also support HTMLString). This option is useful when you quote articles from other places while they are using a specific license. You can also fill in "),e("code",[t._v("false")]),t._v(" to hide the copyright information in a specific page.")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("code",[t._v("medialink")]),t._v(" field is the same as "),e("code",[t._v("themeConfig.blog.links")]),t._v(" ("),e("RouterLink",{attrs:{to:"/guide/layout/blog.html#configurable-items"}},[t._v("specific configuration see here")]),t._v("), you can configure it in a specific page to display different social media links. You can also set it to "),e("code",[t._v("false")]),t._v(" to hide it.")],1)])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Example")]),t._v(" "),e("p",[t._v("Enable the default footer text:")]),t._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("Customize footer text without displaying copyright information and media links:")]),t._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" This website is served by GitHub Pages\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("copyrightText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("medialink")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("Custom footer content and copyright information and media links:")]),t._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' <a href="https'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/Mister"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('Hope"'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" Mr.Hope </a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("copyrightText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MIT LICENSE\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("medialink")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Zhihu")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//zhihu.com")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("When you set "),e("code",[t._v("footer.display")]),t._v(" to true in the theme, you can also disable it locally:")]),t._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("To remove the default footer content while keeping social media and copyright information displayed, please use an empty string.")]),t._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])]),t._v(" "),e("h2",{attrs:{id:"custom-layout-for-specific-pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-layout-for-specific-pages"}},[t._v("#")]),t._v(" Custom Layout for Specific Pages")]),t._v(" "),e("p",[t._v("By default the content of each "),e("code",[t._v("*.md")]),t._v(" file is rendered in a "),e("code",[t._v('<div class="page">')]),t._v(" container, along with the sidebar, auto-generated edit links and prev/next links. To use a fully custom component in place of the page, you can again specify the component to use using "),e("code",[t._v("YAML front matter")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("layout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SpecialLayout\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("This will render "),e("code",[t._v(".vuepress/components/SpecialLayout.vue")]),t._v(" for the given page.")])])}),[],!1,null,null,null);a.default=n.exports}}]);