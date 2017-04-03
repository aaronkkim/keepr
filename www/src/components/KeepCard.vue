<template>  
     <div class="row">
        <div v-for="(keep,index) in keeps">
        <div class="col s12 m4">
          <div class="card small">
            <div class="card-image">
              <img :src="keep.imageUrl" alt ="">
              <span class="card-title">{{keep.name}}</span>
            </div>
              <div class="card-content">
               <p>{{keep.description}}</p>
              <button @click ="deleteKeep(keep, index)" button class="waves-effect waves-light btn">Delete</button>
             <router-link :to="{name: 'keep.add'}"><button class="waves-effect waves-light btn">Add To Vault</button></router-link>
            </div> 
            <div class="card-action">
        </div>
      </div>
    </div>
 </div> 
</div>
</template>
<script>
    export default{
        name: 'keepCard',
        computed:{
               keeps() {
                return this.$root.$data.store.state.keeps
            }
        }
    }
</script>
<style> 
</style>