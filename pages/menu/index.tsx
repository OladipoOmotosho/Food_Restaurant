import MenuLayout from './components/menuLayout';
import SideBar from './components/sideBar';
import MenuPicture from './assets/svg/menuMain.svg';
import { CustomButton, CustomModal, CustomText } from '../../components';
import Search from './assets/svg/Search.svg';
import Modal from './components/modal';
import { createRef, useState } from 'react';
import { menu } from '../../utils';
import { useAppSelector } from '../../state/hooks';
import SmallMenuPicture from './assets/images/smallMenuImage.png';
import Image from 'next/image';
import useScreenSize from '../../hooks/useScreenSize';

const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState({
    id: '',
    image: '',
    name: '',
    quantity: 0,
    price: 0,
  });
  const [search, setSearch] = useState('');
  const { windowSize } = useAppSelector((state) => state.screensize);

  const refs = menu.reduce((acc: any, value) => {
    acc[value.name] = createRef<any>();
    return acc;
  }, {});

  useScreenSize();

  return (
    <>
      {windowSize! < 641 && (
        <div className="flex justify-center mt-[24px]">
          <div className="w-[327px] mt-[84px] flex bg-[#E0E0E0] gap-[7.12px] px-[19.25px] py-[7.33px]">
            <Search />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full ml-[16.9px] bg-[#E0E0E0] text-[16px] font-normal text-[#BDBDBD]"
            />
          </div>
        </div>
      )}
      <div className="pt-[32px] md:pt-[0px]">
        {windowSize! < 641 ? (
          <Image
            src={SmallMenuPicture}
            alt="Menu Picture"
            width={windowSize}
            height={147}
            layout="responsive"
          />
        ) : (
          <MenuPicture />
        )}
      </div>
      {windowSize! > 641 && (
        <div className="mt-[40px] mb-[60px] flex justify-center">
          <div className="flex">
            <div className="w-[464px] py-[14.25px] px-[26.5px] rounded-[20px] mr-[24px] border border-[#BDBDBD] flex">
              <Search />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for specific foods"
                className="w-full ml-[16.9px] bg-inherit text-[16px] font-normal text-[#BDBDBD]"
              />
            </div>
            <CustomButton
              text="Search"
              disabled={search === ''}
              width={166}
              textWeight={600}
            />
          </div>
        </div>
      )}
      <div className="md:flex md:px-[80px] md:mt-[0px] mt-[38px] px-[24px] w-full md:h-screen">
        <div className="md:basis-60 md:h-full h-[48px]">
          <SideBar refs={refs} />
        </div>
        {menu && (
          <div className="mb-[300px] w-full md:mt-[0px] mt-[32px]">
            <MenuLayout
              refs={refs}
              setShowModal={setShowModal}
              setSelectedMenu={setSelectedMenu}
            />
          </div>
        )}
      </div>
      {showModal && (
        <CustomModal show={showModal}>
          <Modal setShowModal={setShowModal} selectedMenu={selectedMenu} />
        </CustomModal>
      )}
    </>
  );
};

export default Menu;
