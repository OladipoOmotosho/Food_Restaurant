import { colors, formatMoney } from '../../../utils';
import CustomText from '../../CustomText';
import Subtract from '../assets/svg/cartSubtract.svg';
import Add from '../assets/svg/cartAdd.svg';
import Delete from '../assets/svg/Delete.svg';
import { CartIcon, CloseIcon } from '../../../assets';
import CustomButton from '../../CustomButton';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeFromCart,
} from '../../../state/slices/cart';
import { toast } from 'react-toastify';

interface ICartProps {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart = ({ setShowCart }: ICartProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { windowSize, windowFit, height } = useAppSelector(
    (state) => state.screensize
  );
  const { items, total } = useAppSelector((state) => state.cart);

  return (
    <div
      style={{
        width: windowSize < 660 ? windowSize : 435,
        height: windowSize < 660 ? height : 600,
      }}
      className="bg-white px-[29px] md:px-[32px] rounded-t-sm overflow-y-hidden overflow-y-scroll"
    >
      <div className="flex gap-[21.64px] py-[20px] mb-[8px] -mx-[29px] md:-mx-[32px] px-[29px] md:px-[32px] border-b items-center md:bg-white bg-[#F5F5F7]">
        <div onClick={() => setShowCart(false)} className="cursor-pointer">
          <CloseIcon />
        </div>
        <CustomText text="Cart" weight={700} className="text-[24px]" />
      </div>
      <div>
        {items.map((item, index) => {
          const { id, name, price, quantity } = item;
          return (
            <div
              key={index}
              className="pt-[24px] md:-mx-[32px] md:px-[32px] pb-[15px] border-b border-[#CDDCD9] flex justify-between"
            >
              <div className="flex gap-[16px]">
                <div className="md:w-[75px] w-[60px] h-[53.68px] md:h-[67.04px] border"></div>
                <div className="flex flex-col justify-between">
                  <CustomText
                    text={name}
                    weight={400}
                    className="text-[16px] text-[#01100D]"
                  />
                  <div className="flex gap-[12px]">
                    <div
                      onClick={() => {
                        toast(`Removed ${name} from cart`, {
                          autoClose: 1000,
                        });
                        dispatch(decrementItemQuantity(id));
                      }}
                    >
                      <Subtract />
                    </div>
                    <CustomText
                      text={`${quantity}`}
                      weight={700}
                      className="text-[14px] text-[#4F4F4F]"
                    />
                    <div
                      onClick={() => {
                        toast(`Increased ${name} by 1`, {
                          autoClose: 1000,
                        });
                        dispatch(incrementItemQuantity(id));
                      }}
                    >
                      <Add />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <CustomText text={formatMoney(`${price}`)} weight={600} />
                <div
                  className="flex justify-end"
                  onClick={() => {
                    toast(`Removed ${name} from cart`, {
                      autoClose: 1000,
                    });
                    dispatch(removeFromCart(id));
                  }}
                >
                  <Delete />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {items.length > 0 ? (
        <div className="flex justify-between items-center pt-[32px] pb-[40px]">
          <CustomText
            text="Subtotal (including tax)"
            weight={400}
            className="text-[16px]"
          />
          <CustomText
            text={formatMoney(`${total}`)}
            weight={600}
            className="text-[16px]"
          />
        </div>
      ) : (
        <div className="flex justify-center pt-[32px] pb-[40px]">
          <div>
            <CartIcon />
            <CustomText
              text="Cart is Empty"
              weight={400}
              className="text-[16px] mt-[10px]"
              color={'#065143'}
            />
          </div>
        </div>
      )}
      {items.length > 0 && (
        <div>
          <CustomButton
            text={`Checkout ${formatMoney(`${total}`)} `}
            disabled={total === 0}
            width={windowSize < 641 ? windowFit : 371}
            textWeight={600}
            onClick={() => {
              setShowCart(false);
              router.push('/checkout');
            }}
          />
        </div>
      )}
      <div
        className="my-[24px] flex justify-center cursor-pointer"
        onClick={() => setShowCart(false)}
      >
        <CustomText
          text="Continue shopping"
          weight={400}
          color={colors.green}
          className="text-[14px]"
        />
      </div>
    </div>
  );
};

export default Cart;
