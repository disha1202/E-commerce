<template>
  <div class="container">
    <div class="image">
      <img :src="product.image" alt="" />
    </div>
    <div class="details">
      <h2>{{ product.title }}</h2>
      <h3>Price: {{ product.price }}</h3>
      <!-- {{ $n(product.price, "currency") }} -->
      <p>{{ product.description }}</p>
      <!-- <i18n-n :value="product.price" format="currency"></i18n-n> -->
      <!-- <p>{{ $n(product.price, "currency") }}</p> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products/" + this.id)
      .then((response) => {
        // console.log(response);
        // const products=[];
        this.product = response.data;
        console.log(this.product);
        console.log(this.product.price);

        //   console.log(response.data);
      });
  },
};
</script>
<style scoped>
.container {
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 40%);
  padding: 40px;
  margin: 60px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
  width: 60%;
}

.image,
.details {
  margin: 20px;
}

img {
  height: 300px;
  width: 300px;
}
</style>
