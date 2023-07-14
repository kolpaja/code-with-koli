import { Cookie, Inter } from '@next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'antd/dist/reset.css';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { Router, useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import 'styles/global.scss';
import cn from 'classnames';
// import { Analytics } from '@vercel/analytics/react';

const interVariable = Inter();

const cookieFont = Cookie({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cookie'
});

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
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <QueryClientProvider client={queryClient}>
          <main className={cn(interVariable.className, cookieFont.variable)}>
            <Component {...pageProps} />
            {/* <Analytics /> */}
          </main>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
