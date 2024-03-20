import { useAppSelector } from '../state/hooks/Index';
import Footer from './Footer';
import NavBar from './Navbar';
// import localFont from '@next/font/local';

// const myFont = localFont({ src: '../assets/segoeUI/SegoeUI-Bold.ttf' });

export default function Layout({ children }: LayoutProps) {
  const { windowSize } = useAppSelector((state) => state.screensize);

  return (
    <div className={`${windowSize > 641 ? 'bg-[#F5F5F7]' : 'bg-white'}`}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
