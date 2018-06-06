<template>
  <div id="question-a">
    <men/>
    <quest v-bind:nickname="nickname" v-bind:password="password" v-bind:question="question" v-bind:answers="answers" v-bind:bestAnswer="bestAnswer" v-bind:statistic="statistic"/>
    <foot/>
  </div>
</template>

<script>
import QAuth from "./QAuth.vue";
import MenuLog from "./MenuLog.vue";
import Footer from "./Footer.vue";
  
export default {
  name: 'question-a',
  data () {
    return {
//      question: 'Example question????',
//      nickname: 'NICKNAME',
      userAnswer: '',
//      bestAnswer: {nickname:'sanyaShantyr', answer:'Some clever answer'},
//      otherAnswers: [{nickname:'adm1', answer:'Stupid answer 1'}, {nickname:'adm2', answer:'Stupid answer 2'}]
    }
  },
  props: ['nickname', 'password', 'question', 'answers', 'bestAnswer', 'statistic'],
  methods:{
    appendAnswer () { 
                      this.answers.push({nickname:this.nickname, answer:this.userAnswer});
                      this.userAnswer = null;
                    }
  },
  components:{
    men: MenuLog,
    quest: QAuth,
    foot: Footer
  }
}
</script>

<style>
</style>
