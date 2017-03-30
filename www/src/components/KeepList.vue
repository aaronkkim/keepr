<template>
    <div>
       
     
        <div class="flex-container" >
        <ShowKeep v-for="(keep,index) in keeps" :keep="keep" :index="index" class="keep"> 
         <div class="col s12 m3">
        
            <h1>{{keep.name}}</h1>
        </div>
        </ShowKeep>

        </div>
    
    </div>
</template>
<script>
    import ShowKeep from './ShowKeep'
    export default {
        name: 'KeepList',
        components: { ShowKeep },
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