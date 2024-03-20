import { CustomText } from '../../../components';
import { useAppSelector } from '../../../state/hooks/Index';
import { formatMoney } from '../../../utils';
import AddIcon from '../assets/svg/AddIconWhite.svg';
import styles from '../../../styles/Menu.module.css';
import { useState } from 'react';

const Recommended = ({ item, type }: IRecommendProps) => {
  const { windowSize } = useAppSelector((state) => state.screensize);
  const [selected, setSelected] = useState('');

  return (
    <>
      {windowSize > 641 ? (
        <div className="flex gap-[28px] overflow-x-scroll pb-[41px]">
          {item?.map((each, index) => {
            return (
              <div
                key={index}
                className="w-[273px] h-[109px] bg-white flex justify-between border border-[#CDDCD9] items-center pr-[4px] pl-[16px] relative rounded-[10px]"
              >
                <div className="items-center flex w-[160px] pr-[16px]">
                  <div>
                    <CustomText
                      text={each.name}
                      weight={400}
                      className="text-[18px]"
                    />
                    <CustomText
                      text={formatMoney(each.amount)}
                      weight={400}
                      className="text-[14px]"
                    />
                  </div>
                </div>
                <div className="w-[131px] h-[101px] border">
                  <div className="absolute -bottom-4 -right-1">
                    <AddIcon />{' '}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {item?.map((each, index) => {
            return (
              <div key={index}>
                {type === 'drinks' ? (
                  <div
                    onClick={() => setSelected(each.name)}
                    className="pb-[14px] pt-[17px] border-b border-[#BDBDBD] flex justify-between items-center"
                  >
                    <div className="items-center flex gap-[18px]">
                      <div className="h-[20px] w-[20px] border-2 border-black rounded-full flex justify-center items-center">
                        {each.name === selected && (
                          <div className="h-[10px] w-[10px] bg-black rounded-full" />
                        )}
                      </div>
                      <div>
                        <CustomText
                          text={each.name}
                          weight={400}
                          className="text-[16px]"
                        />
                      </div>
                    </div>
                    <CustomText
                      text={formatMoney(each.amount)}
                      weight={400}
                      className="text-[12px]"
                    />
                  </div>
                ) : (
                  <div
                    key={index}
                    onClick={() => setSelected(each.name)}
                    className={`pb-[14px] pt-[17px] ${
                      item.length !== index + 1 && 'border-b border-[#BDBDBD]'
                    } flex justify-between items-center`}
                  >
                    <div>
                      <CustomText
                        text={each.name}
                        weight={400}
                        className="text-[16px] mb-[2px]"
                      />
                      <CustomText
                        text={formatMoney(each.amount)}
                        weight={400}
                        className="text-[12px]"
                      />
                    </div>
                    <div className="h-[20px] w-[20px] border-2 border-black rounded-full flex justify-center items-center">
                      {each.name === selected && (
                        <div className="h-[10px] w-[10px] bg-black rounded-full" />
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Recommended;
