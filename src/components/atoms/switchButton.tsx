interface SwitchButtonProps {
  variant: string;
  onClick: () => void;
  containerStyle?: string;
  sliderStyle?: string;
}

const SwitchButton = ({
  variant,
  onClick,
  containerStyle,
  sliderStyle,
}: SwitchButtonProps) => (
  <>
    <input
      type="checkbox"
      id={variant}
      className={sliderStyle}
      onClick={onClick}
    />
    <label htmlFor={variant} className={containerStyle} />
  </>
);

export default SwitchButton;
