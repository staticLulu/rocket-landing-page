<template>
  <app-header></app-header>

  <!-- Render sections only on the root path ("/") -->
  <div v-if="$route.path === '/'">
    <section id="home"><HeroSection /></section>
    <section id="services"><ServicesSection /></section>
    <section id="pricing"><PricingSection /></section>
    <section id="testimonial"><Testimonial /></section>
    <section id="contact"><ContactSection /></section>
  </div>

  <!-- Render the router-view for other paths -->
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

<style scoped>
html {
  scroll-behavior: smooth;
}

section {
  /* height: 100vh; */
  padding-top: 62px;
}
</style>
