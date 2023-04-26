import 'styles/global.scss';

import { ThemeProvider } from 'next-themes';
// import { SessionProvider } from 'next-auth/react';
import { Inter } from '@next/font/google';
// import { Analytics } from '@vercel/analytics/react';

const interVariable = Inter();

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const testss = []
  return (
    // <SessionProvider session={session}>
    <ThemeProvider attribute="class">
      <main className={interVariable.className}>
        <Component {...pageProps} />
        {/* <Analytics /> */}
      </main>
    </ThemeProvider>
    // </SessionProvider>
  );
}
