<template>
   <div class="col s12 m4">
        <div class="track card medium">

            <div class="card-image">
                <img  :src="keep.imageUrl">

            </div>
            <div class="card-content">
                <p class="truncate">{{keep.name}}</p>
                <p class="truncate">{{keep.description}}</p>
                <button class="btn btn-primary"  @click=""> Add to Vault</button>
                <button class="btn btn-primary"  @click="removeKeep"> Remove Keep</button>
            </div>
            <div class="card-reveal black-text grey darken-3">
                <p><button class="card-title activator">Close</button></p>
              
            </div>
        <router-view></router-view>
        </div>
        </div>

 
</template>

<script>
   
    export default {
        name: 'keep',
        props: {
            keep:{
                type:Object,
                default(){
                    return this.$root.$data.store.state.keep
                }
            }
        },
  
        mounted(){
            if(this.$route.params.id){
            this.$root.$data.store.actions.getKeep({_id:this.$route.params.id})
            }
        },
        computed:{
            keep(){
                 this.$root.$data.store.state.keeps
            }
        },
        methods:{
              removeKeep() {
                this.$root.$data.store.actions.removeKeep(keep, this.index)
        }
       
      
        
    }
    }
</script>

<style>
    .card-image {
        overflow: hidden;
        border-radius: 10px;
        
    }
    
 
    .card{ 
        border-radius: 10px;
    }
</style>