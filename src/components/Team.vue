<template>
  <section class="section bg-light" id="team">
    <div class="container">   
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="text-center">
            <h2>Our <span class="font-weight-bold">Team</span></h2>
            <p class="text-muted mx-auto section-subtitle mt-3">
              Win Homes Global Services Ltd is managed by a team of highly motivated professionals empowered with modern concept for the development and management of our relationship with allegiance and commitment to providing superior value through our products and services. This will do on a continuous basis with a clear focus on our client’s needs and satisfaction.
            </p>
          </div>
        </div>
      </div>                 
      <div class="row mt-5">
        <div class="col-lg-4 mt-3">
          <div class="rounded blog_color p-3">
            <div class="img_blog">
              <img src="../assets/img/team/HARRY-ONYA.jpg" alt="" class="img-fluid rounded mx-auto d-block">
            </div>
            <div class="content_blog pt-3 pb-3">
              <div>
                <h5 class="font-weight-bold mb-0">
                  <span class="text-white">Engr Ifeoma Stella Okengwu</span>
                </h5>
              </div>
              <div class="mt-3">
                <p class="h6 text-white date_blog mb-0">CEO</p>
                <p class="mt-3 desc_blog text-muted">
                  An astute business woman based in the United States of America, with decades of experiences at top professional levels, both in the oil and gas industry and in private enterprise. She is an outstanding example of a dynamic entrepreneur extraordinaire who through<span v-if="!show">...</span>
                  <span class="text-muted" v-show="show">
                    sheer determination and hardwork has built an empire and made a major mark in the world of business and industry. Trained as a Chemical engineer, she worked with several Oil and Gas companies before venturing into starting up her own company, Stoke and Caldwell engineering and Oil services company operating in both the Upstream and downstream sectors of the oil industry. She is the CEO of Win Homes Global Services Ltd, a real estate company currently changing the face of real estate business in Nigeria and the USA.
                  </span>
                </p>
                <p class="h6 mb-0 text-muted font-weight-bold read-more" @click="readMore()">
                  <span v-if="!show">Read More</span>
                  <span v-else>Show Less</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="rounded blog_color p-3">
            <div class="img_blog">
              <img src="../assets/img/team/HARRY-ONYA.jpg" alt="" class="img-fluid rounded mx-auto d-block">
            </div>
            <div class="content_blog pt-3 pb-3">
              <div>
                <h5 class="font-weight-bold mb-0">
                  <span class="text-white">Harry Onya Esq.,LLM., BL.</span>
                </h5>
              </div>
              <div class="mt-3">
                <p class="h6 text-white date_blog mb-0">General Manager</p>
                <p class="mt-3 desc_blog text-muted">
                  He is an experienced, hardworking and a dedicated lawyer, with several years of experience in Property, Corporate and Oil and gas law. He believes equity, justice, public interest, and hard work as non-negotiable tools would guarantee a better and egalitarian society for all.<span v-if="!show2">..</span>
                  <span class="text-muted" v-show="show2">
                    <p>He is the General Manager of Win Homes Global Services Ltd, and he has consistently provided unalloyed leadership to the management team and the company has witnessed undeniable growth under his leadership.</p>
                  </span>
                </p>
                <p class="h6 mb-0 text-muted font-weight-bold read-more" @click="readMore2()">
                  <span v-if="!show2">Read More</span>
                  <span v-else>Show Less</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="rounded blog_color p-3">
            <div class="img_blog">
              <img src="../assets/img/team/TAIWO-AJAYI.jpg" alt="" class="img-fluid rounded mx-auto d-block">
            </div>
            <div class="content_blog pt-3 pb-3">
              <div>
                <h5 class="font-weight-bold mb-0">
                  <span class="text-white">Taiwo Ajayi</span>
                </h5>
              </div>
              <div class="mt-3">
                <p class="h6 text-white date_blog mb-0">Head, Business Development</p>
                <p class="mt-3 desc_blog text-muted">
                  He has over the years, developed a culture which embraces creativity, analytics and expertise for concrete results. He is graduate of Physics from the University of Jos, and he also has several certifications and trainings in Digital Marketing, Sales, Operations and Project management.<span v-if="!show3">..</span>
                  <span class="text-muted" v-show="show3">
                    He currently leads the team of Sales and Marketing Consultants at Win Homes and consistently inspires them with his contagious passion for excellence and endless creative energy. His strategic pedigree comes from almost a decade of cumulative sales, marketing and business development experience.
                  </span>
                </p>
                <p class="h6 mb-0 text-muted font-weight-bold read-more" @click="readMore3()">
                  <span v-if="!show3">Read More</span>
                  <span v-else>Show Less</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="rounded blog_color p-3">
            <div class="img_blog">
              <img src="../assets/img/team/TAIWO-AJAYI.jpg" alt="" class="img-fluid rounded mx-auto d-block">
            </div>
            <div class="content_blog" style="padding-top: 1.4rem">
              <div>
                <h5 class="font-weight-bold mb-0">
                  <span class="text-white">Olayori Ebenezer Omotola</span>
                </h5>
              </div>
              <div class="mt-3">
                <p class="h6 text-white date_blog mb-0">Head, Operations</p>
                <p class="mt-3 desc_blog text-muted">
                  He has a Diploma in law, B.Sc.Political Science and LLB. He specializes in constitutional, property law. His greatest natural asset is his impeccable will power. He is currently the Head of Operations at Win Homes Global Services Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 mt-3">
          <div class="rounded blog_color p-3">
            <div class="img_blog">
              <img src="../assets/img/team/ALPHA-SALES-&-MARKETING-TEAM.jpg" alt="" class="img-fluid rounded mx-auto d-block">
            </div>
            <div class="content_blog pt-3 pb-8px">
              <div>
                <h5 class="font-weight-bold mb-0">
                  <span class="text-white">"Alpha" Sales & Marketing Team</span>
                </h5>
              </div>
              <div class="mt-3">
                <!-- <p class="h6 text-white date_blog mb-0">Head, Business Development</p> -->
                <p class="mt-3 desc_blog text-muted">
                  Our impeccable team of marketing and sales consultants is made up of highly innovative, imaginative and deeply inspired people combining talent and technology to constantly challenge boundaries and benchmarks, and believe that things can always be done better. The team comprises of seasoned content creators, brand strategists, digital marketers and sales specialists.<span v-if="!show4">..</span>
                  <span class="text-muted" v-show="show4">
                    Our growth within our short span of existence speak volumes of the excellent skills our team possesses. Underlying these expertise is our passion. The passion to listen to our customers and to delight them with innovative solutions to their real estate needs.
                  </span>
                </p>
                <p class="h6 mb-0 text-muted font-weight-bold read-more" @click="readMore4()">
                  <span v-if="!show4">Read More</span>
                  <span v-else>Show Less</span>
                </p>
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
      show: false,
      show2: false,
      show3: false,
      show4: false
    }
  },
  methods:{
    readMore(){
      this.show = !this.show
    },
    readMore2(){
      this.show2 = !this.show2
    },
    readMore3(){
      this.show3 = !this.show3
    },
    readMore4(){
      this.show4 = !this.show4
    }
  }
}
</script>

<style scoped lang="scss">
.section-subtitle {
  max-width: 720px;
}
.read-more{
  font-size: 18px;
  cursor: pointer;
  &:hover{
    color: white!important;
  }
}
.blog_color {
  background-color: #2f3135;
  box-shadow: 0px 1px 3px 2px #292929;
}
.pb-8px{
  padding-bottom: 8px;
}
#team{
  background-color: #2f3135!important;
}
</style>