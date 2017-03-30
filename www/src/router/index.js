import Vue from 'vue'
import Router from 'vue-router'
import VaultKeeper from '@/components/VaultKeeper'
import Login from'@/components/Login'
import Register from'@/components/Register'
import Vault from'@/components/Vault'
import Keep from '@/components/Keep'
import EditKeep from '@/components/EditKeep'
import NewKeep from '@/components/NewKeep'
import KeepList from '@/components/KeepList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VaultKeeper',
      component: VaultKeeper
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }, 
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/vault/:vaultId',
      name:'Vault',
      component:Vault,
      children:[
        { path:'new',name:'keep.new', component: NewKeep },
      ]
    },
    {
      path:'keep/',
      name:'Keep',
      component:Keep,
      children:[
       { path:'edit',name:'keep.edit', component: EditKeep }, 
        {path:'/',name:"keeplist", component:KeepList}
      ]
    }
 
  ]
})
