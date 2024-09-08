import type { DocsThemeConfig } from 'nextra-theme-docs'
import React from 'react'

const config: DocsThemeConfig = {
  logo: <span>Wackerspace</span>,
  project: {
    link: 'https://github.com/wackerspace/wackerspace.com',
  },
  chat: {
    link: 'https://discord.gg/S6RFwQYH',
  },
  docsRepositoryBase: 'https://github.com/wackerspace/wackerspace.com',
  footer: {
    text: 'Hacking is about making things, creating technology and solving problems with innovative solutions. Hackerspaces facilitate hacking through providing a community, a workshop and tools.',
  },
}

export default config
