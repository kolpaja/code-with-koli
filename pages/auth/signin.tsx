import { FcGoogle } from 'react-icons/fc';
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType
} from 'next';
import { getProviders, signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]';
import CoolBox from 'components/cool-ui/CoolBox';
import animatedSvg from 'assets/illustrations/animated/animated-login.svg';
import Image from 'next/image';
import CoolText from 'components/cool-ui/CoolText';
import { Button } from 'antd';

export default function SignIn({
  providers
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <CoolBox
      type="div"
      className="flex flex-col gap-1 relative  lg:flex-row lb:justify-center items-center w-full h-screen"
    >
      <div className="relative w-[400px] h-[400px]">
        <Image src={animatedSvg} alt="animated login svg" fill />
        <a
          href="https://storyset.com/user"
          className="absolute left-0 bottom-0 text-xs text-gray-200 dark:text-gray-600"
          target="_blank"
          rel="noreferrer"
        >
          User illustrations by Storyset
        </a>
      </div>

      {/* right providers sign in */}
      <CoolBox type="div" className="flex flex-col items-center gap-4">
        <CoolText type="h1" className="text-center text-xl sm:text-3xl">
          Welcome To Code With Koli
        </CoolText>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button
              className="flex items-center"
              icon={<FcGoogle />}
              onClick={() => signIn(provider.id)}
            >
              Continue sign in with {provider.name}
            </Button>
          </div>
        ))}
      </CoolBox>
    </CoolBox>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, options);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/' } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] }
  };
}
