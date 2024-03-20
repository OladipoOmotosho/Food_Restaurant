import { CustomText } from '../../../components';
import { useAppSelector } from '../../../state/hooks/Index';
import { formatMoney } from '../../../utils';

const Summary = () => {
  const { deliverySet } = useAppSelector((state) => state.checkout);

  const { windowSize } = useAppSelector((state) => state.screensize);

  const summary = [
    {
      name: 'Subtotal',
      amount: '20000',
    },
    {
      name: 'Vat',
      amount: '20',
    },
    {
      name: 'Delivery',
      amount: '800',
    },
    {
      name: 'Discount',
      amount: '600',
    },
  ];
  return (
    <div style={{ width: windowSize < 641 ? windowSize - 48 : 464 }}>
      <CustomText
        text="Order Summary"
        weight={700}
        className="text-[24px] text-[#04362D] mb-[24px]"
      />
      <div className="mb-[8px] pb-[2px] border-b border-[#BDBDBD]">
        {summary.map((item, index) => {
          const { name, amount } = item;
          return (
            <div key={index} className="flex justify-between mb-[6px]">
              <CustomText
                text={name === 'Delivery' && !deliverySet ? '' : name}
                weight={400}
                className="text-[#4F4F4F] text-[20px]"
              />
              <CustomText
                text={
                  name === 'Discount'
                    ? `-${formatMoney(amount)}`
                    : name === 'Delivery' && !deliverySet
                    ? ''
                    : formatMoney(amount)
                }
                weight={400}
                className={`${
                  name === 'Discount' ? 'text-[#F19276]' : 'text-[#4F4F4F]'
                } text-[20px]`}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mb-[40px]">
        <CustomText
          text="Total"
          weight={700}
          className="text-[#4F4F4F] text-[20px]"
        />
        <CustomText
          text={formatMoney('20000')}
          weight={400}
          className="text-[#4F4F4F] text-[20px]"
        />
      </div>
      <div className="flex justify-center cursor-pointer md:pb-[0px] pb-[358px]">
        <CustomText
          text="Modify Cart"
          weight={700}
          className="text-[#EA5B31] text-[20px]"
        />
      </div>
    </div>
  );
};

export default Summary;
