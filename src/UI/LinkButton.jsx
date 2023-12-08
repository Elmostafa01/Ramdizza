import { Link , useNavigate} from "react-router-dom";


function LinkButton({children, to, mb, top, left, position, text}) {
    const navigate = useNavigate();

    if(to === '-1') return  <button className={`${mb} ${position} ${top} ${left} group text-sm ${text} hover:text-slate-900 hover:bg-slate-200 px-4 py-2 rounded-full font-poppins font-[600] flex items-center justify-center gap-1`} onClick={() => navigate(-1)}>{children}</button>

  return (
    <Link 
        to={to}
        className={`${mb} ${position} ${top} ${left} move transition-colors group text-sm ${text} hover:text-slate-900 hover:bg-slate-200 px-4 py-2 rounded-full font-poppins font-[600] flex items-center justify-center gap-1`}
    >
      {children}
    </Link>
  )
}

export default LinkButton
