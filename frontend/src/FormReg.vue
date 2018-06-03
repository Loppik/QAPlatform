<template>
  <div id="formreg" v-if="show">
    <div class="container-form">
      <h2 style="color: #fff">{{ msg }}</h2>
      <input type="text" name="" value="" placeholder="Login" id="login-input">
      <input type="password" name="" value="" placeholder="Password" id="pass-input">
      <input type="email" name="" value="" placeholder="E-mail" id="email-input">
      <div id="reg-btn">Register</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      msg: 'Registration:',
      show: true
    }
  },
  methods:{
    changeShow () {
    }
  }
}
</script>

<style>
@@keyframes start {
  0%{opacity: 0};
  100%{opacity: 1}
}

#formreg {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: linear-gradient(90deg, #8ae1fc, #48b8d0);
  color: #fff;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 64px;
  display: grid;
  grid-template-columns: 1fr 50% 1fr;
  animation: start 1s easy-in;
}

h1{
  font-weight: normal;

}

.container-form{
  margin-top: 20%;
  grid-column: 2;
}

#login-input, #pass-input, #email-input{
  width: 100%;
  font-size: 1.2em;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #fff;
  transition: .7s;
}

#reg-btn{

  margin: auto;
  margin-top: 15px;
  padding-top: 10px;
  width: 30%;
  padding-bottom: 10px;
  transition: .7s;
  cursor: pointer;
  border-radius: 30px;
  color: #fff;
}

#reg-btn:hover{
  background-color: #fff;
  color: #48b8d0;

}

</style>
