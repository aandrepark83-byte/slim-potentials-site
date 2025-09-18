export interface DarkLightImageFragment {
  light: {
    url: string
    width: number
    height: number
    aspectRatio: string
  }
  dark: {
    url: string
    width: number
    height: number
    aspectRatio: string
  }
  alt?: string
}

export interface FooterFragment {
  navbar: {
    items: Array<{
      _title: string
      url: string
    }>
  }
  copyright: string
  socialLinks: Array<{
    _title: string
    url: string
    icon?: {
      url: string
    }
  }>
}

export interface GeneralEvents {
  ingestKey: string
}

export const buttonFragment = {
  _id: true,
  href: true,
  label: true,
  type: true,
}

export const avatarFragment = {
  _id: true,
  _title: true,
  image: {
    url: true,
    width: true,
    height: true,
    alt: true,
  },
}

export const headingFragment = {
  title: true,
  subtitle: true,
  align: true,
}

export const quoteFragment = {
  _id: true,
  quote: true,
  author: true,
}

export const authorFragment = {
  _id: true,
  _title: true,
  image: {
    url: true,
    width: true,
    height: true,
    alt: true,
  },
}

export const darkLightImageFragment = {
  light: {
    url: true,
    width: true,
    height: true,
    aspectRatio: true,
  },
  dark: {
    url: true,
    width: true,
    height: true,
    aspectRatio: true,
  },
  alt: true,
}

export const optimizedImageFragment = {
  url: true,
  width: true,
  height: true,
  alt: true,
}
