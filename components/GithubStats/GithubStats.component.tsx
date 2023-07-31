import CoolBox from 'components/cool-ui/CoolBox';
import CoolText from 'components/cool-ui/CoolText';
import { FC } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { GiBackwardTime } from 'react-icons/gi';
import { MdExplore } from 'react-icons/md';
import { TiChartPie } from 'react-icons/ti';
import styles from './GithubStats.module.scss';

interface GithubStatsProps {}

// keep it simple
const githubReadmeStats =
  'https://github-readme-stats.vercel.app/api?username=kolpaja';

const mostUsedLangsUrl =
  'https://github-readme-stats.vercel.app/api/top-langs/?username=kolpaja&layout=pie&theme=transparent';

// Waka coding time
const wakaurl =
  'https://github-readme-stats.vercel.app/api/wakatime?username=kolpaja&custom_title=Coding%20Time%20Stats%20since%207-July-2023&theme=transparent';

const GithubStats: FC<GithubStatsProps> = () => {
  const options = `&show_icons=true&theme=transparent&hide=issues&show=[]&rank_icon=github`;

  return (
    <CoolBox type="section" className={styles.githubStatsWrapper}>
      <CoolText
        type="h1"
        className="text-lg text-center sm:text-2xl font-semibold flex justify-center items-center gap-1 text-blue-800"
      >
        <MdExplore className="text-3xl font-bold animate-spin text-blue-700 text-center" />{' '}
        Explore my everyday GitHub public stats
      </CoolText>

      <div className={styles.startLine} />
      <div className={styles.line1} />
      <div className="relative">
        <div className={styles.githubBlur} />
        <AiFillGithub className={styles.githubIcon} />
      </div>
      <div className={styles.line2} />

      <div className={styles.githubStats}>
        <img src={githubReadmeStats + options} alt="@kolpaja github stats" />
      </div>

      {/* lines */}
      <div className={styles.line2} />
      <TiChartPie className={styles.pieIcon} />
      <div className={styles.line2} />

      {/* languages box */}
      <div className={styles.langsStats}>
        <img
          src={mostUsedLangsUrl}
          alt="sokol paja's most used programming languages"
        />
      </div>

      {/* lines */}
      <div className={styles.line2} />
      <GiBackwardTime className={styles.timeIcon} />
      <div className={styles.line2} />

      {/* WAKA coding time box */}
      <div className={styles.langsStats}>
        <img src={wakaurl} alt="sokol paja waka coding time" />
      </div>
    </CoolBox>
  );
};

export { GithubStats };
