"use client"
import * as React from "react"
import clsx from "clsx"
import Link from "next/link"
import { ChevronDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink as NavigationMenuLinkPrimitive,
  NavigationMenuList,
  NavigationMenuTrigger,
  type NavigationMenuLinkProps,
} from "@radix-ui/react-navigation-menu"
import { $button, ButtonLink } from "../common/button"
import { useToggleState } from "../hooks/use-toggle-state"
import { useHasRendered } from "../hooks/use-has-rendered"

type HeaderLiksFragment = {
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
}

type HeaderFragment = {
  navbar: {
    items: HeaderLiksFragment[]
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

// #region desktop 💻
/* -------------------------------------------------------------------------- */
/*                                   Desktop                                  */
/* -------------------------------------------------------------------------- */

export function NavigationMenuHeader({
  links,
  className,
}: {
  links: HeaderLiksFragment[]
  className?: string
}) {
  const safeLinks = links || []

  return (
    <NavigationMenu className={clsx("z-1 relative flex-col justify-center lg:flex", className)} delayDuration={50}>
      <NavigationMenuList className="flex flex-1 gap-0.5 px-4">
        {safeLinks.map((link) =>
          link.sublinks?.items?.length > 0 ? (
            <NavigationMenuLinkWithMenu key={link._id} {...link} />
          ) : (
            <li key={link._id}>
              <NavigationMenuLink href={link.href ?? "#"}>{link._title}</NavigationMenuLink>
            </li>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function NavigationMenuLink({
  className,
  children,
  href,
  ...props
}: { children: React.ReactNode; href: string } & NavigationMenuLinkProps) {
  return (
    <NavigationMenuLinkPrimitive
      className={$button({
        className:
          "inline-flex h-6 shrink-0 items-center justify-center gap-1 rounded-full px-3 pb-px tracking-tight text-black hover:bg-white/10 hover:text-black dark:text-black dark:hover:bg-white/10 dark:hover:text-black lg:h-7",
      })}
      href={href}
      {...props}
    >
      {children}
    </NavigationMenuLinkPrimitive>
  )
}

function NavigationMenuLinkWithMenu({ _title, href, sublinks }: HeaderLiksFragment) {
  const [closeOnClick, setCloseOnClick] = React.useState(false)
  const timeoutRef = React.useRef<number | null>(null)

  const handleMouseEnter = () => {
    timeoutRef.current = window.setTimeout(() => {
      setCloseOnClick(true)
    }, 500)
  }

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current!)
    setCloseOnClick(false)
  }

  const safeSublinks = sublinks?.items || []

  return (
    <NavigationMenuItem key={`${href ?? ""}${_title}`} className="relative items-center gap-0.5">
      <NavigationMenuTrigger
        onClick={(e) => {
          if (!closeOnClick) {
            e.preventDefault()
          }
        }}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
        className={$button({
          className:
            "inline-flex items-center gap-1 rounded-full pb-px pl-3 pr-2 tracking-tight text-black hover:bg-white/10 hover:text-black dark:text-black dark:hover:bg-white/10 dark:hover:text-black lg:h-7",
        })}
      >
        {href ? <Link href={href}>{_title}</Link> : <span className="cursor-default">{_title}</span>}
        <ChevronDownIcon className="text-black/70 dark:text-black/70" />
      </NavigationMenuTrigger>
      <NavigationMenuContent className="absolute top-[calc(100%+4px)] w-[clamp(180px,30vw,300px)] rounded-md border border-white/20 bg-white/10 backdrop-blur-sm p-0.5 dark:border-white/20 dark:bg-white/10">
        <div className="flex flex-col gap-1">
          <ul className="flex flex-col">
            {safeSublinks.map((sublink) => {
              const { href, _title } =
                sublink.link.__typename === "PageReferenceComponent"
                  ? {
                      href: sublink.link.page?.pathname || "#",
                      _title: sublink.link.page?._title || sublink._title,
                    }
                  : {
                      href: sublink.link.text || "#",
                      _title: sublink._title,
                    }

              return (
                <li key={sublink._id}>
                  <NavigationMenuLinkPrimitive
                    href={href}
                    className={$button({
                      className:
                        "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-black hover:bg-white/10 hover:text-black dark:text-black dark:hover:bg-white/10 dark:hover:text-black",
                    })}
                  >
                    {_title}
                  </NavigationMenuLinkPrimitive>
                </li>
              )
            })}
          </ul>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export function DesktopMenu({ navbar, rightCtas }: HeaderFragment) {
  const navItems = navbar?.items || []
  const ctaItems = rightCtas?.items || []

  return (
    <>
      <NavigationMenuHeader className="hidden lg:flex" links={navItems} />
      <div className="hidden items-center gap-2 !justify-self-end lg:flex">
        {ctaItems.map((cta) => {
          return (
            <ButtonLink key={cta._id} className="!px-3.5" href={cta.href} intent={cta.type}>
              {cta.label}
            </ButtonLink>
          )
        })}
      </div>
    </>
  )
}

// #region mobile 📱
/* -------------------------------------------------------------------------- */
/*                                   Mobile                                   */
/* -------------------------------------------------------------------------- */

export function MobileMenu({ navbar, rightCtas }: HeaderFragment) {
  const { handleToggle, isOn, handleOff } = useToggleState()

  const navItems = navbar?.items || []
  const ctaItems = rightCtas?.items || []

  return (
    <>
      <button
        aria-label="Toggle Menu"
        className="col-start-3 flex items-center justify-center gap-2 !justify-self-end rounded-sm border border-white/20 bg-white/10 backdrop-blur-sm p-2 dark:border-white/20 dark:bg-white/10 lg:hidden lg:h-7"
        onPointerDown={handleToggle}
      >
        <HamburgerMenuIcon className="size-4 text-black" />
      </button>
      <div className="block lg:hidden">
        {isOn ? (
          <div className="fixed left-0 top-[calc(var(--header-height)+1px)] z-10 h-auto w-full bg-white/10 backdrop-blur-sm dark:bg-white/10">
            <div className="flex flex-col gap-8 px-6 py-8">
              <nav className="flex flex-col gap-4">
                {navItems.map((link) =>
                  link.sublinks?.items?.length > 0 ? (
                    <ItemWithSublinks
                      key={link._id}
                      _id={link._id}
                      _title={link._title}
                      sublinks={link.sublinks.items}
                      onClick={handleOff}
                    />
                  ) : (
                    <Link
                      key={link._id}
                      className="flex items-center gap-2 rounded-sm px-3 py-1.5 text-black hover:text-black dark:text-black dark:hover:text-black"
                      href={link.href ?? "#"}
                      onClick={handleOff}
                    >
                      {link._title}
                    </Link>
                  ),
                )}
              </nav>
              <div className="flex items-center justify-start gap-2">
                {ctaItems.map((cta) => {
                  return (
                    <ButtonLink key={cta._id} href={cta.href} intent={cta.type} size="lg">
                      {cta.label}
                    </ButtonLink>
                  )
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

function ItemWithSublinks({
  _id,
  _title,
  sublinks,
  onClick,
}: {
  _id: string
  _title: string
  sublinks: HeaderLiksFragment["sublinks"]["items"]
  onClick: () => void
}) {
  const { isOn, handleOff, handleOn } = useToggleState(false)
  const hasRendered = useHasRendered()
  const listRef = React.useRef<HTMLUListElement>(null)

  const safeSublinks = sublinks || []

  React.useEffect(() => {
    if (!hasRendered) return

    if (isOn) {
      listRef.current?.animate([{ height: `${(40 * safeSublinks.length).toString()}px` }], {
        duration: 200,
        easing: "ease-in-out",
        fill: "forwards",
      })
    } else {
      listRef.current?.animate([{ height: "0px" }], {
        duration: 200,
        easing: "ease-in-out",
        fill: "forwards",
      })
    }
  }, [isOn, hasRendered, safeSublinks])

  const handleToggle = () => {
    if (isOn) {
      handleOff()
    } else {
      handleOn()
    }
  }

  return (
    <div key={_id}>
      <button
        className="flex items-center gap-2 px-3 py-1.5 text-black hover:text-black dark:text-black dark:hover:text-black"
        onClick={handleToggle}
      >
        {_title}
        <ChevronDownIcon
          className={clsx(
            "h-min transform text-black/70 transition-transform dark:text-black/70",
            isOn ? "rotate-180" : "rotate-0",
          )}
        />
      </button>
      <ul
        ref={listRef}
        className={clsx("flex h-0 origin-top transform-gpu flex-col gap-2 overflow-hidden pl-4 transition-transform")}
      >
        {safeSublinks.map((sublink) => {
          const { href, _title } =
            sublink.link.__typename === "PageReferenceComponent"
              ? {
                  href: sublink.link.page?.pathname || "#",
                  _title: sublink.link.page?._title || sublink._title,
                }
              : {
                  href: sublink.link.text || "#",
                  _title: sublink._title,
                }

          return (
            <li key={sublink._id}>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-1.5 text-black hover:text-black dark:text-black dark:hover:text-black"
                href={href}
                onClick={onClick}
              >
                {_title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
