<script setup lang="ts">
import type { AccordionContentProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { AccordionContent } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
  AccordionContentProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    data-orientation="vertical"
    data-slot="accordion-item"
    class="overflow-hidden text-gray-8b text-sm data-[state=open]:animate-[accordion-down_0.25s_ease-out_forwards] data-[state=closed]:animate-[accordion-up_0.25s_ease-out_forwards]"
    style="
      --accordion-down-from: 0;
      --accordion-down-to: var(--radix-accordion-content-height);
      --accordion-up-from: var(--radix-accordion-content-height);
      --accordion-up-to: 0;
      @keyframes accordion-down {
        from {
          height: var(--accordion-down-from);
        }
        to {
          height: var(--accordion-down-to);
        }
      }
      @keyframes accordion-up {
        from {
          height: var(--accordion-up-from);
        }
        to {
          height: var(--accordion-up-to);
        }
      }
    "
  >
    <div :class="cn(' pt-4', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
