<template>
  <div>
    <Nav>
      <li class="nav-item" slot="nav-items">
        <router-link class="nav-link" active-class="active" to="home#services">What We Do</router-link>
      </li>
      <li class="nav-item" slot="nav-items">
        <router-link class="nav-link" active-class="active" to="home#clients">Clients</router-link>
      </li>
    </Nav>
    <Header>
      <p slot="sub-text" class="text-white mx-auto header-desc mt-4">About</p>
    </Header>
      <section class="section" id="about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="mt-3">
                  <img src="../assets/img/about-img.jpeg" alt="" class="img-fluid mx-auto d-block img-thumbnail">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mt-3">
                <h2><span class="font-weight-bold">Who</span> We Are</h2>
                <!-- <h4 class="mt-4">Winhomes! <span class="text-custom font-weight-bold">Global Services</span></h4> -->
                <p class="text-muted mt-4">Win Homes Global Services Ltd is a real estate sales and development company committed to offering world class products and services to our clients, helping them get their desired satisfaction. </p>
                <p class="text-muted mt-2">In our years of existence as a company, we witnessed undeniable growth in terms of customer base and scale thanks to the commitment and professionalism of everyone at the company towards achieving its objectives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     <Team/>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default {
  components:{
    Nav, Header, Team, Footer
  },
  created(){
    document.title = 'About - Winhomes Estate'
  }
}
</script>

<style scoped lang="scss">
.header-bg-img{
  background-image: url('../assets/img/about-header.jpeg');
}
</style>
