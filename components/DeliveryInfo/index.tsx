import { colors } from '../../utils';
import Circle from '../../assets/svg/circle.svg';
import Details from './details';
import Fields from './fields';
import { useAppSelector } from '../../state/hooks/Index';
import CustomText from '../CustomText';
import { CheckBoxCircle } from '../../assets';

const DeliveryInfo = () => {
  const { deliverySet } = useAppSelector((state) => state.checkout);
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);

  return (
    <div
      style={{ width: windowSize < 641 ? windowFit : 528 }}
      className="md:px-[29px] md:py-[32px] mb-[24px] bg-[#F5F5F7] md:bg-white md:rounded-[10px]"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-[20px] items-center">
          {windowSize > 641 && (deliverySet ? <CheckBoxCircle /> : <Circle />)}
          <CustomText
            text="Delivery Information"
            weight={700}
            className="text-[24px] text-[#04362D]"
          />
        </div>
        {deliverySet && (
          <div className="cursor-pointer">
            <CustomText
              text="Change"
              weight={700}
              color={colors.orange}
              className="text-[16px]"
            />
          </div>
        )}
      </div>
      <div className="bg-white rounded-[10px] -mx-[24px] md:mt-[0px] mt-[24px] md:border-0 border-y-2 border-[rgba(4, 54, 45, 0.2)]">
        <>{deliverySet ? <Details /> : <Fields />}</>
      </div>
    </div>
  );
};

export default DeliveryInfo;
