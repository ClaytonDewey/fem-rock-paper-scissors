import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'circle' | 'rules';
  icon?: 'rock' | 'paper' | 'scissors';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'circle',
  icon = 'paper',
  isLoading = false,
  className,
  ...rest
}) => {
  const baseClasses = 'btn';
  const variantClass = variant === 'circle' ? 'btn-circle' : 'btn-rules';
  const iconClass =
    icon === 'rock' ? 'rock' : icon === 'scissors' ? 'scissors' : 'paper';
  const loadingClass = isLoading ? 'btn-loading' : '';

  const combinedClassName = [
    baseClasses,
    variantClass,
    iconClass,
    loadingClass,
    className,
  ]
    .filter(Boolean) // Remove any empty strings
    .join(' ');

  return (
    <button
      className={combinedClassName}
      disabled={isLoading || rest.disabled}
      {...rest}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
export default Button;
