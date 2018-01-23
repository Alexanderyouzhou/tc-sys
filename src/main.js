import Vue from 'vue'
import App from './App.vue'
import request from './utils/request/request.js'
import url from './utils/request/url.json'
new Vue({
  el:'#app',
  components: { App },
  template: '<App/>'
})

request.get(url.test, '', function (data) {
  console.log(data)
})