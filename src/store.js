import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import TicTacToe from './store/tictactoe';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TicTacToe,
  },
  plugins: [createPersistedState()],
});
