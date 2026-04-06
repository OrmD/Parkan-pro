export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    baseURL: "/api",

    onRequest({ options }) {
      const token = useCookie("access_token");

      if (token.value) {
        options.headers = {
          ...options.headers,
          // Authorization: `Bearer ${token.value}`,
        };
      }
    },

    onResponseError({ response }) {
      if (response.status === 401) {
        const token = useCookie("access_token");
        token.value = null;

        navigateTo("/");
      }
    },
  });

  return {
    provide: {
      api,
    },
  };
});
