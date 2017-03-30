<template>  
<keepForm :keep='keep' :action='`Edit`'></keepForm>
</template>
<script>
import KeepForm from'./KeepForm'
export default {
    name: 'edit-keep',
    components:{KeepForm},

    mounted(){
            if(this.$route.params.id){
            this.$root.$data.store.actions.getKeep({_id:this.$route.params.id})
            }
        },
        computed:{
        keep(){
         this.$root.$data.store.state.keep
        }
        }
}

</script>
<style>
</style>