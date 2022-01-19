<script setup lang="ts">
import { contributors } from '~/assets/data/LandingContributors'
const { t } = useI18n()
</script>

<template>
  <div class="relative flex px-2 py-5 overflow-hidden md:py-16">
    <div
      class="flex items-center justify-around flex-1 h-screen"
    >
      <div class="flex flex-col h-[calc(100%/3)] py-6 px-5 z-2 items-center relative md:p-5 lg:h-33%">
        <h2 class="max-w-xl my-4 text-4xl font-bold leading-tight tracking-tight text-center text-secondaryDark">
          {{ t("home.contributors.title") }}
        </h2>
        <p class="my-4 text-xl text-center md:w-3/5">
          {{ t("home.contributors.description") }}
        </p>
      </div>
      <div
        v-for="(contributor, index) in contributors"
        :key="`contributor-${index}`"
        class="contributor-img"
      >
        <ContibutorBubble
          :username="contributor.username"
          :image="contributor.image"
          :link="contributor.link"
          :size="contributor.size"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contributor-img {
  position: absolute;
  bottom: -160px;
  animation: up 5s linear infinite;
  animation-fill-mode: both;
}

.contributor-img:hover {
  animation-play-state: paused;
}

.contributor-img-text {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.contributor-img:nth-child(1) {
  left: 5%;
}

.contributor-img:nth-child(2) {
  left: 15%;
  animation-delay: 2s;
}

.contributor-img:nth-child(3) {
  left: 25%;
  animation-delay: 5s;
  animation-duration: 10s;
}

.contributor-img:nth-child(4) {
  left: 35%;
  animation-duration: 7s;
}

.contributor-img:nth-child(5) {
  left: 45%;
  animation-delay: 1.5s;
  animation-duration: 5s;
}

.contributor-img:nth-child(6) {
  left: 55%;
  animation-delay: 3s;
  animation-duration: 7s;
}

.contributor-img:nth-child(7) {
  left: 65%;
  animation-delay: 1s;
  animation-duration: 8s;
}

.contributor-img:nth-child(8) {
  left: 75%;
  animation-duration: 7s;
}

.contributor-img:nth-child(9) {
  left: 0%;
  animation-delay: 2s;
}

.contributor-img:nth-child(10) {
  left: 10%;
  animation-delay: 10s;
}

.contributor-img:nth-child(11) {
  left: 20%;
  animation-delay: 5s;
  animation-duration: 7s;
}

.contributor-img:nth-child(12) {
  left: 30%;
  animation-duration: 5s;
}

.contributor-img:nth-child(13) {
  left: 40%;
  animation-delay: 3s;
  animation-duration: 7s;
}

.contributor-img:nth-child(14) {
  left: 50%;
  animation-delay: 1s;
  animation-duration: 8s;
}

.contributor-img:nth-child(15) {
  left: 60%;
  animation-delay: 6s;
  animation-duration: 8s;
}

.contributor-img:nth-child(16) {
  left: 70%;
  animation-duration: 2s;
}

.contributor-img:nth-child(17) {
  left: 0%;
  animation-delay: 2s;
}

.contributor-img:nth-child(18) {
  left: 10%;
  animation-delay: 10s;
}

.contributor-img:nth-child(19) {
  left: 20%;
  animation-delay: 5s;
  animation-duration: 7s;
}

.contributor-img:nth-child(20) {
  left: 30%;
  animation-duration: 5s;
}

.contributor-img:nth-child(21) {
  left: 40%;
  animation-delay: 3s;
  animation-duration: 7s;
}

.contributor-img:nth-child(22) {
  left: 50%;
  animation-delay: 1s;
  animation-duration: 8s;
}

.contributor-img:nth-child(23) {
  left: 60%;
  animation-delay: 6s;
  animation-duration: 8s;
}

.contributor-img:nth-child(24) {
  left: 70%;
  animation-duration: 2s;
}

@keyframes up {
  0% {
    transform: translateY(0) scale3d(1, 1, 1);
  }
  100% {
    transform: translateY(calc(-100vh - 320px)) scale3d(0.95, 1.05, 1);
  }
}
</style>
