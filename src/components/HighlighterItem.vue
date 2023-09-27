<template>
  <div
    class="relative h-full bg-gradient-to-b from-violet-500/20 to-violet-500/10 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-violet-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),_theme(colors.violet.500),_transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden"
  >
    <slot />
  </div>
</template>
