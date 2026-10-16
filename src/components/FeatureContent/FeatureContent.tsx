import type { Feature } from '@/types/feature';
import styles from './feature-content.module.scss';

interface FeatureContentProps {
  feature: Feature;
}

export function FeatureContent({ feature }: FeatureContentProps) {
  return (
    <div className={styles.content}>
      <p className={`type-feature-label ${styles.label}`}>{feature.label}</p>
      <h2 className={`type-feature-title ${styles.title}`}>{feature.title}</h2>
      <p className={`type-feature-body ${styles.description}`}>
        {feature.description}
      </p>

      <button type="button" className={`type-button-label ${styles.button}`}>
        Learn More
      </button>
    </div>
  );
}
