<template>
  <div class="container">
    <div class="section">
      <div class="content-section">
        <h2 data-aos="fade-up">Crafted for</h2>
        <p class="sub-title" data-aos="fade-up" data-aos-delay="100">
          Stop wasting time and money designing and managing a website that 
          doesn't get results. Happiness guaranteed!
        </p>

        <ul>
          <li data-aos="fade-up" data-aos-delay="200">
            <img src="/startup.png" height="44px" />
            <div class="item">
              <h5>Startup</h5>
              <p>Short description for the ones who look for something new.</p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="300">
            <img src="/saas-business.png" height="44px" />
            <div class="item">
              <h5>Agency</h5>
              <p>Short description for the ones who look for something new.</p>
            </div>
          </li>
        </ul>

         <ul>
          <li data-aos="fade-up" data-aos-delay="400">
            <img src="/agency.png" height="44px" />
            <div class="item">
              <h5>Saas Business</h5>
              <p>Short description for the ones who look for something new.</p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="500">
            <img src="/app-landing.png" height="44px" />
            <div class="item">
              <h5>App Landing</h5>
              <p>Short description for the ones who look for something new.</p>
            </div>
          </li>
        </ul>
      </div>
      <img src="/crafted-for.png" height="280px" data-aos="fade-left" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ServicesSection'
  };
</script>

<style scoped>
  .container {
    box-sizing: border-box;
    padding: 70px 20px 20px 20px;
  }
  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }
  .content-section {
    width: 60%;
    padding: 40px;
  }
  h2 {
    font-size: 32px;
    font-weight: 700;
  }
  .sub-title {
    width: 500px;
    margin-bottom: 30px;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 34px;
    padding-left: 0px;
  }
  li {
    padding: 4px;
    display: flex;
    align-items: flex-start;
    /* justify-content: space-between; */
    gap: 16px;
  }
  /* .item {
    display: ;
  } */
</style>
