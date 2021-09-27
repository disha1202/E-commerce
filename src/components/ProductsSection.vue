<template>
  <div class="container">
    <div class="product" v-for="product in products" :key="product.title">
      <img class="product-img" :src="product.image" />
      <!-- <router-link :to="{name:'product', params:{title:product.title,image:product.image,price:product.price, description:product.description}}"><p><b>{{product.title}}</b></p></router-link> -->
      <router-link :to="{ name: 'product', params: { id: product.id } }"
        ><p>
          <b>{{ product.title }}</b>
        </p></router-link
      >
      <p>
        <b>Price :</b>
        <i18n-n :value="product.price" format="currency"></i18n-n>
      </p>
      <!-- <p><b>Price :</b> {{ $n(100, "currency") }}</p> -->
      <!-- <p>Product Details :{{product.description}}</p> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    };
  },
  props: ["category"],

  mounted() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      // console.log(response);
      // const products=[];
      this.products = response.data.filter(
        (product) => product.category === this.category
      );
      console.log(this.products);

      //   console.log(response.data);
    });
  },
  //   updated(){

  //    axios.get("https://fakestoreapi.com/products").then(response => {
  //     this.products = response.data.filter(product => product.category=== this.category);
  //     console.log(this.products);

  //     console.log(response.data);
  //    });

  //   }
  watch: {
    $route(to, from) {
      if (to !== from) {
        axios.get("https://fakestoreapi.com/products").then((response) => {
          console.log(response);
          // const products=[];
          this.products = response.data.filter(
            (product) => product.category === this.category
          );
          console.log(this.products);
        });
      }
    },
  },
};
</script>

<style scoped>
.product-img {
  height: 200px;
  width: 200px;
  margin: 10px;
}
.container {
  display: flex;
  margin: auto;
  padding: 0;
  width: 1200px;
  /* height: 400px; */
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* margin: 0px 50px; */
  margin-bottom: 30px;
}
.product {
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 40%);
  padding: 20px;
  margin: 50px 20px;
  width: 30%;
  border-radius: 30px;
}
a {
  color: black;
  text-decoration: none;
}
</style>
