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
      <p slot="sub-text" class="text-white mx-auto header-desc mt-4">Projects</p>
    </Header>
    <!-- <a href="https://unsplash.it/1200/768.jpg?image=251" data-gallery="dud" data-toggle="lightbox">
      <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid">
    </a>
    <a href="https://unsplash.it/1200/768.jpg?image=251" data-gallery="dud" data-toggle="lightbox">
      <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid">
    </a> -->
    <section class="section text-center" id="work">
      <div class="container">
        <!-- <Tinybox
          v-model="index"
          :images="images"
          loop
        /> -->
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h2>Our <span class="font-weight-bold">Projects</span></h2>
            </div>
            <div class="services-title-border"></div>
          </div>
        </div>
        <div class="row mt-5 ">
          <ul class="col list-unstyled list-inline mb-0 text-uppercase work_menu" id="menu-filter">
            <li class="list-inline-item"><a class="active" data-filter="*">All</a></li>
            <li class="list-inline-item"><a class="" data-filter=".3-bed">3 Bedroom Luxury Apartments</a></li>
            <li class="list-inline-item"><a class="" data-filter=".4-bed">4 Bedroom Terraced Apartments</a></li>
            <li class="list-inline-item"><a class="" data-filter=".4-bed-semi">4 Bedroom Semi-detached Apartments</a></li>
            <li class="list-inline-item"><a class="" data-filter=".5-bed">5 Bedroom Fully-detached Apartments</a></li>
            <li class="list-inline-item"><a class="" data-filter=".waterpark">Water Park</a></li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="row mt-4 work-filter">
          <div class="col-lg-4 work_item 3-bed">
            <a href="/img/3-bedroom.4d352e25.jpg" data-gallery="projects" data-toggle="lightbox" rel="noreferrer noopener" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img src="../assets/img/projects/3-bedroom.jpg" class="img-fluid mx-auto d-block rounded" alt="work-img">
                </div>
                <div class="work_detail">
                  <!-- <p class="mb-2">Category</p> -->
                  <h4 class="mb-0">3 Bedroom Luxury Apartment</h4>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 work_item 4-bed">
            <a href="/img/4-bedroom.853d9637.jpeg" data-gallery="projects" data-toggle="lightbox" rel="noreferrer noopener" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img src="../assets/img/projects/4-bedroom.jpeg" class="img-fluid mx-auto d-block rounded" alt="work-img">
                </div>
                <div class="work_detail">
                  <h4 class="mb-0">4 Bedroom Terraced Apartment</h4>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 work_item 4-bed-semi">
            <a href="/img/4-bedroom-semi.d10fd668.jpeg" data-gallery="projects" data-toggle="lightbox" rel="noreferrer noopener" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img src="../assets/img/projects/4-bedroom-semi.jpeg" class="img-fluid mx-auto d-block rounded" alt="work-img">
                </div>
                <div class="work_detail">
                  <h4 class="mb-0">4 Bedroom Semi-detached Apartment</h4>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 work_item waterpark">
            <a href="/img/waterpark.1f8c5fdb.jpeg" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img src="../assets/img/projects/waterpark.jpeg" class="img-fluid mx-auto d-block rounded" alt="work-img">
                </div>
                <div class="work_detail">
                  <h4 class="mb-0">Proposed recreation center to be built in the estate</h4>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 work_item 5-bed">
            <a href="/img/5-bedroom.e4d4aca1.jpeg" data-gallery="projects" data-toggle="lightbox" rel="noreferrer noopener" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img src="../assets/img/projects/5-bedroom.jpeg" class="img-fluid mx-auto d-block rounded" alt="work-img">
                </div>
                <div class="work_detail">
                  <h4 class="mb-0">5 Bedroom Fully-detached Apartment</h4>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 work_item waterpark">
            <a href="/img/waterpark-2.091b7df2.jpeg" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img src="../assets/img/projects/waterpark-2.jpeg" class="img-fluid mx-auto d-block rounded" alt="work-img">
                </div>
                <div class="work_detail">
                  <h4 class="mb-0">Proposed recreation center to be built in the estate</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    <script type="application/javascript" src="https://cdn.jsdelivr.net/gh/EbenOladutemu/winhomes@v1.0/src/assets/js/jquery.magnific-popup.min.js"></script>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import Tinybox from "vue-tinybox";

export default {
  components:{
    Nav, Header, Footer
  },
  data(){
    return{
    }
  },
  created(){
    if (location.href.indexOf('?') == -1){
      location.href = location.href + '?';
    }
    document.title = 'Projects - Winhomes Estates'
  }
}
</script>

<style scoped lang="scss">
.header-bg-img{
  background-image: url('../assets/img/headers/projects-header.jpeg');
}
a:hover{
  color: #fff!important;
}
</style>