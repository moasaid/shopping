<template>
  <div class='navbar'>
    <nav class='nav-extended blue darken-3'>
      <div class='nav-content'>
        <router-link :to="{name: 'Index'}">
          <span class='nav-title'>Your Shopping List</span>
        </router-link>
        <a href="" class='btn-floating btn-large halfway-fab amber accent-4'>
          <router-link :to="{name: 'Shopping'}">
            <i class='material-icons'>add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data(){
      return{}
    },
  }
</script>

<style>
  .navbar nav{
    padding: 0 20px;
  }

  .nav-extended .nav-content{
    text-align: left;
    padding: 0 60px;
  }

  .nav-title{
    font-weight: bold;
  }
</style>
