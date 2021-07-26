type CustomButtonPropTypes = {
  className?: string
  buttonText: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
  color?: string,
  backgroundColor?: string,
  border?: string,
  borderRadius?: string,
  borderColor?: string,
  height?: string,
  width?: string
}

const CustomButton = ({
  className,
  buttonText, 
  onClick,
  color,
  backgroundColor,
  border,
  borderRadius,
  borderColor,
  height,
  width
}: CustomButtonPropTypes) => {
  return (
    <button 
      className={className}
      onClick={onClick}
      style={{
        backgroundColor,
        color,
        border,
        borderRadius,
        borderColor,
        height,
        width
      }}
    >
        { buttonText }
    </button>
  )
}

export default CustomButton;