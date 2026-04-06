export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const response = await $fetch("https://dropshop.demka.online/api/login", {
    method: "POST",
    body,
  });

  return response;
});
