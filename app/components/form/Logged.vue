<script setup lang="ts">
const token = useCookie("access_token");

const logout = () => {
  token.value = null;
};
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <p class="text-primary">Ви вже авторизовані</p>

    <UiButton variant="secondary" @click="logout"> Вийти </UiButton>
  </div>
</template>
