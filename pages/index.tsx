import Container from 'components/Container';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <main className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          this is main
        </main>
      </Container>
    </Suspense>
  );
}
