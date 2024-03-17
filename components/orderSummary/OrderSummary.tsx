import kountyGiftCard from '../../assets/images/kountyGiftCard.png';
import { FONTFAMILY, colors } from '../../utils';
import CustomButton from '../CustomButton';
import styles from './orderSummary.module.css';
import Image from 'next/image';
const OrderSummary = ({
  orderNo,
  quantity,
  price,
  discount,
  total,
  paymentMethod,
}: GiftCard) => {
  return (
    <div className={`${styles.container} px-10 py-10`}>
      <p
        className="sm:text-[1.25rem] sm:leading-7 sm:tracking-[0.04em] font-normal sm:w-[34.8125rem]"
        style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.normal }}
      >
        Your order has been received, however, it won’t be processed until your
        payment has been confirmed
      </p>
      <section className="mt-8">
        <h3
          className="sm:text-[1.75rem] sm:leading-[2.4375rem] sm:tracking-[0.04em] font-bold"
          style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.bold }}
        >
          Order Summary
        </h3>
        <span className="flex flex-row gap-1 mt-4">
          <h6
            style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.normal }}
            className="sm:text-[1.25rem] sm:leading-[1.75rem] sm:tracking-[0.04em] font-semi-bold"
          >
            Order No -{' '}
          </h6>
          <h6
            style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.normal }}
            className="sm:text-[1.25rem] sm:leading-[1.75rem] sm:tracking-[0.04em] font-semi-bold"
          >
            {orderNo}
          </h6>
        </span>
        <div className="flex flex-row gap-10 mt-5">
          <div>
            <Image
              src={kountyGiftCard}
              alt={'giftCard'}
              className="sm:w-[108.73px] sm:h-[3.6056rem]"
            />
          </div>
          <h6
            style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.normal }}
            className="sm:text-[1rem] sm:leading-[1.375rem] sm:tracking-[0.0087rem] font-normal"
          >
            Gift Card
          </h6>
        </div>
        <div className="flex flex-row sm:justify-between mt-5">
          <span
            className={`${styles.detailsFormat} flex flex-col sm:gap-3 items-start`}
            style={{ fontFamily: FONTFAMILY.normal }}
          >
            <h6>Quantity</h6>
            <h6>Price</h6>
            <h6>Discount</h6>
            <h6>Total</h6>
            <h6>Payment Method</h6>
          </span>

          <span
            className={`${styles.detailsFormat} flex flex-col sm:gap-3 items-start`}
            style={{ fontFamily: FONTFAMILY.normal }}
          >
            <h6>{quantity}</h6>
            <h6>{price}</h6>
            <h6>{discount}</h6>
            <h6>{total}</h6>
            <h6>{paymentMethod}</h6>
          </span>
        </div>
        <span className="flex flex-row justify-center mt-10">
          <CustomButton
            text={'Go to Home'}
            disabled={false}
            paddingTop={12}
            paddingBottom={12}
            paddingLeft={32}
            paddingRight={32}
          />
        </span>
      </section>
    </div>
  );
};

export default OrderSummary;
