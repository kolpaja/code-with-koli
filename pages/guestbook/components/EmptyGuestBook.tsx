import React from 'react';
import emptyNotes from 'assets/illustrations/add-notes-pana.svg';
import Image from 'next/image';
import CoolText from 'components/cool-ui/CoolText';

const EmptyGuestBook = ({ isHome }: { isHome?: Boolean }) => {
  return (
    <div className="relative">
      <CoolText type="h3" className="text-center mx-auto">
        {isHome
          ? ''
          : 'upss... no comments yet, Be the first to sign my guestbook 😊'}
      </CoolText>
      <Image
        src={emptyNotes}
        alt="cwk guestbook is empty"
        width={400}
        height={300}
      />
    </div>
  );
};

export default EmptyGuestBook;
