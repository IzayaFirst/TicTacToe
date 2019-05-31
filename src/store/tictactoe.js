/* eslint-disable */
import _ from 'underscore'

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
  end: false,
  winner: 0,
  turnPlayer: 1
};

const getters = {
  tictactoeBoard: state => state.tictactoeBoard,
  turnPlayer: state => state.turnPlayer,
};

const actions = {
  checkWinner({ state, commit }) {
    console.log('check winner')
    const {
      tictactoeBoard,
    } = state
    const player1 = []
    const player2 = []
    Object.keys(tictactoeBoard).forEach((pos) => {
      if(tictactoeBoard[pos] == 1) {
        player1.push(pos)
      } else if (tictactoeBoard[pos] == 2) {
        player2.push(pos)
      }
    })
    const winCase = [
      ['pos1', 'pos2', 'pos3'],
      ['pos4', 'pos5', 'pos6'],
      ['pos7', 'pos8', 'pos9'],
      ['pos1', 'pos4', 'pos7'],
      ['pos2', 'pos5', 'pos8'],
      ['pos2', 'pos5', 'pos8'],
      ['pos1', 'pos5', 'pos9'],
      ['pos3', 'pos5', 'pos7'],
    ]

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
  SET_END(state, data) {
    state.end = data;
  },
  SET_WINNER(state, data) {
    state.winner = data;
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
    state.turnPlayer = 1
    state.end = false
    state.winner = 0
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
