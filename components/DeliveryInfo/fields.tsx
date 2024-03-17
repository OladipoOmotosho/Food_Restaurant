import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { setDelivery } from '../../state/slices/checkout';
import CustomButton from '../CustomButton';
import CustomTextInput from '../CustomTextInput';

interface IFields {
  setDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const Fields = () => {
  const [firstName, setFirstNane] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [info, setInfo] = useState('');
  const dispatch = useAppDispatch();
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);

  return (
    <div className="flex justify-center">
      <div>
        <div className="pt-[4px] md:pt-[0px]">
          <CustomTextInput
            placeholder="firstname"
            value={firstName}
            setValue={setFirstNane}
            label="First Name"
            className="md:my-[32px] my-[12px]"
          />{' '}
          <CustomTextInput
            placeholder="Last Name"
            value={lastName}
            setValue={setLastName}
            label="Last Name"
            className="md:mb-[32px] mb-[12px]"
          />
          <CustomTextInput
            placeholder="14, Kounty street."
            value={address}
            setValue={setAddress}
            label="Delivery address"
            className="md:mb-[32px] mb-[12px]"
          />
          <CustomTextInput
            placeholder="Beside that bank"
            value={info}
            setValue={setInfo}
            label="Additional Information"
            className="mb-[40px]"
          />
        </div>
        <div className="mb-[8px]">
          <CustomButton
            text="Save & Continue"
            disabled={firstName === '' || lastName === '' || address === ''}
            width={windowSize < 641 ? windowFit : 464}
            textWeight={600}
            onClick={() => {
              dispatch(setDelivery({ firstName, lastName, address, info }));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Fields;
