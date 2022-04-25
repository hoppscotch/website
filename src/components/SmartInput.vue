<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    required: boolean
    placeholder: string
    name: string
    type: string
    rows: string
    modelValue: string
  }>(),
  {
    label: '',
    required: false,
    placeholder: '',
    name: '',
    type: '',
    rows: '',
    modelValue: '',
  },
)

const emit = defineEmits(['update:modelValue'])

const updateValue = (value: string) => {
  emit('update:modelValue', value)
}

const inputMode = computed(() => {
  if (props.rows)
    return 'textarea'
  return 'input'
})

const computedComponent = computed(() => {
  if (inputMode.value === 'textarea')
    return 'textarea'
  return 'input'
})
</script>

<template>
  <div class="flex flex-col my-4">
    <label v-if="label" class="my-2">
      {{ label }}
      <span v-if="required" class="text-red-600">*</span>
    </label>
    <component
      :is="computedComponent"
      v-bind="$attrs"
      :type="type"
      :placeholder="placeholder"
      :rows="rows"
      :name="modelValue"
      class="rounded transition py-2 px-3 my-1 text-secondary bg-primary border-1 border-solid border-primaryLight outline-0 hover:border-accent focus:border-accent"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<style scss>
input::placeholder,textarea::placeholder{
  @apply text-secondaryLight opacity-100
}
input[type="file"] {
  @apply py-2 px-3 border-1 border-primaryLight text-secondary cursor-pointer outline-0
}
</style>
