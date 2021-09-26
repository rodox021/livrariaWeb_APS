import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/home.vue'
import Login from '@/components/login/login.vue'
import Cadastro from '@/components/cadastro/cadastro.vue'
import Video from '@/components/videopromo/videopromo.vue'

Vue.use(VueRouter)


const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'cadastro',
        path: '/cadastro',
        component: Cadastro
    },
    {
        name: 'video',
        path: '/videopromo',
        component: Video
    }
]


export default new VueRouter({
    mode: 'history',
    routes
})
