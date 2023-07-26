import { FaYarn } from 'react-icons/fa';
import { DiNpm } from 'react-icons/di';
import { TbPackages } from 'react-icons/tb';
import { TbBrandBitbucket } from 'react-icons/tb';
import { FaGitlab } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { BsGit } from 'react-icons/bs';
import { BiGitMerge } from 'react-icons/bi';
import { BsDatabaseCheck } from 'react-icons/bs';
import { SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { TbBrandBootstrap } from 'react-icons/tb';
import { SiMui } from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { CgUiKit } from 'react-icons/cg';
import { SiLess } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import { FcProcess } from 'react-icons/fc';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiTailwindcss } from 'react-icons/si';
import { SiCssmodules } from 'react-icons/si';
import { SiStyledcomponents } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';
import { TbBrandNextjs } from 'react-icons/tb';
import { GiSettingsKnobs } from 'react-icons/gi';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { BsFiletypeCss } from 'react-icons/bs';
import { MdMobileFriendly } from 'react-icons/md';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsDatabaseFillGear } from 'react-icons/bs';
import { CgCodeSlash } from 'react-icons/cg';
import { Node, Position } from 'reactflow';
import { iconStyleDark } from 'services/utils/customStyles';

export const initialNodes: Node[] = [
  {
    id: 'fe',
    type: 'custom',
    position: { x: 0, y: 50 },
    data: {
      emoji: <CgCodeSlash className={iconStyleDark} />,
      name: 'Front-End Techs'
    },
    targetPosition: Position.Right,
    sourcePosition: Position.Right
  },
  {
    id: 'fe-html',
    type: 'custom',
    position: { x: 225, y: 75 },
    data: {
      emoji: <AiFillHtml5 className={iconStyleDark} />,
      name: 'HTML5'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'fe-css',
    type: 'custom',
    position: { x: 225, y: 125 },
    data: {
      emoji: <BsFiletypeCss className={iconStyleDark} />,
      name: 'CSS3'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'fe-css-m',
    type: 'custom',
    position: { x: 850, y: 50 },
    data: {
      emoji: <DiCss3 className={iconStyleDark} />,
      name: 'Modern Css'
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom
  },
  {
    id: 'fe-css-pro',
    type: 'custom',
    position: { x: 1050, y: 50 },
    data: {
      emoji: <FcProcess className={iconStyleDark} />,
      name: 'CSS Processors'
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom
  },
  {
    id: 'fe-css-m-s',
    type: 'custom',
    position: { x: 900, y: 125 },
    data: {
      emoji: <SiStyledcomponents className={iconStyleDark} />,
      name: 'Styled Components'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom
  },
  {
    id: 'fe-css-pro-sass',
    type: 'custom',
    position: { x: 1100, y: 125 },
    data: {
      emoji: <DiSass className={iconStyleDark} />,
      name: 'Sass'
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom
  },
  {
    id: 'fe-css-pro-less',
    type: 'custom',
    position: { x: 1200, y: 125 },
    data: {
      emoji: <SiLess className={iconStyleDark} />,
      name: 'Less'
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom
  },
  {
    id: 'fe-css-mod',
    type: 'custom',
    position: { x: 1020, y: 190 },
    data: {
      emoji: <SiCssmodules className={iconStyleDark} />,
      name: 'CSS Modules'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom
  },
  {
    id: 'fe-css-tail',
    type: 'custom',
    position: { x: 1120, y: 255 },
    data: {
      emoji: <SiTailwindcss className={iconStyleDark} />,
      name: 'Tailwindcss'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom
  },
  {
    id: 'fe-css-bs',
    type: 'custom',
    position: { x: 1220, y: 315 },
    data: {
      emoji: <BsFillBootstrapFill className={iconStyleDark} />,
      name: 'Bootstrap'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom
  },
  {
    id: 'fe-js',
    type: 'custom',
    position: { x: 225, y: 175 },
    data: {
      emoji: <AiFillHtml5 className={iconStyleDark} />,
      name: 'Javascript'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'fe-react',
    type: 'custom',
    position: { x: 400, y: 225 },
    data: {
      emoji: <FaReact className={iconStyleDark} />,
      name: 'React js'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'fe-react-ui',
    type: 'custom',
    position: { x: 525, y: 275 },
    data: {
      emoji: <CgUiKit className={iconStyleDark} />,
      name: 'UI Libraries'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'fe-react-ui-ant',
    type: 'custom',
    position: { x: 620, y: 330 },
    data: {
      emoji: <AiOutlineAntDesign className={iconStyleDark} />,
      name: 'Ant Design'
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Top
  },
  {
    id: 'fe-react-ui-mui',
    type: 'custom',
    position: { x: 770, y: 330 },
    data: {
      emoji: <SiMui className={iconStyleDark} />,
      name: 'Material UI'
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Top
  },
  {
    id: 'fe-react-ui-rb',
    type: 'custom',
    position: { x: 920, y: 330 },
    data: {
      emoji: <TbBrandBootstrap className={iconStyleDark} />,
      name: 'React Bootstrap'
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Top
  },
  {
    id: 'fe-ts',
    type: 'custom',
    position: { x: 400, y: 100 },
    data: {
      emoji: <SiTypescript className="rounded-full text-blue-600" />,
      name: 'Typescript'
    },
    targetPosition: Position.Bottom,
    sourcePosition: Position.Right
  },
  {
    id: 'fe-rn',
    type: 'custom',
    position: { x: 650, y: 175 },
    data: {
      emoji: <TbBrandReactNative className={iconStyleDark} />,
      name: 'React Native'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom
  },
  {
    id: 'fe-rn-nb',
    type: 'custom',
    position: { x: 750, y: 240 },
    data: {
      emoji: <TbBrandReactNative className={iconStyleDark} />,
      name: 'Native Base'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Left
  },
  {
    id: 'fe-next',
    type: 'custom',
    position: { x: 650, y: 75 },
    data: {
      emoji: <TbBrandNextjs className={iconStyleDark} />,
      name: 'Next js'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'be',
    type: 'custom',
    position: { x: 0, y: 400 },
    data: {
      emoji: <BsDatabaseFillGear className={iconStyleDark} />,
      name: 'Back-End Techs'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'be-node',
    type: 'custom',
    position: { x: 225, y: 425 },
    data: {
      emoji: <FaNodeJs className="text-green-600" />,
      name: 'Node js'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'be-exp',
    type: 'custom',
    position: { x: 225, y: 500 },
    data: {
      emoji: <SiExpress className={iconStyleDark} />,
      name: 'Express js'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'be-db',
    type: 'custom',
    position: { x: 375, y: 375 },
    data: {
      emoji: <BsDatabaseCheck className={iconStyleDark} />,
      name: 'Databases'
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Right
  },
  {
    id: 'be-db-sql',
    type: 'custom',
    position: { x: 500, y: 425 },
    data: {
      emoji: <BsDatabaseCheck className={iconStyleDark} />,
      name: 'Sql'
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom
  },
  {
    id: 'db-sql-my',
    type: 'custom',
    position: { x: 400, y: 500 },
    data: {
      emoji: <BsDatabaseCheck className={iconStyleDark} />,
      name: 'My Sql'
    },
    targetPosition: Position.Right,
    sourcePosition: Position.Right
  },
  {
    id: 'db-sql-post',
    type: 'custom',
    position: { x: 575, y: 500 },
    data: {
      emoji: <BsDatabaseCheck className={iconStyleDark} />,
      name: 'Postgres'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Left
  },
  {
    id: 'be-db-no-sql',
    type: 'custom',
    position: { x: 850, y: 425 },
    data: {
      emoji: <BsDatabaseCheck className={iconStyleDark} />,
      name: 'No Sql'
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom
  },
  {
    id: 'db-mongo',
    type: 'custom',
    position: { x: 725, y: 500 },
    data: {
      emoji: <BsDatabaseCheck className={iconStyleDark} />,
      name: 'Mongo DB'
    },
    targetPosition: Position.Right,
    sourcePosition: Position.Right
  },
  {
    id: 'db-firebase',
    type: 'custom',
    position: { x: 925, y: 500 },
    data: {
      emoji: <BsDatabaseCheck className={iconStyleDark} />,
      name: 'Firebase'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Left
  },
  {
    id: 'tools',
    type: 'custom',
    position: { x: 0, y: 590 },
    data: {
      emoji: <GiSettingsKnobs className={iconStyleDark} />,
      name: 'Dev Tools'
    },
    targetPosition: Position.Right,
    sourcePosition: Position.Right
  },
  {
    id: 'tool-git',
    type: 'custom',
    position: { x: 225, y: 625 },
    data: {
      emoji: <BiGitMerge className={iconStyleDark} />,
      name: 'Version Control'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'tool-package',
    type: 'custom',
    position: { x: 225, y: 700 },
    data: {
      emoji: <TbPackages className={iconStyleDark} />,
      name: 'Package Manager'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom
  },
  {
    id: 'git',
    type: 'custom',
    position: { x: 475, y: 650 },
    data: {
      emoji: <BsGit className={iconStyleDark} />,
      name: 'Git'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'gitBucket',
    type: 'custom',
    position: { x: 775, y: 575 },
    data: {
      emoji: <TbBrandBitbucket className={iconStyleDark} />,
      name: 'GitBucket'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'github',
    type: 'custom',
    position: { x: 675, y: 650 },
    data: {
      emoji: <AiFillGithub className={iconStyleDark} />,
      name: 'GitHub'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'main',
    type: 'custom',
    position: { x: 1200, y: 650 },
    data: {
      emoji: <BsArrowRightCircleFill className={iconStyleDark} />,
      name: 'Main Stream'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Left
  },
  {
    id: 'gitlab',
    type: 'custom',
    position: { x: 700, y: 725 },
    data: {
      emoji: <FaGitlab className={iconStyleDark} />,
      name: 'GitLab'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right
  },
  {
    id: 'npm',
    type: 'custom',
    position: { x: 400, y: 775 },
    data: {
      emoji: <DiNpm className={iconStyleDark} />,
      name: 'npm'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Left
  },
  {
    id: 'yarn',
    type: 'custom',
    position: { x: 400, y: 825 },
    data: {
      emoji: <FaYarn className={iconStyleDark} />,
      name: 'yarn'
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Left
  }
];
