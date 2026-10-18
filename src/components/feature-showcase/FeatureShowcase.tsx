import { useEffect, useId, useState } from 'react';

import { features } from '@/constants/features';
import type { FeatureId } from '@/types/feature';
import { FeatureContent } from '@/components/feature-content/FeatureContent';
import { FeatureTabs } from '@/components/feature-tabs/FeatureTabs';
import styles from './feature-showcase.module.scss';

export function FeatureShowcase() {
  const [selectedId, setSelectedId] = useState<FeatureId>(features[0].id);
  const [displayedId, setDisplayedId] = useState<FeatureId>(features[0].id);
  const baseId = useId();
  const panelId = `${baseId}-panel`;

  function getTabId(id: FeatureId) {
    return `${baseId}-tab-${id}`;
  }

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function finishWithoutMotion() {
      if (reducedMotion.matches) {
        setDisplayedId(selectedId);
      }
    }

    finishWithoutMotion();
    reducedMotion.addEventListener('change', finishWithoutMotion);
    return () =>
      reducedMotion.removeEventListener('change', finishWithoutMotion);
  }, [selectedId]);

  const selected = features.find(({ id }) => id === displayedId) ?? features[0];

  if (!selected) {
    return null;
  }

  return (
    <section className={styles.showcase} aria-label="App features">
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={getTabId(displayedId)}
        className={styles.panel}
      >
        <FeatureContent
          key={selected.id}
          feature={selected}
          isExiting={displayedId !== selectedId}
          onExitComplete={() => setDisplayedId(selectedId)}
        />
      </div>
      <FeatureTabs
        features={features}
        selectedId={selectedId}
        onSelect={setSelectedId}
        getTabId={getTabId}
        panelId={panelId}
      />
    </section>
  );
}
