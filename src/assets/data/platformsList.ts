import browser from '~icons/lucide/globe'
import extension from '~icons/lucide/package'
import cli from '~icons/lucide/terminal-square'

export const platforms = [
  {
    icon: browser,
    title: 'platforms.gridItems.web.title',
    description: 'platforms.gridItems.web.description',
    link: { title: 'Learn more', target: 'https://hoppscotch.io/' },
  },
  {
    icon: cli,
    title: 'platforms.gridItems.cli.title',
    description: 'platforms.gridItems.cli.description',
    link: { title: 'Learn more', target: 'https://github.com/hoppscotch/hopp-cli' },
  },
  {
    icon: extension,
    title: 'platforms.gridItems.extension.title',
    description: 'platforms.gridItems.extension.description',
    link: { title: 'Learn more', target: 'https://github.com/hoppscotch/hoppscotch-extension' },
  },

]
