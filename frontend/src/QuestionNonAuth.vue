<template>
  <div id="question-non">
    <div id="question-container">
      <h2 id="quest">{{ question }}</h2>
      <div id="best">
        <img src="./assets/star.png">
        <h3 style="text-align: left; padding-top: 7px;">{{ bestAnswer }}</h3>
      </div>
      <p class="other" v-for="q in otherAnswers">{{ q }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question-non',
  data () {
    return {
      question: 'Example question????',
      bestAnswer: 'Some clever answer',
      otherAnswers: ['Stupid answer 1', 'Stupid answer 2 rgerge hrthrhg ergerherh erh ergehe rgerh ehrerh herherh erher erhe rhgsdgsfs  fsdfnalw sd fk']
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
  width: 50%;
  height: 50%;
  overflow-y: scroll;
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
  border-bottom: 1px solid #2c3e50;
}

</style>
