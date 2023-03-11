<script setup lang="ts">
import { projects } from "~/assets/data/landingProjects"
import { gradients } from "~/assets/data/gradients"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col px-8 pt-32 pb-16">
      <div class="flex flex-col items-center">
        <div
          class="max-w-2xl text-3xl tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-4xl lg:text-5xl !leading-[initial]"
          :class="gradients.gray"
        >
          {{ t("home.projects.title") }}
        </div>
        <div
          class="my-4 text-2xl tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-br md:w-3/5"
          :class="gradients.gray"
        >
          {{ t("home.projects.description") }}
        </div>
      </div>
    </div>
    <div class="relative flex flex-1 mx-auto md:rounded-lg h-256 lg:h-128">
      <div class="flex flex-1 grid grid-cols-6 gap-2 grid-rows-10">
        <LandingRepositoryCard
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
</template>
