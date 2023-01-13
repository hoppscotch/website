<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string;
    width?: string;
  }>(),
  {
    width: "128px",
  }
)
</script>

<template>
  <svg
    :width="width"
    xmlns="http://www.w3.org/2000/svg"
    xml:lang="en"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 500 500"
  >
    <defs>
      <path
        id="textcircle"
        d="M250,400
                 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
        transform="rotate(12,250,250)"
      />
    </defs>
    <g class="textcircle">
      <text textLength="942">
        <textPath
          xlink:href="#textcircle"
          aria-label="CSS & SVG are awesome"
          textLength="942"
        >
          {{ text }} &nbsp;
        </textPath>
      </text>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  &:hover .textcircle {
    transform: scale(1.2) rotate(90deg);
  }
}

.textcircle {
  transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
  transform-origin: 250px 250px;
}

text {
  @apply text-4xl;
  @apply font-bold;
  @apply uppercase;
  @apply fill-accentContrast;

  font-variant-ligatures: none;
  letter-spacing: 6px;
  animation: rotate 25s linear infinite;
  transform-origin: 250px 250px;
}

@keyframes rotate {
  to {
    transform: rotate(-360deg);
  }
}
</style>
