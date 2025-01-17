<template>
  <div class="my-5 py-5">
    <h3 class="text-lg-center text-bold">{{$t('landing.about.title')}}</h3>
    <p class="text-lg-center">{{$t('landing.about.dis')}}</p>
    <div class="row my-5  py-4 ">
      <div class="col-lg-6 my-3 my-lg-0" >
        <div class="">
          <div class="">
            <span class="rounded-5  bg-warning px-3 ">1</span>
            <h5 class="text-bold my-3">{{$t('landing.about.items.item.title')}}</h5>
            <p>{{$t('landing.about.items.item.dis')}}</p>
          </div>
          <br>
          <div class="">
            <span class="rounded-5  bg-light px-3 ">2</span>
            <h5 class="text-bold my-3">{{$t('landing.about.items.item2.title')}}</h5>
            <p>{{$t('landing.about.items.item2.dis')}}</p>
          </div>
          <br>
          <div class="">
            <span class="rounded-5  bg-danger px-3 ">3</span>
            <h5 class="text-bold my-3">{{$t('landing.about.items.item3.title')}}</h5>
            <p>{{$t('landing.about.items.item3.dis')}}</p>
          </div>
        </div>
        <global-link-b-t-n link="/" :text="$t('link')"/>
      </div>
      <div class="col-lg-6 text-center">
        <img src="~/public/images/Home/about/img.png" class="img-fluid h-100 w-50 rounded-4" alt="image-aboute">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>