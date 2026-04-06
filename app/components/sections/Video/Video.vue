<script setup lang="ts">
const play = ref(true);

const videoRef = ref<HTMLVideoElement | null>(null);

const onClickToPlay = () => {
  play.value = false;
  if (videoRef.value) {
    videoRef.value.play();
  }
};

const onChangePlay = () => {
  setTimeout(() => {
    play.value = !play.value;
  }, 5000);
};

const targetX = ref(80);
const targetY = ref(40);
const cursorX = ref(0);
const cursorY = ref(0);
const containerRef = ref<HTMLDivElement | null>(null);
const buttonWidth = 180;
const buttonHeight = 180;

const lerp = (start: number, end: number, t: number) =>
  start + (end - start) * t;

const handleMouseMove = (event: MouseEvent) => {
  if (!containerRef.value || !play.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  let x = event.clientX - rect.left - buttonWidth / 2;
  let y = event.clientY - rect.top - buttonHeight / 2;

  x = Math.max(0, Math.min(rect.width - buttonWidth, x));
  y = Math.max(0, Math.min(rect.height - buttonHeight, y));

  targetX.value = x;
  targetY.value = y;
  console.log("h");
};

const animate = () => {
  cursorX.value = lerp(cursorX.value, targetX.value, 0.15);
  cursorY.value = lerp(cursorY.value, targetY.value, 0.15);
  requestAnimationFrame(animate);
};

onMounted(() => {
  containerRef.value?.addEventListener("mousemove", handleMouseMove);
  animate();
});

onUnmounted(() => {
  containerRef.value?.removeEventListener("mousemove", handleMouseMove);
});
</script>
<!-- TODO:
 1. Змінити кнопку на мобілці -->
<template>
  <section class="laptop:px-10 px-0">
    <div
      ref="containerRef"
      class="relative mx-auto aspect-video max-h-239.5 laptop:rounded-2xl overflow-hidden"
    >
      <video
        ref="videoRef"
        muted
        playsinline
        controls
        v-on:play="onClickToPlay"
        v-on:pause="onChangePlay"
        class="size-full absolute top-0 left-0 z-10"
      >
        <source src="/video/MKTO - Classic (Lyrics).mp4" />
      </video>
      <NuxtImg
        v-if="play"
        src="/images/catalog.jpg"
        class="size-full absolute top-0 left-0 z-11"
      />
      <button
        class="absolute rounded-full text-white bg-[#FFFFFF05] border backdrop-blur-sm border-gray-8b max-h-20 mobile:max-h-45 h-full mobile:max-w-45 max-w-20 w-full z-12 max-mobile:text-mini"
        @click="onClickToPlay"
        v-if="play"
        :style="{
          left: cursorX + 'px',
          top: cursorY + 'px',
        }"
      >
        Дивитись про нас
      </button>
    </div>
  </section>
</template>
