<script setup lang="ts">
import type { LabelProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { Label } from "radix-vue";
import { computed } from "vue";

const props = defineProps<LabelProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <Label
    v-bind="delegatedProps"
    :class="
      cn(
        'text-mini font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary',
        props.class,
      )
    "
  >
    <slot />
  </Label>
</template>
