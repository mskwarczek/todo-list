import styles from './Input.module.scss';

export const Input = ({
  id,
  type='text',
  name,
  value,
  handleChange,
  label,
  placeholder,
  required,
}) => {
  return (
    <input
      id={id}
      className={styles.input}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      aria-label={label}
      placeholder={placeholder}
      required={required}
    />
  );
};
