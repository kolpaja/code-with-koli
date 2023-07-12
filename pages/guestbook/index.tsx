import CoolBox from 'components/cool-ui/CoolBox';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function GuestBook() {
  const { data: session } = useSession();
  console.log('🚀 ~ file: index.tsx:6 ~ GuestBook ~ session:', session);
  if (session) {
    return (
      <CoolBox type="div">
        Signed in as {session.user.email} <br />{' '}
        <button onClick={() => signOut()}>Sign out</button>{' '}
      </CoolBox>
    );
  }
  return (
    <CoolBox type="div">
      Not signed in <br /> <button onClick={() => signIn()}>Sign in</button>
    </CoolBox>
  );
}
