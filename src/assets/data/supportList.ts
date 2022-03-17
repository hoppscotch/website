import mail from '~icons/lucide/mail'
import github from '~icons/lucide/github'
import message from '~icons/lucide/message-square'

export const supports = [
  {
    icon: mail,
    title: 'support.items.1.title',
    description: 'support.items.1.description',
    link: {
      title: 'support.items.1.link_text',
      target: 'mailto:support@hoppscotch.io',
    },
  },
  {
    icon: github,
    title: 'support.items.2.title',
    description: 'support.items.2.description',
    link: {
      title: 'support.items.2.link_text',
      target: 'https://github.com/hoppscotch/hoppscotch/issues',
    },
  },
  {
    icon: message,
    title: 'support.items.3.title',
    description: 'support.items.3.description',
    link: {
      title: 'support.items.3.link_text',
      target: 'https://github.com/hoppscotch/hoppscotch/discussions',
    },
  },
]
