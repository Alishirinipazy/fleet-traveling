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
        <h6> {{ $t('landing.footer.community') }}</h6>
        <div class="input-group mb-3 position-relative">
          <input type="text" class="form-control rounded-4" :placeholder="$t('landing.footer.email')" aria-label="Recipient's username" aria-describedby="button-addon2">

            <button class="bi-arrow-left-circle-fill btn footer-btn-send" :class="$i18n.locale==='en'?'bi-arrow-right-circle-fill ':'bi-arrow-left-circle-fill'"></button>

        </div>

      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer-btn-send {
  position: absolute;
  top: -1px;
  left: 12px;
  width: 30px;
  height: 30px;
  color: var(--second-color-text);
  font-size: 20px;
}

</style>
<script setup lang="ts">
</script>