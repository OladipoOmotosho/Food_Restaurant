import {
  Address,
  History,
  Profile,
  Rating,
  Reward,
  SignOut,
  Wallet,
} from '../../assets';
import useScreenSize from '../../hooks/useScreenSize';
import { FONTFAMILY, colors } from '../../utils';
import styles from './styles/profile.module.css';
import { SetStateAction, useState } from 'react';
import PersonalInformation from './tabs/PersonalInformation';
import HistoryCard from './tabs/HistoryCard';
import Addresses from './tabs/Addresses';
import Rewards from './tabs/tabComponent/Rewards';
import WalletTab from './tabs/WalletTab';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import TopUp from './tabs/tabComponent/component/TopUp';
import Feedback from './tabs/Feedback';
import Link from 'next/link';

const index = () => {
  interface Tab {
    'personal-information': JSX.Element;
    history: JSX.Element;
    addresses: JSX.Element;
    rewards: JSX.Element;
    wallet: JSX.Element;
    [key: string]: JSX.Element;
  }
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  useScreenSize();
  const [displayMenuBox, setDisplayMenuBox] = useState(true);
  const [activeTab, setActiveTab] = useState(
    typeof window !== 'undefined' && window.innerWidth > 641
      ? 'personal-information'
      : ''
  );

  const [tabs, setTabs] = useState<Tab>({
    'personal-information': <PersonalInformation />,
    history: <HistoryCard />,
    addresses: <Addresses />,
    rewards: <Rewards />,
    wallet: <WalletTab />,
    feedback: <Feedback />,
  });

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const dispatch = useAppDispatch();
  const { topUpSelected, topUpDetails } = useAppSelector(
    (state) => state.walletTopUp
  );

  return (
    <>
      {windowSize > 641 ? (
        <div className="pt-[10rem] sm:pl-[6.875rem] sm:pb-[4.0625rem]">
          {!topUpSelected ? (
            <main className="sm:flex sm:flex-row sm:gap-[6.25rem] sm:justify-start sm:items-start">
              <section>
                <h1
                  style={{
                    color: colors.greenDeep,
                    fontFamily: FONTFAMILY.normal,
                  }}
                  className="sm:text-[3rem] sm:leading-[3.9375rem] sm:font-bold sm:mb-[2.5rem]"
                >
                  Profile
                </h1>
                <div className={styles.menuBox}>
                  <span
                    className={`${styles.tabs} ${
                      activeTab === 'personal-information'
                        ? `${styles.active} bg-[#f5f5f7]`
                        : ''
                    }  `}
                    onClick={() => handleTabClick('personal-information')}
                  >
                    <Profile />
                    <h6
                      style={{
                        fontFamily:
                          activeTab === 'personal-information'
                            ? FONTFAMILY.bold
                            : FONTFAMILY.normal,
                      }}
                    >
                      Personal Information
                    </h6>
                  </span>
                  <span
                    className={`${styles.tabs} ${
                      activeTab === 'history'
                        ? `${styles.active} bg-[#f5f5f7]`
                        : ''
                    }`}
                    onClick={() => handleTabClick('history')}
                  >
                    <History />
                    <h6
                      style={{
                        fontFamily:
                          activeTab === 'history'
                            ? FONTFAMILY.bold
                            : FONTFAMILY.normal,
                      }}
                    >
                      History
                    </h6>
                  </span>
                  <span
                    className={`${styles.tabs} ${
                      activeTab === 'addresses'
                        ? `${styles.active} bg-[#f5f5f7]`
                        : ''
                    }`}
                    onClick={() => handleTabClick('addresses')}
                  >
                    <Address />
                    <h6
                      style={{
                        fontFamily:
                          activeTab === 'addresses'
                            ? FONTFAMILY.bold
                            : FONTFAMILY.normal,
                      }}
                    >
                      Addresses
                    </h6>
                  </span>
                  <span
                    className={`${styles.tabs} ${
                      activeTab === 'rewards'
                        ? `${styles.active} bg-[#f5f5f7]`
                        : ''
                    }`}
                    onClick={() => handleTabClick('rewards')}
                  >
                    <Reward />
                    <h6
                      style={{
                        fontFamily:
                          activeTab === 'rewards'
                            ? FONTFAMILY.bold
                            : FONTFAMILY.normal,
                      }}
                    >
                      Rewards
                    </h6>
                  </span>
                  <span
                    className={`${styles.tabs} ${
                      activeTab === 'wallet'
                        ? `${styles.active} bg-[#f5f5f7]`
                        : ''
                    }`}
                    onClick={() => handleTabClick('wallet')}
                  >
                    <Wallet className="fill-[#4F4F4F] w-6 h-6" />
                    <h6
                      style={{
                        fontFamily:
                          activeTab === 'wallet'
                            ? FONTFAMILY.bold
                            : FONTFAMILY.normal,
                      }}
                    >
                      Wallet
                    </h6>
                  </span>
                  <span
                    className={`${styles.tabs} ${
                      activeTab === 'feedback'
                        ? `${styles.active} bg-[#f5f5f7]`
                        : ''
                    }`}
                    onClick={() => handleTabClick('feedback')}
                  >
                    <Rating />
                    <h6
                      style={{
                        fontFamily:
                          activeTab === 'feedback'
                            ? FONTFAMILY.bold
                            : FONTFAMILY.normal,
                      }}
                    >
                      Feedback & Ratings
                    </h6>
                  </span>
                  <Link
                    className={styles.tabs}
                    // onClick={() => '/pages/index'}
                    href={'/'}
                  >
                    <SignOut />
                    <h6
                      style={{
                        fontFamily: FONTFAMILY.normal,
                        color: colors.orange,
                      }}
                    >
                      Sign out
                    </h6>
                  </Link>
                </div>
              </section>
              <section>{tabs[activeTab]}</section>
            </main>
          ) : (
            <TopUp />
          )}
        </div>
      ) : (
        <div
          className="pt-[6.25rem] pl-[24px] pb-[82px]"
          style={{
            backgroundColor: colors.offWhite,
          }}
        >
          <h1
            style={{
              color: colors.greenDeep,
              fontFamily: FONTFAMILY.normal,
            }}
            className="text-[32px] leading-[42px] font-bold mb-[2.125rem] sm:text-[3rem] sm:leading-[3.9375rem] sm:mb-[2.5rem]"
            onClick={() => setDisplayMenuBox(true)}
          >
            Profile
          </h1>
          {displayMenuBox ? (
            <section>
              <div className={styles.menuBox}>
                <span
                  className={`${styles.tabs} ${
                    activeTab === 'personal-information'
                      ? `${styles.active} bg-[#f5f5f7]`
                      : ''
                  }  `}
                  onClick={() => {
                    handleTabClick('personal-information');
                    setDisplayMenuBox(false);
                  }}
                >
                  <Profile />
                  <h6
                    style={{
                      fontFamily:
                        activeTab === 'personal-information'
                          ? FONTFAMILY.bold
                          : FONTFAMILY.normal,
                    }}
                  >
                    Personal Information
                  </h6>
                </span>
                <span
                  className={`${styles.tabs} ${
                    activeTab === 'history'
                      ? `${styles.active} bg-[#f5f5f7]`
                      : ''
                  }`}
                  onClick={() => {
                    handleTabClick('history');
                    setDisplayMenuBox(false);
                  }}
                >
                  <History />
                  <h6
                    style={{
                      fontFamily:
                        activeTab === 'history'
                          ? FONTFAMILY.bold
                          : FONTFAMILY.normal,
                    }}
                  >
                    History
                  </h6>
                </span>
                <span
                  className={`${styles.tabs} ${
                    activeTab === 'addresses'
                      ? `${styles.active} bg-[#f5f5f7]`
                      : ''
                  }`}
                  onClick={() => {
                    handleTabClick('addresses');
                    setDisplayMenuBox(false);
                  }}
                >
                  <Address />
                  <h6
                    style={{
                      fontFamily:
                        activeTab === 'addresses'
                          ? FONTFAMILY.bold
                          : FONTFAMILY.normal,
                    }}
                  >
                    Addresses
                  </h6>
                </span>
                <span
                  className={`${styles.tabs} ${
                    activeTab === 'rewards'
                      ? `${styles.active} bg-[#f5f5f7]`
                      : ''
                  }`}
                  onClick={() => {
                    handleTabClick('rewards');
                    setDisplayMenuBox(false);
                  }}
                >
                  <Reward />
                  <h6
                    style={{
                      fontFamily:
                        activeTab === 'rewards'
                          ? FONTFAMILY.bold
                          : FONTFAMILY.normal,
                    }}
                  >
                    Rewards
                  </h6>
                </span>
                <span
                  className={`${styles.tabs} ${
                    activeTab === 'wallet'
                      ? `${styles.active} bg-[#f5f5f7]`
                      : ''
                  }`}
                  onClick={() => {
                    handleTabClick('wallet');
                    setDisplayMenuBox(false);
                  }}
                >
                  <Wallet className="fill-[#4F4F4F] w-6 h-6" />
                  <h6
                    style={{
                      fontFamily:
                        activeTab === 'wallet'
                          ? FONTFAMILY.bold
                          : FONTFAMILY.normal,
                    }}
                  >
                    Wallet
                  </h6>
                </span>
                <span
                  className={`${styles.tabs} ${
                    activeTab === 'feedback'
                      ? `${styles.active} bg-[#f5f5f7]`
                      : ''
                  }`}
                  onClick={() => {
                    handleTabClick('feedback');
                    setDisplayMenuBox(false);
                  }}
                >
                  <Rating />
                  <h6
                    style={{
                      fontFamily:
                        activeTab === 'feedback'
                          ? FONTFAMILY.bold
                          : FONTFAMILY.normal,
                    }}
                  >
                    Feedback & Ratings
                  </h6>
                </span>
                <Link
                  className={styles.tabs}
                  // onClick={() => '/pages/index'}
                  href={'/'}
                >
                  <SignOut />
                  <h6
                    style={{
                      fontFamily: FONTFAMILY.normal,
                      color: colors.orange,
                    }}
                  >
                    Sign out
                  </h6>
                </Link>
              </div>
            </section>
          ) : (
            <section>{tabs[activeTab]}</section>
          )}
        </div>
      )}
    </>
  );
};

export default index;
