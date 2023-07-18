import { TbMessage2Code } from 'react-icons/tb';
import { FcGoogle } from 'react-icons/fc';
import { GiSpellBook } from 'react-icons/gi';
import { Button, Skeleton, message } from 'antd';
import Container from 'components/Container';
import CoolBox from 'components/cool-ui/CoolBox';
import CoolText from 'components/cool-ui/CoolText';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useCallback, useMemo, useState } from 'react';
import appConfig from 'appConfig';
import EmptyGuestBook from './components/EmptyGuestBook';
import { useGetGuestBooks } from 'services/hooks/useGetGuestbooks';
import SignItem from './components/SignItem';
import GuestbookForm from './components/GuestbookForm';

const { appCode } = appConfig;

export default function GuestBook() {
  const { data: session, status, update } = useSession();

  const meta = {
    title: 'Guestbook',
    description: 'Sign my guestbook, leave a comment, salute, impression'
  };

  // fetch guestbook signs
  const {
    data: allSigns,
    isLoading: isLoadingSigns,
    isError,
    isFetched,
    refetch
  } = useGetGuestBooks({ appCode, pageSize: 100 });

  const getLabel = useCallback(() => {
    if (status === 'authenticated') {
      return (
        <CoolText type="span">
          Hey 👋 <strong>{session.user.name}</strong> <br /> leave a sign to my
          📖GustBook 👇
        </CoolText>
      );
    } else {
      return (
        <CoolText type="h4" className="flex gap-1">
          Sing my Guest Book, submit your <TbMessage2Code /> feedback
        </CoolText>
      );
    }
  }, [session, status]);

  return (
    <Container meta={meta}>
      <CoolBox type="div" className="flex flex-col justify-center">
        {/* header line */}
        <CoolBox type="div" className="w-full relative mb-8 h-10">
          <div className="absolute bottom-4 left-0 w-full h-[2px] bg-zinc-200 dark:bg-gray-500 rounded-sm z-10" />
          <CoolText
            type="h1"
            className="text-3xl sm:text-5xl flex gap-2 justify-center items-center w-fit px-1 py-1 absolute left-1/3 sm:left-8 bottom-0 z-20 font-cookie"
          >
            GuestBook <GiSpellBook className="" />
          </CoolText>
        </CoolBox>

        {/* guestbook signs action*/}
        <CoolBox type="div" className="max-w-xl">
          {/* input sign */}
          <div className="mb-8">
            <label
              htmlFor="signInput"
              className="hover:cursor-pointer mb-4 block"
            >
              {getLabel()}
            </label>
            {status === 'unauthenticated' ? (
              <Button
                onClick={() => signIn('google')}
                icon={<FcGoogle />}
                className="flex items-center text-lg text-gray-900 dark:text-gray-100"
              >
                login with Google
              </Button>
            ) : (
              <GuestbookForm refetch={refetch} signOut={signOut} />
            )}
          </div>
          {/* guest book signs list */}
        </CoolBox>

        <CoolBox
          type="section"
          className="bg-cyan-200 px-2 sm:px-4 py-2 max-w-3xl h-screen"
        >
          <Skeleton
            loading={isLoadingSigns}
            active
            paragraph={{
              rows: 11,
              width: [240, 200, 160, 120, 80, 120, 160, 100, 250, 350]
            }}
          >
            {/* list demo */}
            {allSigns?.guestbooks?.data?.length && !isError ? (
              allSigns.guestbooks.data.map((sign) => (
                <SignItem key={sign.id} sign={sign.attributes} />
              ))
            ) : (
              <EmptyGuestBook />
            )}
          </Skeleton>
        </CoolBox>
      </CoolBox>
    </Container>
  );
}
