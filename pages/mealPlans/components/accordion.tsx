import { useState } from 'react';
import { DownArrow } from '../../../assets';
import { CustomText } from '../../../components';

interface Accordion {
  data: {
    header: string;
    sub: string;
  }[];
}

const Accordion = ({ data }: Accordion) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className="py-[16px] px-[16px] border-y mb-[8px] border-[#F5F5F7] w-[649px]"
          >
            <div
              onClick={() => handleClick(index)}
              className="flex justify-between items-center"
            >
              <CustomText
                color={'#111B2B'}
                text={item.header}
                weight={400}
                className="text-[16px]"
              />
              {index === activeIndex ? <div>close</div> : <DownArrow />}
            </div>
            {index === activeIndex && <CustomText text={item.sub} />}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
