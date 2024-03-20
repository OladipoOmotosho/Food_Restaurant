import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../state/hooks/Index';
import { setOrderComplete } from '../../../state/slices/checkout';
import { formatMoney } from '../../../utils';
import CustomButton from '../../CustomButton';
import CustomText from '../../CustomText';
import CustomTextInput from '../../CustomTextInput';

const Wallet = () => {
  const [balance, setBalance] = useState<number>();
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  const dispatch = useAppDispatch();
  return (
    <div className="mt-[24px]">
      <CustomText
        weight={400}
        className="text-[12px] text-[#828282] mb-[16px]"
        text="We’ll deduct the ₦17,000 from your wallet and you can complete the payment with another payment method, click proceed to continue "
      />
      <CustomTextInput
        placeholder={`${formatMoney('17000')}`}
        value={balance!}
        setValue={setBalance}
        label="Wallet Balance"
        className="mb-[40px]"
        width={windowSize < 641 ? windowFit - 32 : 464}
      />
      <CustomButton
        text="Proceed"
        disabled={false}
        onClick={() => dispatch(setOrderComplete())}
        width={windowSize < 641 ? windowFit - 32 : 464}
      />
    </div>
  );
};

export default Wallet;
