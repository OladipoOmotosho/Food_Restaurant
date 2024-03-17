import React from 'react';
import Image from 'next/image';
import styles from "../styles/index.module.css"
// import { ReusableComponent } from '../../../types';
const Options = ({ Title, Caption, Img }: ReusableComponent) => {
  return (
    <div className={styles.inline}>
      <div>
        <Image src={Img} alt="" className={styles.imageOptions} />
      </div>
      <div
        className={styles.planContainer}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <h3 id={styles.title}>{Title}</h3>
        <p id={styles.caption}>{Caption}</p>
      </div>
    </div>
  );
};

export default Options;
