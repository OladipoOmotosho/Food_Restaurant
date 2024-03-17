import React from 'react';
import { FONTFAMILY, colors } from '../../../../../utils';

const DeliveryStatus = ({ icon, state, lines, time }: any) => {
  return (
    <>
      <div className="flex flex-col">
        <span className="flex flex-row gap-2 items-start">
          <span>{icon}</span>
          <span
            className="text-[1rem] leading-[1.375rem] font-semibold"
            style={{ color: colors.gray2, fontFamily: FONTFAMILY.normal }}
          >
            {state}
            <h6
              className="text-[0.75rem] leading-[1rem] font-normal"
              style={{ color: colors.gray7, fontFamily: FONTFAMILY.normal }}
            >
              {time}
            </h6>
          </span>
        </span>
        <span className="pl-[0.6875rem] mt-[-12px] ">{lines}</span>
      </div>
    </>
  );
};

export default DeliveryStatus;
