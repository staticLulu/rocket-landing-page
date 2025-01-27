<template>
  <div 
    class="container" 
    :style="'padding: 100px 20px 20px 20px;'"
  >
    <h2 
      :style="'text-align: center; padding-top: 20px;font-weight:700;'" 
      data-aos="fade-up"
    >
      Testimonial
    </h2>
    <p 
      class="sub-title" 
      :style="'text-align: center;width:480px;color:#4A5568;'"
      data-aos="fade-up" 
      data-aos-delay="100"
    >
      Stop wasting time and money designing and managing a website 
      that doesn't get results. Happiness guaranteed!
    </p>
    <div class="testimonial-carousel" data-aos="fade-up" data-aos-delay="300">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-card">
            <div>
              <img :src="testimonial.image" height="72px" :style="'border-radius: 50px;'" />
              <p :style="'margin-top:20px; margin-bottom:20px'">{{ testimonial.text }}</p>
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
      <img src="/msc.png" height="80px" data-aos="fade-up" />
      <img src="/google.png" height="80px" data-aos="fade-up" data-aos-delay="100" />
      <img src="/accenture.png" height="80px" data-aos="fade-up" data-aos-delay="200" />
      <img src="/01net.png" height="80px" data-aos="fade-up" data-aos-delay="300" />
    </div>
  </div>
</template>

<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  snapAlign: 'center',
  autoplay: 3600,
  gap: 16,
  pauseAutoplayOnHover: true,
  transition: 500,
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
    padding: 0px 300px;
  }
  .testimonial-card {
    background-color: white;
    padding: 20px;
    text-align: center;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
    max-width: 600px;
    margin: 60px;
  }

  ::v-deep(.carousel__viewport) {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

::v-deep(.carousel__track) {
  margin: 0 auto !important;
}

::v-deep(.carousel__arrow) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: #4a5568;
  color: #ffffff;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

::v-deep(.carousel__prev) {
  left: -50px; /* Adjust for better alignment */
  color: #3182ce;
  background-color: #deecf8;
  border-radius: 40px;
  padding: 2px;
}
::v-deep(.carousel__prev):hover{
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
}
::v-deep(.carousel__next) {
  right: -50px; /* Adjust for better alignment */
  color: #3182ce;
  background-color: #deecf8;
  border-radius: 40px;
  padding: 2px;
}
::v-deep(.carousel__next):hover {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
}
::v-deep(.carousel__pagination) {
  display: flex;
  justify-content: center;
  gap: 8px;
}
::v-deep(.carousel__pagination-button) {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #cbd5e0;
  transition: background-color 0.3s ease;
}
::v-deep(.carousel__pagination-button--active) {
  background-color: #3182ce;
}

</style>
