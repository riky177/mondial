'use client';

import { ProgressProvider } from '@bprogress/next/app';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      {children}
      <ProgressProvider
        height="2px"
        color="var(--color-primary)"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </SessionProvider>
  );
}
