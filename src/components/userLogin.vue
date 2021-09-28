<template>
  <div class="container">
    <form>
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

      <button @click.prevent="login" class="login">Login</button>
      <button class="signup" @click.prevent="registerPage">
        Signup instead
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      users: [],
    };
  },
  methods: {
    login() {
      axios
        .get(
          "https://fir-login-register-d0ced-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
        )
        .then((response) => {
          console.log(response.data);
          const users = [];
          for (const id in response.data) {
            users.push({
              id: id,
              email: response.data[id].email,
              password: response.data[id].password,
            });
            console.log(users);
          }
          this.users = users;
          const loggedUser = this.users.find((user) => {
            if (user.email === this.email && user.password === this.password) {
              console.log(this.loggedUser);
              return true;
            }
          });
          console.log(loggedUser);
          if (loggedUser !== undefined) {
            alert("login successful");
            setTimeout(() => {
              this.$router.push("/");
            }, 2000);
          } else {
            alert("no such user");
          }
        });
    },
    registerPage() {
      this.$router.push({ name: "register" });
    },
  },
  provide: {
    // x
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
.login {
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
.signup {
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  padding: 13px 19px;
  color: #ff3f6c;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  border: none;
  border-radius: 50px;
  margin-top: 10px;
}
.signup:hover {
  background-color: #ffd4de;
}
</style>
