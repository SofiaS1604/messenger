import Vue from 'vue';
import VueRouter from 'vue-router';

import RootPage from './view/App.vue';

let VueTouch = require('vue-touch');

Vue.use(VueTouch, { name: 'v-touch' });
Vue.use(VueRouter);

const App = new Vue({
    el: '#app',
    name: 'App',
    render: h => h(RootPage)
});