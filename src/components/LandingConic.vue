<script setup lang="ts">
import { projects } from "~/assets/data/landingProjects"
import { gradients } from "~/assets/data/gradients"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="relative overflow-x-visible overflow-y-clip">
      <div class="conic-divider1 full-width">
        <div class="flex">
          <div class="flex grad1"></div>
          <div class="flex grad2"></div>
        </div>
      </div>
      <div class="absolute inset-0 z-1">
        <div class="flex flex-col px-8 pt-32 pb-16">
          <div class="flex flex-col items-center">
            <AnimatedComponent animation-type="pull">
              <div
                class="max-w-2xl my-4 text-3xl leading-none tracking-tighter text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-4xl lg:text-5xl"
                :class="gradients.gray"
              >
                {{ t("home.projects.title") }}
              </div>
              <div
                class="my-4 text-2xl tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br md:w-3/5"
                :class="gradients.gray"
              >
                {{ t("home.projects.description") }}
              </div>
            </AnimatedComponent>
          </div>
        </div>
        <div class="relative flex flex-1 mx-auto md:rounded-lg h-256 lg:h-128">
          <div class="flex flex-1 grid grid-cols-6 gap-2 grid-rows-10">
            <RepositoryCard
              v-for="(project, index) in projects"
              :key="index"
              :title="project.title"
              :description="project.description"
              :styles="project.styles"
              :icon="project.icon"
              :language="project.language"
              :color="project.color"
              :link="project.link"
              :stars="project.stars"
            />
          </div>
        </div>
      </div>
      <div class="conic-divider2 full-width">
        <div class="flex">
          <div class="flex grad1"></div>
          <div class="flex grad2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.conic-divider1 {
  @apply relative;
  @apply -mt-190 lg:-mt-128;
}

.conic-divider2 {
  @apply relative;
  @apply -mb-190 lg:-mb-128;
  transform: rotate(180deg);
}

.grad1 {
  width: 50vw;
  @apply h-380 lg:h-256;
  background-image: conic-gradient(
    from 280deg at 25% 50%,
    transparent,
    transparent,
    theme("colors.sky.900")
  );
  transform: scaleX(-1);
}

.grad2 {
  width: 50vw;
  @apply h-380 lg:h-256;
  background-image: conic-gradient(
    from 280deg at 25% 50%,
    transparent,
    transparent,
    theme("colors.sky.900")
  );
}
</style>
