import { App, Plugin } from 'vue';
import Autocomplete from './src/Autocomplete.vue';

export const AutocompletePlugin: Plugin = {
  install(app: App) {
    app.component(Autocomplete.name, Autocomplete);
  },
};

export { Autocomplete };
