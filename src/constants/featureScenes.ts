import type { ComponentType } from 'react';

import { AdvancedFiltersScene } from '@/components/feature-scenes/advanced-filters-scene/AdvancedFiltersScene';
import { BatchScanningScene } from '@/components/feature-scenes/batch-scanning-scene/BatchScanningScene';
import { SignAndStampScene } from '@/components/feature-scenes/sign-and-stamp-scene/SignAndStampScene';
import type { FeatureId } from '@/types/feature';

// Scenes render their own layers on top of, inside or behind the phone image.
// Features without a scene just show the phone.
export const featureScenes: Partial<Record<FeatureId, ComponentType>> = {
  'sign-and-stamp': SignAndStampScene,
  'batch-scanning': BatchScanningScene,
  'advanced-filters': AdvancedFiltersScene,
};
