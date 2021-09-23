//import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//import { baseApiUrl } from '@/global'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        validtoken: false,
        load: false,
        flagNewFixedBill: false,
        flagNewInput:false,
        header: {
            icon: "" || "fa fa-cog",
            color: "" || "#00FF00",
            title: "" || "Default",
        },
    },
    mutations: {
        
        validToken(state, isValid) {
            if (isValid === undefined) {
                state.validtoken = !state.validtoken
            } else {
                state.validtoken = isValid
            }
        },
        loadBuy(state) {
          
            state.load = !state.load
        },
        flagNewFixed(state, isValid) {
            if (isValid === undefined) {
                state.flagNewFixedBill = !state.flagNewFixedBill
            } else {
                state.flagNewFixedBill = isValid
            }
            //console.log(state.flagNewFixedBill);
        },
        flagNewInput(state, isValid) {
            if (isValid === undefined) {
                state.flagNewInput = !state.flagNewInput
            } else {
                state.flagNewInput = isValid
            }
            //console.log(state.flagNewInput);
        },
        loadHeader(state, obj) {
            state.header.title = obj.name
            state.header.icon = obj.icon
            state.header.color = obj.color

        },
        setUser(state, user) {
            state.user = user
            if (user) {
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
                state.isMenuVisible = true
            } else {
                delete axios.defaults.headers.common['Authorization']
                state.isMenuVisible = false
            }
        }
    }
})

/* export default new Vuex.Store({
    state: {
        isMenuVisible: false,
        user: null
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if(!state.user) {
                state.isMenuVisible = false
                return
            }

            if(isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }
        },
        setUser(state, user) {
            state.user = user
            if(user) {
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
                state.isMenuVisible = true
            } else {
                delete axios.defaults.headers.common['Authorization']
                state.isMenuVisible = false
            }
        }
    }
}) */