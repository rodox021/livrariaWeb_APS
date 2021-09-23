import Vue from 'vue'
import VueRouter from 'vue-router'


import {userKey} from '@/global'
import Board from '../components/pages/DashBoard/Board'
import Buy from '../components/pages/buy/Buy'
import Config from '../components/pages/config/Config'
import Login from '../components/pages/auth/login/Login'
import NewBuy from '../components/pages/buy/newBuy/NewBuy'
import Invoice from '../components/pages/invoice/Invoice'
import FixedBill from '../components/pages/fixedbill/FixedBill'
import Inputs from '../components/pages/input/Input'




Vue.use(VueRouter)

const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login
    }, 
    {
        name: 'dashboard',
        path: '/',
        component: Board
    },
    {
        name: 'shopping',
        path: '/shopping',
        component: Buy
    }, 
    {
        name: 'invoice',
        path: '/invoice',
        component: Invoice
    }, 
    {
        name: 'payment',
        path: '/payment',
        component: Config
    }, 
    {
        name: 'newbuy',
        path: '/newbuy',
        component: NewBuy
    }, 
    {
        name: 'fixedbills',
        path: '/fixedbills',
        component: FixedBill
    }, 
    {
        name: 'inputs',
        path: '/inputs',
        component: Inputs
    }, 
   
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/' })
    } else {
        next()
    }
}) 

export default router
