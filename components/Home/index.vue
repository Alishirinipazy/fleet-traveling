<template>
  <div class="d-flex flex-wrap align-items-start   position-relative home-set-style ">
    <div class="home-sec1-caption p-5   ">
      <h3 class="text-bold  ">{{$t("landing.sec1.title")}}
        <br>
      <a class="navbar-brand   px-3" href="#">
        <img src="@/public/images/global/brand.png" height="36" width="36" :alt="$t('brand')">
        {{ $t('brand') }}
      </a>
      </h3>
      <p class="text-bold">{{$t("landing.sec1.description")}}</p>
      <GlobalLinkBTN :text="$t('landing.sec1.link')" link="/product" />
    </div>
    <img src="@/public/images/Home/img.png" class="img-fluid home-sec1-image  rounded-5" alt="">
  </div>
    <div class="home-sec1-reserve mx-5">
      <GlobalTab />
    </div>

</template>
<script setup>

</script>
<style>
.home-set-style {
  position: relative;
}
.home-sec1-caption {
  position: absolute;

}
.home-sec1-caption h3 {
  font-size: 45px;
}
.home-sec1-reserve {
  margin-top: -110px;
  box-shadow: 0px 19px 10px #fafafa;
}
@media (max-width: 700px) {
  .home-sec1-caption {
    position: relative;
    text-align: center;
  }
  .home-sec1-image {
    height: 150px;
  }
  .home-sec1-reserve {
    margin: 0;
  }
  .home-sec1-caption h3 {
    font-size: 20px;
  }
}
</style>