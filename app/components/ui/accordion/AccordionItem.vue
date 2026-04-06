<script setup lang="ts">
import type { AccordionItemProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { AccordionItem, useForwardProps } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
  AccordionItemProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <AccordionItem
    v-bind="forwardedProps"
    :class="
      cn(
        'bg-white shadow-2xl-[#1212121A] max-mobile:pb-4  max-desktop:pb-6.5 p-4 mobile:p-8 rounded-small ',
        props.class,
      )
    "
  >
    <slot />
  </AccordionItem>
</template>
