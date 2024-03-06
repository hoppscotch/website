<template>
  <div
    class="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-500/20 to-zinc-500/10 p-px before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-30 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-zinc-500 before:opacity-0 before:blur-[80px] before:transition-opacity before:duration-500 after:absolute after:inset-0 after:z-10 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),_theme(colors.zinc.500),_transparent_80%)] before:hover:opacity-20 after:group-hover:opacity-100"
  >
    <slot />
  </div>
</template>
