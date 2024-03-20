import { useAppSelector } from '../../../state/hooks/Index';
import { colors } from '../../../utils';
import CustomText from '../../CustomText';
import BinanceIcon from '../assets/svg/binance.svg';

const Binance = () => {
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  return (
    <div className="flex flex-col items-center px-4">
      {/* <CustomText
        text="Add Account"
        weight={700}
        color={colors.greenDeep}
        className="my-[35px] text-[20px] text-[#4F4F4F]"
      /> */}
      <CustomText
        text="You will be re-directed to Binance to verify your account."
        weight={400}
        className="text-[16px] text-[#4F4F4F] mb-[49px]"
      />
      <button
        style={{
          backgroundColor: colors.orange,
          borderRadius: 20,
          width: windowSize < 641 ? windowFit - 32 : 464,
        }}
        className={`py-[17px] text-white flex justify-center mb-[38px]`}
        onClick={() => null}
      >
        {/* <BinanceIcon /> */}Continue
      </button>
    </div>
  );
};

export default Binance;
