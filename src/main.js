import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from '../data/mock-data.js'

let data = {
  addedComment: '',
  posts: mock.posts,
  contacts: mock.contacts,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
