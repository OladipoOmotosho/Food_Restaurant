import styles from '.././styles/index.module.css';
import { ClipboardLine } from '../../assets';
const Tag = ({}) => {
  return (
    <>
      <div
        className={`${styles.tag} sm:w-[11.0925rem] sm:h-[3.5606rem] py-[0.3894rem] px-[11.6896px] bg-[#e0e0e0] sm:rounded-[0.6847rem] rounded-[0.3652rem] flex items-center justify-start gap-[0.7306rem]`}
      >
        <span className="">
          <ClipboardLine />
        </span>
        <span className={`${styles.ordersDelivered}`}>
          <h4>Orders Delivered</h4>
          <h1>2000+</h1>
        </span>
      </div>
    </>
  );
};

export default Tag;
