import Image from 'next/image';
import React from 'react';
import { CustomButton } from '../../components';
import cardsGiftPage from '../../assets/images/cardsGiftPage.png';
import { colors, FONTFAMILY } from '../../utils';
import useScreenSize from '../../hooks/useScreenSize';
import jollofRice2 from '../../assets/images/jollofRice2.png';
import mealPlan2 from '../../assets/images/mealPlan2.png';
import { AddWallet, DropDownIcon, Login, TapCard } from '../../assets';
import ReedemGiftCard from './component/ReedemGiftCard';
import DropDownFaqs from './component/DropDownFaqs';
import Link from 'next/link';

const Index = () => {
  useScreenSize();

  const reedemGiftCard = [
    {
      svg: <Login />,
      text: 'Log in to Kounty',
      description:
        'Download the kounty app or log on to the kounty website to create or login to your account.',
    },
    {
      svg: <TapCard />,
      text: 'Tap on gift cards',
      description:
        'Click on gift cards from the home page and tap on redeem gift card.',
    },
    {
      svg: <AddWallet />,
      text: 'Add to wallet',
      description:
        'Enter the code that sent or given to you and the amount associated with the card will be added to your wallet.',
    },
  ];

  const faqs = [
    {
      question: 'What is Kounty gift card?',
      dropDownIcon: <DropDownIcon className="w-6" />,
    },
    {
      question: 'How does Kounty gift card work?',
      dropDownIcon: <DropDownIcon className="w-6" />,
    },
    {
      question: 'Can i use the gift card outside of Kounty?',
      dropDownIcon: <DropDownIcon className="w-6" />,
    },
    {
      question: 'Does the gift card expire?',
      dropDownIcon: <DropDownIcon className="w-6" />,
    },
    {
      question: 'Can i customise the gift card?',
      dropDownIcon: <DropDownIcon className="w-6" />,
    },
  ];
  return (
    <div>
      <main>
        <section
          className={
            'pr-[1.5rem] pl-[1.5rem] pt-[3px] pb-[40px] flex flex-col-reverse items-center gap-[9px] justify-evenly sm:pr-[6.6875rem] sm:pl-[6.875rem] sm:pt-[4.5rem] sm:pb-[0.1875rem] sm:flex sm:flex-row sm:items-center sm:gap-[90px] sm:justify-evenly'
          }
          style={{ background: colors.green }}
        >
          <span className="flex flex-col sm:flex sm:flex-col sm:items-start">
            <h1
              className="text-[28px] leading-[38px] font-black w-[251px] mb-4 sm:text-[54px] sm:leading-[73px] sm:font-black sm:w-[494px] uppercase sm:mb-6"
              style={{ color: colors.offWhite, fontFamily: FONTFAMILY.bold }}
            >
              Give the gift of
              <span style={{ color: colors.orange }}> kounty</span> meals
            </h1>
            <p
              className="text-[1rem] leading-[1.3125rem] font-normal w-[20.4375rem] mb-10 sm:text-[20px] sm:leading-[26px] sm:font-normal sm:w-[595px] sm:mb-10"
              style={{ color: colors.gray6, fontFamily: FONTFAMILY.normal }}
            >
              Gift cards are an excellent way for businesses to thank their
              customers and reward their employees, as well as for individuals
              to wish a friend a happy birthday, and so on.
            </p>
            <span className="flex flex-col gap-6 items-center sm:flex sm:flex-row sm:gap-10 ">
              <Link href={'/giftCards/checkout'}>
                <CustomButton
                  text={'Buy gift card'}
                  disabled={false}
                  width={166}
                  paddingBottom={12}
                  paddingTop={12}
                  paddingLeft={32}
                  paddingRight={32}
                />
              </Link>
              <Link href={'/giftCards/redeemGift'}>
                <CustomButton
                  text={'Redeem gift '}
                  disabled={false}
                  width={166}
                  paddingBottom={12}
                  paddingTop={12}
                  paddingLeft={32}
                  paddingRight={32}
                  background={colors.green}
                  border={`2px solid ${colors.orange}`}
                />
              </Link>
            </span>
          </span>
          <div>
            <Image src={cardsGiftPage} alt={'img'} priority />
          </div>
        </section>
        <section
          className="px-[1.5rem] pt-[3.75rem] sm:py-[5rem] sm:pl-[6.875rem] sm:pr-[10.6875rem]"
          style={{ backgroundColor: colors.white }}
        >
          <h1
            className="mb-[2.5rem] font-bold text-[1.5rem] tracking-[0.0125rem] leading-[2rem] sm:mb-[3.75rem] sm:font-bold sm:text-[2.5rem] sm:tracking-[0.0125rem] sm:leading-[3.3125rem]"
            style={{ color: colors.black, fontFamily: FONTFAMILY.bold }}
          >
            Use it however you want
          </h1>
          <section className="flex flex-col gap-[1.4375rem] sm:flex sm:flex-row sm:justify-start sm:gap-[4.9375rem]">
            <div>
              <Image src={jollofRice2} alt={'img'} className="sm:mb-3 mb-3" />
              <h4
                className="text-[1rem] leading-[1.375rem] tracking-[0.04em] font-semibold w-[20.7294rem] sm:text-[1.75rem] sm:leading-[2.4375rem] sm:tracking-[0.04em] sm:font-semibold sm:w-[34.8275rem]"
                style={{ color: colors.gray2, fontFamily: FONTFAMILY.normal }}
              >
                Our gift cards can be used to pay for daily meals as you go
              </h4>
            </div>
            <div>
              <Image src={mealPlan2} alt={'img'} className="sm:mb-3 mb-3" />
              <h4
                className="text-[1rem] leading-[1.375rem] tracking-[0.04em] font-semibold w-[20.7294rem] sm:text-[1.75rem] sm:leading-[2.4375rem] sm:tracking-[0.04em] sm:font-semibold sm:w-[34.8275rem]"
                style={{ color: colors.gray2, fontFamily: FONTFAMILY.normal }}
              >
                Our gift cards can be used to purchase meal plans for yourself
                or others
              </h4>
            </div>
          </section>
          <section className="sm:flex sm:flex-col sm:gap-[2.5rem] mt-[3.75rem] sm:mt-[5rem]">
            <h1
              className="mb-[2.5rem] text-[1.5rem] font-bold leading-[2rem] tracking-[0.0125rem] sm:text-[2.5rem] sm:font-bold sm:leading-[3.3125rem] sm:tracking-[0.0125rem]"
              style={{ color: colors.black, fontFamily: FONTFAMILY.bold }}
            >
              How to redeem it
            </h1>
            <div className="flex flex-col items-start sm:flex sm:flex-row gap-4 sm:justify-start sm:gap-[12.5rem]">
              {reedemGiftCard.map((reedem, index) => (
                <ReedemGiftCard
                  key={index}
                  svg={reedem.svg}
                  text={reedem.text}
                  description={reedem.description}
                />
              ))}
            </div>
          </section>
          <section className="sm:mt-[5.4375rem] mt-[3.75rem]">
            <h1
              className="mb-[2.5rem] sm:mb-[3.75rem] text-[1.5rem] leading-[2rem] tracking-[0.0125rem] sm:text-[2.5rem] sm:leading-[3.3125rem] sm:tracking-[0.0125rem] sm:font-bold"
              style={{ color: colors.black, fontFamily: FONTFAMILY.bold }}
            >
              Frequently asked questions
            </h1>
            {faqs.map((faq, index) => (
              <DropDownFaqs
                key={index}
                question={faq.question}
                dropDownIcon={faq.dropDownIcon}
              />
            ))}
          </section>
        </section>
      </main>
    </div>
  );
};

export default Index;
