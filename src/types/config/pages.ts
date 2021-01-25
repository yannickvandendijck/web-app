export interface PagesConfig {
  pages: Array<PageConfig>;
}

export interface PageConfig {
  path: string;
  pageKey: string;
  hideWhen?: 'auth' | 'unauth';
  rows: Array<PageRow>;
}

export interface PageRow {
  key: string;
  className?: string;
  fullWidth?: boolean;
  columns: Array<PageColumn>;
}

export interface PageColumn {
  key?: string;
  className?: string;
  items: Array<PageItem>;
}

export interface PageItem {
  itemKey: string;
  className?: string;
  hideWhen?: 'auth' | 'unauth';
  config: PageItemConfig;
}

type PageItemConfig = TeaserImageConfig | RouterComponentConfig |
  MarkdownComponentConfig | ImageCardConfig | LoginCardConfig | VideoConfig;

export interface MarkdownComponentConfig {
  type: 'markdown';
  markdownUrl: string;
}

export interface VideoConfig {
  type: 'video';
  minHeight?: number;
  posterUrlKey?: string;
  videoSources: Array<{
    urlKey: string;
    type: string;
  }>;
  fallbackTextKey?: string;
}

export interface TeaserImageConfig {
  type: 'teaserImage',
  image: {
    url: string;
    height?: number;
    className?: string;
    backgroundPosition?: string;
  }
  textBox?: {
    className?: string;
    titleKey?: string;
    contentKey?: string;
  }
}

export interface ImageCardConfig {
  type: 'imageCard';
  action?: {
    type: 'navigate' | 'openDialog';
    value: string;
  };
  imageSrc?: string;
  className?: string;
  showActionBtn?: boolean;
}

interface LoginCardConfig {
  type: 'loginCard';
  showInfoText: boolean;
}

export interface RouterComponentConfig {
  type: 'router';
}
