<template>
  <div id="footer">
    <div class="contact">
      <img src="./assets/logo.gif" alt="" width="50%">
      <p>Contact us:<br>example@email.com<br>example2@email.com</p>
    </div>
    <div class="about">
      <div class="sanya block">
          <img src="./assets/WV5j-3x12fg.gif" alt="" width="140px" class="round">
        <p>Alexander Shantyr</p>

      </div>
      <div class="antoha block">
        <img src="./assets/lxVZTGM_4to.gif" alt="" width="140px" class="round">
        <p>Anton Mordik</p>
      </div>
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
  height: 400px;
  background-color: #41b883;
  color: #2c3e50;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 5fr 5fr 1fr;
  grid-template-rows: 1fr 320px 1fr;
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
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 150px 1fr;
  grid-auto-rows: 1fr;
  margin: 10px;
  border-radius: 70px;
  transition: .7s;
}

.block:hover{
  background-color: #2c3e50;
  color: white;
}

.round{
  border-radius: 70px;
  /* background-image: url('./assets/WV5j-3x12fg.gif'); */
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
