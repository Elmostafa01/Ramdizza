import { Link } from "react-router-dom"

function Button({ children, disabled, to, color, text, hover, radius, animation, focusBg}) {
  
  if (to) {
    return (
            <Link to={to} className={`${animation} ${color} uppercase font-poppins font-semibold px-10 py-3 ${text}
            inline-block tracking-wide ${radius} ${hover} transition-colors duration-300
            focus:outline-none focus:ring focus:ring-yellow-200 ${focusBg} 
            disabled:cursor-not-allowed`}>
                {children}
            </Link>
        )
}

  return (
    <button to={to} disabled={disabled}
    className={`${animation} ${color} uppercase font-poppins font-semibold px-10 py-3 ${text}
    inline-block tracking-wide ${radius} ${hover} transition-colors duration-300
    focus:outline-none focus:ring focus:ring-yellow-200 ${focusBg} 
    disabled:cursor-not-allowed`}>
      {children}
    </button>
  )
}

export default Button
