'use client';

import { SessionProvider } from 'next-auth/react';

import ProgressBar from './progress-bar';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <ProgressBar />
      {children}
    </SessionProvider>
  );
}
