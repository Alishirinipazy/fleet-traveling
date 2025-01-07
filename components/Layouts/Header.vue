<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary px-3">
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
          <div class="d-flex justify-content-between w-100 h-100 align-items-center">
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
            <div class="">
              <nuxt-link to="/" class="link-underline-light text-color mx-3">
                {{ $t('landing.header.nav.support') }}
              </nuxt-link>
              <select id="locale-select" class="select-header" v-model="$i18n.locale">
                <option value="en">en</option>
                <option value="fa">fa</option>

              </select>
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

</style>