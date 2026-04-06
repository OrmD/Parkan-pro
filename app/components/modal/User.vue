<script setup lang="ts">
const currentForm = ref<"login" | "register">("login");
const token = useCookie("access_token");
const isAuthenticated = computed(() => !!token.value);
</script>

<template>
  <UiDialog>
    <UiDialogTrigger as-child>
      <li class="hidden sm:inline-block">
        <Icon name="uil:user" size="20" />
      </li>
    </UiDialogTrigger>
    <UiDialogContent>
      <UiDialogHeader>
        <UiDialogTitle class="text-center uppercase">
          {{
            isAuthenticated
              ? "Профіль"
              : currentForm === "login"
                ? "Вхід"
                : "Реєстрація"
          }}
        </UiDialogTitle>
      </UiDialogHeader>

      <FormLogged v-if="isAuthenticated" />

      <template v-else>
        <FormAuth
          v-if="currentForm === 'login'"
          @switch-to-register="currentForm = 'register'"
        />
        <FormRegister v-else @switch-to-login="currentForm = 'login'" />
      </template>
    </UiDialogContent>
  </UiDialog>
</template>
