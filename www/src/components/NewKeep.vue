<template> 
<div class = "newKeepContainer">
<keepForm class="form-modal" :keep='keep' :action='`New`'></keepForm>

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
<style lang = "scss">
.newKeepContainer{
    height:100%;
    width:100%;
    z-index: 3;
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;

}
.form-modal{
    color:azure;
    position:relative;
    width: 50%;
    height: 50%;
    background: #2c3e50;
    box-shadow: 0 0 15px rgba(black,0.8);
    margin-top: 25%;
    margin-left: 25%;
    border-radius: 10px;
}
</style>