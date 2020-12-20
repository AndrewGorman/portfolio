import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {BootstrapVue} from 'bootstrap-vue';
import VueScrollactive from 'vue-scrollactive';
import {library} from '@fortawesome/fontawesome-svg-core';
import VueSilentbox from 'vue-silentbox';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {
    faAngleDown,
    faEnvelope,
    faLink,
} from '@fortawesome/pro-light-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(
    faAngleDown,
    faEnvelope,
    faGithub,
    faLinkedinIn,
    faLink,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueSilentbox);
Vue.use(BootstrapVue);
Vue.use(VueScrollactive);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
