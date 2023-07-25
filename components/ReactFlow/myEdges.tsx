import CoolBox from 'components/cool-ui/CoolBox';
import { Edge } from 'reactflow';

export const initialEdges: Edge[] = [
  { id: 'fe-1', source: 'fe', target: 'fe-html', animated: true },
  { id: 'fe-2', source: 'fe', target: 'fe-css', animated: true },
  { id: 'fe-3', source: 'fe', target: 'fe-js', animated: true },
  { id: 'fe-4', source: 'fe-js', target: 'fe-react', animated: true },
  {
    id: 'fe-5',
    source: 'fe-react',
    target: 'fe-rn',
    animated: true,
    label: 'Mobile Dev ',
    labelStyle: { fill: '#1c1917' },
    labelBgStyle: { fill: '#22d3ee' },
    labelBgPadding: [10, 5]
  },
  { id: 'fe-4a', source: 'fe-rn', target: 'fe-rn-nb', animated: true },
  {
    id: 'fe-6',
    source: 'fe-react',
    target: 'fe-next',
    animated: true,
    label: 'framework',
    labelStyle: { fill: '#1c1917' },
    labelBgStyle: { fill: '#22d3ee' },
    labelBgPadding: [10, 5]
  },
  { id: 'fe-7', source: 'fe-js', target: 'fe-ts', animated: true },
  { id: 'fe-8', source: 'fe-react', target: 'fe-ts', animated: true },
  { id: 'fe-9', source: 'fe-next', target: 'fe-ts', animated: true },
  {
    id: 'fe-10',
    source: 'fe-css',
    target: 'fe-css-m',
    animated: false,
    type: 'step'
  },
  {
    id: 'fe-10f',
    source: 'fe-css',
    target: 'fe-css-pro',
    animated: false,
    type: 'step'
  },
  {
    id: 'fe-10d',
    source: 'fe-css-m',
    target: 'fe-css-m-s',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'fe-10a',
    source: 'fe-css-m-s',
    target: 'fe-css-mod',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'fe-10b',
    source: 'fe-css-mod',
    target: 'fe-css-tail',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'fe-10c',
    source: 'fe-css-tail',
    target: 'fe-css-bs',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'fe-10s',
    source: 'fe-css-pro',
    target: 'fe-css-pro-sass',
    animated: false,
    type: 'straight'
  },
  {
    id: 'fe-10l',
    source: 'fe-css-pro',
    target: 'fe-css-pro-less',
    animated: false,
    type: 'straight'
  },
  {
    id: 'fe-11',
    source: 'fe-react',
    target: 'fe-react-ui',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'fe-11a',
    source: 'fe-react-ui',
    target: 'fe-react-ui-ant',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'fe-11b',
    source: 'fe-react-ui',
    target: 'fe-react-ui-mui',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'fe-11c',
    source: 'fe-react-ui',
    target: 'fe-react-ui-rb',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'be-1',
    source: 'be',
    target: 'be-node',
    animated: true
  },
  {
    id: 'be-2',
    source: 'be',
    target: 'be-exp',
    animated: true
  },
  {
    id: 'be-3',
    source: 'be',
    target: 'be-db',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'be-3a',
    source: 'be-db',
    target: 'be-db-sql',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'be-3b',
    source: 'be-db',
    target: 'be-db-no-sql',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'be-4a',
    source: 'be-db-sql',
    target: 'db-sql-my',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'be-4b',
    source: 'be-db-sql',
    target: 'db-sql-post',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'be-4c',
    source: 'be-db-no-sql',
    target: 'db-mongo',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'be-4d',
    source: 'be-db-no-sql',
    target: 'db-firebase',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'tools-1',
    source: 'tools',
    target: 'tool-git',
    animated: true
  },
  {
    id: 'tools-2',
    source: 'tool-git',
    target: 'git',
    animated: true
  },
  {
    id: 'git-1',
    source: 'git',
    target: 'github',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'git-2',
    source: 'git',
    target: 'gitlab',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'git-3',
    source: 'git',
    target: 'gitBucket',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'git-4',
    source: 'github',
    target: 'main',
    animated: false,
    type: 'smoothstep'
  },
  {
    id: 'tools-2',
    source: 'tools',
    target: 'tool-package',
    animated: true
  },
  {
    id: 'npm',
    source: 'tool-package',
    target: 'npm',
    animated: true
  },
  {
    id: 'yarn',
    source: 'tool-package',
    target: 'yarn',
    animated: true
  }
];
