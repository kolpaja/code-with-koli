import Container from 'components/Container';
import { IMetaData } from 'components/Metadata';
import CoolBox from 'components/cool-ui/CoolBox';
import CoolText from 'components/cool-ui/CoolText';
import React from 'react';
import fastLoading from 'assets/illustrations/fast-loading-bro.svg';
import Image from 'next/image';

type Props = {};

const CodeWithKoli = (props: Props) => {
  const meta: IMetaData = {
    title: 'My Journey'
  };
  return (
    <Container meta={meta}>
      <CoolBox type="section" className="max-w-7xl">
        {/* title */}
        <CoolText type="h1" className="text-center text-lg sm:text-2xl">
          My Programming road map timeline
        </CoolText>
        <CoolText type="h1" className="text-center text-lg sm:text-2xl my-8">
          coming soon...
        </CoolText>

        {/* brief intro */}
        <Image
          src={fastLoading}
          width={500}
          height={300}
          alt="comming soon img"
        />

        {/* programming road-map timeline */}
      </CoolBox>
    </Container>
  );
};

export default CodeWithKoli;
