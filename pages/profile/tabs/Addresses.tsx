import React, { useState } from 'react';
import { FONTFAMILY, colors } from '../../../utils';
import styles from '../styles/profile.module.css';
import {
  AddIcon,
  DustBinIcon,
  EditIcon,
  PrevArrow,
  Previous,
} from '../../../assets';
import { CustomButton, CustomTextInput } from '../../../components';
import { useAppSelector } from '../../../state/hooks';
import Checkbox from '../../../components/checkBox/CheckBox';

const Addresses = ({
  initials,
  customerName,
  address,
  number,
}: OrderDetails) => {
  const [location, setLocation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [additionalInformation, setAdditionalInformation] = useState('');

  const [addNewAddress, setAddNewAddress] = useState(false);

  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);

  const addressDetails = [
    {
      initials: 'JB',
      customerName: 'John Bull',
      address: 'No 3, adetoyese street, Orogun',
      number: '+23400000000',
    },
    {
      initials: 'JB',
      customerName: 'John Bull',
      address: 'No 3, adetoyese street, Orogun',
      number: '+23400000000',
    },
    {
      initials: 'JB',
      customerName: 'John Bull',
      address: 'No 3, adetoyese street, Orogun',
      number: '+23400000000',
    },
    {
      initials: 'JB',
      customerName: 'John Bull',
      address: 'No 3, adetoyese street, Orogun',
      number: '+23400000000',
    },
  ];

  return (
    <>
      <h1
        style={{ color: colors.green3, fontFamily: FONTFAMILY.bold }}
        className="sm:font-bold sm:text-[1.25rem] sm:leading-[1.625rem] sm:mb-[20px] sm:mt-[28px] "
      >
        {addNewAddress ? '' : 'Address'}
      </h1>
      {!addNewAddress ? (
        <>
          <span
            className="hidden sm:flex sm:flex-row sm:justify-end sm:gap-2 pb-1 cursor-pointer"
            onClick={() => setAddNewAddress(true)}
          >
            <AddIcon />
            <h5
              style={{ color: colors.orange, fontFamily: FONTFAMILY.normal }}
              className="sm:text-[1.25rem] sm:font-semibold sm:leading-5"
            >
              Add new
            </h5>
          </span>
          <main
            className={`${styles.addressContainer}  flex flex-col items-start gap-8 sm:px-[2rem] sm:py-[2rem]`}
          >
            {addressDetails.map((addressDetail, index) => (
              <section className={`${styles.addressBox} `}>
                <div className="flex flex-row justify-start gap-4 items-center sm:flex sm:flex-row sm:justify-start sm:gap-6 sm:items-center">
                  <h3
                    style={{
                      backgroundColor: colors.orange,
                      color: colors.offWhite,
                      fontFamily: FONTFAMILY.normal,
                    }}
                    className="w-[38px] p-2 rounded-[50%] text-center sm:text-[1.25rem] font-semibold sm:leading-5"
                  >
                    {addressDetail.initials}
                  </h3>
                  <span className="flex flex-col gap-1 sm:gap-4">
                    <h4
                      className="sm:text-[1.25rem] text-[1rem] sm:font-normal font-bold leading-5"
                      style={{
                        color: colors.greenDeep,
                        fontFamily: FONTFAMILY.normal,
                      }}
                    >
                      {addressDetail.customerName}
                    </h4>
                    <h5
                      className="sm:text-[1.25rem] text-[1rem] font-normal sm:leading-5 leading-4"
                      style={{
                        color: colors.gray2,
                        fontFamily: FONTFAMILY.normal,
                      }}
                    >
                      {addressDetail.address}
                    </h5>
                    <h5
                      className="sm:text-[1.25rem] text-[1rem] sm:font-normal font-light leading-5"
                      style={{
                        color: colors.gray2,
                        fontFamily: FONTFAMILY.normal,
                      }}
                    >
                      {addressDetail.number}
                    </h5>
                  </span>
                </div>
                <div className="flex flex-row justify-between items-end sm:flex sm:flex-row sm:justify-between sm:items-center mt-3 ml-[58px] sm:ml-[65px]">
                  <h6
                    className="sm:text-[1rem] text-[14px] font-normal sm:leading-4 leading-5"
                    style={{
                      color: '#598B82',
                      fontFamily: FONTFAMILY.normal,
                    }}
                  >
                    Default Address
                  </h6>
                  <span className="flex flex-row gap-6">
                    <EditIcon />
                    <DustBinIcon />
                  </span>
                </div>
              </section>
            ))}
            <span className="sm:hidden flx flex-row justify-center ml-[-1rem]">
              <CustomButton
                text={'Add New'}
                disabled={false}
                width={windowSize > 641 ? 464 : windowFit}
                onClick={() => setAddNewAddress(true)}
              />
            </span>
          </main>
        </>
      ) : (
        <div className={styles.addNewAddressBox}>
          <span className="hidden sm:flex sm:flex-row gap-6 items-center mb-10 cursor-pointer">
            <Previous onClick={() => setAddNewAddress(false)} />
            <h5
              style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.normal }}
              className="font-semibold sm:text-[1.25rem] leading-[1.625rem]"
            >
              Add New Address
            </h5>
          </span>
          <span
            className={`${styles.navBarAddAddress} sm:hidden flex flex-row gap-6 justify-start items-center mb-10 cursor-pointer`}
          >
            <PrevArrow onClick={() => setAddNewAddress(false)} />
            <h5
              style={{ color: colors.greenDeep, fontFamily: FONTFAMILY.normal }}
              className="font-semibold sm:text-[1.25rem] leading-[1.625rem]"
            >
              Add New Address
            </h5>
          </span>
          <section className="flex flex-col gap-6">
            <CustomTextInput
              width={windowSize < 641 ? windowFit : 464}
              placeholder={'Enter your first name'}
              label={'First name'}
              type="name"
              value={firstName}
              setValue={setFirstName}
            />
            <CustomTextInput
              width={windowSize < 641 ? windowFit : 464}
              placeholder={'Enter your last name'}
              label={'Last name'}
              type="name"
              value={lastName}
              setValue={setLastName}
            />
            <CustomTextInput
              width={windowSize < 641 ? windowFit : 464}
              placeholder={'Enter your address'}
              label={'Address'}
              type="text"
              value={location}
              setValue={setLocation}
            />
            <CustomTextInput
              width={windowSize < 641 ? windowFit : 464}
              placeholder={'Enter your phone number'}
              label={'Phone Number'}
              type="number"
              value={phoneNumber}
              setValue={setPhoneNumber}
            />

            <CustomTextInput
              width={windowSize < 641 ? windowFit : 464}
              // height={98}
              placeholder={''}
              label={'Additional information about your event'}
              type="text"
              value={additionalInformation}
              setValue={setAdditionalInformation}
            />
          </section>
          <div className="sm:mt-[19px] sm:pb-[43px] mt-9">
            <Checkbox
              className="sm:text-[#01100D] sm:leading-5 sm:text-[1rem] px-5"
              labelText="Set as default"
              style={{ fontFamily: FONTFAMILY.normal }}
            />
          </div>
          <div className=" mt-9">
            <CustomButton
              text={'Save'}
              disabled={false}
              width={windowSize < 641 ? windowFit : 464}
              // onClick={onButtonClick}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Addresses;
