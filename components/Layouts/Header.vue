<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary py-2 px-lg-5 mx-lg-3">
      <div class="container">
        <a class="navbar-brand bo  px-3" href="#">
          <img src="@/public/images/global/brand.png" height="36" width="36" :alt="$t('brand')">
          {{ $t('brand') }}

        </a>


        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-lg-flex justify-content-between w-100 h-100 align-items-center">
            <div class="">
              <select class=" select-header px-3">
                <option>
                  {{ $t('landing.header.nav.option.otn1') }}
                </option>
                <option>
                  {{ $t('landing.header.nav.option.otn2') }}
                </option>
                <option>
                  {{ $t('landing.header.nav.option.otn3') }}
                </option>
              </select>
            </div>
            <div class="d-flex flex-wrap justify-content-around align-items-center my-2">
              <nuxt-link to="/" class="link-underline-light text-color mx-3">
                {{ $t('landing.header.nav.support') }}
              </nuxt-link>
              <select  id="locale-select" class="select-header mx-1" v-model="$i18n.locale">
                <option value="en">English</option>
                <option value="fa"> فارسی</option>
              </select>
              <div class="dropdown mx-1 position-relative " >
                <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  <svg class="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_6765_28406)">
                      <path d="M21 18.0233C21 18.5113 20.6043 18.907 20.1163 18.907H3.88372C3.39565 18.907 3 18.5113 3 18.0233C3 17.5352 3.39566 17.1395 3.88372 17.1395H3.9V10.9809C3.9 6.57288 7.527 3 12 3C16.473 3 20.1 6.57288 20.1 10.9809V17.1395H20.1163C20.6043 17.1395 21 17.5352 21 18.0233ZM5.7 17.1395H18.3V10.9809C18.3 7.5494 15.4794 4.76744 12 4.76744C8.5206 4.76744 5.7 7.5494 5.7 10.9809V17.1395ZM9.97604 20.7558C9.73121 20.2608 10.1977 19.7907 10.75 19.7907H13.25C13.8023 19.7907 14.2688 20.2608 14.024 20.7558C13.9155 20.9751 13.7699 21.1773 13.591 21.3529C13.169 21.7672 12.5967 22 12 22C11.4033 22 10.831 21.7672 10.409 21.3529C10.2301 21.1773 10.0845 20.9751 9.97604 20.7558Z" fill="#777E91"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_6765_28406">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>

                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                <i class="not"></i>
              </div>

              <nuxt-link to="/" class=" link-underline-light text-color mx-3 border py-1 px-2 rounded  ">
                <i class="bi bi-box-arrow-in-right"></i>
                {{ $t('landing.header.nav.account') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import {useI18n} from "vue-i18n";

const i18n = useI18n();

useHead({
  // title:t('brand')
})
</script>
<style>
.select-header {
  background: none;
  border: none;
  color: var(--main-color-text);
  height: 35px;
}
.not {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius:15px;
  right: 3px;
  top: 3px;
  background-color: #58C27D;
}

</style>