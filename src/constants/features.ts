import advancedFiltersImage from '@/assets/features/advanced-filters/phone.png';
import batchScanningImage from '@/assets/features/batch-scanning/phone.png';
import documentScannerImage from '@/assets/features/document-scanner/phone.png';
import exportAndShareImage from '@/assets/features/export-and-share/phone.png';
import signAndStampImage from '@/assets/features/sign-and-stamp/phone.png';
import type { Feature } from '@/types/feature';

export const features: readonly Feature[] = [
  {
    id: 'document-scanner',
    label: 'Document Scanner',
    title: 'Scan with Ease',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF, JPG, ZIP, TXT and Word format.',
    image: documentScannerImage,
  },
  {
    id: 'sign-and-stamp',
    label: 'Sign & Stamp',
    title: 'One-Tap Focus',
    description:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    image: signAndStampImage,
  },
  {
    id: 'batch-scanning',
    label: 'Batch Scanning',
    title: 'Multiple Page Scan',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    image: batchScanningImage,
  },
  {
    id: 'advanced-filters',
    label: 'Advanced Filters',
    title: 'Unique Filters',
    description:
      'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    image: advancedFiltersImage,
  },
  {
    id: 'export-and-share',
    label: 'Export & Share',
    title: 'All-Round Conversion',
    description: 'Export your scans as PDF, JPG, ZIP, TXT and Word.',
    image: exportAndShareImage,
  },
];
