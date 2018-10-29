<template>
  <div class="hello">
    <my-header></my-header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import header from '@/components/myheader.vue'

@Component({
  name: 'hello',
  components: {
    'my-header': header
  }
})
export default class HelloWorld extends Vue {
  msg: string = 'Welcome to Your Vue.js App';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
