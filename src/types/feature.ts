import type { ComponentType, SVGProps } from 'react';

export type FeatureId =
  | 'document-scanner'
  | 'sign-and-stamp'
  | 'batch-scanning'
  | 'advanced-filters'
  | 'export-and-share';

export interface Feature {
  id: FeatureId;
  label: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  image: string;
}
