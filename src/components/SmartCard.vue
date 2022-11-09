<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    description: string
    icon: string
    xPos?: number
    yPos?: number
  }>(),
  {
    title: '',
    description: '',
    icon: '',
    xPos: 0,
    yPos: 0,
  },
)
const { t } = useI18n()

const handlePointerMove = (ev: Event) => {
  const target = ev.target as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${props.xPos - rect.left}`)
  target.style.setProperty('--y', `${props.yPos - rect.top}`)
}
</script>

<template>
  <div class="card flex flex-col p-4 overflow-hidden relative transition border shadow sm:p-6 rounded-xl bg-primaryLight border-dividerDark group" @pointermove="handlePointerMove">
    <div class="flex flex-col w-full">
      <i class="flex items-center justify-center p-2 text-xl transition transform rounded-full text-accentContrast w-13 h-13 bg-accentDark group-hover:bg-accentLight">
        <component :is="icon" class="transition transform group-hover:scale-110" />
      </i>
      <div class="flex flex-col flex-1">
        <h3 class="flex mt-5 mb-3 text-2xl font-semibold">
          {{ t(title) }}
        </h3>
        <p class="flex flex-1 leading-6 text-secondaryLight">
          {{ t(description) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card{
  --x-px: calc(var(--x) * 1px);
  --y-px: calc(var(--y) * 1px);

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
    transition: opacity 0.2s ease;
    opacity: 0;
    background: radial-gradient(
      800px circle at var(--x-px) var(--y-px),
      var(--color-primaryTransparent),
      transparent 40%
    );
  }
  &:before {
    z-index: 1;

  }
  &:after {
    z-index: 2;
  }
  &:hover:after,&:hover:before {
    opacity: 1;
  }

}
</style>
