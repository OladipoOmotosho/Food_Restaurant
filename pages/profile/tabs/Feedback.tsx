import React, { useEffect, useState } from 'react';
import shrimp from '../../../assets/images/shrimp.png';
import gift from '../../../assets/images/gift.png';
import { FONTFAMILY, colors } from '../../../utils';
import { CustomButton, CustomText } from '../../../components';
import Image from 'next/image';
import styles from '../styles/profile.module.css';
import RateReview from './tabComponent/RateReview';
import { useAppSelector } from '../../../state/hooks/Index';
import { Rating } from '../../../assets';

const Feedback = () => {
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  const deliveryDetails = [
    {
      img: shrimp,
      foodName: 'Meal plan - 2 week subscription',
      orderId: 243690,
      statusUpdate: 'Delivered',
      date: '16-12-2023',
      subTotal: '₦20000',
      shippingFee: ' ₦2000',
      totalFee: ' ₦22000',
      paymentMethod: 'Wallet Payment',
      customerName: 'John Bull',
      address: 'No 3, adetoyese street, Orogun',
    },
  ];

  const orderDetails = [
    {
      img: shrimp,
      foodName: 'Shrimp stir-fry',
      orderId: 243690,
      statusUpdate: 'Delivered',
      date: '16-12-2023',
    },
    {
      img: shrimp,
      foodName: 'Shrimp stir-fry',
      orderId: 243690,
      statusUpdate: 'Delivered',
      date: '16-12-2023',
    },
    {
      img: gift,
      foodName: 'Shrimp stir-fry',
      orderId: 243690,
      statusUpdate: 'Delivered',
      date: '16-12-2023',
    },
    {
      img: gift,
      foodName: 'Shrimp stir-fry',
      orderId: 243690,
      statusUpdate: 'Delivered',
      date: '16-12-2023',
    },
    {
      img: shrimp,
      foodName: 'Shrimp stir-fry',
      orderId: 243690,
      statusUpdate: 'Delivered',
      date: '16-12-2023',
    },
  ];

  const [review, setReview] = useState(false);
  const [ratingList, setRatingList] = useState(false);

  useEffect(() => {
    setReview(true);
  }, []);

  function orderHistory() {
    setReview(false);
  }

  return (
    <>
      {!review ? (
        ''
      ) : (
        <span className="flex flex-row gap-3 sm:hidden mb-10">
          <Rating />
          <h1
            style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
            className="sm:font-bold sm:text-[1.25rem] sm:leading-[1.625rem] sm:mb-[48px] sm:mt-[28px] "
          >
            Feedback & Ratings
          </h1>
        </span>
      )}
      <h1
        style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
        className="sm:font-bold sm:text-[1.25rem] sm:leading-[1.625rem] sm:mb-[48px] sm:mt-[28px] sm:block hidden "
      >
        Feedback & Ratings
      </h1>
      {review ? (
        <div className={`${styles.orderBox1} flex flex-col gap-4 px-10 py-10`}>
          {orderDetails.map((orderDetail, index) => (
            <main
              className={`${styles.orderBox2} sm:flex sm:flex-row sm:justify-between sm:items-start sm:px-[2rem] sm:py-[2rem]`}
            >
              <div
                className="flex flex-row gap-6 px-4 py-3"
                onClick={windowSize < 641 ? orderHistory : () => {}}
              >
                <Image src={orderDetail.img} alt={'img'} />
                <span className="sm:flex sm:flex-col sm:gap-[0.375rem]">
                  <h5
                    className="sm:text-[1rem] sm:leading-[0.25rem] sm:tracking-[0.0063rem] sm:mt-[0.375rem] font-semibold"
                    style={{
                      color: colors.greenDeep,
                      fontFamily: FONTFAMILY.normal,
                    }}
                  >
                    {orderDetail.foodName}
                  </h5>
                  <h6
                    className="sm:font-normal sm:text-[0.875rem] sm:leading-[0.25rem] sm:tracking-[0.1008px] sm:mt-[0.75rem]"
                    style={{
                      color: colors.gray7,
                      fontFamily: FONTFAMILY.normal,
                    }}
                  >
                    Order ID: {orderDetail.orderId}
                  </h6>
                  <h6
                    className="sm:font-normal sm:text-[0.875rem] sm:leading-[1.25rem] sm:tracking-[0.1008px] sm:mt-[1.125rem]"
                    style={{
                      color: colors.green4,
                      fontFamily: FONTFAMILY.normal,
                    }}
                  >
                    {orderDetail.statusUpdate}
                  </h6>
                  <h6
                    className="sm:text-[0.75rem] sm:leading-[1rem] sm:mt-[0.375rem]"
                    style={{
                      color: colors.gray7,
                      fontFamily: FONTFAMILY.normal,
                    }}
                  >
                    {orderDetail.date}
                  </h6>
                </span>
              </div>
              <h4
                style={{ fontFamily: FONTFAMILY.normal, color: colors.orange }}
                className={
                  'font-semibold text-[0.875rem] leading-5 tracking-[0.0086rem] cursor-pointer sm:block hidden'
                }
                onClick={orderHistory}
              >
                RATE THIS PURCHASE
              </h4>
            </main>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {deliveryDetails.map((deliveryDetail, index) => (
            <RateReview
              orderHistory={setReview}
              img={deliveryDetail.img}
              foodName={deliveryDetail.foodName}
              statusUpdate={deliveryDetail.statusUpdate}
              date={deliveryDetail.date}
              orderId={deliveryDetail.orderId}
              subTotal={deliveryDetail.subTotal}
              shippingFee={deliveryDetail.shippingFee}
              totalFee={deliveryDetail.totalFee}
              customerName={deliveryDetail.customerName}
              address={deliveryDetail.address}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Feedback;
