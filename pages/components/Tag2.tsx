import styles from '.././styles/index.module.css';
import { PeopleIcon } from '../../assets';
import { colors } from '../../utils';
const Tag2 = ({}) => {
  return (
    <>
      <div
        className={`${styles.tag} sm:w-[11.0925rem] sm:h-[3.5606rem] py-[0.3894rem] px-[11.6896px] bg-[#065143] sm:rounded-[0.6847rem] rounded-[0.3652rem] flex items-center justify-start gap-[0.7306rem]`}
      >
        <span className="">
          <PeopleIcon />
        </span>
        <span className={`${styles.ordersDelivered}`}>
          <h4 style={{ color: colors.white }}>Total Customers</h4>
          <h1 style={{ color: colors.white }}>600+</h1>
        </span>
      </div>
    </>
  );
};

export default Tag2;
