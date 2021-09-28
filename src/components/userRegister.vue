<template>
  <div class="container">
    <form>
      <div class="name">
        <label for="name">{{ $t("main.name") }}</label
        ><br />
        <input type="text" id="name" v-model="name" />
      </div>

      <div class="email">
        <label for="email">{{ $t("main.email") }}</label
        ><br />
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="password">
        <label for="password">{{ $t("main.password") }}</label
        ><br />
        <input type="password" id="password" v-model="password" />
      </div>

      <button @click.prevent="register" type="submit">Register</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      axios.post(
        "https://fir-login-register-d0ced-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        {
          name: this.name,
          email: this.email,
          password: this.password,
        }
      );
      alert("Registration Successful");
      this.name = "";
      this.email = "";
      this.password = "";

      setTimeout(() => {
        this.$router.push({ name: "login" });
      }, 2000);
    },
  },
};
</script>
<style scoped>
.container {
  margin: auto;
  padding: 50px;
  /* width: 30%; */
  border-radius: 20px;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 40%);
  margin-top: 100px;
}
div {
  width: 500px;
}
input {
  width: 400px;
  margin: 10px 0px;
}
label {
  font-weight: 900;
}
button {
  cursor: pointer;
  background-color: #ff3f6c;
  text-align: center;
  padding: 13px 19px;
  color: #fff;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  border: none;
  border-radius: 50px;
  margin: 10px;
}
</style>
