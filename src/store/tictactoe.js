/* eslint-disable */

const state = {
  tictactoeBoard: {
    pos1: 0,
    pos2: 0,
    pos3: 0,
    pos4: 0,
    pos5: 0,
    pos6: 0,
    pos7: 0,
    pos8: 0,
    pos9: 0,
  },
  turnPlayer: 1
};

const getters = {
  tictactoeBoard: state => state.tictactoeBoard,
  turnPlayer: state => state.turnPlayer,
};

const actions = {
  checkWinner({ state, commit }) {
    console.log('check winner')
  },
  selectPostion({ state, commit, dispatch }, pos) {
    const {
      turnPlayer,
      tictactoeBoard,
    } = state;
    const posistionKey = `pos${pos}`;
    if (tictactoeBoard[posistionKey] == 0) {
      const updateData = {
        [posistionKey]: turnPlayer
      };
      commit('SET_BOARD_POSITION', updateData);
      if (turnPlayer == 1) {
        commit('CHANGE_TURN', 2);
      } else {
        commit('CHANGE_TURN', 1);
      }
      dispatch('checkWinner')
    }
  },
  refresh({ commit }) {
    commit('CLEAR_BOARD');
  },
};

const mutations = {
  SET_BOARD_POSITION(state, data) {
    Object.assign(state.tictactoeBoard, data);
  },
  CHANGE_TURN(state, data) {
    state.turnPlayer = data;
  },
  CLEAR_BOARD(state) {
    state.tictactoeBoard = {
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
      pos5: 0,
      pos6: 0,
      pos7: 0,
      pos8: 0,
      pos9: 0,
    };
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
