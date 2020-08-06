<template>
  <div>
    <Nav>
      <li class="nav-item" slot="nav-items">
          <a class="nav-link" active-class="active" href="#services">What We Do</a>
      </li>
      <li class="nav-item" slot="nav-items">
          <a class="nav-link" active-class="active" href="projects">Clients</a>
      </li>
    </Nav>
    <Header>
      <p slot="sub-text" class="text-white mx-auto header-desc mt-4">
        Home
      </p>
      <div slot="scroll" class="scroll_down">
        <a href="#services" class="scroll">
          <i class="text-white"></i>
        </a>
      </div>
    </Header>
    <Services id="services"/>
    <Clients id="clients"/>
    <Featured/>
    <CTA class="cta"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import Services from '@/components/Services.vue'
import Clients from '@/components/Clients.vue'
import Featured from '@/components/Featured'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Nav, Header, Services, Clients, Featured, CTA, Footer
  },
  created(){
    document.title = 'Home - Winhomes Estate'
  }
}
</script>

<style lang="scss" scoped>
.cta{
  background-color: #141415;
}
</style>
