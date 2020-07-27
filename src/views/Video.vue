<template>
  <section id="video" ref="video" class="container-fluid mx-0 px-0 text-center h-100 w-100">
    <div class="embed-responsive embed-responsive-4by3">
      <iframe class="embed-responsive-item" :src="src" allowfullscreen></iframe>
    </div>
    <!-- <iframe v-if="!loading" :style="style" :src="src" scrolling="no" allowfullscreen="allowfullscreen" frameborder="0">
    </iframe> -->
  </section>
</template>

<script>
export default {
  beforeUpdate () {
    console.log(this.$refs.video.clientWidth)
  },
  data () {
    return {
      src: 'https://playerv.uaihost.video/video/tvmoria/1/true/false/YzNKMk1TNTFZV2xvYjNOMExuWnBaR1Z2K1o/4:3/',
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
    this.style.height = `${parseInt(clientWidth / 1.33)}px`
    this.style.width = `${clientWidth}px`
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
  #video {
    width: 100%;
    height: 99vh;
    background-color: black;
    overflow-y: hidden;
  }
</style>
