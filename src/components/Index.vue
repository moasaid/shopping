<template>
  <div class="index container">
    <div class="card" v-for="shopping in shopping_list" :key="shopping.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteShopping(shopping.id)">delete</i>
        <h2>{{ shopping.title }}</h2>
        <ul class="ingredients">
          <li v-for="(item, index) in shopping.items" :key="index" >
            <span class="chip">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import db from '@/firebase/init'

  export default {
  name: 'Index',
  data () {
    return {
      shopping_list: []
    }
  },
  methods: {
    deleteShopping(id) {
      db.collection('shopping_list').doc(id).delete()
        .then(() => {
          this.shopping_list = this.shopping_list.filter(shopping => {
            return shopping.id != id
          })
        })
    }
  },
  created(){
    db.collection('shopping_list').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let shopping = doc.data()
        shopping.id = doc.id
        this.shopping_list.push(shopping)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;
  }

  .index h2{
    font-size: 1.8em;
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    color: #1565C0;
  }

  .index .ingredients{
    margin: 30px auto;
  }

  .index .ingredients li{
    display: inline-block;
 }
  .index .delete {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    color: #aaa;
    font-size: 1.4em;
  }
</style>
