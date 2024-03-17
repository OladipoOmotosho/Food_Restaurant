import { useState } from 'react';
import Link from 'next/link';
import { CustomButton, CustomTextInput } from '../../../../components';
import { colors, FONTFAMILY } from '../../../../utils';
import {
  setWindowHeight,
  setWindowSize,
} from '../../../../state/slices/screensize';
import { useAppSelector } from '../../../../state/hooks';

const WelcomeBack = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);

  return (
    <div>
      <section
        style={{ display: 'flex', flexDirection: 'column', gap: '1.875rem' }}
      >
        <h1
          style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
          className={'text-[2rem] leading-[2.625rem]'}
        >
          Welcome back!
        </h1>
        <CustomTextInput
          width={windowSize > 641 ? windowFit : 464}
          placeholder={'Enter your mail'}
          label={'Email'}
          type="email"
          value={email}
          setValue={setEmail}
        />
        <CustomTextInput
          width={windowSize > 641 ? windowFit : 464}
          placeholder={'Enter your password'}
          label={'Password'}
          type="password"
          value={password}
          setValue={setPassword}
        />
        {/* <Link href="/auth/"> */}
        {/* <CustomButton
          text="Continue"
          disabled={email === '' || password === ''}
        /> */}
        {/* </Link> */}
      </section>
    </div>
  );
};

export default WelcomeBack;
