/**
 * !--------- FBI WARNING ----------!
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { InputPlugin } from './Input';
import { ConfigProviderPlugin } from './ConfigProvider';
import { ContainerPlugin } from './Container';
import { AffixPlugin } from './Affix';
import { IconPlugin } from './Icon';
import { PopperPlugin } from './Popper';
import { PopoverPlugin } from './Popover';
import { AutocompletePlugin } from './Autocomplete';
import { AlertPlugin } from './Alert';
import { AvatarPlugin } from './Avatar';
import { BacktopPlugin } from './Backtop';
import { BadgePlugin } from './Badge';
import { BreadcrumbPlugin } from './Breadcrumb';
import { ScrollbarPlugin } from './Scrollbar';
import { CheckboxPlugin } from './Checkbox';

const FzUIPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    InputPlugin.install?.(app);
    ConfigProviderPlugin.install?.(app);
    ContainerPlugin.install?.(app);
    AffixPlugin.install?.(app);
    IconPlugin.install?.(app);
    PopperPlugin.install?.(app);
    PopoverPlugin.install?.(app);
    AutocompletePlugin.install?.(app);
    AlertPlugin.install?.(app);
    AvatarPlugin.install?.(app);
    BacktopPlugin.install?.(app);
    BadgePlugin.install?.(app);
    BreadcrumbPlugin.install?.(app);
    ScrollbarPlugin.install?.(app);
    CheckboxPlugin.install?.(app);
  },
};

export default FzUIPlugin;

export * from './Button';
export * from './Input';
export * from './ConfigProvider';
export * from './Container';
export * from './Affix';
export * from './Icon';
export * from './Popper';
export * from './Popover';
export * from './Autocomplete';
export * from './Alert';
export * from './Avatar';
export * from './Backtop';
export * from './Badge';
export * from './Breadcrumb';
export * from './Scrollbar';
export * from './Checkbox';