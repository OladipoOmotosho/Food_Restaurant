import { useState } from 'react';
import styles from './style/checkbox.module.css';

const Checkbox = ({ labelText, className }: any) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="sm:flex sm:flex-row sm:gap-4 items-center">
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label className={className}>{labelText}</label>
    </div>
  );
};

export default Checkbox;
