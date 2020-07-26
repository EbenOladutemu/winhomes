<template>
  <footer class="footer bg-light">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-12">
          <div>
            <ul class="mb-0 about-social list-inline mt-4">
              <li class="list-inline-item">
                <a target="_blank" rel="noreferrer noopener" href="https://linkedin.com/company/winhomesestates">
                <i class="mdi mdi-linkedin"></i></a>
              </li>
              <li class="list-inline-item">
                <a target="_blank" rel="noreferrer noopener" href="https://fb.com/winhomesestates">
                <i class="mdi mdi-facebook"></i></a>
              </li>
              <li class="list-inline-item">
                <a target="_blank" rel="noreferrer noopener" href="https://instagram.com/winhomesestates">
                <i class="mdi mdi-instagram"></i></a>
              </li>
              <li class="list-inline-item">
                <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/winhomesestates">
                <i class="mdi mdi-twitter"></i></a>
              </li>
            </ul>
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
</style>