import React from 'react';
import { createRoot } from 'react-dom/client';
import { WorldPreview } from './WorldPreview';

createRoot(document.getElementById('root')!).render(<React.StrictMode><WorldPreview /></React.StrictMode>);
