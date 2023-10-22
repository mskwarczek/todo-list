import styles from './Button.module.scss';

export const Button = ({
  text,
  title,
  label,
  handleClick,
  disabled,
}) => {
  return (
    <button
      className={styles.button}
      onClick={handleClick}
      title={title}
      aria-label={label}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
