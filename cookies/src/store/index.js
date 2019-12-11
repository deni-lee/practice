import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)
Vue.use(Cookies)

export default new Vuex.Store({
    state: {
        test: Cookies.get('tset'),

    },
    mutations: {
        plus() {

        }
    },
    actions: {},
    modules: {}
})