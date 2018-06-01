<template>
  <div id="menu">
    <h1 style="grid-column: 2; color: #fff;">{{ msg }}</h1>
    <div class="sign log-out">
      {{ logout }}
    </div>
    <div class="sign profile">
      {{ profile }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu-log',
  data () {
    return {
      msg: 'Q&A platform',
      logout: 'Log out',
      profile: 'Profile'
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#menu {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background: linear-gradient(90deg, #8ae1fc, #48b8d0);
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
  padding-top: 10px;
  cursor: pointer;
  border-radius: 40px;
  transition: .7s;
}

.sign:hover{
  background-color: #2c3e50;
  color: white;
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
