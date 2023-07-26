import React from 'react';
import {
  Panel,
  useReactFlow,
  getRectOfNodes,
  getTransformForBounds
} from 'reactflow';
import { toPng } from 'html-to-image';
import { useTheme } from 'next-themes';

function downloadImage(dataUrl) {
  const a = document.createElement('a');

  a.setAttribute('download', 'Sokol_Paja_Dev_Road_Map.png');
  a.setAttribute('href', dataUrl);
  a.click();
}

const imageWidth = 1260;
const imageHeight = 768;

function DownloadButton() {
  const { getNodes } = useReactFlow();
  const { resolvedTheme } = useTheme();

  const onClick = () => {
    // we calculate a transform for the nodes so that all nodes are visible
    // we then overwrite the transform of the `.react-flow__viewport` element
    // with the style option of the html-to-image library
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );

    toPng(document.querySelector('.react-flow__viewport') as HTMLElement, {
      backgroundColor: resolvedTheme === 'dark' ? '#111827' : '#f3f4f6',
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth as any,
        height: imageHeight as any,
        color: resolvedTheme === 'dark' ? '#f3f4f6' : '#111827',
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`
      }
    }).then(downloadImage);
  };

  return (
    <Panel position="top-right">
      <button
        className="ring-2 ring-cyan-400 px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-600 dark:hover:bg-cyan-600 hover:bg-cyan-500 hover:text-white active:translate-y-1"
        onClick={onClick}
      >
        Download Image
      </button>
    </Panel>
  );
}

export default DownloadButton;
