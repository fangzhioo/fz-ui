import { App, Plugin } from 'vue';
import Avatar from './src/Avatar.vue';

export const AvatarPlugin: Plugin = {
  install(app: App) {
    app.component(Avatar.name, Avatar);
  },
};

export { Avatar };
