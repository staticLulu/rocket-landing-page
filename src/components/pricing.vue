<template>
  <div class="container">
    <h2 :style="'text-align: center; padding-top: 20px;'">Our Pricing</h2>
    <div class="card-list" :style="'padding-top: 20px'">
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
        <div :style="'display: flex;justify-content: center;'">
          <button :style="'width: fit-content;'">GET STARTED</button>
        </div>
        <img src="/bottom-card1.png" height="140px" class="image-bottom-card" />
      </div>
      <!-- second -->
       <div class="card" :style="'position: relative;'">
        <img src="/baloon.png" height="192px" :style="'position: absolute; right:0px'" />
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
        <div :style="'display: flex;justify-content: center;'">
          <button :style="'width: fit-content;'">GET STARTED</button>
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
        <div :style="'display: flex;justify-content: center;'">
          <button :style="'width: fit-content;'">GET STARTED</button>
        </div>
        <img 
          src="/bottom-card3.png" 
          height="140px" 
          class="image-bottom-card" 
        />
      </div>
    </div>

    <div class="learn-more-section">
      <img src="/learn-more.png" width="50%" height="auto" />
      <div class="learn-more-content">
        <h2>Curious to Learn More? Stay Tuned</h2>
        <p class="sub-title">You let us know whenever you want us to update anything or think something can be optimized.</p>
        <div class="input-container">
          <img src="/mail.png" width="30px" height="auto" class="mail-icon" />
          <input type="text" placeholder="helloworld@gmail.com" />
          <button class="subscribe-btn">SUBSCRIBE</button>
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
  .container {
    min-height: 100vh;
    box-sizing: border-box;
    padding: 20px;
    background-color: rgb(247, 168, 207);
  }
  .learn-more-section {
    background-color: #3182CE;
    display: flex;
    align-items: center;
    margin-top: 50px;
    align-items: center;
    height: 346px !important;
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
    padding: 14px 20px 14px 60px; /* Add consistent padding for input */
    width: 380px;
    margin: 0 auto;
    margin-top: 16px;
    border: none;
    border-radius: 30px;
    position: relative;
  }
  input:focus {
    outline: none; /* Ensure no additional styles affect focus */
  }
  input::placeholder {
    font-size: 14px;
    font-weight: 500; 
    color: #aaa; /* Adjust placeholder color for visibility */
    position: absolute; /* Prevent placeholder from moving */
    left: 60px; /* Align placeholder with input padding */
  }
  .input-container {
    position: relative;
  }
  .mail-icon {
    position: absolute;
    top: 60%;
    left: 126px;
    transform: translateY(-50%);
    z-index: 1;
  }
  .subscribe-btn {
    position: absolute;
    top: 25px;
    right: 120px;
  }
  button {
    border: 1px solid #3182CE;
    background-color: #3182CE;
    color: white;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 14px;
    padding-right: 14px;
    border-radius: 30px;
  }
  .card-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
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
    transform: scale(1.10);
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
