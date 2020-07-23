<template>
  <div class="card border-dark text-center h-100 w-100 rounded-0">
    <div class="card-body bg-dark text-white">
      <div class="row">
        <div class="col">
          <strong class="h2 font-weight-bold">99,7</strong>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <em class="h5">A rádio que toca o seu coração!</em>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <span class="h4">Tocando Agora</span>
        </div>
      </div>
      <div class="row my-2">
        <div class="col">
          <b-icon animation="fade" icon="bar-chart" font-scale="1.5" variant="danger" shift-v="1" />
          <b-icon animation="fade" icon="bar-chart" font-scale="1.5" variant="danger" flip-h shift-v="1" />
          <b-icon animation="fade" icon="bar-chart" font-scale="1.5" variant="danger" flip-v shift-v="-8" />
          <b-icon animation="fade" icon="bar-chart" font-scale="1.5" variant="danger" flip-v flip-h shift-v="-8" />
          <b-icon animation="fade" icon="bar-chart" font-scale="1.5" variant="danger" shift-v="1" />
          <b-icon animation="fade" icon="bar-chart" font-scale="1.5" variant="danger" flip-h shift-v="1" />
          <b-icon animation="fade" icon="bar-chart" font-scale="1.5" variant="danger" flip-v shift-v="-8" />
          <b-icon animation="fade" icon="bar-chart" font-scale="1.5" variant="danger" flip-v flip-h shift-v="-8" />
          <b-icon animation="fade" icon="bar-chart" font-scale="1.5" variant="danger" shift-v="1" />
          <b-icon animation="fade" icon="bar-chart" font-scale="1.5" variant="danger" flip-h shift-v="1" />
          <b-icon animation="fade" icon="bar-chart" font-scale="1.5" variant="danger" flip-v shift-v="-8" />
          <b-icon animation="fade" icon="bar-chart" font-scale="1.5" variant="danger" flip-v flip-h shift-v="-8" />
        </div>
      </div>
    </div>
    <div class="card-footer bg-dark p-0">
      <button v-if="!plaing" class="btn rounded-circle mx-2 my-0" @click="play" >
        <b-iconstack font-scale="3" >
          <b-icon stacked icon="circle-fill" variant="danger"></b-icon>
          <b-icon stacked icon="play-fill" variant="light" scale="0.5"></b-icon>
        </b-iconstack>
      </button>
      <button v-else class="btn rounded-circle mx-2 my-0" @click="pause" >
        <b-iconstack font-scale="3">
          <b-icon stacked icon="circle-fill" variant="danger"></b-icon>
          <b-icon stacked icon="stop-fill" variant="light" scale="0.5"></b-icon>
        </b-iconstack>
      </button>
    </div>
  </div>
</template>

<script>
import logo from '../assets/logo.png'

export default {
  data () {
    return {
      url: 'http://radcom1.rwpainelcast.live:7034/stream',
      player: new Audio(),
      plaing: false,
      logo: logo
    }
  },
  mounted () {
    this.player.src = this.url
    this.play()
  },
  beforeDestroy () {
    this.pause()
  },
  methods: {
    play () {
      this.player.play()
      this.plaing = true
    },
    pause () {
      this.player.pause()
      this.plaing = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn:focus {
    box-shadow: none !important;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>
