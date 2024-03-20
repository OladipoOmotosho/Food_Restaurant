import React, { useEffect, useState } from 'react';
import styles from '../../styles/giftcard.module.css';
import { FONTFAMILY, colors } from '../../../../utils';
import StatusBar from '../../../../components/statusBar/StatusBar';
import Coupons from '../../component/Coupons';
import {
  DoneState,
  DottedLine,
  IdleState,
  KountyGiftCard,
  Line,
  OngoingState,
  UncheckedCircle,
} from '../../../../assets';
import { CustomButton, CustomTextInput } from '../../../../components';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks/Index';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField, TextFieldProps } from '@mui/material';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  setGiftCard,
  setGiftCardLoading,
} from '../../../../state/slices/giftCard';
import Payment from '../../../../components/payment';
import Estimate from '../../../checkout/components/estimate';
import Summary from '../../../checkout/components/summary';
import OrderSummary from '../../../../components/orderSummary/OrderSummary';
import CheckoutBinance from '../../redeemGift/component/CheckoutBinance';

const CheckoutAndPay = () => {
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  const [CheckoutAndPay, setCheckoutAndPay] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState('virtual');
  const [giftMsg, setGiftMsg] = useState('');
  const [value, setValue] = useState<Dayjs | null>(null);

  const { giftCardStart, giftCardSelected, giftCardPurchased } = useAppSelector(
    (state) => state.giftCard
  );
  const dispatch = useAppDispatch();
  // const router = useRouter();

  const deliveryStates = [
    {
      icon: <DoneState />,
      state: 'choose giftCard',
      lines: <Line />,
      mobilelines: <DottedLine />,
    },
    {
      icon: <DoneState />,
      state: 'recipient details & DELIVERY',
      lines: <Line />,
      mobilelines: <DottedLine />,
    },
    {
      icon: <DoneState />,
      state: 'REVIEW',
      lines: <Line />,
      mobilelines: <DottedLine />,
    },
    { icon: <OngoingState />, state: 'CHECKOUT & pay', lines: '' },
  ];

  function selectedCard() {
    setCheckoutAndPay('');
  }
  return (
    <div className="">
      <section className="flex flex-col gap-[2.0938rem]">
        <h1
          className="text-[2rem] font-bold leading-[2.6875rem] sm:text-[2.5rem] sm:font-bold sm:leading-[3.25rem] uppercase"
          style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
        >
          CHECKOUT & PAY
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
      <section className="sm:flex sm:flex-row sm:justify-start sm:gap-[8.5625rem] sm:mt-[3.8438rem] sm:mb-[5rem]">
        <Payment />
        <Summary />
      </section>
      {/* <OrderSummary
          orderNo={2456}
          quantity={1}
          price={₦100000}
          discount={₦10000}
          total={₦90000}
          paymentMethod={'Online Transfer'}
        /> */}
    </div>
  );
};

export default CheckoutAndPay;
