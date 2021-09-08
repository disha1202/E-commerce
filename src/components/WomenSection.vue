<template>
<div class="container">
  <div class="product" v-for="product in products" :key ="product.title">
         <img class="product-img" :src="product.image" />
          <p><b>{{product.title}}</b></p>
         <p><b>Price :</b>{{ product.price}} </p>
         <!-- <p>Product Details :{{product.description}}</p> -->
        
    </div>
</div>

  
</template>
<script>
 import axios from 'axios';
export default {
  data(){
    return{
   products:[]
    }
   
  },
  
  
  
  beforeMount(){
// fetch('https://fakestoreapi.com/products?limit=5')
//             .then(res=>res.json())
//             .then(data=>{
//               console.log(data);
//               this.products = data;
              
//             });
axios.get("https://fakestoreapi.com/products").then(response => {
    
    console.log(response);
    // const products=[];
    this.products = response.data.filter(product => product.category==="women's clothing")
    console.log(this.products);

//   console.log(response.data);
});

  }
}
</script>

<style scoped>
.product-img{
    height: 200px;
    width: 200px;
    margin: 10px;
}
.container{
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
.product{
   box-shadow: 0 4px 12px 0 rgb(0 0 0 / 40%);
    padding: 20px;
    margin: 50px 20px;
    width: 30%;
  
}
</style>