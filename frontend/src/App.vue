<template>
  <div id="app">
<!--
    <div id="menu-log" v-if="reg">
      <h1 style="grid-column: 2; color: #fff;">{{ msg }}</h1>
      <div class="sign log-out">
        {{ logout }}
      </div>
      <div class="sign profile">
        {{ profile }}
      </div>
    </div>
-->
    <router-link to="/qn" style="margin-top: 200px;">Перейти к Q - N</router-link>
    <router-link to="/qa/adm" style="margin-top: 200px;">Перейти к Q - A</router-link>
    <router-link to="/info/adm" style="margin-top: 200px;">Перейти к I</router-link>
    <transition name="fade">
    <router-view></router-view>
    </transition>
    
<!--
    <search v-if="page == 0" />
    <q-auth v-if="reg && page == 1" v-bind:nickname="nickname" v-bind:question="question" v-bind:answers="answers"/>
    <q-non v-if="!reg && page == 1" v-bind:question="question" v-bind:answers="answers" />
    <info v-if="reg && page == 2" v-bind:nickname="nickname" v-bind:statistic="statistic" />
    
-->
    
    <div id="page-controller" @mouseover="show = true;" @mouseleave="show = false;">
      <transition name="fade">
        <div v-if="show">
          <div id="page1" class="page" @click="setPage1">Page 1</div>
          <div id="page2" class="page" @click="setPage2">Page 2</div>
          <div id="page3" class="page" @click="setPage3">Page 3</div>
        </div>
      </transition>
    </div>
    
    <div id="new-quest" v-if="reg">
      + Add question
    </div>
    
    
    
<!--
    <div id="menu" v-if="!reg">
      <h1 style="grid-column: 2; color: #fff;">{{ msg }}</h1>
      <div class="sign sign-in" @click="changeShowLog" v-if="!showR">
        {{ signin }}
      </div>
      <div class="sign sign-up" @click="changeShowReg" v-if="!showL">
        {{ signup }}
      </div>
    </div>
-->
    
    
    <foot />
    <transition name="fade">
      <div v-if="showR">
        <form-reg/>
      </div>
      <div v-if="showL">
        <form-login v-bind:nickname="nickname" v-bind:password="password" v-bind:showL="showL" />
      </div>
    </transition>
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
    data: function() {
      return {
        msg: 'Q&A platform',
        signin: 'Sign in',
        signup: 'Sign up',
        showR: false,
        showL: false,
        
        logout: 'Log out',
        profile: 'Profile',
        
        reg: !true,
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
      changeShowReg () { this.showR = !this.showR;
                    if (this.showR) {
                      this.signup = "Cancel";
                    } else{
                      this.signup = "Sign up";
                    }},
      changeShowLog () { this.showL = !this.showL;
                      if (this.showL) {
                        this.signin = "Cancel";
                      }else{
                        this.signin = "Sign in";
                      }},
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
      'form-reg':FormReg,
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
  
  #new-quest{
    color: #48b8d0;
    position: fixed;
    top: 100px;
    right: 40px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    font-size: 1.1em;
    padding: 15px;
    border-radius: 50px;
    background-color: white;
    cursor: pointer;
    transition: .7s;
    border-bottom: 2px solid white;
    box-shadow: 0 0 2px white;
  }
  
  #new-quest:hover{
    border-bottom: 2px solid #48b8d0;
    box-shadow: 0 3px 2px #48b8d0;
  }
  
</style>
