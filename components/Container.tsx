import cn from 'classnames';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from 'styles/container.module.scss';
import srcImg from 'assets/icons/src-code-cwk.png';
import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';
import Image from 'next/image';
import Link from 'next/link';
import CoolBox from './cool-ui/CoolBox';
import MetaData, { IMetaData } from './Metadata';

interface INavItem {
  href: string;
  text: string;
}

function NavItem({ href, text }: INavItem) {
  const router = useRouter();
  const isActive = router.asPath == href;

  return (
    <NextLink
      href={href}
      className={cn(
        isActive
          ? ' text-blue-500 underline decoration-wavy hover:decoration-solid'
          : ' text-gray-600 dark:text-gray-400 ',
        styles.coolLink,
        ' hidden  p-1 sm:px-3 hover:underline hover:decoration-slice sm:py-2 rounded-lg transition-all'
      )}
    >
      {text}
    </NextLink>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  meta?: IMetaData;
}

export default function Container(props: ContainerProps) {
  const { children, meta } = props;
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <CoolBox type="div" className=" overflow-x-hidden overflow-y-auto">
      <MetaData {...meta} />

      <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-between gap-1 w-full relative max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>

          <div className="">
            <MobileMenu />
            <ul className="hidden md:flex flex-row gap-1 items-stretch w-full">
              <NavItem href="/" text="Home" />
              <NavItem href="/guestbook" text="Guestbook" />
              <NavItem href="/cwk" text="CWK" />
              <NavItem href="/blog" text="Blog" />
              <NavItem href="/myapps" text="MyApps" />
            </ul>
          </div>
          <Link href="/" className="visible md:hidden">
            <Image
              src={srcImg}
              width={36}
              height={36}
              alt="source code icon @kolpaja"
              className="dark:shadow-md dark:shadow-cyan-500 dark:rounded-md"
            />
          </Link>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300 dark:shadow-md dark:shadow-cyan-500 dark:rounded-full  transition-all"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <CoolBox
        type="div"
        id="skip"
        className="flex flex-col px-4 sm:px-8 mx-auto max-w-7xl"
      >
        {children}
        <Footer />
      </CoolBox>
    </CoolBox>
  );
}
