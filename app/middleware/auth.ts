export default defineNuxtPlugin(() => {
  const token = useCookie("jwt").value;
  console.log("Token from cookie:", token);
});
