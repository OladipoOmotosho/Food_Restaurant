import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BackLine } from '../../../assets';
import loginImage from '../../../assets/images/loginImage.png';
import { CustomButton, CustomTextInput } from '../../../components';
import UseScreenSize from '../../../hooks/UseScreenSize';
import { useAppDispatch, useAppSelector } from '../../../state/hooks/Index';
import { colors, FONTFAMILY } from '../../../utils';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextFieldProps } from '@mui/material';

const Register = () => {
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);

  const dispatch = useAppDispatch();
  UseScreenSize();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [page, setPage] = useState(true);
  const [value, setValue] = useState<Dayjs | null>(null);

  function handleClick() {
    setPage(false);
  }

  return (
    <div className={''} style={{ backgroundColor: colors.offWhite }}>
      <div className={'sm:hidden block pl-[1.5rem] pt-[9.5rem]'}>
        <BackLine />
      </div>
      <main
        className={
          'flex flex-col sm:flex-row items-center justify-items-center sm:flex sm:justify-between  sm:items-start sm:px-[6.25rem] px-[6.25rem] pt-[1.5rem] pb-[1.5475rem] sm:pt-[8.75rem] sm:pb-[1.8562rem]'
        }
      >
        <div className={'w-[10.875rem] sm:w-[41.6875rem] h-auto'}>
          <Image src={loginImage} alt="image" priority />
        </div>
        <div className="flex flex-col gap-[1.875rem] sm:flex sm:flex-col sm:gap-[1.875rem]">
          {page ? (
            <section
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.875rem',
              }}
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
                width={windowSize < 641 ? windowFit : 464}
              />
              <CustomTextInput
                placeholder={'Enter your password'}
                label={'Password'}
                type="password"
                value={password}
                setValue={setPassword}
                width={windowSize < 641 ? windowFit : 464}
              />
              <CustomTextInput
                placeholder={'Enter your password'}
                label={'Confirm Password'}
                type="password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                width={windowSize < 641 ? windowFit : 464}
              />
              <div className="flex flex-row items-center gap-2 sm:flex sm:flex-row sm:items-center sm:gap-2">
                <label style={{ maxWidth: '400px' }}>
                  By creating an account with us, you agree to our terms and
                  conditions.
                </label>
              </div>
            </section>
          ) : (
            <section
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.875rem',
              }}
            >
              <h1
                style={{ color: colors.green, fontFamily: FONTFAMILY.bold }}
                className={'text-[2rem] leading-[2.625rem]'}
              >
                Personal Information
              </h1>
              <h5
                style={{ color: colors.gray2, fontFamily: FONTFAMILY.normal }}
                className={
                  'text-[1rem] leading-[1.31rem] ot-[1.8125rem] ob-[2rem]'
                }
              >
                Please fill in your details
              </h5>
              <CustomTextInput
                placeholder={'Enter your firstname'}
                label={'First Name'}
                type="name"
                value={name}
                setValue={setName}
                width={windowSize < 641 ? windowFit : 464}
                className="bg-inherit"
              />
              <CustomTextInput
                placeholder={'Enter your lastname'}
                label={'Last Name'}
                type="name"
                value={lastName}
                setValue={setLastName}
                width={windowSize < 641 ? windowFit : 464}
              />
              <CustomTextInput
                placeholder={'Enter your phone number'}
                label={'Phone Number'}
                type="number"
                value={phoneNumber}
                setValue={setPhoneNumber}
                width={windowSize < 641 ? windowFit : 464}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1px',
                  }}
                >
                  <label
                    style={{
                      fontFamily: FONTFAMILY.normal,
                      fontWeight: '350',
                      lineHeight: '1.25rem',
                      color: colors.gray3,
                      fontSize: '14px',
                    }}
                  >
                    Birthday
                  </label>

                  <DatePicker
                    className=""
                    // label="dd/mm/yyyy"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params: TextFieldProps) => (
                      <TextField
                        {...params}
                        style={{ width: windowSize > 641 ? 464 : windowFit }}
                      />
                    )}
                    views={['day', 'year']}
                    showDaysOutsideCurrentMonth
                    InputProps={{
                      sx: {
                        '& .MuiSvgIcon-root': {
                          color: ' #F19276',
                        },
                        '& .MuiInputBase-input': {
                          color: '#828282',
                          fontSize: '14px',
                        },
                      },
                    }}
                  />
                </div>
              </LocalizationProvider>

              <div className="flex flex-row items-center gap-2 sm:flex sm:flex-row sm:items-center sm:gap-2">
                <label style={{ maxWidth: '400px' }}>
                  By creating an account with us, you agree to our terms and
                  conditions.
                </label>
              </div>
            </section>
          )}
          {page ? (
            <CustomButton
              text="Continue"
              disabled={
                email === '' || password === '' || confirmPassword === ''
              }
              width={windowSize < 641 ? windowFit : 464}
              onClick={handleClick}
            />
          ) : (
            <CustomButton
              text="Continue"
              disabled={
                name === '' ||
                lastName === '' ||
                phoneNumber === '' ||
                value == null
              }
              width={windowSize < 641 ? windowFit : 464}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Register;
