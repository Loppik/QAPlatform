<template>
  <div id="question-non">
    <div id="question-container">
      <h2 id="quest">{{ question }}</h2>
      <div id="best">
        <img src="./assets/star.svg">
        <h3 style="text-align: left; padding-top: 7px;">{{ bestAnswer }}</h3>
      </div>
      <p class="other" v-for="q in answers">{{ q }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question-non',
  data () {
    return {
//      question: 'Example question????',
//      bestAnswer: 'Some clever answer',
//      otherAnswers: ['Stupid answer 1', 'Stupid answer 2 rgerge hrthrhg ergerherh erh ergehe rgerh ehrerh herherh erher erhe rhgsdgsfs  fsdfnalw sd fk']
    }
  },
  
    props: ['nickname', 'password', 'question', 'answers', 'bestAnswer', 'statistic'],
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
