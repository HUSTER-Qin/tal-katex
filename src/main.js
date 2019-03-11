import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/katex/katex.min.css';
import talKatex from './assets/katex/index.js';
Vue.config.productionTip = false
Vue.use(talKatex, {
  delimiters: [{
      left: "$$",
      right: "$$",
      display: false
    },
    {
      left: "\[",
      right: "\]",
      display: true
    },
    {
      left: "$",
      right: "$",
      display: false
    },
    {
      left: "\(",
      right: "\)",
      display: false
    }
  ]
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')