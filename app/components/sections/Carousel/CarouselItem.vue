<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  item: {
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
  };
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <article
    :class="
      cn(
        'relative z-10 aspect-310/573 max-h-143.25 rounded-lg overflow-hidden h-full  text-white',
        props.class,
      )
    "
  >
    <div class="relative h-full z-10 p-4 flex flex-col justify-between">
      <div class="">
        <UiBadge v-if="item.city" class="mb-3">
          <Icon name="lucide:map-pin" size="20" />
          {{ item.city }}
        </UiBadge>
        <UiBadge v-if="item.time">
          <Icon name="lucide:clock-1" size="16" />
          {{ item.time }}
        </UiBadge>
      </div>

      <div class="flex flex-col justify-end gap-2">
        <h4 class="font-bold">{{ item.title }}</h4>
        <p class="line-clamp-2">{{ item.description }}</p>

        <div class="mobile:flex hidden justify-between mb-4 flex-wrap">
          <UiBadge v-for="(badge, key, index) in item.bages" :key="key">
            <Icon name="uil:ruler" v-if="index === 0 || index === 1" />
            {{ badge }}
          </UiBadge>
        </div>
        <NuxtLink class="w-full" :href="item.link">
          <UiButton class="w-full" size="xs">
            Дивитися кейс
            <Icon name="lucide:arrow-up-right" />
          </UiButton>
        </NuxtLink>
      </div>
    </div>
    <NuxtImg
      :src="item.image"
      class="absolute top left-0 bottom-0 right-0 z-0 size-full"
    />
  </article>
</template>
