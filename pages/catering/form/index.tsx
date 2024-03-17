import Image from 'next/image';
import { CustomTextInput } from '../../../components';
import cutleryScarf from '../../../assets/images/cutleryScarf.png';
import { colors, FONTFAMILY } from '../../../utils';
import styles from '../styles/index.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { DropDown, MailBox, PhoneLine, Previous } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import {
  setWindowHeight,
  setWindowSize,
} from '../../../state/slices/screensize';
import DropDownSelect from '../../../components/select/DropdownSelect';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextFieldProps,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { red } from '@mui/material/colors';
import { ClassNames } from '@emotion/react';

const CateringForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [additionalInformation, setAdditionalInformation] = useState('');
  // const [showCalendar, setShowCalendar] = useState('');
  const [buttonInvalid, setButtonInvalid] = useState(false);
  const [eventType, setEventType] = useState('');
  const [venue, setVenue] = useState('');
  const [guestNo, setGuestNo] = useState('');
  const [value, setValue] = useState<Dayjs | null>(null);

  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setWindowSize(window?.outerWidth));
    dispatch(setWindowHeight(window?.outerHeight));
    // window.location.reload();
  }, []);

  useEffect(() => {
    if (
      firstName === '' ||
      lastName === '' ||
      phoneNumber === '' ||
      email === '' ||
      additionalInformation === '' ||
      eventType === '' ||
      venue === '' ||
      guestNo === '' ||
      value === null
    ) {
      setButtonInvalid(true);
    } else {
      setButtonInvalid(false);
    }
  }, [
    email,
    firstName,
    lastName,
    additionalInformation,
    phoneNumber,
    eventType,
    value,
    venue,
  ]);

  // const useStyles = makeStyles((theme: string) => ({
  //   input: {
  //     backgroundColor: 'green',
  //     color: 'red',
  //     '&:focus': { backgroundColor: 'yellow' },
  //   },
  // }));

  return (
    <div>
      <main
        className={
          'pl-[24px] pr-[2.125rem] sm:pl-[8.75rem] sm:pr-[7.5rem] pt-[3.125rem] sm:pt-[10rem]'
        }
        style={{ background: colors.offWhite }}
      >
        <div className="py-[1.875rem] ml-[-0.3125rem] block sm:hidden  ">
          <Previous className="fill-[#01100D]" />
        </div>
        <section className="flex flex-col items-start">
          <h1
            className={
              'text-[1.5rem] leading-[2rem] font-bold sm:text-[2.25rem] sm:leading-[3rem] sm:font-bold'
            }
            style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.bold }}
          >
            Tell us about your event
          </h1>
          <p
            className={
              'text-[0.875rem] leading-[1.1875rem] font-normal sm:text-[1.25rem] sm:leading-[1.6875rem] sm:font-normal sm:w-[64.8125rem] sm:pt-[1.0625rem] sm:pb-[2.6875rem]'
            }
            style={{ color: colors.gray2, fontFamily: FONTFAMILY.normal }}
          >
            We will contact you shortly to answer all of your questions and
            provide more information about our catering services. We can not
            wait to get started!
          </p>
        </section>
        <section
          className={
            'flex flex-col-reverse gap-[1.5rem] sm:flex sm:flex-row sm:justify-between 2xxl:justify-evenly  sm:gap-16'
          }
        >
          <div
            className={
              'mt-[-0.9375rem] flex flex-col gap-[1.5rem] sm:flex sm:flex-col sm:gap-6 sm:pb-[7.625rem]'
            }
          >
            <div
              className={
                'sm:ml-[-7.75rem] flex flex-col gap-[1.5rem] sm:flex sm:flex-row justify-center'
              }
            >
              <CustomTextInput
                width={windowSize < 641 ? windowFit : 220}
                placeholder={'Enter your first name'}
                label={'First name'}
                type="name"
                value={firstName}
                setValue={setFirstName}
              />
              <CustomTextInput
                width={windowSize < 641 ? windowFit : 220}
                placeholder={'Enter your last name'}
                label={'Last name'}
                type="name"
                value={lastName}
                setValue={setLastName}
              />
            </div>
            <div
              className={
                'flex flex-col gap-[1.5rem] sm:flex sm:flex-col sm:justify-evenly sm:gap-6 '
              }
            >
              <CustomTextInput
                width={windowSize < 641 ? windowFit : 464}
                placeholder={'Enter your mail'}
                label={'Email'}
                type="email"
                value={email}
                setValue={setEmail}
              />
              <CustomTextInput
                width={windowSize < 641 ? windowFit : 464}
                placeholder={'Enter your phone number'}
                label={'Phone Number'}
                type="number"
                value={phoneNumber}
                setValue={setPhoneNumber}
              />
              <label
                style={{
                  fontFamily: FONTFAMILY.normal,
                  fontWeight: '350',
                  lineHeight: '1.25rem',
                  color: colors.gray3,
                  fontSize: '14px',
                }}
              >
                Event Type
              </label>
              <FormControl
                classes="css-jo7zdq-MuiFormControl-root"
                sx={{
                  mt: -3,
                  // maxWidth: 464,
                  // minWidth: 343,
                  width: `{${windowSize} < 641 ? ${windowFit} : 464}`,
                }}
              >
                {/* <InputLabel>Agege</InputLabel> */}
                <Select
                  // aria-labelledby="moo"
                  // classes="css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <MenuItem value={'wedding'}>Wedding</MenuItem>
                  <MenuItem value={'birthday'}>Birthday</MenuItem>
                </Select>
              </FormControl>

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
                    Event Date
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
                          fontSize: '14px',
                          height: '25px',
                        },
                      },
                    }}
                  />
                </div>
              </LocalizationProvider>

              <CustomTextInput
                width={windowSize < 641 ? windowFit : 464}
                placeholder={'How many guests are you expecting?'}
                label={'Estimated Number of Guests'}
                type="number"
                value={guestNo}
                setValue={setGuestNo}
              />
              <CustomTextInput
                width={windowSize < 641 ? windowFit : 464}
                placeholder={'Where is the location & address of the venue'}
                label={'Proposed Venue'}
                type="text"
                value={venue}
                setValue={setVenue}
              />
              <CustomTextInput
                width={windowSize < 641 ? windowFit : 464}
                height={98}
                placeholder={''}
                label={'Additional information about your event'}
                type="text"
                value={additionalInformation}
                setValue={setAdditionalInformation}
              />
              <span
                className={
                  'flex flex-row justify-center pb-6 sm:flex sm:flex-row sm:justify-center sm:ml-[-10.9375rem]'
                }
              >
                <Link href="/auth/">
                  <button
                    className={`${styles.btn} sm:text-[1rem] sm:leading-[1.5rem] sm:tracking-[0.0125rem] font-semibold `}
                    style={{
                      backgroundColor: colors.orange,
                      fontFamily: FONTFAMILY.normal,
                      color: colors.white,
                      width: '10.375rem',
                      opacity: buttonInvalid ? 0.5 : 1,
                    }}
                    disabled={buttonInvalid ? true : false}
                  >
                    Submit
                  </button>
                </Link>
              </span>
            </div>
            <div className="hidden sm:flex flex-col justify-start sm:gap-7">
              <h1
                className="text-[1rem] sm:text-[1.5rem] text-center sm:text-center sm:leading-[2rem] font-semibold"
                style={{
                  fontFamily: FONTFAMILY.normal,
                  color: colors.greenDeep,
                }}
              >
                Drop us a quick email or call and we’ll get straight back to
                you.
              </h1>
              <span className="flex flex-row justify-start gap-4">
                <span>
                  <PhoneLine className="stroke-[#333333]" />
                </span>
                <span
                  className="text-[1rem] text:start sm:text-center font-medium leading-[1.375rem]"
                  style={{ color: colors.gray1 }}
                >
                  +234 800 0000 000
                </span>
              </span>
              <span className="flex flex-row justify-start gap-4">
                <span>
                  <MailBox />
                </span>
                <span
                  className="text-[1rem] text:start sm:text-center font-medium leading-[1.375rem] "
                  style={{ color: colors.gray1 }}
                >
                  Kounty@gmail.com
                </span>
              </span>
            </div>
          </div>

          <div
            className={
              'mt-[-1.25rem] mx-[3.1rem] flex flex-row justify-center sm:block w-[13.75rem] h-[19.3125rem] rotate-[-90deg] sm:rotate-[none] sm:w-[36.1875rem] sm:h-auto'
            }
          >
            <Image src={cutleryScarf} alt="img" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default CateringForm;
