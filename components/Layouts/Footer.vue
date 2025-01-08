<template>
  <footer class="container  p-4">
    <div class="row p-4">
      <div class="col-lg-4 ">
        <img src="@/public/images/global/brand.png" height="36" width="36" :alt="$t('brand')">
        {{ $t('brand') }}
        <p class="py-2">{{ $t('description') }}</p>
      </div>
      <div class="col-lg-2">
        <ul class="list-unstyled">
          <li class="py-2">
            <nuxt-link class="link-underline-light text-color mx-3" to="/">{{ $t('landing.footer.about') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link class="link-underline-light text-color mx-3" to="/">{{ $t('landing.footer.contact') }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-lg-2">
        <ul class="list-unstyled">
          <li class="py-2">
            <nuxt-link class="link-underline-light text-color mx-3" to="/">{{
                $t('landing.header.nav.option.otn1')
              }}
            </nuxt-link>
          </li>
          <li >
            <nuxt-link class="link-underline-light text-color mx-3" to="/">{{
                $t('landing.header.nav.option.otn2')
              }}
            </nuxt-link>
          </li>
          <li class="py-2">
            <nuxt-link class="link-underline-light text-color mx-3" to="/">{{
                $t('landing.header.nav.option.otn3')
              }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-lg-4">
        <div class="input-group mb-3 position-relative">
          <input type="text" class="form-control rounded-4" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-primary footer-btn-send rounded-circle" type="button" id="button-addon2"></button>
        </div>

      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer-btn-send {
  position: absolute;
  left: 0;

}
</style>
<script setup lang="ts">
</script>