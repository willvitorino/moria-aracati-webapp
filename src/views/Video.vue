<template>
  <section id="video" ref="video" class="container-fluid mx-0 px-0 text-center h-100 w-100">
    <iframe v-if="!loading" :style="style" src="https://playerv.uaihost.video/video/tvmoria/1/true/false/YzNKMk1TNTFZV2xvYjNOMExuWnBaR1Z2K1o/16:9/" scrolling="no" allowfullscreen="allowfullscreen" frameborder="0">
    </iframe>
  </section>
</template>

<script>
export default {
  beforeUpdate () {
    console.log(this.$refs.video.clientWidth)
  },
  data () {
    return {
      src: 'https://playerv.uaihost.video/768ea72d-2e58-4010-bff1-7e92bdc1a7d5',
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
    height: 99vh;
    background-color: black;
  }
</style>
