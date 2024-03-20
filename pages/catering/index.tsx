import React from 'react';
import Image from 'next/image';
import cateringBg from '../../assets/images/cateringBg.png';
import cateringMobileBg from '../../assets/images/cateringMobileBg.png';
import utensils from '../../assets/images/utensils.png';
import { colors, FONTFAMILY } from '../../utils';
import styles from '../catering/styles/index.module.css';
import fries from '../../assets/images/fries.png';
import jollofRice from '../../assets/images/jollofRice.png';
import dishlocal from '../../assets/images/dishlocal.png';
import menuBgImg from '../../assets/images/menuBgImg.png';
import profileImgs from '../../assets/images/profileImgs.png';
import { MailBox, Next, PhoneLine, Previous } from '../../assets';
import useScreenSize from '../../hooks/useScreenSize';
import CarouselOriginalComponent from '../../components/carouselComponent/CarouselOrignalComponent';
import { useAppSelector } from '../../state/hooks';
const Catering = ({ Img }: Testimonials) => {
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  useScreenSize();

  const gallery = [
    {
      Img: fries,
    },
    {
      Img: jollofRice,
    },
    {
      Img: dishlocal,
    },
  ];

  const reviews = [
    {
      ratings: null,
      testimonies:
        ' Lorem ipsum dolor sit amet consectetur. Mattis lacus id in at integer ridiculus at. Bibendum in scelerisque pulvinar tellus interdum viverra. Egestas quam adipiscing est accumsan diam. Gravidalacus ultricies pellentesque suspendisse elementum sed mauris ut nascetur. Pharetra ultricies libero morbi amet. Potenti magna lorem tristique nibh enim aliquet ipsum varius. In tellus vitae sodales eu. Id',
      src: 'Instagram',
      profile: profileImgs,
      profileName: 'May Kounty1',
    },
    {
      ratings: 2,
      testimonies:
        ' Lorem ipsum dolor sit amet consectetur. Mattis lacus id in at integer ridiculus at. Bibendum in scelerisque pulvinar tellus interdum viverra. Egestas quam adipiscing est accumsan diam. Gravidalacus ultricies pellentesque suspendisse elementum sed mauris ut nascetur. Pharetra ultricies libero morbi amet. Potenti magna lorem tristique nibh enim aliquet ipsum varius. In tellus vitae sodales eu. Id',
      src: 'Playstore',
      profile: profileImgs,
      profileName: 'May Kounty2',
    },
    {
      ratings: 5,
      testimonies:
        ' Lorem ipsum dolor sit amet consectetur. Mattis lacus id in at integer ridiculus at. Bibendum in scelerisque pulvinar tellus interdum viverra. Egestas quam adipiscing est accumsan diam. Gravidalacus ultricies pellentesque suspendisse elementum sed mauris ut nascetur. Pharetra ultricies libero morbi amet. Potenti magna lorem tristique nibh enim aliquet ipsum varius. In tellus vitae sodales eu. Id',
      src: 'Playstore',
      profile: profileImgs,
      profileName: 'May Kounty3',
    },
    {
      ratings: 4,
      testimonies:
        ' Lorem ipsum dolor sit amet consectetur. Mattis lacus id in at integer ridiculus at. Bibendum in scelerisque pulvinar tellus interdum viverra. Egestas quam adipiscing est accumsan diam. Gravidalacus ultricies pellentesque suspendisse elementum sed mauris ut nascetur. Pharetra ultricies libero morbi amet. Potenti magna lorem tristique nibh enim aliquet ipsum varius. In tellus vitae sodales eu. Id',
      src: 'Playstore',
      profile: profileImgs,
      profileName: 'May Kounty3',
    },
    {
      ratings: 3.5,
      testimonies:
        ' Lorem ipsum dolor sit amet consectetur. Mattis lacus id in at integer ridiculus at. Bibendum in scelerisque pulvinar tellus interdum viverra. Egestas quam adipiscing est accumsan diam. Gravidalacus ultricies pellentesque suspendisse elementum sed mauris ut nascetur. Pharetra ultricies libero morbi amet. Potenti magna lorem tristique nibh enim aliquet ipsum varius. In tellus vitae sodales eu. Id',
      src: 'Playstore',
      profile: profileImgs,
      profileName: 'May Kounty3',
    },
    {
      ratings: 4,
      testimonies:
        ' Lorem ipsum dolor sit amet consectetur. Mattis lacus id in at integer ridiculus at. Bibendum in scelerisque pulvinar tellus interdum viverra. Egestas quam adipiscing est accumsan diam. Gravidalacus ultricies pellentesque suspendisse elementum sed mauris ut nascetur. Pharetra ultricies libero morbi amet. Potenti magna lorem tristique nibh enim aliquet ipsum varius. In tellus vitae sodales eu. Id',
      src: 'Playstore',
      profile: profileImgs,
      profileName: 'May Kounty4',
    },
    {
      ratings: null,
      testimonies:
        ' Lorem ipsum dolor sit amet consectetur. Mattis lacus id in at integer ridiculus at. Bibendum in scelerisque pulvinar tellus interdum viverra. Egestas quam adipiscing est accumsan diam. Gravidalacus ultricies pellentesque suspendisse elementum sed mauris ut nascetur. Pharetra ultricies libero morbi amet. Potenti magna lorem tristique nibh enim aliquet ipsum varius. In tellus vitae sodales eu. Id',
      src: 'Instagram',
      profile: profileImgs,
      profileName: 'May Kounty5',
    },
  ];

  return (
    <>
      <main style={{ backgroundColor: colors.offWhite }}>
        <Image
          src={cateringBg}
          alt="img"
          className={`${styles.heroSectionContainer} hidden sm:block sm:h-[31.5625rem]`}
        />
        <div className="mr-[-0.9375rem]">
          <Image
            src={cateringMobileBg}
            alt="img"
            // width={windowSize < 641 ? 400 : windowFit}
            className={`${styles.heroSectionContainer} block sm:hidden`}
          />
        </div>
        <section
          className={`${styles.catchPhrase} sm:flex sm:flex-col sm:items-center sm:gap-[1rem] absolute sm:absolute top-[13.875rem] sm:top-[12.5rem] bottom-0 right-0 left-0 sm:bottom-0 sm:right-0 sm:left-0 sm:pr-[5rem]`}
        >
          <span
            className={
              '-mt-[4.875rem] text-[1.75rem] sm:text-[3.375rem] sm:leading-[4.5625rem] uppercase sm:uppercase sm:text-center sm:w-[46rem] px-[2.375rem] leading-[3rem] text-center'
            }
            style={{ color: colors.offWhite, fontFamily: FONTFAMILY.bold }}
          >
            Let’s{' '}
            <span style={{ color: colors.orange, fontFamily: FONTFAMILY.bold }}>
              cater
            </span>{' '}
            your event in style
          </span>
          <h6
            className={
              'text-[0.875rem] font-normal sm:text-[1rem] leading-[1.3125rem]'
            }
            style={{ color: colors.white, fontFamily: FONTFAMILY.normal }}
          >
            Make your next event unforgettable
          </h6>
          <button
            style={{
              backgroundColor: colors.orange,
              fontFamily: FONTFAMILY.normal,
              color: colors.white,
            }}
            className={`${styles.btn} sm:text-[1rem] sm:leading-[1.5rem] sm:tracking-[0.0125rem] font-semibold `}
          >
            Inquire Now
          </button>
        </section>
        <section
          className={
            'flex flex-col-reverse sm:flex sm:flex-row sm:justify-evenly sm:items-center gap-[2.5rem] sm:gap-[6.625rem] px-[2.0625rem] py-[2.125rem] sm:px-[6.25rem] sm:py-[120px]'
          }
        >
          <div>
            <h1
              className={
                'sm:text-[2.25rem] font-bold sm:leading-[3rem] capitalize '
              }
              style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.bold }}
            >
              Experience Kounty catering
            </h1>
            <p
              className={
                'sm:text-[1.5rem] sm:leading-[2.25rem] font-normal sm:w-[40.3125rem] sm:pt-[0.625rem]'
              }
              style={{ color: colors.gray1, fontFamily: FONTFAMILY.normal }}
            >
              Our top priority is ensuring that the catering experience for your
              event is as seamless as possible. From our initial consultation,
              we take the time to truly understand your unique vision and goals
              for the event. We then work collaboratively with you to bring that
              vision to life.
            </p>
            <p
              className={
                'sm:text-[1.5rem] sm:leading-[2.25rem] font-normal sm:w-[40.3125rem] pt-[1.75rem] sm:pt-[1.75rem]'
              }
              style={{ color: colors.gray1, fontFamily: FONTFAMILY.normal }}
            >
              Our team is highly skilled at designing custom menus that cater to
              a variety of occasions, including weddings, corporate events,
              social gatherings, and more. Whether you are hosting a corporate
              dinner or a reunion, we have the expertise and resources to
              provide delicious and visually appealing food that will impress
              your guests and exceed your expectations.
            </p>
          </div>
          <div>
            <Image
              src={utensils}
              alt=""
              className={'sm:w-[31.1875rem] sm:min-w-[444px] h-auto'}
            />
          </div>
        </section>
        <section
          className={'px-[2.0625rem] pt-[2.875rem] pb-[5rem] sm:px-[6.375rem]'}
        >
          <h1
            className={
              'sm:text-[2.25rem] sm:leading-[3rem] text-left capitalize font-bold mb-[3.75rem] sm:mb-[3.75rem]'
            }
            style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.bold }}
          >
            Gallery
          </h1>
          <div
            className={
              'flex flex-col gap-[1.5rem] sm:flex sm:flex-row sm:justify-between sm:gap-[1.5rem] sm:pb-[7.5rem]'
            }
          >
            {gallery.map((slide, index) => (
              <div key={index}>
                <Image src={slide.Img} alt="image" width={500} height={500} />
              </div>
            ))}
          </div>
        </section>
        <section
          className={'px-[2.0625rem] sm:mx-[5.55rem] rounded-sm sm:pb-[6.5rem]'}
        >
          <div
            className={`${styles.bgImg} `}
            style={{
              backgroundImage: `url(${menuBgImg.src})`,
            }}
          >
            {/* <Image src={menuBgImg} alt="background image"/> */}
            <div className={`${styles.viewMenu}`}>
              {/* <span> */}
              <h3
                className={
                  'sm:text-[2.25rem] sm:leading-[2.9925rem] font-bold text-center sm:w-[33.8125rem]'
                }
                style={{
                  color: colors.white,
                  fontFamily: FONTFAMILY.bold,
                  opacity: '1',
                }}
              >
                We’ve got entertaining options for you
              </h3>
              <button
                style={{
                  backgroundColor: colors.orange,
                  fontFamily: FONTFAMILY.normal,
                  color: colors.white,
                  opacity: '1',
                }}
                className={`${styles.btn} sm:text-[1rem] sm:leading-[1.5rem] sm:tracking-[0.0125rem] font-semibold `}
              >
                View more
              </button>
              {/* </span> */}
            </div>
          </div>
        </section>

        <section className="flex flex-col items-start sm:items-center px-[1rem] pb-[6.25rem] sm:pb-[6.25rem]">
          <span className="pl-[0.625rem] pr-[0.625rem] flex flex-col gap-[.5rem] sm:flex sm:flex-col sm:gap-[2.5rem]">
            <CarouselOriginalComponent
              content={reviews}
              type={'reviews'}
              itemsCountPerPage={windowSize < 641 ? 1 : 3}
              title={'Why our clients love us!'}
              subTitle={null}
              prevIcon={<Previous className={styles.prevButton} />}
              nextIcon={<Next className={styles.nextButton} />}
            />
          </span>
        </section>
        <div
          className={
            'flex flex-col items-center justify-items-center pb-[5.8125rem] px-[2.0625rem] gap-3 sm:flex sm:flex-col sm:items-center sm:justify-items-center'
          }
        >
          <h1
            className="text-[1rem] sm:text-[1.5rem] text-center sm:text-center sm:leading-[2rem] font-semibold"
            style={{ fontFamily: FONTFAMILY.normal, color: colors.greenDeep }}
          >
            Drop us a quick email or call and we’ll get straight back to you.
          </h1>
          <span
            className={
              'flex flex-row justify-center gap-[1rem] sm:flex sm:flex-row sm:justify-center sm:gap-[1rem] sm:items-center sm:mt-[2.5rem]'
            }
          >
            <span>
              <PhoneLine className="stroke-[#01100D]" />
            </span>
            <span
              className="text-[1rem] text:start sm:text-center font-medium leading-[1.375rem]"
              style={{ color: colors.gray1 }}
            >
              +234 800 0000 000
            </span>
          </span>
          <span
            className={
              'flex flex-row justify-center gap-[1rem] sm:flex sm:flex-row sm:justify-center sm:gap-[1rem] sm:items-center sm:mt-[1.6875rem] sm:mb-[2.625rem]'
            }
          >
            <span>
              <MailBox />
            </span>
            <span
              className="text-[1rem] text:start sm:text-center font-medium leading-[1.375rem] "
              style={{ color: colors.gray1 }}
            >
              Kounty@gmail.com
            </span>
          </span>
        </div>
      </main>
    </>
  );
};

export default Catering;
