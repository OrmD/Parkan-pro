<script setup lang="ts">
import { computed, ref } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

const handleOpenModal = () => {
  const isOpen = ref(false);
  isOpen.value = !isOpen.value;
};

const iconSize = computed(() => {
  if (width.value < 375) return 36;
  if (width.value < 768) return 42;
  if (width.value < 1024) return 54;
  return 54;
});
</script>

<template>
  <header
    class="flex justify-between px-4 z-20 mobile:px-10 w-full fixed top-0 left-0 items-center text-mobile text-white py-4"
  >
    <Icon name="lucide:store" :size="iconSize" class="mr-10" />
    <nav class="mr-auto tablet:block hidden">
      <ul class="flex gap-8 items-center text-sm">
        <li>
          <UiButton class="px-10">
            <Icon name="lucide:layout-grid" size="20" />
            Каталог
          </UiButton>
        </li>
        <li>
          <NuxtLink href="/">Контакти</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/">Про нас</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/">Блог</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/">Проєкти</NuxtLink>
        </li>
      </ul>
    </nav>
    <div>
      <ul class="flex gap-5 mobile:gap-9 tablet:gap-10.5">
        <li>
          <Icon name="lucide:search" size="20" />
        </li>
        <ModalUser />

        <li class="hidden mobile:inline-block">
          <Icon name="lucide:heart" size="20" />
        </li>
        <li>
          <Icon name="lucide:shopping-cart" size="20" />
        </li>
        <li class="tablet:hidden block">
          <Icon name="lucide:menu" size="20" />
        </li>
      </ul>
    </div>
  </header>
</template>
