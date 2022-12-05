import NextImage from 'next/image'
import { buildUrl } from 'cloudinary-build-url'
import { ResizeType } from '@cld-apis/types'

export interface ImageProps {
  aspectRatio?: '1:1' | '4:3' | '16:9' | '21:9'
  alt: string
  publicId: string
  height?: number
  width?: number
  type?: ResizeType
}

export function Image({
  aspectRatio,
  alt,
  height,
  type = 'scale',
  width,
  publicId
}: ImageProps) {
  const url = buildUrl(publicId, {
    cloud: {
      cloudName: '$img_current',
      resourceType: 'image',
      storageType: 'upload',
      secureDistribution: 'rentpath-res.cloudinary.com',
      privateCdn: true
    },
    transformations: {
      resize: {
        type,
        width,
        height,
        aspectRatio
      }
    }
  })

  return (
    <NextImage
      src={url}
      alt={alt}
      width={width}
      height={height}
      // use actual project breakpoints here
      sizes="(max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    33vw"
    />
  )
}
