import Container from 'components/Container';
import { GithubStats } from 'components/GithubStats';
import { Hero } from 'components/Hero';
import { Timeline } from 'components/Timeline';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { Suspense } from 'react';

type HomeProps = {
  data?: any;
  isError?: boolean;
};

function Home({ data, isError }: HomeProps) {
  console.log("🚀 ~ file: index.tsx:14 ~ Home ~ data, isError :", data, isError )
  return (
    <Suspense fallback={null}>
      <Container>
        <section className="flex flex-col items-start max-w-7xl w-full border-gray-200 dark:border-gray-700 mx-auto pb-16">
          {/* add hero component */}
          <Hero />

          {/* my experiences brief intro to go to timeline journey  */}
          <Timeline />

          {/* my developed apps  + projects */}

          {/* github stats card */}
          <GithubStats />

          {/* some blogs */}

          {/* personal touch google for this, maybe some code pens things that i enjoy doing */}

          {/* some contacts  */}

          {/* more about me  */}
        </section>
      </Container>
    </Suspense>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: [],
      isError: true
    }
  };
};

export default Home;
