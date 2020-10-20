/* eslint-disable @typescript-eslint/naming-convention */
import { resolve } from "path";
import lineNumbers = require("@vuepress/markdown/lib/lineNumbers");

import flowchart from "./markdown-it/flowchart";
import footnote from "./markdown-it/footnote";
import katex from "./markdown-it/katex";
import mark from "./markdown-it/mark";
import reveal from "./markdown-it/reveal";
import sub from "./markdown-it/sub";
import sup from "./markdown-it/sup";
import pluginConfig from "./pluginConfig";

import { Context, PluginOptionAPI } from "@mr-hope/vuepress-types";
import { MarkdownEnhanceOption } from "../types";

export = (
  option: MarkdownEnhanceOption,
  { themeConfig }: Context
): PluginOptionAPI => {
  const markdownOption =
    Object.keys(option).length === 0 ? themeConfig.mdEnhance || {} : option;

  const config: PluginOptionAPI = {
    name: "md-enhance",

    define: () => ({
      REVEAL_OPTIONS:
        typeof markdownOption.presentation === "object"
          ? markdownOption.presentation
          : {},
    }),

    enhanceAppFiles: resolve(__dirname, "../src/enhanceAppFile.js"),

    chainMarkdown: (md) => {
      if (markdownOption.lineNumbers !== false)
        md.plugin("line-numbers").use(lineNumbers);
      if (markdownOption.sup || markdownOption.enableAll)
        md.plugin("sup").use(sup);
      if (markdownOption.sub || markdownOption.enableAll)
        md.plugin("sub").use(sub);
      if (markdownOption.footnote || markdownOption.enableAll)
        md.plugin("footnote").use(footnote);
      if (markdownOption.mark || markdownOption.enableAll)
        md.plugin("mark").use(mark);
      if (markdownOption.flowchart || markdownOption.enableAll)
        md.plugin("flowchart").use(flowchart);
      if (markdownOption.tex || markdownOption.enableAll)
        md.plugin("katex").use(katex, [
          {
            macros: {
              // support more symbols
              "\\liiiint": "\\int\\!\\!\\!\\iiint",
              "\\iiiint": "\\int\\!\\!\\!\\!\\iiint",
              "\\idotsint": "\\int\\!\\cdots\\!\\int",
            },
          },
        ]);
      if (markdownOption.presentation || markdownOption.enableAll)
        md.plugin("presentation").use(reveal);
    },
  };

  config.plugins = pluginConfig(markdownOption, themeConfig);

  return config;
};