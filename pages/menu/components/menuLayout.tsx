import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import CustomText from '../../../components/CustomText';
import { colors, formatMoney, menu } from '../../../utils';
import { trendingMenu } from '../../../utils/dummyData';
import Add from '../assets/svg/Addtocart.svg';

const MenuLayout: React.FunctionComponent<IMenuLayoutProps> = ({
  refs,
  setShowModal,
  setSelectedMenu,
}) => {
  const router = useRouter();

  //   useEffect(() => {
  //     router.push('/');
  //   }, []);
  return (
    <>
      {trendingMenu?.map((item, index) => {
        const { name, food } = item;
        return (
          <div key={index} ref={refs && refs[name]}>
            <CustomText
              text={name}
              weight={700}
              color={colors.greenDeep}
              className="text-xl pb-[32px] cursor-pointer"
            />
            <div className="flex flex-wrap gap-[16px] md:gap-[26px] mb-[60px] w-full">
              {food?.map((food, index) => {
                const { id, name, price } = food;
                const quantity = { quantity: 1 };
                return (
                  <div
                    key={id}
                    onClick={() => {
                      const item = { ...food, ...quantity };
                      setSelectedMenu(item);
                      setShowModal(true);
                    }}
                  >
                    <div className="md:h-[153px] h-[130px] w-[155px] md:w-[185px] border rounded-xl relative">
                      <div className="absolute bottom-2 right-2 cursor-pointer">
                        <Add />
                      </div>
                    </div>
                    <CustomText
                      text={name}
                      weight={600}
                      color={colors.greenDeep}
                      className="text-[12px] md:text-[16px]"
                    />
                    <CustomText
                      text={formatMoney(`${price}`)}
                      weight={400}
                      color={colors.greenDeep}
                      className="text-sm md:mb-[0px] mb-[16px]"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="overflow-y-scroll overflow-y-hidden h-full w-full mb-[60px]">
        {menu?.map((item, index) => {
          const { name, food } = item;
          return (
            <div key={index} ref={refs && refs[name]}>
              <CustomText
                text={name}
                weight={700}
                color={colors.greenDeep}
                className="text-xl pb-[32px] cursor-pointer"
              />
              <div className="flex flex-wrap gap-[16px] md:gap-[26px] mb-[60px] w-full">
                {food?.map((food) => {
                  const { id, name, price } = food;
                  const quantity = { quantity: 1 };
                  return (
                    <div
                      key={id}
                      onClick={() => {
                        const item = { ...food, ...quantity };
                        setSelectedMenu(item);
                        setShowModal(true);
                      }}
                    >
                      <div className="md:h-[153px] h-[130px] w-[155px] md:w-[185px] border rounded-xl relative">
                        <div className="absolute bottom-2 right-2 cursor-pointer">
                          <Add />
                        </div>
                      </div>
                      <CustomText
                        text={name}
                        weight={600}
                        color={colors.greenDeep}
                        className="text-[12px] md:text-[16px]"
                      />
                      <CustomText
                        text={formatMoney(`${price}`)}
                        weight={400}
                        color={colors.greenDeep}
                        className="text-sm md:mb-[0px] mb-[16px]"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuLayout;
