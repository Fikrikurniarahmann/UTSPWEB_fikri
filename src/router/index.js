import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import HomeVue from '../Components/Home.vue';
import MainVue from '../Components/Main.vue';

const routes = [
  {
    path: '/',
    component: HomeVue,
  },
  {
    path: '/Main',
    component: MainVue,
  },
  {
    path: '/namaSurah',
    name: 'namasurah',
    component: () => import('./View/NamaSurah.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
