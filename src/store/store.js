import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    registrations: [],
    users: [
      {id: 1, name: 'Luke', registered: false},
      {id: 2, name: 'Solo', registered: false},
      {id: 3, name: 'Siman', registered: false},
      {id: 4, name: 'Amanda', registered: false}
    ]
  },
  getters,
  mutations,
  actions
})
