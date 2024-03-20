import React, { useEffect, useState } from 'react';
import { CustomButton, CustomTextInput } from '../../../../components';
import { colors, FONTFAMILY } from '../../../../utils';
import Link from 'next/link';
import {
  setWindowHeight,
  setWindowSize,
} from '../../../../state/slices/screensize';
import { useAppDispatch } from '../../../../state/hooks/Index';

const CreateAccount = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setWindowSize(window?.outerWidth));
    dispatch(setWindowHeight(window?.outerHeight));
  }, []);

  // const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <section
        style={{ display: 'flex', flexDirection: 'column', gap: '1.875rem' }}
      >
        <h1
          style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
          className={'text-[2rem] leading-[2.625rem]'}
        >
          Personal Information
        </h1>
        <h5
          style={{ color: colors.gray2, fontFamily: FONTFAMILY.normal }}
          className={'text-[1rem] leading-[1.31rem] ot-[1.8125rem] ob-[2rem]'}
        >
          Please fill in your details
        </h5>
        <CustomTextInput
          placeholder={'Enter your firstname'}
          label={'First Name'}
          type="name"
          value={name}
          setValue={setName}
          width={464}
        />
        <CustomTextInput
          placeholder={'Enter your lastname'}
          label={'Last Name'}
          type="name"
          value={lastName}
          setValue={setLastName}
          width={464}
        />
        <CustomTextInput
          placeholder={'Enter your phone number'}
          label={'Phone Number'}
          type="number"
          value={phoneNumber}
          setValue={setPhoneNumber}
          width={464}
        />
        <CustomTextInput
          placeholder={'dd/mm/yyyy'}
          label={'Birthday'}
          type="calendar"
          value={birthday}
          setValue={setBirthday}
          width={464}
        />
        <div className="form-group form-check">
          <input
            name="acceptTerms"
            type="checkbox"
            className="sm:w-[24px] sm:h-[auto] sm:bg-black border-slate-800"
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            Accept Terms & Conditions
          </label>
        </div>
        <Link href={'/auth/'}>
          <CustomButton
            text="Continue"
            disabled={
              name === '' ||
              lastName === '' ||
              phoneNumber === '' ||
              birthday === ''
            }
            width={464}
          />
        </Link>
      </section>
    </div>
  );
};

export default CreateAccount;
