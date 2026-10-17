import signatureImage from '@/assets/features/sign-and-stamp/stamp_1.png';
import stampImage from '@/assets/features/sign-and-stamp/stamp_2.png';
import styles from './sign-and-stamp-scene.module.scss';

export function SignAndStampScene() {
  return (
    <>
      <img
        src={signatureImage}
        alt="Handwritten signature placed on the document"
        className={styles.signature}
      />
      <img
        src={stampImage}
        alt="Red “Completed” stamp placed on the document"
        className={styles.stamp}
      />
    </>
  );
}
