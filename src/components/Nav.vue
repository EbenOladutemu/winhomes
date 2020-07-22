<template>
  <nav id="nav" class="navbar navbar-expand-lg fixed-top custom-nav sticky">
    <div class="container">

      <a class="navbar-brand pt-0 logo" href="#">
        <img src="../assets/img/winhomes-light.png" alt="" class="img-fluid logo-light">
        <img src="../assets/img/winhomes.png" alt="" class="img-fluid logo-dark">
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="mdi mdi-menu" @click="toggleClose" v-show="!showClose"></span>
        <span class="mdi mdi-close" @click="toggleClose" v-show="showClose"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="home">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="about">About</router-link>
          </li>
          <slot name="nav-items" @click="toggleClose2" v-show="!showClose"></slot>
          <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="projects">Projects</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      showClose: false,
      isActive: ''
    }
  },
  methods:{
    linkActive(){
      this.isActive = 'active'
    },
    toggleClose(){
      this.showClose = !this.showClose
    },
    toggleClose2(){
      alert ('Boy')
      this.showClose = !this.showClose
    }
  }

}
</script>

<style scoped lang="scss">
html{
  scroll-behavior: smooth;
}
#nav {
  padding: 10px 0px;
  a {
    font-size: 18px;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #c40201!important;
    }
  }
}
.custom-nav .navbar-brand .logo-light, .custom-nav .navbar-brand .logo-dark {
  height: 55px;
  width: 70px;
}
</style>