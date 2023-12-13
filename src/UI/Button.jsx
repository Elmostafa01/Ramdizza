import { Link } from "react-router-dom"

function Button({ children, onClick ,disabled, to, color, text, hover, radius, animation, focusBg, weight, px, py}) {
  
  if (to) {
    return (
            <Link to={to} className={`${animation} ${color} uppercase font-poppins ${weight} ${px} ${py} ${text}}
            inline-block tracking-wide ${radius} ${hover} transition-colors duration-300
            focus:outline-none focus:ring focus:ring-yellow-200 ${focusBg} 
            disabled:cursor-not-allowed`}
            >
                {children}
            </Link>
        )
}

  if(onClick) {
    return (
      <button onClick={onClick} to={to} disabled={disabled}
      className={`${animation} ${color} uppercase font-poppins ${weight} ${px} ${py} ${text}
      inline-block tracking-wide ${radius} ${hover} transition-colors duration-300
      focus:outline-none ${focusBg} 
      disabled:cursor-not-allowed `}>
        {children}
      </button>
    )
  }

  return (
    <button to={to} disabled={disabled}
    className={`${animation} ${color} uppercase font-poppins ${weight} ${px} ${py} ${text}
    inline-block tracking-wide ${radius} ${hover} transition-colors duration-300
    focus:outline-none ${focusBg} 
    disabled:cursor-not-allowed `}>
      {children}
    </button>
  )
}

export default Button
