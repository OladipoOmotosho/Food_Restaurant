import styles from './styles/index.module.css';
import Image from 'next/image';
import heroBg from '../assets/images/heroBg.png';
import heroMobileBg from '../assets/images/heroMobileBg.png';
import foodImg from '../assets/images/foodImg.png';
import userScrolling from '../assets/images/userScrolling.png';
import appleStore from '../assets/images/appleStore.png';
import androidStore from '../assets/images/androidStore.png';
import Tag from './components/Tag';
import Tag2 from './components/Tag2';
import Options from './components/Options';
import eatNow from '../assets/images/eatNow.png';
import mealPlan from '../assets/images/mealPlan.png';
import catering from '../assets/images/catering.png';
import giftCards from '../assets/images/giftCards.png';
import profileImgs from '../assets/images/profileImgs.png';
import whatsApp from '../assets/images/whatsApp.png';
import Link from 'next/link';
import { useAppSelector } from '../state/hooks';
import { colors, FONTFAMILY } from '../utils';
import { useRouter } from 'next/router';
import CustomSearchBar from '../components/searchBar/CustomSearchBar';
import Menu from '../utils/dummyData';
import CarouselOriginalComponent from '../components/carouselComponent/CarouselOrignalComponent';
import useScreenSize from '../hooks/useScreenSize';
import { Next, Previous } from '../assets';

const Auth = () => {
  useScreenSize();

  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);

  const router = useRouter();

  const options = [
    {
      Title: 'Eat Now',
      Caption: 'Good food delivered in 49 minutes',
      Img: eatNow,
    },
    {
      Title: 'Meal Plans',
      Caption: 'Personalized meals delivered everyday',
      Img: mealPlan,
    },
    {
      Title: 'Catering',
      Caption: 'Catering & food vending for events',
      Img: catering,
    },
    {
      Title: 'Gift Cards',
      Caption: 'Give the happiest gift ever',
      Img: giftCards,
    },
  ];

  const reviews = [
    {
      ratings: 3,
      Testimonies:
        'orem ipsum dolor sit amet consectetur. Mattis lacus id in at integer ridiculus at. Bibendum in scelerisque pulvinar tellus interdum viverra. Egestas quam adipiscing est accumsan diam. Gravida lacus ultricies pellentesque suspendisse elementum sed mauris ut nascetur. Pharetra ultricies libero morbi amet. Potenti magna lorem tristique nibh enim aliquet ipsum varius. In tellus vitae sodales eu. Id ',
      src: 'Instagram',
      profile: profileImgs,
      profileName: 'Joseph A.',
      // Testimonies: 'hello',
    },
    {
      ratings: 2,
      Testimonies:
        ' Lorem ipsum dolor sit amet consectetur. Mattis lacus id in at integer ridiculus at. Bibendum in scelerisque pulvinar tellus interdum viverra. Egestas quam adipiscing est accumsan diam. Gravidalacus ultricies pellentesque suspendisse elementum sed mauris ut nascetur. Pharetra ultricies libero morbi amet. Potenti magna lorem tristique nibh enim aliquet ipsum varius. In tellus vitae sodales eu. Id',
      src: 'Playstore',
      profile: profileImgs,
      profileName: 'Joseph & Deborah',
    },
    {
      ratings: 6,
      Testimonies:
        ' Lorem ipsum dolor sit amet consectetur. Mattis lacus id in at integer ridiculus at. Bibendum in scelerisque pulvinar tellus interdum viverra. Egestas quam adipiscing est accumsan diam. Gravidalacus ultricies pellentesque suspendisse elementum sed mauris ut nascetur. Pharetra ultricies libero morbi amet. Potenti magna lorem tristique nibh enim aliquet ipsum varius. In tellus vitae sodales eu. Id',
      src: 'Google',
      profile: profileImgs,
      profileName: 'May Kounty3',
    },
    {
      ratings: null,
      Testimonies:
        ' Lorem ipsum dolor sit amet consectetur. Mattis lacus id in at integer ridiculus at. Bibendum in scelerisque pulvinar tellus interdum viverra. Egestas quam adipiscing est accumsan diam. Gravidalacus ultricies pellentesque suspendisse elementum sed mauris ut nascetur. Pharetra ultricies libero morbi amet. Potenti magna lorem tristique nibh enim aliquet ipsum varius. In tellus vitae sodales eu. Id',
      src: 'Facebook',
      profile: profileImgs,
      profileName: 'May Kounty4',
    },
    {
      ratings: null,
      Testimonies:
        ' Lorem ipsum dolor sit amet consectetur. Mattis lacus id in at integer ridiculus at. Bibendum in scelerisque pulvinar tellus interdum viverra. Egestas quam adipiscing est accumsan diam. Gravidalacus ultricies pellentesque suspendisse elementum sed mauris ut nascetur. Pharetra ultricies libero morbi amet. Potenti magna lorem tristique nibh enim aliquet ipsum varius. In tellus vitae sodales eu. Id',
      src: 'Instagram',
      profile: profileImgs,
      profileName: 'May Kounty5',
    },
  ];

  return (
    <div style={{ background: colors.offWhite }}>
      <main className={`${styles.heroSectionContainer} `}>
        <div className="sm:block hidden">
          <Image
            className={'sm:w-full sm:h-[43.75rem] h-[39.9375rem] w-auto'}
            src={heroBg}
            alt="background image hero section"
            priority
          />
        </div>

        <div className="sm:hidden block">
          <Image
            className={'sm:w-full sm:h-[45rem] h-[46.9375rem] w-auto'}
            src={heroMobileBg}
            alt="background image hero section"
            priority
          />
        </div>
        <div
          className={`${styles.catchPhrase} sm:absolute sm:top-[10.5rem] sm:bottom-0 sm:right-[40px] sm:left-0`}
        >
          <div className={styles.content}>
            <h3
              className={
                'w-[18.9375rem] sm:w-[44.125rem] text-[1.75rem] sm:text-[4rem] font-black leading-[2.375rem] sm:leading-[5.375rem]'
              }
              style={{ color: colors.white, fontFamily: FONTFAMILY.bold }}
            >
              We’ve got good food for YOU!
            </h3>
            <div className={styles.searchField}>
              <span className={`${styles.customSearchBar}`}>
                <CustomSearchBar
                  placeholder="What are you going to eat"
                  data={Menu}
                />
              </span>
              <div>
                <button
                  className={`${styles.button},${styles.bounceInTop} py-[0.75rem] px-[2rem] h-[3rem] w-[10.375rem] rounded-[1.25rem] text-[1rem] font-semibold leading-[1.5rem] tracking-wide`}
                  style={{
                    color: colors.white,
                    backgroundColor: colors.green,
                    fontFamily: FONTFAMILY.normal,
                  }}
                  type="submit"
                  onClick={() => router.push('/menu')}
                >
                  Browse Menu
                </button>
              </div>
            </div>
            <span
              className={
                'text-[0.875rem] w-[19.5625rem] sm:min-w-full sm:text-[1.25rem] leading-[1.5rem] font-normal -mt-[0.95rem] tracking-normal'
              }
              style={{ color: colors.white, fontFamily: FONTFAMILY.normal }}
            >
              <span
                className={
                  'text-[0.875rem] sm:text-[1.25rem] leading-[1.5rem] sm:tracking-wide font-bold '
                }
              >
                <Link href="/auth/login">Login/sign up</Link>
              </span>
              &nbsp; for a more personalized experience
            </span>
          </div>

          <div
            className={
              ' sm:pt-[0.875rem] mt-[-100px] sm:mt-[16px] sm:min-w-[23.125rem] '
            }
          >
            <Image src={foodImg} alt="food sample" />
            <div
              className={`${styles.fadeInRight} absolute top-[14.3125rem] right-[1.6656rem] sm:absolute sm:top-[8.955rem] sm:right-[0.4656rem]`}
            >
              <Tag />
            </div>
            <div
              className={`${styles.fadeInRight} absolute top-[17.875rem] right-[3.5656rem] sm:absolute sm:top-[14.375rem] sm:right-[3.0313rem]`}
            >
              <Tag2 />
            </div>
          </div>
        </div>
      </main>
      <div className={styles.optionSection}>
        {options.map((plan, index) => (
          <Options
            key={index}
            Title={plan.Title}
            Caption={plan.Caption}
            Img={plan.Img}
          />
        ))}
      </div>

      <section className={styles.lowerSectionContainer}>
        <div className={`${styles.handImgSection} sm:pt-[85px]`}>
          <Image
            src={userScrolling}
            alt="userScrolling"
            id={styles.userScrolling}
          />
        </div>
        <span className={styles.kountyExperience}>
          <h1>Enjoy the Kounty experience</h1>
          <p>
            Discover the finest we have to offer on the Kounty app. Download the
            app today to enjoy 10% off your first order.
          </p>
          <span className={styles.storeIcons}>
            <Image src={appleStore} alt="storeIcons" id={styles.storeIcons} />
            <Image src={androidStore} alt="storeIcons" id={styles.storeIcons} />
          </span>
        </span>
      </section>

      <section className="flex flex-col sm:items-center pb-[6.25rem] sm:pb-[6.25rem]">
        <CarouselOriginalComponent
          content={reviews}
          type={'reviews'}
          itemsCountPerPage={windowSize < 641 ? 1 : 3}
          title={'Testimonials'}
          subTitle={' Some of our customers had this to say about Kounty'}
          prevIcon={<Previous className={styles.prevButton} />}
          nextIcon={<Next className={styles.nextButton} />}
        />
      </section>
      <div className="flex flex-row justify-end sm:flex sm:flex-row sm:justify-end pr-[5rem] pb-[3.75rem]">
        <span
          className={`${styles.chatBot}`}
          style={{ backgroundColor: colors.orange }}
        >
          <Image src={whatsApp} alt="chatbot" />
        </span>
      </div>
    </div>
  );
};

export default Auth;
