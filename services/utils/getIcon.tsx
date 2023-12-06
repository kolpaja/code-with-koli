import {
  FaShoppingCart,
  FaTwitch,
  FaFirefoxBrowser,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPinterest
} from 'react-icons/fa';
import { TbHomeCheck } from 'react-icons/tb';
import { GiCat } from 'react-icons/gi';
import { FiGithub } from 'react-icons/fi';
import { BiCodeAlt, BiLogoGmail } from 'react-icons/bi';
import { TbSquareRoundedLetterE } from 'react-icons/tb';
import { IoMdCodeDownload } from 'react-icons/io';
import { BsCodeSquare } from 'react-icons/bs';
import { GiCook } from 'react-icons/gi';
import { RiSailboatLine } from 'react-icons/ri';
import { iconStyleTimeline } from './customStyles';

const iconsMap: Record<string, JSX.Element> = {
  mdc: <RiSailboatLine className={iconStyleTimeline} />,
  taniMuzhaqi: <GiCook className={iconStyleTimeline} />,
  codevider: <IoMdCodeDownload className={iconStyleTimeline} />,
  edilloArkevo: <TbSquareRoundedLetterE className={iconStyleTimeline} />,
  cwk: <BiCodeAlt className={iconStyleTimeline} />,
  cat: <GiCat className="text-xl" />,
  website: <FaFirefoxBrowser className="text-2xl md:text-3xl" />,
  endry2008: <TbHomeCheck className="text-2xl" />,
  github: <FiGithub className="text-2xl text-black md:text-3xl" />,
  shopping: <FaShoppingCart className="text-2xl" />,
  linkedin: <FaLinkedin className="text-2xl md:text-3xl text-blue-600" />,
  twitch: (
    <FaTwitch
      className="text-2xl md:text-3xl"
      style={{
        fill: 'purple'
      }}
    />
  ),
  mail: (
    <BiLogoGmail
      className="text-2xl md:text-3xl text-red-600 fill-red-600"
      style={{
        fill: '#dc2626'
      }}
    />
  ),
  facebook: <FaFacebook className="text-2xl md:text-3xl text-blue-600" />,
  pinterest: <FaPinterest className="text-2xl md:text-3xl text-red-600" />,
  instagram: (
    <FaInstagram
      className="sm:text-2xl md:text-3xl lg:text-3xl text-red-600 fill-red-600"
      style={{
        fill: '#be185d'
      }}
    />
  )
};
export default function getIcon(iconName: string) {
  return iconsMap[iconName] ? iconsMap[iconName] : null;
}
