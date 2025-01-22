<template>
  <app-header></app-header>

  <div v-if="$route.path === '/'">
    <nav>
      <a v-scroll-to="'#home'">Home</a>
      <a v-scroll-to="'#services'">Services</a>
      <a v-scroll-to="'#pricing'">Pricing</a>
      <a v-scroll-to="'#testimonial'">Testimonial</a>
      <a v-scroll-to="'#contact'">Contact</a>
    </nav>

    <section id="home"><HeroSection /></section>
    <section id="services"><ServicesSection /></section>
    <section id="pricing"><PricingSection /></section>
    <section id="testimonial"><Testimonial /></section>
    <section id="contact"><ContactSection /></section>
  </div>

  <router-view v-else></router-view>

  <app-footer></app-footer>
</template>

<script>
import HeroSection from '@/components/hero.vue';
import ServicesSection from '@/components/services.vue';
import PricingSection from '@/components/pricing.vue';
import Testimonial from '@/components/testimonial.vue';
import ContactSection from '@/components/contact.vue';

export default {
  components: {
    HeroSection,
    ServicesSection,
    PricingSection,
    Testimonial,
    ContactSection,
  },
};
</script>

<style>
  /* ::-webkit-scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* ::-webkit-scrollbar-thumb */
  ::-webkit-scrollbar-thumb {
    background-color: #b9b9b9;
    border-radius: 9999px;
  }

  /* ::-webkit-scrollbar-track */
  ::-webkit-scrollbar-track {
    border-radius: 9999px;
    background-color: #e6e6e6;
  }

  /* link__to-leaf and link__to-branch */
  .link__to-leaf,
  .link__to-branch {
    stroke: #9CA3AF !important;
  }

  /* Custom breakpoints */
  /* @media (max-width: 576px) {
    .custom-class {
      background-color: lightblue;
    }
  }

  @media (min-width: 768px) {
    .custom-class {
      background-color: lightgreen;
    }
  } */

</style>
