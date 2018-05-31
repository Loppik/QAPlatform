<template>
  <div id="cp">
    <menu-log></menu-log>
    <info v-bind:nickname="nickname"></info>
    <foot></foot>
  </div>
</template>

<script>
  import MenuLog from "./MenuLog.vue";
  import Info from "./Info.vue";
  import Footer from "./Footer.vue";

  
  export default {
    name: 'cp',
    data () {
      return {
        nickname: 'NICKNAME',
      }
    },
    methods:{
      
    },
    components: {
      'menu-log': MenuLog,
      'info': Info,
      'foot': Footer
  },
  } 
</script>

<style>
</style>
