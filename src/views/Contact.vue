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
      <p slot="sub-text" class="text-white mx-auto header-desc mt-4">Contact</p>
    </Header>
    <section class="section" id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h2><span class="font-weight-bold">Contact</span> Us</h2>
              <p class="text-muted mx-auto section-subtitle mt-3">
                Reach out to us anytime. We love to hear from you.
              </p>
            </div>
          </div>
        </div> 
        <div class="row mt-5">
          <div class="col-lg-4">
            <div class="text-center">
              <div>
                <i class="mbri-mobile2 text-custom h1"></i>
              </div>
              <div class="mt-3">
                <h5 class="mb-0 contact_detail-title font-weight-bold">Call Us On</h5>
                <p class="text-muted">
                  <a href="tel:+2348054493718">08054493718</a> or 
                  <a href="tel:+2348036769848">08036769848</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="text-center">
              <div>
                <i class="mbri-pin text-custom h1"></i>
              </div>
              <div class="mt-3">
                <h5 class="mb-0 contact_detail-title font-weight-bold">Visit Our Office</h5>
                <p class="text-muted">8, Williams Onoh Street, Chevy Estate, Chevron Drive, Lekki, Lagos</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="text-center">
              <div>
                <i class="mbri-letter text-custom h1"></i>
              </div>
              <div class="mt-3">
                <h5 class="mb-0 contact_detail-title font-weight-bold">Email Us At</h5>
                <p class="text-muted">info.winhomesesates.com</p>
              </div>
            </div>
          </div>
        </div>
        <h2 class="mt-5 text-center"><span class="font-weight-bold">Request</span> Inspection</h2>
        <div class="row mt-3">
          <div class="col-lg-12">
            <div class="form-kerri">
              <form>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mt-2">
                      <input name="name" id="name" type="text" class="form-control" placeholder="Your Name*" required="">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mt-2">
                      <input name="email" id="email" type="email" class="form-control" placeholder="Your Email*" required="">
                    </div>
                  </div>                                
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mt-2">
                      <input type="text" class="form-control" id="subject" placeholder="Your Subject.." required="">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mt-2">
                      <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Time of availability...">
                      </textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 text-right">
                    <input type="submit" class="btn btn-custom" value="Send Message">
                  </div>
                </div>
              </form>
            </div>  
          </div>
          <div class="col-lg-12 pt-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.604719356835!2d3.5222739148760867!3d6.444770895337377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf6f3eaef7b05%3A0xef3d953023d30337!2s8%20William%20Onoh%20Rd%2C%20Lekki%20Penninsula%20II%2C%20Lekki!5e0!3m2!1sen!2sng!4v1595793255247!5m2!1sen!2sng" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components:{
    Nav, Header, Footer
  },
  created(){
    document.title = 'Contact - Winhomes Estate'
  }
}
</script>

<style scoped lang="scss">
.header-bg-img{
  background-image: url('../assets/img/headers/contact-header.jpeg');
}

a{
  color:#9695a1;
  &:hover{
    color: #c50101;
  }
}
</style>