<script setup lang="ts">
defineProps<{
  data: {
    title: string;
    image: string;
    description: string;
    link: {
      title: string;
      href: string;
    };
    numbers: {
      id: number;
      title: string;
    }[];
  };
}>();
</script>

<!-- TODO:
 1. Добавити до цифр текст на телефоні -->
<template>
  <section class="relative">
    <NuxtImg
      :src="data.image"
      :alt="data.title"
      class="w-full aspect-768/400 tablet:aspect-1920/520 mb-8 mobile:mb-20"
    />
    <div
      class="flex max-tablet:flex-col justify-between gap-6 px-5 mobile:px-10 large:px-20"
    >
      <UiTypographyH4 v-if="data.title">{{ data.title }}</UiTypographyH4>
      <div class="max-w-125 tablet:max-w-117.5">
        <p v-if="data.description" class="mb-6 tablet:mb-10">
          {{ data.description }}
        </p>
        <NuxtLink
          v-if="data.link.href"
          :href="data.link.href"
          class="text-primary mb-25 mobile:mb-27.5 laptop:mb-42.5 text-sm flex items-center"
        >
          {{ data.link.title }}
          <Icon name="lucide:arrow-up-right" size="20" class="ml-2" />
        </NuxtLink>

        <div class="flex justify-between gap-15">
          <span
            v-for="number in data.numbers"
            :key="number.id"
            class="text-[42px] mobile:text-[70px] font-medium text-primary"
          >
            {{ number.title }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
