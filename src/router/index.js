import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import User from '../views/user/index.vue'
import Home from '../views/home/index.vue'
import Mall from '../views/mall/index.vue'
import PageOne from '../views/other/PageOne.vue'
import PageTwo from '../views/other/PageTwo.vue'
import Login from '../views/login/Login.vue'
Vue.use(VueRouter)

const routes = [{

    path:'/',
    name:'main',
    component:Main,
    // redirect:'/home',
    children:[
    //     {
    //         path:'home',
    //         name:'home',
    //         component:Home
    //     },
    //     {
    //         path:'user',
    //         name:'user',
    //         component:User
    //     },
    //     {
    //         path:'mall',
    //         name:'mall',
    //         component:Mall
    //     },
    //     {
    //         path:'page1',
    //         name:'page1',
    //         component:PageOne
    //     },
    //    {
    //         path:'page2',
    //         name:'page2',
    //         component:PageTwo
    //     },

    ]

},
{
    path:'/login',
    name:'login',
    component:Login
}
]

const router =new VueRouter({
    mode:'history',
    routes
})

export default router