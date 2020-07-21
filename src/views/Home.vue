<template>
  <div>
    <Header/>
    <Services/>
    <Clients/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Services from '@/components/Services.vue'
import Clients from '@/components/Clients.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header, Services, Clients, Footer
  }
}
</script>
