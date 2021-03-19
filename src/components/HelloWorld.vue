<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="list">{{tab}}</div>
    <div>Result : {{result}}</div>
    <label>Enter numbers to list separate by comma</label>
    <input type="text" v-model="input"/>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      input: ""
    }
  },
  methods: {
    closestToZero(){
      let result = this.tab[0];
      for(let i = 1; i < this.tab.length; i++){
        if(Math.abs(this.tab[i]) < Math.abs(result) || (Math.abs(this.tab[i]) <= Math.abs(result) && this.tab[i] > result)){
          result = this.tab[i];
        }
      }
      return result;
    }
  },
  computed: {
    tab(){
      if(this.input !== ''){
        return this.input.split(',').map(Number).filter(num => !isNaN(num));
      }
      else{
        return [];
      }
    },
    result(){
      if(this.tab === undefined || this.tab.length === 0){
        return 0;
      }
      else{
        return this.closestToZero();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
