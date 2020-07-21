<template>
  <section id="video" class="container-fluid mx-0 px-0 text-center">
    <video-player
      ref="videoPlayer"
      class="vjs-custom-skin"
      :options="options"
      @play="onPlayerPlay($event)"
      @ready="onPlayerReady($event)">
    </video-player>
  </section>
</template>

<script>
import { videoPlayer } from 'vue-videojs7'

export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      src: 'http://01.paineldevideo.com/tvmoria/tvmoria/playlist.m3u8',
      options: {
        autoplay: true,
        controls: true,
        controlBar: {
          timeDivider: false,
          durationDisplay: false
        }
      }
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  mounted () {
    // const src = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
    this.playVideo(this.src)
  },
  methods: {
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerReady (player) {
      console.log('player ready!', player)
      this.player.play()
    },
    playVideo: function (source) {
      const video = {
        withCredentials: false,
        type: 'application/x-mpegurl',
        src: source
      }
      this.player.reset() // in IE11 (mode IE10) direct usage of src() when <src> is already set, generated errors,
      this.player.src(video)
      this.player.play()
    }
  }
}
</script>

<style lang="scss" scoped>
  #video {
    width: 100%;
    height: 100%;
    background-color: black;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
