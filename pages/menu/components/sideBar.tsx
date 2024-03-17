import { useState } from 'react';
import CustomText from '../../../components/CustomText';
import { useAppSelector } from '../../../state/hooks';
import { colors, menu } from '../../../utils';

const SideBar = ({ refs }: any) => {
  const [active, setActive] = useState<string>('Combo');
  const { windowSize } = useAppSelector((state) => state.screensize);

  const handleClick = (name: string) => {
    setActive(name);
    refs[name].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div
      className={`flex md:flex-col h-full gap-[16px] flex-row overflow-x-scroll overflow-x-hidden flex-nowrap scrollbar-hide`}
    >
      <CustomText
        className={` inline md:mb-[0px] mb-[32px] text-base w-full ${
          windowSize < 641
            ? 'text-[#EA5B31] border-b-4 border-[#EA5B31]'
            : 'text-[#01100D]'
        } `}
        text={`Trending Meals`}
        weight={windowSize < 641 ? 400 : 700}
      />
      {menu.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleClick(item.name)}
            className="cursor-pointer flex-shrink-0"
          >
            <CustomText
              className={`md:pb-[32px] inline pb-[10px] md:mb-[0px] mb-[32px] text-base w-full ${
                active === item.name && windowSize < 641
                  ? 'text-[#EA5B31] border-b-4 border-[#EA5B31]'
                  : 'text-[#01100D]'
              } `}
              text={` ${item.name} `}
              weight={windowSize < 641 ? 400 : 700}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
