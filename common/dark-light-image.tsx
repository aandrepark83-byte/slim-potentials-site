import clsx from "clsx"
import Image from "next/image"
import type { ImageProps } from "next/image"

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

type DarkLightImageProps = DarkLightImageFragment &
  Omit<ImageProps, "src" | "alt"> & {
    alt?: string
    withPlaceholder?: boolean
  }

export function DarkLightImage({
  alt,
  dark,
  light,
  className,
  width,
  height,
  withPlaceholder,
  ...props
}: DarkLightImageProps) {
  return (
    <>
      {dark ? (
        <Image
          alt={dark.alt ?? alt ?? ""}
          className={clsx("hidden dark:block", className)}
          height={height ?? dark.height}
          src={dark.url || "/placeholder.svg"}
          width={width ?? dark.width}
          {...props}
          {...(withPlaceholder && dark.blurDataURL
            ? {
                placeholder: "blur",
                blurDataURL: dark.blurDataURL,
              }
            : {})}
        />
      ) : null}
      <Image
        alt={light.alt ?? alt ?? ""}
        className={clsx(dark && "dark:hidden", className)}
        height={height ?? light.height}
        src={light.url || "/placeholder.svg"}
        width={width ?? light.width}
        {...props}
        {...(withPlaceholder && light.blurDataURL
          ? {
              placeholder: "blur",
              blurDataURL: light.blurDataURL,
            }
          : {})}
      />
    </>
  )
}

export function DarkLightImageAutoscale(props: DarkLightImageProps) {
  const aspectRatioString = props.light.aspectRatio || "16/9"
  const [aspectRatioWidth, aspectRatioHeight] = aspectRatioString.split("/").map(Number)
  const aspectRatio = (aspectRatioWidth ?? 16) / (aspectRatioHeight ?? 9)
  let logoStyle

  switch (true) {
    case aspectRatio <= 1.2:
      logoStyle = "square"
      break
    case aspectRatio < 1.4:
      logoStyle = "4/3"
      break
    case aspectRatio < 4:
      logoStyle = "portrait"
      break
    default:
      logoStyle = "landscape"
      break
  }

  return (
    <DarkLightImage
      priority
      alt="logo"
      className={clsx("w-auto max-w-[200px] object-contain", {
        "h-10": logoStyle === "square",
        "h-9": logoStyle === "4/3",
        "h-8": logoStyle === "portrait",
        "h-6": logoStyle === "landscape",
      })}
      style={{
        aspectRatio: aspectRatioString,
      }}
      {...props}
    />
  )
}
