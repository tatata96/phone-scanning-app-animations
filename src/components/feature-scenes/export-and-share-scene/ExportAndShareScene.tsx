import arrow from '@/assets/features/export-and-share/arrow.png';
import jpg from '@/assets/features/export-and-share/png.png';
import pdf from '@/assets/features/export-and-share/pdf.png';
import txt from '@/assets/features/export-and-share/txt.png';
import styles from './export-and-share-scene.module.scss';

const files = [
  { src: arrow, alt: '', className: styles.arrow },
  { src: pdf, alt: 'PDF file', className: styles.pdf },
  { src: jpg, alt: 'JPG file', className: styles.jpg },
  { src: txt, alt: 'TXT file', className: styles.txt },
];

export function ExportAndShareScene() {
  return (
    <>
      {files.map(({ src, alt, className }) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={`${styles.file} ${className}`}
        />
      ))}
    </>
  );
}
