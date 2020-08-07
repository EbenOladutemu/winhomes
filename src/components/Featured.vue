<template>
  <section class="section bg-light" id="team">
    <div class="container">   
      <div class="row justify-content-center">
        <h1 class="animated tada wow infinite text-red">NOW SELLING!!!</h1>
        <div class="col-lg-12 mt-3">
          <div class="rounded blog_color p-3">
          <h4 class="font-weight-bold mt-3 mb-3">
            <span class="text-dark">Winhome Estates</span>
          </h4>
            <div class="img_blog">
              <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-interval="1000">
                    <!-- <img src="..." class="d-block w-100" alt="..."> -->
                    <img src="../assets/img/projects/3-bedroom.jpg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item" data-interval="2000">
                    <img src="../assets/img/projects/winhomes/winhomes-2.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/projects/winhomes/winhomes-3.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/projects/winhomes/winhomes-4.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/projects/winhomes/winhomes-5.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/projects/winhomes/winhomes-6.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/projects/winhomes/winhomes-7.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/projects/winhomes/winhomes-12.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/projects/winhomes/winhomes-13.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/projects/winhomes/winhomes-14.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/flyers/flyer.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/flyers/flyer-1.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/flyers/flyer-2.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/flyers/flyer-3.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/flyers/flyer-4.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/flyers/flyer-5.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/img/flyers/flyer-6.jpeg" alt="" class="img-fluid rounded mx-auto d-block">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div class="content_blog">
              <div class="mt-3">
                <h3 class="mt-5">Our Offer</h3>
                <p class="mt-3 desc_blog">
                  We are currently selling plots of land in Winhomes estate located at Okun Ajah town in Eti-Osa LGA, Lagos state.<br> This fast selling property has the following amazing features:
                </p>
                <h5 class="text-bold">Title: GOVERNOR’S CONSENT</h5>
                <ol class="pl-2 mt-2">
                  <li>Dry Land (available and ready for immediate construction) </li>
                  <li>Survey plan for the plot spaces</li>
                  <li>No hidden charges (Development fee inclusive, Planned infrastructures and amenities which includes: power supply, paved roads, covered drainages, water supply, perimeter fencing, street lights, etc.) </li>
                  <li>Commercial area</li>
                  <li>Restricted access</li>
                  <li>School</li>
                  <li>Recreation facilities (water park)</li>
                </ol>
                <div v-show="show">
                  <p>
                    <strong>Great location:</strong> Proximity to Chevron, Lekki conservation, Lekki Epe express via Orchid Hotel Road, proposed coastal road running from Victoria Island/Ikoyi to Ibeju Lekki and several other prime spots (Prime mall, Lekki Miami beach), access through Ogombo road, located directly behind coop Lag Estate.
                  </p>
                  <h3 class="mt-3">Our Price</h3>
                  <p>
                    Our offer is at the most competitive prices and also includes flexible payment plans for interested buyers One plot of land (600/sqm) is ₦20,000,000 (₦33.333/sqm). Other available plot sizes includes: 300sqm, 500sqm and 750sqm.
                  </p>
                  <ol class="pl-2 mt-2">
                    <li>This price includes development fee as drainage works and paved road construction works are currently on going</li>
                    <li>Available flexible payments plans include: 30% down payment (minimum) and the balance spreads evenly over 3, 6 or 12 months as it’s convenient for the buyer</li>
                    <li>No hidden charges</li>
                    <li>Allocation confirmed upon receipt of the 30% down payment and a buyer specific sales agreement issued to the buyer stating the terms of the contract pending the final liquidation of the outstanding amount.</li>
                    <li>We also provide an inbound sales and after-sales service to every buyer helping you make the best buying decisions and also ensure that your after-purchase experience is euphoric.</li>
                  </ol>
                </div>
                <button class="btn btn-custom" @click="readMore">
                  <span v-if="!show">Read More</span>
                  <span v-else>Show Less</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      show: false
    }
  },
  methods:{
    readMore(){
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
li{
  list-style: inside;
  list-style-type: disc;
}
.btn-custom{
  padding: 5px 4px;
}
</style>