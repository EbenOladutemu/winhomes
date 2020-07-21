<template>
  <section class="section jarallax h-100vh header-bg-img" data-jarallax='{"speed": 0.2}' id="home">
    <div class="bg-overlay"></div>
    <vue-particles 
      class="particles"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      ></vue-particles>
    <div class="header-table">
      <div class="header-table-center">
        <div class="container position-relative z-index">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="text-center header-content mx-auto">
                <h4 class="text-white first-title mb-4">Welcome</h4>
                <h1 class="header-name text-white text-capitalize mb-0">I'M <span class="simple-text-rotate font-weight-bold">Kerri Deo.,A Graphic Designer.,A Photographer.</span></h1>
                <p class="text-white mx-auto header-desc mt-4">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
                <div class="mt-4 pt-2">
                    <a href="#" class="btn btn-outline-custom btn-round">Download Cv</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>            
    <div class="scroll_down">
      <a href="#about" class="scroll">
        <i class="text-white"></i>
      </a>
    </div>
    
  </section>
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

export default {

}
</script>

<style>
.particles{
  position: absolute;
  z-index: 3;
}
</style>