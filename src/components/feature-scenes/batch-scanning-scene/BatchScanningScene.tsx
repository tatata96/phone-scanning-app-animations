import pageOne from '@/assets/features/batch-scanning/page_1.png';
import pageTwo from '@/assets/features/batch-scanning/page_2.png';
import pageThree from '@/assets/features/batch-scanning/page_3.png';
import styles from './batch-scanning-scene.module.scss';

const pages = [
  { src: pageOne, className: styles['page-one'] },
  { src: pageTwo, className: styles['page-two'] },
  { src: pageThree, className: styles['page-three'] },
];

export function BatchScanningScene() {
  return (
    <div className={styles.screen}>
      {pages.map(({ src, className }) => (
        <img
          key={src}
          src={src}
          alt={'Scanned document page image'}
          className={`${styles.page} ${className}`}
        />
      ))}
    </div>
  );
}
