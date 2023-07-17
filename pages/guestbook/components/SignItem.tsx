import CoolBox from 'components/cool-ui/CoolBox';
import CoolText from 'components/cool-ui/CoolText';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { Guestbook } from 'generated/graphql';
import React from 'react';

type Props = {
  sign: Guestbook;
};

const SignItem = ({ sign }: Props) => {
  return (
    <CoolBox type="div" className="flex justify-start gap-8 w-full">
      <p className="w-full">
        <CoolText type="span" className="text-xl font-semibold capitalize">
          {sign?.display_name}
          {': '}
        </CoolText>
        {sign?.comment}
      </p>
      {/* TODO crud and favorites */}
      <div className="reactions flex gap-2 hidden">
        <AiFillHeart className="text-2xl" />
        <BiDotsVerticalRounded className="text-2xl" />
      </div>
    </CoolBox>
  );
};

export default SignItem;
