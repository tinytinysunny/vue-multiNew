import Vue from 'vue'
import VueRouter from 'vue-router';
import Rule from '../rule.vue';
import List from '../list.vue'
Vue.use(VueRouter);

export default new VueRouter({
    // mode:'history',
    routes:[
        {
            path:'/rule',
            name:'rule',
            component:Rule
        },{
            path:'/',
            name:'list',
            component:List
        }
    ]
})