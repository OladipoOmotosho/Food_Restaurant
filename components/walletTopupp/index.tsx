import { useState } from 'react';
import { colors } from '../../utils';
import Circle from '../../assets/svg/circle.svg';
import { useAppSelector } from '../../state/hooks/Index';
import Active from './assets/svg/activePay.svg';
import Inactive from './assets/svg/inactivePay.svg';

import CustomText from '../CustomText';
import styles from './styles/main.module.css';
import IconForBinance from './assets/svg/iconForBinance.svg';
import { DropDownIcon, Paystack } from '../../assets';
import Card from './components/card';
import Transfer from './components/transfer';
import Binance from './components/binance';

const WalletPayment = () => {
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);

  const [payType, setPayType] = useState<number | JSX.Element>();

  const payMethods = [<Paystack />, <IconForBinance />, 'Bank Transfer'];

  return (
    <div
      style={{ width: windowSize < 641 ? windowFit : 528 }}
      className={`${styles.container} md:px-[29px] mb-[28px] md:py-[24px] md:rounded-[10px]`}
    >
      {windowSize > 641 ? (
        <>
          <div className="flex flex-col gap-[24px] mt-[24px] mb-[16px] ">
            {payMethods.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.paymentBox} flex flex-row-reverse justify-between gap-[8px] cursor-pointer`}
                  onClick={() => setPayType(index)}
                >
                  {index === payType ? (
                    <DropDownIcon className={'w-6 -rotate-180'} />
                  ) : (
                    <DropDownIcon className={'w-6'} />
                  )}
                  <CustomText
                    text={item}
                    weight={400}
                    color={colors.greenDeep}
                    className="text-[14px]"
                  />
                </div>
              );
            })}
          </div>
          <div>
            {payType === 0 ? (
              <Card />
            ) : payType === 1 ? (
              <Binance />
            ) : (
              payType === 2 && <Transfer />
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-[24px] mt-[24px] mb-[16px] ">
            {payMethods.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.paymentBox} flex flex-row-reverse justify-between gap-[8px] cursor-pointer px-4`}
                  onClick={() => setPayType(index)}
                >
                  {index === payType ? (
                    <DropDownIcon className={'w-6 -rotate-180'} />
                  ) : (
                    <DropDownIcon className={'w-6'} />
                  )}
                  <CustomText
                    text={item}
                    weight={400}
                    color={colors.greenDeep}
                    className="text-[14px]"
                  />
                </div>
              );
            })}
          </div>
          <div>
            {payType === 0 ? (
              <Card />
            ) : payType === 1 ? (
              <Binance />
            ) : (
              payType === 2 && <Transfer />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default WalletPayment;
