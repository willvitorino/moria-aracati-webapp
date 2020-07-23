<template>
  <section id="video" ref="video" class="container-fluid mx-0 px-0 text-center">
    <iframe v-if="!loading" :style="style" src="https://playerv.uaihost.video/video/tvmoria/1/true/false/YzNKMk1TNTFZV2xvYjNOMExuWnBaR1Z2K1o/16:9/" scrolling="no" allowfullscreen="allowfullscreen" frameborder="0">
    </iframe>
  </section>
</template>

<script>
// import { videoPlayer } from 'vue-videojs7'

export default {
  components: {
    // videoPlayer
  },
  beforeUpdate () {
    console.log(this.$refs.video.clientWidth)
  },
  data () {
    return {
      src: 'https://playerv.uaihost.video/768ea72d-2e58-4010-bff1-7e92bdc1a7d5',
      // src: 'http://01.paineldevideo.com/tvmoria/tvmoria/playlist.m3u8',
      // https://playerv.uaihost.video/768ea72d-2e58-4010-bff1-7e92bdc1a7d5
      options: {
        autoplay: true,
        controls: true,
        controlBar: {
          timeDivider: false,
          durationDisplay: false
        }
      },
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      loading: true
    }
  },
  mounted () {
    const { clientWidth } = this.$refs.video
    this.style.height = `${parseInt(clientWidth / 1.77)}px`
    this.style.width = `${clientWidth}px`
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
  #video {
    width: 100%;
    // height: 100%;
    border-color: black;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>
