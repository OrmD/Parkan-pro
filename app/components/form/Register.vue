<script setup lang="ts">
const emit = defineEmits<{
  switchToLogin: [];
}>();

const form = reactive({
  name: "",
  lastname: "",
  middlename: "",
  email: "",
  phone: "",
  password: "",
  password_confirmation: "",
  accept: true,
});

const onSubmit = async () => {
  try {
    const response = await $fetch("/api/register", {
      method: "POST",
      body: form,
    });
    console.log("form send:", form);

    console.log("Server response:", response);
  } catch (error) {
    console.error("Error during registration:", error);
  }
};
</script>

<!-- TODO:
 1.Зробити валідацію з алертами про помилки 
 2. Зробити повідомлення про успішну реєстрацію і закрити вікно реєстрації відкрити вікно для входу і очистити форму
 -->

<template>
  <form
    @submit.prevent="onSubmit"
    class="flex flex-col text-white gap-3 w-[75%] mx-auto"
  >
    <div>
      <UiLabel for="name" class="block mb-1 font-semibold">Ім'я</UiLabel>
      <UiInput
        id="name"
        v-model="form.name"
        class="form-input"
        placeholder="Введіть своє ім'я"
      />
    </div>

    <div>
      <UiLabel for="lastname" class="block mb-1 font-semibold"
        >Прізвище</UiLabel
      >
      <UiInput
        id="lastname"
        v-model="form.lastname"
        class="form-input"
        placeholder="Введіть своє прізвище"
      />
    </div>

    <div>
      <UiLabel for="middlename" class="block mb-1 font-semibold"
        >По батькові</UiLabel
      >
      <UiInput
        id="middlename"
        v-model="form.middlename"
        class="form-input"
        placeholder="Введіть своє ім'я по батькові"
      />
    </div>

    <div>
      <UiLabel for="email" class="block mb-1 font-semibold">Email</UiLabel>
      <UiInput
        id="email"
        v-model="form.email"
        class="form-input"
        placeholder="Введіть свій email"
        type="email"
      />
    </div>

    <div>
      <UiLabel for="phone" class="block mb-1 font-semibold">Телефон</UiLabel>
      <UiInput
        id="phone"
        v-model="form.phone"
        class="form-input"
        placeholder="Введіть свій телефон"
        type="tel"
      />
    </div>

    <!-- <div>
      <label class="block mb-1 font-semibold">Birthday</label>
      <UiInput v-model="birthday" placeholder="YYYY-MM-DD" type="date" />
    </div> -->

    <div>
      <UiLabel for="password" class="block mb-1 font-semibold">Пароль</UiLabel>
      <UiInput
        id="password"
        v-model="form.password"
        class="form-input"
        placeholder="Введіть пароль"
        type="password"
      />
    </div>

    <div>
      <UiLabel for="password_confirmation" class="block mb-1 font-semibold"
        >Підтвердження пароля</UiLabel
      >
      <UiInput
        id="password_confirmation"
        v-model="form.password_confirmation"
        class="form-input"
        placeholder="Підтвердіть пароль"
        type="password"
      />
    </div>

    <div class="flex items-center space-x-2">
      <UiCheckbox
        v-model="form.accept"
        class="border-gray-74 bg-none text-primary"
      />
      <span class="text-primary">Я приймаю умови</span>
    </div>

    <UiButton
      type="submit"
      variant="secondary"
      class="self-center cursor-pointer"
      >Реєстрація</UiButton
    >
    <UiButton
      type="button"
      variant="secondary"
      class="self-center cursor-pointer"
      @click="emit('switchToLogin')"
    >
      Вхід
    </UiButton>
  </form>
</template>
