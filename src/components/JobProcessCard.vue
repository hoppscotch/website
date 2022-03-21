<script setup lang="ts">
import check from '~icons/lucide/check'
const { t } = useI18n()

const tipProps = defineProps<{
  visibleTip: {
    title: string
    tips: string[]
  }
  tipIndex: number
}>()

const tipEmit = defineEmits<{
  (e: 'setActiveTip', index: number): void
}>()

const targetTip = ref(null)
// const targetVisible = useElementVisibility(target)
const targetVisibleTip = ref(false)

useIntersectionObserver(
  targetTip,
  ([{ isIntersecting }]) => {
    targetVisibleTip.value = isIntersecting
  },
  { threshold: 1, root: null },
)

watch(
  () => targetVisibleTip.value,
  (newValue) => {
    if (newValue)
      tipEmit('setActiveTip', tipProps.tipIndex)
  },
)

</script>

<template>
  <div ref="targetTip" class="rounded-lg flex flex-col h-[40vh] py-8 px-5 justify-center md:h-[60vh] ">
    <ul class="bg-primaryLight p-5 rounded max-w-lg">
      <li v-for="tip in tipProps.visibleTip.tips" :key="tip" class="md:text-lg my-3 inline-flex gap-2 items-center">
        <check class="h-5 w-5" />
        {{ t(tip) }}
      </li>
    </ul>
  </div>
</template>
