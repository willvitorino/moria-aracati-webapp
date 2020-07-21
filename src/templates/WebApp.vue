<template>
  <section id="main-template">
    <section id="main-header" class="fixed-top sticky-top">
      <span>Rádio Moriá 99'7</span>
    </section>
    <section id="main-body" class="container-fluid p-0" >
      <div id="left-menu" class="d-none d-sm-block" >
        <div class="content">
          <router-link to="/radio" class="text-white my-3" >
            <b-icon icon="mic-fill" font-scale="2" ></b-icon>
          </router-link>
          <router-link to="/tv" class="text-white my-3" >
            <b-icon icon="display-fill" font-scale="2"></b-icon>
          </router-link>
        </div>
      </div>
      <div id="content" class="container-fluid px-0 mx-0">
        <div class="row h-75">
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
            <router-view />
          </div>
          <div class="col text-center">
            Lista de Programas
          </div>
        </div>
        <a href="https://wa.me/5588998664393" class="zap lg" role="button">
          <b-iconstack font-scale="3">
            <b-icon stacked icon="chat-dots-fill" variant="success" scale="0.5"></b-icon>
            <b-icon stacked icon="circle" variant="success"></b-icon>
          </b-iconstack>
        </a>
      </div>
    </section>
    <section id="main-footer" class="fixed-bottom sticky-bottom d-block d-sm-none" >
      <div class="row">
        <div class="col item-navigation border-right border-primary">
          <router-link to="/radio" class="btn btn-md btn-primary px-5 shadow-lg">
            <b-icon icon="mic-fill"></b-icon>
          </router-link>
        </div>
        <div class="col item-navigation border-left border-primary">
          <router-link to="/tv" class="btn btn-md btn-primary px-5 shadow-lg">
            <b-icon icon="display-fill"></b-icon>
          </router-link>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #main-template {
    #main-header {
      height: 7.5vh;
      background-color: var(--primary);
      color: white;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      font-weight: bold;
    }
    #main-body {
      display: flex;
      flex-direction: row;
      height: calc(100vh - 7.5vh);
      background-color: var(--light);

      > #left-menu {
        width: 5vw;
        color: var(--white);
        background-color: var(--primary);
        > .content {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
      }

      > #content {
        overflow-x: hidden;
      }

    }
    #main-footer {
      height: 7.5vh;

      * > .item-navigation {
        display: flex;
        margin-bottom: 1rem;
        justify-content: center;
        align-items: center;
      }
    }
    .zap {
      position: absolute;
      bottom: calc(7.5vh + 1rem);
      right: 1rem;
      border-radius: 2rem;
      background-color: transparent !important;
    }
  }
</style>
