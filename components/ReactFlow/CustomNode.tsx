import CoolBox from 'components/cool-ui/CoolBox';
import CoolText from 'components/cool-ui/CoolText';
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data, sourcePosition, targetPosition }) {
  return (
    <CoolBox
      type="div"
      className="shadow-md p-2 rounded-md bg-white border-2 border-cyan-200"
    >
      <div className="flex justify-center items-center">
        {data.emoji ? (
          <div className="rounded-full w-6  h-6 flex justify-center items-center bg-gray-200 dark:bg-gray-600">
            {data.emoji}
          </div>
        ) : null}
        <CoolText type="h5" className="ml-2 text-sm">
          {data.name}
        </CoolText>
      </div>

      <Handle
        type="target"
        position={targetPosition}
        className="w-16 border-none rounded-sm !bg-teal-500"
      />
      <Handle
        type="source"
        position={sourcePosition}
        className="w-16 border-none rounded-sm !bg-teal-500"
      />
    </CoolBox>
  );
}

export default memo(CustomNode);
