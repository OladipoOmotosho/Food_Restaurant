import { colors, FONTFAMILY } from '../../../utils';
import styles from '../styles/giftcard.module.css';
const DropDownFaqs = ({ question, dropDownIcon }: any) => {
  return (
    <div className={styles.faqs}>
      <h3 style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.normal }}>
        {question}
      </h3>
      <span className="cursor-pointer">{dropDownIcon}</span>
    </div>
  );
};

export default DropDownFaqs;
