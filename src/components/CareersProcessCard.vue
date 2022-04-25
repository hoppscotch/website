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
  <div ref="targetTip" class="rounded-lg flex flex-col h-[40vh] py-8 px-5 justify-center md:h-[60vh]">
    <ul class="max-w-lg p-5 rounded bg-primaryLight">
      <li v-for="tip in tipProps.visibleTip.tips" :key="tip" class="inline-flex items-center my-3 gap-2">
        <check class="w-4 h-4" />
        {{ t(tip) }}
      </li>
    </ul>
  </div>
</template>
