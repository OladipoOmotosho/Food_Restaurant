import { useEffect, useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import { colors, FONTFAMILY } from '../../../../utils';
import { CustomButton, CustomTextInput } from '../../../../components';
import useScreenSize from '../../../../hooks/useScreenSize';

const GetStarted = () => {
  const router = useRouter();
  const route = router;
  const [email, setEmail] = useState('');
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);

  function handleClick() {
    route.replace('/auth/login/WelcomeBack');
  }

  return (
    <div>
      <section
        style={{ display: 'flex', flexDirection: 'column', gap: '1.875rem' }}
      >
        <h1
          style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
          className={'text-[2rem] leading-[2.625rem] mt-[1rem]'}
        >
          Get started
        </h1>
        <h5
          style={{ color: colors.gray2, fontFamily: FONTFAMILY.normal }}
          className={'text-[1rem] leading-[1.31rem] ot-[1.8125rem] ob-[2rem]'}
        >
          Type your email to GetStarted or create your Kounty account
        </h5>
        <CustomTextInput
          placeholder={'Enter your mail'}
          label={'Email'}
          type="email"
          value={email}
          setValue={setEmail}
          width={windowSize > 641 ? windowFit : 464}
        />
        {/* <CustomButton
          text="Continue"
          disabled={email === ''}
          width={windowSize < 641 ? windowFit : 464}
          textWeight={600}
          onClick={handleClick}
        /> */}
      </section>
    </div>
  );
};

export default GetStarted;
