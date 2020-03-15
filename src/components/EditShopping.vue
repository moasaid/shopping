<template>
  <div class="shopping">
    <div class="edit_shopping" v-if="shopping_list">
      <h3>Edit: {{ shopping_list.title }}</h3>
      <form @submit.prevent="editShopping()">
      <div class="field title">
        <label class="left" for="title">Shopping List Name:</label>
        <input type="text" name="title" v-model="shopping_list.title" />
      </div>
      <div v-for="(it, index) in shopping_list.items" :key="index" class="field">
        <label class="left" for="item">Item:</label>
        <i class="material-icons tiny right delete" @click="deleteIt(it)">clear</i>
        <input type="text" name="item" v-model="shopping_list.items[index]" />
      </div>
      <div class="field item">
        <label class="left" for="item">Add Item:</label>
        <input type="text" name="item" @keydown.tab="addItem" v-model="another" />
      </div>
      <p v-if="feedback" class="red-text">{{feedback}}</p>
      <div>
        <button class="btn blue darken-3">Update List</button>
      </div>
    </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "EditShopping",
  data() {
    return {
      shopping_list: null,
      another: null,
      feedback: null
    };
  },
  created() {
    let ref = db
      .collection("shopping_list")
      .where("slug", "==", this.$route.params.shopping_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.shopping_list = doc.data();
        this.shopping_list.id = doc.id;
      });
    });
  },
  methods: {
    editShopping(){
      console.log(this.shopping_list.title, this.shopping_list.items)
    },
    deleteIt(it) {
      this.shopping_list.items = this.shopping_list.items.filter(item => {
        // the items defined in data method is equal to following filtered method
        return item != it; // return all items that are not equal to 'it' the deleted item.
      });
    },
    addItem() {
      {
        if (this.another) {
          this.shopping_list.items.push(this.another);
          this.another = null;
          this.feedback = null;
        } else {
          this.feedback = "Please enter an Item";
        }
      }
    }
  }
};
</script>

<style>
.shopping {
  margin: auto;
  padding: 30px 20px;
  max-width: 60%;
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
