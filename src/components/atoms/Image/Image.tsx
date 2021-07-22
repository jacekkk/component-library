import React, { ImgHTMLAttributes, CSSProperties } from 'react'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
  style?: CSSProperties
  link?: string
}

const Image: React.FC<ImageProps> = ({ link, ...props }: ImageProps) => {
  if (link) {
    return (
      <a href={link}>
        <img {...props} />
      </a>
    )
  }

  return <img {...props} />
}

export { ImageProps, Image }
