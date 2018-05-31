<template>
  <div id="question-non">
    <div id="question-container">
      <h2 id="quest">{{ question }}</h2>
      <div id="best">
        <img src="./assets/star.png">
        <h3 style="text-align: left; padding-top: 7px;">{{ bestAnswer.nickname }} : {{ bestAnswer.answer }}</h3>
      </div>
      
      <input type="text" placeholder="Enter your answer here..." id="answer-input" v-model="userAnswer" @keyup.13="appendAnswer">
      <p class="other" v-for="q in otherAnswers">{{ q.nickname }} : {{ q.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question-non',
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
  }
}
</script>

<style>
#question-non {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: calc(100vh - 94px);
  margin-top: 94px;
}

#question-container{
  width: 70%;
  height: 70%;
  overflow-y: scroll;
/*  overflow-x: hidden;*/
  margin: auto;
  margin-top: 10%; 
  /*display: grid;
  grid-template-rows: 50px 60px 1fr;
  grid-template-columns: 1fr;*/
}

#quest{
  background-color: #41b883;
  color: #2c3e50;
  padding-bottom: 5px;
}

#best{
  display: grid;
  grid-template-columns: 42px 1fr;
  grid-gap: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #2c3e50;
}

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
  width: 97.7%;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid #41b883;
  transition: .7s;
}

#answer-input:focus{
  border-bottom: 2px solid #2c3e50;
}

</style>
