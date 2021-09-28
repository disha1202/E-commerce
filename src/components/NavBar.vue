<template>
  <div class="navbar">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <ul>
      <router-link to="/"
        ><img class="logo" src="../assets/myntra-logo.png" alt=""
      /></router-link>
      <li>
        <router-link :to="{ name: 'category', params: { category: men } }"
          >{{ $t("main.men") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'category', params: { category: women } }"
          >{{ $t("main.women") }}
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'category', params: { category: 'electronics' } }"
          >{{ $t("main.electronics") }}
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'category', params: { category: 'jewelery' } }"
          >{{ $t("main.jewelery") }}
        </router-link>
      </li>
    </ul>
    <!-- <p>{{ loggedUser.name }}</p> -->
    <router-link :to="{ name: 'login' }" class="loginRegister"
      >Login/Signup</router-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      men: "men's clothing",
      women: "women's clothing",
    };
  },
};
</script>
<style scoped>
.navbar {
  height: 80px;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
}
ul {
  list-style-type: none;
  display: flex;
  width: 40%;
  justify-content: space-around;
  font-weight: 700;
  padding: 0;
  font-size: 15px;
}
.logo {
  height: 60px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
li {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
a {
  text-decoration: none;
  color: black;
}
.loginRegister {
  margin-right: 20px;
  font-weight: 700;
  font-size: 20px;
  padding: 10px;
}
.loginRegister:hover {
  border: 2px solid #ff3f6c;
}
</style>
