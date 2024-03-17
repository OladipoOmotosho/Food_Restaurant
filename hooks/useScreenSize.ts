import { useEffect } from 'react';
import { useAppDispatch } from '../state/hooks';
import { setWindowHeight, setWindowSize } from '../state/slices/screensize';

export default function useScreenSize() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setWindowSize(window?.outerWidth));
    dispatch(setWindowHeight(window?.outerHeight));
    // console.log(window?.outerWidth);
    // Add event listener to detect changes in the window size
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    dispatch(setWindowSize(window?.outerWidth));
    dispatch(setWindowHeight(window?.outerHeight));
    // console.log(window?.outerWidth);
  };
}
