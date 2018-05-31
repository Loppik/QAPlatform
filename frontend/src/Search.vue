<template>
  <div id="search">
    <img src="./assets/logo.png">
    <h2>{{ msg }}</h2>
    <input type="text" name="" v-model="mess" placeholder="Enter your question here..." id="search-input"  @keyup.13="clear">
    <p style="margin-top:10px;">{{ mess }}</p>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      msg: 'This page is based on Vue.js',
      mess: ''
    }
  },
  methods:{
    clear ()  {
                this.mess = null;
              }
  }
}
</script>

<style>
#search {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: calc(100vh - 94px);
  margin-top: 94px;
}

h1{
  font-weight: normal;

}

h2{
  font-weight: normal;
  padding-top: 10px;
  color: #c0c0c0;
  cursor: default;
}
#search-input{
  padding: 10px;
  font-size: 1.2em;
  color: #2c3e50;
  width: 80%;
  margin-top: 40px;
  border: none;
  border-bottom: 2px solid #41b883;
  transition: .7s;
}

#search-input:focus{
  border-bottom: 2px solid #2c3e50;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #2c3e50;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #2c3e50;
}

</style>
