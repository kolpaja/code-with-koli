import Container from 'components/Container';
import { GithubStats } from 'components/GithubStats';
import { Hero } from 'components/Hero';
import { Timeline } from 'components/Timeline';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { Suspense } from 'react';
import {
  CwkEntityResponse,
  PublicationState,
  useGetPageData
} from 'generated/graphql';
import { graphQLClient, queryClient } from 'services/queryClient';
import { Projects } from 'components/Projects';
import { AboutMe } from '../components/AboutMe/AboutMe.component';
import { useSession, signIn, signOut } from 'next-auth/react';

type HomeProps = {
  cwk: CwkEntityResponse;
  isError?: boolean;
};

function Home({ cwk }: HomeProps) {
  // console.log('🚀 ~ file: index.tsx:15 ~ Home ~ props:', cwk);
  const { data: session, status } = useSession();
  console.log('🚀 ~ file: index.tsx:25 ~ Home ~ session:', status, session);

  const {
    about_me,
    description,
    my_experience,
    social_networks,
    contact,
    my_developed_apps,
    my_spoken_languages
  } = cwk?.data?.attributes;

  return (
    <Suspense fallback={null}>
      <Container>
        <section className="flex flex-col items-start max-w-7xl w-full border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <Hero />

          <Timeline experiences={my_experience} />

          {/* my developed apps  + projects */}
          <Projects projects={my_developed_apps} />

          <GithubStats />

          {/* some blogs */}

          {/* personal touch google for this, maybe some code pens things that i enjoy doing */}

          <AboutMe aboutMe={about_me} />
        </section>
      </Container>
    </Suspense>
  );
}

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

export default Home;
