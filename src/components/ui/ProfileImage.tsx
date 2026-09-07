import styles from './ProfileImage.module.css';

interface ProfileImageProps {
  src: string;
  /** 1x variant for smaller viewports/lower-density displays. */
  src1x?: string;
  alt: string;
}

/**
 * Renders the verified black-and-white profile photograph. This is the
 * real supplied photograph, resized/re-encoded only — no facial
 * editing, retouching, or generation. `srcSet` supplies both a 1x and
 * 2x/retina variant so the browser picks the appropriate density.
 */
export function ProfileImage({ src, src1x, alt }: ProfileImageProps) {
  return (
    <div className={styles.wrapper}>
      <img
        src={src}
        srcSet={src1x ? `${src1x} 1x, ${src} 2x` : undefined}
        alt={alt}
        className={styles.image}
        width={220}
        height={220}
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}
