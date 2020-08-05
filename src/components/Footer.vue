<template>
  <footer class="footer bg-light">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-12">
          <div>
            <ul class="mb-0 about-social list-inline mt-4">
              <li class="list-inline-item">
                <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/winhomes-estate-8418741b3">
                <i class="mdi mdi-linkedin"></i></a>
              </li>
              <li class="list-inline-item">
                <a target="_blank" rel="noreferrer noopener" href="https://fb.com/winhomesestate">
                <i class="mdi mdi-facebook"></i></a>
              </li>
              <li class="list-inline-item">
                <a target="_blank" rel="noreferrer noopener" href="https://instagram.com/winhomesestate">
                <i class="mdi mdi-instagram"></i></a>
              </li>
              <li class="list-inline-item">
                <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/winhomesestate">
                <i class="mdi mdi-twitter"></i></a>
              </li>
            </ul>
            <div class="text-center">
              <div class="mt-3">
                <p class="text-muted">
                  <i class="mbri-mobile2 text-custom"></i>
                  <a href="tel:+2348054493718">08054493718</a> or 
                  <a href="tel:+2348036769848">08036769848</a>
                </p>
              </div>
            </div>
            <div class="text-center">
              <div class="mt-3">
                <p class="text-muted">
                  <i class="mbri-letter text-custom envelope"></i>
                  <a href="mailto:info@winhomesesates.com"> info@winhomesesates.com</a>
                </p>
              </div>
            </div>
            <p class="text-muted mt-3 mb-0"> {{year}} © Winhomes Estate. Crafted by 
              <a href="https://eben.com.ng" title="Eben Web Krafts" target="_blank"><strong>Eben</strong>.</a>
              All Rights Reserved. Design by SRBThemes.
            </p>
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

<style scoped lang="scss">
a{
  color: #c40201;
  &:hover{
    color: rgb(151, 9, 9);
  }
}
.about-social a:hover{
  transform: rotateY(180deg);
}
.envelope{
  position: relative;
  top: 2px;
}
</style>