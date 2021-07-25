type CustomButtonPropTypes = {
  buttonText: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const CustomButton = ({ buttonText, onClick }: CustomButtonPropTypes) => {
  return (
    <button onClick={onClick}>
      { buttonText }
    </button>
  )
}

export default CustomButton;