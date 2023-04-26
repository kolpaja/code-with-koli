import { FC } from 'react';
import styles from './Techs.module.scss';
interface TechsProps {}

const Techs: FC<TechsProps> = () => (
  <div className={styles.techsWrapper}>
    <h2>Techs component</h2>
  </div>
);

export { Techs };
