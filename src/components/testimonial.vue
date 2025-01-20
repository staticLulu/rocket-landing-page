<template>
  <div 
    class="container" 
    :style="'background-color: #9cd1f5;padding: 80px 20px 20px 20px;'"
  >
    <h2 :style="'text-align: center; padding-top: 20px;'">Testimonial</h2>
    <p 
      class="sub-title" 
      :style="'text-align: center;width:480px;color:#4A5568;'"
    >
      Stop wasting time and money designing and managing a website 
      that doesn't get results. Happiness guaranteed!
    </p>
    <div class="testimonial-carousel">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-card">
            <div>
              <img :src="testimonial.image" height="72px" :style="'border-radius: 50px;'" />
              <p>{{ testimonial.text }}</p>
              <hr />
              <h6>{{ testimonial.name }}</h6>
              <p>{{ testimonial.role }}</p>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
  <div class="outer-clients">
    <div 
      class="container" 
      :style="'display: flex;justify-content: center;align-item: center;gap:80px;padding: 20px;'"
    >
      <img src="/msc.png" height="80px" />
      <img src="/google.png" height="80px" />
      <img src="/accenture.png" height="80px" />
      <img src="/01net.png" height="80px" />
    </div>
  </div>
</template>

<script setup>
// Import the Vue3 Carousel components and styles
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
};

const testimonials = [
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
];
</script>

<style scoped>
.container {
  box-sizing: border-box;
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
.testimonial-carousel {
  /* max-width: 1024px;
  margin: 30px auto; */
  padding: 0px 60px;
 

}
.testimonial-card {
  background-color: rgb(206, 153, 207);
  padding: 20px;
  text-align: center;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
}
/* .carousel .carousel__viewport .carousel__track  {
  display: flex;
  gap: 30px;
} */
</style>
