import { CustomButton, CustomModal, CustomText } from '../../components';
import DeliveryInfo from '../../components/DeliveryInfo';
import Estimate from './components/estimate';
import Summary from './components/summary';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import Payment from '../../components/payment';
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import { setOrderComplete, unsetDelivery } from '../../state/slices/checkout';
import { setWindowHeight, setWindowSize } from '../../state/slices/screensize';
import Circle from '../../assets/svg/circle.svg';
import InactiveCircle from '../../assets/svg/inActiveCircle.svg';
import useScreenSize from '../../hooks/useScreenSize';

const Checkout = () => {
  const { orderComplete, deliverySet } = useAppSelector(
    (state) => state.checkout
  );
  const { windowSize, height } = useAppSelector((state) => state.screensize);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useScreenSize();

  return (
    <>
      <div className=" pt-[116px] md:pt-[100px] px-[24px] md:px-[100px] bg-[#F5F5F7]">
        <CustomText
          text="Checkout"
          weight={700}
          className="text-[32px] md:mb-[40px]"
        />
        <div className="md:flex md:gap-[100px]">
          <div>
            <Estimate />
            <DeliveryInfo />
            {!deliverySet ? (
              windowSize > 641 && (
                <div className="flex gap-[20px] items-center bg-white py-[16px] pl-[29px] mb-[75px] rounded-[10px]">
                  <InactiveCircle />
                  <CustomText
                    text={'Pick a payment method'}
                    weight={700}
                    className="text-[24px] text-[#04362D]"
                  />{' '}
                </div>
              )
            ) : (
              <Payment />
            )}
          </div>
          <div>
            <Summary />
          </div>
        </div>
      </div>
      <CustomModal show={orderComplete}>
        <div
          style={{
            width: windowSize < 660 ? windowSize : 650,
            height: windowSize < 660 ? height : 673,
          }}
          className="px-[60px] pt-[60px] pb-[40px] bg-white flex flex-col justify-between rounded-[15px] overflow-y-scroll "
        >
          <CustomText
            text="All Done!"
            weight={700}
            className="text-[28px] text-center"
          />
          <div className="flex justify-center">
            <CustomText
              className="text-center"
              weight={600}
              text="Your order has been successfully placed"
            />
          </div>
          <div className="flex justify-center">
            <CustomButton
              text="Go to Home"
              disabled={false}
              width={166}
              onClick={() => {
                router.push('/');
                dispatch(unsetDelivery());
                dispatch(setOrderComplete());
              }}
            />
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default Checkout;
