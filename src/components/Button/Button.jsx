import styles from './Button.module.scss';

export const Button = ({
  text,
  title,
  label,
  handleClick,
}) => {
  return (
    <button
      className={styles.button}
      onClick={handleClick}
      title={title}
      aria-label={label}
    >
      {text}
    </button>
  );
};
