import { forwardRef } from 'react';

export const CloseIcon = forwardRef<React.ComponentRef<'svg'>, React.ComponentProps<'svg'>>(
  ({ color = 'currentColor', ...props }, ref) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.38621 16.8252C2.16552 17.049 2.16552 17.3846 2.38621 17.6084C2.6069 17.8322 2.93793 17.8322 3.15862 17.6084L9.88966 10.8951L16.731 17.8322C16.9517 18.0559 17.2828 18.0559 17.5034 17.8322C17.7241 17.6084 17.7241 17.2727 17.5034 17.049L10.6621 10.1119L17.8345 2.95105C18.0552 2.72727 18.0552 2.39161 17.8345 2.16783C17.6138 1.94406 17.2828 1.94406 17.0621 2.16783L9.88966 9.32867L2.93793 2.27972C2.71724 2.05594 2.38621 2.05594 2.16552 2.27972C1.94483 2.5035 1.94483 2.83916 2.16552 3.06294L9.22759 10.1119L2.38621 16.8252Z"
        fill={color}
      />
    </svg>
  ),
);
