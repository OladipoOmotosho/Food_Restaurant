import { useState } from 'react';
import { CloseIcon } from '../../../assets';
import { colors } from '../../../utils';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { setOrderComplete } from '../../../state/slices/checkout';
import CustomText from '../../CustomText';
import CustomButton from '../../CustomButton';
import CustomModal from '../../CustomModal';

const Transfer = () => {
  const [showDetails, setShowDetails] = useState(false);
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  const type = ['To', 'Reference', 'Account Number', 'Bank', 'Amount'];
  const value = ['Kounty.ng', '34t78', '0000000000', 'UBA', '20000'];
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="my-[48px]">
        <div className="flex justify-center mb-[58px]">
          <CustomText
            text="Click continue to see the bank details and your narration ID"
            weight={400}
            className="text-[16px] text-[#828282]"
          />
        </div>
        <CustomButton
          text="Continue"
          textWeight={700}
          width={windowSize < 641 ? windowFit - 32 : 464}
          disabled={false}
          onClick={() => setShowDetails(true)}
        />
      </div>
      <CustomModal show={showDetails}>
        <div
          style={{ width: windowSize < 660 ? windowSize : 650 }}
          className="px-[24px] md:px-[40px] pt-[40px] h-[678px] bg-white rounded-[15px] overflow-y-scroll overflow-y-hidden"
        >
          <div onClick={() => setShowDetails(false)}>
            <CloseIcon />
          </div>
          <CustomText
            text="Bank Transfer"
            weight={700}
            className="mt-[28px] mb-[62px] text-[28px]"
          />
          <div className="flex justify-between items-center">
            <div>
              {type.map((item, index) => {
                return (
                  <CustomText
                    key={index}
                    text={item}
                    weight={400}
                    className="text-[#4F4F4F] text-[20px] mb-[24px]"
                  />
                );
              })}
            </div>
            <div>
              {value.map((item, index) => {
                return (
                  <CustomText
                    key={index}
                    text={item}
                    weight={400}
                    className="text-[#4F4F4F] text-[20px] mb-[24px]"
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-center mt-[20px]">
            <CustomText
              //   className="text-center"
              weight={600}
              text="Please let us know when you make payment by sending us an email at payment@kounty.ng or on whatsapp via +234 000 0000 000"
            />
          </div>
          <div className="flex justify-center">
            <button
              style={{
                backgroundColor: colors.orange,
              }}
              className={`py-[17px] text-white w-[166px] flex justify-center mt-[40px] mb-[38px]`}
              onClick={() => {
                setShowDetails(false);
                dispatch(setOrderComplete());
              }}
            >
              <CustomText text="Send" weight={400} />
            </button>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default Transfer;
