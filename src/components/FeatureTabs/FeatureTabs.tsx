import { useRef } from 'react';
import type { KeyboardEvent } from 'react';

import type { Feature, FeatureId } from '@/types/feature';
import styles from './feature-tabs.module.scss';

interface FeatureTabsProps {
  features: readonly Feature[];
  selectedId: FeatureId;
  onSelect: (id: FeatureId) => void;
  getTabId: (id: FeatureId) => string;
  panelId: string;
}

export function FeatureTabs({
  features,
  selectedId,
  onSelect,
  getTabId,
  panelId,
}: FeatureTabsProps) {
  const listRef = useRef<HTMLDivElement>(null);

  function selectAndReveal(feature: Feature) {
    onSelect(feature.id);

    const list = listRef.current;
    const tab = document.getElementById(getTabId(feature.id));

    if (!list || !tab) {
      return;
    }

    tab.focus({ preventScroll: true });

    // Scroll only the tab list, never the page.
    const listRect = list.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();

    if (tabRect.left < listRect.left) {
      list.scrollBy({ left: tabRect.left - listRect.left });
    } else if (tabRect.right > listRect.right) {
      list.scrollBy({ left: tabRect.right - listRect.right });
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const current = features.findIndex(({ id }) => id === selectedId);
    let next: number;

    switch (event.key) {
      case 'ArrowRight':
        next = (current + 1) % features.length;
        break;
      case 'ArrowLeft':
        next = (current - 1 + features.length) % features.length;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = features.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const feature = features[next];

    if (feature) {
      selectAndReveal(feature);
    }
  }

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label="Features"
      className={styles.list}
      onKeyDown={handleKeyDown}
    >
      {features.map((feature) => {
        const selected = feature.id === selectedId;

        return (
          <button
            key={feature.id}
            id={getTabId(feature.id)}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={panelId}
            className={`type-button-label ${styles.tab}`}
            onClick={() => selectAndReveal(feature)}
          >
            {feature.label}
          </button>
        );
      })}
    </div>
  );
}
