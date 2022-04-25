import browser from '~icons/lucide/globe'
import extension from '~icons/lucide/package'
import cli from '~icons/lucide/terminal-square'
import server from '~icons/lucide/server'

export const platforms = [
  {
    icon: browser,
    title: 'platforms.items.web.title',
    description: 'platforms.items.web.description',
    link: { title: 'action.learn_more', target: '/platforms/web' },
  },
  {
    icon: cli,
    title: 'platforms.items.cli.title',
    description: 'platforms.items.cli.description',
    link: {
      title: 'action.learn_more',
      target: '/platforms/cli',
    },
  },
  {
    icon: extension,
    title: 'platforms.items.embeds.title',
    description: 'platforms.items.embeds.description',
    link: {
      title: 'action.learn_more',
      target: '/platforms/embeds',
    },
  },
  {
    icon: server,
    title: 'platforms.items.native.title',
    description: 'platforms.items.native.description',
    link: {
      title: 'action.learn_more',
      target: '/platforms/native',
    },
  },
]
