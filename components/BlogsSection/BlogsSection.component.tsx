import { FC } from 'react';
import styles from './BlogsSection.module.scss';
interface BlogsSectionProps {

}

const BlogsSection: FC<BlogsSectionProps> = () => (
  <div className={styles.blogsSectionWrapper}>
    <h2>BlogsSection component</h2>
  </div>
);

export { BlogsSection };
