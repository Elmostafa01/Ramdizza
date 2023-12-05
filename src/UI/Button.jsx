function Button({ children, disabled, color, text, hover, radius, animation, focus, focusBg}) {
  return (
    <button disabled={disabled}
    className={`${animation} ${color} uppercase font-poppins font-semibold px-10 py-3 ${text}
    inline-block tracking-wide ${radius} ${hover} transition-colors duration-300
    focus:outline-none focus:ring focus:ring-yellow-200 ${focusBg} 
    disabled:cursor-not-allowed`}>
      {children}
    </button>
  )
}

export default Button
