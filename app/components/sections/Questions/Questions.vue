<script setup lang="ts">
const props = defineProps<{
  data: {
    title: string;
    faq: {
      id: number;
      question: string;
      answer?: string;
    }[];
  };
}>();
</script>

<template>
  <SectionsContainer :title="data.title">
    <UiAccordion
      type="multiple"
      class="mx-auto mobile:-mt-10 desktop:-mt-13 flex flex-col mobile:gap-4 gap-3 max-w-225 desktop:max-w-262 px-4 mobile:px-10"
    >
      <UiAccordionItem :value="item.question" v-for="item in data.faq">
        <UiAccordionTrigger>
          {{ item.question }}
        </UiAccordionTrigger>
        <UiAccordionContent>
          {{ item.answer }}
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>
  </SectionsContainer>
</template>
