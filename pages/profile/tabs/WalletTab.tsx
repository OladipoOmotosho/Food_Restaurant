import { useState } from 'react';
import {
  InComingIcon,
  MoneyReceivedIcon,
  OutGoingIcon,
  Wallet,
} from '../../../assets';
import { FONTFAMILY, colors } from '../../../utils';
import styles from '../styles/profile.module.css';
import TopUp from './tabComponent/component/TopUp';
import { useAppDispatch, useAppSelector } from '../../../state/hooks/Index';
import { setTopUp } from '../../../state/slices/walletTopUp';

const WalletTab = () => {
  const topUpDetails = [
    { date: '12-12-2023', icon: <InComingIcon />, amount: '₦5,000.00' },
    { date: '12-12-2023', icon: <OutGoingIcon />, amount: '₦50,000.00' },
    { date: '12-12-2023', icon: <InComingIcon />, amount: '₦5,000.00' },
    { date: '12-12-2023', icon: <OutGoingIcon />, amount: '₦50,000.00' },
    { date: '12-12-2023', icon: <InComingIcon />, amount: '₦5,000.00' },
    { date: '12-12-2023', icon: <OutGoingIcon />, amount: '₦50,000.00' },
    { date: '12-12-2023', icon: <InComingIcon />, amount: '₦5,000.00' },
    { date: '12-12-2023', icon: <OutGoingIcon />, amount: '₦50,000.00' },
    { date: '12-12-2023', icon: <InComingIcon />, amount: '₦5,000.00' },
    { date: '12-12-2023', icon: <OutGoingIcon />, amount: '₦50,000.00' },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [topUpPerPage] = useState(5);
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  // const [topUp, setTopUp] = useState(true);
  // Get current top up
  const indexOfLastTopUp = currentPage * topUpPerPage;
  const indexOfFirstTopUp = indexOfLastTopUp - topUpPerPage;
  const currentTopUp = topUpDetails.slice(indexOfFirstTopUp, indexOfLastTopUp);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const dispatch = useAppDispatch();
  const { topUpSelected } = useAppSelector((state) => state.walletTopUp);

  // console.log(topUpSelected);
  return (
    <>
      {!topUpSelected ? (
        <>
          <div className="flex flex-col gap-[4px] mt-[15px]  ">
            <span className="flex flex-row gap-5 items-center">
              <Wallet className="w-10 h-auto fill-[#01100D" />
              <h1
                style={{
                  fontFamily: FONTFAMILY.bold,
                  color: colors.greenDeep,
                }}
              >
                Wallet
              </h1>
            </span>
            <h3
              style={{
                fontFamily: FONTFAMILY.bold,
                color: colors.green4,
              }}
              className="ml-[58px] mb-[22px] mt-[-10px]"
            >
              ₦500,000.00
            </h3>
          </div>
          <span
            className="flex flex-row justify-end gap-1 mb-1 cursor-pointer pr-[24px]"
            onClick={() => dispatch(setTopUp(5000))}
          >
            <MoneyReceivedIcon />
            <h6
              style={{
                fontFamily: FONTFAMILY.normal,
                color: colors.orange,
              }}
              className="sm:text-[1rem] sm:leading-[1.3125rem] font-semibold"
            >
              TopUp
            </h6>
          </span>
          <div className="flex flex-col gap-5 pr-[24px]">
            {currentTopUp.map((topUpDetails, index) => (
              <main className={styles.topUpBox}>
                <section className="flex flex-row gap-3">
                  {topUpDetails.icon}
                  {/* <span className="hidden"> {index}</span> */}
                  <span className="flex flex-col gap-1">
                    <h4
                      style={{
                        fontFamily: FONTFAMILY.normal,
                        color: windowSize > 641 ? colors.green2 : colors.gray1,
                      }}
                      className="sm:text-[1rem] text-[14px] leading-5 sm:leading-[1.3125rem] font-normal"
                    >
                      Wallet TopUp
                    </h4>
                    <h6
                      style={{
                        fontFamily: FONTFAMILY.normal,
                        color: windowSize > 641 ? colors.green : colors.gray7,
                      }}
                      className="sm:text-[1rem] text-[0.75rem] leading-3 sm:leading-[1.3125rem] font-normal"
                    >
                      {topUpDetails.date}
                    </h6>
                  </span>
                </section>
                <section className="flex flex-row gap-3 justify-end">
                  <h4
                    style={{
                      fontFamily: FONTFAMILY.bold,
                      color:
                        topUpDetails.icon.type === InComingIcon
                          ? colors.green4
                          : colors.red,
                    }}
                    className="text-[1rem] leading-6 sm:leading-[1.3125rem] font-normal"
                  >
                    {topUpDetails.amount}
                  </h4>
                </section>
              </main>
            ))}
          </div>
          <div className="flex flex-row justify-center sm:justify-end mt-3">
            {Array.from(
              { length: Math.ceil(topUpDetails.length / topUpPerPage) },
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
      ) : (
        <TopUp />
      )}
    </>
  );
};

export default WalletTab;
