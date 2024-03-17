import { colors } from '../../utils';
import { Contact, Help, InstallLinks, Legal, ServiceLink } from './links';
import styles from '../../styles/Footer.module.css';
import {
  AppStore,
  EmailIcon,
  FBIcon,
  IGIcon,
  PhoneLine,
  PlayStore,
  TwitterIcon,
} from '../../assets';
import Router from 'next/router';
import Link from 'next/link';

const Footer = () => {
  return (
    <div
      className="md:flex md:justify-between items-start md:px-[82px] px-[24px] md:pt-[40px] pt-[60px] pb-[122px] md:pb-[56px]"
      style={{ backgroundColor: colors.offWhite }}
    >
      <div>
        <p
          className={`text-base mb-[21px] ${styles.linkTopic}`}
          style={{ color: colors.orange }}
        >
          KOUNTY
        </p>
        <p
          className={`text-sm pb-[24px] mb-[24px] border-b-[#EA5B31] border-b-[0.0313rem] ${styles.link}`}
          style={{ color: colors.gray1 }}
        >
          Good food is just a few clicks away
        </p>
        <p
          className={`text-sm mb-[32px] ${styles.link} `}
          style={{ color: colors.orange }}
        >
          © 2022 All Rights Reserved
        </p>
        <div>
          <p
            className={`text-base mb-[12px] ${styles.linkTopic}`}
            style={{ color: colors.orange }}
          >
            Follow us
          </p>
          <div className="flex md:gap-[20px] gap-[32px] md:mb-[0px] mb-[32px]  cursor-pointer">
            <FBIcon />
            <TwitterIcon />
            <IGIcon />
          </div>
        </div>
      </div>
      <div>
        <p
          className={`text-white text-base mb-[34px] ${styles.linkTopic}`}
          style={{ color: colors.orange }}
        >
          SERVICES
        </p>
        <div>
          {ServiceLink.map((link, index) => (
            <Link key={index} href={link.link}>
              <p
                key={index}
                className={`text-white text-sm mb-[17px] cursor-pointer ${styles.link}`}
                style={{ color: colors.gray1 }}
              >
                {link.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p
          className={`text-white text-base mb-[34px] ${styles.linkTopic}`}
          style={{ color: colors.orange }}
        >
          Help
        </p>
        <div>
          {Help.map((link, index) => (
            <Link key={index} href={link.link}>
              <p
                key={index}
                className={`text-white text-sm mb-[17px] cursor-pointer ${styles.link}`}
                style={{ color: colors.gray1 }}
              >
                {link.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p
          className={`text-white text-base mb-[34px] ${styles.linkTopic}`}
          style={{ color: colors.orange }}
        >
          Legal
        </p>
        <div>
          {Legal.map((link, index) => (
            <Link key={index} href={link.link}>
              <p
                key={index}
                className={`text-white text-sm mb-[17px] cursor-pointer ${styles.link}`}
                style={{ color: colors.gray1 }}
              >
                {link.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p
          className={`text-white text-base mb-[34px] ${styles.linkTopic}`}
          style={{ color: colors.orange }}
        >
          Contact Us
        </p>
        <div>
          {Contact.map((link, index) => (
            <div
              className="flex gap-2 items-center  mb-[17px] cursor-pointer"
              key={index}
            >
              {index === 0 ? (
                <EmailIcon />
              ) : (
                <PhoneLine className="stroke-[#EA5B31]" />
              )}
              <p
                className={`text-white text-sm ${styles.link}`}
                style={{ color: colors.gray1 }}
              >
                {link.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p
          className={`text-white text-base mb-[34px] ${styles.linkTopic}`}
          style={{ color: colors.orange }}
        >
          Install App
        </p>
        <div className="flex md:flex-col flex-row md:gap-[0.75rem] gap-[16px]">
          <div className="cursor-pointer">
            <AppStore />
          </div>
          <div className="cursor-pointer">
            <PlayStore />
          </div>
          {/* {InstallLinks.map((link, index) => (
          ))} */}
        </div>
      </div>
    </div>
  );
};
export default Footer;
