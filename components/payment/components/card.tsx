import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../state/hooks/Index';
import { setOrderComplete } from '../../../state/slices/checkout';
import CustomButton from '../../CustomButton';
import CustomText from '../../CustomText';
import CustomTextInput from '../../CustomTextInput';

const Card = () => {
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  const [number, setNumber] = useState<number>();
  const [cvv, setCvv] = useState<number>();
  const [name, setName] = useState('');
  const [expire, setExpire] = useState('');
  const dispatch = useAppDispatch();

  return (
    <div>
      <CustomText
        text="Please enter your card details carefully below"
        weight={400}
        className="text-[16px] text-[#828282] mb-[32px]"
      />
      <div>
        <CustomTextInput
          placeholder="number"
          value={number!}
          setValue={setNumber}
          label="First Name"
          className="mb-[24px]"
          width={windowSize < 641 ? windowFit - 32 : 464}
        />
        <div className="md:flex md:justify-between md:mb-[24px]">
          <CustomTextInput
            placeholder="number"
            value={number!}
            setValue={setNumber}
            label="First Name"
            className="mb-[24px] md:mb-[0px]"
            width={windowSize < 641 ? windowFit - 32 : 464 / 2}
          />

          <CustomTextInput
            placeholder="number"
            value={number!}
            setValue={setNumber}
            label="First Name"
            className="mb-[24px] md:mb-[0px]"
            width={windowSize < 641 ? windowFit - 32 : 464 / 2}
          />
        </div>
        <CustomTextInput
          placeholder="number"
          value={number!}
          setValue={setNumber}
          label="First Name"
          className="mb-[32px]"
          width={windowSize < 641 ? windowFit - 32 : 464}
        />
      </div>
      <div className="mt-[16px]">
        <CustomButton
          text="Save & Pay ₦20,820.00"
          textWeight={700}
          disabled={false}
          onClick={() => dispatch(setOrderComplete())}
          width={windowSize < 641 ? windowFit - 32 : 464}
        />
        <CustomText
          text="Secured by PAYSTACK"
          weight={700}
          className="my-[24px] text-[16px] flex justify-center"
        />
      </div>
    </div>
  );
};

export default Card;
