<template>
  <nav id="nav" class="navbar navbar-expand-lg fixed-top custom-nav sticky">
    <div class="container">

      <a class="navbar-brand pt-0 logo" href="#">
        <img src="img/logo.png" alt="" class="img-fluid logo-light">
        <img src="img/logo-dark.png" alt="" class="img-fluid logo-dark">
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="mdi mdi-menu"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="about">About</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="#services">Services</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="#clients">Clients</router-link>
          </li>
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

}
</script>

<style scoped lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983!important;
    }
  }
}
</style>