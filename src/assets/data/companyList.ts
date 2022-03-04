import browser from '~icons/lucide/globe'
import extension from '~icons/lucide/package'
import cli from '~icons/lucide/terminal-square'
import server from '~icons/lucide/server'

export const company = [
  {
    icon: browser,
    title: 'company.items.about.title',
    description: 'company.items.about.description',
    link: { title: 'action.learn_more', target: '/company/about' },
  },
  {
    icon: cli,
    title: 'company.items.careers.title',
    description: 'company.items.careers.description',
    link: {
      title: 'action.learn_more',
      target: '/company/careers',
    },
  },
  {
    icon: extension,
    title: 'company.items.blog.title',
    description: 'company.items.blog.description',
    link: {
      title: 'action.learn_more',
      target: '/company/blogs',
    },
  },
  {
    icon: server,
    title: 'company.items.support.title',
    description: 'company.items.support.description',
    link: {
      title: 'action.learn_more',
      target: '/company/support',
    },
  },
]
