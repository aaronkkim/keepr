<template>
    
<div class="navbar-fixed">
<nav>
    <div class="nav-wrapper" v-if ="!user.name">
      <a href="#" class="brand-logo">Keepr</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="#"><router-link to="/login">Login</router-link></a></li>
        <li><a href="#"><router-link to="/register">Register</router-link></a></li>
        
      </ul>
    </div>
    <div class="nav-wrapper" v-else> 
      <a href="#" class="brand-logo">Keepr</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>Welcome, {{user.name}}!</li>
    <li><a href="#" @click="logout"> Logout</a></li>
      </ul>
    </div>
  </nav>
    

</div>

    

</template>
<script>
import Register from './Register'
export default {
    name: 'navbar',
    components: {Register},
    mounted(){
      this.$root.$data.store.actions.authenticate()
    },
  
   computed:{
     user(){
       return this.$root.$data.store.state.activeUser
     }
       
    },
    methods:{
      logout(){
            this.$root.$data.store.actions.logout()
           
        }
    }
    
}
</script>
<style lang="scss">

nav{
  background: black;
  color:#ff009f;
  a.brand-logo{
      @extend nav;
     
  }
}

</style>