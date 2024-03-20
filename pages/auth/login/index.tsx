import Image from 'next/image';
import { CloseLine } from '../../../assets';
import loginImage from '../../../assets/images/loginImage.png';
import { colors, FONTFAMILY } from '../../../utils';
import { useRouter } from 'next/router';
import GetStarted from './components/GetStarted';
import WelcomeBack from './components/WelcomeBack';
import { useEffect, useState } from 'react';
import { CustomButton, CustomTextInput } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../state/hooks/Index';
import UseScreenSize from '../../../hooks/UseScreenSize';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [page, setPage] = useState(true);
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);

  UseScreenSize();

  function handleClick() {
    setPage(false);
  }

  return (
    <div className={''} style={{ backgroundColor: colors.offWhite }}>
      <div className={'sm:hidden block pl-[1.5rem] pt-[9.5rem]'}>
        <CloseLine />
      </div>
      <main
        className={
          'flex flex-col sm:flex-row items-center justify-items-center sm:flex sm:justify-between  sm:items-center sm:px-[6.25rem] px-[6.25rem] pt-[1.5rem] pb-[1.5475rem] sm:pt-[8.75rem] sm:pb-[1.8562rem]'
        }
      >
        <div className={'w-[10.875rem] sm:w-[41.6875rem] h-auto'}>
          <Image src={loginImage} alt="image" />
        </div>
        <div className="flex flex-col gap-[1.875rem] sm:flex sm:flex-col sm:gap-[1.875rem]">
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.875rem',
            }}
          >
            <h1
              style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
              className={'text-[2rem] leading-[2.625rem] mt-[1rem]'}
            >
              {page ? ' Get started' : '   Welcome back!'}
            </h1>
            <h5
              style={{ color: colors.gray2, fontFamily: FONTFAMILY.normal }}
              className={
                'text-[1rem] leading-[1.31rem] ot-[1.8125rem] ob-[2rem]'
              }
            >
              {page
                ? 'Type your email to GetStarted or create your Kounty account'
                : ''}
            </h5>
            <CustomTextInput
              placeholder={'Enter your mail'}
              label={'Email'}
              type="email"
              value={email}
              setValue={setEmail}
              width={windowSize < 641 ? windowFit : 464}
            />

            {!page ? (
              <CustomTextInput
                width={windowSize < 641 ? windowFit : 464}
                placeholder={'Enter your password'}
                label={'Password'}
                type="password"
                value={password}
                setValue={setPassword}
              />
            ) : null}
          </section>
          <div>
            <CustomButton
              text="Continue"
              disabled={email === ''}
              width={windowSize < 641 ? windowFit : 464}
              textWeight={600}
              onClick={handleClick}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
