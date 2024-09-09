import { useRouter } from 'next/router'
import { type DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import React from 'react'

const config: DocsThemeConfig = {
  logo: <span>Wackerspace</span>,
  project: {
    link: 'https://github.com/ahdinosaur/whack.nz',
  },
  chat: {
    link: 'https://discord.gg/S6RFwQYH',
  },
  docsRepositoryBase: 'https://github.com/ahdinosaur/whack.nz',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Wellington Hackspace',
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url = `https://whack.nz${defaultLocale === locale ? asPath : `/${locale}${asPath}`}`

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Wellington Hackspace'} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            'Imagine a Wellington community makerspace! A space for anyone to make and learn with people and tools.'
          }
        />
        <meta
          property="og:image"
          content="https://whack.nz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmakerspace-sketch.efbfd34b.jpg&w=1080&q=75"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="An AI-generated sketch of a Makerspace" />
      </>
    )
  },
  footer: {
    text: 'Hacking is about making things, creating technology and solving problems with innovative solutions. Hackerspaces facilitate hacking through providing a community, a workshop and tools.',
  },
}

export default config
