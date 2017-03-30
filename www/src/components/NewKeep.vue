<template> 
<div>
<keepForm :keep='keep' :action='`New`'></keepForm>
<router-view></router-view>
</div> 
</template>
<script>
import KeepForm from'./KeepForm'
export default {
    name: 'new-keep',
    components:{KeepForm},
    data(){
        return{
            keep:{
                vaultId:this.$route.params.vaultId
            }
            
        }
    }

 
        
}

</script>
<style>
</style>