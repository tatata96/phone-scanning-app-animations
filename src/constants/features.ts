import type { Feature } from '@/types/feature';

export const features: readonly Feature[] = [
  {
    id: 'document-scanner',
    label: 'Document Scanner',
    title: 'Scan with Ease',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF, JPG, ZIP, TXT and Word format.',
  },
  {
    id: 'sign-and-stamp',
    label: 'Sign & Stamp',
    title: 'One-Tap Focus',
    description:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
  },
  {
    id: 'batch-scanning',
    label: 'Batch Scanning',
    title: 'Multiple Page Scan',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
  },
  {
    id: 'advanced-filters',
    label: 'Advanced Filters',
    title: 'Unique Filters',
    description:
      'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
  },
  {
    id: 'export-and-share',
    label: 'Export & Share',
    title: 'All-Round Conversion',
    description: 'Export your scans as PDF, JPG, ZIP, TXT and Word.',
  },
];
