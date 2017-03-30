<template>
    <div>
       <h1> 
        {{vault.name}} {{vault.description}}
       </h1>
      <router-link :to="{name: 'keep.new'}">New Keep</router-link>
        <div class="flex-container" >
 

        <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Keep from './Keep'
    export default {
        name: 'vault',
        components: { Keep },
        data() {
            return {
                newKeep: {
                    name: '',
                    description: '',
                    imageUrl: '',
                    vaultId: this.$route.params.vaultId
                
                }
            }
        },
        mounted() {
            this.$root.$data.store.actions.getVault(this.$route.params.vaultId)
        },
        computed: {
            vault() {
                return this.$root.$data.store.state.activeVault
            },
            keeps() {
                return this.$root.$data.store.state.keeps
            }
        },
     
    }
</script>

<style>
.flex-container{
    width:100%;
    display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
}
   .list {
        width: 20vw;
        height: 100%;
        background: #A3C6C4;
        margin: 35px;
        border-radius: 10px;
        
        
    }
</style>