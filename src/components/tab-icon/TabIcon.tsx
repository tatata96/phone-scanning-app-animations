import type { ComponentType, SVGProps } from 'react';

import styles from './tab-icon.module.scss';

interface TabIconProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  selected: boolean;
}

const RING_SIZE = 56;
const RING_STROKE = 1;
const RING_CENTER = RING_SIZE / 2;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;

export function TabIcon({ icon: Icon, selected }: TabIconProps) {
  return (
    <span className={styles.root}>
      <svg
        aria-hidden="true"
        className={styles.ring}
        viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
      >
        <circle
          className={styles.track}
          cx={RING_CENTER}
          cy={RING_CENTER}
          r={RING_RADIUS}
        />
        {selected && (
          <circle
            className={styles.progress}
            cx={RING_CENTER}
            cy={RING_CENTER}
            r={RING_RADIUS}
            pathLength={1}
          />
        )}
      </svg>
      <Icon aria-hidden="true" className={styles.icon} />
    </span>
  );
}
