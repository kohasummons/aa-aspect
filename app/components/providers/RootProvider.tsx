"use client";

import { useEffect } from 'react';

export function RootProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only run on client, after hydration
    document.documentElement.style.colorScheme = 'light';
  }, []);

  return <>{children}</>;
} 