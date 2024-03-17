import React, { useEffect, useState } from 'react';
import ChooseCard from './components/ChooseCard';
import useScreenSize from '../../../hooks/useScreenSize';
import RecipientInfo from './components/RecipientInfo';
import ReviewCard from './components/ReviewCard';
import CheckoutAndPay from './components/CheckoutAndPay';
import CheckoutBinance from '../redeemGift/component/CheckoutBinance';
// import { setOrderComplete } from '../../../state/slices/checkout';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { setOrderComplete } from '../../../state/slices/checkout';
import { colors } from '../../../utils';

const Index = () => {
  useScreenSize();
  const [chooseCardVisible, setChooseCardVisible] = useState(true);
  const [recipientInfoVisible, setRecipientInfoVisible] = useState(false);
  const [reviewCardVisible, setReviewCardVisible] = useState(false);
  const [checkoutAndPayVisible, setCheckoutAndPayVisible] = useState(false);
  const [checkoutBinanceVisible, setCheckoutBinanceVisible] = useState(false);
  const dispatch = useAppDispatch();
  const { orderComplete } = useAppSelector((state) => state.checkout);

  function next() {
    dispatch(setOrderComplete());
    setReviewCardVisible(false);
    setCheckoutAndPayVisible(true);
  }

  useEffect(() => {
    if (orderComplete) {
      setCheckoutBinanceVisible(true);
      setCheckoutAndPayVisible(false);
    }
  }, [orderComplete]);
  return (
    <div
      className="pt-[100px] pl-6 pr-6 sm:pl-[110px] sm:pr-[1.5rem]"
      style={{ backgroundColor: colors.offWhite }}
    >
      {chooseCardVisible && (
        <ChooseCard
          onButtonClick={() => {
            setChooseCardVisible(false);
            setRecipientInfoVisible(true);
          }}
        />
      )}
      {recipientInfoVisible && (
        <RecipientInfo
          onButtonClick={() => {
            setRecipientInfoVisible(false);
            setReviewCardVisible(true);
          }}
        />
      )}
      {reviewCardVisible && (
        <ReviewCard
          onButtonClick={() => {
            setReviewCardVisible(false);
            setCheckoutAndPayVisible(true);
          }}
        />
      )}
      {checkoutAndPayVisible && <CheckoutAndPay />}
      {checkoutBinanceVisible && <CheckoutBinance />}
    </div>
  );
};
export default Index;
