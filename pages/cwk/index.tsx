import Container from 'components/Container';
import { IMetaData } from 'components/Metadata';
import CoolBox from 'components/cool-ui/CoolBox';
import CoolText from 'components/cool-ui/CoolText';
import React from 'react';
import fastLoading from 'assets/illustrations/fast-loading-bro.svg';
import Image from 'next/image';
import MyFlow from 'components/ReactFlow/MyFlow';
import { ReactFlowProvider } from 'reactflow';

type Props = {};

let isDev = true;

const CodeWithKoli = (props: Props) => {
  const meta: IMetaData = {
    title: 'My Journey Flow'
  };

  // ? TODO add https://reactflow.dev/ react flow schema and an option so people can create their own diagrams and export
  return (
    <Container meta={meta}>
      <ReactFlowProvider>
        <CoolBox type="section" className="max-w-7xl">
          {/* title */}
          <CoolText type="h1" className="text-center text-lg sm:text-2xl">
            My Programming Map
          </CoolText>

          {isDev ? (
            <MyFlow />
          ) : (
            <div>
              {/* brief intro */}
              <Image
                src={fastLoading}
                width={500}
                height={300}
                alt="comming soon img"
                className="mx-auto"
              />
              <CoolText
                type="h1"
                className="text-center text-lg sm:text-2xl my-8"
              >
                coming soon...
              </CoolText>
            </div>
          )}
        </CoolBox>
      </ReactFlowProvider>
    </Container>
  );
};

export default CodeWithKoli;
