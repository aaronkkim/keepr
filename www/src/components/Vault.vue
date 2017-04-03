<template>
    <div>
       <h1> 
        {{vault.name}} 
       </h1>
      <img :src="vault.imageUrl" alt="">
       <h3>
        {{vault.description}}
       </h3>

      <router-link :to="{name: 'keep.new'}"><button class="waves-effect waves-light btn">New Keep</button></router-link>
 
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
             <router-link :to="{name: 'keep.add'}"><button class="waves-effect waves-light btn" @click="activeKeep(keep)">Add To Vault</button></router-link>
            </div> 
            <div class="card-action">
            
            </div>
          </div>
        </div>
      </div>
            </div>
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
        methods:{
            deleteKeep(keep,index){
                this.$root.$data.store.actions.deleteKeep(keep,index)
            },
            activeKeep(keep){
                this.$root.$data.store.actions.activeKeep(keep)
                console.log( this.$root.$data.store.state.activeKeep)
            }
        }
          

     
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