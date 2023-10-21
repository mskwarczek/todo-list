import { useState } from 'react';

import styles from './Checkbox.module.scss';

export const Checkbox = ({
  id,
  name,
  title,
  checked,
  handleChange,
  label,
}) => {
  const [animate, setAnimate] = useState(0)

  const handleCheckboxChange = () => {
    setAnimate(1)
    handleChange();
  }

  const handleAnimationEnd = () => {
    setAnimate(0);
  }

  return (
    <div>
      <input
        id={id}
        type='checkbox'
        name={name}
        title={title}
        checked={checked}
        onChange={handleCheckboxChange}
        className={styles.checkbox}
        animate={animate}
      />
      <label
        htmlFor={id}
        className={`${styles.label} ${checked ? styles.done : ''}`}
        title={title}
      >
        <svg
          width='14'
          height='14'
          viewBox='0 0 100 100'
          fill='none'
        >
          <rect
            className={styles.box}
            x='5'
            y='5'
            width='90'
            height='90'
            rx='16'
            ry='16'
            onAnimationEnd={handleAnimationEnd}
          />
          <path
            className={styles.check}
            d='M 19.733 48.145 L 41.698 74.504 L 81.236 26.4'
          />
        </svg>
        <span>{label}</span>
      </label>
    </div>
  );
};
