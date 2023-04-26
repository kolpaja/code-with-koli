import { FC } from 'react';
import styles from './Resume.module.scss';
interface ResumeProps {

}

const Resume: FC<ResumeProps> = () => (
  <div className={styles.resumeWrapper}>
    <h2>Resume component</h2>
  </div>
);

export { Resume };
