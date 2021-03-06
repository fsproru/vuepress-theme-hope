import {
  HopeNavBarConfig,
  HopeSideBarConfig,
  HopeLangI18nConfig,
} from "@mr-hope/vuepress-shared";
import { AlgoliaOption } from "@mr-hope/vuepress-types";

/** vuepress-theme-hope 多语言配置 */
export interface HopeLangLocalesConfig extends Partial<HopeLangI18nConfig> {
  /** 当前语言下的标题 */
  title?: string;
  /** 当前语言下的描述 */
  description?: string;
  /** 导航栏链接 */
  nav?: HopeNavBarConfig;
  /** 侧边栏配置 */
  sidebar?: HopeSideBarConfig;
  /** 当前语言的 algolia 设置 */
  algolia?: AlgoliaOption;
}

/** 处理过的 vuepress-theme-hope 多语言配置 */
export interface ResolvedHopeLangLocalesConfig extends HopeLangI18nConfig {
  /** 导航栏链接 */
  nav: HopeNavBarConfig;
  /** 侧边栏配置 */
  sidebar: HopeSideBarConfig;
  /** 当前语言的 algolia 设置 */
  algolia?: AlgoliaOption;
}
