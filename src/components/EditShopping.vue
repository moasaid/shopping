<template>
  <div>
    <div v-if="shopping">

    </div>
    <div class="edit_shopping">
      <h3>Edit: {{ shopping.title }}</h3>
    </div>
  </div>
</template>

<script>
  import db from '@/firebase/init'

  export default {
  name: 'EditShopping',
    data(){
    return{
      shopping: null
    }
    },
    created() {
    let ref = db.collection('shopping_list').where('slug', '==', this.$route.params.shopping_slug)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.shopping = doc.data()
          this.shopping.id = doc.id
        })
      })
    }
  }
</script>

<style>

</style>
