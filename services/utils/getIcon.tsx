import {
  FaShoppingCart,
  FaTwitch,
  FaFirefoxBrowser,
  FaLinkedin,
  FaFacebook,
  FaInstagram
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
  website: <FaFirefoxBrowser className="text-xl" />,
  endry2008: <TbHomeCheck className="text-2xl" />,
  github: <FiGithub className="text-xl" />,
  shopping: <FaShoppingCart className="text-2xl" />,
  linkedin: <FaLinkedin className="text-2xl text-blue-600" />,
  twitch: <FaTwitch className="text-2xl" />,
  mail: <BiLogoGmail className="text-2xl" />,
  facebook: <FaFacebook className="text-2xl" />,
  instagram: <FaInstagram className="text-2xl" />
};
export default function getIcon(iconName: string) {
  return iconsMap[iconName] ? iconsMap[iconName] : null;
}
