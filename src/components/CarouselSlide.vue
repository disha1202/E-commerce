<template>
   <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
 
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/5/09de9a6e-3d66-4bd2-b325-91ad5a9f6c4a1630839964076-Kidswear_Dk--2-.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/3/f9669c9f-da41-4072-8ae2-7de1406de5c71630683367892-AW21-MainLaunchDesktopBanners-Unisex.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/5/55dfa5cc-c71e-4472-8071-76e1cfe321311630840040322-SportsShoes_Dk--1-.jpg" class="d-block w-100" alt="...">
    </div>
     <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active slide-ctrl-button" aria-current="true" aria-label="Slide 1"></button>
    <button class="slide-ctrl-button" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button class="slide-ctrl-button" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<style scoped>
.slide-ctrl-button{
    border-radius: 100%;
    height: 10px;
    width: 10px;
    /* background-color: brown; */
}
.carousel{
  margin: 50px 0px;
}
</style>