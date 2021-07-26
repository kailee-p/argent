type CustomButtonPropTypes = {
  className?: string,
  buttonText: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  color?: string,
  backgroundColor?: string,
  border?: string,
  borderRadius?: string,
  borderColor?: string,
  height?: string,
  width?: string
  margin?: string,
  padding?: string
  fontSize?: string
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
  width,
  margin,
  padding,
  fontSize
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
        width,
        margin,
        padding,
        fontSize
      }}
    >
        { buttonText }
    </button>
  )
}

export default CustomButton;