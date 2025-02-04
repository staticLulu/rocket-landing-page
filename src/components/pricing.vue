<template>
  <div class="pricing-section">
    <div class="container">
      <h2 :style="'text-align: center; padding-top: 20px;'" data-aos="fade-up">Our Pricing</h2>
      <div 
        :style="'display:flex;justify-content:center;'" 
        data-aos="fade-up" 
        data-aos-delay="100"
      >
        <p :style="'text-align: center;width:480px;color:#4A5568;'">
          Stop wasting time and money designing and managing a website that 
          doesn't get results. Happiness guaranteed!
        </p>
      </div>
      <div 
        class="card-list" 
        :style="'padding-top: 30px'" 
        data-aos="fade-up" 
        data-aos-delay="200"
      >
        <!-- first -->
        <div class="card">
          <p class="card-header" :style="'color: #81E6D9'">BASIC</p>
          <div class="border-bottom-card-header" :style="'border-color: #81E6D9'"></div>
          <div class="card-title">
            <h1 :style="'display: flex;margin-bottom: 0px;'">199</h1>
            <p>$</p>
          </div>
          <p :style="'text-align:center;color: #4A5568;font-weight: 500'">per year</p>

          <ul>
            <li>
              <img src="/check.png" height="18px" :style="'margin-right: 16px'" />
              Carefully crafted components
            </li>
            <li>
              <img src="/check.png" height="18px" :style="'margin-right: 16px'" />
              Amazing page examples
            </li>
            <li>
              <img src="/check.png" height="18px" :style="'margin-right: 16px'" />
                Super friendly support team
            </li>
            <li>
              <img src="/check.png" height="18px" :style="'margin-right: 16px'" />
                Awesome Support
            </li>
          </ul>
          <div class="outer-get-started-btn">
            <button class="get-started-btn">
                GET STARTED
            </button>
          </div>
          <img src="/bottom-card1.png" height="140px" class="image-bottom-card" />
        </div>
        <!-- second -->
        <div 
          class="card" :style="'position: relative;'">
          <img src="/balloon.png" height="192px" :style="'position: absolute; right:0px'" />
          <p class="card-header" :style="'color: #0067F4'">PRO</p>
          <div class="border-bottom-card-header" :style="'border-color: #0067F4'"></div>
          <div class="card-title">
            <h1 :style="'display: flex;margin-bottom: 0px;'">399</h1>
            <p>$</p>
          </div>
          <p :style="'text-align:center;color: #4A5568;font-weight: 500'">per year</p>

          <ul>
            <li>
              <img src="/check.png" height="18px" :style="'margin-right: 16px'" />
              Carefully crafted components
            </li>
            <li>
              <img src="/check.png" height="18px" :style="'margin-right: 16px'" />
              Amazing page examples
            </li>
            <li>
              <img src="/check.png" height="18px" :style="'margin-right: 16px'" />
                Super friendly support team
            </li>
            <li>
              <img src="/check.png" height="18px" :style="'margin-right: 16px'" />
                Awesome Support
            </li>
          </ul>
          <div class="outer-get-started-btn">
            <button class="get-started-btn">
                GET STARTED
            </button>
          </div>
          <img src="/bottom-card2.png" height="140px" class="image-bottom-card" />
        </div>
        <!-- third -->
        <div class="card" :style="'position: relative;'">
          <img src="/flower.png" height="192px" :style="'position: absolute; right:0px'" />
          <p class="card-header" :style="'color: #4DA422'">ENTERPRISE</p>
          <div class="border-bottom-card-header" :style="'border-color: #4DA422'"></div>
          <div class="card-title">
            <h1 :style="'display: flex;margin-bottom: 0px;'">199</h1>
            <p>$</p>
          </div>
          <p :style="'text-align:center;color: #4A5568;font-weight: 500'">per year</p>

          <ul>
            <li>
              <img src="/check.png" height="18px" :style="'margin-right: 16px'" />
              Carefully crafted components
            </li>
            <li>
              <img src="/check.png" height="18px" :style="'margin-right: 16px'" />
              Amazing page examples
            </li>
            <li>
              <img src="/check.png" height="18px" :style="'margin-right: 16px'" />
                Super friendly support team
            </li>
            <li>
              <img src="/check.png" height="18px" :style="'margin-right: 16px'" />
                Awesome Support
            </li>
          </ul>
          <div class="outer-get-started-btn">
            <button class="get-started-btn">
                GET STARTED
            </button>
          </div>
          <img 
            src="/bottom-card3.png" 
            height="140px" 
            class="image-bottom-card" 
          />
        </div>
      </div>

      <div class="learn-more-section" :style="'margin-bottom:20px'">
        <img src="/learn-more.png" width="50%" height="300px" />
        <div class="learn-more-content">
          <h2 data-aos="fade-up" data-aos-delay="100">Curious to Learn More? Stay Tuned</h2>
          <p class="sub-title" data-aos="fade-up" data-aos-delay="200">
            You let us know whenever you want us to update 
            anything or think something can be optimized.
          </p>
          <div class="input-container" data-aos="fade-up" data-aos-delay="300">
            <!-- <img src="/mail.png" width="30px" height="auto" class="mail-icon" /> -->
            <input type="text" placeholder="helloworld@gmail.com" />
            <!-- <button class="subscribe-btn">SUBSCRIBE</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PricingSection'
  };
</script>

<style scoped>
  .pricing-section {
    background-color: #F7FAFC;
  }
  .container {
    min-height: 100vh;
    box-sizing: border-box;
    padding: 100px 20px 20px 20px;
  }
  .learn-more-section {
    background-color: #3182CE;
    display: flex;
    align-items: center;
    margin-top: 60px;
    align-items: center;
    /* height: 346px !important; */
  }
  .learn-more-content {
    padding: 20px;
    width: 100%;
    text-align: center;
    color: white;
  }
  h2 {
    font-size: 32px;
    font-weight: 700;
    width: 400px;
    margin: 0 auto;
    margin-bottom: 16px;
  }
  .sub-title {
    font-size: 18px;
    font-weight: 500;
    width: 500px;
    margin: 0 auto;
  }
  input {
    padding: 14px 20px 14px 60px;
    width: 380px;
    margin: 0 auto;
    margin-top: 16px;
    border: none;
    border-radius: 30px;
    position: relative;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    font-size: 14px;
    font-weight: 500; 
    color: #aaa; 
    position: absolute; 
    left: 60px;
  }
  .input-container {
  position: relative;
}

.mail-icon {
  position: absolute;
  top: 60%;
  left: 80px;
  transform: translateY(-50%);
  z-index: 1;
}

button {
  color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  width: fit-content;
}

.subscribe-btn {
  position: absolute;
  background-color: #3182CE;
  border: 1px solid #3182CE;
  top: 23px;
  right: 68px;
  padding: 6px 14px;
}
  /* .input-container {
    position: relative;
  }
  .mail-icon {
    position: absolute;
    top: 60%;
    left: 126px;
    transform: translateY(-50%);
    z-index: 1;
  }
  button {
    color: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
    width: fit-content;
  }
  .subscribe-btn {
    position: absolute;
    background-color: #3182CE;
    border: 1px solid #3182CE;
    top: 23px;
    right: 118px;
    padding: 6px 14px;
  } */
  .outer-get-started-btn {
    display: flex;
    justify-content: center;
    margin-top:20px;
  }
  .get-started-btn {
    border: none;
    padding: 8px 20px;
    font-size: 16px;
    font-weight: 600;
    background-image: linear-gradient(90deg, rgba(0,103,244,1) 0%, rgba(0,103,244,1) 35%, rgba(43,219,220,0.5) 100%);
    position: absolute
  }
  .card-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0px 120px;
  }
  .card {
    padding: 16px 0px 0px 0px;
    border: none;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    transition: transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), 
    box-shadow 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), 
    background-color 0.5s ease;
    overflow: hidden; 
  }
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition-duration: 700ms;
    cursor: pointer;
  }
  .card-header {
    border: none;
    background-color: transparent;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
  }
  .border-bottom-card-header {
    border-bottom: 4px solid;
    width: 80px;
    margin: 0 auto;
    display: block;
  }
  .card-title {
    display: flex;
    align-items: baseline;
    justify-content: center;
    color: #1A202C;
    font-weight: 700;
    margin-top: 10px;
  }
  ul {
    list-style: none;
    display: grid;
    gap: 10px;
    justify-content: center;
    padding-right: 8px;
  }
  li {
    display: flex;
    align-items: center;
  }
  .image-bottom-card {
    object-fit: cover;
    object-position: center;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  
</style>
