<template>
  <div id="app">
    <menu-non v-if="!reg" />
    <menu-log v-else />
    <search v-if="page == 0" />
    <q-auth v-if="reg && page == 1" v-bind:nickname="nickname" v-bind:question="question" v-bind:answers="answers"/>
    <q-non v-if="!reg && page == 1" v-bind:answers="answers" />
    <info v-if="reg && page == 2" v-bind:nickname="nickname" v-bind:statistic="statistic" />
    <foot />
    <div id="page-controller" @mouseover="show = true;" @mouseleave="show = false;">
      <transition name="fade">
        <div v-if="show">
          <div id="page1" class="page" @click="setPage1">Page 1</div>
          <div id="page2" class="page" @click="setPage2">Page 2</div>
          <div id="page3" class="page" @click="setPage3">Page 3</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Menu from "./Menu.vue";
  import MenuLog from "./MenuLog.vue";
  
  import FormLogin from "./FormLogin.vue";
  import FormReg from "./FormReg.vue";
  
  import Search from "./Search.vue";
  import Info from "./Info.vue";
  
  import QAuth from "./QAuth.vue";
  import QNonAuth from "./QNonAuth.vue";

  import Footer from "./Footer.vue";

  
  export default {
    name: 'app',
    data () {
      return {
        reg: true,
        page: 0,
        nickname: 'admin',
        password: '',
        question: 'what is java?',
        answers: [{nickname:'sanyaShantyr', answer:'JAVA IS GTREAT'}, {nickname:'olegFedorovich', answer:'java is infamous language'}],
        bestAnswer: '',
        statistic:[44, 18, 3],
        show: false
      }
    },
    methods:{
      setPage1(){
        this.page = 0;
      },
      setPage2(){
        this.page = 1;
      },
      setPage3(){
        this.page = 2;
      },
      changeShow(){
        this.show = false;
      }
    },
    components: {
      'menu-non': Menu,
      'menu-log': MenuLog,
      'form-login':FormLogin,
      'forn-reg':FormReg,
      'search':Search,
      'foot':Footer,
      'info':Info,
      'q-auth':QAuth,
      'q-non':QNonAuth
  },
  } 
</script>

<style>
  #page-controller{
    width: 10%;
    position: fixed;
    right: 10px;
    top: 40%;
    height: 140px;
  }
  
  .page{
    background-color: #8ae1fc;
    margin-bottom: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: white;
    border-radius: 50px;
    cursor: pointer;
    transition: .7s;
    border: 1px solid white;
  }
  
  .page:hover{
    border: 1px solid #48b8d0;
    color: #48b8d0;
    background-color: white;
  }
  
  
  
</style>
