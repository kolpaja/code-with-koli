import { FC } from 'react';
import styles from './Services.module.scss';
interface ServicesProps {

}

const Services: FC<ServicesProps> = () => (
  <div className={styles.servicesWrapper}>
    <h2>Services component</h2>
  </div>
);

export { Services };
