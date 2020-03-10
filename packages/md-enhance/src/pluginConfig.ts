/*
 * @Author: Mr.Hope
 * @Date: 2019-10-22 23:43:27
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2020-03-10 23:35:39
 * @Description: 插件配置
 */
import { MarkdownEnhanceOption } from '../types';
import { PluginConfig } from 'vuepress-types';
import { i18n } from '@mr-hope/vuepress-shared-utils';

// eslint-disable-next-line max-lines-per-function
const pluginConfig = (
  option: MarkdownEnhanceOption,
  themeConfig: Record<string, any>
): PluginConfig[] => {
  /** markdown 配置 */
  const markdownOption: MarkdownEnhanceOption =
    option || themeConfig.markdown || {};
  /** 多语言标题配置 */
  const containerConfig = i18n.config.container;
  /** 主目录语言 */
  const baseLang = markdownOption.baseLang || themeConfig.baseLang || 'zh-CN';
  /** 主目录语言对应路径 */
  const baseLangPath = i18n.lang2path(baseLang);

  /** 处理标题 */
  const resolveConfig = (
    titleConfig: Record<string, string>
  ): Record<string, string> => {
    titleConfig['/'] = titleConfig[baseLangPath];

    return titleConfig;
  };

  const config: PluginConfig[] = [
    /** typescript 支持 */
    ['typescript'],
    /** 自定义容器配置 */
    [
      'container',
      { type: 'tip', defaultTitle: resolveConfig(containerConfig.tip) }
    ],
    [
      'container',
      { type: 'warning', defaultTitle: resolveConfig(containerConfig.warning) }
    ],
    [
      'container',
      { type: 'danger', defaultTitle: resolveConfig(containerConfig.danger) }
    ],
    /** 自定义详情容器 */
    [
      'container',
      {
        type: 'details',
        before: (info: string): string =>
          `<details class="custom-block details"><summary>${info ||
            'Details'}</summary>\n`,
        after: (): string => '</details>\n'
      }
    ]
  ];

  // 支持 TeX 语法
  if (markdownOption.align || markdownOption.enableAll)
    config.push(
      /** 自定义居右容器 */
      ['container', { type: 'right', defaultTitle: '' }],
      /** 自定义居中容器 */
      ['container', { type: 'center', defaultTitle: '' }]
    );

  // 支持 TeX 语法
  if (markdownOption.mathjax || markdownOption.enableAll)
    config.push(['mathjax']);

  return config;
};

export default pluginConfig;
