import styles from "../style"

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rouned-[10px]`}>
      Get Started
    </button>
  )
}

export default Button