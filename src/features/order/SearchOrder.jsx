import { useState } from "react"
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSumbit(e) {
        e.preventDefault();
        if(!query) return;
        navigate(`/order/${query}`)
        setQuery("");
    }

  return (
  <form onSubmit={handleSumbit}>
    <input
    className="order py-2 px-4 rounded-full sm:w-80 bg-yellow-600
     placeholder:text-yellow-100 border-2 border-yellow-500
      focus:outline-none focus:bg-white focus:placeholder:text-slate-400
    focus:border-yellow-100 transition-colors font-poppins shadow-inset"
        placeholder='Search order'
        value={query}
        onChange={e=>setQuery(e.target.value)}
    />
  </form>
  )
}

export default SearchOrder
