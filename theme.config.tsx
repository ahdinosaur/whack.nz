import { useRouter } from 'next/router'
import { type DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import React from 'react'

const config: DocsThemeConfig = {
  logo: <span>WHACK.NZ</span>,
  project: {
    link: 'https://github.com/ahdinosaur/whack.nz',
  },
  chat: {
    link: 'https://discord.gg/S6RFwQYH',
  },
  docsRepositoryBase: 'https://github.com/ahdinosaur/whack.nz',
  useNextSeoProps() {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url = `https://whack.nz${defaultLocale === locale ? asPath : `/${locale}${asPath}`}`

    return {
      title: frontMatter.title ?? 'Wellington Hackspace',
      description:
        frontMatter.description ??
        'Imagine a Wellington community space for anyone to make, learn, and hang out. Members have access to 3d printers, sewing machines, laser cutters, CNC machines, soldering stations, and more.',
      openGraph: {
        url,
        siteName: 'Wellington Hackspace',
        images: [
          {
            url: 'https://whack.nz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhackspace.efbfd34b.jpg&w=1080&q=75',
            type: 'image/jpeg',
            height: 1080,
            width: 1080,
            alt: 'An AI-generated sketch of a Hackspace',
          },
        ],
      },
    }
  },
  footer: {
    text: 'Hacking is about making things, creating technology and solving problems with innovative solutions. Hackerspaces facilitate hacking through providing a community, a workshop and tools.',
  },
}

export default config
