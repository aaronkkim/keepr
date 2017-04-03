
<template>
    <div>
    <h1>Welcome to Keepr</h1>
       
        <div class="row" v-if= user.name>
            <form class="col s12" @submit.prevent="addVault">

                <div class="input-field col s4">
                    <input required="true" type="text" placeholder="name" v-model="newVault.name">
                    <input type="text" placeholder="ImageUrl" v-model="newVault.imageUrl">
                    <textarea required="true" type="text" placeholder="Description" v-model="newVault.description"></textarea>
                    
                </div>
                <button class="waves-effect waves-light btn">add</button>
            </form>
        </div>

     
     
       <div class="row">
        <div v-for="vault in vaults">
        <div class="col s10 offset-s1 ">
          <div class="card ">
            <div class="card-image">
              <img :src="vault.imageUrl" alt ="">
              <span class="card-title"></span>
            </div>
            <div class="card-content">
              <p>{{vault.description}}</p>
            </div>
            <div class="card-action">
               <router-link :to="'vault/'+vault._id">{{vault.name}} </router-link>
            </div>
          </div>
        </div>
      </div>
            </div>

      
      
     
    </div>
</template>


<script>
export default {
  name: 'vaultKeeper',
  data () {
    return {
      newVault:{
        name:'',
        description:'',
        imageUrl:''
      }
    }
  },
     mounted() {
            this.$root.$data.store.actions.getVaults()
        },
        computed: {
            vaults() {
                return this.$root.$data.store.state.vaults
            },
            user() {
                return this.$root.$data.store.state.activeUser
            }
        },
        methods: {
            addVault() {
                this.$root.$data.store.actions.addVault(this.newVault)
            },
            removeVault(vault) {
                this.$root.$data.store.actions.removeVault(vault)
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
