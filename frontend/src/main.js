import Vue from 'vue'
import Search from './Search.vue'
import Menu from './Menu.vue'
import MenuLog from './MenuLog.vue'
import Footer from './Footer.vue'
import Info from './Info.vue'
import FormReg from './FormReg.vue'
import FormLogin from './FormLogin.vue'
import QNonAuth from './QNonAuth.vue'
import QAuth from './QAuth.vue'
import Cp from './Cp.vue'
import Index from './Index.vue'
import Question from './Question.vue'
import QuestionA from './QuestionA.vue'
import App from './App.vue'

new Vue({
  el: '#cp',
  render: h => h(Cp)
})

new Vue({
  el: '#index',
  render: h => h(Index)
})

new Vue({
  el: '#question',
  render: h => h(Question)
})

new Vue({
  el: '#question-a',
  render: h => h(QuestionA)
})

new Vue({
  el: '#search',
  render: h => h(Search)
})

new Vue({
  el: '#menu',
  render: h => h(Menu)
})

new Vue({
  el: '#menu-log',
  render: h => h(MenuLog)
})

new Vue({
  el: '#formreg',
  render: h => h(FormReg)
})

new Vue({
  el: '#formlogin',
  render: h => h(FormLogin)
})

new Vue({
  el: '#footer',
  render: h => h(Footer)
})

new Vue({
  el: '#info',
  render: h => h(Info)
})

new Vue({
  el: '#question-non',
  render: h => h(QNonAuth)
})

new Vue({
  el: '#q-auth',
  render: h => h(QAuth)
})

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';