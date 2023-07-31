'use client';
import { FC, useEffect, useState } from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import kolpajaProfileImg from 'assets/imgs/art-kolpaja.jpg';
import webdev from 'assets/imgs/webdev.jpg';
import { FaReact } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsArrowDownCircle } from 'react-icons/bs';
import { BiLogoNodejs } from 'react-icons/bi';
import CoolText from 'components/cool-ui/CoolText';
import CoolBox from 'components/cool-ui/CoolBox';
import coder from 'assets/illustrations/version-control-amico.svg';
import Link from 'next/link';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 255) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, [isScrolled]);

  return (
    <CoolBox
      type="div"
      className={
        'h-screen relative flex flex-col-reverse w-full gap-36 md:gap-8 md:flex-row justify-end md:justify-center items-start pt-0 md:pt-8'
      }
    >
      {/* coder illustration */}
      <Image
        src={coder}
        alt="version control coder @kolpaja"
        width={400}
        height={300}
        className="hidden md:flex absolute left-0 top-60"
      />
      {/* left */}
      <CoolBox
        type="div"
        className="flex flex-col gap-2 text-center  p-4 pt-12 md:pt-16 w-full md:w-fit md:p-16"
      >
        <CoolText type="h1" className="text-xl w-full md:text-2xl font-bold">
          Salam 👋, I am{' '}
          <CoolText
            type="span"
            className="text-cyan-500 dark:text-cyan-500 font-extrabold"
          >
            Sokol Paja
          </CoolText>
        </CoolText>
        <CoolText type="h2" className="text:lg font-semibold md:text-xl">
          a javascript enthusiastic
        </CoolText>
        <CoolText
          type="h2"
          className=" gradientText select-none text:lg md:text-xl underline decoration-teal-500 tracking-wide font-medium"
        >
          building amazing apps
        </CoolText>
      </CoolBox>

      {/* right */}
      <CoolBox
        type="div"
        className="relative min-w-[375px]  p-8 pb-20  md:p-16"
      >
        {/* img dev */}
        <CoolBox type="div" className="relative h-[200px]">
          <Image
            className="absolute -top-6 md:top-298 left-0 shadow-lg shadow-cyan-300 rounded-3xl z-10 "
            src={webdev}
            width={300}
            height={200}
            alt="@kolpaja sokol paja web developer"
          />
          {/* img profile */}
          <Image
            className="absolute top-32 md:top-10 left-0 md:left-28 z-20  rounded-full ring-2 ring-cyan-600 shadow-lg shadow-cyan-600"
            src={kolpajaProfileImg}
            width={300}
            height={200}
            alt="@kolpaja sokol paja profile photo"
          />
        </CoolBox>
        <CoolBox type="div" className="relative hidden md:flex">
          <FaReact className="absolute top-6 left-6 text-3xl animate-pulse text-blue-700 " />
          <RiJavascriptFill className="absolute top-0 left-0 text-3xl animate-pulse text-yellow-300" />
          <SiTypescript className="absolute top-0 left-12 text-3xl animate-pulse text-blue-900 rounded-lg" />
          <TbBrandNextjs className="absolute top-12 left-12 text-3xl animate-pulse text-gray-900 dark:text-gray-100" />
          <BiLogoNodejs className="absolute top-12 left-0 text-3xl animate-pulse text-green-900 dark:text-green-700" />
        </CoolBox>
      </CoolBox>

      {/* bounce arrow down */}
      {/* <Link
        href="#timeline"
        className="absolute left-1/2 bottom-1/4 md:top-3/4 "
      >
        {!isScrolled && (
          <BsArrowDownCircle className="text-gray-900 dark:text-gray-100 text-3xl animate-bounce hover:animate-spin" />
        )}
      </Link> */}
    </CoolBox>
  );
};

export { Hero };
