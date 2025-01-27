<template>
  <div class="container" :style="'padding:100px 20px 20px 20px;'">
    <h2>About Us</h2>
    <p class="content">
      Welcome to Rocket Landing Page, where innovation meets simplicity. 
      We are passionate about crafting digital solutions that empower 
      individuals and businesses to thrive in an ever-changing world. 
      Our mission is to deliver user-friendly, efficient, and cutting-edge 
      web experiences that make a real impact. Whether you're here to explore, 
      learn, or collaborate, we're excited to be a part of your journey.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'AboutPage'
  };
</script>

<style scoped>
  h2 {
    text-align: center;
    font-weight: 700;
  }
  .content {
    padding: 20px;
    margin-top: 0px;
    font-size: 16px;
    text-align: justify;
    border-radius: 12px;
  }
</style>