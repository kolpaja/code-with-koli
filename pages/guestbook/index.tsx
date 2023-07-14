import { Spin } from 'antd';
import Container from 'components/Container';
import CoolBox from 'components/cool-ui/CoolBox';
import CoolText from 'components/cool-ui/CoolText';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';

export default function GuestBook() {
  const { data: session, status, update } = useSession();

  console.log(
    '🚀 ~ file: index.tsx:6 ~ GuestBook ~ session:',
    session?.user,
    status
  );
  const meta = {
    title: 'Guestbook'
  };

  return (
    <Container meta={meta}>
      <CoolBox type="div" className="flex flex-col justify-center">
        {/* header line */}
        <CoolBox type="div" className="w-full relative mb-8 h-10">
          <div className="absolute bottom-4 left-0 w-full h-[2px] bg-gray-600 rounded-sm z-10" />
          <CoolText
            type="h1"
            className="text-xl sm:text-3xl w-fit p-1 absolute left-8 bottom-0 z-20 font-cookie"
          >
            GuestBook
          </CoolText>
        </CoolBox>
        Not signed in <br /> <button onClick={() => signIn()}>Sign in</button>
      </CoolBox>
    </Container>
  );
}
