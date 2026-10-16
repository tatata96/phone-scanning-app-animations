import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';
import './styles/colors.scss';
import './styles/typography.scss';
import { App } from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
