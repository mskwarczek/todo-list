import styles from './Button.module.scss';

export const Button = ({
  text,
  icon,
  title,
  label,
  handleClick,
  disabled,
  smallScreenIconOnly,
}) => {
  return (
    <button
      className={styles.button}
      onClick={handleClick}
      title={title}
      aria-label={label}
      disabled={disabled}
    >
      {icon}
      <span className={`${styles.text} ${smallScreenIconOnly && icon ? styles.hideOnSmScreen : ''}`}>{text}</span>
    </button>
  );
};
