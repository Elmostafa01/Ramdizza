import { Link , useNavigate} from "react-router-dom";


function LinkButton({children, to}) {
    const navigate = useNavigate();
    const className = "text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-200 px-4 py-2 rounded-full font-poppins font-semibold flex items-center justify-center gap-1"

    if(to === '-1') return  <button className={className} onClick={() => navigate(-1)}>{children}</button>

  return (
    <Link 
        to={to}
        className={className}
    >
      {children}
    </Link>
  )
}

export default LinkButton
