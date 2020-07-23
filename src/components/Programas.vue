<template>
  <section id="programas">
    <span class="h5">Tocando Agora:</span>
    <label> {{ programas[atual] }} </label>
    <span class="h5">Próximo:</span>
    <label> {{ programas[next] }} </label>
  </section>
</template>

<script>
import moment from 'moment'
import { programas } from '../assets/programas.json'

export default {
  computed: {
    programas () {
      return programas[moment().format('dddd')]
    },
    atual () {
      return moment().format('HH')
    },
    next () {
      return Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format((Number(this.atual) + 1) % 24)
    }
  },
  data () {
    return {}
  },
  created () {
    moment.locale('pt-BR')
  }
}
</script>

<style lang="scss" scoped>
  #programas {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    justify-content: center;
  }
</style>
