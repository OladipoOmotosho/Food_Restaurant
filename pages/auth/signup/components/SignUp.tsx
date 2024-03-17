import { CustomButton, CustomTextInput } from '../../../../components';
import { colors, FONTFAMILY } from '../../../../utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../state/hooks';
import { setWindowHeight, setWindowSize } from '../../../../state/slices/screensize';

const SignUp = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setWindowSize(window?.outerWidth));
    dispatch(setWindowHeight(window?.outerHeight));
  }, []);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <div>
      <section
        style={{ display: 'flex', flexDirection: 'column', gap: '1.875rem' }}
      >
        <h1
          style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
          className={'text-[2rem] leading-[2.625rem]'}
        >
          Create your account
        </h1>
        <CustomTextInput
          placeholder={'Enter your mail'}
          label={'Email'}
          type="email"
          value={email}
          setValue={setEmail}
          width={464}
        />
        <CustomTextInput
          placeholder={'Enter your password'}
          label={'Password'}
          type="password"
          value={password}
          setValue={setPassword}
          width={464}
        />
        <CustomTextInput
          placeholder={'Enter your password'}
          label={'Confirm Password'}
          type="password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          width={464}
        />
        <Link href="/auth/">
          <CustomButton
            text="Continue"
            disabled={email === '' || password === '' || confirmPassword === ''}
            width={464}
          />
        </Link>
      </section>
    </div>
  );
};

export default SignUp;
