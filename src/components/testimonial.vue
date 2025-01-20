<template>
  <div class="container" :style="'background-color: #9cd1f5'">
    <h2 :style="'text-align: center; padding-top: 20px;'">Testimonial</h2>
    <p 
      class="sub-title" 
      :style="'text-align: center;width:480px;color:#4A5568;'"
    >
      Stop wasting time and money designing and managing a website 
      that doesn't get results. Happiness guaranteed!
    </p>
    <div class="testimonial-list">
      <swiper 
        :slides-per-view="1" 
        :space-between="20"
        loop="true"
        autoplay="{ delay: 3000 }"
        pagination="{ clickable: true }"
      >
        <swiper-slide class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
          <div>
            <img :src="testimonial.image" height="72px" :style="'border-radius: 50px'" />
            <p>{{ testimonial.text }}</p>
            <br />
            <div>
              <h6>{{ testimonial.name }}</h6>
              <p>{{ testimonial.role }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="outer-clients">
    <div 
      class="container" 
      :style="'display: flex;justify-content: center;align-item: center;gap:80px;'"
    >
      <img src="/msc.png" height="80px" />
      <img src="/google.png" height="80px" />
      <img src="/accenture.png" height="80px" />
      <img src="/01net.png" height="80px" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  name: "ServicesSection",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonials: [
        {
          image: "/user.webp",
          text: "Stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed!",
          name: "Isabela Moreira",
          role: "Lead Designer, UIdeck",
        },
        {
          image: "/male-user.webp",
          text: "Stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed!",
          name: "John Doe",
          role: "Frontend Developer, UIdeck",
        },
        {
          image: "/female-user.webp",
          text: "Stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed!",
          name: "Jane Smith",
          role: "Backend Developer, UIdeck",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  box-sizing: border-box;
  padding: 100px 20px 20px 20px;
}
.outer-clients {
  background-color: #f7fafc;
  padding: 20px;
}
.sub-title {
  font-size: 18px;
  font-weight: 500;
  width: 500px;
  margin: 0 auto;
}
.testimonial-list {
  padding: 20px;
  background-color: rgb(158, 194, 158);
}
.testimonial-card {
  background-color: rgb(206, 153, 207);
  padding: 20px;
}
</style>