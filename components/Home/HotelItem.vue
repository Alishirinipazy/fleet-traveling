<template>
  <div class="container my-4 ">
      <h3 class="text-bold text-center">{{$t("landing.sec2.title")}}</h3>
      <p class="text-center">{{$t("landing.sec2.des")}}</p>
    <div class="row my-5">
      <div class="col-lg-4 d-flex align-items-center justify-content-center">
        <div class="px-3">
        <img  src="~/public/images/Home/sec2/img1.png" width="120px" height="133px" class="img-fluid" alt="testImage">
        </div>
        <div class="">
        <p class="m-0">{{$t("landing.sec2.items.item1.name")}}</p>
          <span class="bg-secondary px-2 rounded-5">{{$t("landing.sec2.items.item1.count")}}</span>
        </div>
      </div>
      <div class="col-lg-4 d-flex align-items-center justify-content-center">
        <div class="px-3">
          <img  src="~/public/images/Home/sec2/img2.png" width="120px" height="133px" class="img-fluid" alt="testImage">
        </div>
        <div class="">
          <p class="m-0">{{$t("landing.sec2.items.item2.name")}}</p>
          <span class="bg-secondary px-2 rounded-5">{{$t("landing.sec2.items.item2.count")}}</span>
        </div>
      </div>
      <div class="col-lg-4 d-flex align-items-center justify-content-center">
        <div class="px-3">
          <img  src="~/public/images/Home/sec2/img.png" width="120px" height="133px" class="img-fluid" alt="testImage">
        </div>
        <div class="">
          <p class="m-0">{{$t("landing.sec2.items.item3.name")}}</p>
          <span class="bg-secondary px-2 rounded-5">{{$t("landing.sec2.items.item3.count")}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>