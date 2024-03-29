import { BiReset } from 'react-icons/bi';
import CoolBox from 'components/cool-ui/CoolBox';
import { useCallback, useEffect } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useViewport,
  useReactFlow,
  NodeTypes
} from 'reactflow';

import 'reactflow/dist/style.css';
import 'tailwind.config';

import CustomNode from './CustomNode';
import DownloadBtn from './DownloadBtn';
import { initialEdges } from './myEdges';
import { initialNodes } from './MyNodes';
import { Button } from 'antd';
import { iconStyleDark } from 'services/utils/customStyles';

const nodeTypes = {
  custom: CustomNode
};

const defaultViewport = { x: 0, y: 0, zoom: 0.8 };

function MyFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // hooks
  const { x, y, zoom } = useViewport();
  const reactFlowInstance = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const setViewPort = useCallback(
    () => reactFlowInstance.setViewport({ x: 0, y: 0, zoom: 0.8 }, {}),
    [reactFlowInstance]
  );

  const resetNodes = useCallback(() => {
    setNodes(initialNodes);
    setViewPort();
  }, [setViewPort, setNodes]);

  // useEffect(() => {
  // }, [x, y, zoom]);

  return (
    <CoolBox
      type="section"
      className="min-[360]:w-[340px] sm:w-[600px] md:w-[740px] lg:w-[990px] xl:w-[1200px] h-[75vh] mx-auto mt-4 sm:mt-8 ring-2 ring-cyan-400 p-4 rounded-xl"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        minZoom={0.66}
        nodeTypes={nodeTypes as NodeTypes}
        defaultViewport={defaultViewport}
        nodesConnectable={false}
      >
        <MiniMap zoomable pannable className="bg-gray-100 dark:bg-gray-700" />
        <Controls onFitView={setViewPort}>
          <button
            onClick={resetNodes}
            title="Reset Map"
            className="bg-white text-gray-900 flex justify-center items-center w-[26px] h-[20px]"
          >
            <BiReset className="text-lg" />
          </button>
        </Controls>
        <Background />
        <DownloadBtn />
      </ReactFlow>
    </CoolBox>
  );
}

export default MyFlow;
