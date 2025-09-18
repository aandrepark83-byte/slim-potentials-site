import { ButtonLink } from "@/common/button"
import { DarkLightImageAutoscale } from "@/common/dark-light-image"
import { DesktopMenu, MobileMenu } from "./navigation-menu"

type DarkLightImageFragment = {
  dark?: {
    url: string
    alt?: string
    width: number
    height: number
    aspectRatio?: string
    blurDataURL?: string
  }
  light: {
    url: string
    alt?: string
    width: number
    height: number
    aspectRatio: string
    blurDataURL?: string
  }
}

type HeaderFragment = {
  navbar: {
    items: Array<{
      _id: string
      _title: string
      href?: string
      sublinks: {
        items: Array<{
          _id: string
          _title: string
          link: {
            __typename: string
            text?: string
            page?: {
              pathname: string
              _title: string
            }
          }
        }>
      }
    }>
  }
  rightCtas: {
    items: Array<{
      _id: string
      href: string
      label: string
      type: "primary" | "secondary"
    }>
  }
}

export const Header = ({
  logo,
  header,
}: {
  logo: DarkLightImageFragment
  header: HeaderFragment
}) => {
  return (
    <header className="sticky left-0 top-0 z-[110] flex w-full flex-col border-b border-[--border] bg-[--surface-primary] dark:border-[--dark-border] dark:bg-[--dark-surface-primary]">
      <div className="flex h-[--header-height] bg-[--surface-primary] dark:bg-[--dark-surface-primary]">
        <div className="container mx-auto grid w-full grid-cols-[1fr_max-content_1fr] place-items-center content-center items-center px-6 *:first:justify-self-start">
          <ButtonLink unstyled className="flex items-center ring-offset-2" href="/">
            <DarkLightImageAutoscale priority {...logo} />
          </ButtonLink>
          <DesktopMenu {...header} />
          <MobileMenu {...header} />
        </div>
      </div>
    </header>
  )
}
