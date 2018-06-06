<template>
  <div id="index">
    <menu-non v-bind:nickname="nickname" v-bind:password="password" v-bind:question="question" v-bind:answers="answers" v-bind:bestAnswer="bestAnswer" v-bind:statistic="statistic"/>
    <search v-bind:nickname="nickname" v-bind:password="password" v-bind:question="question" v-bind:answers="answers" v-bind:bestAnswer="bestAnswer" v-bind:statistic="statistic"/>
    <foot/>
  </div>
</template>

<script>
  import Menu from "./Menu.vue";
  import Search from "./Search.vue";
  import Footer from "./Footer.vue";

  
  export default {
    name: 'index',
    data () {
      return {
        
      }
    },
    props: ['nickname', 'password', 'question', 'answers', 'bestAnswer', 'statistic'],
    methods:{
      
    },
    components: {
      'menu-non': Menu,
      'search': Search,
      'foot': Footer
  },
  } 
</script>

<style>
</style>
