import { colors, FONTFAMILY } from '../../../utils';

const ReedemGiftCard = ({ svg, text, description }: any) => {
  return (
    <div className="sm:flex sm:flex-col sm:items-start">
      <div className="mb-[0.5rem] sm:mb-[0.5rem]">{svg}</div>
      <span>
        <h5
          className="text-[1rem] font-semibold leading-[1.3125rem] mb-[1rem] sm:mb-[1rem] sm:text-[1rem] sm:font-semibold sm:leading-[1.3125rem] "
          style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.bold }}
        >
          {text}
        </h5>
        <p
          className="text-[0.875rem] font-normal leading-[1.1875rem] w-[12.8125rem] sm:text-[0.875rem] sm:font-normal sm:leading-[1.1875rem] sm:w-[12.8125rem] "
          style={{ color: colors.gray2, fontFamily: FONTFAMILY.normal }}
        >
          {description}
        </p>
      </span>
    </div>
  );
};

export default ReedemGiftCard;
