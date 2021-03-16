<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{tab}}</div>
    <div>Result : {{result}}</div>
    <label>Enter numbers to list separate by comma</label>
    <input type="text" v-model="input"/>
  </div>
</template>

<script lang="ts">
import {ref, computed} from 'vue';

function parseString(input){
  const tab = computed(() => {
     if(input.value !== ''){
        return input.value.split(',').map(Number).filter(num => !isNaN(num));
     }
     else{
       return [];
     }
   });

  return{
    tab
  }
}

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const input = ref("");

    const {tab} = parseString(input);

    const result = computed(() => {
      if(tab.value.length === 0){
        return 0;
      }
      else{
        let tmp = tab.value[0];
        for(let i = 1; i < tab.value.length; i++){
          if(Math.abs(tab.value[i]) < Math.abs(tmp) || (Math.abs(tab.value[i]) <= Math.abs(tmp) && tab.value[i] > tmp)){
            tmp = tab.value[i];
          }
        }
        return tmp;
      }
    })

    return {
      input,
      tab,
      result
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
