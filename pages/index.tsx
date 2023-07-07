import Container from 'components/Container';
import { Hero } from 'components/Hero';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <section className="flex flex-col justify-center items-start max-w-7xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <h1 className="text-black dark:text-gray-100">Hi iam Sokol Paja</h1>

          {/* add hero component */}
          <Hero />
          {/* my developed apps  + projects */}

          {/* my experiences brief intro to go to timeline journey  */}

          {/* some blogs */}

          {/* personal touch google for this, maybe some code pens things that i enjoy doing */}

          {/* some contacts  */}

          {/* more about me  */}
        </section>
      </Container>
    </Suspense>
  );
}
