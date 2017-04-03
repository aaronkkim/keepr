<template> 
   <form action="#">
   <div>
   <h2> Vaults to add keep</h2>
   <div v-for="(vault,index) in vaults">
    <p>
      <input name="group1" type="radio" :id="index" class="with-gap" :value="vault._id" v-model="vaultId" />
      <label :for="index">{{vault.name}}</label>
    </p>
   </div>
   <button @click="addToVault">Add to Vault</button>
   </div>
  
  </form>
</template>

<script>    

    export default {
        name: 'KeepToVaultForm',
        data(){
            return{
                vaultId:'',
              
            }
        },
          mounted() {
            this.$root.$data.store.actions.getUserVaults()
        },
        computed:{
            vaults(){
                   return this.$root.$data.store.state.userVaults
            },
            activeKeep(){
                return this.$root.$data.store.state.activeKeep
            }

        },
        methods:{
            addToVault(){
                console.log(this.vaultId)
              this.$root.$data.store.actions.addToVault({vaultId:this.vaultId,keepId:this.activeKeep._id})
            }
        }
    }
</script>


<style>
 </style>