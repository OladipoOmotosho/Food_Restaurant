import { CustomButton, CustomText } from '../../components';
import Accordion from './components/accordion';
import MenuPlansImage from './assets/svg/menuPlans.svg';

const AccordionData = [
  {
    header: 'How to eat',
    sub: 'blalablutlllee',
  },
  {
    header: 'Playing games around',
    sub: 'manufacturing and production of hhrhffrihhdiehded',
  },
  {
    header: 'Roasting corn',
    sub: 'Corn corn corn',
  },
];

const HowItWorks = (header: string, sub: string, image?: any) => {
  return (
    <div className="w-[350px]">
      <div className="flex justify-center">
        <div className="h-[350px] w-[350px] rounded-full border border-[#EA5B31]"></div>
      </div>
      <div className="">
        <CustomText
          text={header}
          weight={600}
          className="mt-[24px] mb-[16px] text-[24px] text-center"
        />
        <CustomText
          text={sub}
          weight={400}
          className="text-[16px] text-center"
        />
      </div>
    </div>
  );
};

const NewMenu = (header: string, image?: any) => {
  return (
    <div className="w-[343px]">
      <div className="h-[283px] w-[343px] rounded-[18.54px] border border-black"></div>
      <div className="">
        <CustomText
          text={header}
          weight={600}
          color="#01100D"
          className="mt-[11px] text-[29.66px]"
        />
      </div>
    </div>
  );
};

const MealPlans = () => {
  return (
    <div>
      <div className="h-[505px] bg-[#021B16] pl-[108px] pr-[93px] text-red-600 pt-[138px] mb-[120px] flex gap-[68px]">
        <div>
          <MenuPlansImage />
        </div>
        <div>
          <CustomText
            text="You select, we deliver"
            weight={700}
            color={'#FFFFFF'}
            className="text-[64px] mb-[20px]"
          />
          <CustomText
            text="Eating is a good habit and it’s one we’ll gladly indulge you in"
            weight={400}
            color={'#E0E0E0'}
            className="text-[20px] mb-[40px]"
          />
          <div className="flex gap-[40px]">
            <CustomButton
              text="Get Started"
              disabled={false}
              width={166}
              onClick={() => {}}
            />
            <button
              style={{
                borderRadius: 20,
                width: 166,
              }}
              className={`py-[12px] text-white flex justify-center items-center border border-[#EA5B31]`}
              onClick={() => null}
            >
              <CustomText
                text="Contact Us"
                weight={400}
                color={'#BDBDBD'}
                className="text-[16px]"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="px-[110px]">
        <CustomText
          text="How it works"
          color={'#065143'}
          weight={700}
          className="text-[48px] mb-[40px]"
        />
        <div className="flex justify-between mb-[120px]">
          {HowItWorks(
            'Pick your meals',
            'Choose your meals from our diverse weekly menu.'
          )}
          {HowItWorks(
            'We do the work',
            'Our team of chefs do the prep work – no more chopping, measuring, or sink full of dishes!'
          )}
          {HowItWorks(
            'Receive your food',
            'Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.'
          )}
        </div>
      </div>
      <div className="px-[110px] mb-[78px]">
        <div className="mb-[40px]">
          <CustomText
            text="New Menu Weekly"
            color={'#065143'}
            weight={700}
            className="text-[48px] mb-[24px]"
          />
          <CustomText
            text="Check out some items from the current menu"
            weight={400}
            color="#01100D"
            className="text-[24px] "
          />
        </div>
        <div className="flex justify-between">
          {NewMenu('Basmati Rice & Chicken Gravy')}
          {NewMenu('Basmati Rice & Chicken Gravy')}
          {NewMenu('Basmati Rice & Chicken Gravy')}
        </div>
        <div className="mt-[37.5px] flex justify-center">
          <CustomButton
            onClick={() => {}}
            text="Let’s get started"
            disabled={false}
            width={327}
          />
        </div>
      </div>
      <div className="px-[110px] pb-[120px]">
        <CustomText
          text="Frequently asked questions"
          color={'#000000'}
          weight={700}
          className="text-[40px] mb-[60px]"
        />
        <Accordion data={AccordionData} />
      </div>
    </div>
  );
};

export default MealPlans;
