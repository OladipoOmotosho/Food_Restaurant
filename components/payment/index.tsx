import { useState } from 'react';
import { colors } from '../../utils';
import Circle from '../../assets/svg/circle.svg';
import { useAppSelector } from '../../state/hooks/Index';
import Active from './assets/svg/activePay.svg';
import Inactive from './assets/svg/inactivePay.svg';
import Card from './components/card';
import Transfer from './components/transfer';
import Wallet from './components/wallet';
import Binance from './components/binance';
import CustomText from '../CustomText';

const Payment = () => {
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);

  const [payType, setPayType] = useState('CARD');

  const payMethods = ['CARD', 'ONLINE TRANSFER', 'WALLET', 'BINANCE PAY'];

  return (
    <div
      style={{ width: windowSize < 641 ? windowFit : 528 }}
      className="md:px-[29px] mb-[28px] md:bg-white md:py-[24px] md:rounded-[10px]"
    >
      <div className="flex gap-[20px] items-center">
        {windowSize > 641 && <Circle />}
        <CustomText
          text={'Pick a payment method'}
          weight={700}
          className={`text-[24px] text-[#04362D] ${
            windowSize < 641 && 'bg-inherit'
          }`}
        />
      </div>
      {windowSize > 641 ? (
        <>
          <div className="flex gap-[24px] mt-[24px] mb-[16px] items-center">
            {payMethods.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-[8px] cursor-pointer"
                  onClick={() => setPayType(item)}
                >
                  {item === payType ? <Active /> : <Inactive />}
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
            {payType === 'CARD' ? (
              <Card />
            ) : payType === 'ONLINE TRANSFER' ? (
              <Transfer />
            ) : payType === 'WALLET' ? (
              <Wallet />
            ) : (
              <Binance />
            )}
          </div>
        </>
      ) : (
        <div>
          <div className="mt-[8px] mb-[16px]">
            {payMethods.map((item, index) => {
              return (
                <div
                  key={index}
                  className="py-[14px] bg-white px-[16px] rounded-[10px] my-[16px] cursor-pointer"
                  onClick={() => setPayType(item)}
                >
                  <div className="flex gap-[15px] items-center">
                    {item === payType ? <Active /> : <Inactive />}
                    <CustomText
                      text={item}
                      weight={400}
                      color={colors.greenDeep}
                      className="text-[14px]"
                    />
                  </div>
                  {item === payType && (
                    <div>
                      {payType === 'CARD' ? (
                        <Card />
                      ) : payType === 'ONLINE TRANSFER' ? (
                        <Transfer />
                      ) : payType === 'WALLET' ? (
                        <Wallet />
                      ) : (
                        <Binance />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
