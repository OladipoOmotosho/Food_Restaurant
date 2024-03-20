import { useEffect, useState } from 'react';
import { KountyGiftCard } from '../../../../assets';
import { FONTFAMILY, colors } from '../../../../utils';
import { CustomButton, CustomTextInput } from '../../../../components';
import { useAppSelector } from '../../../../state/hooks/Index';

const CheckoutBinance = () => {
  const [email, setEmail] = useState('');
  const [voucherCode, setVoucherCode] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [voucherSuccess, setVoucherSuccess] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [success, setSuccess] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [buttonText, setButtonText] = useState('Continue');
  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  // useEffect to check if email and voucher code is filled to enable the continue button
  useEffect(() => {
    if (email !== '' && voucherCode !== '') {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }, [email, voucherCode]);

  // function to accept the voucher code
  function voucherAccepted() {
    if (!voucherSuccess) {
      setVoucherSuccess(true);
      setOtpSuccess(true);
    } else {
      setVoucherSuccess(false);
      setOtpSuccess(false);
    }
  }

  // function to confirm the payment
  function paymentSuccesful() {
    if (otpSuccess) {
      setSuccess(true);
      setOtpSuccess(false);
      setVoucherSuccess(false);
      setButtonText('Go to Home');
    } else {
      setSuccess(false);
    }
  }

  return (
    <div className="pt-[100px] flex flex-row justify-center pb-[8.125rem]">
      <main>
        <span className="flex flex-row justify-center">
          <KountyGiftCard />
        </span>
        <section className="mt-[3.7125rem]">
          <span>
            <h3
              className="upperCase sm:text-[2rem] font-bold sm:leading-[2.625rem] "
              style={{ color: colors.green2, fontFamily: FONTFAMILY.bold }}
            >
              {!voucherSuccess && !otpSuccess && !success
                ? ' Welcome!'
                : voucherSuccess && !otpSuccess && !success
                ? 'Almost done!'
                : otpSuccess && !success
                ? 'Almost done!'
                : success && 'Success!'}
            </h3>
            <p
              className="mt-2 sm:text-[1rem] sm:leading-6 font-normal"
              style={{ color: colors.black, fontFamily: FONTFAMILY.normal }}
            >
              {!voucherSuccess && !otpSuccess && !success
                ? 'Just a few steps and you can claim your gift card'
                : voucherSuccess && !otpSuccess && !success
                ? 'Please enter the OTP sent to your email for verification'
                : otpSuccess && !success
                ? 'Please enter the OTP sent to your email for verification'
                : success && 'Your gift card has been added to your wallet'}
            </p>
          </span>
          <div className="mt-6 flex flex-col gap-6 items-start">
            {!voucherSuccess && !otpSuccess && !success ? (
              <>
                <CustomTextInput
                  placeholder={'Enter your email'}
                  value={email}
                  setValue={setEmail}
                  label={'Email'}
                />

                <CustomTextInput
                  placeholder={'Enter the unique code of your gift card'}
                  value={voucherCode}
                  setValue={setVoucherCode}
                  label={'Gift card code'}
                />
              </>
            ) : (
              ''
            )}
            {otpSuccess ? (
              <CustomTextInput
                placeholder={'Enter OTP'}
                value={otpCode}
                setValue={setOtpCode}
                label={'OTP'}
              />
            ) : (
              ''
            )}
            <div className="mt-10">
              <CustomButton
                text={buttonText}
                disabled={buttonEnabled ? false : true}
                paddingTop={12}
                paddingBottom={12}
                // paddingRight={197.5}
                // paddingLeft={197.5}
                width={windowSize < 641 ? windowFit : 464}
                onClick={!voucherSuccess ? voucherAccepted : paymentSuccesful}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CheckoutBinance;
