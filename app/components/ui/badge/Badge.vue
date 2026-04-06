<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <span
    class="rounded-sm w-max h-max block border border-transparent overflow-hidden"
  >
    <span
      data-slot="badge"
      :class="
        cn(
          'py-1 px-3 border border-transparent [border-image-source:linear-gradient(225deg,rgba(255,255,255,0.05)_-2.32%,#fff_50%,rgba(255,255,255,0.05)_102.32%)] [border-image-slice:1] text-white backdrop-blur-button-20 text-mini rounded-lg overflow-hidden w-max flex items-center gap-1',
          props.class,
        )
      "
      v-bind="delegatedProps"
    >
      <slot />
    </span>
  </span>
</template>
