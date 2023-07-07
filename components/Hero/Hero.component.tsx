import { FC } from 'react';
import styles from './Hero.module.scss';
interface HeroProps {}

const Hero: FC<HeroProps> = () => (
  <div className={'dotted h-screen w-screen'}>
    <h2>Hero component</h2>
  </div>
);

export { Hero };
