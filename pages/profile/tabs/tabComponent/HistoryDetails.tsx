import { CustomButton } from '../../../../components';
import { FONTFAMILY, colors } from '../../../../utils';
import Image from 'next/image';
import styles from '../../styles/profile.module.css';
import {
  DeliveredIcon,
  OrangeCheck,
  OrangeLine,
  PrevArrow,
  Previous,
} from '../../../../assets';
import DeliveryStatus from './component/DeliveryStatus';
import { useAppSelector } from '../../../../state/hooks/Index';
import shrimp from '../../../../assets/images/shrimp.png';

const HistoryDetails = ({ orderHistory }: OrderDetails) => {
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
  const orderId = 20991;
  const deliveryDetails = [
    {
      img: shrimp,
      foodName: 'Shrimp stir-fry',
      orderId: 243690,
      statusUpdate: 'Delivered',
      date: '16-12-2023',
      quantity: 2,
      amount: '₦20000',
    },
  ];

  const subTotal = '₦20000';
  const shippingFee = ' ₦2000';
  const totalFee = ' ₦22000';
  const paymentMethod = 'Wallet Payment';
  const customerName = 'John Bull';
  const address = 'No 3, adetoyese street, Orogun';

  if (windowSize > 641 || windowSize <= 641) {
    let quantity = 2;
    for (let i = 0; i < quantity; i++) {
      deliveryDetails.push({
        img: shrimp,
        foodName: 'Shrimp stir-fry',
        orderId: 243690,
        statusUpdate: 'Delivered',
        date: '16-12-2023',
        amount: '₦20000',
        quantity: i,
      });
    }
  }

  return (
    <>
      {windowSize > 641 ? (
        <main className={`${styles.orderBox} `}>
          <div className="sm:flex sm:flex-row sm:justify-start sm:gap-8 sm:items-center sm:px-[2rem] sm:mt-8">
            <Previous
              className="fill-[#065143] cursor-pointer"
              onClick={orderHistory}
            />

            <h1
              style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.normal }}
              className="sm:text-[1.25rem] sm:leading-[1.625rem] sm:tracking-[0.0063rem] font-semibold"
            >
              Order Details
            </h1>
          </div>
          <div
            className={
              ' sm:flex sm:flex-row sm:justify-between sm:items-start sm:pb-4 sm:px-[2rem] sm:py-[2rem] sm:pr-[3.125rem]'
            }
          >
            <div className="flex flex-col gap-6">
              {deliveryDetails.map((deliveryDetail, index) => (
                <>
                  <section className="sm:flex sm:flex-row sm:gap-6">
                    <Image src={deliveryDetail.img} alt={'img'} />
                    <span className="sm:flex sm:flex-col sm:gap-[0.375rem]">
                      <h5
                        className="sm:text-[1rem] sm:leading-[0.25rem] sm:tracking-[0.0063rem] sm:mt-[0.375rem] font-semibold"
                        style={{
                          color: colors.greenDeep,
                          fontFamily: FONTFAMILY.normal,
                        }}
                      >
                        {deliveryDetail.foodName}
                      </h5>
                      <h6
                        className="sm:font-normal sm:text-[0.875rem] sm:leading-[0.25rem] sm:tracking-[0.1008px] sm:mt-[0.75rem]"
                        style={{
                          color: colors.gray7,
                          fontFamily: FONTFAMILY.normal,
                        }}
                      >
                        Order ID: {deliveryDetail.orderId}
                      </h6>
                      <h6
                        className="sm:font-normal sm:text-[0.875rem] sm:leading-[0.25rem] sm:tracking-[0.1008px] sm:mt-[0.75rem]"
                        style={{
                          color: colors.gray7,
                          fontFamily: FONTFAMILY.normal,
                        }}
                      >
                        {deliveryDetail.quantity > 1
                          ? deliveryDetail.amount
                          : ''}
                      </h6>
                      <h6
                        className="sm:font-normal sm:text-[0.875rem] sm:leading-[1.25rem] sm:tracking-[0.1008px] sm:mt-[1.125rem]"
                        style={{
                          color: colors.green4,
                          fontFamily: FONTFAMILY.normal,
                        }}
                      >
                        {deliveryDetail.statusUpdate}
                      </h6>
                      <h6
                        className="sm:text-[0.75rem] sm:leading-[1rem] sm:mt-[0.375rem]"
                        style={{
                          color: colors.gray7,
                          fontFamily: FONTFAMILY.normal,
                        }}
                      >
                        {deliveryDetail.date}
                      </h6>
                    </span>
                  </section>
                </>
              ))}
            </div>
            <CustomButton
              text={'Order again'}
              disabled={false}
              paddingTop={4}
              paddingBottom={4}
              paddingLeft={8}
              paddingRight={8}
            />
          </div>

          <div className={styles.insideDetails}></div>

          <section className={styles.containerForPaymentInfo}>
            <h1
              style={{ color: colors.gray1, fontFamily: FONTFAMILY.normal }}
              className="sm:text-[1.25rem] sm:leading-[1.625rem] sm:tracking-[0.0063rem] font-semibold"
            >
              Payment Details
            </h1>
            <span
              className={`${styles.paymentInfo} sm:flex sm:flex-col sm:items-start sm:gap-[0.625rem] sm:justify-items-start sm:mt-2`}
            >
              <h5 style={{ fontFamily: FONTFAMILY.normal }}>
                Subtotal: {subTotal}
              </h5>
              <h5 style={{ fontFamily: FONTFAMILY.normal }}>
                Shipping: {shippingFee}
              </h5>
              <h5 style={{ fontFamily: FONTFAMILY.normal }}>
                Total: {totalFee}
              </h5>
            </span>
            <h4
              style={{
                color: colors.greenDeep,
                fontFamily: FONTFAMILY.normal,
              }}
              className="sm:text-[1rem] sm:leading-[1.31rem] font-normal mt-[0.875rem] mb-4 ml-5"
            >
              {paymentMethod}
            </h4>
          </section>
          <section className={styles.containerForDeliveryInfo}>
            <h1
              style={{ color: colors.gray1, fontFamily: FONTFAMILY.normal }}
              className="sm:text-[1.25rem] sm:leading-[1.625rem] sm:tracking-[0.0063rem] font-semibold"
            >
              Delivery Details
            </h1>
            <span
              className={`${styles.deliveryInfo} sm:flex sm:flex-col sm:items-start sm:gap-[0.625rem] sm:justify-items-start sm:mt-2`}
            >
              <h5 style={{ fontFamily: FONTFAMILY.normal }}>{customerName}</h5>
              <h5 style={{ fontFamily: FONTFAMILY.normal }}>{address}</h5>
            </span>
          </section>

          <section className={styles.containerForDeliveryInfo}>
            <h1
              style={{ color: colors.gray1, fontFamily: FONTFAMILY.normal }}
              className="sm:text-[1.25rem] sm:leading-[1.625rem] sm:tracking-[0.0063rem] font-semibold"
            >
              Status History
            </h1>
            <div className="flex flex-col gap-1 mt-4 pb-9 ">
              {deliveryStates.map((stage, index) => (
                <DeliveryStatus
                  key={index}
                  icon={stage.icon}
                  state={stage.state}
                  lines={stage.lines}
                  time={stage.time}
                />
              ))}
            </div>
          </section>
        </main>
      ) : (
        <main className={`${styles.mainMobileContainer}`}>
          <div
            className={`${styles.navBar} flex flex-row justify-start sm:gap-8 gap-2 items-center sm:px-[32px] sm:mt-8 mb-[50px]`}
          >
            <PrevArrow
              className="fill-[#065143] cursor-pointer"
              onClick={orderHistory}
            />

            <h1
              style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.normal }}
              className="sm:text-[1.25rem] sm:leading-[1.625rem] sm:tracking-[0.0063rem] font-semibold"
            >
              Order Details
            </h1>
          </div>
          <div
            className={
              ' sm:flex sm:flex-row sm:justify-between flex flex-col gap-4 sm:items-start sm:pb-4 sm:px-[2rem] sm:py-[2rem] sm:pr-[3.125rem]'
            }
          >
            <span className="flex flex-col gap-4 mb-6">
              <h6
                className="sm:font-normal font-semibold text-[0.875rem] leading-[0.25rem] sm:tracking-[0.1008px] sm:mt-[0.75rem]"
                style={{
                  color: windowSize > 641 ? colors.gray7 : colors.gray1,
                  fontFamily:
                    windowSize > 641 ? FONTFAMILY.normal : FONTFAMILY.bold,
                }}
              >
                Order ID: {orderId}
              </h6>

              <small
                className="sm:font-normal font-semibold text-[0.875rem] leading-[0.25rem] sm:tracking-[0.1008px] sm:mt-[0.75rem]"
                style={{
                  color: windowSize > 641 ? colors.gray1 : colors.gray7,
                  fontFamily:
                    windowSize > 641 ? FONTFAMILY.bold : FONTFAMILY.normal,
                }}
              >
                Qty:{deliveryDetails.length}
              </small>
            </span>

            <div className="flex flex-col gap-6">
              {deliveryDetails.map((deliveryDetail, index) => (
                <>
                  <section
                    className={`${styles.orderBox1} flex flex-row gap-6`}
                  >
                    <Image src={deliveryDetail.img} alt={'img'} />
                    <span className="sm:flex sm:flex-col sm:gap-[0.375rem]">
                      <h5
                        className="sm:text-[1rem] sm:leading-[0.25rem] sm:tracking-[0.0063rem] sm:mt-[0.375rem] font-semibold"
                        style={{
                          color: colors.greenDeep,
                          fontFamily: FONTFAMILY.normal,
                        }}
                      >
                        {deliveryDetail.foodName}
                      </h5>
                      <h6
                        className="sm:font-normal sm:text-[0.875rem] sm:leading-[0.25rem] sm:tracking-[0.1008px] sm:mt-[0.75rem]"
                        style={{
                          color: colors.gray7,
                          fontFamily: FONTFAMILY.normal,
                        }}
                      >
                        {deliveryDetails.length > 1
                          ? deliveryDetail.amount
                          : ''}
                      </h6>
                      <h6
                        className="sm:font-normal sm:text-[0.875rem] sm:leading-[1.25rem] sm:tracking-[0.1008px] sm:mt-[1.125rem]"
                        style={{
                          color: colors.green4,
                          fontFamily: FONTFAMILY.normal,
                        }}
                      >
                        {deliveryDetail.statusUpdate}
                      </h6>
                      <h6
                        className="sm:text-[0.75rem] sm:leading-[1rem] sm:mt-[0.375rem]"
                        style={{
                          color: colors.gray7,
                          fontFamily: FONTFAMILY.normal,
                        }}
                      >
                        {deliveryDetail.date}
                      </h6>
                    </span>
                  </section>
                  <div className={styles.insideDetails}></div>
                </>
              ))}
            </div>
            <CustomButton
              text={'Order again'}
              disabled={false}
              paddingTop={10}
              paddingBottom={10}
              // paddingLeft={8}
              // paddingRight={8}
              width={windowSize > 641 ? 464 / 2 : windowFit}
            />
          </div>

          <section className={styles.containerForPaymentInfo}>
            <h1
              style={{ color: colors.gray1, fontFamily: FONTFAMILY.normal }}
              className="sm:text-[1.25rem] sm:leading-[1.625rem] sm:tracking-[0.0063rem] font-semibold"
            >
              Payment Details
            </h1>
            <span
              className={`${styles.paymentInfo} sm:flex sm:flex-col sm:items-start sm:gap-[0.625rem] sm:justify-items-start sm:mt-2`}
            >
              <h5 style={{ fontFamily: FONTFAMILY.normal }}>
                Subtotal: {subTotal}
              </h5>
              <h5 style={{ fontFamily: FONTFAMILY.normal }}>
                Shipping: {shippingFee}
              </h5>
              <h5 style={{ fontFamily: FONTFAMILY.normal }}>
                Total: {totalFee}
              </h5>
            </span>
            <h4
              style={{
                color: colors.greenDeep,
                fontFamily: FONTFAMILY.normal,
              }}
              className="sm:text-[1rem] sm:leading-[1.31rem] font-normal mt-[0.875rem] mb-4 sm:ml-5"
            >
              {paymentMethod}
            </h4>
          </section>
          <section className={styles.containerForDeliveryInfo}>
            <h1
              style={{ color: colors.gray1, fontFamily: FONTFAMILY.normal }}
              className="sm:text-[1.25rem] sm:leading-[1.625rem] sm:tracking-[0.0063rem] font-semibold"
            >
              Delivery Details
            </h1>
            <span
              className={`${styles.deliveryInfo} sm:flex sm:flex-col sm:items-start sm:gap-[0.625rem] sm:justify-items-start sm:mt-2`}
            >
              <h5 style={{ fontFamily: FONTFAMILY.normal }}>{customerName}</h5>
              <h5 style={{ fontFamily: FONTFAMILY.normal }}>{address}</h5>
            </span>
          </section>

          <section className={styles.containerForDeliveryInfo}>
            <h1
              style={{ color: colors.gray1, fontFamily: FONTFAMILY.normal }}
              className="sm:text-[1.25rem] sm:leading-[1.625rem] sm:tracking-[0.0063rem] font-semibold"
            >
              Status History
            </h1>
            <div className="flex flex-col gap-1 mt-4 pb-9 ">
              {deliveryStates.map((stage, index) => (
                <DeliveryStatus
                  key={index}
                  icon={stage.icon}
                  state={stage.state}
                  lines={stage.lines}
                  time={stage.time}
                />
              ))}
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default HistoryDetails;
