<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps<{
  title: string;
  divClass?: string;
}>();
</script>

<template>
  <section class="relative">
    <UiTypographyH4 v-if="title" class="px-4 mobile:px-10 large:px-20">{{
      title
    }}</UiTypographyH4>
    <div
      :class="cn('mt-0 mobile:-mt-10 medium:-mt-12 large:-mt-16.25', divClass)"
    >
      <slot />
    </div>
  </section>
</template>
