import { FC } from 'react';
import styles from './Cwk.module.scss';
interface CwkProps {

}

const Cwk: FC<CwkProps> = () => (
  <div className={styles.cwkWrapper}>
    <h2>Cwk component</h2>
  </div>
);

export { Cwk };
