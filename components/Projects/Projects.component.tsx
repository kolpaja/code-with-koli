import { FC } from 'react';
import styles from './Projects.module.scss';
interface ProjectsProps {

}

const Projects: FC<ProjectsProps> = () => (
  <div className={styles.projectsWrapper}>
    <h2>Projects component</h2>
  </div>
);

export { Projects };
