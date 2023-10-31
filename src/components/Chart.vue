<template>
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="flex flex-col items-start flex-1 overflow-y-auto text-xs border justify-staitems-start brightness-110 overscroll-auto h-96 rounded-2xl border-neutral-500/25 bg-gradient-to-b from-neutral-600/5 to-neutral-500/5"
    >
      <table class="block w-full h-full overflow-y-auto area-chart">
        <tbody
          class="flex items-stretch h-full divide-x divide-neutral-400/10 justify-stretch"
        >
          <tr>
            <td style="--start: 0.1; --end: 0.2"></td>
            <td style="--start: 0.096; --end: 0.196"></td>
          </tr>
          <tr>
            <td style="--start: 0.2; --end: 0.16"></td>
            <td style="--start: 0.196; --end: 0.156"></td>
          </tr>
          <tr>
            <td style="--start: 0.16; --end: 0.35"></td>
            <td style="--start: 0.156; --end: 0.346"></td>
          </tr>
          <tr>
            <td style="--start: 0.35; --end: 0.36"></td>
            <td style="--start: 0.346; --end: 0.356"></td>
          </tr>
          <tr>
            <td style="--start: 0.36; --end: 0.52"></td>
            <td style="--start: 0.356; --end: 0.516"></td>
          </tr>
          <tr>
            <td style="--start: 0.52; --end: 0.76"></td>
            <td style="--start: 0.516; --end: 0.756"></td>
          </tr>
          <tr>
            <td style="--start: 0.76; --end: 0.68"></td>
            <td style="--start: 0.756; --end: 0.676"></td>
          </tr>
          <tr>
            <td style="--start: 0.68; --end: 0.9"></td>
            <td style="--start: 0.676; --end: 0.896"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .area-chart tr {
    @apply relative;
    @apply grow;
    @apply shrink;
    @apply basis-0;
    @apply flex;
    @apply items-center;
    @apply justify-center;
    @apply overflow-y-auto;
  }

  .area-chart td {
    @apply absolute;
    @apply inset-0;
    @apply z-0;
    @apply bg-neutral-400/20;

    &:nth-of-type(2) {
      @apply bg-gradient-to-b from-neutral-900/80 to-neutral-950/90;
    }

    clip-path: polygon(
      0% calc(100% * (1 - var(--start))),
      100% calc(100% * (1 - var(--end))),
      100% 100%,
      0% 100%
    );
  }
</style>
