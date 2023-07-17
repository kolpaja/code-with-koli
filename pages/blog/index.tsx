import Container from 'components/Container';
import CoolBox from 'components/cool-ui/CoolBox';
import Image from 'next/image';
import React from 'react';
import emptyBlogs from 'assets/illustrations/content-bro.svg';

type Props = {};

const Blog = (props: Props) => {
  const meta = {
    title: 'My Blog'
  };
  const blogs = [];
  return (
    <Container meta={meta}>
      {/* header */}
      <CoolBox type="section" className="mb-8">
        <h1 className="text-center">Welcome to my blog wall</h1>
      </CoolBox>

      {/* blog carrousel  */}
      <CoolBox type="section" className="relative flex flex-col items-center">
        <Image src={emptyBlogs} alt="cwk empty blogs page" />

        <p>blogs are coming soon...</p>
      </CoolBox>
    </Container>
  );
};

export default Blog;
