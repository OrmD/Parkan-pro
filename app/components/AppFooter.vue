<script setup lang="ts">
import data from "@/assets/data-json/footer.json";
</script>

<template>
  <footer
    class="bg-primary text-white text-sm pt-8 pb-4 mobile:py-10 laptop:py-20 px-4 mobile:px-10 desktop:p-20"
  >
    <div
      class="flex justify-between gap-6 max-laptop:flex-wrap mb-8 mobile:mb-10"
    >
      <ul class="flex flex-col gap-3 max-w-53.5 w-full items-start">
        <li class="uppercase text-white-d3">Контакти</li>
        <li v-for="item in data.contacts" class="font-medium">
          {{ item }}
        </li>
        <li class="flex gap-6">
          <NuxtLink v-if="data.social.instagram" :href="data.social.instagram">
            <Icon name="lucide:instagram" size="20" />
          </NuxtLink>
          <NuxtLink v-if="data.social.viber" :href="data.social.viber">
            <Icon name="uil:whatsapp" size="20" />
          </NuxtLink>
          <NuxtLink v-if="data.social.telegram" :href="data.social.telegram">
            <Icon name="uil:telegram-alt" size="20" />
          </NuxtLink>
          <NuxtLink v-if="data.social.facebook" :href="data.social.facebook">
            <Icon name="lucide:facebook" size="20" />
          </NuxtLink>
        </li>
      </ul>
      <FooterItem :data="data.production" title="продукція" />
      <FooterItem :data="data.decisions" title="рішення" />
      <FooterItem :data="data.recursions" title="ресурси" />
      <FooterItem :data="data.forClients" title="клієнтам" />
      <FooterItem :data="data.company" title="компанія" />
    </div>
    <p class="text-mini">{{ data.footerText }}</p>
  </footer>
</template>
