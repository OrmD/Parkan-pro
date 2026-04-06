<script setup lang="ts">
defineProps<{
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  };
}>();
</script>

<template>
  <NuxtLink
    :href="item.link"
    class="relative max-mobile:aspect-square max-tablet:aspect-344/235 tablet:aspect-square"
  >
    <article
      class="font-medium tablet:border border-r-0 tablet:bg-white bg-[#12121230] border-white-d3 h-full flex-col p-6 flex justify-between gap-2 tablet:group ease-in backdrop-blur-[10px] hover:bg-[#12121230] transition-colors duration-300 relative z-10"
    >
      <div class="flex justify-between items-center">
        <span
          class="text-xl group-hover:text-white tablet:text-[#44464C] text-white"
          >0{{ item.id }}</span
        >
        <Icon
          name="lucide:arrow-up-right"
          size="20"
          class="text-white tablet:text-primary transition-transform duration-500 group-hover:text-white"
        />
      </div>

      <h5
        v-if="item.title"
        class="mt-auto max-tablet:text-white text-xl tablet:group-hover:text-white"
      >
        {{ item.title }}
      </h5>
      <p
        v-if="item.description"
        class="text-mini text-white tablet:group-hover:text-white tablet:text-gray-74"
      >
        {{ item.description }}
      </p>
    </article>
    <NuxtImg
      :src="item.image"
      :alt="item.title"
      class="h-full group-hover:z-11 w-full object-cover absolute top-0 left-0"
    />
  </NuxtLink>
</template>
