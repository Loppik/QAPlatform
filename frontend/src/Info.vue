<template>
  <div id="info">
    <div class="card">
      <div id="avatar">
      </div>
      <div class="nickname">
        {{ nickname }}
      </div>
    </div>
    <div class="activity">
      <p>This year activity: {{ yearActivity }} answers</p>
      <p>This mounth activity: {{ mounthActivity }} answers</p>
      <p>This day activity: {{ dayActivity }} answers</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'search',
  data () {
    return {
      msg: 'This page is based on Vue.js',
//      nickname: 'Administrator',
      yearActivity: 215,
      mounthActivity: 47,
      dayActivity: 3
    }
  },
  props: ['nickname']
}
</script>

<style>
#avatar{
  width: 200px;
  height: 200px;
  background-image: url('./assets/ava.gif');

}

#info {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: calc(100vh - 94px);
  margin-top: 94px;
  text-align: center;
}
.card{
  width: 200px;
  margin: auto;
  padding-bottom: 15px;
  border-radius: 30px;
  transition: .7s;
}

.card:hover{
  background-color: #2c3e50;
  color: white;
}

.activity{
  margin: auto;
  margin-top: 30px;
  width: 500px;
  display: grid;
  grid-template-rows: 50px 50px 50px;
}

.activity p{
  padding-top: 15px;
  border-radius: 30px;
  transition: .7s;
  cursor: default;
}


.activity p:hover{
  background-color: #2c3e50;
  color: white;
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
