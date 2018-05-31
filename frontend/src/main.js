import Vue from 'vue'
import Search from './Search.vue'
import Menu from './Menu.vue'
import MenuLog from './MenuLog.vue'
import Footer from './Footer.vue'
import Info from './Info.vue'
import FormReg from './FormReg.vue'
import FormLogin from './FormLogin.vue'
import QuestionNonAuth from './QuestionNonAuth.vue'
import QuestionAuth from './QuestionAuth.vue'
import Cp from './Cp.vue'

new Vue({
  el: '#cp',
  render: h => h(Cp)
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
  render: h => h(QuestionNonAuth)
})

new Vue({
  el: '#question-auth',
  render: h => h(QuestionAuth)
})