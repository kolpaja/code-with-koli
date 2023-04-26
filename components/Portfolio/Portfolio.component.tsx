import { FC } from 'react';
import styles from './Portfolio.module.scss';
interface PortfolioProps {

}

const Portfolio: FC<PortfolioProps> = () => (
  <div className={styles.portfolioWrapper}>
    <h2>Portfolio component</h2>
  </div>
);

export { Portfolio };
