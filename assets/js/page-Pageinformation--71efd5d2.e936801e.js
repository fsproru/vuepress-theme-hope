(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{568:function(t,e,a){"use strict";a.r(e);var s=a(1),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"page-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-information"}},[t._v("#")]),t._v(" Page information")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("<PageInfo />")]),t._v(" component support local config"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1"}},[t._v("[1]")]),a("a",{staticClass:"footnote-anchor",attrs:{id:"fnref1"}})]),t._v(", and is enabled globally by default. You can disable it by setting "),a("code",[t._v("pageInfo: false")]),t._v(" in "),a("code",[t._v("Front Matter")]),t._v(" of a specific page.")]),t._v(" "),a("p",[t._v("To keep it globally disabled, please set "),a("code",[t._v("pageInfo")]),t._v(" to "),a("code",[t._v("false")]),t._v(" in the plugin options. In this way you can set "),a("code",[t._v("pageInfo")]),t._v(" in "),a("code",[t._v("Front Matter")]),t._v(" of a specific page to enable it locally.")]),t._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters "),a("MyBadge",{attrs:{text:"Support page config"}})],1),t._v(" "),a("p",[a("code",[t._v("pageInfo")]),t._v(" accepts an array of strings by default, filling in a group of items. The order of filling is the order in which the items are displayed.")]),t._v(" "),a("p",[t._v("The optional values ​​and corresponding contents of the entry are as follows:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Entry")]),t._v(" "),a("th",[t._v("Corresponding content")]),t._v(" "),a("th",[t._v("page frontmatter value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("'author'")])]),t._v(" "),a("td",[t._v("author")]),t._v(" "),a("td",[t._v("author")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'time'")])]),t._v(" "),a("td",[t._v("Writing Date")]),t._v(" "),a("td",[t._v("time")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'category'")])]),t._v(" "),a("td",[t._v("Category")]),t._v(" "),a("td",[t._v("category")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'tag'")])]),t._v(" "),a("td",[t._v("tags")]),t._v(" "),a("td",[t._v("tags")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'readtime'")])]),t._v(" "),a("td",[t._v("Estimated reading time")]),t._v(" "),a("td",[t._v("N / A (automatically generated)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'word'")])]),t._v(" "),a("td",[t._v("Word count")]),t._v(" "),a("td",[t._v("N / A (automatically generated)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'visitor'")])]),t._v(" "),a("td",[t._v("Visits")]),t._v(" "),a("td",[t._v("visitor (only Valine is available)")])])])]),t._v(" "),a("p",[t._v('By default it will display "Author, Visit Number, Writing Date, Category, Tags, Expect Reading Time".')]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("author")]),t._v(" "),a("MyBadge",{attrs:{text:"Support page config"}})],1),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[t._v("author: Mr.Hope")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("You can configure "),a("code",[t._v("author")]),t._v(" in the plugin options to set the default author. And you can also configure "),a("code",[t._v("author")]),t._v(" in frontmatter with a new value in the page to override the default author, or set it to "),a("code",[t._v("false")]),t._v(" to cancel the author display.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("time")])]),t._v(" "),a("p",[t._v("We recommended to fill it with a standard date format. A standard format is in the form of "),a("code",[t._v("xxxx-xx-xx")]),t._v(', such as "April 1, 2020" should be written as '),a("code",[t._v("2020-04-01")]),t._v(".")]),t._v(" "),a("p",[t._v("E.g.:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[t._v("time: 2020-01-01")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Category and Tags")])]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/guide/feature/blog.html"}},[t._v("blog section")]),t._v(" for details")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Reading time")])]),t._v(" "),a("p",[t._v("The default statistic method is 300 words per minute. You can override it by setting "),a("code",[t._v("wordPerminute")]),t._v(" in the plugin configuration. This option does not support individual configuration on the page.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Visitor Number")]),t._v(" "),a("MyBadge",{attrs:{text:"Support page config"}})],1),t._v(" "),a("p",[t._v("When "),a("RouterLink",{attrs:{to:"/guide/feature/comment.html"}},[t._v("Comment Function")]),t._v(" is configured, this function is enabled by default.")],1),t._v(" "),a("p",[t._v("E.g.:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[t._v("visitor: false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])]),t._v(" "),a("hr",{staticClass:"footnotes-sep"}),t._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[a("strong",[t._v("Apply Partically Support")])]),t._v(" "),a("p",[a("strong",[t._v("Support local configuration")]),a("MyBadge",{attrs:{text:"Support page config"}}),t._v(" means that the theme allows the configuration of the page to override the global configuration.")],1),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Example")]),t._v(" "),a("p",[t._v("Take path navigation as an example:")]),t._v(" "),a("p",[t._v("This feature is enabled globally by default, that is, "),a("code",[t._v("themeConfig.breadcrumb")]),t._v(" is "),a("code",[t._v("true")]),t._v(" by default, and you can set "),a("code",[t._v("breadcrumb: false")]),t._v(" in the Front Matter of a specific page to disable it locally.")]),t._v(" "),a("p",[t._v("Of course, you can also set the "),a("code",[t._v("themeConfig.breadcrumb")]),t._v(" option to "),a("code",[t._v("false")]),t._v(" to disable it globally, and set "),a("code",[t._v("breadcrumb: true")]),t._v(" in the Front Matter of a specific page to enable it locally.")])]),t._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);