import { GiJourney } from 'react-icons/gi';
import { FC } from 'react';
import styles from './Timeline.module.scss';
import CoolBox from 'components/cool-ui/CoolBox';
import websiteBuilder from 'assets/illustrations/website-creator-bro.svg';
import Image from 'next/image';

interface TimelineProps {}

const Timeline: FC<TimelineProps> = () => (
  <CoolBox type="section" className={styles.timelineWrapper}>
    <h2 className="text-center text-2xl flex gap-2">
      <GiJourney id="timeline" className="text-3xl text-green-700 font-bold" />
      My Coding Journey
    </h2>
    <Image src={websiteBuilder} alt="@kolpaja building website" />
  </CoolBox>
);

export { Timeline };
