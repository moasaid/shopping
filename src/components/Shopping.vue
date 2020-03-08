<template>
  <div class="shopping container">
    <h2>Add Shopping List</h2>
    <form @submit.prevent="addShopping()">
      <div class="field title">
        <label class="left" for="title">Shopping List Name:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div v-for="(it, index) in items" :key="index" class="field">
        <label class="left" for="item">Item:</label>
        <i class="material-icons tiny right delete" @click="deleteIt(it)">clear</i>
        <input type="text" name="item" v-model="items[index]">
      </div>
      <div class="field item">
        <label class="left" for="item">Add Item:</label>
        <input type="text" name="item" @keydown.tab="addItem" v-model="another">
      </div>
      <p v-if="feedback" class="red-text">{{feedback}}</p>
      <div>
        <button class="btn blue darken-3">Add List</button>
      </div>
    </form>
  </div>
</template>

<script>
  import db from '@/firebase/init'
  import slugify from 'slugify'

  export default {
    name: 'Shopping',
    data(){
      return{
        title: null,
        another: null,
        items: [],
        feedback: null,
        slug: null
       }
      },
    methods: {
      addShopping(){
        if(this.title){
          this.feedback = null
          this.slug = slugify(this.title, {
            replacement: '-', //add '-' wherever there are spaces between words
            remove: /[$*_+~.()'"!\-:@]/g, //remove the mentioned characters
            lower: true //all letters in lower case
          });
          db.collection('shopping_list').add({
            title: this.title,
            items: this.items,
            slug: this.slug
          })
            .then(() => {
              this.$router.push({name: 'Index'});
            })
            .catch(error => {
              console.log(error);
            })
        }else{
          this.feedback = 'Please enter an Shopping List Name';
        }
      },
      deleteIt(it){
        this.items = this.items.filter(item => { // the items defined in data method is equal to following filtered method
          return item != it; // return all items that are not equal to 'it' the deleted item.
        });
      },
      addItem() {
        {
          if (this.another) {
            this.items.push(this.another);
            this.another = null;
            this.feedback = null;
          } else {
            this.feedback = 'Please enter an Item';
          }
        }
      }
    }
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

  .shopping .delete {
    right: 0;
    bottom: 16px;
    color: #333;
    font-size: 1.2em;
    cursor: pointer;
  }

</style>
