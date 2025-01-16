<template>
  <div class="footer-section">
    <footer>
      <div class="logo">
        <img src="/rocket-footer.png" height="34px" />
        ROCKET LANDING PAGE
      </div>

      <div class="menu-list">
         <ul>
          <p class="menu-header">Company</p>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li>
            <router-link to="/career">Career</router-link>
          </li>
        </ul>

        <ul>
          <p class="menu-header">Product & Services</p>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Business</a>
          </li>
          <li>
            <a href="">Developer</a>
          </li>
        </ul>

        <ul>
          <p class="menu-header">Help & Suuport</p>
          <li>
            <a href="">Support Center</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Terms & Conditions</a>     
          </li>
        </ul>

        <ul>
          <p class="menu-header">Subscribe Newsletter</p>
          <li>
            <input type="email" placeholder="Enter your email" />
          </li>
          <li>
            <a href="">Subscribe weekly newsletter to stay upto date. We don't send spam.</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
  <p class="footer-bottom">
    made with ❤️ by dangmakara (@staticLulu)
  </p>
</template>

<script>
  export default {
    name: 'Footer'
  };
</script>

<style scoped>
  .footer-section {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #F7FAFC;
    padding: 20px;
  }
  footer {
    max-width: 1280px;
    margin: 0 auto;
  }

  .logo {
    color: #0067F4;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .footer-bottom {
    background-color: #2A4365;
    color: white;
    margin-bottom: 0px;
    padding: 8px;
    text-align: center;
  }
  .menu-header {
    font-size: 18px;
    font-weight: 600;
    color: #4A5568;
    margin-bottom: 0px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    display: grid;
    gap: 16px;
  }
  li,a {
    color: #1A202C;
    font-weight: 500;
  }
  .menu-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 20px;
  }
  input {
    width: 300px;
    padding: 8px;
    border: 1px solid #E2E8F0;
    border-radius: 4px;
  }

</style>
