import { useId, useState } from 'react';

import { features } from '@/constants/features';
import type { FeatureId } from '@/types/feature';
import { FeatureContent } from '@/components/feature-content/FeatureContent';
import { FeatureTabs } from '@/components/feature-tabs/FeatureTabs';
import styles from './feature-showcase.module.scss';

export function FeatureShowcase() {
  const [selectedId, setSelectedId] = useState<FeatureId>(features[0].id);
  const baseId = useId();
  const panelId = `${baseId}-panel`;

  function getTabId(id: FeatureId) {
    return `${baseId}-tab-${id}`;
  }

  const selected = features.find(({ id }) => id === selectedId) ?? features[0];

  if (!selected) {
    return null;
  }

  return (
    <section className={styles.showcase} aria-label="App features">
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={getTabId(selected.id)}
        className={styles.panel}
      >
        <FeatureContent key={selected.id} feature={selected} />
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
