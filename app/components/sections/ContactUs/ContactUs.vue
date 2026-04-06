<script setup lang="ts">
import { reactive } from "vue";

defineProps<{
  data: {
    title: string;
  };
}>();

const formData = reactive({
  form: "contacts",
  name: "",
  email: "",
  message: "",
});

const onSubmit = async () => {
  try {
    const response = await $fetch("/api/contactUs", {
      method: "POST",
      body: formData,
    });
    console.log("form send:", formData);

    console.log("Server response:", response);
  } catch (error) {
    console.error("Error during registration:", error);
  }
};
</script>

<template>
  <SectionsContainer
    :title="data.title"
    class="bg-background"
    div-class="flex justify-end px-4 mobile:px-10 large:px-20"
  >
    <form
      @submit.prevent="onSubmit"
      class="bg-white p-4 sm:py-10 md:max-w-265 2xl:max-w-300 w-full md:max-h-117.5 px-4 mobile:px-10 laptop:px-20 grid md:grid-cols-2 md:grid-rows-2 grid-rows-[auto_auto] laptop:gap-25 gap-5"
    >
      <div class="">
        <div class="mb-6">
          <UiLabel for="name" class="text-mini block mb-1 font-semibold"
            >Ім'я</UiLabel
          >
          <UiInput id="name" v-model="formData.name" />
        </div>

        <div>
          <UiLabel for="email" class="text-mini block mb-1 font-semibold"
            >Email</UiLabel
          >
          <UiInput id="email" type="email" v-model="formData.email" />
        </div>
      </div>

      <div>
        <div class="mb-4">
          <UiLabel class="text-mini">Напишіть ваше повідомлення тут</UiLabel>
          <UiTextarea
            v-model="formData.message"
            class="md:max-w-112.5 w-full aspect-2/1 border-[#CCCCCC]"
          />
        </div>

        <div class="flex items-center space-x-2">
          <UiCheckbox />
          <span class="text-primary">Я надаю згоду на обробку даних</span>
        </div>
      </div>

      <UiButton
        type="submit"
        class="md:col-start-2 max-w-150 md:mt-15 md:ml-auto"
        size="default"
        variant="ghost"
      >
        Надіслати
        <Icon name="lucide:arrow-right" size="20" />
      </UiButton>
    </form>
  </SectionsContainer>
</template>
