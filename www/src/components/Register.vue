<template>
    <div class="container">

<div class="row">
    <form  class="col s12" @submit.prevent="register">
        <div class="input-field col s12">
            <input required="true" type="text" placeholder="Name" v-model="name" id="name">
            <label for="name">Name</label>
        </div>
        <div class="input-field col s12">
            <input required="true" type="text" placeholder="Email" v-model="email" id="email">
            <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
            <input required="true" type="text" placeholder="Password" v-model="password" id="password">
            <label for="password">Password</label>
        </div>

        <button class="waves-effect waves-light btn">Register</button>
    </form>
</div>

    </div>
</template>

<script>
export default {
    name: 'register',
    data(){
        return {
        name: '',
        email:'',
        password:''
        }
    },
     methods:{
        register(){
            this.$root.$data.store.actions.register(this.name,this.email, this.password)
            this.$router.push('/')
        }
     }
}
</script>