// library
import type { Metadata } from 'next';
import { ReactNode } from 'react';

// components
import Grid from '@/app/components/grid/grid.component';
import Nav from '@/app/components/nav/nav.component';

// styles
import '@/app/styles/main.styles.scss';
import Footer from '@/app/components/footer/footer.component';

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
        <Grid>
          <Nav />
          { children }
        </Grid>
      </body>
    </html>
  )
};
