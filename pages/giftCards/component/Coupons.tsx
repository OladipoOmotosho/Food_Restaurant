import { useState } from 'react';
import { GiftIcon } from '../../../assets';
import { FONTFAMILY } from '../../../utils';
import styles from '../styles/giftcard.module.css';
import { useAppSelector } from '../../../state/hooks';

const Coupons = ({ text }: any) => {
  const [chooseCard, setChooseCard] = useState(false);
  const { giftCardStart, giftCardSelected, giftCardPurchased } = useAppSelector(
    (state) => state.giftCard
  );
  function selectedCard() {
    giftCardStart;
  }

  return (
    <div className={styles.couponBox}>
      <span>
        <GiftIcon className={styles.giftIcon} />
      </span>
      <span>
        <h5 id={styles.text} style={{ fontFamily: FONTFAMILY.normal }}>
          {text}
        </h5>
      </span>
    </div>
  );
};

export default Coupons;
