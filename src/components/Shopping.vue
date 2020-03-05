<template>
  <div class="shopping container">
    <h2>Add Shopping List</h2>
    <form>
      <div class="field title">
        <label class="left" for="title">Shopping List Name:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field item">
        <label class="left" for="item">Add Item:</label>
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
      return{
        title: null
      }
    },
  }
</script>

<style>
  .shopping{
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
  }

  .shopping h2 {
    font-size: 2em;
    margin: 20px auto;
    padding-bottom: 20px;
    font-weight: bold;
  }

  .shopping .field {
    margin: 20px auto;
  }

</style>
