import { AiOutlineAppstore } from 'react-icons/ai';
import { FC } from 'react';
import styles from './Projects.module.scss';
import CoolBox from 'components/cool-ui/CoolBox';
import { AppEntity, AppRelationResponseCollection } from 'generated/graphql';
import getIcon from 'services/utils/getIcon';
import Image from 'next/image';
import { Badge, Tag } from 'antd';
import { presetAntDColors } from 'services/utils/constants';

type ProjectCardProps = {
  project: AppEntity;
};

const ProjectCard = ({ project }: ProjectCardProps) => (
  <CoolBox
    type="div"
    className="flex flex-col sm:flex-col md:flex-row border-2 rounded-md border-gray-900 dark:border-gray-300 shadow-md shadow-cyan-500 w-[350px] md:w-full h-[450px] md:h-[280px] p-2 md:p-4 gap-2 md:gap-4"
  >
    {/* img*/}
    <div className="w-full md:w-1/2 overflow-hidden relative h-full rounded-md ring-1 ring-cyan-600">
      <Image
        alt={project?.attributes?.description}
        src={project?.attributes?.img?.data?.attributes?.formats?.small?.url}
        fill
        className="rounded-md"
      />
    </div>

    {/* details */}
    <div className="w-full md:w-1/2 px-1 py-2 h-full flex flex-col justify-between">
      {/* title */}
      <h2 className="text-xl md:text-xl flex items-center gap-1 font-semibold">
        {project?.attributes?.name}
        <Badge
          status={project?.attributes?.isLive ? 'success' : 'error'}
          className="animate-pulse"
        />
        {
          <Tag color={presetAntDColors[4]} bordered={false}>
            {project?.attributes?.type}
          </Tag>
        }
      </h2>

      {project?.attributes?.description && (
        <p className="indent-2">{project?.attributes?.description}</p>
      )}

      {/* cta links */}
      <div className="flex justify-center gap-4 text-sm">
        {project?.attributes?.CTA?.map((cta) => (
          <a
            key={cta.id}
            href={cta.href}
            target={cta.target}
            className="flex items-center justify-start gap-2 text:sm md:text-md text-orange-800 dark:text-gray-300 hover:text-blue-900"
          >
            {getIcon(cta.subtitle)}
            {cta.title}
          </a>
        ))}
      </div>
    </div>
  </CoolBox>
);
interface ProjectsProps {
  projects?: AppRelationResponseCollection;
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <CoolBox type="section" id="projects" className={styles.projectsWrapper}>
      <h2 className="mb-8 font-semibold text-xl sm:text-3xl flex items-center gap-1">
        <AiOutlineAppstore /> My Projects
      </h2>

      <div className="grid grid-flow-row  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  my-4 gap-6 md:gap-10">
        {projects.data.map((project: AppEntity) => (
          <ProjectCard
            key={project?.attributes?.slug}
            project={project as AppEntity}
          />
        ))}
      </div>
    </CoolBox>
  );
};

export { Projects };
