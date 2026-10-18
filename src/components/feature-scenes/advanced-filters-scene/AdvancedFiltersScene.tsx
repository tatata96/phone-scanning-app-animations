import brightnessSlider from '@/assets/features/advanced-filters/filter_1.png';
import contrastSlider from '@/assets/features/advanced-filters/filter_2.png';
import styles from './advanced-filters-scene.module.scss';

export function AdvancedFiltersScene() {
  return (
    <>
      <img
        src={brightnessSlider}
        alt="Brightness slider beside the phone"
        className={styles.brightness}
      />
      <img
        src={contrastSlider}
        alt="Contrast slider beside the phone"
        className={styles.contrast}
      />
    </>
  );
}
