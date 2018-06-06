<template>
  <div id="cp">
    <menu-log/>
    <info v-bind:nickname="nickname" v-bind:password="password" v-bind:question="question" v-bind:answers="answers" v-bind:bestAnswer="bestAnswer" v-bind:statistic="statistic"/>
    <foot/>
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
      }
    },
    props: ['nickname', 'password', 'question', 'answers', 'bestAnswer', 'statistic'],
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
