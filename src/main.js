// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import $ from 'jquery'
import home from './components/home'
import scheme from './components/scheme'
import product from './components/product'
import cooperation from './components/cooperation'
import us from './components/us'

Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/',component: home},
    {path: '/scheme',component: scheme},
    {path: '/product',component: product},
    {path: '/cooperation',component: cooperation},
    {path: '/us',component: us}
  ],
	mode:'history'
})

/* eslint-disable no-new */
new Vue({
	router,
  el: '#app',
  
  components: { App },
  template: '<App/>'
})
