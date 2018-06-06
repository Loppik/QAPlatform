<template>
  <div>
  <div id="menu">
    <h1 style="grid-column: 2; color: #fff;">{{ msg }}</h1>
    <div class="sign sign-in" @click="changeShowLog" v-if="!showR">
      {{ signin }}
    </div>
    <div class="sign sign-up" @click="changeShowReg" v-if="!showL">
      {{ signup }}
    </div>
  </div>
  <transition name="fade">
    <div v-if="showR">
      <reg/>
    </div>
    <div v-if="showL">
      <log v-bind:nickname="nickname" v-bind:password="password" v-bind:showL="showL" />
    </div>
  </transition>
  </div>
</template>

<script>
import FormReg from "./FormReg.vue";
import FormLogin from "./FormLogin.vue";

export default {
  name: 'menu',
  data () {
    return {
      msg: 'Q&A platform',
      signin: 'Sign in',
      signup: 'Sign up',
      showR: false,
      showL: false
    }
  },
  components: {
    'reg': FormReg,
    'log': FormLogin
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
    transferNickFunc: function (value, nickname) {
      alert(value, nickname);
    },
    transferPassFunc: function (value, password) {
      alert(value, password);
    }
  }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

#menu {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background: linear-gradient(90deg, #8ae1fc, #48b8d0);
  position: fixed;
  top: 0;
  color: #2c3e50;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  /* padding-left: 10px; */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 8fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}

.sign{
  text-align: center;
  color: white;
  padding-top: 10px;
  cursor: pointer;
  border-radius: 40px;
  transition: .7s;
}

.sign:hover{
  color: #48b8d0;
  background-color: #fff;
}

.sign-in{
  grid-column: 3;
}

.sign-up{
  grid-column: 4;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
