<template>
  <app-header></app-header>

    <section id="home"><HeroSection /></section>
    <section id="services"><ServicesSection /></section>
    <section id="pricing"><PricingSection /></section>
    <section id="testimonial"><Testimonial /></section>
    <section id="contact"><ContactSection /></section>

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
      ContactSection
    }
  };
</script>

<style>
  html {
    scroll-behavior: smooth;
  }

  section {
    padding: 100px;
    height: 100vh;
    border: 1px solid #ccc;
    margin: 10px 0;
  }
</style>



