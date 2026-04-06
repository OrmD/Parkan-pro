<script setup lang="ts">
defineProps<{
  data: {
    title: string;
    image: string;
    slider_items: {
      id: number;
      title: string;
      description: string;
      image: string;
      link: string;
    }[];
  };
}>();
</script>

<template>
  <SectionsContainer :title="data.title">
    <div class="grid tablet:hidden grid-cols-2 relative mobile:px-10">
      <SectionsCatalogItem
        v-for="item in data.slider_items"
        :key="item.id"
        :item="item"
      />
    </div>

    <div class="relative tablet:block hidden h-182.5 w-full">
      <UiCarousel
        class="max-h-61.25 relative z-10"
        :opts="{
          align: 'start',
        }"
      >
        <div
          class="flex absolute -top-10 right-10 desktop:right-20 w-full max-w-24"
        >
          <UiCarouselNext class="right-0 left-none bg-none shadow-none" />
          <UiCarouselPrevious class="left-0 right-none bg-none shadow-none" />
        </div>

        <UiCarouselContent class="ml-11.75 large:ml-22.5">
          <UiCarouselItem
            class="desktop:basis-61.25 aspect-square basis-50 pl-0"
            v-for="item in data.slider_items"
            :key="item.id"
          >
            <SectionsCatalogItem :item="item" />
          </UiCarouselItem>
        </UiCarouselContent>
      </UiCarousel>

      <NuxtImg
        :src="data.image"
        :alt="data.title"
        class="object-cover duration-500 absolute w-full h-full top-0 left-0"
      />
    </div>
  </SectionsContainer>
</template>
