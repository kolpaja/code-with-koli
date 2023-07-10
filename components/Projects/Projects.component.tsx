import { FC } from 'react';
import styles from './Projects.module.scss';
interface ProjectsProps {
  projects?: any;
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  console.log('🚀 ~ file: Projects.component.tsx:9 ~ projects:', projects);
  return (
    <div className={styles.projectsWrapper}>
      <h2>Projects component</h2>
      <div className="css-blurry-gradien" />
    </div>
  );
};

export { Projects };
