import styles from '../styles/carousel.module.css';
import Image from 'next/image';
import { colors, FONTFAMILY } from '../../../utils';
import { useEffect } from 'react';
import {
  Facebook,
  Google,
  Instagram,
  PlayStoreIcon,
  Quotes,
} from '../../../assets';
import Rating from '@mui/material/Rating';
const CarouselCard = ({
  content,
  type,
  quotes,
  className,
  profile,
}: Testimonials) => {
  function renderReview() {
    const { src, ratings, profileName, Testimonies } = content;

    function renderSrc() {
      switch (src) {
        case 'Instagram':
          return (
            <div>
              <Instagram />
            </div>
          );
        case 'Playstore':
          return (
            <div>
              <PlayStoreIcon />
            </div>
          );
        case 'Google':
          return (
            <div>
              <Google />
            </div>
          );
        case 'Facebook':
          return (
            <div>
              <Facebook />
            </div>
          );
        default:
          return null;
      }
    }
    return (
      <div className="flex flex-col items-start gap-[10px] sm:flex sm:flex-col sm:gap-[10px]">
        <div
          className={`${styles.testimonials} ${className} `}
          style={{ background: colors.white }}
        >
          <span className={`${styles.insideElements} ${className}`}>
            {quotes}
            <span>
              <p
                className={`${styles.reviewMsg} ${className} text-[0.5201rem] sm:text-[10.8512px] font-normal leading-[0.75rem] sm:leading-[1rem] w-[14.0437rem] sm:w-[18.3119rem] h-[5.25rem] sm:h-[7rem]`}
                style={{ color: colors.gray3, fontFamily: FONTFAMILY.normal }}
              >
                {ratings !== null && (
                  <Rating
                    name="read-only"
                    value={ratings}
                    readOnly
                    size="small"
                    sx={{
                      '& .MuiRating-iconFilled': {
                        color: '#EA5B31',
                      },
                    }}
                  />
                )}
                {Testimonies}
              </p>
            </span>
          </span>
          <span
            className={` ${className} flex flex-row justify-end sm:flex sm:flex-row sm:justify-end sm:mt-[-3.6px]`}
          >
            {renderSrc()}
          </span>
        </div>
        <div
          className={`${className} flex flex-row items-center justify-start gap-4`}
        >
          <Image src={profile} alt="profile image" />
          <h4
            className={`${className} text-[1.0021rem] leading-[1.5rem] font-semibold`}
            style={{ fontFamily: FONTFAMILY.bold, color: colors.orange }}
          >
            {profileName}
          </h4>
        </div>
      </div>
    );
  }

  function renderPicture() {
    return <div>Hello</div>;
  }
  return <>{type === 'reviews' ? renderReview() : renderPicture()}</>;
};

export default CarouselCard;
