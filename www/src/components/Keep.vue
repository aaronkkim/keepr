<template>
  


        <router-view></router-view>

 
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