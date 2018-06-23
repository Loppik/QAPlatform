<template>
  <div id="q-auth">
    <div id="question-container">
      <h2 id="quest">{{ question }}</h2>
      <div id="best">
        <img src="./assets/star.svg">
        <h3 style="text-align: left; padding-top: 7px;">{{ answers[0].nickname }} :  {{ answers[0].answer}}</h3>
      </div>
      
      <input type="text" placeholder="Enter your answer here..." id="answer-input" v-model="userAnswer" @keyup.13="appendAnswer">
      <p class="other" v-for="q in answers">{{ q.nickname }} : {{ q.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'q-auth',
  data () {
    return {
      answers: [{nickname:'sanyaShantyr', answer:'JAVA IS GTREAT'}, {nickname:'olegFedorovich', answer:'java is infamous language'}],
      question: 'Example question????',
      userAnswer: '',
    }
  },
  methods:{
    appendAnswer () { 
                      this.answers.push({nickname:this.$route.params.id , answer:this.userAnswer});
                      this.userAnswer = null;
                    }
  }
}
</script>

<style>
  
  #q-auth {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #48b8d0;
  width: 100%;
  height: 100vh;
}

#best{
  display: grid;
  grid-template-columns: 42px 1fr;
  grid-gap: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #48b8d0;
}x

h1{
  font-weight: normal;

}

#quest, #best{
  font-weight: normal;
  padding-top: 10px;
  cursor: default;
}

.other{
  text-align: left; 
  padding-top: 7px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e2e2;
  color: #a2a2a2;
}
  
  .other:last-child{
    border-bottom: none;
  }
    
#answer-input{
  padding: 10px;
  font-size: 1.2em;
  color: #2c3e50;
  width: 97%;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid #e2e2e2;
  transition: .7s;
}

#answer-input:focus{
  color: #48b8d0;
  border-bottom: 2px solid #8ae1fc;
}

</style>
