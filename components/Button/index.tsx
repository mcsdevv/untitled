interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: any;
  text: string;
}

export default function Button({
  children,
  className,
  disabled = false,
  onClick,
  text,
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
        disabled ? "bg-gray-50 " : ""
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children || text}
    </button>
  );
}
