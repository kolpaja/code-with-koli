import { FcInfo } from 'react-icons/fc';
import { FC } from 'react';
import styles from './AboutMe.module.scss';
import CoolBox from 'components/cool-ui/CoolBox';
import CoolText from 'components/cool-ui/CoolText';
import codeTyping from 'assets/illustrations/code-typing-amico.svg';
import Image from 'next/image';
interface AboutMeProps {
  aboutMe: string;
}

const AboutMe: FC<AboutMeProps> = ({ aboutMe }) => (
  <CoolBox type="section" className={styles.aboutMeWrapper}>
    <CoolText
      type="h2"
      className="flex gap-1 items-center my-4  font-semibold text-xl sm:text-2xl"
    >
      <FcInfo className="text-xl" />A little about me:
    </CoolText>

    <Image
      className="mx-auto"
      src={codeTyping}
      width={320}
      height={250}
      alt="code typing bro @kolpaja"
    />

    <section dangerouslySetInnerHTML={{ __html: `${aboutMe}` }} />
  </CoolBox>
);

export { AboutMe };
