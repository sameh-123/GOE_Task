'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
type ImageProps = {
  src: string | StaticImport | null;
  fallback: string | StaticImport;
  alt: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  className? : string
};
export default function ImageFallback(props: ImageProps) {
  const { src, fallback, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src || fallback);
  useEffect(() => {
    if (!src) setImgSrc(fallback);
  }, [src]);
  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallback);
      }}
    />
  );
}
