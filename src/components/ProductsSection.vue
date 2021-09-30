<template>
  <div class="filter">
    <button class="b1" :class="highToLowClass" @click="highToLow">
      Price: High to Low
    </button>
    <button class="b2" :class="lowToHighClass" @click="lowToHigh">
      Price: Low to High
    </button>
  </div>
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
        <!-- <i18n-n :value="product.price" format="currency"></i18n-n> -->
        {{ $n(product.price, "currency") }}
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
      highToLowClass: "",
      lowToHighClass: "",
    };
  },
  props: ["category"],
  methods: {
    lowToHigh() {
      this.products.sort((a, b) => {
        this.lowToHighClass = "active";
        this.highToLowClass = "";
        return a.price - b.price;
      });
    },
    highToLow() {
      this.lowToHighClass = "";
      this.highToLowClass = "active";
      this.products.sort((a, b) => b.price - a.price);
    },
  },
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
          this.lowToHighClass = "";
          this.highToLowClass = "";
          console.log(this.products);
        });
      }
    },
  },
};
</script>

<style scoped>
.product-img {
  width: 200px;
  margin: 10px;
}
.container {
  display: flex;
  margin: auto;
  padding: 10px;
  width: 1200px;
  /* height: 400px; */
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* margin: 0px 50px; */
  margin-bottom: 30px;
  margin-top: 50px;
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
.filter {
  position: absolute;
  right: 30px;
  top: 110px;
}
.b1,
.b2 {
  cursor: pointer;
  background-color: #fff;
  text-align: center;
  padding: 13px 19px;
  color: #ff3f6c;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  border: none;
  border-radius: 50px;
  margin: 10px;
}
.b1:hover,
.b2:hover {
  background-color: #ffd4de;
}
.active {
  background-color: #ffd4de;
}
</style>
