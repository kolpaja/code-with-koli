import { FC } from 'react';
import styles from './Testimonials.module.scss';
interface TestimonialsProps {

}

const Testimonials: FC<TestimonialsProps> = () => (
  <div className={styles.testimonialsWrapper}>
    <h2>Testimonials component</h2>
  </div>
);

export { Testimonials };
