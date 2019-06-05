
<template>
  <div>
    <div class="welcome-title">
      Welcome to tictactoe game
    </div>
    <div class="winner" v-if="end">
      Player {{winner}} is the winner.
    </div>
    <div class="turnbase-information">
      <div class="turn">
        Turn : Player {{turnPlayer}} ({{turnPlayer == 1 ? 'X' : 'O' }})
      </div>
      <div class="refresh">
        <span class="click-refresh" @click="refresh">Restart</span>
      </div>
    </div>
    <div class="tictactoe-board">
      <TictactoeBoard />
    </div>
  </div>
</template>

<script>

  import {
    mapGetters,
    mapActions,
    mapMutations
  } from "vuex";
  import TictactoeBoard from '@/components/TictactoeBoard.vue'

  export default {
    name: 'home',
    components: {
      TictactoeBoard
    },
    mounted: function() {
    },
    methods: {
      ...mapActions('TicTacToe', ['refresh'])
    },
    computed: {
      ...mapGetters('TicTacToe', ['turnPlayer', 'end', 'winner',])
    }
  };
</script>
<style css>
  .welcome-title {
    font-size: 32px;
    margin-top: 25px;
    text-align: center;
  }
  .winner {
    color: red;
    text-align: center;
    padding: 15px;
    font-size: 25px;
    font-weight: 600;
  }
  .tictactoe-board {
    margin-top: 45px;
  }
  .turnbase-information {
    width: 30%;
    display: flex;
    margin: 25px auto;
  }
  .turn {
    font-size: 25px;
    padding: 25px;
    width: 50%;
    text-align: left;
  }
  .refresh {
    font-size: 25px;
    padding: 25px;
    width: 50%;
    text-align: right;
  }
  .click-refresh {
    cursor: pointer;
  }
  @media screen and (max-width: 768px){
    .turnbase-information {
      width: 80%;
    }
    .turn .refresh {
      width: 100%;
    }
  }
</style>
