<template>
  <div class="container">
    <h2 data-aos="fade-up">Get In Touch</h2>
    <div 
      :style="'display:flex;justify-content:center;'" 
      data-aos="fade-up" 
      data-aos-delay="100"
    >
      <p class="sub-title" :style="'text-align:center;'">
        Stop wasting time and money designing and managing a website that 
        doesn't get results. Happiness guaranteed!
      </p>
    </div>

    <form class="form" data-aos="fade-up" data-aos-delay="200">
      <div class="form-row" >
        <input type="text" placeholder="Your username" />
        <input type="email" placeholder="Your email" />
      </div>
       <div class="form-row" >
        <input type="text" placeholder="Your subject" />
        <input type="number" placeholder="Your phone" />
      </div>
       <div :style="'max-width:768px; margin: auto;padding-top:20px'">
        <textarea 
          placeholder="Your messages ..." 
          :style="'width: 100%; height:250px;padding:20px;'" 
        />
      </div>
      <div :style="'display:flex;justify-content:center;margin-top:16px'">
        <button type="reset">Send Message</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'ContactSection'
  };
</script>

<style scoped>
  .container {
    box-sizing: border-box;
    padding: 120px 20px 50px 20px;
  }
  h2 {
    text-align: center;
    font-weight: 700;
  }
  .sub-title {
    font-size: 16px;
    font-weight: 500;
    width: 500px;
    margin: 0 auto;
    color: #4A5568;
    padding-bottom: 30px;
  }
  .form {
    padding: 20px;
    max-width: 768px;
    margin: auto;
    background-color: #F7FAFC;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
  }
  .form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin-bottom: 20px;
  }

  input, textarea {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 12px;
    border: 2px solid #E2E8F0;
    transition: border-color 0.3s ease; /* Smooth transition */
  }

  input:hover, textarea:hover {
    border: 2px solid #C5E6F9; /* Custom border on hover */
  }

  input:focus, textarea:focus {
    border: 2px solid #2B6CB0; /* Active/focus border color */
    outline: none; /* Remove default outline */
  }
   button {
    color: white;
    border-radius: 30px;
    padding: 8px 24px;
    font-size: 18px;
    background-image: linear-gradient(90deg, rgba(0,103,244,1) 0%, rgba(0,103,244,1) 35%, rgba(43,219,220,0.5) 100%);
    border: none;
  }
</style>
