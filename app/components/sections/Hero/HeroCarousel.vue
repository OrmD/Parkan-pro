<script setup lang="ts">
defineProps<{
  class?: string;
  items: {
    id: number;
    title: string;
    description: string;
    code: string;
    image: string;
    link: string;
  }[];
}>();
</script>

<template>
  <UiCarousel
    :class="class"
    :opts="{
      align: 'start',
    }"
  >
    <div class="flex relative -top-13 -right-90 max-w-24">
      <UiCarouselNext class="right-0 text-white left-none bg-none" />
      <UiCarouselPrevious class="left-0 text-white right-none bg-none" />
    </div>
    <UiCarouselContent container-class="max-w-139  -ml-6">
      <UiCarouselItem
        v-for="item in items"
        class="pl-6 max-w-115"
        :key="item.id"
      >
        <div
          class="relative rounded-lg gap-4 flex p-3.5 w-full border border-white"
        >
          <NuxtImg
            :src="item.image"
            alt="Image"
            class="aspect-square max-h-30 object-cover rounded-lg"
          />
          <div class="flex-col text-white flex items-start justify-between">
            <h2 class="text-xl">{{ item.title }}</h2>
            <p
              class="text-lg leading-[120%] font-light mb-6 text-white-d3 line-clamp-2"
            >
              {{ item.description }}
            </p>
            <b class="font-semibold text-mini">{{ item.code }}</b>
          </div>
        </div>
      </UiCarouselItem>
    </UiCarouselContent>
  </UiCarousel>
</template>
