<template>
  <div id="info">
    <div class="card">
      <div id="avatar">
      </div>
      <div class="nick">
        {{ nickname }}
      </div>
    </div>
    <div class="activity">
      <p>This year activity: {{ statistic[0] }} answers</p>
      <p>This mounth activity: {{ statistic[1] }} answers</p>
      <p>This day activity: {{ statistic[2] }} answers</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'search',
  data () {
    return {
//      yearActivity: 215,
//      mounthActivity: 47,
//      dayActivity: 3
    }
  },
  props: ['nickname', 'password', 'question', 'answers', 'bestAnswer', 'statistic'],
}
</script>

<style>
#avatar{
  width: 200px;
  height: 200px;
  background-image: url('./assets/user.svg');
}

#info {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #48b8d0;
  width: 100%;
  height: 100vh;
  text-align: center;
}
.card{
  width: 200px;
  position: absolute;
  top: 20%;
  left: calc(50% - 100px);
  padding-bottom: 15px;
  border-radius: 30px;
  transition: .7s;
}
  .nick{
    color: #48b8d0;
  }

.activity{
  margin: auto;
  position: absolute;
  top: calc(20% + 250px);
  left: calc(50% - 250px);
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
  background-color: #48b8d0;
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
