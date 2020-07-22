<template>
  <section class="section jarallax h-100vh header-bg-img" data-jarallax='{"speed": 0.2}' id="home">
    <div class="bg-overlay"></div>
    <vue-particles 
      class="particles"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="2"
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
                <!-- <h4 class="text-white first-title mb-4">Welcome</h4> -->
                <h1 class="header-name text-white text-capitalize mb-0">
                  Winhomes Estates
                  <span class="simple-text-rotate font-weight-bold">
                    <textra :data="words" :timer="3" :infinite="true" filter="right-left"/>
                  </span>
                </h1>
                <slot name="sub-text"></slot>
                <!-- <div class="mt-4 pt-2">
                    <a href="#" class="btn btn-outline-custom btn-round">Download Cv</a>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>            
    <slot name="scroll"></slot>
  </section>
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'
import Textra from 'vue-textra'

Vue.use(Textra);
Vue.use(VueParticles)

export default {
  data(){
    return{
      words: ["Global Services", "Defined by Service", "and Experience"]
    }
  }
}
</script>

<style>
.particles{
  position: absolute;
  z-index: 3;
}
</style>