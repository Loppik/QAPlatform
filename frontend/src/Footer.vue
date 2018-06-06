<template>
  <div id="footer">
      <div class="block">
        <h2 style="color: #fff; margin-bottom: 10px;">Follow us:</h2>
        <a href="https://github.com/modriX" target="_blank"><img src="./assets/github.svg" class="change"/></a>
        <a href="https://github.com/Loppik" target="_blank"><img src="./assets/github.svg" class="change"/></a>
      </div>
    </div>

</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App x3'
    }
  }
}
</script>

<style>
#footer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  background: linear-gradient(90deg, #8ae1fc, #48b8d0);
  color: #2c3e50;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 400px 1fr;
  grid-template-rows: 10px 1fr 10px;
}

.about{
  grid-column: 3;
  grid-row: 2;
  /* background-color: white; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 160px 160px;
}

.about p {
  font-size: 24px;
  padding-top: 55px;
  cursor: default;
}

.contact{
  grid-column: 2;
  grid-row: 2;
  /* background-color: white; */
  text-align: center;
  padding: 10px;
}

.contact p {
  font-size: 24px;
  margin-top: 10px;
  cursor: default;
}

.block{
  grid-column: 2;
  grid-row: 2;
  margin: auto;
  border-radius: 70px;
  transition: .7s;
}

  .sanya{
    grid-column: 2;
  }
  
  .antoha{
    grid-column: 3;
  }
  
  .change{
    grid-row: 3;
    margin: auto;
    transition: .7s;
    border-radius: 70px;
  }
  
  .change:hover{
    background-color: #48b8d0;
  }
  
.round{
  border-radius: 70px;
  /* background-image: url('./assets/WV5j-3x12fg.gif'); */
}

</style>
