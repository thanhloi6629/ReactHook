
const Button:React.FC<any> = ({children,...props}) =>{
    return <button {...props}>
      {children}
    </button>
  }
export default Button;