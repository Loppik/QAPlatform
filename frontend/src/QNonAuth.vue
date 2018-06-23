<template>
  <div id="question-non">
    <div id="question-container">
      <h2 id="quest">{{ question }}</h2>
      <div id="best">
        <img src="./assets/star.svg">
        <h3 style="text-align: left; padding-top: 7px;">{{ answers[0].nickname }} :  {{ answers[0].answer}}</h3>
      </div>
      <p class="other" v-for="q in answers">{{ q.nickname }} : {{ q.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question-non',
  data () {
    return {
      answers: [{nickname:'sanyaShantyr', answer:'JAVA IS GTREAT'}, {nickname:'olegFedorovich', answer:'java is infamous language'}],
      question: 'Example question????'
//      question: 'Example question????',
//      bestAnswer: 'Some clever answer',
//      otherAnswers: ['Stupid answer 1', 'Stupid answer 2 rgerge hrthrhg ergerherh erh ergehe rgerh ehrerh herherh erher erhe rhgsdgsfs  fsdfnalw sd fk']
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
  color: #48b8d0;
  width: 100%;
  height: 100vh;
}

#question-container{
  width: 50%;
  height: 50%;
  overflow-y: scroll;
/*  margin: auto;*/
/*  margin-top: 15%; */
  position: absolute;
  left: 25%;
  top: 25%;
}

#quest{
  color: #48b8d0;
  padding-bottom: 5px;
  border-bottom: 2px solid #48b8d0;
}

h1, h3{
  font-weight: normal;

}
</style>
