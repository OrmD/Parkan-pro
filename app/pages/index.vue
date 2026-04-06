<script setup lang="ts">
import projects from "@/assets/data-json/projects.json";
import blog from "@/assets/data-json/blog.json";
import hero from "@/assets/data-json/hero.json";
import aboutUs from "@/assets/data-json/aboutUs.json";
import contactUs from "@/assets/data-json/contactUs.json";
import catalog from "@/assets/data-json/catalog.json";
import questions from "@/assets/data-json/questions.json";
import reviews from "@/assets/data-json/reviews.json";
</script>

<template>
  <NuxtLayout>
    <SectionsHero :data="hero" />
    <SectionsCatalog :data="catalog" />
    <SectionsAboutUs :data="aboutUs" />
    <SectionsVideo />
    <SectionsCarousel :data="projects" />
    <SectionsCarousel :data="blog" />
    <SectionsReviews :data="reviews" />
    <SectionsQuestions :data="questions" />
    <SectionsContactUs :data="contactUs" />
  </NuxtLayout>
</template>
