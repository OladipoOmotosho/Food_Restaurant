import React, { useState } from 'react';
import { FONTFAMILY, colors } from '../../../../utils';
import StatusBar from '../../../../components/statusBar/StatusBar';
import Coupons from '../../component/Coupons';
import { DottedLine, IdleState, Line, OngoingState } from '../../../../assets';
import { CustomButton } from '../../../../components';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';

const ChooseCard = ({ onButtonClick }: any) => {
  const { windowSize, height } = useAppSelector((state) => state.screensize);
  const [chooseCard, setChooseCard] = useState(false);
  const { giftCardStart, giftCardSelected, giftCardPurchased } = useAppSelector(
    (state) => state.giftCard
  );
  const dispatch = useAppDispatch();
  // const router = useRouter();

  const deliveryStates = [
    {
      icon: <OngoingState />,
      state: 'choose giftCard',
      lines: <Line />,
      mobilelines: <DottedLine />,
    },
    {
      icon: <IdleState />,
      state: 'recipient details & DELIVERY',
      lines: <Line />,
      mobilelines: <DottedLine />,
    },
    {
      icon: <IdleState />,
      state: 'REVIEW',
      lines: <Line />,
      mobilelines: <DottedLine />,
    },
    { icon: <IdleState />, state: 'CHECKOUT & pay', lines: '' },
  ];

  const couponCards = [
    {
      text: ' ₦5,000.00 ',
    },
    {
      text: ' ₦10,000.00 ',
    },
    {
      text: ' ₦20,000.00 ',
    },
    {
      text: ' ₦100,000.00 ',
    },
    {
      text: ' ₦50,000.00 ',
    },
    {
      text: 'Other amount ',
    },
  ];

  function selectedCard() {
    setChooseCard(true);
  }
  return (
    // <div>
    <div>
      <section className="flex flex-col gap-[2.0938rem]">
        <h1
          className="text-[2rem] font-bold leading-[2.6875rem] sm:text-[2.5rem] sm:font-bold sm:leading-[3.25rem] uppercase"
          style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
        >
          Choose amount
        </h1>
        <div className="flex flex-col gap-2 sm:flex sm:flex-row sm:gap-2 sm:items-center">
          {deliveryStates.map((stage, index) => (
            <StatusBar
              key={index}
              icon={stage.icon}
              state={stage.state}
              lines={stage.lines}
              mobilelines={stage.mobilelines}
            />
          ))}
        </div>
      </section>
      <section className="mt-[2.5938rem] pb-[6.0625rem]">
        <div className="flex flex-col items-center sm:flex sm:flex-col sm:items-center gap-[3.75rem]">
          <p className="text-[1rem] leading-[1.375rem] tracking-tighter font-normal text-center sm:text-[1.5rem] sm:leading-[2.375rem] sm:-tracking-tighter sm:font-normal sm:text-center sm:w-[50.5625rem] w-[18.5625rem]">
            You don&apos;t have to do the math, we offer varieties of gift card
            while giving you the choice to customize also.
          </p>
          <div className="inline-grid grid-cols-2 gap-8 sm:inline-grid sm:grid-cols-3 sm:gap-8">
            {couponCards.map((couponCard, index) => (
              <Coupons key={index} text={couponCard.text} />
            ))}
          </div>
          <span className="flex flex-row justify-center">
            <CustomButton
              text={'Proceed'}
              disabled={false}
              paddingBottom={17}
              paddingTop={17}
              paddingLeft={windowSize < 641 ? 130 : 201.5}
              paddingRight={windowSize < 641 ? 130 : 201.5}
              onClick={onButtonClick}
            />
          </span>
        </div>
      </section>
    </div>
    // </div>
  );
};

export default ChooseCard;
