import { BiCodeAlt } from 'react-icons/bi';
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
  edilloArkevo: (
    <div className="flex justify-center items-center gap-1">
      <TbSquareRoundedLetterE className={iconStyleTimeline} />
    </div>
  ),
  cwk: <BiCodeAlt className={iconStyleTimeline} />
};
export default function getIcon(iconName: string) {
  return iconsMap[iconName] ? iconsMap[iconName] : null;
}
