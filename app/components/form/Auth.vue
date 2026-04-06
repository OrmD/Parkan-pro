<script setup lang="ts">
import type { AuthResponse } from "./auth";
const emit = defineEmits<{
  switchToRegister: [];
}>();

const form = reactive({
  email: "",
  password: "",
});

const onSubmit = async () => {
  try {
    const response = await $fetch<AuthResponse>("/api/auth", {
      method: "POST",
      body: form,
      credentials: "include",
    });
    const token = useCookie("access_token");
    token.value = response.token;
  } catch (error) {
    console.error("Error during registration:", error);
  }
};
</script>
<!-- TODO:
 1.Зробити валідацію з алертами про помилки 
 2. Зробити повідомлення про успішний вхід і закрити вікно входу
 -->
<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-3 w-[75%] mx-auto">
    <div>
      <UiLabel for="email" class="block mb-1 font-semibold">Email</UiLabel>
      <UiInput
        id="email"
        class="form-input"
        v-model="form.email"
        placeholder="Введіть ваш email"
        type="email"
      />
    </div>

    <div>
      <UiLabel for="password" class="block mb-1 font-semibold">Пароль</UiLabel>
      <UiInput
        id="password"
        class="form-input"
        v-model="form.password"
        placeholder="Введіть пароль"
        type="password"
      />
    </div>

    <UiButton
      type="submit"
      variant="secondary"
      class="self-center cursor-pointer"
      >Увійти</UiButton
    >
    <UiButton
      type="button"
      variant="secondary"
      class="self-center cursor-pointer"
      @click="emit('switchToRegister')"
    >
      Реєстрація
    </UiButton>
  </form>
</template>
