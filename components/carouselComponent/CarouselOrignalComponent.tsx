import React, { useEffect, useState } from 'react';
import styles from './styles/carousel.module.css';
import CarouselCard from './component/CarouselCard';
import { Dots, Next, Previous, Quotes } from '../../assets';
import { colors, FONTFAMILY } from '../../utils';
import profileImgs from '../../assets/images/profileImgs.png';
const CarouselOriginalComponent = ({
  content,
  itemsCountPerPage,
  type,
  title,
  subTitle,
  className,
  prevIcon,
  nextIcon,
  profileName,
  navigationIcon,
  handlePrevFromProps,
  Testimonies,
  handleNextFromProps,
}: // handlePageClick,
any) => {
  const maxItemsCountPerPage = 3;
  const itemsCountPerPageToUse = Math.min(
    maxItemsCountPerPage,
    itemsCountPerPage
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disablePrevButton, setDisablePrevButton] = useState(false);
  const [visibleContent, setVisibleContent] = useState<[]>(
    content.slice(0, itemsCountPerPageToUse)
  );

  // A helper function to update the visible content
  const updateVisibleContent = (newIndex: number) => {
    setCurrentIndex(newIndex);
    setVisibleContent(
      content.slice(newIndex, newIndex + itemsCountPerPageToUse)
    );
  };

  const handleNext = () => {
    // Check if the current index plus itemsCountPerPage is equal to the length of the content array
    if (currentIndex + itemsCountPerPageToUse === content.length) {
      updateVisibleContent(0);
    } else if (currentIndex + itemsCountPerPageToUse < content.length) {
      updateVisibleContent(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      updateVisibleContent(currentIndex - 1);
    }
  };

  const handlePageClick = (newIndex: number) => {
    updateVisibleContent(newIndex);
  };

  // render pagination
  const pages = Math.ceil(content.length / itemsCountPerPageToUse);
  const pagination = [];
  for (let i = 0; i < pages; i++) {
    // check if the page number is the current page
    const isActive = i * itemsCountPerPageToUse === currentIndex;
    pagination.push(
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <button
          className={className}
          key={i}
          onClick={() => handlePageClick(i * itemsCountPerPageToUse)}
        >
          {/* {isActive ? <b>{i + 1}</b> : i + 1} */}
          {isActive ? (
            <Dots style={{ fill: '#ea5b31' }} />
          ) : (
            <Dots style={{ fill: '#828282' }} />
          )}
        </button>
      </div>
    );
  }

  //useeffect to disable and enable prevButton

  useEffect(() => {
    if (currentIndex === 0) {
      setDisablePrevButton(true);
    } else if (currentIndex > 0) {
      setDisablePrevButton(false);
    }
  }, [currentIndex]);

  console.log(currentIndex);
  if (type !== 'reviews' && type !== 'pictures') {
    return (
      <p className={className}>
        Invalid type Passed into the Component. Type can either be
        &apos;reviews&apos; or &apos;pictures
      </p>
    );
  }
  return (
    <div>
      <span className={`${className} pl-[1.5rem]`}>
        {title && (
          <h1
            className={`${
              subTitle ? ` mb-[0.75rem]` : `mb-[2.9375rem]`
            } ${className}  text-[2.5rem] text-start sm:text-center capitalize italic font-semibold`}
            style={{ fontFamily: FONTFAMILY.italic }}
          >
            {title}
          </h1>
        )}
        {subTitle && (
          <h6
            className={`${className} mb-[2.9375rem] text-[1rem] text:start sm:text-center font-medium leading-[1.3125rem]`}
            style={{ color: colors.gray1 }}
          >
            {subTitle}
          </h6>
        )}
      </span>
      <div
        className={`${styles.carouselItem} ${className} flex flex-row items-center justify-center gap-[0.3rem] sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-[1.5rem]`}
      >
        <div
          className={`${className} w-auto`}
          onClick={handlePrev}
          style={{
            opacity: disablePrevButton ? 0.5 : 1,
            pointerEvents: disablePrevButton ? 'none' : 'auto',
          }}
        >
          <>{prevIcon}</>
        </div>
        <div className={styles.content}>
          {visibleContent.map((content, index) => {
            return (
              <CarouselCard
                Img={null}
                type={type}
                content={content}
                key={index}
                quotes={<Quotes />}
                className={styles.className}
                profileName={profileName}
                Testimonies={Testimonies}
                profile={profileImgs}
              />
            );
          })}
        </div>
        <div className={`${className} w-fit`} onClick={handleNext}>
          {nextIcon}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '1.375rem',
        }}
      >
        {pagination}
      </div>
    </div>
  );
};

export default CarouselOriginalComponent;
