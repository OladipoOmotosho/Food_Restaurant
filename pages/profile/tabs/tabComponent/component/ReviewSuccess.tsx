import React from 'react';
import { PrevArrow, Rating, ThumbsUp } from '../../../../../assets';
import { CustomButton } from '../../../../../components';
import { FONTFAMILY, colors } from '../../../../../utils';
import styles from '../../../styles/profile.module.css';
import { useAppSelector } from '../../../../../state/hooks/Index';

const ReviewSuccess = () => {
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  return (
    <>
      <span className="flex flex-row gap-3 sm:hidden mb-10">
        <Rating />
        <h1
          style={{
            color: windowSize > 641 ? colors.green : colors.gray2,
            fontFamily: FONTFAMILY.normal,
          }}
          className="sm:font-bold font-normal sm:text-[1.25rem] sm:leading-[1.625rem] sm:mb-[48px] sm:mt-[28px] "
        >
          Feedback & Ratings
        </h1>
      </span>
      <div className="flex flex-col sm:justify-center items-center gap-4 pr-6">
        <ThumbsUp />
        <h3
          style={{ color: colors.gray1, fontFamily: FONTFAMILY.bold }}
          className="sm:text-[1.25rem] sm:leading-[1.625rem] font-bold"
        >
          No purchase to review
        </h3>
        <p
          style={{ color: colors.gray7, fontFamily: FONTFAMILY.normal }}
          className="sm:max-w-[35.875rem] text-center sm:leading-[1.625rem] font-semibold sm:text-[1rem] tracking-wide mb-8"
        >
          You have no pending feedback to give, order now and come back to give
          a review when your purchase is delivered to help us improve on giving
          you the best service there is.
        </p>
        <CustomButton
          text={'Order Now'}
          disabled={false}
          paddingTop={12}
          paddingBottom={12}
          paddingLeft={42}
          paddingRight={42}
        />
      </div>
    </>
  );
};

export default ReviewSuccess;
