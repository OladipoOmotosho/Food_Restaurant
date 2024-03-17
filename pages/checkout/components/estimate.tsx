import { useState } from 'react';
import { CloseIcon } from '../../../assets';
import {
  CustomButton,
  CustomModal,
  CustomText,
  CustomTextInput,
} from '../../../components';
import { useAppSelector } from '../../../state/hooks';
import Active from '../assets/svg/active.svg';
import Inactive from '../assets/svg/Inactive.svg';

const Estimate = () => {
  const [deliveryType, setDeliveryType] = useState('Standard');
  const { windowSize, height } = useAppSelector((state) => state.screensize);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  return (
    <>
      <div
        style={{ width: windowSize < 641 ? windowSize - 48 : 528 }}
        className="md:px-[29px] py-[32px] bg-[#F5F5F7] md:bg-white md:mb-[24px] md:rounded-[10px]"
      >
        <CustomText
          text="Delivery Estimate"
          weight={700}
          className="text-[24px] text-[#04362D]"
        />
        <div
          className={`flex gap-[16px] cursor-pointer my-[25px] ${
            windowSize < 641 &&
            `border ${
              deliveryType === 'Standard'
                ? 'border-[#EA5B31]'
                : 'border-[#BDBDBD]'
            } py-[16px] pl-[48px] rounded-[10px]`
          }`}
          onClick={() => setDeliveryType('Standard')}
        >
          {windowSize > 641 &&
            (deliveryType === 'Standard' ? <Active /> : <Inactive />)}
          <div>
            <CustomText text="Standard" weight={400} className="text-[20px]" />
            <CustomText
              text="49 - 90 mins"
              weight={400}
              className="text-[16px] text-[#828282]"
            />
          </div>
        </div>
        <div
          className={`flex gap-[16px] cursor-pointer ${
            windowSize < 641 &&
            `border ${
              deliveryType === 'Schedule'
                ? 'border-[#EA5B31]'
                : 'border-[#BDBDBD]'
            } py-[16px] pl-[48px] rounded-[10px]`
          }`}
          onClick={() => setDeliveryType('Schedule')}
        >
          {windowSize > 641 &&
            (deliveryType === 'Schedule' ? <Active /> : <Inactive />)}
          <div>
            <CustomText
              text="Schedule delivery"
              weight={400}
              className="text-[20px]"
            />
            <CustomText
              text="Choose Time"
              weight={400}
              className="text-[16px] text-[#828282]"
            />
          </div>
        </div>
      </div>
      <CustomModal show={deliveryType === 'Schedule'}>
        <div
          style={{
            width: windowSize < 660 ? windowSize : 650,
            height: windowSize < 660 ? height : 482,
          }}
          className="md:px-[45px] px-[24px] pt-[40px] bg-white rounded-[15px]"
        >
          <div
            onClick={() => setDeliveryType('Standard')}
            className="cursor-pointer"
          >
            <CloseIcon />
          </div>
          <CustomText
            text="Choose Time & Date"
            weight={700}
            className="mt-[28px] mb-[32px] text-[28px]"
          />
          <div className="flex justify-center">
            <div className="">
              <CustomTextInput
                placeholder="Today"
                value={date}
                setValue={setDate}
                label="Select Date"
                className="mb-[24px]"
              />
              <CustomTextInput
                placeholder="12:30pm - 2:30pm"
                value={time}
                setValue={setTime}
                label="Select Time"
                className=""
              />
            </div>
          </div>
          <div className="flex justify-center mx-[53px] mt-[40px]">
            <CustomButton
              text="Schedule order"
              disabled={false}
              width={464}
              onClick={() => {}}
            />
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default Estimate;
