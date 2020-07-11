import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './mixins';
import './assets/style/global.scss';
import VueMoment from 'vue-moment';
import moment from 'moment';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueDraggableResizable from 'vue-draggable-resizable';

import MainPage from "@/layout/MainPage";
import Group from "./components/group";
import AddGroupBtn from "./components/add-group-btn";
import Chat from "@/layout/Chat";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMoment, {
  moment
});
Vue.component('vue-draggable-resizable', VueDraggableResizable);

Vue.component('main-page', MainPage);
Vue.component('group', Group);
Vue.component('add-group-btn', AddGroupBtn);
Vue.component('chat', Chat);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');


