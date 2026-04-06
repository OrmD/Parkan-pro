<script setup lang="ts">
const props = defineProps<{
  data: {
    title: string;
    slider_items: {
      id: number;
      title: string;
      description: string;
      code: string;
      image: string;
      link: string;
    }[];
  };
}>();
</script>

<template>
  <section class="relative medium:h-240 h-194.5 w-full bg-primary">
    <NuxtImg
      src="/images/hero-1.jpg"
      alt="hero image"
      class="absolute top-0 left-0 w-full h-full object-cover opacity-50"
    />
    <div class="relative z-10 h-[97%] mx-4 mobile:mx-10 large:mx-20">
      <h1
        v-if="data.title"
        class="text-white h-[90%] max-w-262.5 flex items-end mb-8 mobile:items-center font-bold mobile:text-58s text-[36px] tablet:text-[70px]"
      >
        {{ data.title }}
      </h1>
      <UiButton class="max-mobile:max-w-full">
        Купити
        <Icon name="lucide:arrow-up-right" size="20" />
      </UiButton>
    </div>
    <SectionsHeroCarousel
      :items="data.slider_items"
      class="hidden laptop:block absolute bottom-10 right-0"
    />
  </section>
</template>
