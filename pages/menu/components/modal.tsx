import { useState } from 'react';
import { toast } from 'react-toastify';
import { CloseIcon } from '../../../assets';
import { CustomButton, CustomText } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { addToCart } from '../../../state/slices/cart';
import { colors, formatMoney } from '../../../utils';
import Recommended from './recommended';

const items = [
  {
    name: 'Coke',
    amount: '2000',
  },
  {
    name: 'Fanta',
    amount: '500',
  },
  {
    name: 'Coke',
    amount: '200',
  },
];

const Modal = ({ setShowModal, selectedMenu }: IModalProps) => {
  const [note, setNote] = useState('');
  const dispatch = useAppDispatch();
  const { windowSize, windowFit, height } = useAppSelector(
    (state) => state.screensize
  );
  return (
    <div
      style={{
        width: windowSize < 660 ? windowSize : 650,
        height: windowSize < 660 ? height : 650,
      }}
      className="px-[24px] md:px-[40px] pt-[40px] md:rounded-[15px] overflow-y-scroll overflow-y-hidden bg-white"
    >
      <div onClick={() => setShowModal(false)} className="cursor-pointer">
        <CloseIcon />
      </div>
      <CustomText
        text={selectedMenu?.name}
        className="mt-[37.64px] mb-[24px] text-[24px] md:text-[28px]"
        weight={700}
      />
      <CustomText
        text="Steamed Basmati rice served with Vegetables, Egg, Chicken, Potatoes in chicken broth gravy"
        className="text-base md:text-lg md:w-[438px] tracking-[1px]"
        weight={400}
      />
      <div
        style={{
          width: windowSize < 641 ? windowFit : 570,
          height: windowSize < 641 ? 250 : 380,
        }}
        className="border my-[40px]"
      ></div>
      <CustomText
        text="Preferences"
        className="mb-[24px] text-2xl"
        weight={700}
      />
      <div className="h-[96px] md:h-[162px] bg-[#FCE9E4] rounded-[10px] mb-[41px]">
        <input
          type="text"
          placeholder="Add note(optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="py-[8px] px-[16px]"
          style={{ backgroundColor: '#FCE9E4' }}
        />
      </div>
      <div>
        <div className="flex justify-between items-center md:mb-[23px]">
          <CustomText text="Recommended Drinks" weight={700} />
          <div></div>
        </div>
        {items && (
          <div>
            <Recommended item={items} type="drinks" />
          </div>
        )}
      </div>
      <div>
        <div className="flex justify-between items-center md:mb-[23px] md:mt-[0px] mt-[24px]">
          <CustomText text="Recommended Sides" weight={700} />
          <div></div>
        </div>
        <div>
          {items && (
            <div className="mb-[19px]">
              <Recommended item={items} type="sides" />
            </div>
          )}
        </div>
      </div>
      <div className="md:-mx-[40px] border-t-2 shadow-inner border-[#FBDED6]">
        <div className="py-[26px] flex justify-end md:pr-[40px]">
          <CustomButton
            text={`Add to cart - ${formatMoney(`${selectedMenu?.price}`)}`}
            width={206}
            disabled={false}
            textWeight={600}
            onClick={() => {
              toast(`Added ${selectedMenu?.name} to cart`, {
                autoClose: 1000,
              });
              dispatch(addToCart(selectedMenu));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
