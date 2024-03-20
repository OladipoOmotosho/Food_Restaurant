import { useState } from 'react';
import { CloseIcon, PrevArrow } from '../../../../../assets';
import { CustomTextInput } from '../../../../../components';
import Payment from '../../../../../components/payment';
import { FONTFAMILY, colors } from '../../../../../utils';
import styles from './styles/components.module.css';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../state/hooks/Index';
import { setTopUpLoading } from '../../../../../state/slices/walletTopUp';
import WalletPayment from '../../../../../components/walletTopupp';

const TopUp = ({ amount }: TopUpDetails) => {
  const [amt, setAmt] = useState('');
  const walletTopUp = [
    {
      amount: '₦1,000',
    },
    {
      amount: '₦2,000',
    },
    {
      amount: '₦3,000',
    },
    {
      amount: '₦4,000',
    },
    {
      amount: '₦5,000',
    },
    {
      amount: '₦10,000',
    },
  ];

  const dispatch = useAppDispatch();
  const { topUpSelected } = useAppSelector((state) => state.walletTopUp);
  return (
    <main className="sm:flex sm:flex-row sm:justify-center gap-11 pr-[1.5rem]">
      <span
        className="hidden absolute left-[110px] cursor-pointer"
        onClick={() => dispatch(setTopUpLoading())}
      >
        <CloseIcon />
      </span>
      <span
        className={`${styles.navBarAddAddress} sm:hidden flex flex-row gap-6 justify-start items-center mb-10 cursor-pointer -mt-5`}
      >
        <PrevArrow onClick={() => dispatch(setTopUpLoading())} />
        <h5
          style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.normal }}
          className="font-semibold sm:text-[1.25rem] leading-[1.625rem]"
        >
          Wallet Topup
        </h5>
      </span>
      <section className="flex flex-col items-center gap-8">
        <h1
          style={{
            fontFamily: FONTFAMILY.bold,
            color: colors.green3,
          }}
          className="hidden sm:text-[36px] sm:leading-[2.9375rem] font-bold"
        >
          Wallet Topup
        </h1>
        <h5
          style={{
            fontFamily: FONTFAMILY.normal,
            color: colors.greenDeep,
          }}
          className="sm:text-[24px] sm:leading-[2.25rem] font-normal"
        >
          Choose or enter the amount to top your wallet with
        </h5>
        <span className="flex sm:flex-row flex-row flex-wrap justify-center gap-4">
          {walletTopUp.map((walletTopUps, index) => (
            <button
              style={{
                fontFamily: FONTFAMILY.normal,
                color: colors.greenDeep,
              }}
              className={styles.btnClass}
            >
              {walletTopUps.amount}
            </button>
          ))}
        </span>
        <CustomTextInput
          placeholder={''}
          value={amt}
          setValue={setAmt}
          label={'Enter Amount'}
        />
        <h3
          style={{
            fontFamily: FONTFAMILY.normal,
            color: colors.greenDeep,
          }}
          className="sm:text-[28px] sm:leading-[2.625rem] font-semibold tracking-wide"
        >
          Add your payment method
        </h3>
        <h6
          style={{
            fontFamily: FONTFAMILY.normal,
            color: colors.gray1,
          }}
          className="sm:text-[16px] sm:leading-[1.5rem] font-normal tracking-wide"
        >
          Topup your wallet by choosing a payment method
        </h6>
        <WalletPayment />
      </section>
    </main>
  );
};

export default TopUp;
