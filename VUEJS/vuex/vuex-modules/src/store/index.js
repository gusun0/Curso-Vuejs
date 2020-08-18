import Vue from 'vue'
import Vuex from 'vuex'
import tareas from '../modules/tareas'
import contador from '../modules/contador'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // tareas: ['tarea 1', 'tarea 2', 'tarea 3']
    hola: 'desde store.js forma global'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tareas,
    contador
  }
})
