import { BiCalendarHeart } from 'react-icons/bi';
import Link from 'next/link';
import { ReactNode } from 'react';
import CoolText from './cool-ui/CoolText';

interface IExternalLink {
  href: string;
  children: ReactNode;
}

const currentYear = new Date().getFullYear();

const ExternalLink = ({ href, children }: IExternalLink) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full my-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/cwk"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Code With Koli
          </Link>
          <Link
            href="/links"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Links
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-2">
        <CoolText type="h6" className="text-md sm:text-lg m-0 p-0">
          copyright CWK(CodeWithKoli)
        </CoolText>
        <BiCalendarHeart className="text-2xl text-cyan-900" />
        <CoolText type="span">{currentYear}</CoolText>
      </div>
    </footer>
  );
}
