<template>
  <div class="shopping container">
    <h2>Add Shopping List</h2>
    <form>
      <div class="field title row">
        <label for="title">Shopping List Name:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field item row">
        <label for="item">Add Item:</label>
        <input type="text" name="item" v-model="item">
      </div>
      <div>
        <button class="btn blue darken-3">Add List</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Shopping',
    data(){
      return{}
    },
  }
</script>

<style>

</style>
