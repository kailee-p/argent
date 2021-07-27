import styles from '../../../css/CustomButton.module.css';

type CustomButtonPropTypes = {
  className?: string,
  buttonText: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  height: string,
  width: string,
  margin: string,
  padding: string,
}

const CustomButton = ({
  className,
  buttonText, 
  onClick,
  height,
  width,
  margin,
  padding
}: CustomButtonPropTypes) => {
  return (
    <button 
      className={`${styles.customButton} ${className}`}
      onClick={onClick}
      style={{
        height,
        width,
        margin,
        padding
      }}
    >
        { buttonText }
    </button>
  )
}

export default CustomButton;