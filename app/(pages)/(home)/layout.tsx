// library
import type { Metadata } from 'next';
import { ReactNode } from 'react';

// components
import Grid from '@/app/components/grid/grid.component';
import Nav from '@/app/components/nav/nav.component';

// data
import { navLinks } from '@/app/data';

// styles
import '@/app/styles/main.styles.scss';
import { ThemeProvider } from '@/app/contexts/theme.context';
import GoogleAnalytics from '@/app/components/google-analytics/google-analytics.component';

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
        <ThemeProvider>
          <Nav navLinks={ navLinks } />
          { children }
        </ThemeProvider>
      </body>
      { process.env.NODE_ENV === 'production' && <GoogleAnalytics /> }
    </html>
  )
};
