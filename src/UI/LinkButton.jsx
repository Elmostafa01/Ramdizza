import { Link , useNavigate} from "react-router-dom";


function LinkButton({children, to, mb}) {
    const navigate = useNavigate();

    if(to === '-1') return  <button className={`${mb} text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-200 px-4 py-2 rounded-full font-poppins font-semibold flex items-center justify-center gap-1`} onClick={() => navigate(-1)}>{children}</button>

  return (
    <Link 
        to={to}
        className={`${mb} text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-200 px-4 py-2 rounded-full font-poppins font-semibold flex items-center justify-center gap-1`}
    >
      {children}
    </Link>
  )
}

export default LinkButton
