<template>
  <section class="section jarallax h-100vh header-bg-img" data-jarallax='{"speed": 0.2}' id="home">
    <Particles
      id="tsparticles"
      :options="options"
    />
    <div class="bg-overlay"></div>
    <div class="header-table">
      <div class="header-table-center">
        <div class="container position-relative z-index">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="text-center header-content mx-auto">
                <!-- <h4 class="text-white first-title mb-4">Welcome</h4> -->
                <h1 class="header-name text-white text-capitalize mb-0">
                  <vue-typed-js :strings="['Winhomes Estates']" :typeSpeed="100" :backSpeed="50" :loop="true" class="typed-hide">
                    <h1 class="typing"></h1>
                  </vue-typed-js>
                  <span class="typed-show">Winhomes Estates</span>
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
import Textra from 'vue-textra'
import Particles from "particles.vue";
import  VueTypedJs  from 'vue-typed-js'
 
Vue.use(VueTypedJs)
Vue.use(Particles);
Vue.use(Textra);

export default {
  data(){
    return{
      words: ["Global Services", "Defined by Service", "and Experience"],
      options:{
        fpsLimit: 2000,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
              speed: 3
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },
          links: {
            color: '#18284e',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 6,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 700
            },
            value: 80
          },
          opacity: {
            value: 1
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 6
          }
        },
        detectRetina: true
      }
    }
  }
}
</script>

<style>
#jarallax-container-0{
  /* position: initial!important; */
  /* clip:rect(0, 411px, 831.21875px, 0)!important; */
}
.mainTextra{
  background: linear-gradient(45deg, #fff, #fff, #c10102, #fff, #fff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tsparticles-canvas-el{
  position: absolute;
  z-index: 3;
  height: 80%!important;
}

.typed-element{
  display: inline-flex;
}
.typing{
  font-size: 54px;
}


@media (max-width: 756px){
  .header-content{
    position: relative;
    top: 80px;
  }
}
@media (max-width: 990px) {
  .typed-show{
    display: block;
    background: linear-gradient(45deg, #fff, #fff, #c10102, #fff, #fff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .typed-hide{
    display: none;
  }
}
@media (min-width: 991px) {
  .typed-show{
    display: none;
  }
  .typed-hide{
    display: inline-flex;
    background: linear-gradient(45deg, #fff, #fff, #c10102, #fff, #fff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>