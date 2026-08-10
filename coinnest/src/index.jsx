import React from 'react';
import { createRoot } from 'react-dom/client';
import RewardsAppPrototype from './apps/user/RewardsAppPrototype';

import './styles/tailwind.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RewardsAppPrototype />
  </React.StrictMode>
);
