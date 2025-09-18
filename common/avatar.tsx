"use client"
import clsx from "clsx"
import Image from "next/image"
import { CustomTooltip } from "./tooltip"
import type { ImageProps } from "next/image"

type AuthorFragment = {
  _title: string
  image: {
    url: string
    alt?: string
    height: number
    width: number
  }
}

type AvatarFragment = {
  url: string
  alt?: string
}

export function Author({ image, _title, ...props }: AuthorFragment & Omit<ImageProps, "src" | "alt">) {
  return (
    <CustomTooltip content={_title}>
      <Image
        alt={image.alt ?? `Avatar for ${_title}`}
        className="size-8 rounded-full border-2 border-[--surface-primary] object-cover transition-all dark:border-[--dark-surface-primary]"
        height={image.height}
        src={image.url || "/placeholder.svg"}
        width={image.width}
        {...props}
      />
    </CustomTooltip>
  )
}

export function Avatar({ className, alt, url, ...props }: AvatarFragment & Omit<ImageProps, "src" | "alt">) {
  return (
    <Image
      priority
      alt={alt ?? "Avatar"}
      className={clsx(
        "size-7 shrink-0 rounded-full border-2 border-[--surface-primary] object-cover dark:border-[--dark-surface-primary]",
        className,
      )}
      height={28}
      src={url || "/placeholder.svg"}
      width={28}
      {...props}
    />
  )
}
