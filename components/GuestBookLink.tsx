import { AiOutlineDoubleRight } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import React from 'react';
import CoolBox from './cool-ui/CoolBox';
import CoolText from './cool-ui/CoolText';
import Link from 'next/link';
import EmptyGuestBook from 'pages/guestbook/components/EmptyGuestBook';

const GuestBookLink = () => {
  return (
    <CoolBox type="section" className="w-full mx-auto text-center p-8 sm:p-24">
      <CoolText
        type="h2"
        className="text-3xl font-semibold flex justify-center items-center gap-2 mb-4"
      >
        <BiEdit className="text-4xl" /> Sign my GuestBook
      </CoolText>
      <Link
        href="/guestbook"
        className="underline hover:font-bold font-semibold text-xl flex flex-col sm:flex-row justify-center items-center gap-1"
      >
        <EmptyGuestBook isHome />
        <p className="flex justify-center items-center gap-2">
          continue to guestbook
          <AiOutlineDoubleRight className="text-2xl text-green-700" />
        </p>
      </Link>
    </CoolBox>
  );
};

export default GuestBookLink;
