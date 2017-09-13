import Vue from 'vue'
import Vuex from 'vuex'

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
  getters: {
    unregisteredUsers(state) {
      return state.users.filter(user => {
        return !user.registered
      })
    },
    registrations(state) {
      return state.registrations
    },
    totalRegistrations(state) {
      return state.registrations.length
    }
  }
})
