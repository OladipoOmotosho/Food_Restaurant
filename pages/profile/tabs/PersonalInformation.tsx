import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { CustomButton, CustomTextInput } from '../../../components';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FONTFAMILY, colors } from '../../../utils';
import { TextField, TextFieldProps } from '@mui/material';
import { useState } from 'react';
import styles from '../styles/profile.module.css';
import { Dayjs } from 'dayjs';
import { useAppSelector } from '../../../state/hooks';
import { Profile, ProfileIcon } from '../../../assets';

const PersonalInformation = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [houseAddress, setHouseAddress] = useState('');
  const [value, setValue] = useState<Dayjs | null>(null);
  //   const [newValue, setNewValue] = useState();
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  return (
    <div>
      <span className="flex flex-row gap-3">
        <Profile className="sm:hidden" />
        <h1
          style={{
            color: windowSize > 641 ? colors.green3 : colors.gray2,
            fontFamily: windowSize > 641 ? FONTFAMILY.bold : FONTFAMILY.normal,
          }}
          className="text-[16px] leading-6 sm:font-bold sm:text-[1.25rem] sm:leading-[1.625rem] mb-[2rem] sm:mb-[2.875rem] sm:mt-[1.75rem] "
        >
          Personal Information
        </h1>
      </span>
      <main
        className={`${styles.personalDetailsBox}  flex flex-col gap-6  sm:gap-6 sm:pl-[2rem] sm:pr-[2.1875rem] sm:pt-[2rem] sm:pb-[1.6875rem]`}
      >
        <CustomTextInput
          placeholder={'First Name'}
          value={firstName}
          setValue={setFirstName}
          label={'First Name'}
        />
        <CustomTextInput
          placeholder={'Last Name'}
          value={lastName}
          setValue={setLastName}
          label={'Last Name'}
        />
        <CustomTextInput
          placeholder={'Phone Number'}
          value={phoneNumber}
          setValue={setPhoneNumber}
          label={'Phone Number'}
        />

        <CustomTextInput
          placeholder={'Email Address'}
          value={email}
          setValue={setEmail}
          label={'Email Address'}
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
                fontSize: '12px',
              }}
            >
              Birthday
            </label>

            <DatePicker
              // openTo="year"
              views={['year', 'month', 'day']}
              disablePast
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
              showDaysOutsideCurrentMonth
              InputProps={{
                sx: {
                  '& .MuiSvgIcon-root': {
                    color: ' #F19276',
                  },
                  '& .MuiInputBase-input': {
                    color: '#828282',
                    fontSize: '12px',
                    height: '25px',
                  },
                },
              }}
            />
          </div>
        </LocalizationProvider>

        <CustomTextInput
          placeholder={'House Address'}
          value={houseAddress}
          setValue={setHouseAddress}
          label={'House Address'}
        />

        <span className="flex flex-row justify-center -ml-5">
          <CustomButton
            text={'Save'}
            disabled={false}
            width={windowSize < 641 ? windowFit : 464}
          />
        </span>
      </main>
    </div>
  );
};

export default PersonalInformation;
