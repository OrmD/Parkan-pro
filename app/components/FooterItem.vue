<script setup lang="ts">
interface IItem {
  id: number;
  name: string;
  link: string;
}

const props = defineProps<{
  title: string;
  data: IItem[];
}>();
</script>

<template>
  <ul
    class="hidden mobile:flex flex-col gap-3 max-w-53.5 w-full items-start text-white text-sm"
  >
    <li class="uppercase text-white-d3">{{ title }}</li>
    <li v-for="item in data" :key="item.id" class="font-medium">
      <NuxtLink :href="item.link">
        {{ item.name }}
      </NuxtLink>
    </li>
  </ul>

  <UiAccordion
    type="single"
    collapsible
    as="ul"
    class="block mobile:hidden w-full"
  >
    <UiAccordionItem
      as="li"
      :value="title"
      class="font-medium px-0 border-transparent border rounded-none! border-b-gray-74 bg-transparent"
    >
      <UiAccordionTrigger class="uppercase text-white-d3">{{
        title
      }}</UiAccordionTrigger>
      <UiAccordionContent>
        <li v-for="item in data" :key="item.id" class="font-medium">
          <NuxtLink :href="item.link">
            {{ item.name }}
          </NuxtLink>
        </li>
      </UiAccordionContent>
    </UiAccordionItem>
  </UiAccordion>
</template>
