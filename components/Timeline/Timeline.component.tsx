import { GiJourney } from 'react-icons/gi';
import { FC, useCallback, useEffect } from 'react';
import styles from './Timeline.module.scss';
import CoolBox from 'components/cool-ui/CoolBox';
import websiteBuilder from 'assets/illustrations/website-creator-bro.svg';
import Image from 'next/image';
import { ComponentCwkJobExperience } from 'generated/graphql';
import { Timeline as AntTimeline, Grid, Tag } from 'antd';
import CoolText from 'components/cool-ui/CoolText';
import getIcon from 'services/utils/getIcon';
import { presetAntDColors } from 'services/utils/constants';

const { useBreakpoint } = Grid;
interface TimelineProps {
  experiences: ComponentCwkJobExperience[];
}

const timeLineItem = (item: ComponentCwkJobExperience) => (
  <CoolBox
    type="div"
    className="max-w-2xl flex flex-col items-start gap-2 py-2 px-2 sm:px-8  m-2 mb-8 border border-cyan-600 rounded-lg"
  >
    {/* header */}
    <CoolText type="h1" className="text:lg sm:text-xl font-bold">
      @{item.company} -{' '}
      {item.isCurrent ? (
        <Tag color="success">current</Tag>
      ) : (
        <Tag color="warning">worked</Tag>
      )}
    </CoolText>

    {/* description */}
    <CoolText type="p">{item.description}</CoolText>

    {/* tags */}
    <CoolBox type="div" className="py-4">
      <div className="flex flex-wrap gap-2">
        {item.techs_used.split(',').map((tech, index) => (
          <Tag key={tech} bordered={false} color={presetAntDColors[index]}>
            {tech}
          </Tag>
        ))}
      </div>
    </CoolBox>
  </CoolBox>
);

const Timeline: FC<TimelineProps> = ({ experiences }) => {
  const screens = useBreakpoint();

  const getTimelineItems = useCallback(() => {
    const mappedItems = experiences.map((experience) => ({
      color: experience.color_hashtag,
      children: timeLineItem(experience),
      dot: getIcon(experience.icon)
    }));

    return mappedItems;
  }, [experiences]);

  const getTimeLineMode = useCallback(() => {
    if (screens.xs) {
      return 'left';
    } else if (!screens.xs && screens.sm && !screens.md) {
      return 'left';
    } else {
      return 'alternate';
    }
  }, [screens]);

  useEffect(() => {
    window.addEventListener('resize', () => {});

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <CoolBox type="section" className={styles.timelineWrapper}>
      <h2 className="text-center text-2xl flex gap-2 mb-8">
        <GiJourney
          id="timeline"
          className="text-3xl text-green-700 font-bold"
        />
        Experiences Journey
      </h2>
      <AntTimeline mode={getTimeLineMode()} items={getTimelineItems()} />
      <Image src={websiteBuilder} alt="@kolpaja building website" />
    </CoolBox>
  );
};

export { Timeline };
