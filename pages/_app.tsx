import 'antd/dist/reset.css';
import { ThemeProvider } from 'next-themes';
import 'styles/global.scss';
import { Inter } from '@next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router, useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { SessionProvider } from 'next-auth/react';
// import { Analytics } from '@vercel/analytics/react';

const interVariable = Inter();

// Create a client
const queryClient = new QueryClient();

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

declare global {
  interface Window {
    gtag: any;
    // rewardful?: (type?: string, args?: any) => void;
    // Rewardful?: any;
  }
}

const googleAnalyticsId = '';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string, googleAnalyticsId: string) => {
  if (window && window.gtag) {
    window.gtag('config', googleAnalyticsId, {
      page_path: url
    });
  }
};

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url, googleAnalyticsId);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, googleAnalyticsId]);
  return (
    // <SessionProvider session={session}>
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <main className={interVariable.className}>
          <Component {...pageProps} />
          {/* <Analytics /> */}
        </main>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
    // </SessionProvider>
  );
}
