<template>
  <div id="question">
    <men/>
    <quest/>
    <foot/>
  </div>
</template>

<script>
import QNonAuth from "./QNonAuth.vue";
import Menu from "./Menu.vue";
import Footer from "./Footer.vue";
  
export default {
  name: 'question',
  data () {
    return {
      question: 'Example question????',
      nickname: 'NICKNAME',
      userAnswer: '',
      bestAnswer: {nickname:'sanyaShantyr', answer:'Some clever answer'},
      otherAnswers: [{nickname:'adm1', answer:'Stupid answer 1'}, {nickname:'adm2', answer:'Stupid answer 2'}]
    }
  },
  methods:{
    appendAnswer () { 
                      this.otherAnswers.push({nickname:this.nickname, answer:this.userAnswer});
                      this.userAnswer = null;
                    }
  },
  components:{
    men: Menu,
    quest: QNonAuth,
    foot: Footer
  }
}
</script>

<style>
</style>
