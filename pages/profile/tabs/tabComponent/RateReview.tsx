import { useState } from 'react';
import * as React from 'react';
import DeliveryStatus from './component/DeliveryStatus';
import { FONTFAMILY, colors } from '../../../../utils';
import { CustomButton, CustomTextInput } from '../../../../components';
import {
  DeliveredIcon,
  OrangeCheck,
  OrangeLine,
  PrevArrow,
  Previous,
} from '../../../../assets';
import Image from 'next/image';
import styles from '../../styles/profile.module.css';
import { Rating } from '@mui/material';
import { useAppSelector } from '../../../../state/hooks/Index';
import ReviewSuccess from './component/ReviewSuccess';

const RateReview = ({
  img,
  foodName,
  orderId,
  statusUpdate,
  date,
  subTotal,
  shippingFee,
  totalFee,
  paymentMethod,
  customerName,
  address,
  orderHistory,
}: OrderDetails) => {
  const deliveryStates = [
    {
      icon: <OrangeCheck />,
      state: 'Order placed',
      lines: <OrangeLine />,
      time: '2:00pm',
    },
    {
      icon: <OrangeCheck />,
      state: 'Order in progress',
      lines: <OrangeLine />,
      time: '2:10pm',
    },
    {
      icon: <OrangeCheck />,
      state: 'In Transit',
      lines: <OrangeLine />,
      time: '3:10pm',
    },
    {
      icon: <DeliveredIcon />,
      state: 'Delivered',
      lines: '',
      time: '3:30pm',
    },
  ];
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  const [ratings, setRatings] = useState<number>(5);
  const [remarks, setRemarks] = useState('');
  const [reviewSuccessful, setReviewSuccessful] = useState(false);

  return (
    <>
      {!reviewSuccessful ? (
        <main className={`${styles.orderBox} -mt-6 `}>
          <div className="hidden sm:flex sm:flex-row sm:justify-start sm:gap-8 sm:items-center sm:px-[2rem] sm:mt-8">
            <Previous
              className="fill-[#065143] cursor-pointer"
              onClick={orderHistory}
            />

            <h1
              style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.normal }}
              className="sm:text-[1.25rem] sm:leading-[1.625rem] sm:tracking-[0.0063rem] font-semibold"
            >
              Rate and leave feedback
            </h1>
          </div>
          <div
            className={`${styles.navBar} sm:hidden flex flex-row justify-start sm:gap-8 gap-2 items-center sm:px-[32px] sm:mt-8 mb-[40px]`}
          >
            <PrevArrow
              className="fill-[#065143] cursor-pointer"
              onClick={orderHistory}
            />

            <h1
              style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.normal }}
              className="sm:text-[1.25rem] sm:leading-[1.625rem] sm:tracking-[0.0063rem] font-semibold"
            >
              Rate & Leave Feedback
            </h1>
          </div>
          <div
            className={
              ' sm:flex sm:flex-row sm:justify-between sm:items-start sm:pb-4 py-2 sm:px-[2rem] sm:py-[2rem] sm:ml-[65px]'
            }
          >
            <section className="flex flex-row gap-6 items-start">
              <Image src={img} alt={'img'} />
              <span className="sm:flex sm:flex-col sm:gap-[0.375rem]">
                <h5
                  className="sm:text-[1rem] sm:leading-[0.25rem] sm:tracking-[0.0063rem] sm:mt-[0.375rem] font-semibold"
                  style={{
                    color: colors.greenDeep,
                    fontFamily: FONTFAMILY.normal,
                  }}
                >
                  {foodName}
                </h5>
                <h6
                  className="sm:font-normal sm:text-[0.875rem] sm:leading-[0.25rem] sm:tracking-[0.1008px] sm:mt-[0.75rem]"
                  style={{ color: colors.gray7, fontFamily: FONTFAMILY.normal }}
                >
                  Order ID: {orderId}
                </h6>
              </span>
            </section>
          </div>

          <section className="py-4 sm:px-8 sm:ml-[65px]">
            <h1
              style={{ color: colors.gray1, fontFamily: FONTFAMILY.normal }}
              className="sm:text-[1.25rem] sm:leading-[1.625rem] sm:tracking-[0.0063rem] font-semibold"
            >
              Rate this product
            </h1>
            <span
              className={`${styles.reviewBox} flex flex-col items-start gap-[29px] justify-items-start sm:mt-6`}
            >
              <Rating
                precision={0.5}
                value={ratings}
                onChange={(event, newValue: any) => {
                  setRatings(newValue);
                }}
                size={windowSize > 641 ? 'large' : 'small'}
                sx={{
                  '& .MuiRating-iconFilled': {
                    color: '#EA5B31',
                  },
                }}
              />
              <textarea
                className={styles.remarks}
                cols={30}
                placeholder="Share your experience (optional)"
                rows={10}
              ></textarea>
            </span>
          </section>
          <span className="flex flex-row justify-center mt-6 mb-8">
            <CustomButton
              text={'Submit your review'}
              disabled={false}
              width={windowSize < 641 ? windowFit - 32 : 464}
              onClick={() => setReviewSuccessful(true)}
            />
          </span>
        </main>
      ) : (
        <ReviewSuccess />
      )}
    </>
  );
};

export default RateReview;
