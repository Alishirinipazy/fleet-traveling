<template>
  <div :style="{direction: $i18n.locale==='en' ?'ltr':'rtl'}">
    <nuxt-layout>
      <nuxt-page/>
    </nuxt-layout>
  </div>
</template>
<script setup>
import {useI18n} from "vue-i18n";
import('bootstrap/dist/css/bootstrap.rtl.css')

const i18n = useI18n();

if (i18n.locale.value === "fa") {
  import('bootstrap/dist/css/bootstrap.rtl.css')
} else {
  import('bootstrap/dist/css/bootstrap.css')
}

console.log(i18n)
</script>
<style>

</style>