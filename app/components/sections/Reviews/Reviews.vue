<script setup lang="ts">
const props = defineProps<{
  data: {
    title: string;
    reviews: {
      id: number;
      text: string;
      author?: string;
    }[];
  };
}>();
</script>

<template>
  <SectionsContainer :title="data.title" class="bg-background">
    <UiCarousel>
      <div
        class="tablet:flex hidden absolute -top-10 right-10 desktop:right-20 w-full max-w-24"
      >
        <UiCarouselNext class="right-0 left-none bg-none shadow-none" />
        <UiCarouselPrevious class="left-0 right-none bg-none shadow-none" />
      </div>
      <UiCarouselContent class="mobile:ml-5 ml-1 tablet:ml-6">
        <UiCarouselItem
          class="basis-80 mobile:basis-100 desktop:basis-111 pl-2 mobile:pl-4 tablet:pl-5"
          v-for="item in data.reviews"
          :key="item.id"
        >
          <article class="aspect-square p-6 max-h-106 h-full bg-white">
            <Icon name="lucide:quote" class="text-white-d3" />
            <p class="mobile:h-[90%] h-[80%]">{{ item.text }}</p>
            <span>— {{ item.author }}</span>
          </article>
        </UiCarouselItem>
      </UiCarouselContent>
    </UiCarousel>
  </SectionsContainer>
</template>
