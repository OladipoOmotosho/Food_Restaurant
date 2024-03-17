import { CartIcon, ProfileIcon } from '../../assets';
import {
  colors,
  firstlinks,
  FONTFAMILY,
  formatMoney,
  secLinks,
} from '../../utils';
import styles from '../../styles/Navbar.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Modal } from '@mui/material';
import Cart from './components/cart';
import { useAppSelector } from '../../state/hooks';
import MenuIcon from './assets/svg/menuIcon.svg';
import CustomText from '../CustomText';
import MobileMenu from './components/mobileMenu';

const NavBar = () => {
  const router = useRouter();
  const { windowSize } = useAppSelector((state) => state.screensize);
  const [openMenu, setOpenMenu] = useState(false);

  const style: any = {
    position: 'relative',
    top: windowSize > 641 ? '50%' : '0%',
    right: windowSize > 641 ? '0' : '0%',
    transform: windowSize > 641 && 'translate(65%, -50%)',
  };

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      {!openMenu && (
        <div
          className={`md:py-[40px] pt-[27px] pb-[20px] pl-[27px] pr-[26.34px] md:pl-[80px] flex justify-between 
      items-center absolute md:top-0 right-0 left-0 ${
        openMenu && 'fixed z-50 top-0 right-0 left-0  bg-white'
      }`}
        >
          {windowSize > 641 ? (
            <div className="flex items-center">
              {firstlinks.map((nav, index) => (
                <Link href={nav.link} key={index} className="px-[30px]">
                  <p
                    className={`${
                      router.pathname === nav.link
                        ? 'text-[#EA5B31]'
                        : router.pathname === '/catering' ||
                          router.pathname === '/' ||
                          router.pathname === '/giftCards' ||
                          router.pathname === '/mealPlans'
                        ? 'text-white'
                        : 'text-[#01100D]'
                    } ${styles.navLink}`}
                  >
                    {nav.text}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div onClick={() => setOpenMenu(!openMenu)}>
              <MenuIcon
                className={` ${
                  router.pathname === '/catering' ||
                  router.pathname === '/' ||
                  router.pathname === '/giftCards' ||
                  router.pathname === '/mealPlans'
                    ? 'fill-white'
                    : 'fill-[#01100D]'
                }`}
              />
            </div>
          )}
          <div className="flex items-center gap-[28.76px] md:gap-[64.5px] md:pr-[64.5px]">
            {secLinks.map((nav, index) => (
              <Link href={nav.link} key={index} className="">
                {nav.text === 'profile' ? (
                  <ProfileIcon
                    className={`${
                      router.pathname === nav.link
                        ? 'fill-[#EA5B31]'
                        : router.pathname === '/catering' ||
                          router.pathname === '/' ||
                          router.pathname === '/giftCards' ||
                          router.pathname === '/mealPlans'
                        ? 'fill-white'
                        : 'fill-[#01100D]'
                    } ${styles.navLink}`}
                  />
                ) : nav.text === 'cart' ? (
                  <div onClick={() => setShowCart(true)}>
                    <CartIcon
                      className={` ${
                        router.pathname === '/catering' ||
                        router.pathname === '/' ||
                        router.pathname === '/giftCards' ||
                        router.pathname === '/mealPlans'
                          ? 'fill-white'
                          : 'fill-[#01100D]'
                      }`}
                    />
                  </div>
                ) : (
                  windowSize > 641 && (
                    <p
                      className={`${
                        router.pathname === nav.link
                          ? 'text-[#EA5B31]'
                          : router.pathname === '/catering' ||
                            router.pathname === '/' ||
                            router.pathname === '/giftCards' ||
                            router.pathname === '/mealPlans'
                          ? 'text-white'
                          : 'text-[#01100D]'
                      } ${styles.navLink}`}
                    >
                      {nav.text}
                    </p>
                  )
                )}
              </Link>
            ))}
          </div>
          <Modal
            open={showCart}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div style={style}>
              <Cart setShowCart={setShowCart} />
            </div>
          </Modal>
        </div>
      )}
      <Modal
        open={openMenu}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <MobileMenu
            setOpenMenu={setOpenMenu}
            openMenu={openMenu}
            setShowCart={setShowCart}
          />
        </div>
      </Modal>
    </>
  );
};

export default NavBar;
