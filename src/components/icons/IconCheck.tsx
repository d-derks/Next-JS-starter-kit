type IconCloseProps = {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
};

const IconCheck = ({
  width = "24px",
  height = "24px",
  color = "currentColor",
  className,
}: IconCloseProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 515.6 515.6"
      height={height}
      width={width}
    >
      <path
        fill={color}
        d="M90 261.6l117.1 117.3L432 154.3l-32.3-31.8-192.6 192.3-85.3-85.3L90 261.6z"
      />
    </svg>
  );
};

export default IconCheck;
