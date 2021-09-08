<template>
   <div class="navbar">
        
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <ul>
           <router-link to="/"><img class="logo" src="../assets/myntra-logo.png" alt="" ></router-link> 
            <li> <router-link to="/men">MEN</router-link></li>
            <li><router-link to="/women">WOMEN</router-link></li>
            <li><router-link to="/electronics">ELECTRONICS</router-link></li>
            <li><router-link to="/jewelery">JEWELERY</router-link></li>
            
        </ul>
    </div>
</template>
<style scoped> 
.navbar{
     height: 80px;
   box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
}
ul{
    list-style-type:none;
    display: flex;
    width: 40%;
    justify-content: space-around;
    font-weight: 700;
   padding: 0;
    font-size: 15px;
}
.logo{
    height: 60px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}
li{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}
a{
    text-decoration: none;
    color: black;
}
</style>