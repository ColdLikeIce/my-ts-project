<template>
  <div>
    <h1>My To Do List</h1>
    </br>
    <!--displays list -->
    <input v-model="newItem" >
    <button @click="addItemToList">Add</button>
    <ul>
      <li v-for="item in listItems">{{ item }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  name: 'Additem'
})
export default class Additem extends Vue {
  listItems: any = ['buy food', 'play games', 'sleep']
  newItem : string = ''
  addItemToList () {
    this.listItems.push(this.newItem)
    this.newItem = ''
  }
}
</script>
