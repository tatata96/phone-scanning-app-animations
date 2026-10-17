import type { ComponentType } from 'react';

import { BatchScanningScene } from '@/components/BatchScanningScene/BatchScanningScene';
import { SignAndStampScene } from '@/components/SignAndStampScene/SignAndStampScene';
import type { FeatureId } from '@/types/feature';

// Scenes render their own layers on top of, inside or behind the phone image.
// Features without a scene just show the phone.
export const featureScenes: Partial<Record<FeatureId, ComponentType>> = {
  'sign-and-stamp': SignAndStampScene,
  'batch-scanning': BatchScanningScene,
};
