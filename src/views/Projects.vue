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
    <section class="section text-center" id="work">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h2>Our <span class="font-weight-bold">Projects</span></h2>
            </div>
          </div>
        </div>
        <div class="row mt-5 ">
          <ul class="col list-unstyled list-inline mb-0 text-uppercase work_menu" id="menu-filter">
            <li class="list-inline-item"><a class="active" data-filter="*">All</a></li>
            <li class="list-inline-item"><a class="" data-filter=".seo">Duplex</a></li>
            <li class="list-inline-item"><a class="" data-filter=".webdesign">Two Bedrooms</a></li>
            <li class="list-inline-item"><a class="" data-filter=".WORK">Four Bedrooms</a></li>
            <li class="list-inline-item"><a class="" data-filter=".wordpress">Lands</a></li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="row mt-4 work-filter">
          <div class="col-lg-4 work_item webdesign wordpress">
            <a href="/img/1.7a9341b3.jpg" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img src="../assets/img/1.jpg" class="img-fluid mx-auto d-block rounded" alt="work-img">
                </div>
                <div class="work_detail">
                  <p class="mb-2">Category</p>
                  <h4 class="mb-0">Project Title</h4>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 work_item WORK webdesign seo">
            <a href="../assets/img/2.jpg" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img src="../assets/img/2.jpg" class="img-fluid mx-auto d-block rounded" alt="work-img">
                </div>
                <div class="work_detail">
                  <p class="mb-2">Category</p>
                  <h4 class="mb-0">Project Title</h4>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 work_item seo wordpress">
            <a href="../assets/img/3.jpg" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img src="../assets/img/3.jpg" class="img-fluid mx-auto d-block rounded" alt="work-img">
                </div>
                <div class="work_detail">
                  <p class="mb-2">Category</p>
                  <h4 class="mb-0">Project Title</h4>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 work_item wordpress WORK webdesign">
            <a href="../assets/img/4.jpg" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img src="../assets/img/4.jpg" class="img-fluid mx-auto d-block rounded" alt="work-img">
                </div>
                <div class="work_detail">
                  <p class="mb-2">Category</p>
                  <h4 class="mb-0">Project Title</h4>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 work_item seo webdesign">
            <a href="../assets/img/5.jpg" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img src="../assets/img/5.jpg" class="img-fluid mx-auto d-block rounded" alt="work-img">
                </div>
                <div class="work_detail">
                  <p class="mb-2">Category</p>
                  <h4 class="mb-0">Project Title</h4>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 work_item devlopment webdesign">
            <a href="../assets/img/6.jpg" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img src="../assets/img/6.jpg" class="img-fluid mx-auto d-block rounded" alt="work-img">
                </div>
                <div class="work_detail">
                  <p class="mb-2">Category</p>
                  <h4 class="mb-0">Project Title</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'

export default {
  components:{
    Nav, Header
  },
  created(){
    if (location.href.indexOf('reload') == -1){
      location.href = location.href + '?reload';
    }
  }
}
</script>

<style scoped lang="scss">
.header-bg-img{
  background-image: url('../assets/img/projects-header.jpeg');
}
</style>