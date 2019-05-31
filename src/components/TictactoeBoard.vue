<template>
  <div class="table">
    <table align="center" class="tictactoe">
      <tr>
        <td @click="selectPostion(1)">{{tictactoeBoard.pos1 == 1 ? 'X' : tictactoeBoard.pos1 == 2 ? 'O' : ''}}</td>
        <td @click="selectPostion(2)">{{tictactoeBoard.pos2 == 1 ? 'X' : tictactoeBoard.pos2 == 2 ? 'O' : ''}}</td>
        <td @click="selectPostion(3)">{{tictactoeBoard.pos3 == 1 ? 'X' : tictactoeBoard.pos3 == 2 ? 'O' : ''}}</td>
      </tr>
      <tr>
        <td @click="selectPostion(4)">{{tictactoeBoard.pos4 == 1 ? 'X' : tictactoeBoard.pos4 == 2 ? 'O' : ''}}</td>
        <td @click="selectPostion(5)">{{tictactoeBoard.pos5 == 1 ? 'X' : tictactoeBoard.pos5 == 2 ? 'O' : ''}}</td>
        <td @click="selectPostion(6)">{{tictactoeBoard.pos6 == 1 ? 'X' : tictactoeBoard.pos6 == 2 ? 'O' : ''}}</td>
      </tr>
      <tr>
        <td @click="selectPostion(7)">{{tictactoeBoard.pos7 == 1 ? 'X' : tictactoeBoard.pos7 == 2 ? 'O' : ''}}</td>
        <td @click="selectPostion(8)">{{tictactoeBoard.pos8 == 1 ? 'X' : tictactoeBoard.pos8 == 2 ? 'O' : ''}}</td>
        <td @click="selectPostion(9)">{{tictactoeBoard.pos9 == 1 ? 'X' : tictactoeBoard.pos9 == 2 ? 'O' : ''}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import {
  mapActions, mapGetters,
} from 'vuex';

export default {
  name: 'tictactoeBoard',
  methods: {
    ...mapActions('TicTacToe', ['selectPostion']),
  },
  computed: {
    ...mapGetters('TicTacToe', ['tictactoeBoard']),
  },
};
</script>
<style>
  .table {
    padding: 15px;
  }
  .tictactoe {
    font-size: 60px;
    border-collapse: collapse;
  }
  .tictactoe td {
    border: 4px solid #2c3e50;
    text-align: center;
    width: 150px;
    height: 150px;
    cursor: pointer;
  }
  @media screen and (max-width: 485px) {
    .tictactoe td {
      width: 90px;
      height: 90px;
    }
  }
</style>
