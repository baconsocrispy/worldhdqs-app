// library
import type { Metadata } from 'next';
import { ReactNode } from 'react';

// styles
import '@/app/styles/main.styles.scss';

export const metadata: Metadata = {
  title: 'WorldHQ',
  description: 'Creative Workshop',
};

export default function RootLayout(
  { children }: { children: ReactNode }
) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  )
};
