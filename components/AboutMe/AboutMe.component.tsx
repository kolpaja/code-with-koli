import { FC } from 'react';
import styles from './AboutMe.module.scss';
interface AboutMeProps {

}

const AboutMe: FC<AboutMeProps> = () => (
  <div className={styles.aboutMeWrapper}>
    <h2>AboutMe component</h2>
  </div>
);

export { AboutMe };
