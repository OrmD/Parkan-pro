<script setup lang="ts">
const props = defineProps<{
  data: {
    title: string;
    link: string;
    items: {
      id: number;
      title: string;
      description?: string;
      link: string;
      image?: string;
      city?: string;
      time?: string;
      bages?: {
        lenght?: string;
        color?: string;
        variant?: string;
      };
    }[];
  };
}>();
</script>
<!-- TODO:
  1. Добавити на мобілці інші бейджі у верхній частині карток -->

<template>
  <SectionsContainer :title="data.title">
    <UiCarousel class="mb-6 large:mb-11 desktop:mb-7.5">
      <div
        class="tablet:flex hidden absolute -top-10 right-10 desktop:right-20 w-full max-w-24"
      >
        <UiCarouselNext class="right-0 left-none bg-none shadow-none" />
        <UiCarouselPrevious class="left-0 right-none bg-none shadow-none" />
      </div>
      <UiCarouselContent class="mobile:ml-5 ml-1 tablet:ml-6 large:ml-16">
        <UiCarouselItem
          class="basis-83 pl-4 tablet:pl-5"
          v-for="item in data.items"
          :key="item.id"
        >
          <SectionsCarouselItem :item="item" />
        </UiCarouselItem>
      </UiCarouselContent>
    </UiCarousel>
    <NuxtLink
      v-if="data.link"
      :href="data.link"
      class="text-primary text-sm tablet:justify-end ml-10 tablet:mr-10 desktop:mr-25 flex items-center"
    >
      Дізнатись більше
      <Icon name="lucide:arrow-up-right" size="20" class="ml-2" />
    </NuxtLink>
  </SectionsContainer>
</template>
