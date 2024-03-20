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

const ReviewCard = ({ onButtonClick }: any) => {
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  const [ReviewCard, setReviewCard] = useState('');
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
      icon: <OngoingState />,
      state: 'REVIEW',
      lines: <Line />,
      mobilelines: <DottedLine />,
    },
    { icon: <IdleState />, state: 'CHECKOUT & pay', lines: '' },
  ];

  function selectedCard() {
    setReviewCard('');
  }
  return (
    <div style={{ backgroundColor: colors.offWhite }}>
      <section className="flex flex-col gap-[2.0938rem]">
        <h1
          className="text-[2rem] font-bold leading-[2.6875rem] sm:text-[2.5rem] sm:font-bold sm:leading-[3.25rem] uppercase"
          style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
        >
          Review
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
      <div>
        <span className="flex flex-row justify-center mt-[5.0625rem] mb-[4.9887rem] sm:ml-[-6.25rem]">
          <KountyGiftCard />
        </span>
        <section className="sm:flex sm:flex-row sm:gap-[10.3125rem]">
          <section>
            <div
              className={`${styles.cardDetails} sm:mb-[6.0625rem] mb-6 `}
              style={{ width: windowSize < 641 ? windowFit : 464 }}
            >
              <div className="flex flex-row sm:gap-[2.1875rem] gap-[10px]">
                <span className="flex flex-col gap-[1.5rem]">
                  <h4
                    className={styles.h4Text}
                    style={{ fontFamily: FONTFAMILY.normal }}
                  >
                    Send date:
                  </h4>
                  <h4
                    className={styles.h4Text}
                    style={{ fontFamily: FONTFAMILY.normal }}
                  >
                    From:
                  </h4>
                  <h4
                    className={styles.h4Text}
                    style={{ fontFamily: FONTFAMILY.normal }}
                  >
                    To:
                  </h4>
                  <h4
                    className={styles.h4Text}
                    style={{ fontFamily: FONTFAMILY.normal }}
                  >
                    Recipient mail:
                  </h4>
                  <h4
                    className={styles.h4Text}
                    style={{ fontFamily: FONTFAMILY.normal }}
                  >
                    Gift message:
                  </h4>
                </span>
                <span className="flex flex-col gap-[1.5rem]">
                  <h5
                    className={styles.h5Text}
                    style={{ fontFamily: FONTFAMILY.normal }}
                  >
                    30-12-2022
                  </h5>
                  <h5
                    className={styles.h5Text}
                    style={{ fontFamily: FONTFAMILY.normal }}
                  >
                    Olamide
                  </h5>
                  <h5
                    className={styles.h5Text}
                    style={{ fontFamily: FONTFAMILY.normal }}
                  >
                    Omotosho
                  </h5>
                  <h5
                    className={styles.h5Text}
                    style={{ fontFamily: FONTFAMILY.normal }}
                  >
                    catman@gmail.com
                  </h5>
                  <h5
                    className={`${styles.h5Text} sm:w-[17.75rem]`}
                    style={{ fontFamily: FONTFAMILY.normal, fontSize: '1rem' }}
                  >
                    Hi Tife, I got this gift card so you don’t have to worry
                    about food during your exams.
                  </h5>
                </span>
              </div>
              <span className="flex flex-row justify-center mt-3">
                <CustomButton
                  text={'Edit card '}
                  disabled={false}
                  width={166}
                  paddingBottom={12}
                  paddingTop={12}
                  paddingLeft={32}
                  paddingRight={32}
                  background={colors.white}
                  border={`2px solid ${colors.orange}`}
                  color={colors.green}
                />
              </span>
            </div>
          </section>
          <section className={` ${styles.giftCardPayment} `}>
            <div
              className={`${styles.topSection} flex flex-row justify-between sm:gap-[17rem] pb-[8px] mb-[1.0625rem]`}
            >
              <span className={styles.voucherPrompt1}>
                <h6>Gift Card</h6>
                <h6>VAT</h6>
                <h6> Delivery</h6>
              </span>
              <span className={`${styles.voucherPrompt2}`}>
                <h6> ₦100,000.00</h6>
                <h6>₦20.00</h6>
                <h6>FREE</h6>
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <h3
                className="sm:text-[1.25rem] sm:leading-[1.625rem] sm:font-bold"
                style={{ color: colors.gray2, fontFamily: FONTFAMILY.bold }}
              >
                Total
              </h3>
              <h3
                className="sm:text-[1.25rem] sm:leading-[1.75rem] sm:font-semibold"
                style={{ color: colors.gray2, fontFamily: FONTFAMILY.normal }}
              >
                ₦100,020.00
              </h3>
            </div>
            <div className="flex flex-col leading-5 font-normal mt-5">
              <h6
                className="text-[0.75rem] leading-5 font-normal"
                style={{ color: colors.gray3, fontFamily: FONTFAMILY.light }}
              >
                Use voucher code below
              </h6>
              <span className="flex flex-row">
                <input
                  className={styles.inputBox}
                  placeholder="Enter code"
                ></input>
                <CustomButton
                  text={'Claim'}
                  disabled={true}
                  width={166}
                  height={50}
                  // paddingBottom={12}
                  // paddingTop={12}
                  paddingLeft={windowSize < 641 ? 32 : 62}
                  paddingRight={windowSize < 641 ? 32 : 62}
                  borderTopLeftRadius={0}
                  borderTopRightRadius={4}
                  borderEndEndRadius={4}
                  borderEndStartRadius={0}
                />
              </span>
            </div>
            <div className="flex flex-row justify-center mb-[7.5rem] mt-10">
              <CustomButton
                text={'Proceed to payment'}
                disabled={false}
                paddingBottom={16}
                paddingTop={16}
                // paddingLeft={windowSize < 641 ? 32 : 155.5}
                // paddingRight={windowSize < 641 ? 32 : 155.5}
                onClick={onButtonClick}
                width={windowSize < 641 ? windowFit : 464}
                borderRadius={windowSize < 641 ? 30 : 20}
              />
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ReviewCard;
