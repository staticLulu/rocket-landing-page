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
