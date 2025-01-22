<template>
  <div :style="'background-color:#C5E6F9;padding-bottom:30px;padding-top:60px'">
    <div class="container">
      <h2 data-aos="fade-up">Handcrafted Landing Page for Startups and SaaS Businesses</h2>
      <p class="sub-title" data-aos="fade-up" data-aos-delay="50">
        A simple, customizable, and, beautiful SaaS business 
        focused landing page to make your project closer to launch!
      </p>

      <div 
        :style="'display:flex;justify-content: center;gap:26px;margin-top:30px'" 
        data-aos="fade-up" 
        data-aos-delay="100"
      >
        <button class="get-in-touch-button" @click="scrollToContact">Get in touch</button>
        <button class="watch-video-button" @click="showVideo">
          Watch the Video
          <img src="/play.png" height="30px" alt="Play">
        </button>
      </div>

      <div class="hero-image" data-aos="fade-up" data-aos-delay="200">
        <img src="/hero.png" height="340px">
      </div>
    </div>

    <!-- Modal for YouTube Video -->
    <div v-if="isVideoModalVisible" class="video-modal">
      <div class="video-modal-content">
        <button class="close-button" @click="closeVideo">x</button>
        <iframe
          width="1024px"
          height="600px"
          :src="youtubeEmbedUrl"
          title="YouTube video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
  import AOS from "aos";

  export default {
    name: "HeroSection",
    data() {
      return {
        isVideoModalVisible: false,
        youtubeEmbedUrl: "https://www.youtube.com/embed/M1amrI0b5S0?autoplay=1&mute=1",
      };
    },
    methods: {
      scrollToContact() {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      },
      showVideo() {
        this.isVideoModalVisible = true;
      },
      closeVideo() {
        this.isVideoModalVisible = false;
      },
    },
    mounted() {
      AOS.init({
        duration: 800,
      });
    },
  };
</script>

<style scoped>
  .container {
    box-sizing: border-box;
    padding: 50px 20px 20px 20px;
  }
  h2 {
    max-width: 500px;
    margin: auto;
    text-align: center;
    padding-bottom: 30px;
    font-weight: 700;
  }
  .sub-title {
    font-size: 18px;
    font-weight: 500;
    width: 500px;
    margin: 0 auto;
    color: #4A5568;
    text-align: center;
  }
  button {
    border-radius: 30px;
    padding: 8px 24px;
    font-size: 18px;
    border: none;
  }
  .get-in-touch-button {
    color: white;
    background-image: linear-gradient(90deg, rgba(0,103,244,1) 0%, rgba(0,103,244,1) 35%, rgba(43,219,220,0.5) 100%);
  }
  .get-in-touch-button:hover {
    background-image: linear-gradient(90deg, rgb(101, 165, 253) 0%, rgb(146, 190, 252) 35%, rgba(137, 219, 219, 0.5) 100%);
  }
  .get-in-touch-button:hover {
  background-image: linear-gradient(90deg, rgba(0, 123, 255, 1) 0%, rgba(0, 123, 255, 1) 35%, rgba(65, 239, 242, 0.7) 100%);
  }
  .watch-video-button {
    color: #3182CE;
    background-color: white;
  }

  /* Modal styles */
  .video-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .video-modal-content {
    position: relative;
    background-color: none;
    padding: 0;
    border-radius: 8px;
    overflow: hidden;
  }
  iframe {
    display: block;
    border: none;
    border-radius: 8px;
    padding: 40px;
  }
  .close-button {
    position: absolute;
    top: -10px;
    right: -10px;
    border: none;
    font-size: 24px;
    color: whitesmoke;
    cursor: pointer;
    background: transparent;
  }
  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 44px;
    animation: customAnimation 3s infinite;
    animation-delay: 1s; /* Delay for AOS duration */
    opacity: 0; /* Start invisible for AOS to handle */
  }

  .hero-image[data-aos][data-aos-complete] {
    opacity: 1; /* Ensure visibility after AOS animation completes */
  }

  @keyframes customAnimation {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(-20px);
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

</style>
