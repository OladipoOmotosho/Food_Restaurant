import Image from 'next/image';
import { CustomButton } from '../../../components';
import styles from '../styles/profile.module.css';
import { FONTFAMILY, colors } from '../../../utils';
// import HistoryDetails from './component/HistoryDetails';
import shrimp from '../../../assets/images/shrimp.png';
import gift from '../../../assets/images/gift.png';
import { useEffect, useState } from 'react';
import HistoryDetails from './tabComponent/HistoryDetails';
import { History } from '../../../assets';
import { useAppSelector } from '../../../state/hooks/Index';

const HistoryCard = () => {
  const [seeDetails, setSeeDetails] = useState(false);
  const [order, setOrder] = useState(false);
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  useEffect(() => {
    setSeeDetails(true);
  }, []);

  function orderHistory() {
    setSeeDetails(false);
  }

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

  const [currentPage, setCurrentPage] = useState(1);
  const [HistoryPerPage] = useState(5);

  const indexOfLastHistory = currentPage * HistoryPerPage;
  const indexOfFirstHistory = indexOfLastHistory - HistoryPerPage;
  const currentHistory = orderDetails.slice(
    indexOfFirstHistory,
    indexOfLastHistory
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      {seeDetails ? (
        <>
          <span className="flex flex-row gap-3">
            <History className="sm:hidden" />
            <h1
              style={{
                color: windowSize > 641 ? colors.green3 : colors.gray2,
                fontFamily:
                  windowSize > 641 ? FONTFAMILY.bold : FONTFAMILY.normal,
              }}
              className="text-[16px] leading-6 sm:font-bold sm:text-[1.25rem] sm:leading-[1.625rem] mb-[2rem] sm:mb-[2.875rem] sm:mt-[1.75rem] "
            >
              History
            </h1>
          </span>
          <div className="flex flex-col gap-4">
            {currentHistory.map((orderDetail, index) => (
              <main
                className={`${styles.orderBox1} sm:flex sm:flex-row sm:justify-between flex flex-col gap-4 sm:items-start sm:px-[2rem] sm:py-[2rem]`}
              >
                <div className="sm:flex sm:flex-row sm:gap-6 flex flex-row gap-8">
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
                <CustomButton
                  text={'See details'}
                  disabled={false}
                  onClick={orderHistory}
                  fontSize={13}
                  // paddingTop={4}
                  // paddingBottom={4}
                  // paddingLeft={8}
                  // paddingRight={8}
                  width={89}
                  height={25}
                />
              </main>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4 -mt-4">
          <HistoryDetails orderHistory={setSeeDetails} />
        </div>
      )}
      <div className="flex flex-row sm:justify-end mt-3 ">
        {Array.from(
          { length: Math.ceil(orderDetails.length / HistoryPerPage) },
          (_, i) => (
            <button
              style={{
                backgroundColor:
                  currentPage === i + 1 ? colors.orange : colors.white,
                color: currentPage === i + 1 ? colors.white : colors.black,
                margin: '0 5px',
                padding: ' 8px 10px',
                borderRadius: '5px',
              }}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default HistoryCard;
