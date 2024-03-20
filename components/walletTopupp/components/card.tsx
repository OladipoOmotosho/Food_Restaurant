import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../state/hooks/Index';
import { setOrderComplete } from '../../../state/slices/checkout';
import CustomButton from '../../CustomButton';
import CustomText from '../../CustomText';
import CustomTextInput from '../../CustomTextInput';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextFieldProps } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { FONTFAMILY, colors } from '../../../utils';

const Card = () => {
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  const [number, setNumber] = useState<number>();
  const [cvv, setCvv] = useState<number>();
  const [name, setName] = useState('');
  const [expire, setExpire] = useState('');
  const [value, setValue] = useState<Dayjs | null>(null);
  const dispatch = useAppDispatch();

  return (
    <div className="px-4 py-5">
      <CustomText
        text="Please enter your card details carefully below"
        weight={400}
        className="text-[16px] text-[#828282] mb-[32px]"
      />
      <div>
        <CustomTextInput
          placeholder="00000 0000 0000 0000"
          value={number!}
          setValue={setNumber}
          label="Card Number"
          className="mb-[24px]"
          width={windowSize < 641 ? windowFit - 32 : 464}
        />
        <div className="md:flex md:justify-between md:mb-[24px]">
          <CustomTextInput
            placeholder="Enter your last name"
            value={cvv!}
            setValue={setCvv}
            label="Cvv"
            className="mb-[24px] md:mb-[0px]"
            width={windowSize < 641 ? windowFit - 32 : 464 / 2}
          />

          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                  marginTop: '-5px',
                }}
              >
                Expiration date
              </label>

              <DatePicker
                className={
                  'max-w-[29rem] sm:max-w-[29rem] min-w-[12.5rem] sm:min-w-[12.5rem] '
                }
                // openTo="year"
                views={['month', 'year']}
                disablePast
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params: TextFieldProps) => (
                  <TextField {...params} />
                )}
                showDaysOutsideCurrentMonth
                InputProps={{
                  sx: {
                    '& .MuiSvgIcon-root': {
                      color: ' #F19276',
                    },
                    '& .MuiInputBase-input': {
                      color: '#828282',
                      fontSize: '14px',
                      height: '25px',
                    },
                  },
                }}
              />
            </div>
          </LocalizationProvider> */}

          <CustomTextInput
            placeholder="mm/yy"
            value={expire!}
            setValue={setExpire}
            label="Expiration date"
            className="mb-[24px] md:mb-[0px]"
            width={windowSize < 641 ? windowFit - 32 : 464 / 2}
          />
        </div>
        <CustomTextInput
          placeholder="Card holder name"
          value={name!}
          setValue={setName}
          label="Name on card"
          className="mb-[32px]"
          width={windowSize < 641 ? windowFit - 32 : 464}
        />
      </div>
      <div className="mt-[16px]">
        <CustomButton
          text="Save & Pay ₦20,820.00"
          textWeight={700}
          disabled={false}
          onClick={() => dispatch(setOrderComplete())}
          width={windowSize < 641 ? windowFit - 32 : 464}
        />
        {/* <CustomText
          text="Secured by PAYSTACK"
          weight={700}
          className="my-[24px] text-[16px] flex justify-center"
        /> */}
      </div>
    </div>
  );
};

export default Card;
