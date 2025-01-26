<script setup>
defineProps({
  text:String,
  link:String,
  icon:String
})
</script>
<template>
  <nuxt-link class="btn px-3 rounded-5 text-light" style="background-color: var(--second-color-text)" :to="link">
        {{ text}}
    <i v-if="icon" :class="icon"></i>
  </nuxt-link>
</template>
