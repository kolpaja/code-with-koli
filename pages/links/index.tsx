import Image from 'next/image';
import React from 'react';
import artKolpaja from 'assets/imgs/art-kolpaja.jpg';
import { graphQLClient, queryClient } from 'services/queryClient';
import { GetStaticProps } from 'next';
import { CwkEntity, useGetSocialLinks } from 'generated/graphql';
import { BuyMeCoffee } from 'components/BuyMeCoffee';
import getIcon from 'services/utils/getIcon';
import { BsThreeDots } from 'react-icons/bs';

type Props = {
  data: CwkEntity['attributes'];
};

const Links = ({ data }: Props) => {
  console.log('🚀 ~ file: index.tsx:17 ~ Links ~ data:', data);
  return (
    <div className="bg-gradient-to-b from-teal-400 to-indigo-600 w-full h-full pb-10 md:pb-16">
      <div className="mx-auto sm:max-w-sm md:max-w-lg pt-10 md:pt-16 bg-inherit text-white">
        <div className="wrap w-full flex justify-center flex-col items-center gap-4 md:gap-6">
          <a
            href="https://codewithkoli.com"
            target="_self"
            className="img-wrap block hover:scale-110 mb-2"
          >
            <Image
              src={artKolpaja}
              alt="kolpaja developer image"
              className=" rounded-full ring-2 ring-green-400"
              width={156}
              height={156}
            />
          </a>

          <h1 className="hover:cursor-text text-xl md:text-2xl italic font-sans">
            {data.title}
          </h1>

          <p className="text-center leading-6">
            Selam👋, I am a full-stack developer. <br /> Checkout my Links Tree
          </p>

          <div className="w-full flex justify-center items-center flex-col gap-3 md:gap-4 my-4 px-3 md:px-6">
            {data.social_networks
              .filter((item) => item.showOnPage === true)
              .map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full shadow-md bg-orange-500 flex items-center justify-between px-4 md:px-5 py-2 md:py-3 rounded-3xl hover:scale-110 transition-all duration-500"
                >
                  {getIcon(social.icon)}

                  <h3 className="text-center font-semibold">
                    {social.display_name}
                  </h3>
                  <div
                    className="hover:cursor-pointer "
                    // onClick={() => {
                    //   console.log({ social });
                    //   return;
                    // }}
                  >
                    <BsThreeDots />
                  </div>
                </a>
              ))}
          </div>

          <BuyMeCoffee showTitle={false} />

          <div>
            <p className="text-center px-6 text-sm md:text-lg">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await queryClient.prefetchQuery(['socialLinks'], () =>
    useGetSocialLinks.fetcher(graphQLClient, {})()
  );

  const fetchedPageData = await useGetSocialLinks.fetcher(graphQLClient, {})();

  if (fetchedPageData && fetchedPageData.cwk) {
    return {
      props: {
        data: fetchedPageData.cwk.data.attributes,
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
