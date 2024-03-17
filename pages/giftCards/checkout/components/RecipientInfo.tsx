import React, { useEffect, useState } from 'react';
import styles from '../../styles/giftcard.module.css';
import { FONTFAMILY, colors } from '../../../../utils';
import StatusBar from '../../../../components/statusBar/StatusBar';
import Coupons from '../../component/Coupons';
import {
  DoneState,
  DottedLine,
  IdleState,
  Line,
  OngoingState,
  UncheckedCircle,
} from '../../../../assets';
import { CustomButton, CustomTextInput } from '../../../../components';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField, TextFieldProps } from '@mui/material';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  setGiftCard,
  setGiftCardLoading,
} from '../../../../state/slices/giftCard';

const RecipientInfo = ({ onButtonClick }: any) => {
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  const [recipientInfo, setRecipientInfo] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [recipientNumber, setRecipientNumber] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState('virtual');
  const [giftMsg, setGiftMsg] = useState('');
  const [email, setEmail] = useState('');
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
      icon: <OngoingState />,
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

  function selectedCard() {
    setRecipientInfo('');
  }
  return (
    <div style={{ backgroundColor: colors.offWhite }}>
      <section className="flex flex-col gap-[2.0938rem]">
        <h1
          className="text-[2rem] font-bold leading-[2.6875rem] sm:text-[2.5rem] sm:font-bold sm:leading-[3.25rem] uppercase"
          style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
        >
          Recipient
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
      <section className="mt-[2.5938rem] pb-[6.0625rem] sm:flex sm:flex-row sm:gap-[9.4375rem]">
        <section className={` ${styles.infoBox} `}>
          <div className="flex flex-col gap-7 ">
            <h1
              className="text-[1.25rem] leading-[1.625rem] sm:text-[1.5rem] sm:leading-[1.9375rem] font-bold "
              style={{
                backgroundColor: colors.offWhite,
                color: colors.green,
                fontFamily: FONTFAMILY.bold,
              }}
            >
              Recipient Information
            </h1>
            <span className="flex flex-col sm:flex-row gap-8 sm:gap-6">
              <CustomTextInput
                width={windowSize < 641 ? windowFit : 220}
                placeholder={'Enter your Recipient name'}
                value={recipientName}
                setValue={setRecipientName}
                label={'Recipient Name'}
              />
              <CustomTextInput
                width={windowSize < 641 ? windowFit : 220}
                placeholder={'Enter your name'}
                value={senderName}
                setValue={setSenderName}
                label={'Your Name'}
              />
            </span>
            <span className="flex flex-col sm:flex-row gap-8 sm:gap-6">
              <CustomTextInput
                width={windowSize < 641 ? windowFit : 220}
                placeholder={'Enter your email address'}
                value={email}
                setValue={setEmail}
                label={'Email Address'}
              />
              <CustomTextInput
                width={windowSize < 641 ? windowFit : 220}
                placeholder={'Home address'}
                value={recipientAddress}
                setValue={setRecipientAddress}
                label={'Area of Residence'}
              />
            </span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1px',
                }}
              >
                <label
                  style={{
                    fontFamily: FONTFAMILY.normal,
                    fontWeight: '350',
                    lineHeight: '1.25rem',
                    color: colors.gray3,
                    fontSize: '12px',
                  }}
                >
                  Scheduled Date
                </label>

                <DatePicker
                  // openTo="year"
                  views={['year', 'month', 'day']}
                  disablePast
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params: TextFieldProps) => (
                    <TextField
                      {...params}
                      style={{ width: windowSize > 641 ? 464 : windowFit }}
                    />
                  )}
                  showDaysOutsideCurrentMonth
                  InputProps={{
                    sx: {
                      '& .MuiSvgIcon-root': {
                        color: ' #F19276',
                      },
                      '& .MuiInputBase-input': {
                        color: '#828282',
                        fontSize: '16px',
                        height: '25px',
                      },
                    },
                  }}
                />
              </div>
            </LocalizationProvider>
            <CustomTextInput
              width={windowSize < 641 ? windowFit : 464}
              height={98}
              placeholder={''}
              label={'Gift Message'}
              type="text"
              value={giftMsg}
              setValue={setGiftMsg}
            />
          </div>
        </section>
        <section
          className={` ${styles.deliveryDetails} `}
          style={{ width: windowSize < 641 ? windowFit : 464 }}
        >
          <h3 style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.bold }}>
            Delivery Method
          </h3>
          <div className="flex flex-col gap-6 sm:gap-8">
            <span className="flex flex-row gap-4 sm:items-start">
              <span
                className="cursor-pointer"
                onClick={() => setDeliveryInfo('virtual')}
              >
                {deliveryInfo === 'virtual' ? (
                  <OngoingState />
                ) : (
                  <UncheckedCircle />
                )}
              </span>
              <span
                className="sm:text-[1rem] sm:leading-[1.5rem] sm:tracking-[0.04em] font-light w-[16rem]"
                style={{ color: colors.green, fontFamily: FONTFAMILY.normal }}
              >
                <p
                  style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
                  className="sm:hidden block"
                >
                  Email
                </p>
                Select this option to send the gift message and details to your
                recipient at your chosen time.
              </span>
            </span>
            <span className="flex flex-row gap-4 sm:items-start ">
              <span
                className="cursor-pointer"
                onClick={() => setDeliveryInfo('physical')}
              >
                {deliveryInfo === 'physical' ? (
                  <OngoingState />
                ) : (
                  <UncheckedCircle />
                )}
              </span>
              <span
                className="sm:text-[1rem] sm:leading-[1.5rem] sm:tracking-[0.04em] font-light w-[16rem]"
                style={{ color: colors.green, fontFamily: FONTFAMILY.normal }}
              >
                <p
                  style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
                  className="sm:hidden block"
                >
                  Print
                </p>
                We'll send you an email with the gift message and more details.
                You can then print it if you prefer to hand deliver them or you
                can forward it to them later.
              </span>
            </span>
          </div>
        </section>
      </section>
      <div className="flex flex-row justify-center pb-[7.5rem] -mt-10">
        <CustomButton
          text={'Continue'}
          disabled={false}
          paddingBottom={17}
          paddingTop={17}
          paddingLeft={windowSize < 641 ? 130 : 197.5}
          paddingRight={windowSize < 641 ? 130 : 197.5}
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
};

export default RecipientInfo;
