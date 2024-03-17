import { FONTFAMILY } from '../../../../../utils';
import styles from './styles/components.module.css';
const HowItWorks = () => {
  return (
    <main
      className={styles.howItworks}
      style={{ fontFamily: FONTFAMILY.normal }}
    >
      <section>
        <h5 className={styles.subHead}>How you get coins:</h5>
        <ul className={styles.list}>
          <li> Welcome gift coins worth 10% of your first order amount.</li>
          <li>
            Earn coins worth 5% of your order amount every time you buy from us.
          </li>
          <li>Earn coins when you order ahead for delivery at a later date.</li>
          <li>
            Earn points from other activities (such as sharing experience on
            social media and earn points)..
          </li>
          <li> Free deliveries on orders above 5,000.</li>
          <li> Receive discounts on birthdays.</li>
        </ul>
        <h5 className={`${styles.subHead} mt-7`}>
          How to redeem coins gotten:
        </h5>
        <ul className={styles.list}>
          <li> Use your coins to get coupons for discount on your orders </li>
          <li> Order at least once in a month to keep points</li>
        </ul>
      </section>
    </main>
  );
};

export default HowItWorks;
