<template>  
 <form class="col s12" @submit.prevent="sendKeep">
 <h1>{{action}} Keep</h1>
            <div class="input-field col s2">
                <input required="true" type="text" placeholder="Name" v-model="keep.name">
                <input type="text" placeholder="ImageUrl" v-model="keep.imageUrl">
                <input required="true" type="text" placeholder="Description" v-model="keep.description">
            </div>
            <button class="waves-effect waves-light btn">add</button>
             <button class="waves-effect waves-light btn" @click="redirect">Nevermind</button>
        </form>
</template>
<script>  
import router from '../router'
export default {
    name: 'keep-form',
    props:{
        keep:{
            type: Object,
            required: true
        },
        action:{
            type: String,
            required: true
        }
    },
      methods: {
            sendKeep() {
                var sendFunc;
                if(!this.keep._id){
                    sendFunc = this.$root.$data.store.actions.sendKeep
                }
                else{
                    sendFunc = this.$root.$data.store.actions.editKeep
                }
                sendFunc(this.keep)
                .then(res=>{
                    console.log('keep or vault???  ',  res)
                    let vault =res.data.data 

                    this.$root.$data.store.actions.getVaultKeeps(vault._id)
                    this.redirect()
                }).catch(console.error)
                
            },
            redirect(){
                  router.push({name: 'Vault', params:{vaultId: this.$route.params.vaultId}})
            }
        }
}  
</script>
<style> 
</style>