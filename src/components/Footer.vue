<template>
  <footer class="footer bg-light">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-12">
          <div class="text-center text-white footer-alt">
            <ul class="list-unstyled list-inline mb-3">
              <li class="list-inline-item"><a href="index_3.html#"><i class="mdi mdi-facebook text-muted"></i></a></li>
              <li class="list-inline-item"><a href="index_3.html#"><i class="mdi mdi-linkedin text-muted"></i></a></li>
              <li class="list-inline-item"><a href="index_3.html#"><i class="mdi mdi-pinterest text-muted"></i></a></li>
              <li class="list-inline-item"><a href="index_3.html#"><i class="mdi mdi-twitter text-muted"></i></a></li>
            </ul>
            <p class="text-muted mb-0"> 2018 - {{year}} © Eben. Design by SRBThemes.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data(){
    return{
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>

</style>