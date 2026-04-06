<script setup lang="ts">
import type { AccordionTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronDownIcon } from "@radix-icons/vue";
import { AccordionHeader, AccordionTrigger } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
  AccordionTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'group flex flex-1 items-center justify-between mobile:text-xl font-medium transition-all hover:underline',
          props.class,
        )
      "
    >
      <slot />

      <slot name="icon">
        <div
          class="transition-transform duration-300 group-data-[state=open]:rotate-45"
        >
          <Icon name="lucide:plus" size="20" />
        </div>
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
