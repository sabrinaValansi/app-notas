import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario.vue'
import Respuestas from './components/Respuestas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path:'/', redirect: '/notas'},
        { path:'/notas', component: Formulario},
        { path:'/respuestas', component: Respuestas},
    ]
})