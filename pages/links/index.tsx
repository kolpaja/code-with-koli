import Image from 'next/image';
import React from 'react';
import artKolpaja from 'assets/imgs/art-kolpaja.jpg';
import { graphQLClient, queryClient } from 'services/queryClient';
import { GetStaticProps } from 'next';
import { useGetPageData } from 'generated/graphql';

type Props = {};

const Links = (props: Props) => {
  return (
    <div className="mx-auto sm:max-w-sm md:max-w-lg pt-10">
      <div className="wrap w-full flex justify-center">
        <div className="img-wrap mb-10">
          <Image
            src={artKolpaja}
            alt="kolpaja developer image"
            className=" rounded-full ring-2 ring-green-400"
            width={156}
            height={156}
          />
        </div>

        <h1 className="hover:cursor-text">@kolpaja</h1>

        <p>
          Selam there 👋, I am a full-stack developer. checkout my Links Tree
        </p>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await queryClient.prefetchQuery(['pageData'], () =>
    useGetPageData.fetcher(graphQLClient, {})()
  );

  const fetchedPageData = await useGetPageData.fetcher(graphQLClient, {
    publicationState: PublicationState.Live
  })();

  if (fetchedPageData && fetchedPageData.cwk) {
    return {
      props: {
        cwk: fetchedPageData.cwk,
        isError: false
      }
    };
  }

  return {
    props: {
      isError: true
    }
  };
};
export default Links;
