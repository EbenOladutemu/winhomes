<template>
  <div>
    <Nav>
      <li class="nav-item" slot="nav-items">
          <a class="nav-link" active-class="active" href="#services">What We Do</a>
      </li>
      <li class="nav-item" slot="nav-items">
          <a class="nav-link" active-class="active" href="#clients">Clients</a>
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
    <section class="section bg-light" id="team">
      <div class="container">   
        <div class="row justify-content-center">
          <h1 class="animated tada wow infinite">NOW SELLING!!!</h1>
          <div class="col-lg-12 mt-3">
            <div class="rounded blog_color p-3">
              <div class="img_blog">
                <img src="../assets/img/projects/3-bedroom.jpg" alt="" class="img-fluid rounded mx-auto d-block">
              </div>
              <div class="content_blog">
                <div>
                  <h5 class="font-weight-bold mt-3 mb-0">
                    <span class="text-dark">Winhome Estates</span>
                  </h5>
                </div>
                <div class="mt-3">
                  <p class="h6 text-dark date_blog mb-0"></p>
                  <p class="mt-3 desc_blog text-muted">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
import CTA from '@/components/CTA'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Nav, Header, Services, Clients, CTA, Footer
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
