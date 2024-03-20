import { useAppSelector } from '../../state/hooks/Index';
import CustomText from '../CustomText';

const Details = () => {
  const { details } = useAppSelector((state) => state.checkout);
  return (
    <div className="mt-[16px] px-[24px]">
      <CustomText
        text={details.firstName}
        weight={400}
        className="text-[#4F4F4F] text-[20px] mb-[5px]"
      />
      <CustomText
        text={details.lastName}
        weight={400}
        className="text-[#4F4F4F] text-[20px] mb-[5px]"
      />
      <CustomText
        text={details.address}
        weight={400}
        className="text-[#4F4F4F] text-[20px] mb-[5px]"
      />
      {details.info && (
        <CustomText
          text={details.info}
          weight={400}
          className="text-[#4F4F4F] text-[20px]"
        />
      )}
    </div>
  );
};

export default Details;
