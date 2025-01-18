<template>
  <div class="container">
    <div class="section">
      <div class="content-section">
        <h2>Crafted for</h2>
        <p class="sub-title">
          Stop wasting time and money designing and managing a website that 
          doesn't get results. Happiness guaranteed!
        </p>

        <ul>
          <li>
            <img src="/startup.png" height="44px" />
            <div class="item">item 1</div>
          </li>
          <li>
             <img src="/startup.png" height="44px" />
            <div class="item">item 1</div>
          </li>
        </ul>

         <ul>
          <li>
             <img src="/startup.png" height="44px" />
            <div class="item">item 1</div>
          </li>
          <li>
             <img src="/startup.png" height="44px" />
            <div class="item">item 1</div>
          </li>
        </ul>
      </div>

      <img src="/crafted-for.png" height="280px" />
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
    padding: 20px;
    background-color: rgb(170, 221, 192);
  }
  .section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    background: rgb(198, 176, 219);
    gap: 20px;
  }
  .content-section {
    background: rgb(124, 209, 235);
    width: 60%;
    padding: 40px;
  }
  h2 {
    font-size: 32px;
    font-weight: 700;
  }
  .sub-title {
    width: 500px;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 34px;
    padding-left: 0px;
  }
  li {
    padding: 20px;
    display: flex;
    align-items: flex-start;
    /* justify-content: space-between; */
    gap: 16px;
    background: rgb(240, 182, 141);
  }
  /* .item {
    display: ;
  } */
</style>
