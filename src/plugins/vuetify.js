import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#F4B001',
        secondary: '#3699FF',
        accent: '#FFE2E5',
        error: '#F64E60',
      },
    },
  },
});
