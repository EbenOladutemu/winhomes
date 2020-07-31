<template>
  <section class="section bg-light" id="services">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="text-center">
            <h2>What We <span class="font-weight-bold">Do</span></h2>
          </div>
          <div class="services-title-border"></div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4">
          <div class="text-center services-boxes rounded p-4 mt-4">
            <div class="services-boxes-icon">
              <i class="fas fa-home anime"></i>
            </div>
            <div class="mt-4">
              <h5 class="mb-0">Real Estate Development</h5>
              <div class="services-title-border"></div>
              <!-- <p class="text-muted mt-3">There are many variations of passages of but the majority have suffered alteration in some form.</p> -->
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="text-center services-boxes rounded p-4 mt-4">
            <div class="services-boxes-icon">
              <i class="fas fa-money-bill-alt anime"></i>
            </div>
            <div class="mt-4">
              <h5 class="mb-0">Real Estate Sales</h5>
              <div class="services-title-border"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="text-center services-boxes rounded p-4 mt-4">
            <div class="services-boxes-icon">
              <i class="fas fa-briefcase anime"></i>
            </div>
            <div class="mt-4">
              <h5 class="mb-0">Project Management</h5>
              <div class="services-title-border"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="text-center services-boxes rounded p-4 mt-4">
            <div class="services-boxes-icon">
              <i class="far fa-building anime"></i>
            </div>
            <div class="mt-4">
              <h5 class="mb-0">Facility Management</h5>
              <div class="services-title-border"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="text-center services-boxes rounded p-4 mt-4">
            <div class="services-boxes-icon">
              <i class="fas fa-sitemap anime"></i>
            </div>
            <div class="mt-4">
              <h5 class="mb-0">Architectural Designs and Approvals</h5>
              <div class="services-title-border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  created(){
  }
}
</script>

<style scoped>
.services-boxes .services-boxes-icon i{
  color: #c50101;
}
.services-boxes .services-title-border {
  height: 2px;
  width: 40px;
  margin: 15px auto;
  transition: all 0.5s;
  background: red;
}

.anime{
  animation: anime 2s infinite;
}

@keyframes anime {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }
}
</style>